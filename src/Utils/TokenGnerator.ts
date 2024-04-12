import jwt from "jsonwebtoken";

const TokenGrerator = (phone: string) => {
  const token = jwt.sign({ phone }, "SKUFHKNLOEFHKJANDJGYD", {
    expiresIn: "10day",
  });
  return token;
};

export default TokenGrerator;
