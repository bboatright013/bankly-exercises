/** Auth-related routes. */

const User = require('../models/user');
const express = require('express');
const router = express.Router();
const createTokenForUser = require('../helpers/createToken');
const userSchema = require('../schemas/user.json')
const jsonschema = require("jsonschema");
const ExpressError = require("../helpers/expressError");


/** Register user; return token.
 *
 *  Accepts {username, first_name, last_name, email, phone, password}.
 *
 *  Returns {token: jwt-token-string}.
 *
 *  If incorrect username/password given, should raise 401.
 *
 */

router.post('/register', async function(req, res, next) {
  try {
    const result = jsonschema.validate(req.body, userSchema);
    if(!result.valid){
      let listOfErrors = result.errors.map( error => error.stack);
      let error = new ExpressError(listOfErrors, 400);
      return next(error);
    }
    const { username, password, first_name, last_name, email, phone } = req.body;
    let user = await User.register({username, password, first_name, last_name, email, phone});

    // console.log(user.admin);
    const token = createTokenForUser(username, user.admin);
    return res.status(201).json({ token });
  } catch (err) {
    return next(err);
  }
}); // end

/** Log in user; return token.
 *
 *  Accepts {username, password}.
 *
 *  Returns {token: jwt-token-string}.
 *
 *  If incorrect username/password given, should raise 401.
 *
 */
// BUG #3 FIX added await to line 2
router.post('/login', async function(req, res, next) {
  try {
    const { username, password } = req.body;
    let user = await User.authenticate(username, password);
    console.log(user);
    const token = createTokenForUser(username, user.admin);
    return res.json({ token });
  } catch (err) {
    return next(err);
  }
}); // end

module.exports = router;
