import { extractFragmentReplacements } from "prisma-binding";
import Mutation from "./mutation";
import Query from "./query";
import Subscription from "./subscription";
import User from "./user";

export const resolvers = {
    mutation: Mutation,
    query: Query,
    // subscription: Subscription,
    user: User
};

export const fragmentReplacements = extractFragmentReplacements(resolvers);