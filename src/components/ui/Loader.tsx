const Loader = ({ className = "" }: { className?: string }) => {
  return (
    <div
      className={`text-surface dark:text-white" role="status inline-block h-5 w-5 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite] ${className}`}
    ></div>
  );
};

export default Loader;
