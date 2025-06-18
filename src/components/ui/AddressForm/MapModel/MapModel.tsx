import Map from "./Map";
import { Icon } from "@iconify/react/dist/iconify.js";
import Model from "src/components/ui/Model";
import { useState } from "react";
import { useTranslation } from "react-i18next";
const MapModel = ({
  isOpen,
  onClose,
  onConfirmLocation,
}: {
  isOpen: boolean;
  onClose: () => void;
  onConfirmLocation: (address: string) => void;
}) => {
  const [address, setAddress] = useState<string>("");
const { t } = useTranslation("profile");
const { t: tShared } = useTranslation("shared");

  return (
    <Model isOpen={isOpen} onClose={onClose}>
      <div className="mx-auto w-[90%] space-y-5 bg-white px-4 py-5 lg:w-[600px]">
        {/* Header */}
        <div className="flex items-center justify-between bg-white">
          <h1 className="text-text-main text-xl font-semibold">{t("address.map.title")}</h1>
          {/* Close Button */}
          <button
            onClick={onClose}
            className="border-stroke flex h-[36px] w-[36px] items-center justify-center rounded-sm border"
          >
            <Icon
              icon="material-symbols:close-rounded"
              width="24"
              height="24"
            />
          </button>
        </div>

        <div className="space-y-8">
          <Map address={address} setAddress={setAddress} />
          {/* Action Buttons */}
          <div className="grid grid-cols-2 gap-x-2">
            <button
              onClick={() => onConfirmLocation(address)}
              className="bg-main hover:bg-main-300 animate rounded-xl px-4 py-3 font-bold text-white"
            >
              {tShared("confirm")}
            </button>
            <button
              onClick={onClose}
              className="bg-main border-main animate text-main rounded-xl border bg-white px-4 py-3 font-bold"
            >
              {tShared("cancel")}
            </button>
          </div>
        </div>
      </div>
    </Model>
  );
};
export default MapModel;
