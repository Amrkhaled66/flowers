import { ReactNode } from "react";

const HomePageSection = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <section className={`font-main py-[20px] lg:py-[40px] text-center ${className}`}>
      <div className="container">{children}</div>
    </section>
  );
};

export default HomePageSection;
