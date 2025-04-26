import { Icon } from "@iconify/react/dist/iconify.js";


const SocialLoginSection = () => {
  return (
    <div className="space-y-5">
      <p className="text-text-main text-xl">Continue with one click</p>
      <div className="space-x-4">
        <button className="border-stroke rounded-xl border p-2.5">
          <Icon icon="flat-color-icons:google" width="32" height="32" />
        </button>
        <button className="border-stroke rounded-xl border p-2.5">
          <Icon icon="logos:apple" width="32" height="32" />
        </button>
      </div>
      <p className="text-subTitle">Or use your account</p>
    </div>
  );
};

export default SocialLoginSection;
