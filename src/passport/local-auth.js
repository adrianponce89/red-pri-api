const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const User = require('../models/user');

module.exports = function (passport) {
  passport.use(
    'local-signin',
    new LocalStrategy(
      {
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: true
      },
      async (req, email, password, done) => {
        console.log('Called local-signin strategy');
        // check in mongo if a user with email exists or not
        const user = await User.findOne({ email });
        // Username does not exist, log error & redirect back
        if (!user) {
          console.log('User Not Found with email ' + email);
          return done(
            null,
            false,
            { error: 'The user does not exist' }
          );
        }
        // User exists but wrong password, log the error
        if (!user.comparePassword(password)) {
          console.log('Invalid Password');
          return done(null, false,  { error: 'Invalid Password' });
        }
        console.log('Valid user and Password');
        done(null, user);
      }
    )
  );
  
  passport.use(
    'local-signup',
    new LocalStrategy(
      {
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: true
      },
      (req, email, password, done) => {
        console.log('Called local-signup strategy');
        findOrCreateUser = async () => {
          // find a user in Mongo with provided email
          const user = await User.findOne({ email });
          // already exists
          if (user) {
            console.log('User already exists');
            return done(
              null,
              false,
              { error: 'User Already Exists' }
            );
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
            done(null, newUser);
          }
        };
  
        // Delay the execution of findOrCreateUser and execute
        // the method in the next tick of the event loop
        process.nextTick(findOrCreateUser);
      }
    )
  );
  
  passport.serializeUser((user, done) => {
    done(null, user._id);
  });
  
  passport.deserializeUser(async (id, done) => {
    const user = await User.findById(id);
    done(null, user);
  });
}
