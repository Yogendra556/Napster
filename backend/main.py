# app.py
import matplotlib
matplotlib.use("Agg")  # Use non-GUI backend for server
import matplotlib.pyplot as plt
import io
import base64

from fastapi import FastAPI, Request, Form
from fastapi.responses import HTMLResponse
from fastapi.templating import Jinja2Templates

app = FastAPI(title="Traffic Light Simulator")
templates = Jinja2Templates(directory="templates")

# --- Traffic light weights ---
weights = {"emergency": 10, "bus": 5, "car": 2.5, "bike": 1.5}

def calculate_lane_score(lane_data):
    return sum(count * weights[veh] for veh, count in lane_data.items())

def simulate_green_red(lanes, total_cycle_time=120):
    scores = {lane: calculate_lane_score(data) for lane, data in lanes.items()}
    total_score = sum(scores.values())
    if total_score == 0: 
        return []

    phases = []
    for lane, score in scores.items():
        proportion = score / total_score
        green_time = round(proportion * total_cycle_time, 2)
        phases.append({"lane": lane, "vehicles": dict(lanes[lane]), "score": score, "green_time": green_time})
    phases.sort(key=lambda x: x['score'], reverse=True)

    timeline = []
    for phase in phases:
        lane_status = {l: ("GREEN" if l == phase['lane'] else "RED") for l in lanes.keys()}
        timeline.append({"lane_status": lane_status, "green_time": phase['green_time'], "vehicles": phase['vehicles']})
    return timeline

def create_graph(timeline):
    lanes = list(timeline[0]['lane_status'].keys())
    colors = []
    times = []
    for lane in lanes:
        green_time = next((p['green_time'] for p in timeline if p['lane_status'][lane]=="GREEN"), 0)
        times.append(green_time)
        colors.append('green' if green_time>0 else 'red')

    plt.figure(figsize=(6,3))
    plt.barh(lanes, times, color=colors)
    plt.xlabel("Green Time (seconds)")
    plt.title("Traffic Signal Allocation")

    buf = io.BytesIO()
    plt.savefig(buf, format='png', bbox_inches='tight')
    plt.close()
    buf.seek(0)
    img_base64 = base64.b64encode(buf.getvalue()).decode()
    return img_base64

# --- Routes ---
@app.get("/", response_class=HTMLResponse)
def home(request: Request):
    return templates.TemplateResponse("index.html", {"request": request})

@app.post("/simulate", response_class=HTMLResponse)
def simulate(request: Request,
             N_emergency: int = Form(0), N_bus: int = Form(0), N_car: int = Form(0), N_bike: int = Form(0),
             E_emergency: int = Form(0), E_bus: int = Form(0), E_car: int = Form(0), E_bike: int = Form(0),
             S_emergency: int = Form(0), S_bus: int = Form(0), S_car: int = Form(0), S_bike: int = Form(0),
             W_emergency: int = Form(0), W_bus: int = Form(0), W_car: int = Form(0), W_bike: int = Form(0)):

    lanes = {
        "N": {"emergency": N_emergency, "bus": N_bus, "car": N_car, "bike": N_bike},
        "E": {"emergency": E_emergency, "bus": E_bus, "car": E_car, "bike": E_bike},
        "S": {"emergency": S_emergency, "bus": S_bus, "car": S_car, "bike": S_bike},
        "W": {"emergency": W_emergency, "bus": W_bus, "car": W_car, "bike": W_bike}
    }

    timeline = simulate_green_red(lanes)
    graph = create_graph(timeline) if timeline else None
    return templates.TemplateResponse("index.html", {"request": request, "graph": graph, "timeline": timeline})