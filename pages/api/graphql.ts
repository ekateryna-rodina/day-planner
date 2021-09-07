import { ApolloServer } from "apollo-server-micro";
import { createContext } from "src/context";
import { schema } from "src/schema";

console.log(process.env.DATABASE_URL)
const apolloServer = new ApolloServer({ schema, context:  
                                        createContext, 
                                        tracing: process.env.NODE_ENV === "development" });

const handler = apolloServer.createHandler({ path: "/api/graphql" });
export const config = {
  api: {
    bodyParser: false,
  },
};
export default handler;
