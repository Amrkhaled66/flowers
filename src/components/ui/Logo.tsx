import logo from "src/assets/logo.svg";

const Logo = ({
  textClass = " tracking-[2.5px] text-text-main text-[26px]",
}: {
  textClass?: string;
}) => {
  return (
    <div className="relative flex w-fit">
      <p className={`${textClass} font-bold`}>Ballora</p>
      <span className="absolute -top-2.5 right-3">
        <img src={logo} alt="Ballora" />
      </span>
    </div>
  );
};

export default Logo;
