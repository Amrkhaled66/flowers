// components/profile/DeleteOccasion.tsx
import DeletionModal from "src/components/ui/DeletionModel";

import useDeactivateAccount from "src/hooks/auth/usedeactivateAccountMutation";
import { useTranslation } from "react-i18next";
import { useAuth } from "src/context/authCtx";
import { showToast } from "src/utils/toast";
interface DeleteAccountProps {
  isOpen: boolean;
  onClose: () => void;
}

const DeleteAccountModel = ({ isOpen, onClose }: DeleteAccountProps) => {
  const { mutate, isPending } = useDeactivateAccount();
  const { t } = useTranslation("profile");
  const { t: tErrors } = useTranslation("errors");
  const { logout } = useAuth();

  const onConfirm = () => {
    mutate(undefined, {
      onSuccess: () => logout(),
      onError: (error: any) => {
        if (error.response.status === 400)
          showToast.error(tErrors("deleteAccount"));
        console.log();
      },
    });
  };

  return (
    <DeletionModal
      isPending={isPending}
      isOpen={isOpen}
      onClose={onClose}
      onConfirm={onConfirm}
      title={t("deleteAccount.model.title")}
      message={t("deleteAccount.model.message")}
      confirmText={t("deleteAccount.model.confirmText")}
      cancelText={t("deleteAccount.model.cancelText")}
    />
  );
};

export default DeleteAccountModel;
