const Row = ({ name, value }: { name: string; value: string }) => {
  return (
    <div className="flex px-3 py-2">
      <p className="w-[50%] font-bold sm:w-[30%] lg:w-[20%]">{name}:</p>
      <p>{value}</p>
    </div>
  );
};

export default Row;
