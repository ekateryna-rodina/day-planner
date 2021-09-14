import { makeSchema, mutationType, objectType, queryType } from "@nexus/schema";
import { nexusSchemaPrisma } from "nexus-plugin-prisma/schema";
import path from "path";

const Project = objectType({
  name: "Project",
  definition(t) {
    t.model.id();
    t.model.name();
    t.model.className();
    t.model.logo();
    t.model.avatars();
    t.model.tasks();
    t.nonNull.list.nonNull.field("tasks", {
      type: "Task",
      resolve: (parent, _, ctx) => {
        return ctx.prisma.task.findMany({
          where: { projectId: parent.id },
        });
      },
    });
  },
});
const Task = objectType({
  name: "Task",
  definition(t) {
    t.int("id");
    t.string("title");
    t.string("description");
    t.int("projectId");
    t.field("project", {
      type: "Project",
      resolve: (parent, _, ctx) => {
        return ctx.prisma.project.findUnique({
          where: { id: parent.projectId },
        });
      },
    });
  },
});
const ScheduledTask = objectType({
  name: "ScheduledTask",
  definition(t) {
    t.int("id");
    t.int("taskId");
    t.int("section");
    t.int("order");
    t.boolean("done");
    t.string("datetime");
    t.field("task", {
      type: "Task",
      resolve: (parent, _, ctx) => {
        return ctx.prisma.task.findUnique({
          where: { id: parent.taskId },
        });
      },
    });
  },
});

const QuickTask = objectType({
  name: "QuickTask",
  definition(t) {
    t.int("id");
    t.string("description");
    t.boolean("done");
  },
});
export const Query = queryType({
  definition(t) {
    t.crud.project();
    t.crud.projects();
    t.crud.quickTasks();
    t.crud.quickTask();
    t.crud.tasks();
    t.crud.task();
    t.crud.scheduledTasks();
    t.crud.scheduledTask();
  },
});

const Mutation = mutationType({
  definition(t) {
    t.crud.createOneProject();
    t.crud.createOneQuickTask();
    t.crud.createOneTask();
    t.crud.createOneScheduledTask();
  },
});

export const schema = makeSchema({
  types: [Query, Project, Task, ScheduledTask, QuickTask, Mutation],
  plugins: [nexusSchemaPrisma({ experimentalCRUD: true })],
  outputs: {
    schema: path.join(process.cwd(), "schema.graphql"),
    typegen: path.join(process.cwd(), "nexus.ts"),
  },
  typegenAutoConfig: {
    contextType: "Context.Context",
    sources: [
      {
        source: "@prisma/client",
        alias: "prisma",
      },
      {
        source: require.resolve("./context"),
        alias: "Context",
      },
    ],
  },
});
