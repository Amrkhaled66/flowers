import { Icon } from "@iconify/react/dist/iconify.js";
import ProfileSideBar from "src/types/ProfileSideBar";

const Elements: ProfileSideBar[] = [
  {
    nameEn: "Personal information",
    nameAr: "المعلومات الشخصية",
    icon: <Icon icon="bi:person" width="24" height="24" />,
    link: "/profile/userInfo",
  },
  {
    nameEn: "Change password",
    nameAr: "تغيير كلمة المرور",
    icon: <Icon icon="heroicons-outline:lock-closed" width="24" height="24" />,
    link: "/profile/change-password",
  },
  {
    nameEn: "Addresses",
    nameAr: "العناوين",
    icon: <Icon icon="mdi:location" width="24" height="24" />,
    link: "/profile/addresses",
  },
  {
    nameEn: "My Orders",
    nameAr: "طلباتي",
    icon: <Icon icon="solar:delivery-outline" width="24" height="24" />,
    link: "/profile/orders",
  },
  {
    nameEn: "My Occasions",
    nameAr: "مناسباتي",
    icon: <Icon icon="solar:calendar-linear" width="24" height="24" />,
    link: "/profile/occasions",
  },
  {
    nameEn: "Ballora Points",
    nameAr: "نقاط بلورا",
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
    nameEn: "Ballora Ballance",
    nameAr: "رصيد بلورا",
    icon: (
      <Icon icon="majesticons:coins" width="24" height="24" />
    ),
    link: "/profile/ballance",
  },
  {
    nameEn: "Add New Address",
    nameAr: "أضافة عنوان جديد",
    icon: <Icon icon="mdi:favourite-border" width="24" height="24" />,
    link: "/profile/addresses/addNewAddress",
    show: false,
  },
  {
    nameEn: "Favorite",
    nameAr: "المفضلة",
    icon: <Icon icon="mdi:favourite-border" width="24" height="24" />,
    link: "/profile/favorites",
  },
];

export default Elements;
