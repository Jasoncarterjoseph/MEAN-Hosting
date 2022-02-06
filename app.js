const EXPRESS = require('express');
const path = require('path');
const CONFIG = require('./config/config');

const PORT =  process.env.PORT || 8080;
let env = 'production';

const APP = EXPRESS();

require('./config/database.config')(CONFIG[env]);
require('./config/express')(APP);
require('./config/routes')(APP);

if (process.env.NODE_ENV === 'production') {
	APP.use(EXPRESS.static('public'));
}

APP.get('*', (request, response) => {
	response.sendFile(path.join(__dirname, 'public', 'index.html'));
});
// APP.use(EXPRESS.static(path.join(__dirname, 'public')));
// APP.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public/index.html'));
//   });

APP.listen(PORT);
console.log(`Server is listening on port ${PORT}`);