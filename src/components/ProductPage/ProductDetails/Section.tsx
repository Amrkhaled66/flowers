import { ReactNode } from "react";

const Section = ({ head, children }: { head: string; children: ReactNode }) => {
  return (
    <div className="space-y-3">
      <h2 className="font-bold">{head}</h2>
      {children}
    </div>
  );
};

export default Section;
