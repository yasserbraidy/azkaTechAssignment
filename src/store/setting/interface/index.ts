export interface ObjectMap {
    [key: string]: string,
}

interface SettingValueMap {
    value: string
}
interface SettingArrValueMap {
    value: string[],
}
interface DefaultMap{
    target?: string | Element,
    choices?: string[],
    type?: string,
}
export interface IThemeColor extends DefaultMap{
    colors: ObjectMap,
    value: string,
}

export interface IChoices {
    SchemeChoice: string[],
    ColorChoice: string[],
    StyleAppearanceChoice: string[],
    CardStyle: string[],
    FSChoice: string[],
    Animation: string[],
}

interface DefaultVStringMap extends DefaultMap, SettingValueMap {}
interface DefaultVArrayMap extends DefaultMap, SettingArrValueMap { }

export interface ISetting{
    app_name: DefaultVStringMap,
    theme_scheme: DefaultVStringMap,
    theme_scheme_direction: DefaultVStringMap,
    theme_style_appearance: DefaultVArrayMap,
    theme_color: IThemeColor,
    theme_transition: DefaultVStringMap,
    theme_font_size: DefaultVStringMap,
    page_layout: DefaultVStringMap,
    header_navbar: DefaultVStringMap,
    card_style: DefaultVStringMap,
    header_banner: DefaultVStringMap,
    sidebar_color: DefaultVStringMap,
    sidebar_type: DefaultVArrayMap,
    sidebar_show: DefaultVArrayMap,
    navbar_show: DefaultVArrayMap,
    sidebar_menu_style: DefaultVStringMap,
    footer: DefaultVStringMap,
    body_font_family: DefaultVStringMap,
    heading_font_family: DefaultVStringMap,
}
export interface SettingState {
    saveLocal: string,
    storeKey: string,
    setting: ISetting,
}
