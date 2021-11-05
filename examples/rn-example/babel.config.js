module.exports = {
    presets: ["module:metro-react-native-babel-preset"],
    "plugins": [
        ["styled-components", { "ssr": true }],
        "@babel/plugin-proposal-class-properties",
    //     [
    //         "module-resolver",
    //         {
    //             "alias": {
    //                 "react-native-simple-elements": "./react-native-simple-elements",
    //             }
    //         }
    //     ]
    ]
};
