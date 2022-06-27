const knex = require('../utils/database');
const bcrypt = require('bcryptjs');//Password encryption library

const selectUsers = `SELECT users.id, users.name, users.rule, users.login
FROM users`;



//List users
const getListUsers = async (req, res) => {
    try {
        const { rows: users } = await knex.raw(`${selectUsers} WHERE users.id <> ${req.user.id} and users.rule <> 0`);
      
        res.json({ users });
      } catch (e) {
            console.log(e);
            res.status(500).json({
            message: 'Server error'
        }); 
        
      }
};

//List users
const getListAdmins = async (req, res) => {
  try {
      if(req.user.rule === 1) {
        const { rows: users } = await knex.raw(selectUsers);
        res.json({ users });
      } else res.json({ message: 'Not rule' });
      
    } catch (e) {
          console.log(e);
          res.status(500).json({
          message: 'Server error'
      }); 
      
    }
};

const postEditUser = async (req, res) => {
  try {
    const {body} = req.body;
    const query = `UPDATE users
    SET name = '${body.name}'
    WHERE users.id = ${body.id}`;
    const { rows: user } = await knex.raw(query);
    const { rows: users } = await knex.raw(selectUsers);
    res.status(200).json({ users });
     
  } catch (e) {
    console.log(e);
    res.status(500).json({
      message: 'Server error'
    }); 
  }
};

const postRuleUser = async (req, res) => {
  try {
    const {body} = req.body;
    const query = `UPDATE users
    SET rule = 0
    WHERE users.id = ${body.id}`;
    const { rows: user } = await knex.raw(query);
    const { rows: users } = await knex.raw(selectUsers);
    res.status(200).json({ users });
     
  } catch (e) {
    console.log(e);
    res.status(500).json({
      message: 'Server error'
    }); 
  }
};

const postDeleteUser = async (req, res) => {
  try {
    const {body} = req.body;
    const query = `DELETE FROM users
    WHERE users.id = ${body.id}`;
    const { rows: user } = await knex.raw(query);
    const { rows: users } = await knex.raw(selectUsers);
    res.status(200).json({ users });
     
  } catch (e) {
    console.log(e);
    res.status(500).json({
      message: 'Server error'
    }); 
  }
};

const postAddUser = async (req, res) => {

  try {
    const elem = req.body.body;
    const hashPassword = await bcrypt.hash(elem.passw, 10);//Password encryption
    const query = `INSERT INTO users (name, login, passw, rule) VALUES
      ('${elem.name}', '${elem.login}', '${hashPassword}', ${elem.rule})`
    const { rows:user } = await knex.raw(query);
    const { rows: users } = await knex.raw(selectUsers);
    res.status(200).json({ users });
              
            
  } catch (e) {
    console.log(e);
    
  }
};

module.exports = { getListUsers, getListAdmins, postEditUser, postRuleUser, postDeleteUser, postAddUser };