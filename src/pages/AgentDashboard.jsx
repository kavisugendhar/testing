import { useState } from "react";

const trips = [
  {
    date: "04 Sep",
    customer: "Meena S.",
    route: "Tirunelveli → Kanyakumari",
    distance: "312 km",
    fare: "₹10,296",
    status: "upcoming",
  },
  {
    date: "06 Sep",
    customer: "Arun P.",
    route: "Tirunelveli → Madurai",
    distance: "250 km",
    fare: "₹8,250",
    status: "upcoming",
  },
  {
    date: "27 Aug",
    customer: "Suresh N.",
    route: "Tirunelveli → Rameswaram",
    distance: "380 km",
    fare: "₹12,540",
    status: "completed",
  },
];

export default function AgentDashboard({ goTo }) {
  const [filter, setFilter] = useState("all");

  const filteredTrips = trips.filter(
    (trip) => filter === "all" || trip.status === filter
  );

  return (
    <section>
      <header className="d-flex justify-content-between align-items-center py-3">
        <h1 className="h3 fw-bold">KAVI TRAVELS</h1>
        <span className="badge text-bg-secondary">
          Agent dashboard
        </span>
      </header>

      <div className="card mb-4">
        <div className="card-body">
          <h2 className="h5">Ravi Kumar</h2>
          <p className="text-secondary mb-0">
            Agent · Vehicle: Van · Rating: 4.8 ★
          </p>
        </div>
      </div>

      <div className="row g-3 mb-4">
        {[
          ["Trips this month", "11"],
          ["Monthly earnings", "₹34,200"],
          ["Completed trips", "8"],
        ].map(([label, value]) => (
          <div className="col-md-4" key={label}>
            <div className="card h-100">
              <div className="card-body">
                <div className="small text-secondary">{label}</div>
                <div className="fs-3 fw-bold">{value}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="d-flex flex-wrap justify-content-between align-items-center gap-2 mb-3">
        <h2 className="h5 mb-0">Assigned trips</h2>

        <div className="btn-group btn-group-sm">
          {["all", "upcoming", "completed"].map((item) => (
            <button
              key={item}
              className={`btn ${
                filter === item ? "btn-dark" : "btn-outline-dark"
              }`}
              onClick={() => setFilter(item)}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </button>
          ))}
        </div>
      </div>

      <div className="table-responsive">
        <table className="table table-hover align-middle bg-white">
          <thead className="table-light">
            <tr>
              <th>Date</th>
              <th>Customer</th>
              <th>Route</th>
              <th>Distance</th>
              <th>Fare</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {filteredTrips.map((trip) => (
              <tr key={`${trip.date}-${trip.customer}`}>
                <td>{trip.date}</td>
                <td>{trip.customer}</td>
                <td>{trip.route}</td>
                <td>{trip.distance}</td>
                <td>{trip.fare}</td>
                <td>
                  <span
                    className={`badge ${
                      trip.status === "completed"
                        ? "text-bg-secondary"
                        : "text-bg-success"
                    }`}
                  >
                    {trip.status === "completed"
                      ? "Completed"
                      : "Confirmed"}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <button
        className="btn btn-outline-dark"
        onClick={() => goTo("home")}
      >
        Back to Home
      </button>
    </section>
  );
}