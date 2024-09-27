import jwt from "jsonwebtoken";
export const tokens = async (user) => {
  let token = await jwt.sign({ id: user.id }, process.env.secretTOK, {
    expiresIn: "5600d",
  });
  return token;
};
