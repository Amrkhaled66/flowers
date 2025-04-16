import { ReactNode } from "react";

const HomePageSection = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <section className={`font-main text-center lg:!py-[40px] ${className}`}>
      <div className="container">{children}</div>
    </section>
  );
};

export default HomePageSection;
