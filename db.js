var Bookshelf = require('bookshelf');

var config = {
   host: 'localhost',  //  host
   user: 'root', //  database user
   password: '', //  database password
   database: 'dbUsers',
   charset: 'UTF8_GENERAL_CI'
};

var DB = Bookshelf.initialize({
   client: 'mysql', 
   connection: config
});

module.exports.DB = DB;
