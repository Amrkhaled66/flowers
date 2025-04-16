export default function SliderPoints({
  currentIndex,
  onDotClick,
  length,
  className = "",
}: {
  currentIndex: number;
  onDotClick: (groupIndex: number) => void;
  length: number;
  className?: string;
}) {
  return (
    <div className={`flex  w-fit gap-3 ${className}`}>
      {Array.from({ length }).map((_, index) => (
        <button
          key={index}
          onClick={() => onDotClick(index)}
          className={`border-text-main h-[14px] w-[14px] cursor-pointer rounded-full border transition-all duration-300 ${
            currentIndex === index ? "bg-text-main" : " "
          }`}
        />
      ))}
    </div>
  );
}
