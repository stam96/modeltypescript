import ExpressExpeditious from "express-expeditious";
const defaultOptions = {
    namespace: "expresscache",
    defaultTtl: "1 minute",
    statusCodeExpires: {
      404: "5 minutes",
      500: 0,
    },
  }
const cacheInit = ExpressExpeditious(defaultOptions);
export default cacheInit