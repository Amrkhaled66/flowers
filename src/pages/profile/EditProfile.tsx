import FormInput from "src/components/ui/register/FormInput";
import useEditProfile from "src/hooks/profileHooks/useEditProfile";
import RadioButton from "src/components/ProfilePage/EditProfile/RadioButton";
import { FormDataType, FormErrors } from "src/types/UserInfo/EditProfileForm";

const formFields = [
  {
    layout: "block",
    fields: [{ label: "Email", type: "email", name: "email" }],
  },
  {
    layout: "inline",
    fields: [
      { label: "First Name", type: "text", name: "firstName" },
      { label: "Last Name", type: "text", name: "lastName" },
    ],
  },
  {
    layout: "block",
    fields: [{ label: "Phone Number", type: "text", name: "phoneNumber" }],
  },
];

const EditProfile = () => {
  const { formData, errors, handleChange, handleSubmit } = useEditProfile();

  return (
    <form onSubmit={handleSubmit} className="">
      <div className="!text-text-main space-y-5">
        {formFields.map((fieldGroup) => (
          <div
            className={`${fieldGroup.layout === "inline" ? "grid grid-cols-1 gap-4 lg:grid-cols-2" : ""}`}
          >
            {fieldGroup.fields.map((field) => (
              <FormInput
                label={field.label}
                type={field.type}
                name={field.name}
                value={formData[field.name as keyof FormDataType]}
                error={errors[field.name as keyof FormErrors]}
                onChange={handleChange}
              />
            ))}
          </div>
        ))}

        <RadioButton
          label="Gender"
          name="gender"
          options={[
            { value: "male", label: "Male" },
            { value: "female", label: "Female" },
          ]}
          selectedValue={formData.gender}
          error={errors.gender}
          onChange={handleChange}
        />
      </div>
      <div className="mt-8 flex flex-col justify-center gap-y-4">
        <button
          type="submit"
          className="bg-main hover:bg-main-300 text-text-main w-full rounded-xl py-3 font-bold text-white transition-colors"
        >
          Save changes
        </button>
      </div>
    </form>
  );
};

export default EditProfile;
