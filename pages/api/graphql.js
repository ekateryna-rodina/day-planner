import { ApolloServer, gql } from "apollo-server-micro";
import microCors from "micro-cors";
const cors = microCors();

console.log(cors);
const typeDefs = gql`
  type Query {
    sayHello: String
  }
`;

const resolvers = {
  Query: {
    sayHello(parent, args, context) {
      return "Hello World!";
    },
  },
};

const getApolloHandler = async () => {
  const apolloServer = new ApolloServer({ typeDefs, resolvers });
  await apolloServer.start();
  const handler = apolloServer.createHandler({ path: "/api/graphql" });
  return handler;
};
// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
  const apolloHandler = await getApolloHandler();
  return cors(
    (req, res) =>
      (req.method = "OPTIONS" ? send(res, 200, "ok") : apolloHandler(req, res))
  );
};

export const config = {
  api: {
    bodyParser: false,
  },
};
