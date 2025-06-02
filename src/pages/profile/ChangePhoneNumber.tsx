import { useState } from "react";

import UpdatePhoneNumberForm from "src/sections/ProfilePage/ChangePhoneNumber/UpdatePhoneNumberForm";
import VerifyNewPhoneNumber from "src/sections/ProfilePage/ChangePhoneNumber/VerifyNewPhoneNumber";

const ChangePhoneNumber = () => {
  const [submittedPhone, setSubmittedPhone] = useState(""); 

  const onChangePhoneNumber = () => {
    setSubmittedPhone("");
  };

  if (submittedPhone) return <VerifyNewPhoneNumber onChangePhoneNumber={onChangePhoneNumber} phone={submittedPhone} />;

  return <UpdatePhoneNumberForm setSubmittedPhone={setSubmittedPhone} />;
};

export default ChangePhoneNumber;
