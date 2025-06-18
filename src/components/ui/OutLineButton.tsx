import Button from "./Button";

const OutLineButton = ({
  text,
  onClick,
  disabled,
  loading,
}: {
  text: string;
  onClick: () => void;
  disabled?: boolean;
  loading?: boolean;
}) => {
  return (
    <Button
      loading={loading}
      disabled={disabled}
      onClick={onClick}
      className="border-main !text-main focus:!bg-main-900 hover:!bg-main-300 w-full rounded-sm border !bg-transparent !py-3 hover:!border-transparent hover:!text-white focus:!text-white disabled:!cursor-not-allowed"
      text={text}
    />
  );
};

export default OutLineButton;
