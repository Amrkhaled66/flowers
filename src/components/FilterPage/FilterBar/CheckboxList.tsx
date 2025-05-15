type CheckboxListProps = {
    items: string[];
  };
  
  const CheckboxList = ({ items }: CheckboxListProps) => (
    <div className="flex flex-col gap-y-4">
      {items.map((item, index) => (
        <div key={index} className="inline-flex items-center justify-between">
          <span className="font-semibold">{item}</span>
          <label className="relative flex cursor-pointer items-center">
            <input
              type="checkbox"
              checked={false}
              className="peer checked:border-main checked:bg-main h-5 w-5 cursor-pointer appearance-none rounded-sm border border-main shadow transition-all hover:shadow-md"
            />
          </label>
        </div>
      ))}
    </div>
  );
export default CheckboxList  