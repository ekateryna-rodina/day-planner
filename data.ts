import { ScheduledTasks } from "types/task";

const initialData: ScheduledTasks = {
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
export default initialData;
