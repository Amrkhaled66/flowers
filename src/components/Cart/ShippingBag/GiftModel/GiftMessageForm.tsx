import { Icon } from "@iconify/react/dist/iconify.js";
import Button from "src/components/ui/Button";
import { useMessageGiftCtx } from "src/context/MessageGiftCtx";
import { useTranslation } from "react-i18next";
const GiftMessageForm = ({
  onCloseFun,
  onReview,
}: {
  onCloseFun: () => void;
  onReview: () => void;
}) => {
  const {
    onChange,
    onSave,
    messageParts: { from, to, message },
  } = useMessageGiftCtx();
  const { t } = useTranslation("shippingBag");

  return (
    <div className="text-text-main mx-auto max-h-screen w-[90%] space-y-6 overflow-y-auto rounded-xl bg-white sm:p-8 lg:w-[500px] lg:p-4">
      <div className="flex justify-between">
        <p className="text-xl font-bold">{t("messageGift.title")}</p>
        <button
          onClick={onCloseFun}
          className="border-stroke ml-auto flex h-[36px] w-[36px] items-center justify-center rounded-xl border"
        >
          <Icon icon="material-symbols:close-rounded" width="24" height="24" />
        </button>
      </div>
      <div className="bg-main-50 flex flex-col items-center justify-center gap-y-4 p-4">
        <Icon icon="emojione-v1:love-letter" width="56" height="56" />
        <div className="flex w-full flex-col gap-y-3">
          <div className="border-stroke relative flex w-full rounded-xl border bg-white px-3 py-2.5">
            <p className="text-subTitle inset-0">{t("messageGift.form.to")}</p>
            <input
              value={to}
              onChange={onChange}
              name="to"
              type="text"
              className="w-full ps-1"
            />
          </div>
          <textarea
            value={message}
            placeholder={t("messageGift.form.messagePlaceholder")}
            name="message"
            onChange={onChange}
            className="border-stroke animate h-20 w-full rounded-xl border bg-white px-3 py-2.5"
          />
          <div className="border-stroke relative flex w-full rounded-xl border bg-white px-3 py-2.5">
            <p className="text-subTitle inset-0">{t("messageGift.form.from")}</p>
            <input
              value={from}
              name="from"
              onChange={onChange}
              type="text"
              className="w-full ps-1"
            />
          </div>
          <div className="flex items-center gap-x-3">
            <span className="bg-subTitle/30 h-[.5px] w-full flex-1"></span>
            <span>{t("messageGift.form.or")}</span>
            <span className="bg-subTitle/30 h-[.5px] w-full flex-1"></span>
          </div>
        </div>
        <div className="border-stroke relative flex w-full rounded-xl border bg-white px-3 py-2.5">
          <p className="inset-0 text-black">
            <Icon icon="ic:baseline-link" width="24" height="24" />
          </p>
          <input
            placeholder={t("messageGift.form.linkPlaceHolder")}
            type="text"
            className="w-full ps-1"
          />
        </div>
        <div className="w-full space-y-2">
          <p className="font-semibold">{t("messageGift.form.work")}</p>
          <p className="flex gap-x-1">
            <span>*</span>
            <span className="text-subTitle">
            {t("messageGift.form.workText")}
            </span>
          </p>
        </div>

        <div className="mt-6 flex w-full flex-col-reverse items-center justify-between gap-x-6 gap-y-3 lg:flex-row">
          <Button
            onClick={() => onReview()}
            text={t("messageGift.form.review")}
            className="border-main animate w-full border bg-white !py-3 hover:!bg-white lg:w-1/2"
          />
          <Button
            onClick={() => {
              onSave();
              onCloseFun();
            }}
            text={t("messageGift.form.save")}
            className="bg-main bg-main animate w-full !py-3 text-white lg:w-1/2"
          />
        </div>
      </div>
    </div>
  );
};

export default GiftMessageForm;
