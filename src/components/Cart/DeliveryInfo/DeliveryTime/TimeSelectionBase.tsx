import { Icon } from "@iconify/react";
import clsx from "clsx";
import Button from "src/components/ui/Button";
import { useTranslation } from "react-i18next";

interface TimeSelectionBaseProps {
  onClose: () => void;
  onConfirm: () => void;
  isConfirmDisabled: boolean;
  title: string;
  children: React.ReactNode;
}

const TimeSelectionBase = ({
  onClose,
  onConfirm,
  isConfirmDisabled,
  title,
  children,
}: TimeSelectionBaseProps) => {
  const { t } = useTranslation("deliveryInfo");


//   const {  } = useDeliveryTimeLogic();

  return (
    <div className="text-text-main mx-auto max-h-[80vh] w-full space-y-8 overflow-y-auto rounded-xl bg-white px-4 py-5 text-center lg:w-[600px]">
      {/* Header */}
      <div className="flex items-center justify-between">
        <p className="text-sm font-semibold sm:text-xl">{title}</p>
        <button
          onClick={onClose}
          className="border-stroke rounded-xl border p-1"
        >
          <Icon icon="material-symbols:close-rounded" width="24" height="24" />
        </button>
      </div>

      {children}
      {/* Footer */}
      <div className="flex gap-x-6">
        <Button
          disabled={isConfirmDisabled}
          text={t("time.model.confirm")}
          className={clsx("w-full !py-3 text-white", {
            "bg-main": !isConfirmDisabled,
            "!cursor-not-allowed opacity-60": isConfirmDisabled,
          })}
          onClick={onConfirm}
        />
        <Button
          text={t("time.model.cancel")}
          className="text-main border-main w-full border bg-white !py-3 hover:!bg-white focus:!bg-white"
          onClick={onClose}
        />
      </div>
    </div>
  );
};

export default TimeSelectionBase;
