type ColorSelectorProps = {
  colors: { id: number; name: string; code: string }[];
  onOptionChange: (key: string, value: number) => void;
  appliedColors: number[];
};

const ColorSelector = ({ colors, onOptionChange, appliedColors }: ColorSelectorProps) => (
  <div className="flex items-center p-1 gap-3">
    {colors.map((item) => (
      <span
        onClick={() => onOptionChange("color_ids", item.id)}
        key={item.id}
        className={`h-6 w-6 cursor-pointer rounded-full ${appliedColors.includes(item.id) ? "outline-offset-2 outline-main outline" : ""} `}
        style={{ backgroundColor: item.code }}
      ></span>
    ))}
  </div>
);

export default ColorSelector;
