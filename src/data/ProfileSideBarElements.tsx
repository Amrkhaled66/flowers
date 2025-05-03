import { Icon } from "@iconify/react/dist/iconify.js";
import ProfileSideBar from "src/types/ProfileSideBar";

const Elements: ProfileSideBar[] = [
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

export default Elements;
