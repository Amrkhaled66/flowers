import { Icon } from "@iconify/react/dist/iconify.js";
import { useMessageGiftCtx } from "src/context/MessageGiftCtx";
import Button from "src/components/ui/Button";

const PreviewMessage = ({
  onCloseFun,
  returnToForm,
}: {
  onCloseFun: () => void;
  returnToForm: () => void;
}) => {
  const {
    messageParts: { from, to, message },
    onSave,
  } = useMessageGiftCtx();
  return (
    <div className="relative mx-auto w-[90%] space-y-6 rounded-xl bg-white p-10 lg:w-[500px]">
      <button
        className="bg-main absolute end-0 top-0 flex h-[44px] w-[44px] items-center justify-center rounded-se-xl rounded-es-xl text-white"
        onClick={() => {
          onCloseFun();
          returnToForm();
        }}
      >
        <Icon icon="material-symbols:close-rounded" width="24" height="24" />
      </button>
      <div className="bg-main-50 flex flex-col items-center justify-center gap-y-5 rounded-xl py-4">
        <Icon icon="emojione-v1:love-letter" width="56" height="56" />
        <div className="text-text-main space-y-2 text-center">
          <p>{to}</p>
          <p className="mx-auto"> {message}</p>
          <p>{from}</p>
        </div>
      </div>
      <Button
        onClick={() => {
          onSave();
          onCloseFun();
          returnToForm();
        }}
        text="Save & Continue"
        className="bg-main hover:bg-main-50 animate w-full !py-3 text-white"
      />
    </div>
  );
};

export default PreviewMessage;
