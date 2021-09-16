import { Project } from "./project";

export type ScheduledTasks = {
  tasks: {
    [key: string]: ScheduledTask;
  };
  sections: {
    [key: string]: Section;
  };
  sectionIds: string[];
};

export type Section = {
  id: string;
  name: string;
  taskIds: string[];
};

export type Task = {
  id: string;
  title: string;
  description: string;
  projectId: string;
  project: Project;
};

export type ScheduledTask = {
  id: string;
  taskId: string;
  done: boolean;
  datetime: string;
  task: Task;
};

export type QuickTask = {
  id: string;
  description: string;
  done: boolean;
};
