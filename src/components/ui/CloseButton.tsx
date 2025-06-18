import { Icon } from "@iconify/react/dist/iconify.js";

const CloseButton = ({ onClose }: { onClose: () => void }) => {
  return (
    <button onClick={onClose} className="border-stroke w-fit rounded-xl border p-1">
      <Icon icon="material-symbols:close-rounded" width="24" height="24" />
    </button>
  );
};

export default CloseButton;
