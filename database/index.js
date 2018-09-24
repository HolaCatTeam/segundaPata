var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'holacode',
  database : 'segundaPata'
});

var selectAvatar = function(callback) {
  connection.query('SELECT * FROM avatar', function(err, results, fields) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};

var selectAll = function(callback) {
  connection.query('SELECT * FROM items', function(err, results, fields) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};

// var picturePath = function(callback) {
//   connection.query('SELECT * FROM items WHERE category = "picturePath"', function(err, results, fields) {
//     if(err) {
//       callback(err, null);
//     } else {
//       callback(null, results);
//     }
//   });
// };

var selectToys = function(callback) {
  connection.query('SELECT * FROM items WHERE category = "juguetes"', function(err, results, fields) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};

var selectClothes = function(callback) {
  connection.query('SELECT * FROM items WHERE category = "ropa"', function(err, results, fields) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};

var selectBeds = function(callback) {
  connection.query('SELECT * FROM items WHERE category = "camitas"', function(err, results, fields) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};

var selectAccesories = function(callback) {
  connection.query('SELECT * FROM items WHERE category = "accesorios"', function(err, results, fields) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};

const getSingleProfile = function(profId) {
  return new Promise((resolve, reject) => {
    connection.query('SELECT * FROM profiles WHERE id = profId', (err, data) => {
      if (err) {
        return reject(err);
      }
    return resolve(data);
    })
  })
};

const insertProduct = function(name, descrip, price, category, email, vendor, picture_path, callback) {
  console.log("quiubo desde la db");
  connection.query(
    'INSERT INTO items (name, descrip, price, category, email, vendor, picture_path) VALUES (?, ?, ?, ?, ?, ?)',
    [name, descrip, price, category, email, vendor, picture_path],
    (err, results, fields) => {
      if (err) {
        callback(err, null);
      } else {
        console.log(results);
        callback(null, results);
      }
    }
  );
};



module.exports.selectAvatar = selectAvatar;
module.exports.selectAll = selectAll;
module.exports.selectToys = selectToys;
module.exports.insertProduct = insertProduct;
module.exports.selectClothes = selectClothes;
module.exports.selectBeds = selectBeds;
module.exports.selectAccesories = selectAccesories;
