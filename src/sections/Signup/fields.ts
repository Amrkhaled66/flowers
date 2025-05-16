const formFields = [
  {
    labelEn: "First Name",
    labelAr: "الاسم الاول",
    type: "text",
    name: "first_name",
    isRequired: true,
  },
  {
    labelEn: "Last Name",
    labelAr: "الاسم الاخير",
    type: "text",
    name: "last_name",
    isRequired: true,
  },
  {
    labelEn: "Email",
    labelAr: "البريد الالكتروني",
    type: "email",
    name: "email",
    isRequired: true,
  },
  {
    labelEn: "Phone Number",
    labelAr: "رقم الهاتف",
    type: "tel",
    name: "phone_number",
    isRequired: true,
  },
  {
    labelEn: "Password",
    labelAr: "كلمة المرور",
    type: "password",
    name: "password",
    isRequired: true,
  },
  {
    labelEn: "Confirm Password",
    labelAr: "تاكيد كلمة المرور",
    type: "password",
    name: "confirm_password",
    isRequired: true,
  },
  {
    labelEn: "Birth Date",
    labelAr: "تاريخ الميلاد",
    type: "date",
    name: "birth_date",
    isRequired: false,
  },
];
export default formFields;
