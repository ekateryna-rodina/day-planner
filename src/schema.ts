import { makeSchema, objectType, queryType } from "@nexus/schema";

const Project = objectType({
  name: "Project",
  definition(t) {
    t.string("id");
    t.string("name");
    t.string("className");
    t.string("logo");
  },
});
const ScheduledTask = objectType({
  name: "ScheduledTask",
  definition(t) {
    t.string("id");
    t.string("projectName");
    t.string("description");
    t.string("logo");
    t.string("className");
    t.int("block");
    t.int("position");
    t.boolean("done");
  },
});

const QuickTask = objectType({
  name: "QuickTask",
  definition(t) {
    t.string("id");
    t.string("description");
    t.boolean("done");
  },
});
export const Query = queryType({
  definition(t) {
    t.list.field("projects", {
      type: "Project",
      resolve: () => {
        return [
          {
            id: "1",
            name: "Facebook",
            className: "blue",
            logo: "https://res.cloudinary.com/kariecloud/image/upload/v1629311147/IMAGE_2021-08-11_18_39_43_r0ituj.jpg",
          },
        ];
      },
    });

    t.list.field("scheduledTasks", {
      type: "ScheduledTask",
      resolve: () => {
        return [
          {
            id: "2",
            projectName: "School House",
            description: "QA on new web page",
            logo: "https://res.cloudinary.com/kariecloud/image/upload/v1629311147/IMAGE_2021-08-12_17_43_12_zwupv1.jpg",
            done: false,
            className: "pink",
            block: 1,
            position: 2,
          },
        ];
      },
    });

    t.list.field("quickTasks", {
      type: "QuickTask",
      resolve: () => {
        return [
          {
            id: "2",
            description:
              "Check the mail from Richard Check the mail from RichardCheck the mail from Richard",
            done: true,
          },
          {
            id: "3",
            description:
              "Check the mail from Richard Check the mail from RichardCheck the mail from Richard",
            done: true,
          },
        ];
      },
    });
  },
});

export const schema = makeSchema({
  types: [Query, Project, ScheduledTask, QuickTask],
});
