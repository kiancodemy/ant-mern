import { User } from "../model/user.js";
import { tokens } from "../DbConnection/Token.js";
///create user///
export const create = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
      throw new Error("fill out all the fields");
    }
    const create = await User.create(req.body);

    const { username: u, email: e, role: r } = create;
    const data = { username: u, email: e, role: r };
    res.status(201).json({
      status: "success",
      message: "created successfully",
      data,
    });
  } catch (err) {
    res.status(404).json({
      status: "failed",
      message: err.message,
    });
  }
};
//// login //
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      throw new Error("fill out all the fields");
    }
    const find = await User.findOne({ email });
    if (!find) {
      throw new Error("the email is not valid");
    }
    const ismatch = await find.decode(find.password);
    if (!ismatch) {
      throw new Error("password is not correct");
    }
    const token = await tokens(find);

    res.cookie("jwt", token, {
      httpOnly: true,
      secure: process.env.MODE === "production",
      sameSite: "None",
      maxAge: 5600 * 24 * 60 * 60 * 1000,
    });
    res.status(201).json({
      status: "success",
      message: "Login successfully",
      data: find,
      token,
    });
  } catch (err) {
    res.status(404).json({
      status: "failed",
      message: "failed to Login",
    });
  }
};
