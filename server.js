'use strict';

const get_app_server = require('./app.js');
const database = require('./database.js');
const database_init = database.database_init;

// if (!process.env.SSL_CONTACT_EMAIL) {
//     console.error(`[ERROR] The environment variable 'SSL_CONTACT_EMAIL' is not set, please set it.`);
//     process.exit();
// }

(async () => {
    // Ensure database is initialized.
    await database_init();

    const app = await get_app_server();

    // The app will run on HTTP, and SSL termination will be handled by the reverse proxy.
    const port = process.env.PORT || 5000; // You can adjust the port as needed.

    app.listen(port, () => {
        console.log(`Server listening on port ${port}`);
    });
})();
