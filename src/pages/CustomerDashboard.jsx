
import { useState } from "react";

const auc = ["all", "upcoming", "completed"];

const agents = [
  {
    id: 1,
    name: "Meena S.",
    location: "Tirunelveli",
    upcoming: 2,
    completed: 5,
    spent: 48600,
    cancelled: 0,
    bookings: [
      {
        id: "KAVI-20481",
        route: "Tirunelveli → Kanyakumari",
        details: "312 km · Car · 04 Sep, 6:30 AM",
        status: "upcoming",
        label: "Confirmed",
        amount: "₹2,000 paid · ₹8,296 due",
      },
      {
        id: "KAVI-20475",
        route: "Tirunelveli → Courtallam",
        details: "90 km · Van · 21 Sep, 7:00 AM",
        status: "upcoming",
        label: "Advance due",
        amount: "₹0 paid · Pay to confirm",
      },
      {
        id: "KAVI-19980",
        route: "Town local — Junction to home",
        details: "8 km · Auto · 12 Aug, 5:45 PM",
        status: "completed",
        label: "Completed",
        amount: "₹240 total · Fully paid",
      },
    ],
  },
  {
    id: 2,
    name: "Ravi K.",
    location: "Madurai",
    upcoming: 3,
    completed: 8,
    spent: 72500,
    cancelled: 1,
    bookings: [
      {
        id: "KAVI-20501",
        route: "Madurai → Rameswaram",
        details: "170 km · Car · 25 Sep, 8:00 AM",
        status: "upcoming",
        label: "Confirmed",
        amount: "₹3,000 paid · ₹5,500 due",
      },
      {
        id: "KAVI-19801",
        route: "Madurai → Trichy",
        details: "135 km · Sedan · 10 Aug, 9:00 AM",
        status: "completed",
        label: "Completed",
        amount: "₹4,500 total · Fully paid",
      },
    ],
  },
  {
    id: 3,
    name: "Priya R.",
    location: "Chennai",
    upcoming: 1,
    completed: 4,
    spent: 32500,
    cancelled: 0,
    bookings: [
      {
        id: "KAVI-20510",
        route: "Chennai → Pondicherry",
        details: "150 km · Sedan · 28 Sep, 7:00 AM",
        status: "upcoming",
        label: "Confirmed",
        amount: "₹1,500 paid · ₹4,000 due",
      },
    ],
  },
];

const statsFor = (agent) => [
  ["Upcoming trips", agent.upcoming],
  ["Completed trips", agent.completed],
  ["Total spent", `₹${agent.spent.toLocaleString("en-IN")}`],
  ["Cancelled trips", agent.cancelled],
];

export default function CustomerDashboard({ goTo }) {
  const [selectedAgent, setSelectedAgent] = useState(null);
  const [filter, setFilter] = useState("all");

  const activeAgent = agents.find(
    (agent) => agent.id === selectedAgent
  );

  const bookings = activeAgent
    ? activeAgent.bookings.filter(
        (booking) =>
          filter === "all" || booking.status === filter
      )
    : [];

  return (
    <section>
      <header className="d-flex justify-content-between align-items-center py-3">
        <h1 className="h3 fw-bold">KAVI TRAVELS</h1>

        <button
          className="btn btn-warning"
          onClick={() => goTo("booking")}
        >
          + New booking
        </button>
      </header>

      {!activeAgent ? (
        <>
          <div className="card mb-4">
            <div className="card-body">
              <h2 className="h5">Customer Dashboard</h2>
              <p className="text-secondary mb-0">
                Select an agent to view their trips and booking details.
              </p>
            </div>
          </div>

          <h2 className="h5 mb-3">Agents</h2>

          <div className="card mb-4">
            <div className="table-responsive">
              <table className="table table-hover align-middle mb-0">
                <thead className="table-light">
                  <tr>
                    <th> S.No </th>
                    <th>Agent Name</th>
                    <th>Location</th>
                    <th>Upcoming Trips</th>
                    <th>Completed Trips</th>
                    <th>Action</th>
                  </tr>
                </thead>

                <tbody>
                  {agents.map((agent, index) => (
                    <tr key={agent.id}>
                      <td>{index + 1}</td>
                      <td className="fw-semibold">{agent.name}</td>
                      <td>{agent.location}</td>
                      <td>{agent.upcoming}</td>
                      <td>{agent.completed}</td>
                      <td>
                        <button
                          className="btn btn-warning btn-sm"
                          onClick={() => {
                            setSelectedAgent(agent.id);
                            setFilter("all");
                          }}
                        >
                          View
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <h2 className="h5 mb-3">My bookings</h2>
          <p className="text-secondary">
            Select an agent above and click View to see their bookings.
          </p>
        </>
      ) : (
        <>
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h2 className="h4 mb-0">Agent Details</h2>

            <button
              className="btn btn-outline-dark"
              onClick={() => setSelectedAgent(null)}
            >
              ← Back to Agents
            </button>
          </div>

          <div className="card mb-4">
            <div className="card-body">
              <h3 className="h5">{activeAgent.name}</h3>
              <p className="text-secondary mb-0">
                Agent · {activeAgent.location}
              </p>
            </div>
          </div>

          <div className="row g-3 mb-4">
            {statsFor(activeAgent).map(([label, value]) => (
              <div className="col-md-6 col-lg-3" key={label}>
                <div className="card h-100">
                  <div className="card-body">
                    <div className="small text-secondary">
                      {label}
                    </div>
                    <div className="fs-3 fw-bold">{value}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <h2 className="h5 mb-3">
            {activeAgent.name}'s Bookings
          </h2>

          <div className="btn-group btn-group-sm mb-3">
            {auc.map((item) => (
              <button
                key={item}
                className={`btn ${
                  filter === item
                    ? "btn-dark"
                    : "btn-outline-dark"
                }`}
                onClick={() => setFilter(item)}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </button>
            ))}
          </div>

          <div className="d-grid gap-2">
            {bookings.length > 0 ? (
              bookings.map((booking) => (
                <div className="card" key={booking.id}>
                  <div className="card-body d-md-flex justify-content-between gap-3">
                    <div>
                      <div className="fw-bold">
                        {booking.route}
                      </div>
                      <div className="small text-secondary">
                        {booking.id} · {booking.details}
                      </div>
                    </div>

                    <div className="mt-2 mt-md-0 text-md-end">
                      <span
                        className={`badge ${
                          booking.status === "completed"
                            ? "text-bg-secondary"
                            : booking.label === "Confirmed"
                            ? "text-bg-success"
                            : "text-bg-warning"
                        }`}
                      >
                        {booking.label}
                      </span>

                      <div className="small mt-1">
                        {booking.amount}
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="alert alert-light border">
                No {filter === "all" ? "" : filter} bookings found.
              </div>
            )}
          </div>
        </>
      )}
    </section>
  );
}
