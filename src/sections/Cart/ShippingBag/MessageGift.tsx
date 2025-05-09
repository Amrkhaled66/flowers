import { Icon } from "@iconify/react/dist/iconify.js";
import { useState } from "react";
import { useMessageGiftCtx } from "src/context/MessageGiftCtx";
import GiftModel from "./GiftModel";

const MessageGift = () => {
  const [open, setOpen] = useState(false);
  const {
    isValid,
    messageParts: { from, to, message },
  } = useMessageGiftCtx();
  const openModal = () => {
    setOpen(true);
  };
  const closeModal = () => {
    setOpen(false);
  };
  return isValid ? (
    <div className="space-y-4 rounded-xl bg-white">
      <div className="flex items-center justify-between">
        <div className="font-main flex items-center gap-x-2">
          <Icon icon="bx:message-alt-edit" width="24" height="24" />
          <p className="text-text-main !text-xs font-bold lg:text-xl">
            Message Gift
          </p>
        </div>
        <button onClick={openModal}>
          <Icon icon="tabler:edit" width="24" height="24" />
        </button>
      </div>
      <div className="dashed-border min-h-[164px] rounded-xl p-4">
        <div className="bg-main-50 flex w-full flex-col items-center justify-center gap-y-2 rounded-xl p-3">
          <Icon icon="emojione-v1:love-letter" width="40" height="40" />
          <div className="font-main text-text-main space-y-2 text-center">
            <p>{to}</p>
            <p className="mx-auto"> {message}</p>
            <p>{from}</p>
          </div>
        </div>
      </div>
      <GiftModel isOpen={open} onCloseFun={closeModal} />
    </div>
  ) : (
    <div className="bg-main-50 space-y-4 rounded-xl p-4">
      <div className="font-main flex items-center gap-x-2">
        <Icon icon="bx:message-alt-edit" width="24" height="24" />
        <p className="text-text-main text-sm font-bold lg:text-xl">
          Message Gift
        </p>
      </div>
      <button
        onClick={openModal}
        className="dashed-border flex h-[164px] w-full flex-col items-center justify-center gap-y-2 rounded-xl"
      >
        <Icon icon="emojione-v1:love-letter" width="40" height="40" />
        <p className="font-medium">Tab to add Message</p>
      </button>
      <GiftModel isOpen={open} onCloseFun={closeModal} />
    </div>
  );
};

export default MessageGift;
