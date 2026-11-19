import { useState } from "react";

export default function Account({ goTo }) {
  const [tab, setTab] = useState("login");

  function handleSubmit(event) {
    event.preventDefault();

    // Demo only. No authentication is performed.
    goTo("customer");
  }

  return (
    <section className="row g-0 shadow-sm rounded overflow-hidden my-4">
      <div className="col-lg-5 bg-dark text-white p-4 p-lg-5">
        <p className="text-warning small text-uppercase fw-semibold">
          Customer account
        </p>
        <h1 className="display-6 fw-bold">
          One account. Every trip you book.
        </h1>
        <p className="text-white-50">
          Save your details once, then book cars, vans and autos.
        </p>
      </div>

      <div className="col-lg-7 bg-white p-4 p-lg-5">
        <div className="nav nav-pills mb-4">
          <button
            className={`nav-link ${tab === "login" ? "active" : ""}`}
            onClick={() => setTab("login")}
          >
            Log in
          </button>
          <button
            className={`nav-link ${tab === "register" ? "active" : ""}`}
            onClick={() => setTab("register")}
          >
            Register
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          {tab === "register" && (
            <div className="mb-3">
              <label className="form-label">Full name</label>
              <input className="form-control" required />
            </div>
          )}

          <div className="mb-3">
            <label className="form-label">Mobile number</label>
            <input
              className="form-control"
              type="tel"
              required
            />
          </div>

          {tab === "register" && (
            <div className="mb-3">
              <label className="form-label">Home town</label>
              <input
                className="form-control"
                defaultValue="Tirunelveli"
                required
              />
            </div>
          )}

          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              className="form-control"
              type="password"
              minLength={tab === "register" ? 8 : undefined}
              required
            />
          </div>

          <button className="btn btn-dark w-100">
            {tab === "login" ? "Log in" : "Create account"}
          </button>
        </form>

        <p className="small text-secondary mt-3">
          Prototype only: authentication is not connected to a backend.
        </p>
      </div>
    </section>
  );
}