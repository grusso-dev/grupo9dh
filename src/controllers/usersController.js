const fs = require('fs')
const path = require('path')
const ftp = require('basic-ftp')
const { Readable } = require('stream')

const usersFilePath = path.join(__dirname, '../data/usersDataBase.json')
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'))

const db = require('../database/models');
const { Console } = require('console')

async function ftp_upload(image_origin_route, image_destiny_route) {
  // Connect to the FTP server
  const client = new ftp.Client()
  await client.access({
    host: 'ftp.linsock.com.ar',
    user: 'u629722589.soundstage',
    password: '12_Soundstage_34'
  })
  // Upload the file to the FTP server
  await client.uploadFrom(image_origin_route, image_destiny_route)
  // Close the FTP connection
  client.close()
}

const usersController = {

  login: (req, res) => {
    db.user.findAll().then((users)=>{
      console.log("Consulta OK");
      console.log(users[0]);
      res.render('login');

    }).catch((error) => {
      res.render('login');
      console.log(error);
    });
  },
  logindata: (req, res) => {
    console.log(req.body)
    console.log('sesión iniciada')
    res.redirect('/')
  },
  register: async (req, res) => {
    // db.conciertos.findAll({include:[{association:"User"}]}).then((conciertos)=>{
    //   console.log("Consulta conciertos OK");
    //   console.log(conciertos);
    //   res.render('register')

    // }).catch((error) => {
    //   console.log("Consulta conciertos NOK");
    //   res.render('register')
    //   //console.log(error);
    // });
    try{
      let conciertos = await db.conciertos.findAll({include:[{association:"User"}]});
      res.send(conciertos);
      //res.render('register',{conciertos});
    }
    catch(error){
      console.log(error.message);

    }
  },
  registerdata: (req, res) => {
    res.render('registerdata')
  },
  save: async (req, res) => {
    const newUser = {
      id: null,
      user: req.body.user,
      mail: req.body.mail,
      fullname: req.body.fullname,
      password: req.body.password,
      fiscal_value:req.body.fiscal_value,
      cbu_alias:req.body.cbu_alias,
      fiscal_type:"type1",//req.body.fiscal_type, ??
      count_type:'type1',//req.body.count_type,??
      //create_date:req.body.create_date ??
    }
    //console.log(req.body);
    let ret =  await db.user.create(newUser);

    res.render('login')
  }
}

module.exports = usersController
