const Row = ({ name, value }: { name: string; value: string }) => {
  return (
    <div className="flex px-3 py-2">
      <p className="min-w-[50%] font-bold sm:min-w-[30%] lg:min-w-[20%]">{name}:</p>
      <p className="text-wrap">{value}</p>
    </div>
  );
};

export default Row;
