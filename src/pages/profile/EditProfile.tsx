import FormInput from "src/components/ui/register/FormInput";
import useEditProfile from "src/hooks/profile/useEditProfile";
import GenderButton from "src/components/SignUp/GenderButton";
import Button from "src/components/ui/Button";
import { FormDataType } from "src/types/UserInfo/EditProfileForm";

import { useTranslation } from "react-i18next";

const formFields = [
  {
    layout: "block",
    fields: [{ labelEn: "Email", labelAr: "البريد الإلكتروني", type: "email", name: "email" }],
  },
  {
    layout: "inline",
    fields: [
      { labelEn: "First Name", labelAr: "الاسم الأول", type: "text", name: "first_name" },
      { labelEn: "Last Name", labelAr: "الاسم الأخير", type: "text", name: "last_name" },
    ],
  },
  {
    layout: "block",
    fields: [{ labelEn: "Birth Date", labelAr: "تاريخ الميلاد ", type: "date", name: "birth_date" }],
  },
];

const EditProfile = () => {
  const { formData, errors, handleChange, handleSubmit, isPending } = useEditProfile();

  const { i18n: { language }, t } = useTranslation("profile");

  return (
    <form onSubmit={handleSubmit} className="">
      <div className="!text-text-main space-y-5">
        {formFields.map((fieldGroup) => (
          <div
            className={`${fieldGroup.layout === "inline" ? "grid grid-cols-1 gap-4 lg:grid-cols-2" : ""}`}
          >
            {fieldGroup.fields.map((field) => (
              <FormInput
                label={language === "en" ? field.labelEn : field.labelAr}
                type={field.type}
                name={field.name}
                value={formData[field.name as keyof FormDataType]}
                error={errors[field.name as keyof FormDataType]}
                onChange={handleChange}
              />
            ))}
          </div>
        ))}

         <GenderButton
          label={language === "en" ? "Gender" : "النوع"}
          name="gender"
          options={[
            { value: "male", labelEn: "Male", labelAr: "ذكر" },
            { value: "female", labelEn: "Female" , labelAr: "انثى"},
          ]}
          selectedValue={formData.gender}
          error={errors.gender}
          onChange={handleChange}
        />
      </div>
      <div className="mt-8 flex flex-col justify-center gap-y-4">
        <Button
          text={t("info.editForm.save")}
          loading={isPending}
          className="bg-main hover:bg-main-300 text-text-main w-full rounded-xl py-3 font-bold text-white transition-colors"
        />
      </div>
    </form>
  );
};

export default EditProfile;
