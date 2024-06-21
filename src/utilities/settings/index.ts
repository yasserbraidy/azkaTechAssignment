import _ from 'lodash'
import { getColorShadeTint } from '../colors'
import { getRootVars, setRootVariables, setFontFamily } from '../root-var'
import { addClass, removeClass, setAttr, setContent } from '../dom'
import {ObjectMap, ISetting, IChoices, SettingState, IThemeColor} from './../../store/setting/interface';

export const updateBodyClass = (choices: string[], value: string | string[] | null) => {
    const valueArray = Array.isArray(value) ? value : value !== null ? [value] : [];

    // Remove class from choices
    choices.forEach((choice) => {
        removeClass('body', choice);
    });

    // Add class
    valueArray.forEach((val) => {
        addClass('body', val);
    });
};

export const updateHtmlAttr = (value: {prop: string, value: string,}) => {
    // set direction
    setAttr('html', value)
}

export const updateHtmlClass = (choices: string[], value: string | string[] | null) => {
    // Convert single value to array
    const valueArray = Array.isArray(value) ? value : value !== null ? [value] : [];

    // Remove class from choices
    if (choices.length > 0) {
        choices.forEach((choice) => {
            removeClass('html', choice);
        });
    }

    // Add class
    if (valueArray.length > 0) {
        addClass('html', ...valueArray);
    }
};

export const updateTitle = (value: string) => {
    // set title
    setContent('[data-setting="app_name"]', value)
}

export const updateColorRootVar = (theme_scheme: string, theme_color: IThemeColor, choices: string[]) => {
    
    const prefix = getRootVars("--prefix") || "bs-";
    let newColors: any = {};
    let dark = false
    if (theme_scheme !== 'light' && theme_scheme !== 'auto') {
        dark = true
    }
    
    _.forEach(theme_color.colors, (value: any, key: any) => {
        key = key.replace("{{prefix}}", prefix);

        newColors = {
            ...newColors,
            ...getColorShadeTint(key, value, dark),
        };

    });

    setRootVariables(newColors);
    removeClass("body", ...choices);
    addClass("body", ...[theme_color.value]);
}

export const updateDomValueBySetting = (setting: ISetting, Choices:IChoices) => { //takes the old choices and replace them with the new settings
    updateHtmlAttr({prop: 'dir',  value: setting.theme_scheme_direction.value});
    updateHtmlClass(Choices.FSChoice, setting.theme_font_size.value)
    updateBodyClass(Choices.SchemeChoice, setting.theme_scheme.value)
    updateBodyClass(Choices.SchemeChoice, setting.theme_scheme.value)
    updateBodyClass(Choices.StyleAppearanceChoice, setting.theme_style_appearance.value)
    updateBodyClass(Choices.Animation, setting.theme_transition.value)
    updateColorRootVar(setting.theme_scheme.value, setting.theme_color, Choices.ColorChoice)
    updateTitle(setting.app_name.value)
    setFontFamily('body', setting.body_font_family.value)
    setFontFamily('heading', setting.heading_font_family.value)
}

export const updateStorage = (storage: string ,key: string, value: SettingState) => {
    if(typeof value !== typeof undefined && typeof key !== typeof undefined) {
        switch (storage) {
            case 'localStorage':
                sessionStorage.removeItem(key)
                localStorage.setItem(key, JSON.stringify(value))       
                break;

            case 'sessionStorage':
                localStorage.removeItem(key)
                sessionStorage.setItem(key, JSON.stringify(value))
                break;
        
            default:
                localStorage.removeItem(key)
                sessionStorage.removeItem(key)
                localStorage.setItem(key, 'none')
                sessionStorage.setItem(key, 'none')
                break;
        }
    }
}

export const getStorage = (key: string) => {
    if (localStorage.getItem(key) === 'none' || sessionStorage.getItem(key) === 'none') return 'none';

    if((localStorage.getItem(key) !== null && localStorage.getItem(key) !== '' ) || 
    (sessionStorage.getItem(key) !== null && sessionStorage.getItem(key) !== '')) {
        let value = localStorage.getItem(key)
        if(value === null) value = sessionStorage.getItem(key)
        if (value !== null) {
            try {
                return JSON.parse(value);
            } catch (e) {
                return value
            }
        }
    }
    return null
}