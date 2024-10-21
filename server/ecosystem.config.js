module.exports = {
  apps: [
    {
      name: "project-management-dashboard",
      script: "npm",
      args: "run dev",
      env: {
        NODE_ENV: "development",
      },
    },
  ],
};
