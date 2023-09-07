// module.exports = {
//   apps: [
//     {
//       name: "app",
//       // script: "./build",
//       script: "./src/App.js",
//       watch: false,
//       env: {
//         PORT: 3000,
//         NODE_ENV: "development",
//       },
//       env_production: {
//         PORT: 80,
//         NODE_ENV: "production",
//       },
//     },
//   ],
// };

// module.exports = {
//   apps: [
//     {
//       name: "app",
//       script: "./src/App.js",
//       env: {
//         NODE_ENV: "development",
//       },
//       env_production: {
//         NODE_ENV: "production",
//       },
//     },
//   ],
// };

module.exports = {
  apps: [
    {
      name: "app",
      script: "npm",
      args: "start",
      env: {
        PORT: 3000,
        NODE_ENV: "development",
      },
      env_production: {
        PORT: 80,
        NODE_ENV: "production",
      },
      // cwd: "./src/App.js",
      // watch: true,
      // env: {
      // NODE_ENV: "production",
      // },
    },
  ],
};
