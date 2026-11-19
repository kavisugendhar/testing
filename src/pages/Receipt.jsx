export default function Receipt({ booking, goTo }) {
  if (!booking) {
    return (
      <section className="text-center py-5">
        <h1 className="h3">No booking to display</h1>
        <p className="text-secondary">
          Create a booking before viewing its receipt.
        </p>
        <button
          className="btn btn-warning"
          onClick={() => goTo("booking")}
        >
          Book a vehicle
        </button>
      </section>
    );
  }

  const money = (amount) =>
    "₹" + Math.round(amount).toLocaleString("en-IN");

  const departure = new Date(
    `${booking.date}T${booking.time}`
  ).toLocaleString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <section>
      <div className="text-center py-4">
        <h1 className="display-6 fw-bold">Booking receipt</h1>
        <p className="text-secondary">
          Demo receipt preview. No payment has been processed.
        </p>
      </div>

      <div className="row justify-content-center pb-5">
        <div className="col-md-8 col-lg-6">
          <div className="card shadow-sm">
            <div className="card-header bg-dark text-white p-4 d-flex justify-content-between">
              <div>
                <h2 className="h4 mb-1">KAVI TRAVELS</h2>
                <div className="small text-white-50">
                  Booking receipt
                </div>
              </div>
              <span className="badge text-bg-success">Preview</span>
            </div>

            <div className="card-body p-4">
              <div className="d-flex justify-content-between">
                <span className="font-monospace">{booking.id}</span>
                <span className="badge text-bg-warning">Not paid</span>
              </div>

              <div className="row align-items-center text-center py-4">
                <div className="col">
                  <div className="fs-3 fw-bold">
                    {booking.from.slice(0, 3).toUpperCase()}
                  </div>
                  <div className="small">{booking.from}</div>
                </div>

                <div className="col-3 fs-3">{booking.icon}</div>

                <div className="col">
                  <div className="fs-3 fw-bold">
                    {booking.to.slice(0, 3).toUpperCase()}
                  </div>
                  <div className="small">{booking.to}</div>
                </div>

                <div className="col-12 small text-secondary mt-2">
                  {booking.distance} KM · UP & DOWN ·{" "}
                  {booking.vehicle.toUpperCase()}
                </div>
              </div>

              <div className="d-flex justify-content-between py-2 border-top">
                <span>Total fare</span>
                <strong>{money(booking.total)}</strong>
              </div>

              <div className="d-flex justify-content-between py-2">
                <span>Advance amount (not paid)</span>
                <strong>{money(booking.advance)}</strong>
              </div>

              <div className="d-flex justify-content-between py-2">
                <span>Balance due on trip</span>
                <strong>{money(booking.balance)}</strong>
              </div>

              <div className="d-flex justify-content-between py-2 border-top">
                <span>Departure</span>
                <strong>{departure}</strong>
              </div>
            </div>

            <div className="card-footer bg-white p-3 d-flex gap-2 no-print">
              <button
                className="btn btn-outline-dark w-50"
                onClick={() => window.print()}
              >
                Print receipt
              </button>

              <button
                className="btn btn-dark w-50"
                onClick={() => goTo("customer")}
              >
                My bookings
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}