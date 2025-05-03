import TopSection from "src/components/layout/NavBar/TopSection";
import BottomSection from "src/components/layout/NavBar/BottomSection";

const NavBar = () => {
  return (
    <div className="fixed top-0 w-screen z-[60]">
      <TopSection />
      <BottomSection />
    </div>
  );
};

export default NavBar;
