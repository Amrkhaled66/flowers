import { useTranslation } from "react-i18next";
import { Icon } from "@iconify/react/dist/iconify.js";
import clsx from "clsx";
const Element = ({
  isEnd = false,
  isChecked,
  status,
  date,
}: {
  isEnd?: boolean;
  isChecked?: boolean;
  status: string;
  date: string;
}) => {
  return (
    <div className="flex gap-x-3">
      <div className={clsx("relative", { "min-h-[90px]": !isEnd })}>
        <div
          className={clsx("absolute top-0 left-2.5 w-[4px]", {
            "bg-main": isChecked,
            "bg-stroke": !isChecked,
            "h-full": !isEnd,
          })}
        ></div>
        <div className="relative">
          <Icon
            icon="material-symbols:check-rounded"
            width="24"
            height="24"
            className={clsx(
              "rounded-full p-1",
              isChecked ? "bg-main text-white" : "bg-stroke text-main",
            )}
          />
        </div>
      </div>
      <div>
        <p>{status}</p>
        <p className="text-subTitle">{date}</p>
      </div>
    </div>
  );
};

const OrderTimeLine = () => {
  const { t } = useTranslation("trackOrder");
  return (
    <div className="bg-main-50 h-fit min-w-[60%] flex-1 space-y-3 rounded-xl p-4">
      <h2 className="font-bold">{t("timeLine.title")}</h2>
      <div>
        <div className="flex flex-col gap-x-3">
          <Element status="status" date="date" isChecked />
          <Element status="status" date="date" />
          <Element status="statusss" date="date" isEnd />
        </div>
      </div>
    </div>
  );
};

export default OrderTimeLine;
