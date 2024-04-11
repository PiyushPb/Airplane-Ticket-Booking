import React from "react";
import HomepageCards from "./Components/HomepageCards";

const Admin = () => {
  const cardData = [
    {
      title: "Add new airline",
      description: "Add new airline to the database",
      to: "/admin/add-airline",
    },
    {
      title: "Add new flight",
      description: "Add new flight to the database",
      to: "/admin/add-flight",
    },
    {
      title: "Verify ticket",
      description: "Verify ticket and update status",
      to: "/admin/verify-ticket",
    },
  ];
  return (
    <div className="px-[30px] md:px-[30px]">
      <div className="mt-10 flex flex-wrap gap-5">
        {cardData.map((card, key) => {
          return (
            <HomepageCards
              key={key}
              title={card.title}
              description={card.description}
              to={card.to}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Admin;
