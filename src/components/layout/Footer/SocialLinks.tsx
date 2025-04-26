import appStore from "src/assets/appstore.svg";
import googleplay from "src/assets/googleplay.svg";
import { Icon } from "@iconify/react/dist/iconify.js";
import { ReactNode } from "react";

const SocialIcon = ({ icon }: { icon: ReactNode }) => {
  return (
    <button className="flex items-center rounded-sm border border-white p-2.5">
      {icon}
    </button>
  );
};
const SocialLinks = () => {
  return (
    <div className="font-main space-y-8 text-left text-white lg:w-[40%]">
      <div className="space-y-7">
        <div className="space-y-4">
          <p>Social Media</p>
          <div className="flex gap-x-3">
            <SocialIcon
              icon={<Icon icon="ri:facebook-fill" width="24" height="24" />}
            />
            <SocialIcon
              icon={<Icon icon="bi:twitter-x" width="24" height="24" />}
            />
            <SocialIcon
              icon={<Icon icon="basil:linkedin-solid" width="24" height="24" />}
            />
            <SocialIcon
              icon={
                <Icon icon="mingcute:instagram-fill" width="24" height="24" />
              }
            />
          </div>
        </div>
        <div className="space-y-3">
          <p>Download App</p>
          <div className="flex gap-x-4">
            <div>
              <img src={appStore} alt="Download" />
            </div>
            <div>
              <img src={googleplay} alt="Download" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialLinks;
