import {SettingState} from '../interface'

// Initial Setting State
export const initialState: SettingState = {
    saveLocal: "localStorage",
    storeKey: "yasserBrKeyy",
    setting: {
        app_name: {
            value: "Azka Tech"
        },
        theme_scheme_direction: {
            value: "ltr"
        },
        theme_scheme: {
            value: "dark"
        },
        theme_style_appearance: {
            value: [
                "theme-default",
                "theme-flat"
            ]
        },
        theme_color: {
            colors: {
                "--{{prefix}}primary": "#00C3F9",
                "--{{prefix}}info": "#573BFF"
            },
            value: "theme-color-blue"
        },
        theme_transition: {
            value: "theme-with-animation"
        },
        theme_font_size: {
            value: "theme-fs-md"
        },
        page_layout: {
            value: "container-fluid"
        },
        header_navbar: {
            value: "navs-default"
        },
        card_style: {
            value: "card-default"
        },
        header_banner: {
            value: "default"
        },
        sidebar_color: {
            value: "sidebar-white"
        },
        sidebar_type: {
            value: [
                "sidebar-soft"
            ]
        },
        sidebar_show: {
            value: []
        },
        navbar_show: {
            value: []
        },
        sidebar_menu_style: {
            value: "left-bordered"
        },
        footer: {
            value: "default"
        },
        body_font_family: {
            value: "Montserrat"
        },
        heading_font_family: {
            value: ""
        }
    }
};


// Default Setting State
export const defaultState: SettingState = {
    saveLocal: "localStorage",
    storeKey: "yasserBrKeyy",
    setting: {
        app_name: {
            value: "Azka Tech"
        },
        theme_scheme_direction: {
            value: "ltr"
        },
        theme_scheme: {
            value: "dark"
        },
        theme_style_appearance: {
            value: [
                "theme-default",
                "theme-flat"
            ]
        },
        theme_color: {
            colors: {
                "--{{prefix}}primary": "#00C3F9",
                "--{{prefix}}info": "#573BFF"
            },
            value: "theme-color-blue"
        },
        theme_transition: {
            value: "theme-with-animation"
        },
        theme_font_size: {
            value: "theme-fs-md"
        },
        page_layout: {
            value: "container-fluid"
        },
        header_navbar: {
            value: "navs-default"
        },
        card_style: {
            value: "card-default"
        },
        header_banner: {
            value: "default"
        },
        sidebar_color: {
            value: "sidebar-white"
        },
        sidebar_type: {
            value: [
                "sidebar-soft"
            ]
        },
        sidebar_show: {
            value: []
        },
        navbar_show: {
            value: []
        },
        sidebar_menu_style: {
            value: "left-bordered"
        },
        footer: {
            value: "default"
        },
        body_font_family: {
            value: "Montserrat"
        },
        heading_font_family: {
            value: ""
        }
    }
};