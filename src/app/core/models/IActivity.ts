export interface IActivity {
  id: number;
  // இது JSON string என்பதால், frontend-ல் Parse செய்யப்பட வேண்டும்
  details_JSON: string | null; 
  stageId: number;
  mainActivityId: number;
  activityTypeId: number;
}