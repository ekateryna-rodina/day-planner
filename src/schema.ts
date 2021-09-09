import { makeSchema, objectType, queryType, idArg, mutationType } from "@nexus/schema";
import {nexusSchemaPrisma} from "nexus-plugin-prisma/schema";
import path from 'path';

const Project = objectType({
  name: "Project",
  definition(t) {
    // t.string("id");
    // t.string("name");
    // t.string("className");
    // t.string("logo");
    t.model.id();
    t.model.name();
    t.model.className();
    t.model.logo();
    t.model.avatars();
    t.model.tasks();   
  },
});
const ScheduledTask = objectType({
  name: "ScheduledTask",
  definition(t) {
    t.int("id");
    t.int("taskId");
    // t.model.task();
    // t.string("description");
    t.int("section");
    t.int("order");
    t.boolean("done");
    t.string("datetime");
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
    // t.crud.task();
    // t.crud.tasks();
    // t.crud.scheduledTask();
    // t.crud.scheduledTasks();
  },
});

const Mutation = mutationType({
  definition(t){
    t.crud.createOneProject();
    t.crud.createOneQuickTask();
    // t.crud.createOneTask();
    // t.crud.createOneScheduledTask();
  }
})

export const schema = makeSchema({
  types: [Query, Project, ScheduledTask, QuickTask, Mutation],
  plugins: [nexusSchemaPrisma({experimentalCRUD: true})],
  outputs: {
    schema: path.join(process.cwd(), "schema.graphql"),
    typegen: path.join(process.cwd(), "nexus.ts"),
  },
  typegenAutoConfig: {
    contextType: "Context.Context",
    sources: [
      {
        source: "@prisma/client",
        alias: "prisma"
      },
      {
        source: require.resolve("./context"),
        alias: "Context"
      }
    ]
  }
});
