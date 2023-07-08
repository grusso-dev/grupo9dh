const fs = require('fs');
const path = require('path');
const ftp = require('basic-ftp');

 const concertsFilePath = path.join(__dirname, '../data/concertsDataBase.json');

const concerts = JSON.parse(fs.readFileSync(concertsFilePath, 'utf-8'));

 async function ftp_upload(image_origin_route, image_destiny_route) {
  // Connect to the FTP server
  const client = new ftp.Client();
  await client.access({
    host: 'ftp.linsock.com.ar',
    user: 'u629722589.soundstage',
    password: '12_Soundstage_34'
  });
   // Upload the file to the FTP server
  await client.uploadFrom(image_origin_route, image_destiny_route);
   // Close the FTP connection
  client.close();
}


 const concertController = {
  detail: (req, res) => {
    res.render('detail');
  },
  create: (req, res) => {
    res.render('editconcert');
  },
  edit: (req, res) => {
    res.render('editconcert');
  },
  store: async (req, res) => {
    await ftp_upload(path.join(__dirname, '../../public/images/products', req.file.filename), '/www/images/' + req.file.filename);
  },
  concerts: (req, res) => {
    res.render('todosLosConciertos');
  },
  list: (req, res) => {
    // Implement the logic for listing concerts
  }
};
 module.exports = concertController;