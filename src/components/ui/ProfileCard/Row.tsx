const Row = ({ name, value }: { name: string; value: string }) => {
  return (
    <div className="flex px-3 py-2">
      <p className="w-[20%] font-bold">{name}:</p>
      <p>{value}</p>
    </div>
  );
};

export default Row;
