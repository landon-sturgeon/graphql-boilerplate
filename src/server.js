import { GraphQLServer, PubSub } from "graphql-yoga";
import { resolvers, fragmentReplacements } from "./resolvers/index";

import prisma from "./prisma";

const pubsub = new PubSub();

export default server = new GraphQLServer({
    typeDefs: "./src/schema.graphql",
    resolvers,
    context(request) {
        return {
            pubsub,
            prisma,
            request
        }
    },
    fragmentReplacements
});