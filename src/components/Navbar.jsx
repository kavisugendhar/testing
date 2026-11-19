const navItems = [
  { id: "home", label: "Home" },
  { id: "account", label: "Login / Register" },
  { id: "booking", label: "Book a Vehicle" },
  { id: "receipt", label: "Receipt" },
  { id: "customer", label: "Customer Dashboard" },
  { id: "agent", label: "Agent Dashboard" },
];

export default function Navbar({ screen, goTo }) {
  return (
    <nav className="navbar navbar-dark bg-dark sticky-top border-bottom border-warning border-3">
      <div className="container-fluid flex-nowrap">
        

        <div className="d-flex gap-2 overflow-x-auto">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => goTo(item.id)}
              className={`btn btn-sm text-nowrap ${
                screen === item.id
                  ? "btn-warning"
                  : "btn-outline-light"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}