import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import prisma from "../../src/prisma";

export const userOne = {
    input: {
        name: "jenn",
        email: "jenn@example.com",
        password: bcrypt.hashSync("Red098!@#$")
    },
    user: undefined,
    jwt: undefined
};

export const userTwo = {
    input: {
        name: "vikram",
        email: "vikram@example.com",
        password: bcrypt.hashSync("Red098!@#$")
    },
    user: undefined,
    jwt: undefined
};

export const seedDatabase = async () => {
    // Delete test data
    await prisma.mutation.deleteManyUsers();

    // create user one
    userOne.user = await prisma.mutation.createUser({
        data: userOne.input
    });
    userTwo.user = await prisma.mutation.createUser({
        data: userTwo.input
    });

    userOne.jwt = jwt.sign({ userId: userOne.user.id }, process.env.JWT_SECRET);
    userOne.jwt = jwt.sign({ userId: userOne.user.id }, process.env.JWT_SECRET);
};