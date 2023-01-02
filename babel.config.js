module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        "babel-plugin-root-import",
        {
          "paths":[
            {
              rootPathPrefix: "@s",
              rootPathSuffix: "./src",
            },
            {
              rootPathPrefix: "@components",
              rootPathSuffix: "./src/components",
            },
          ]
        }
      ],
    ],
  };
};
