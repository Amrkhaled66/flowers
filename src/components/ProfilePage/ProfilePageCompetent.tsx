import { ReactNode } from "react";

const ProfilePageCompetent = ({ children }: { children: ReactNode }) => {
  return (
    <div className="bg-main-50 h-fit flex-1 rounded-xl p-4">{children}</div>
  );
};

export default ProfilePageCompetent;
