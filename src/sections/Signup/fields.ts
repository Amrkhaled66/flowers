 const formFields = [
  { label: "First Name", type: "text", name: "first_name", isRequired: true },
  { label: "Last Name", type: "text", name: "last_name", isRequired: true },
  { label: "Email", type: "email", name: "email", isRequired: true },
  {
    label: "Phone Number",
    type: "tel",
    name: "phone_number",
    isRequired: true,
  },
  { label: "Password", type: "password", name: "password", isRequired: true },
  {
    label: "Confirm Password",
    type: "password",
    name: "confirm_password",
    isRequired: true,
  },
  { label: "Birth Date", type: "date", name: "birth_date", isRequired: false },
];
export default formFields;