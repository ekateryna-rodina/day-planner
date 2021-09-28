import { Project } from "types/project";
import { QuickTask, ScheduledTasks } from "types/task";

const initialProjectData: Record<string | number, Project> = {
  "1": {
    id: "1",
    className: "blue",
    name: "Personal portfolio",
    logo: "https://res.cloudinary.com/kariecloud/image/upload/v1629311147/IMAGE_2021-08-11_18_39_43_r0ituj.jpg",
    avatars: [
      "https://res.cloudinary.com/kariecloud/image/upload/v1629311147/IMAGE_2021-08-11_19_31_19_tercal.jpg",
      "https://res.cloudinary.com/kariecloud/image/upload/v1629311147/IMAGE_2021-08-11_19_31_47_a9fevj.jpg",
      "https://res.cloudinary.com/kariecloud/image/upload/v1629311147/IMAGE_2021-08-11_19_20_37_owk8e6.jpg",
    ],
  },
  "2": {
    id: "1",
    className: "turquoise",
    name: "Personal portfolio",
    logo: "https://res.cloudinary.com/kariecloud/image/upload/v1629311147/IMAGE_2021-08-11_20_44_27_v24656.jpg",
    avatars: [
      "https://res.cloudinary.com/kariecloud/image/upload/v1629311147/IMAGE_2021-08-11_19_20_37_owk8e6.jpg",
      "https://res.cloudinary.com/kariecloud/image/upload/v1629311147/IMAGE_2021-08-11_19_28_18_hor5og.jpg",
    ],
  },
};

const initialQuickTasksData: Record<string, QuickTask> = {
  1: {
    id: "1",
    description:
      "Quick call to Jason regarding tomorrows presentation Quick call to Jason regarding tomorrows presentation",
    done: false,
  },
  2: {
    id: "2",
    description:
      "Check the mail from Richard Check the mail from RichardCheck the mail from Richard",
    done: true,
  },
  3: {
    id: "3",
    description: "Call my mom Call my momCall my mom",
    done: false,
  },
};
const initialTaskData: ScheduledTasks = {
  tasks: {
    "1": {
      id: "1",
      taskId: "1",
      done: false,
      datetime: new Date().toUTCString(),
      task: {
        id: "1",
        title: "title 1",
        description: "description 1",
        projectId: "1",
        project: {
          id: "1",
          name: "project 1",
          logo: "https://res.cloudinary.com/kariecloud/image/upload/v1629311147/IMAGE_2021-08-11_18_39_43_r0ituj.jpg",
          className: "blue",
          avatars: [
            "https://res.cloudinary.com/kariecloud/image/upload/v1629311147/IMAGE_2021-08-11_19_20_37_owk8e6.jpg",
            "https://res.cloudinary.com/kariecloud/image/upload/v1629311147/IMAGE_2021-08-11_19_28_18_hor5og.jpg",
          ],
        },
      },
    },
    "2": {
      id: "2",
      taskId: "2",
      done: false,
      datetime: new Date().toUTCString(),
      task: {
        id: "2",
        title: "title 2",
        description: "description 1",
        projectId: "1",
        project: {
          id: "1",
          name: "project 1",
          logo: "https://res.cloudinary.com/kariecloud/image/upload/v1629311147/IMAGE_2021-08-11_18_39_43_r0ituj.jpg",
          className: "blue",
          avatars: [
            "https://res.cloudinary.com/kariecloud/image/upload/v1629311147/IMAGE_2021-08-11_19_20_37_owk8e6.jpg",
            "https://res.cloudinary.com/kariecloud/image/upload/v1629311147/IMAGE_2021-08-11_19_28_18_hor5og.jpg",
          ],
        },
      },
    },
    "3": {
      id: "3",
      taskId: "3",
      done: false,
      datetime: new Date().toUTCString(),
      task: {
        id: "3",
        title: "title 3",
        description: "description 3",
        projectId: "2",
        project: {
          id: "2",
          name: "project 2",
          logo: "https://res.cloudinary.com/kariecloud/image/upload/v1629311147/IMAGE_2021-08-11_18_39_43_r0ituj.jpg",
          className: "blue",
          avatars: [
            "https://res.cloudinary.com/kariecloud/image/upload/v1629311147/IMAGE_2021-08-11_19_20_37_owk8e6.jpg",
            "https://res.cloudinary.com/kariecloud/image/upload/v1629311147/IMAGE_2021-08-11_19_28_18_hor5og.jpg",
          ],
        },
      },
    },
    "4": {
      id: "4",
      taskId: "4",
      done: false,
      datetime: new Date().toUTCString(),
      task: {
        id: "4",
        title: "title 4",
        description: "description 4",
        projectId: "2",
        project: {
          id: "2",
          name: "project 2",
          logo: "https://res.cloudinary.com/kariecloud/image/upload/v1629311147/IMAGE_2021-08-11_18_39_43_r0ituj.jpg",
          className: "blue",
          avatars: [
            "https://res.cloudinary.com/kariecloud/image/upload/v1629311147/IMAGE_2021-08-11_19_20_37_owk8e6.jpg",
            "https://res.cloudinary.com/kariecloud/image/upload/v1629311147/IMAGE_2021-08-11_19_28_18_hor5og.jpg",
          ],
        },
      },
    },
  },
  sections: {
    col1: {
      name: "1block",
      id: "col1",
      taskIds: ["1", "2"],
    },
    col2: {
      name: "2block",
      id: "col2",
      taskIds: ["3", "4"],
    },
  },
  sectionIds: ["col1", "col2"],
};
export { initialTaskData, initialProjectData, initialQuickTasksData };
