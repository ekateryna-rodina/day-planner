/**
 * This file was generated by Nexus Schema
 * Do not make changes to this file directly
 */

import * as Context from "./src/context"



declare global {
  interface NexusGenCustomOutputProperties<TypeName extends string> {
    crud: NexusPrisma<TypeName, 'crud'>
    model: NexusPrisma<TypeName, 'model'>
  }
}

declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
  FileCreateManyTaskInput: { // input type
    id?: number | null; // Int
    name: string; // String!
    url: string; // String!
  }
  FileCreateManyTaskInputEnvelope: { // input type
    data?: NexusGenInputs['FileCreateManyTaskInput'][] | null; // [FileCreateManyTaskInput!]
    skipDuplicates?: boolean | null; // Boolean
  }
  FileCreateNestedManyWithoutTaskInput: { // input type
    connect?: NexusGenInputs['FileWhereUniqueInput'][] | null; // [FileWhereUniqueInput!]
    connectOrCreate?: NexusGenInputs['FileCreateOrConnectWithoutTaskInput'][] | null; // [FileCreateOrConnectWithoutTaskInput!]
    create?: NexusGenInputs['FileCreateWithoutTaskInput'][] | null; // [FileCreateWithoutTaskInput!]
    createMany?: NexusGenInputs['FileCreateManyTaskInputEnvelope'] | null; // FileCreateManyTaskInputEnvelope
  }
  FileCreateOrConnectWithoutTaskInput: { // input type
    create: NexusGenInputs['FileCreateWithoutTaskInput']; // FileCreateWithoutTaskInput!
    where: NexusGenInputs['FileWhereUniqueInput']; // FileWhereUniqueInput!
  }
  FileCreateWithoutTaskInput: { // input type
    name: string; // String!
    url: string; // String!
  }
  FileWhereUniqueInput: { // input type
    id?: number | null; // Int
  }
  ProjectCreateInput: { // input type
    avatars?: NexusGenInputs['ProjectCreateavatarsInput'] | null; // ProjectCreateavatarsInput
    className: string; // String!
    logo: string; // String!
    name: string; // String!
    tasks?: NexusGenInputs['TaskCreateNestedManyWithoutProjectInput'] | null; // TaskCreateNestedManyWithoutProjectInput
  }
  ProjectCreateNestedOneWithoutTasksInput: { // input type
    connect?: NexusGenInputs['ProjectWhereUniqueInput'] | null; // ProjectWhereUniqueInput
    connectOrCreate?: NexusGenInputs['ProjectCreateOrConnectWithoutTasksInput'] | null; // ProjectCreateOrConnectWithoutTasksInput
    create?: NexusGenInputs['ProjectCreateWithoutTasksInput'] | null; // ProjectCreateWithoutTasksInput
  }
  ProjectCreateOrConnectWithoutTasksInput: { // input type
    create: NexusGenInputs['ProjectCreateWithoutTasksInput']; // ProjectCreateWithoutTasksInput!
    where: NexusGenInputs['ProjectWhereUniqueInput']; // ProjectWhereUniqueInput!
  }
  ProjectCreateWithoutTasksInput: { // input type
    avatars?: NexusGenInputs['ProjectCreateavatarsInput'] | null; // ProjectCreateavatarsInput
    className: string; // String!
    logo: string; // String!
    name: string; // String!
  }
  ProjectCreateavatarsInput: { // input type
    set?: string[] | null; // [String!]
  }
  ProjectWhereUniqueInput: { // input type
    id?: number | null; // Int
    name?: string | null; // String
  }
  QuickTaskCreateInput: { // input type
    description: string; // String!
    done?: boolean | null; // Boolean
  }
  QuickTaskWhereUniqueInput: { // input type
    id?: number | null; // Int
  }
  ScheduledTaskCreateInput: { // input type
    datetime: NexusGenScalars['DateTime']; // DateTime!
    done?: boolean | null; // Boolean
    order: number; // Int!
    section: number; // Int!
    task: NexusGenInputs['TaskCreateNestedOneWithoutScheduledTaskInput']; // TaskCreateNestedOneWithoutScheduledTaskInput!
  }
  ScheduledTaskCreateManyTaskInput: { // input type
    datetime: NexusGenScalars['DateTime']; // DateTime!
    done?: boolean | null; // Boolean
    id?: number | null; // Int
    order: number; // Int!
    section: number; // Int!
  }
  ScheduledTaskCreateManyTaskInputEnvelope: { // input type
    data?: NexusGenInputs['ScheduledTaskCreateManyTaskInput'][] | null; // [ScheduledTaskCreateManyTaskInput!]
    skipDuplicates?: boolean | null; // Boolean
  }
  ScheduledTaskCreateNestedManyWithoutTaskInput: { // input type
    connect?: NexusGenInputs['ScheduledTaskWhereUniqueInput'][] | null; // [ScheduledTaskWhereUniqueInput!]
    connectOrCreate?: NexusGenInputs['ScheduledTaskCreateOrConnectWithoutTaskInput'][] | null; // [ScheduledTaskCreateOrConnectWithoutTaskInput!]
    create?: NexusGenInputs['ScheduledTaskCreateWithoutTaskInput'][] | null; // [ScheduledTaskCreateWithoutTaskInput!]
    createMany?: NexusGenInputs['ScheduledTaskCreateManyTaskInputEnvelope'] | null; // ScheduledTaskCreateManyTaskInputEnvelope
  }
  ScheduledTaskCreateOrConnectWithoutTaskInput: { // input type
    create: NexusGenInputs['ScheduledTaskCreateWithoutTaskInput']; // ScheduledTaskCreateWithoutTaskInput!
    where: NexusGenInputs['ScheduledTaskWhereUniqueInput']; // ScheduledTaskWhereUniqueInput!
  }
  ScheduledTaskCreateWithoutTaskInput: { // input type
    datetime: NexusGenScalars['DateTime']; // DateTime!
    done?: boolean | null; // Boolean
    order: number; // Int!
    section: number; // Int!
  }
  ScheduledTaskWhereUniqueInput: { // input type
    id?: number | null; // Int
  }
  TaskCreateInput: { // input type
    ScheduledTask?: NexusGenInputs['ScheduledTaskCreateNestedManyWithoutTaskInput'] | null; // ScheduledTaskCreateNestedManyWithoutTaskInput
    description: string; // String!
    files?: NexusGenInputs['FileCreateNestedManyWithoutTaskInput'] | null; // FileCreateNestedManyWithoutTaskInput
    project: NexusGenInputs['ProjectCreateNestedOneWithoutTasksInput']; // ProjectCreateNestedOneWithoutTasksInput!
    title: string; // String!
  }
  TaskCreateManyProjectInput: { // input type
    description: string; // String!
    id?: number | null; // Int
    title: string; // String!
  }
  TaskCreateManyProjectInputEnvelope: { // input type
    data?: NexusGenInputs['TaskCreateManyProjectInput'][] | null; // [TaskCreateManyProjectInput!]
    skipDuplicates?: boolean | null; // Boolean
  }
  TaskCreateNestedManyWithoutProjectInput: { // input type
    connect?: NexusGenInputs['TaskWhereUniqueInput'][] | null; // [TaskWhereUniqueInput!]
    connectOrCreate?: NexusGenInputs['TaskCreateOrConnectWithoutProjectInput'][] | null; // [TaskCreateOrConnectWithoutProjectInput!]
    create?: NexusGenInputs['TaskCreateWithoutProjectInput'][] | null; // [TaskCreateWithoutProjectInput!]
    createMany?: NexusGenInputs['TaskCreateManyProjectInputEnvelope'] | null; // TaskCreateManyProjectInputEnvelope
  }
  TaskCreateNestedOneWithoutScheduledTaskInput: { // input type
    connect?: NexusGenInputs['TaskWhereUniqueInput'] | null; // TaskWhereUniqueInput
    connectOrCreate?: NexusGenInputs['TaskCreateOrConnectWithoutScheduledTaskInput'] | null; // TaskCreateOrConnectWithoutScheduledTaskInput
    create?: NexusGenInputs['TaskCreateWithoutScheduledTaskInput'] | null; // TaskCreateWithoutScheduledTaskInput
  }
  TaskCreateOrConnectWithoutProjectInput: { // input type
    create: NexusGenInputs['TaskCreateWithoutProjectInput']; // TaskCreateWithoutProjectInput!
    where: NexusGenInputs['TaskWhereUniqueInput']; // TaskWhereUniqueInput!
  }
  TaskCreateOrConnectWithoutScheduledTaskInput: { // input type
    create: NexusGenInputs['TaskCreateWithoutScheduledTaskInput']; // TaskCreateWithoutScheduledTaskInput!
    where: NexusGenInputs['TaskWhereUniqueInput']; // TaskWhereUniqueInput!
  }
  TaskCreateWithoutProjectInput: { // input type
    ScheduledTask?: NexusGenInputs['ScheduledTaskCreateNestedManyWithoutTaskInput'] | null; // ScheduledTaskCreateNestedManyWithoutTaskInput
    description: string; // String!
    files?: NexusGenInputs['FileCreateNestedManyWithoutTaskInput'] | null; // FileCreateNestedManyWithoutTaskInput
    title: string; // String!
  }
  TaskCreateWithoutScheduledTaskInput: { // input type
    description: string; // String!
    files?: NexusGenInputs['FileCreateNestedManyWithoutTaskInput'] | null; // FileCreateNestedManyWithoutTaskInput
    project: NexusGenInputs['ProjectCreateNestedOneWithoutTasksInput']; // ProjectCreateNestedOneWithoutTasksInput!
    title: string; // String!
  }
  TaskWhereUniqueInput: { // input type
    id?: number | null; // Int
  }
}

export interface NexusGenEnums {
}

export interface NexusGenScalars {
  String: string
  Int: number
  Float: number
  Boolean: boolean
  ID: string
  DateTime: any
}

export interface NexusGenObjects {
  Mutation: {};
  Project: { // root type
    avatars: string[]; // [String!]!
    className: string; // String!
    id: number; // Int!
    logo: string; // String!
    name: string; // String!
  }
  Query: {};
  QuickTask: { // root type
    description?: string | null; // String
    done?: boolean | null; // Boolean
    id?: number | null; // Int
  }
  ScheduledTask: { // root type
    datetime?: string | null; // String
    done?: boolean | null; // Boolean
    id?: number | null; // Int
    order?: number | null; // Int
    section?: number | null; // Int
    taskId?: number | null; // Int
  }
  Task: { // root type
    description?: string | null; // String
    id?: number | null; // Int
    projectId?: number | null; // Int
    title?: string | null; // String
  }
}

export interface NexusGenInterfaces {
}

export interface NexusGenUnions {
}

export type NexusGenRootTypes = NexusGenObjects

export type NexusGenAllTypes = NexusGenRootTypes & NexusGenScalars

export interface NexusGenFieldTypes {
  Mutation: { // field return type
    createOneProject: NexusGenRootTypes['Project']; // Project!
    createOneQuickTask: NexusGenRootTypes['QuickTask']; // QuickTask!
    createOneScheduledTask: NexusGenRootTypes['ScheduledTask']; // ScheduledTask!
    createOneTask: NexusGenRootTypes['Task']; // Task!
  }
  Project: { // field return type
    avatars: string[]; // [String!]!
    className: string; // String!
    id: number; // Int!
    logo: string; // String!
    name: string; // String!
    tasks: NexusGenRootTypes['Task'][]; // [Task!]!
  }
  Query: { // field return type
    project: NexusGenRootTypes['Project'] | null; // Project
    projects: NexusGenRootTypes['Project'][]; // [Project!]!
    quickTask: NexusGenRootTypes['QuickTask'] | null; // QuickTask
    quickTasks: NexusGenRootTypes['QuickTask'][]; // [QuickTask!]!
    scheduledTask: NexusGenRootTypes['ScheduledTask'] | null; // ScheduledTask
    scheduledTasks: NexusGenRootTypes['ScheduledTask'][]; // [ScheduledTask!]!
    task: NexusGenRootTypes['Task'] | null; // Task
    tasks: NexusGenRootTypes['Task'][]; // [Task!]!
  }
  QuickTask: { // field return type
    description: string | null; // String
    done: boolean | null; // Boolean
    id: number | null; // Int
  }
  ScheduledTask: { // field return type
    datetime: string | null; // String
    done: boolean | null; // Boolean
    id: number | null; // Int
    order: number | null; // Int
    section: number | null; // Int
    task: NexusGenRootTypes['Task'] | null; // Task
    taskId: number | null; // Int
  }
  Task: { // field return type
    description: string | null; // String
    id: number | null; // Int
    project: NexusGenRootTypes['Project'] | null; // Project
    projectId: number | null; // Int
    title: string | null; // String
  }
}

export interface NexusGenFieldTypeNames {
  Mutation: { // field return type name
    createOneProject: 'Project'
    createOneQuickTask: 'QuickTask'
    createOneScheduledTask: 'ScheduledTask'
    createOneTask: 'Task'
  }
  Project: { // field return type name
    avatars: 'String'
    className: 'String'
    id: 'Int'
    logo: 'String'
    name: 'String'
    tasks: 'Task'
  }
  Query: { // field return type name
    project: 'Project'
    projects: 'Project'
    quickTask: 'QuickTask'
    quickTasks: 'QuickTask'
    scheduledTask: 'ScheduledTask'
    scheduledTasks: 'ScheduledTask'
    task: 'Task'
    tasks: 'Task'
  }
  QuickTask: { // field return type name
    description: 'String'
    done: 'Boolean'
    id: 'Int'
  }
  ScheduledTask: { // field return type name
    datetime: 'String'
    done: 'Boolean'
    id: 'Int'
    order: 'Int'
    section: 'Int'
    task: 'Task'
    taskId: 'Int'
  }
  Task: { // field return type name
    description: 'String'
    id: 'Int'
    project: 'Project'
    projectId: 'Int'
    title: 'String'
  }
}

export interface NexusGenArgTypes {
  Mutation: {
    createOneProject: { // args
      data: NexusGenInputs['ProjectCreateInput']; // ProjectCreateInput!
    }
    createOneQuickTask: { // args
      data: NexusGenInputs['QuickTaskCreateInput']; // QuickTaskCreateInput!
    }
    createOneScheduledTask: { // args
      data: NexusGenInputs['ScheduledTaskCreateInput']; // ScheduledTaskCreateInput!
    }
    createOneTask: { // args
      data: NexusGenInputs['TaskCreateInput']; // TaskCreateInput!
    }
  }
  Query: {
    project: { // args
      where: NexusGenInputs['ProjectWhereUniqueInput']; // ProjectWhereUniqueInput!
    }
    projects: { // args
      after?: NexusGenInputs['ProjectWhereUniqueInput'] | null; // ProjectWhereUniqueInput
      before?: NexusGenInputs['ProjectWhereUniqueInput'] | null; // ProjectWhereUniqueInput
      first?: number | null; // Int
      last?: number | null; // Int
    }
    quickTask: { // args
      where: NexusGenInputs['QuickTaskWhereUniqueInput']; // QuickTaskWhereUniqueInput!
    }
    quickTasks: { // args
      after?: NexusGenInputs['QuickTaskWhereUniqueInput'] | null; // QuickTaskWhereUniqueInput
      before?: NexusGenInputs['QuickTaskWhereUniqueInput'] | null; // QuickTaskWhereUniqueInput
      first?: number | null; // Int
      last?: number | null; // Int
    }
    scheduledTask: { // args
      where: NexusGenInputs['ScheduledTaskWhereUniqueInput']; // ScheduledTaskWhereUniqueInput!
    }
    scheduledTasks: { // args
      after?: NexusGenInputs['ScheduledTaskWhereUniqueInput'] | null; // ScheduledTaskWhereUniqueInput
      before?: NexusGenInputs['ScheduledTaskWhereUniqueInput'] | null; // ScheduledTaskWhereUniqueInput
      first?: number | null; // Int
      last?: number | null; // Int
    }
    task: { // args
      where: NexusGenInputs['TaskWhereUniqueInput']; // TaskWhereUniqueInput!
    }
    tasks: { // args
      after?: NexusGenInputs['TaskWhereUniqueInput'] | null; // TaskWhereUniqueInput
      before?: NexusGenInputs['TaskWhereUniqueInput'] | null; // TaskWhereUniqueInput
      first?: number | null; // Int
      last?: number | null; // Int
    }
  }
}

export interface NexusGenAbstractTypeMembers {
}

export interface NexusGenTypeInterfaces {
}

export type NexusGenObjectNames = keyof NexusGenObjects;

export type NexusGenInputNames = keyof NexusGenInputs;

export type NexusGenEnumNames = never;

export type NexusGenInterfaceNames = never;

export type NexusGenScalarNames = keyof NexusGenScalars;

export type NexusGenUnionNames = never;

export type NexusGenObjectsUsingAbstractStrategyIsTypeOf = never;

export type NexusGenAbstractsUsingStrategyResolveType = never;

export type NexusGenFeaturesConfig = {
  abstractTypeStrategies: {
    isTypeOf: false
    resolveType: true
    __typename: false
  }
}

export interface NexusGenTypes {
  context: Context.Context;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  fieldTypeNames: NexusGenFieldTypeNames;
  allTypes: NexusGenAllTypes;
  typeInterfaces: NexusGenTypeInterfaces;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractTypeMembers: NexusGenAbstractTypeMembers;
  objectsUsingAbstractStrategyIsTypeOf: NexusGenObjectsUsingAbstractStrategyIsTypeOf;
  abstractsUsingStrategyResolveType: NexusGenAbstractsUsingStrategyResolveType;
  features: NexusGenFeaturesConfig;
}


declare global {
  interface NexusGenPluginTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginFieldConfig<TypeName extends string, FieldName extends string> {
    /**
     * Whether the type can be null
     * @default (depends on whether nullability is configured in type or schema)
     * @see declarativeWrappingPlugin
     */
    nullable?: boolean
    /**
     * Whether the type is list of values, or just a single value.
     * If list is true, we assume the type is a list. If list is an array,
     * we'll assume that it's a list with the depth. The boolean indicates whether
     * the type is required (non-null), where true = nonNull, false = nullable.
     * @see declarativeWrappingPlugin
     */
    list?: true | boolean[]
    /**
     * Whether the type should be non null, `required: true` = `nullable: false`
     * @default (depends on whether nullability is configured in type or schema)
     * @see declarativeWrappingPlugin
     */
    required?: boolean
  }
  interface NexusGenPluginInputFieldConfig<TypeName extends string, FieldName extends string> {
    /**
     * Whether the type can be null
     * @default (depends on whether nullability is configured in type or schema)
     * @see declarativeWrappingPlugin
     */
    nullable?: boolean
    /**
     * Whether the type is list of values, or just a single value.
     * If list is true, we assume the type is a list. If list is an array,
     * we'll assume that it's a list with the depth. The boolean indicates whether
     * the type is required (non-null), where true = nonNull, false = nullable.
     * @see declarativeWrappingPlugin
     */
    list?: true | boolean[]
    /**
     * Whether the type should be non null, `required: true` = `nullable: false`
     * @default (depends on whether nullability is configured in type or schema)
     * @see declarativeWrappingPlugin
     */
    required?: boolean
  }
  interface NexusGenPluginSchemaConfig {
  }
  interface NexusGenPluginArgConfig {
    /**
     * Whether the type can be null
     * @default (depends on whether nullability is configured in type or schema)
     * @see declarativeWrappingPlugin
     */
    nullable?: boolean
    /**
     * Whether the type is list of values, or just a single value.
     * If list is true, we assume the type is a list. If list is an array,
     * we'll assume that it's a list with the depth. The boolean indicates whether
     * the type is required (non-null), where true = nonNull, false = nullable.
     * @see declarativeWrappingPlugin
     */
    list?: true | boolean[]
    /**
     * Whether the type should be non null, `required: true` = `nullable: false`
     * @default (depends on whether nullability is configured in type or schema)
     * @see declarativeWrappingPlugin
     */
    required?: boolean
  }
}