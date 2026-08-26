export type status = "active" | "inactive" | "completed";

export interface todo {
  id: number;
  title: string;
  status: status;
}