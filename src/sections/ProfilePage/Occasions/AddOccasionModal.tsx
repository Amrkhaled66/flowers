import { useState } from "react";
import { useAddOccasion } from "src/hooks/profile/OccasionsHooks";
import { useTranslation } from "react-i18next";

import Model from "src/components/ui/Model";
import FormInput from "src/components/ui/register/FormInput";
import ComboBox from "src/components/ui/ComboBox";
import Button from "src/components/ui/Button";

import { FormEvent } from "react";

interface Form {
  eventTitle: string;
  eventDate: string;
  type: string;
  note: string;
}

interface FormErrors {
  eventTitle: string;
  eventDate: string;
  type: string;
  note: string;
}

const initialFormData: Form = {
  eventTitle: "",
  eventDate: "",
  type: "",
  note: "",
};

const initialFormErrors: FormErrors = {
  eventTitle: "",
  eventDate: "",
  type: "",
  note: "",
};

const AddOccasionModal = ({
  isOpen,
  onClose,
  Data,
  refetch,
}: {
  isOpen: boolean;
  onClose: () => void;
  Data?: Form;
  refetch: () => void;
}) => {
  const [formData, setFormData] = useState<Form>(Data || initialFormData);
  const [formErrors, setFormErrors] = useState<FormErrors>(initialFormErrors);
  const { mutate, isPending } = useAddOccasion();
  const { t } = useTranslation("profile");

  const handleInputChange = (value: string, name: string) => {
    setFormData({
      ...formData,
      [name]: value,
    });

    setFormErrors({
      ...formErrors,
      [name]: validateField(name, value) || "",
    });
  };

  const validateField = (
    name: string,
    value: string,
  ): string | boolean | undefined => {
    switch (name) {
      case "eventTitle":
        return (
          (value.trim().length === 0 && "Event Title name is required") ||
          (value.length < 3 && "Event Title must be at least 3 characters")
        );
      case "eventDate":
        return (
          (value.trim().length === 0 && "Event Date is required") ||
          (!/^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])$/.test(value) &&
            "Invalid date format Please Write As 05/12")
        );
      case "type":
        return value.trim().length === 0 && "Event type is required";
      default:
        "";
    }
  };

  // // Validate form
  const validateForm = (): boolean => {
    const errors: FormErrors = { ...initialFormErrors };
    let isValid = true;

    Object.keys(formData).forEach((key) => {
      const fieldName = key as keyof Form;
      validateField(key, formData[fieldName]);
    });

    setFormErrors(errors);
    return isValid;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    mutate(
      {
        event_title: formData.eventTitle,
        event_date: formData.eventDate,
        type: formData.type,
        note: formData.note,
      },
      {
        onSuccess: () => {
          refetch();
          onClose();
        },
      },
    );
    return;
  };

  return (
    <Model isOpen={isOpen} onClose={onClose}>
      <form
        onSubmit={handleSubmit}
        className="mx-auto w-[90%] space-y-5  rounded-2xl bg-white p-4 lg:w-[900px]"
      >
        <div className="h-fit space-y-4">
          <div className="grid w-full grid-cols-1 gap-4 lg:grid-cols-2">
            <FormInput
              bgColor="bg-main-50"
              type="text"
              error={formErrors.eventTitle}
              onChange={(e) => handleInputChange(e.target.value, "eventTitle")}
              label={t("occasion.form.title")}
              required
              value={formData.eventTitle}
              name="eventTitle"
            />
            <FormInput
              min={new Date().toISOString().split("T")[0]}
              bgColor="bg-main-50"
              error={formErrors.eventDate}
              onChange={(e) => handleInputChange(e.target.value, "eventDate")}
              label={t("occasion.form.date")}
              required
              value={formData.eventDate}
              name="eventDate"
              placeholder={t("occasion.form.datePlaceholder")}
            />
          </div>
          <ComboBox
            placeholder={t("occasion.form.typePlacholder")}
            name="type"
            label={t("occasion.form.type")}
            bgColor="bg-main-50"
            onSelected={(value) => handleInputChange(value, "type")}
            value={formData.type}
            options={[
              "Birthday",
              "Anniversary",
              "Valentine's Day",
              "Mother's Day",
              "New Year",
            ]}
          />
          <label className="flex flex-col gap-y-3" htmlFor="">
            <span className="text-main font-bold">{t("occasion.form.note")}</span>
            <textarea
              onChange={(e) => handleInputChange(e.target.value, "note")}
              placeholder={t("occasion.form.notesPlacholder")}
              name=""
              className="bg-main-50 animate border-stroke focus:outline-main h-[100px] rounded-xl border px-4 py-2.5 outline outline-transparent"
              id=""
            ></textarea>
          </label>
        </div>
        <Button
          loading={isPending}
          text={t("occasion.form.submit")}
          className="animate w-full !py-3 text-white"
        />
      </form>
    </Model>
  );
};

export default AddOccasionModal;
