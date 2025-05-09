import { useLocation, useNavigate } from "react-router-dom";
import clsx from "clsx";
import { Icon } from "@iconify/react/dist/iconify.js";

const steps = [
  { label: "Shopping Bag", path: "/cart" },
  { label: "Delivery Info", path: "/cart/delivery-info" },
  { label: "Payment", path: "/cart/payment" },
];

const CartTimeline = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const currentStepIndex = steps.findIndex(
    (step) => location.pathname === step.path,
  );

  return (
    <div className="space-y-4 w-full  lg:w-[90%] mx-auto ">
      <div className="flex w-full items-center justify-between">
        {steps.map((step, index) => {
          const isActive = index === currentStepIndex;
          const isCompleted = index < currentStepIndex;
          return (
            <div
              key={step.label}
              className="relative flex w-full flex-col items-center gap-2 gap-y-3 lg:flex-row"
            >
              {index !== steps.length - 1 && (
                <div
                  className={`absolute start-[54%] top-[20%] block h-[2px] w-[90%] lg:hidden ${isActive || isCompleted ? "bg-main" : "bg-gray-300"}`}
                ></div>
              )}
              <button
                onClick={() => navigate(step.path)}
                className={clsx(
                  "z-10 flex h-6 w-6 items-center justify-center rounded-full text-xs font-semibold sm:h-8 sm:w-8 lg:text-base",
                  {
                    "bg-main text-white": isActive,
                    "bg-gray-300 text-gray-700": !isCompleted && !isActive,
                  },
                )}
              >
                {isCompleted ? (
                  <div className="outline-main rounded-full  outline-2 outline-offset-2">
                    <Icon
                      icon="icon-park-solid:check-one"
                      className="text-main"
                      width="24"
                      height="24"
                    />
                  </div>
                ) : (
                  index + 1
                )}
              </button>
              <span
                className={clsx("text-[10px] sm:text-sm lg:text-xl", {
                  "text-main font-bold": isActive || isCompleted,
                  "text-gray-500": !isActive && !isCompleted,
                })}
              >
                {step.label}
              </span>
            </div>
          );
        })}
      </div>
      {/* timeLine */}
      <div
        style={{
          width: `${((currentStepIndex + 1) / steps.length) * 100}%`,
        }}
        className={"bg-main animate hidden h-2 rounded-xl lg:block"}
      ></div>
    </div>
  );
};

export default CartTimeline;
