export interface IStudentProgress {
  id: number;
  score: number;
  completedAt: string; // Date/DateTime ஆனது JSON-ல் string-ஆக வரும்
  studentId: number;
  activityId: number;
}