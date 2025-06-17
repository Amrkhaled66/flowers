import { useTranslation } from "react-i18next";

import FormInput from "src/components/ui/register/FormInput";
import Button from "src/components/ui/Button";
import ProfilePageCompetent from "src/components/ProfilePage/ProfilePageCompetent";
import { Link } from "react-router-dom";

import { validatePhoneNumber } from "src/utils/register";
import { useState } from "react";
import { updateProfileData } from "src/api/profile/profileData";
import { useMutation } from "@tanstack/react-query";
const UpdatePhoneNumberForm = ({
  setSubmittedPhone,
}: {
  setSubmittedPhone: (phone: string) => void;
}) => {
  const { t } = useTranslation("profile");
  const { t: tShared } = useTranslation("shared");
  const { t: tErrors } = useTranslation("errors");

  const [inputPhone, setInputPhone] = useState("");
  const [error, setError] = useState("");

  const { mutate, isPending: submitLoading } = useMutation({
    mutationFn: () => updateProfileData({ phone_number: inputPhone }),
    onSuccess: () => {
      setSubmittedPhone(inputPhone);
      // Alert({
      //   title: tShared("success"),
      //   text: tProfile("info.editForm.success"),
      //   icon: "success",
      //   confirmButtonText: "Okay",
      // });
    },
    onError: (err: any) => {
      setError(err.response.data.message);
      // Alert({
      //   title: "Error",
      //   text: err.response.data.message,
      //   icon: "error",
      //   confirmButtonText: "Okay",
      // });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const error = validatePhoneNumber(inputPhone, tErrors);
    if (error) return setError(error);
    mutate();
  };

  return (
    <ProfilePageCompetent>
      <div className="flex flex-col items-center justify-start gap-4 self-stretch">
        <div className="inline-flex items-center justify-center gap-2.5 self-stretch">
          <div className="text-text-main justify-start text-xl leading-7 font-bold">
            {t("changPhoneNumber.title")}
          </div>
        </div>
        <div className="flex flex-col items-center justify-start gap-2">
          <div className="text-text-main justify-start text-center text-base font-normal">
            {t("changPhoneNumber.subTitle")}
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-[32px]">
        <FormInput
          required
          error={error}
          onChange={(e) => setInputPhone(e.target.value)}
          value={inputPhone}
          name="phoneNumber"
          label={t("changPhoneNumber.newPhone")}
        />
        <div className="space-y-4">
          <Button
            loading={submitLoading}
            text={tShared("continue")}
            className="bg-main hover:bg-main-300 animate !w-full rounded-xl !py-3 text-base leading-7 font-bold text-white"
          />
          <Link to="/profile/mydata">
            <div className="border-main w-full rounded-xl border py-3 text-center text-lg font-bold">
              {tShared("back")}
            </div>
          </Link>
        </div>
      </form>
    </ProfilePageCompetent>
  );
};

export default UpdatePhoneNumberForm;
