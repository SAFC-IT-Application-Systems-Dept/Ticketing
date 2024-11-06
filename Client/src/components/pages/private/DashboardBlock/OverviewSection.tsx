import { CardOneMolecules } from "@/components";
import React from "react";

const OverviewSection = () => {
  const tickets = [
    { count: 36, label: "Open Ticket", colorIndex: 0 },
    { count: 9, label: "Closed Ticket", colorIndex: 1 },
    { count: 18, label: "Pending Ticket", colorIndex: 3 },
    { count: 12, label: "User", colorIndex: 2 },
  ];
  return (
    <section className="py-3 grid grid-cols-1 gap-4 items-center md:grid-cols-2 lg:grid-cols-4">
      {tickets.map((ticket, index) => (
        <CardOneMolecules
          key={index}
          count={ticket.count}
          label={ticket.label}
          colorIndex={ticket.colorIndex}
        />
      ))}
    </section>
  );
};

export default OverviewSection;
