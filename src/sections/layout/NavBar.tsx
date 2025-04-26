import TopSection from "src/components/layout/NavBar/TopSection";
import BottomSection from "src/components/layout/NavBar/BottomSection";

const NavBar = () => {
  return (
    <div className="sticky  top-0 z-50">
      <TopSection />
      <BottomSection />
    </div>
  );
};

export default NavBar;
