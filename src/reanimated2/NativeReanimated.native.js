let ExportedModule;
if (process.env.JEST_WORKER_ID) {
  ExportedModule = require('./NativeReanimated.js').default;
} else {
  const TurboModuleRegistry = require('react-native').TurboModuleRegistry;

  const InnerNativeModule =
    global.__reanimatedModuleProxy ||
    TurboModuleRegistry.getEnforcing('NativeReanimated');

  const NativeReanimated = {
    native: true,

    installCoreFunctions(valueSetter) {
      return InnerNativeModule.installCoreFunctions(valueSetter);
    },

    makeShareable(value) {
      return InnerNativeModule.makeShareable(value);
    },

    makeMutable(value) {
      return InnerNativeModule.makeMutable(value);
    },

    makeRemote(object) {
      return InnerNativeModule.makeRemote(object);
    },

    startMapper(mapper, inputs = [], outputs = []) {
      return InnerNativeModule.startMapper(mapper, inputs, outputs);
    },

    stopMapper(mapperId) {
      return InnerNativeModule.stopMapper(mapperId);
    },

    registerEventHandler(eventHash, eventHandler) {
      return InnerNativeModule.registerEventHandler(eventHash, eventHandler);
    },

    unregisterEventHandler(registrationId) {
      return InnerNativeModule.unregisterEventHandler(registrationId);
    },

    getViewProp(viewTag, propName, callback) {
      return InnerNativeModule.getViewProp(viewTag, propName, callback);
    },
  };

  ExportedModule = NativeReanimated;
}
export default ExportedModule;