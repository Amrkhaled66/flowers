import { ReactNode } from "react";
import BarElement from "src/components/ProfilePage/ProfileSideBar/BarElement";

import { Icon } from "@iconify/react/dist/iconify.js";

const Elements: {
  name: string;
  icon: ReactNode;
  link: string;
}[] = [
  {
    name: "My data",
    icon: <Icon icon="bi:person" width="24" height="24" />,
    link: "/profile/mydata",
  },
  {
    name: "Change password",
    icon: <Icon icon="heroicons-outline:lock-closed" width="24" height="24" />,
    link: "/profile/change-password",
  },
  {
    name: "Addresses",
    icon: <Icon icon="mdi:location" width="24" height="24" />,
    link: "/profile/addresses",
  },
  {
    name: "My Occasions",
    icon: <Icon icon="solar:calendar-linear" width="24" height="24" />,
    link: "/profile/occasions",
  },
  {
    name: "Ballora Wallet",
    icon: (
      <Icon
        icon="fluent:wallet-credit-card-16-regular"
        width="24"
        height="24"
      />
    ),
    link: "/profile/wallet",
  },
  {
    name: "Favourite",
    icon: <Icon icon="mdi:favourite-border" width="24" height="24" />,
    link: "/profile/favorites",
  },
  {
    name: "Invoices",
    icon: <Icon icon="stash:invoice-light" width="24" height="24" />,
    link: "/profile/invoices",
  },
];

const ProfileSideBar = () => {
  return (
    <div className="w-[22%] space-y-6">
      <div className="border-stroke space-y-1 rounded-sm border bg-white p-4">
        {Elements.map((element) => {
          return (
            <BarElement
              name={element.name}
              icon={element.icon}
              link={element.link}
            />
          );
        })}
      </div>
      <button className="border-stroke hover:border-text-main animate w-full rounded-sm border bg-white p-4">
        <div className="text-text-main flex gap-x-2 px-3 font-medium">
          <span>
            <Icon
              icon="material-symbols:logout-rounded"
              width="24"
              height="24"
            />
          </span>
          <span> Logout</span>
        </div>
      </button>
      <button className="border-stroke hover:border-text-main animate w-full rounded-sm border bg-white p-4">
        <div className="text-red flex gap-x-2 px-3 font-medium">
          <span>
            <Icon icon="fluent:delete-24-regular" width="24" height="24" />
          </span>
          <span> Delete Account</span>
        </div>
      </button>
    </div>
  );
};

export default ProfileSideBar;
