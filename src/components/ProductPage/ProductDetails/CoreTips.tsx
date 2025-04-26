import Section from "./Section";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useState } from "react";
const CoreTips = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="space-y-5 lg:space-y-[32px]">
      <Section head="Flower Type">
        <ul>
          <li>- Replenish the water frequently.</li>
          <li>- Change the water entirely every 2-3 days.</li>
          <li>
            - Trim at least a half inch of stem off your flowers before you put
            them in a vase and each time you change the water.
          </li>
          <li>- Replenish the water frequently.</li>
        </ul>
      </Section>
      <Section head="Note:">
        <p
          className={` ${isOpen ? "max-h-[200px]" : "line-clamp-2 max-h-[50]"} transition-all duration-300`}
        >
          Flowers can last up to 7 days if the above care instructions are
          followed and well maintained, the color of the flowers may varyFlowers
          can last up to 7 days if the above care instructions are followed and
          well maintained, the color of the flowers may vary
        </p>
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="text-main flex items-center gap-x-1 font-bold"
        >
          <span>{isOpen ? "See Less" : "See More"}</span>
          <span>
            <Icon
              icon="iconamoon:arrow-down-2-bold"
              className={`transition-all duration-300 ${isOpen ? "rotate-180" : ""}`}
              width="24"
              height="24"
            />
          </span>
        </button>
      </Section>
    </div>
  );
};

export default CoreTips;
