import { ReactNode } from "react";

const HomePageSection = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <section className={`py-5 text-center lg:py-10 ${className}`}>
      <div className="container">{children}</div>
    </section>
  );
};

export default HomePageSection;
