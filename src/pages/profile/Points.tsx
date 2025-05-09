import priceFormatter from "src/utils/priceFormatter";

const Points = () => {
  return (
    <div>
      <div className="space-y-4 rounded-2xl bg-white p-4">
        <p className="text-sm">Available balance</p>
        <div className="space-y-2 text-sm font-bold">
          <p>0 Point</p>
          <p>=</p>
          <p>{priceFormatter(0)}</p>
        </div>
      </div>
    </div>
  );
};

export default Points;
