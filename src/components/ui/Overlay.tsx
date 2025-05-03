import { useNavBarToggleBtns } from "src/context/NavBarToggleBtns";

const Overlay = () => {
  const { reset } = useNavBarToggleBtns();
  return (
    <div
      onClick={() => {
        reset();
      }}
      className={`fixed top-0 right-0 bottom-0 left-0 z-[70] bg-[#d9d9d94d]`}
    ></div>
  );
};

export default Overlay;
