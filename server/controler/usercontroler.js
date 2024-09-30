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

    const ismatch = await find.decode(password);
    if (!ismatch) {
      throw new Error("password is not correct");
    }
    const token = await tokens(find);
    const data = {
      username: find.username,
      email: find.email,
      role: find.role,
    };

    res.cookie("jwt", token, {
      httpOnly: true,
      secure: process.env.MODE === "production",
      /*sameSite: "None",*/
      maxAge: 56 * 100 * 7 * 24 * 60 * 60 * 1000,
    });
    res.status(201).json({
      status: "success",
      message: "Login successfully",
      userInfo: data,
    });
  } catch (err) {
    res.status(404).json({
      status: "failed",
      message: err.message,
    });
  }
};

export const logout = async (req, res) => {
  try {
    res.clearCookie("jwt");
    res.status(201).json({
      status: "success",
      message: "Logout successfully",
    });
  } catch (err) {
    res.status(404).json({
      status: "failed",
      message: err.message,
    });
  }
};

export const middleware = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;
    if (!token) {
      throw new error("please login");
    }

    const { id } = await jwt.verify(token, process.env.secretTOK);
    const find = User.findById(id);
    req.user = find;
    next();
  } catch (err) {
    res.status(404).json({
      status: "failed",
      message: err.message,
    });
  }
};

export const AdminMiddleware = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;
    if (!token) {
      throw new error("please login");
    }

    const { id } = await jwt.verify(token, process.env.secretTOK);
    const find = User.findById(id);
    if (find.role !== "admin") {
      throw new Error("you are not admin");
    }
    req.user = find;
    next();
  } catch (err) {
    res.status(404).json({
      status: "failed",
      message: err.message,
    });
  }
};
