import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";
import { useTranslation } from "react-i18next";
const ProfileCard = ({
  onEdit,
  children,
  onDelete,
}: {
  onEdit: () => void;
  onDelete: () => void;
  children: React.ReactNode;
}) => {
  const { t } = useTranslation("shared");
  return (
    <div className="space-y-10">
      <div>{children}</div>
      <div className="flex items-center gap-x-3">
        <button
          onClick={onEdit}
          className="text-text-main bg-main-100 flex items-center gap-x-2 rounded-xl px-6 py-2 text-sm font-bold"
        >
          <Icon icon="lucide:edit" width="24" height="24" />
          <p>{t("edit")}</p>
        </button>
        <button
          onClick={onDelete}
          className="flex items-center gap-x-2 rounded-xl border border-[#F00] px-6 py-2 text-sm font-bold text-[#F00]"
        >
          <Icon icon="qlementine-icons:trash-16" width="24" height="24" />
          <p>{t("delete")}</p>
        </button>
      </div>
    </div>
  );
};

export default ProfileCard;
