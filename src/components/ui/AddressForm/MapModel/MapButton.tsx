import { useState } from "react";
import mapImg from "src/assets/map.png";
import MapModel from "./MapModel";

interface MapButtonProps {
  onLocationSelected: (address: string) => void;
}

export default function MapButton({ onLocationSelected }: MapButtonProps) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const openDialog = (e?: React.MouseEvent) => {
    e?.preventDefault();
    setIsDialogOpen(true);
  };

  const closeDialog = () => setIsDialogOpen(false);

  // Function to handle location selection from the map modal
  const handleLocationConfirm = (address: string) => {
    onLocationSelected(address);
    closeDialog();
  };

  return (
    <div className="">
      <div
        className="flex h-[100px] w-full items-center justify-center rounded-xl"
        style={{
          background: `linear-gradient(0deg, rgba(0, 0, 0, 0.12) 0%, rgba(0, 0, 0, 0.12) 100%), url(${mapImg}) lightgray 50% / cover no-repeat`,
        }}
      >
        <button
          onClick={openDialog}
          className="bg-main hover:bg-main-300 animate rounded-xl px-4 py-[12px] text-white"
        >
          Change location
        </button>
      </div>

      <MapModel
        isOpen={isDialogOpen}
        onClose={closeDialog}
        onConfirmLocation={handleLocationConfirm}
      />
    </div>
  );
}
