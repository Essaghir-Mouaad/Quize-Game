const express = require("express");
const router = express.Router();
const usersLayout = "../views/layouts/users"
const User = require('../models/User');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

/**
 * GET |
 * login page
 */
router.get('/login', async (req, res) => {
  res.render("users/login", { layout: usersLayout });
});

/**
* GET |
* register page
*/
router.get('/register', async (req, res) => {
  res.render("users/register", { layout: usersLayout });
});

/**
 * POST |
 * admin user
 */

router.get('/admin', async (req, res) => {
  res.render("users/admin", { layout: usersLayout });
});

/**
 * POST |
 * dashboard user
 */

router.get('/dashboard', async (req, res) => {
  res.render("users/dashboard", { layout: usersLayout });
});

module.exports = router;