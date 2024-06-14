const router = require('express').Router();
const {
  getUser, 
  getUsers, 
  sortUsersByAge, 
  sortUsersByDomain,
  sortUsersByName,
  updateUser,
  deleteUser,
} = require('../controllers/users');

router.post('/', createUser);

router.get('/', getUsers);

router.get('/:id', getUser);

router.get('/:age/:ageid', sortUsersByAge);

router.get('/domain/:domain', sortUsersByDomain);

router.get('/sorted', sortUsersByName);

router.patch('/', updateUser);

router.delete('/:id', deleteUser);




module.exports = router;