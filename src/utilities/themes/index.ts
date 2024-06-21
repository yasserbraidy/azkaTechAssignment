import IThemes from "./interface";

export const themes: IThemes = {
    default: {
        value: "theme-color-default",
        colors: {
            "--{{prefix}}primary": "#3a57e8",
            "--{{prefix}}info": "#4bc7d2"
        }
    },
    theme1: {
        value: "theme-color-blue",
        colors: {
            "--{{prefix}}info": "#573BFF",
            "--{{prefix}}primary": "#00C3F9",
        }
    },
    theme2: {
        value: "theme-color-gray",
        colors: {
            "--{{prefix}}info": "#FD8D00",
            "--{{prefix}}primary": "#91969E",
        }
    },
    theme3: {
        value: "theme-color-red",
        colors: {
            "--{{prefix}}info": "#366AF0",
            "--{{prefix}}primary": "#DB5363",
        }
    },
    theme4: {
        value: "theme-color-yellow",
        colors: {
            "--{{prefix}}info": "#6410F1",
            "--{{prefix}}primary": "#EA6A12",
        }
    },
    theme5: {
        value: "theme-color-pink",
        colors: {
            "--{{prefix}}info": "#25C799",
            "--{{prefix}}primary": "#E586B3",
        }
    },
}