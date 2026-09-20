import { useState } from "react";
import { motion } from "framer-motion";
import { CalendarDays, Clock, Users, Phone } from "lucide-react";

const timeSlots = [
  "6:00 AM", "7:00 AM", "8:00 AM", "9:00 AM", "10:00 AM", "11:00 AM",
  "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM",
  "6:00 PM", "7:00 PM", "8:00 PM", "9:00 PM",
];

const pricingInfo = [
  { time: "6 AM – 12 PM", price: "Rs. 1,500/hr", label: "Morning" },
  { time: "12 PM – 4 PM", price: "Rs. 1,200/hr", label: "Afternoon" },
  { time: "4 PM – 10 PM", price: "Rs. 2,000/hr", label: "Peak Hours" },
];

const BookingSection = () => {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedSlot, setSelectedSlot] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // This would connect to your MERN backend
    alert(`Booking request submitted!\nName: ${name}\nDate: ${selectedDate}\nTime: ${selectedSlot}\nPhone: ${phone}`);
  };

  return (
    <section id="booking" className="section-padding bg-hero-gradient">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary font-body text-sm tracking-[0.2em] uppercase mb-2">
            Reserve Your Spot
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold">
            Book Your <span className="text-gradient">Pitch</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Pricing cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-4"
          >
            <h3 className="font-heading text-2xl font-semibold mb-4 text-foreground">Pricing</h3>
            {pricingInfo.map((p) => (
              <div
                key={p.label}
                className="flex items-center justify-between p-5 rounded-lg bg-card border border-border"
              >
                <div>
                  <div className="font-heading text-lg font-semibold text-foreground">{p.label}</div>
                  <div className="font-body text-sm text-muted-foreground">{p.time}</div>
                </div>
                <div className="font-heading text-xl font-bold text-primary">{p.price}</div>
              </div>
            ))}
            <p className="font-body text-xs text-muted-foreground mt-4">
              * Prices may vary during tournaments and holidays. Contact us for group discounts.
            </p>
          </motion.div>

          {/* Booking form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3 p-6 md:p-8 rounded-lg bg-card border border-border shadow-card"
          >
            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              <div>
                <label className="font-body text-sm text-muted-foreground mb-1 flex items-center gap-2">
                  <Users className="w-4 h-4" /> Full Name
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  placeholder="Your name"
                  className="w-full px-4 py-3 rounded-md bg-secondary border border-border text-foreground font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 placeholder:text-muted-foreground"
                />
              </div>
              <div>
                <label className="font-body text-sm text-muted-foreground mb-1 flex items-center gap-2">
                  <Phone className="w-4 h-4" /> Phone Number
                </label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                  placeholder="+977 98XXXXXXXX"
                  className="w-full px-4 py-3 rounded-md bg-secondary border border-border text-foreground font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 placeholder:text-muted-foreground"
                />
              </div>
            </div>

            <div className="mb-6">
              <label className="font-body text-sm text-muted-foreground mb-1 flex items-center gap-2">
                <CalendarDays className="w-4 h-4" /> Select Date
              </label>
              <input
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                required
                className="w-full px-4 py-3 rounded-md bg-secondary border border-border text-foreground font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
            </div>

            <div className="mb-6">
              <label className="font-body text-sm text-muted-foreground mb-2 flex items-center gap-2">
                <Clock className="w-4 h-4" /> Select Time Slot
              </label>
              <div className="grid grid-cols-4 sm:grid-cols-4 gap-2">
                {timeSlots.map((slot) => (
                  <button
                    key={slot}
                    type="button"
                    onClick={() => setSelectedSlot(slot)}
                    className={`px-2 py-2 rounded-md font-body text-xs border transition-all duration-200 ${
                      selectedSlot === slot
                        ? "bg-primary text-primary-foreground border-primary"
                        : "bg-secondary border-border text-muted-foreground hover:border-primary/50"
                    }`}
                  >
                    {slot}
                  </button>
                ))}
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-4 rounded-md font-heading text-lg font-semibold bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
            >
              Confirm Booking
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
