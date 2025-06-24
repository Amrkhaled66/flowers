import Button from "./Button";

const OutLineButton = ({
  text,
  onClick,
  disabled,
  loading,
  className
}: {
  text: string;
  onClick: () => void;
  disabled?: boolean;
  loading?: boolean;
  className?: string;
}) => {
  return (
    <Button
    loaderBg="border-main"
      loading={loading}
      disabled={disabled}
      onClick={onClick}
      className={`border-main !text-main  focus:!bg-main-900 hover:!bg-main-300 w-full flex-1 rounded-sm border !bg-transparent !py-3 hover:!border-transparent hover:!text-white focus:!text-white disabled:!cursor-not-allowed ${className}`}
      text={text}
    />
  );
};

export default OutLineButton;
