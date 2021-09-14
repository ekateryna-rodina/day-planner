import { Project } from "./project";

export type Block = {
  [key: string]: ScheduledTask[];
};

export type Task = {
  id: number;
  title: string;
  description: string;
  projectId: number;
  project: Project;
};

export type ScheduledTask = {
  id: string;
  taskId: number;
  section: number;
  order: number;
  done: boolean;
  datetime: string;
  task: Task;
};

export type QuickTask = {
  id: string;
  description: string;
  done: boolean;
};
