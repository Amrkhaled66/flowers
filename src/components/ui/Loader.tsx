const Loader = ({
  className = "border-white h-6 w-6",
}: {
  className?: string;
}) => {
  const classes = ` animate-spin rounded-full border-b-[3px] ${className}`;
  return (
    <div className="flex py-1 items-center justify-center">
      <div className={classes}></div>
    </div>
  );
};

export default Loader;
