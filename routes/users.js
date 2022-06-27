const {Router} = require('express');
const router = Router();


const { getListUsers, getListAdmins, postEditUser, postRuleUser, postDeleteUser, postAddUser } = require('../controllers/users');
const { getUserToken } = require('../controllers/auth');


//List users
router.get('/usersList', getListUsers);

//List admins
router.get('/adminsList', getListAdmins);

//Edit name
router.post('/editName', postEditUser);

//Change on bun
router.post('/changeOnBan', postRuleUser);

//Delete User
router.post('/deleteUser', postDeleteUser);

//Add User
router.post('/addUser', postAddUser);

//get user after validation token
router.get('/check', getUserToken);

module.exports = router;