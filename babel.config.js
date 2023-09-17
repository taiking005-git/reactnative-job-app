module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      "@babel/plugin-proposal-export-namespace-from",
      "react-native-reanimated/plugin",
      ["module:react-native-dotenv", {
        "envName": "APP_ENV",
        "moduleName": "@env",
        "path": ".env",
        "safe": false,
        "allowUndefined": true,
        "verbose": false
      }],
      require.resolve("expo-router/babel"),
    ],
  };
};

// module.exports = function (api) {
//   api.cache(true);
//   return {
//     presets: ["babel-preset-expo"],
//     plugins: [
//       "@babel/plugin-proposal-export-namespace-from",
//       "react-native-reanimated/plugin",
//     ],
//     env: {
//       development: {
//         plugins: [
//           [
//             "module:react-native-dotenv",
//             {
//               moduleName: "@env",
//               path: ".env.development",
//               blocklist: null,
//               allowlist: null,
//               safe: false,
//               allowUndefined: true,
//               verbose: false,
//             },
//           ],
//         ],
//       },
//       production: {
//         plugins: [
//           [
//             "module:react-native-dotenv",
//             {
//               moduleName: "@env",
//               path: ".env.production",
//               blocklist: null,
//               allowlist: null,
//               safe: false,
//               allowUndefined: true,
//               verbose: false,
//             },
//           ],
//         ],
//       },
//     },
//   };
// };
