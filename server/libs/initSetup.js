import Role from "../models/role.js";

export const createRoles = async () => {
  try {
    const counter = await Role.estimatedDocumentCount();
    if (counter > 0) return;

    const values = await Promise.all([
      new Role({ name: "admin" }).save(),
      new Role({ name: "user" }).save(),
    ]);

    console.log(values);
  } catch (error) {
    console.error(error);
  }
};
