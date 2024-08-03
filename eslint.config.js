// eslint.config.js
export default [
    {
        extends: [
            "plugin:prettier/recommended",
            "prettier"
        ],
        plugins: ['prettier'],
        rules: {
            semi: "error",
            "prefer-const": "error",
            "prettier/prettier": ["warn"]
        }
    }
];
