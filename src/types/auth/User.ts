interface User {
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
  birth_date: string;
  password: string;
  gender: string;
  verified: number;
  balance: string;
}

interface UserRegister extends User {
  confirm_password: string;
}
interface UserRegisterErrors extends Omit<User, "verified"> {
  confirm_password: string;
  verified: string;
}

export type { User, UserRegister, UserRegisterErrors };