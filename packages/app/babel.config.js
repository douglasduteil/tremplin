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
    ]
  ],
  "presets": [
    "next/babel",
    "@zeit/next-typescript/babel"
  ],
};
