import { useTranslation } from "react-i18next";
import { Icon } from "@iconify/react/dist/iconify.js";
import clsx from "clsx";
import Skeleton from "react-loading-skeleton";

import { OrderTracking } from "src/types/ReceivedOrder";

const Element = ({
  status,
  date,
  isEnd
}: {
  isEnd?: boolean;
  status: string;
  date?: string | null;
}) => {
  const { t } = useTranslation("trackOrder");

  return (
    <div className="flex gap-x-3">
      <div className={clsx("relative", { "min-h-[90px]": !isEnd })}>
        <div
          className={clsx("absolute top-0 bg-main  left-2.5 w-[4px]", { "h-full": !isEnd })}
        ></div>
        <div className="relative">
          <Icon
            icon="material-symbols:check-rounded"
            width="24"
            height="24"
            className={clsx(
              "rounded-full p-1  bg-main text-white",
            )}
          />
        </div>
      </div>
      <div>
        <p>{t(`timeLine.status.${status}`)}</p>
        <p className="text-subTitle">{date}</p>
      </div>
    </div>
  );
};

const OrderTimeLine = ({
  isLoading,
  track = [],
}: {
  isLoading: boolean;
  track?: OrderTracking[];
}) => {
  const { t } = useTranslation("trackOrder");

  return isLoading ? (
    <Skeleton className="!h-[250px]" containerClassName="min-w-[60%]" />
  ) : (
    <div className="bg-main-50 h-fit min-w-[60%] flex-1 space-y-3 rounded-xl p-4">
      <h2 className="font-bold">{t("timeLine.title")}</h2>
      <div className="flex flex-col gap-x-3">
        {track.map((step, index) => (
          <Element
            key={step.status}
            status={step.status}
            date={step.updatedAt}
            isEnd={index === track.length - 1}
          />
        ))}
      </div>
    </div>
  );
};

export default OrderTimeLine;
