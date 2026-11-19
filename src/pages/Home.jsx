export default function Home({ goTo }) {
  return (
    <section>
      <header className="d-flex flex-wrap align-items-center justify-content-between gap-3 py-3">
        <div>
          <div className="fs-3 fw-bold">
            KAVI <span className="text-warning-emphasis">TRAVELS</span>
          </div>
          <div className="small text-secondary">
            Tirunelveli · Cars · Vans · Autos
          </div>
        </div>

        <div className="d-flex gap-2">
          <button
            className="btn btn-outline-dark"
            onClick={() => goTo("account")}
          >
            Log in
          </button>

          <button
            className="btn btn-warning"
            onClick={() => goTo("booking")}
          >
            Book a ride
          </button>
        </div>
      </header>

      <div className="row align-items-center g-4 py-4 py-lg-5">
        <div className="col-lg-6">
          <p className="text-success fw-semibold text-uppercase small">
            Advance ₹2,000 · Confirm in minutes
          </p>

          <h1 className="display-4 fw-bold">
            Your route, booked and confirmed before you pack.
          </h1>

          <p className="lead">
            Tell us where you're headed, pick a car, van or auto,
            and pay an advance to reserve your vehicle.
          </p>

          <div className="d-flex flex-wrap gap-2">
            <button
              className="btn btn-dark btn-lg"
              onClick={() => goTo("booking")}
            >
              Plan a trip →
            </button>

            <button
              className="btn btn-outline-secondary btn-lg"
              onClick={() => goTo("customer")}
            >
              Track a booking
            </button>
          </div>
        </div>

        <div className="col-lg-6">
          <div className="card shadow-sm border-warning-subtle">
            <div className="card-body p-4">
              <div className="d-flex justify-content-between">
                <span className="font-monospace">KAVI-20481</span>
                <span className="badge text-bg-success">Confirmed</span>
              </div>

              <div className="row align-items-center text-center my-4">
                <div className="col">
                  <div className="fs-2 fw-bold">TVL</div>
                  <div className="small text-secondary">Tirunelveli</div>
                </div>

                <div className="col-4 fs-2">🚗 →</div>

                <div className="col">
                  <div className="fs-2 fw-bold">NKL</div>
                  <div className="small text-secondary">Kanyakumari</div>
                </div>
              </div>

              <div className="small text-secondary">
                312 KM · UP & DOWN · SEDAN
              </div>

              <hr />

              <div className="d-flex justify-content-between">
                <span>Advance paid: ₹2,000</span>
                <span>Balance: ₹8,000</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h2 className="h4 mt-4">Choose your vehicle</h2>

      <div className="row g-3">
        {[
          { icon: "🚗", name: "Car", description: "4-seater family trips" },
          { icon: "🚐", name: "Van", description: "7–10 seater group travel" },
          { icon: "🛺", name: "Auto", description: "Affordable local rides" },
          { icon: "🚌", name: "Bus", description: "Coming soon" },
        ].map((vehicle) => (
          <div className="col-6 col-lg-3" key={vehicle.name}>
            <div className="card h-100">
              <div className="card-body">
                <div className="fs-2">{vehicle.icon}</div>
                <h3 className="h5">{vehicle.name}</h3>
                <p className="text-secondary mb-0">
                  {vehicle.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <section className="py-4">
        <h2 className="h4">How booking works</h2>
        <div className="row g-3">
          <div className="col-md-4">
            <h3 className="h5">01 · Choose route</h3>
            <p>Enter your pickup, destination and travel date.</p>
          </div>

          <div className="col-md-4">
            <h3 className="h5">02 · Pay advance</h3>
            <p>Review the fare and reserve your vehicle.</p>
          </div>

          <div className="col-md-4">
            <h3 className="h5">03 · Travel</h3>
            <p>Complete your trip and settle the remaining fare.</p>
          </div>
        </div>
      </section>
    </section>
  );
}