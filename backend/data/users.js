import bcrypt from "bcryptjs";

const users = [
    {
        name: "Admin",
        email: "admin@test.com",
        password: bcrypt.hashSync("test1234", 10),
        isAdmin: true,
    },
    {
        name: "lokesh",
        email: "lokesh@test.com",
        password: bcrypt.hashSync("test1234", 10),
    },
    {
        name: "koushick",
        email: "koushick@test.com",
        password: bcrypt.hashSync("test1234", 10),
    },
];

export default users;
