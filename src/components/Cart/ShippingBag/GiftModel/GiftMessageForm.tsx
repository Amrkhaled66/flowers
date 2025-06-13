import { Icon } from "@iconify/react";
import Button from "src/components/ui/Button";
import { useMessageGiftCtx } from "src/context/MessageGiftCtx";
import { useTranslation } from "react-i18next";

interface GiftMessageFormProps {
  onCloseFun: () => void;
  onReview: () => void;
}

const GiftMessageForm = ({ onCloseFun, onReview }: GiftMessageFormProps) => {
  const {
    onSave,
    onChange,
    messageError,
    clearError,
    checkValidation,
    inputParts: { from, to, message, url },
    resetInputParts,
  } = useMessageGiftCtx();
  const { t } = useTranslation("shippingBag");

  const handleClose = () => {
    onCloseFun();
    clearError();
    resetInputParts();
  };

  const handleReview = () => {
    if (checkValidation()) {
      onReview();
    }
  };

  const handleSave = () => {
    if (onSave()) {
      onCloseFun();
    }
  };

  const inputWrapperStyle =
    "border-stroke relative flex w-full rounded-xl border bg-white px-3 py-2.5";
  const inputStyle = "w-full ps-1";

  return (
    <div className="text-text-main mx-auto max-h-screen w-[90%] space-y-6 overflow-y-auto rounded-xl bg-white sm:p-8 lg:w-[500px] p-4">
      <div className="flex justify-between">
        <p className="text-xl font-bold">{t("messageGift.title")}</p>
        <button
          onClick={handleClose}
          className="border-stroke ms-auto flex h-[36px] w-[36px] items-center justify-center rounded-xl border"
        >
          <Icon icon="material-symbols:close-rounded" width="24" height="24" />
        </button>
      </div>

      <div className="bg-main-50 flex flex-col items-center gap-y-4 p-3">
        <Icon icon="emojione-v1:love-letter" width="56" height="56" />

        <div className="flex w-full flex-col gap-y-3">
          <div className={inputWrapperStyle}>
            <p className="text-subTitle">{t("messageGift.form.to")}</p>
            <input
              value={to}
              name="to"
              onChange={onChange}
              type="text"
              className={inputStyle}
            />
          </div>

          <textarea
            value={message}
            name="message"
            onChange={onChange}
            placeholder={t("messageGift.form.messagePlaceholder")}
            className="border-stroke animate h-20 w-full rounded-xl border bg-white px-3 py-2.5"
          />
          {messageError && (
            <p className="text-red px-3 text-xs">{messageError}</p>
          )}

          <div className={inputWrapperStyle}>
            <p className="text-subTitle">{t("messageGift.form.from")}</p>
            <input
              value={from}
              name="from"
              onChange={onChange}
              type="text"
              className={inputStyle}
            />
          </div>

          <div className="flex items-center gap-x-3">
            <span className="bg-subTitle/30 h-[0.5px] w-full flex-1"></span>
            {/* <span>{t("messageGift.form.or")}</span> */}
            <span className="bg-subTitle/30 h-[0.5px] w-full flex-1"></span>
          </div>

          <div className={inputWrapperStyle}>
            <Icon icon="ic:baseline-link" width="24" height="24" />
            <input
              name="url"
              value={url}
              onChange={onChange}
              type="text"
              placeholder={t("messageGift.form.linkPlaceHolder")}
              className={inputStyle}
            />
          </div>
        </div>

        <div className="w-full space-y-2">
          <p className="font-semibold">{t("messageGift.form.work")}</p>
          <p className="text-subTitle flex gap-x-1">
            <span>*</span>
            <span>{t("messageGift.form.workText")}</span>
          </p>
        </div>

        <div className="mt-6 flex w-full flex-col-reverse items-center justify-between gap-x-6 gap-y-3 lg:flex-row">
          <Button
            onClick={handleReview}
            text={t("messageGift.form.review")}
            className="border-main animate w-full border !bg-transparent !py-3 hover:!bg-transparent focus:!bg-transparent lg:w-1/2"
          />
          <Button
            onClick={handleSave}
            text={t("messageGift.form.save")}
            className="bg-main animate w-full !py-3 text-white lg:w-1/2"
          />
        </div>
      </div>
    </div>
  );
};

export default GiftMessageForm;
