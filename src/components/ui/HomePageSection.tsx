import { ReactNode } from "react";

const HomePageSection = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <section className={`font-main  lg:py-[40px] text-center ${className}`}>
      <div className="container">{children}</div>
    </section>
  );
};

export default HomePageSection;
