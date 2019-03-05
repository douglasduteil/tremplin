module.exports = {
  "plugins": [
    [
      "module-resolver",
      {
        "alias": {
          "@components": "./src/components",
          "@domain": "./src/domain",
          "@repository": "./src/repository",
        },
        "root": [
          "./"
        ]

      }
    ],
    ["styled-components", {
      "displayName": true,
      "preprocess": false,
      "ssr": true,
    }]
  ],
  "presets": [
    "next/babel",
    "@zeit/next-typescript/babel"
  ],
};
