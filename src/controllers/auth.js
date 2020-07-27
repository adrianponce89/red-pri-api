const { to } = require('await-to-js');
const User = require('../models/user');
const login = require('../auth/strategies/jwt').login;

module.exports = {
  signup: async (req, res) => {
    const { email, password } = req.body;

    if (!/\b\w+\@\w+\.\w+(?:\.\w+)?\b/.test(email)) {
      return res.status(500).json({
        success: false,
        error: 'Enter a valid email address.',
      });
    } else if (password.length < 5 || password.length > 20) {
      return res.status(500).json({
        success: false,
        error: 'Password must be between 5 and 20 characters.',
      });
    }

    findOrCreateUser = async () => {
      // find a user in Mongo with provided email
      const [err, user] = await to(User.findOne({ email }));

      const signupError = (error) => {
        return res.status(500).json({ success: false, error });
      };

      if (user) {
        console.log('User already exists with email ' + email);
        return signupError('Email is already taken');
      } else {
        // if there is no user with that email
        // create the user
        const newUser = await new User();
        // set the user's local credentials
        newUser.email = email;
        newUser.password = newUser.encryptPassword(password);

        // save the user
        await newUser.save();

        console.log('User Registration succesful');
        const [loginErr, token] = await to(login(req, user));

        if (loginErr) {
          console.error('Log in error', loginErr);
          return signupError('Authentication error!');
        }

        return res
          .status(200)
          .cookie('jwt', token, {
            httpOnly: false,
          })
          .json({
            success: true,
            user: newUser.secured(),
          });
      }
    };

    // Delay the execution of findOrCreateUser and execute
    // the method in the next tick of the event loop
    process.nextTick(findOrCreateUser);
  },
  signin: async (req, res) => {
    const { email, password } = req.body;
    const [err, user] = await to(User.findOne({ email }));

    const authenticationError = () => {
      return res
        .status(500)
        .json({ success: false, error: 'Authentication error!' });
    };

    if (!user) {
      console.log('User Not Found with email ' + email);
      return authenticationError();
    }

    if (!user.comparePassword(password)) {
      console.error('Passwords do not match');
      return authenticationError();
    }

    const [loginErr, token] = await to(login(req, user));

    if (loginErr) {
      console.error('Log in error', loginErr);
      return authenticationError();
    }

    return res
      .status(200)
      .cookie('jwt', token, {
        httpOnly: false,
      })
      .json({
        success: true,
        user: user.secured(),
      });
  },
  signout: (req, res) => {
    req.logout();
    res.status(200).json({
      success: true,
    });
  },
};
