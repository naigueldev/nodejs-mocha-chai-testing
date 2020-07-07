const app = require('./app');
const config = require('./app/config');

const { port } = config.server;

app.listen(port, () => {
    console.log(`Server running on port ${port}...`);
});
