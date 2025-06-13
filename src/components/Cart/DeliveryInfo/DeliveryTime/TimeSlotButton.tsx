import clsx from "clsx";
import { Icon } from "@iconify/react/dist/iconify.js";

const TimeSlotButton = ({
    time,
    isSelected,
    onClick,
    isBusy,
}: {
    time: string;
    isSelected: boolean;
    onClick: () => void;
    isBusy: boolean;
}) => (
    <button
        disabled={isBusy}
        onClick={onClick}
        className={clsx(
            `border-stroke hover:border-main animate flex w-full cursor-pointer items-center justify-between rounded-xl border p-3 disabled:!cursor-not-allowed`,
            {
                "border-main bg-main/10": isSelected,
                "hover:border-stroke": isBusy,
            },
        )}
    >
        <div
            className={clsx("text-start", {
                "!text-subTitle !line-through opacity-75": isBusy,
            })}
        >
            {time}
        </div>
        <div className="flex gap-x-1 items-center">
            {isBusy && (
                <p className="text-subTitle text-sm">Busy Time</p>
            )}
            <div
                className={clsx("relative h-5 w-5 rounded-full border", {
                    "border-main bg-main": isSelected,
                    "border-stroke": !isSelected,
                })}
            >
                {isSelected && (
                    <span className="absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2 transform text-white opacity-100">
                        <Icon icon="material-symbols:check" width="14" height="14" />
                    </span>
                )}
            </div>
        </div>
    </button>
);


export default TimeSlotButton;