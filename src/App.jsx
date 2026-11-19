import { useState } from "react";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Account from "./pages/Account";
import Booking from "./pages/Booking";
import Receipt from "./pages/Receipt";
import CustomerDashboard from "./pages/CustomerDashboard";
import AgentDashboard from "./pages/AgentDashboard";

export default function App() {
  const [screen, setScreen] = useState("home");
  const [booking, setBooking] = useState(null);

  function goTo(page) {
    setScreen(page);
    window.scrollTo({ top: 0, behavior: "auto" });
  }

  function renderScreen() {
    switch (screen) {
      case "account":
        return <Account goTo={goTo} />;

      case "booking":
        return (
          <Booking
            goTo={goTo}
            onConfirm={setBooking}
          />
        );

      case "receipt":
        return (
          <Receipt
            booking={booking}
            goTo={goTo}
          />
        );

      case "customer":
        return <CustomerDashboard goTo={goTo} />;

      case "agent":
        return <AgentDashboard goTo={goTo} />;

      default:
        return <Home goTo={goTo} />;
    }
  }

  return (
    <>
      <Navbar screen={screen} goTo={goTo} />

      <main className="container py-3 screen-container">
        {renderScreen()}
      </main>

      <footer className="container border-top mt-4 py-4 text-secondary small d-flex justify-content-between gap-2">
        <span>© 2026 KAVI Travels, Tirunelveli</span>
        <span>Bootstrap prototype · Demo data only</span>
      </footer>
    </>
  );
}