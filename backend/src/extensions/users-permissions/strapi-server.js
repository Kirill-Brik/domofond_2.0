module.exports = (plugin) => {
  const existingAuthControllers = plugin.controllers.auth;

  const overriddenAuthControllers = {
    // Overridden callback
    async callback(ctx) {
      return await existingAuthControllers.callback(ctx).catch((error) => {
        if (error.name === "ValidationError")
          error.message = "Неверная почта или пароль";
        throw error;
      });
    },
  };

  plugin.controllers.auth = {
    ...existingAuthControllers,
    ...overriddenAuthControllers,
  };

  return plugin;
};
