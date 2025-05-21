import { useNavBarToggleBtns } from "src/context/NavBarToggleBtns";

const Overlay = ({ bgColor = "#d9d9d94d", onClick }: { bgColor?: string, onClick?: () => void }) => {
  const { reset } = useNavBarToggleBtns();
  return (
    <div
      onClick={() => {
        reset();
        onClick && onClick();
      }}
      style={{
        backgroundColor: bgColor,
      }}
      className={`fixed top-0 right-0 backdrop-blur-xs bottom-0 left-0 z-70`}
    ></div>
  );
};

export default Overlay;
