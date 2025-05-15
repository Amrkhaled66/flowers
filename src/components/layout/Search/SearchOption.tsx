import { Icon } from "@iconify/react/dist/iconify.js";

const SearchOption = ({
  value,
  onClick,
}: {
  value: string;
  onClick: () => void;
}) => {
  return (
    <button
      className="text-text-main hover:bg-main-100 animate flex w-full items-center gap-x-2 rounded-xl p-2 font-semibold"
      onClick={onClick}
    >
      <Icon icon="ic:sharp-search" width="24" height="24" />
      {value}
    </button>
  );
};

export default SearchOption;
