import { ApolloServer } from "apollo-server-micro";
// import { createContext } from "src/context";
import { schema } from "src/schema";

const apolloServer = new ApolloServer({ schema });

const handler = apolloServer.createHandler({ path: "/api/graphql" });
export const config = {
  api: {
    bodyParser: false,
  },
};
export default handler;
