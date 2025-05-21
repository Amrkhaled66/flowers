// src/components/occasions/AddOccasionButton.tsx
import Button from "src/components/ui/Button";
import { Icon } from "@iconify/react/dist/iconify.js";

interface AddOccasionButtonProps {
  onClick: () => void;
  label: string;
}

export const AddOccasionButton = ({ onClick, label }: AddOccasionButtonProps) => (
  <div className="dashed-border divide-dashed rounded-xl p-2">
    <Button
      onClick={onClick}
      text={label}
      icon={<Icon icon="line-md:plus" width={24} height={24} />}
      className="bg-main-100 animate text-main w-full rounded-sm !py-2 text-center font-bold lg:!py-3"
    />
  </div>
);