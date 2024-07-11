import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";

const Grid = () => {
  return (
    <section id="about">
      <BentoGrid>
        {[{ title: "Title1", description: "Desc1", idx: 1 }].map(
          (item) => (
            <BentoGridItem
              id={item.idx}
              key={item.idx}
              title={item.title}
              description={item.description}
            />
          )
        )}
      </BentoGrid>
    </section>
  );
};

export default Grid;
