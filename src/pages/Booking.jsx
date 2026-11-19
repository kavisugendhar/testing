import { useState } from "react";

const vehicles = [
  { name: "Car", rate: 33, icon: "🚗" },
  { name: "Van", rate: 40, icon: "🚐" },
  { name: "Auto", rate: 20, icon: "🛺" },
];

const money = (amount) =>
  "₹" + Math.round(amount).toLocaleString("en-IN");

export default function Booking({ goTo, onConfirm }) {
  const [from, setFrom] = useState("Tirunelveli");
  const [to, setTo] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("06:30");
  const [distance, setDistance] = useState(312);
  const [vehicle, setVehicle] = useState(vehicles[0]);

  const total = distance * vehicle.rate;
  const advance = Math.min(
    total,
    Math.max(1000, Math.round(total * 0.2 / 100) * 100)
  );
  const balance = total - advance;

  function confirmBooking(event) {
    event.preventDefault();

    const booking = {
      id: "KAVI-" + Math.random().toString(36).slice(2, 7).toUpperCase(),
      from,
      to,
      date,
      time,
      distance,
      vehicle: vehicle.name,
      icon: vehicle.icon,
      total,
      advance,
      balance,
    };

    onConfirm(booking);
    goTo("receipt");
  }

  return (
    <section>
      <header className="d-flex justify-content-between align-items-center py-3">
        <button
          className="btn btn-link text-dark text-decoration-none p-0 fw-bold fs-4"
          onClick={() => goTo("home")}
        >
          KAVI TRAVELS
        </button>
        <span className="badge text-bg-secondary">
          Step 1 of 2 · Trip details
        </span>
      </header>

      <h1 className="display-6 fw-bold">Book a vehicle</h1>
      <p className="text-secondary">
        Fill in your route and review the estimated fare.
      </p>

      <form onSubmit={confirmBooking}>
        <div className="row g-4 pb-5">
          <div className="col-lg-7">
            <div className="card">
              <div className="card-body p-4">
                <h2 className="h5 mb-3">Route</h2>

                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Pickup location</label>
                    <input
                      className="form-control"
                      value={from}
                      onChange={(e) => setFrom(e.target.value)}
                      required
                    />
                  </div>

                  <div className="col-md-6 mb-3">
                    <label className="form-label">Drop location</label>
                    <input
                      className="form-control"
                      placeholder="e.g. Kanyakumari"
                      value={to}
                      onChange={(e) => setTo(e.target.value)}
                      required
                    />
                  </div>

                  <div className="col-md-6 mb-3">
                    <label className="form-label">Travel date</label>
                    <input
                      className="form-control"
                      type="date"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      min={new Date().toLocaleDateString("en-CA")}
                      required
                    />
                  </div>

                  <div className="col-md-6 mb-3">
                    <label className="form-label">Pickup time</label>
                    <input
                      className="form-control"
                      type="time"
                      value={time}
                      onChange={(e) => setTime(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <h2 className="h5 mt-3 mb-3">Vehicle type</h2>

                <div className="row g-2 mb-4">
                  {vehicles.map((item) => (
                    <div className="col-4" key={item.name}>
                      <button
                        type="button"
                        onClick={() => setVehicle(item)}
                        className={`btn w-100 vehicle-option ${
                          vehicle.name === item.name
                            ? "btn-warning selected"
                            : "btn-outline-secondary"
                        }`}
                      >
                        <span className="fs-3 d-block">
                          {item.icon}
                        </span>
                        <strong>{item.name}</strong>
                        <span className="d-block small">
                          ₹{item.rate} / km
                        </span>
                      </button>
                    </div>
                  ))}
                </div>

                <label className="form-label d-flex justify-content-between">
                  <span>Estimated up & down distance</span>
                  <strong>{distance} km</strong>
                </label>

                <input
                  className="form-range"
                  type="range"
                  min="20"
                  max="600"
                  step="2"
                  value={distance}
                  onChange={(e) => setDistance(Number(e.target.value))}
                />

                <p className="form-text">
                  Distance is manually estimated, not calculated using live maps.
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-5">
            <div className="card shadow-sm">
              <div className="card-body p-4">
                <h2 className="h5 mb-3">Fare estimate</h2>

                <div className="d-flex justify-content-between py-3 border-bottom">
                  <div>
                    <div className="fs-5 fw-bold">
                      {from.slice(0, 3).toUpperCase()} →{" "}
                      {to ? to.slice(0, 3).toUpperCase() : "???"}
                    </div>
                    <div className="small text-secondary">
                      {distance} km · {vehicle.name}
                    </div>
                  </div>
                  <span className="fs-3">{vehicle.icon}</span>
                </div>

                <div className="d-flex justify-content-between py-2">
                  <span>Base fare</span>
                  <strong>{money(total)}</strong>
                </div>

                <div className="d-flex justify-content-between py-2">
                  <span>Advance to confirm</span>
                  <strong>{money(advance)}</strong>
                </div>

                <div className="d-flex justify-content-between py-2 border-bottom">
                  <span>Balance after trip</span>
                  <strong>{money(balance)}</strong>
                </div>

                <div className="d-flex justify-content-between fs-5 fw-bold py-3">
                  <span>Pay now</span>
                  <span>{money(advance)}</span>
                </div>

                <button className="btn btn-warning btn-lg w-100">
                  Continue to receipt
                </button>

                <p className="small text-secondary text-center mt-3 mb-0">
                  Demo only: no real payment is processed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </form>
    </section>
  );
}