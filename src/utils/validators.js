const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };
  
  const validatePassword = (password) => {
    // Minimum 8 characters, at least 1 letter and 1 number
    const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return regex.test(password);
  };
  
  const validateObjectId = (id) => {
    const mongoose = require("mongoose");
    return mongoose.Types.ObjectId.isValid(id);
  };
  
  module.exports = { validateEmail, validatePassword, validateObjectId };
  