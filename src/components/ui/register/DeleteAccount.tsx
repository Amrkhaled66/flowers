import { Icon } from "@iconify/react/dist/iconify.js";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import DeleteAccountModel from "./DeleteAccountModel";
const DeleteAccount = () => {
  const { i18n: { language } } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <DeleteAccountModel isOpen={isOpen} onClose={() => setIsOpen(false)} />
      <button onClick={() => setIsOpen(true)} className="hover:lg:bg-main-100 flex items-center animate bg-main-50 w-full rounded-xl p-4">
        <div className="text-red flex gap-x-2 px-3 font-medium">
          <span>
            <Icon icon="fluent:delete-24-regular" width="24" height="24" />
          </span>
          <span>{language === "ar" ? "مسح الحساب" : "Delete Account"}</span>
        </div>
      </button>
    </>
  );
};

export default DeleteAccount;
