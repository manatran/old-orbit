const errorHandler = require("./../utils/errorHandler");
const config = require("./../../../config/config");

// Signup user through GitHub
exports.signup = (req, res, next) => {
  const { code } = req.query;

  if (!code) {
    return errorHandler.handleAPIError(500, "Code not found", next);
  }

  res.send(code);

  /*
    TODO:
    1. Post code to get Acess Token from GitHub
    2. GET User info
    3. Check if user exists yet
    4. Register if user does not yet exist
    5. Create session
    6. Save session  
  */
};
