import {useState } from "react";

const initialBookings =  [
    {
        id: "Kavi-1010",
        route: "Tirunelveli -> Kannyakumari",
        details : "112 km Car 04 Sep, 6.30 Am",
        status : "upcoming",
        label : "Confirmed",
        amount : "2,000 paid ",
    },
    {
        id : "KAVI -2020",
        route : "Tirunelveli -> Courtallam",
        details : "90km Van 21 sep 7.00 AM",
        status : "upcoming",
        label : "Advance due",
        amount : "0 paid Pay to Confirm  ",

    },
    {
        id : "SAI -2232",
        route : " Vannarpettai -> Tenkasi  ",
        details : " 100 km Van 15 Aug 6.35 PM ",
        status : " completed ",
        label : " completed",
        amount : " ₹240 total  Fully paid "
    }
];

const auc = ["all", "upcoming ", "completed"]

const static_booking = [

    ["Upcoming trips" , "3"],
    ["Completed trips" , "8"],
    ["Total spent", "56,000"],
    ["Cancelled trips", "0"]
]

export default function CustomerDashboard ({ goto}) {
    const [filter , setFiller] = useState("all");

    const bookings = initialBookings.filter(
        (booking) => 
            filter === "all" || booking.status === filter
    );

    return (
        <section>
            <header className="d-flex justify-content -between align-item-items-center py-3">
                <h1 className="h3 fw-bold">KAVI TRAVELS</h1>
                <button 
                    className="btn btn-warning"
                    onClick={() => goto("booking")}
                    >
                        +New booking
                    </button>
            </header>

            <div className = "card mb-4">
                <div className="card-body">
                    <h2 className="h5">Kavi .K</h2>
                    <p className = "text-secondary mb-0">
                        Customer . Tirunelveli
                     </p>
                </div>
            </div>

        <div className="row g-3 mb-4">
        
             
        </div>

        </section>
    )
}