export type Block = {
  [key: string]: Task[];
};

export type Task = {
  id: string;
  logo: string;
  projectName: string;
  description: string;
  done: boolean;
  className: string;
  block: number;
};
