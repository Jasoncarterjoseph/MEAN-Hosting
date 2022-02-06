const EXPRESS = require('express');

const CONFIG = require('./config/config');

const PORT =  process.env.PORT || 6000;
let env = 'development';

const APP = EXPRESS();

require('./config/database.config')(CONFIG[env]);
require('./config/express')(APP);
require('./config/routes')(APP);

if(process.env.NODE_ENV==='production'){
    APP.use(EXPRESS.static('../client/dist/online-book-store'))
}

APP.listen(PORT);
console.log(`Server is listening on port ${PORT}`);