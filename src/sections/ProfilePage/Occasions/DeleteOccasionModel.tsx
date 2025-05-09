import Model from "src/components/ui/Model";
import { Icon } from "@iconify/react/dist/iconify.js";
const DeleteOccasionModel = ({
  isOpen,
  onClose,
  onConfirm,
}: {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}) => {
  return (
    <Model isOpen={isOpen} onClose={onClose}>
      <div className="mx-auto w-[90%] space-y-4 rounded-2xl bg-white p-4 sm:w-[400px]">
        <button
          onClick={onClose}
          className="border-stroke ml-auto flex h-[36px] w-[36px] items-center justify-center rounded-xl border"
        >
          <Icon icon="material-symbols:close-rounded" width="24" height="24" />
        </button>
        <div className="space-y-6 text-center">
          <div className="space-y-2">
            <h2 className="mx-auto w-[90%] text-[24px] font-bold sm:w-full lg:w-[90%]">
              Are you sure you want to delete this event?
            </h2>
            <p>This occasion will be remembered forever.</p>
          </div>

          <div className="space-y-3">
            <button
              onClick={onConfirm}
              className="border-red text-red w-full rounded-xl border py-3 font-bold"
            >
              Yes, Delete
            </button>
            <button
              onClick={onClose}
              className="w-full rounded-xl border border-black py-3 font-bold text-black"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </Model>
  );
};

export default DeleteOccasionModel;
