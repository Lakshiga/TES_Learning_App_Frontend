export interface IUser {
  id: number;
  username: string;
  email: string;
  roleId: number;
  // PasswordHash/Salt ஆகியவை பாதுகாப்புக்காக இங்கே சேர்க்கப்படாது
}