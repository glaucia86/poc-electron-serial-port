module.exports = {
  "extends": "airbnb-base",
  "globals": {
    $: true,
    "window": true,
    "document": true
  },
  "plugins": [
    "import"
  ],
  "rules": {
    "no-console": "off",
    "import/newline-after-import": "off",
    "import/no-extraneous-dependencies": [
      "error",
      {
        "devDependencies": true
      }
    ],
    "no-unused-vars": 0,
    "max-len": 0
  }
};
