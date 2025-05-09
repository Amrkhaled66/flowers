import { Icon } from "@iconify/react/dist/iconify.js";
import ProfileSideBar from "src/types/ProfileSideBar";

const Elements: ProfileSideBar[] = [
  {
    name: "Personal information",
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
    name: "My Orders",
    icon: <Icon icon="solar:delivery-outline" width="24" height="24" />,
    link: "/profile/orders",
  },
  {
    name: "My Occasions",
    icon: <Icon icon="solar:calendar-linear" width="24" height="24" />,
    link: "/profile/occasions",
  },
  {
    name: "Ballora Points",
    icon: (
      <Icon
        icon="fluent:wallet-credit-card-16-regular"
        width="24"
        height="24"
      />
    ),
    link: "/profile/points",
  },
  {
    name: "Add New Address",
    icon: <Icon icon="mdi:favourite-border" width="24" height="24" />,
    link: "/profile/addresses/addNewAddress",
    show: false,
  },
  {
    name: "Favorite",
    icon: <Icon icon="mdi:favourite-border" width="24" height="24" />,
    link: "/profile/favorites",
  },
];

export default Elements;
