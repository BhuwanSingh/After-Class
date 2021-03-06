const bcrypt = require("bcrypt");
const User = require("../models/user");

exports.register = async (req, res) => {
  const { username, email, phone, password, cpassword } = req.body;

  if (!username || !email || !phone || !password || !cpassword) {
    return res.status(422).json({ error: "One or more fields empty" });
  } else if (password != cpassword) {
    return res.status(422).json({ error: "Passwords no matching" });
  } else {
    try {
      const userExist = await User.findOne({ email: email });
      if (userExist) {
        return res.json({ error: "Email already exists" });
      }
      const user = new User({ username, email, phone, password, cpassword });

      try {
        const userSaved = await user.save();

        if (userSaved) {
          return res.json({ message: "User Registered Successfully!" });
        }
      } catch {
        res.json({ error: "Server Error" });
      }
    } catch (err) {
      console.log(err);
    }
  }
};
exports.signIn = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: "One or more fields empty" });
    }

    const userLogin = await User.findOne({ email: email });

    if (userLogin) {
      const isMatch = await bcrypt.compare(password, userLogin.password);

      const token = await userLogin.generateAuthToken();
      // const reToken = await userLogin.generateRefreshToken();

      let fifteenminutes = 15 * 60 * 1000;

      res.cookie("jwtoken", token, {
        expires: new Date(Date.now() + fifteenminutes),
        httpOnly: true,
      });

      if (!isMatch) {
        res.status(400).json({ error: "User Error" });
      } else {
        res.json({ message: "User SignIn Successful" });
      }
    } else {
      res.status(400).json({ error: "User Error" });
    }
  } catch (err) {
    console.log(err.message);
  }
};

exports.signOut = async (req, res, next) => {
  res.status(202).clearCookie("jwtoken").send("Logged out");
};

exports.listUsers = async (req, res, next) => {
  try {
    const { sortType = "-created" } = req.body;
    const users = await User.find().sort(sortType);
    res.json(users);
  } catch (error) {
    next(error);
  }
};

exports.search = async (req, res, next) => {
  try {
    // console.log(req.params.email);
    const users = await User.find({
      email: { $regex: req.params.email, $options: "i" },
    });
    console.log(users);
    res.json(users);
  } catch (error) {
    next(error);
  }
};

exports.find = async (req, res, next) => {
  try {
    const users = await User.findOne({ username: req.params.username });
    console.log(users);
    res.json(users);
  } catch (error) {
    next(error);
  }
};
