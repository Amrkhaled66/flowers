type ColorSelectorProps = {
  colors: { hex: string }[];
};

const ColorSelector = ({ colors }: ColorSelectorProps) => (
  <div className="flex items-center gap-3">
    {colors.map((color, i) => (
      <span
        key={i}
        className="h-6 w-6 cursor-pointer rounded-full"
        style={{ backgroundColor: "red" }}
      ></span>
    ))}
  </div>
);

export default ColorSelector;
