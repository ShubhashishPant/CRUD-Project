const express = require('express');
const { getUsers, getUserById, deleteUser } = require('../controllers/userController');

const router = express.Router();

router.get('/', getUsers); // Fetch all users
router.get('/:id', getUserById); // Fetch a single user by ID
router.delete('/:id', deleteUser); // Delete a user by ID

module.exports = router;
