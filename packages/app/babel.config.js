module.exports = {
  "plugins": [
    [
      "module-resolver",
      {
        "alias": {
          "@components": "./src/components",
          "@models": "./src/models",
        },
        "root": [
          "./"
        ]

      }
    ]
  ],
  "presets": [
    "next/babel",
    "@zeit/next-typescript/babel"
  ],
};
