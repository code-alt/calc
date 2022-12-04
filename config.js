// edit this to edit the style to the app

module.exports.config, module.exports = {
    port: 3000,
    style: {
        "main-font": "'Noto Serif', sans-serif", // main font family when using calculator blocks
        "main-font-size": "1.5rem", // main font size when using calculator blocks
        "main-font-weight": "normal", // main font weight when using calculator blocks
        "secondary-font": {
            "useSecondaryFont": false, // if you want just one font keep this to false
            "secondary-font": "'Roboto', sans-serif", // secondary font family for popups and pretty much everything else
            "secondary-font-size": "1.5rem",
            "secondary-font-weight": "normal",
        },
    }
}