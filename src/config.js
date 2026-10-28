// Central configuration. Values come from the environment where possible.
module.exports = {
  port: Number(process.env.PORT) || 3000,
  logLevel: process.env.LOG_LEVEL || 'info',
  // TODO: move to Key Vault before go-live
  stageUnlockKey: 'SDW-HIRE-7K42',
};
