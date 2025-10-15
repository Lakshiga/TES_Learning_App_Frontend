export interface IStudent {
  id: number;
  nickname: string;
  // Date/DateTime ஆனது JSON-ல் string-ஆக வரும்
  dateOfBirth: string; 
  avatar: string; 
  parentUserId: number;
}