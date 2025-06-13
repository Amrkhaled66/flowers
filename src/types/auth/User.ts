interface User {
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
  birth_date: string;
  password: string;
  gender: string;
  points: string;
  verified: number;
}

interface UserRegister extends User {
  confirm_password: string;
}

export default User;
export type { UserRegister };
