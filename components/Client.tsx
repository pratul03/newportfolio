import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { testimonials } from "@/data";

const Client = () => {
  return (
    <div className="py-20" id="projects">
      <h1 className="heading">
        Kind words from {""}
        <span className="text-purple">satisfied clients</span>
      </h1>
      <div className="flex flex-col items-center">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
      </div>
    </div>
  );
};

export default Client;
