import Map from "./Map";
import { Icon } from "@iconify/react/dist/iconify.js";
import Model from "src/components/ui/Model";
import { useState } from "react";

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

  return (
    <Model isOpen={isOpen} onClose={onClose}>
      <div className=" w-[90%] mx-auto lg:w-[600px] space-y-5 bg-white px-4 py-5">
        {/* Header */}
        <div className="flex items-center justify-between bg-white">
          <h1 className="text-text-main font-main text-xl font-semibold">
            Map
          </h1>
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
              Confirm
            </button>
            <button
              onClick={onClose}
              className="bg-main border-main animate text-main rounded-xl border bg-white px-4 py-3 font-bold"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </Model>
  );
};
export default MapModel;
