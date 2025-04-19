import { Link } from "react-router-dom";
import footerLinks from "src/data/footerLinks";

import { Icon } from "@iconify/react/dist/iconify.js";
import { useState } from "react";
const SiteMap = () => {
  const [activeList, setActiveList] = useState<string | null>(null);
  return (
    <div className="flex flex-1 flex-col justify-between  text-left text-white lg:flex-row">
      {footerLinks.map((link) => (
        <div className="space-y-7" key={link.title}>
          <div
            onClick={() => {
              setActiveList(activeList === link.title ? null : link.title);
            }}
            className={`flex justify-between border-b border-white lg:border-none ${activeList === link.title && "border-none"}`}
          >
            <p className="pb-3 font-bold">{link.title}</p>
            <div className="block lg:hidden">
              <Icon icon="iconamoon:arrow-down-2-bold" width="24" height="24" />
            </div>
          </div>
          <div
            className={` ${activeList === link.title ? "max-h-[200px] mb-7" : "max-h-0"} lg:max-h-[200px]  flex flex-col space-y-3 overflow-hidden transition-all duration-300`}
          >
            {link.links.map((subLink) => (
              <Link to={subLink.to || "/"} key={subLink.name}>
                {subLink.name}
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SiteMap;
