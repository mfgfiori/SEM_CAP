const cds = require("@sap/cds");
const adapterProxy = require("@sap/cds-odata-v2-adapter-proxy");

cds.on("bootstrap", (app) => {
    app.use(adapterProxy());
    app.get("/alive", (_, res) => {
        res.status(200).send("Server is alive");
    });
});

if (process.env.NODE_ENV !== "production") {
    require("dotenv").config();
    const swagger = require("cds-swagger-ui-express");
    cds.on("bootstrap", (app) => app.use(swagger()));
}

module.exports = cds.server;