// Central configuration. Values come from the environment.
module.exports = {
  port: Number(process.env.PORT) || 3000,
  logLevel: process.env.LOG_LEVEL || 'info',
  stageUnlockKey: process.env.STAGE_UNLOCK_KEY,
};
