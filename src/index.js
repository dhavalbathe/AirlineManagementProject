const express = require('express');

const {PORT} = require('./config/serverConfig');
const apiRoutes = require('./routes/index');

const prepareAndStartServer = () => {
    const app = express();

    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    app.use('/api', apiRoutes);

    app.listen(PORT, () => {
        console.log(`Server is running on port: ${PORT}`);
    })
}

prepareAndStartServer();