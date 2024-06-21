import { SettingState, IThemeColor, ISetting } from '../interface';

// Selectors
export function saveLocal(state: { setting: SettingState }): string {
    const settingState: SettingState = state.setting;
    return settingState.saveLocal.toString();
}
export function app_name(state: { setting: SettingState }): string{
    const setting: ISetting = state.setting.setting;
    return setting.app_name.value.toString();
}
export function theme_scheme (state: {setting: SettingState}): string{
    const setting: ISetting = state.setting.setting;
    return setting.theme_scheme.value.toString();
}
export function theme_scheme_direction (state: {setting: SettingState}): string{
    const setting: ISetting = state.setting.setting;
    return setting.theme_scheme_direction.value.toString();
}
export function theme_style_appearance (state: {setting: SettingState}): string[]{
    const setting: ISetting = state.setting.setting;
    return setting.theme_style_appearance.value;
}
export function theme_color (state: {setting: SettingState}): IThemeColor{
    const setting: ISetting = state.setting.setting;
    return setting.theme_color;
}
export function theme_transition (state: {setting: SettingState}): string{
    const setting: ISetting = state.setting.setting;
    return setting.theme_transition.value.toString();
}
export function theme_font_size (state: {setting: SettingState}): string{
    const setting: ISetting = state.setting.setting;
    return setting.theme_font_size.value.toString();
}
export function page_layout(state: {setting: SettingState}): string{
    const setting: ISetting = state.setting.setting;
    return setting.page_layout.value.toString();;
}
export function header_navbar (state: {setting: SettingState}): string{
    const setting: ISetting = state.setting.setting;
    return setting.header_navbar.value.toString();
}
export function card_style (state: {setting: SettingState}): string{
    const setting: ISetting = state.setting.setting;
    return setting.card_style.value.toString();
}
export function header_banner (state: {setting: SettingState}): string{
    const setting: ISetting = state.setting.setting;
    return setting.header_banner.value.toString();
}
export function sidebar_color (state: {setting: SettingState}): string{
    const setting: ISetting = state.setting.setting;
    return setting.sidebar_color.value.toString();
}
export function sidebar_type (state: {setting: SettingState}): string[]{
    const setting: ISetting = state.setting.setting;
    return setting.sidebar_type.value;
}
export function sidebar_show (state: {setting: SettingState}): string[] {
    const setting: ISetting = state.setting.setting;
    return setting.sidebar_show.value;
}
export function navbar_show (state: {setting: SettingState}): string[] {
    const setting: ISetting = state.setting.setting;
    return setting.navbar_show.value;
}
export function sidebar_menu_style (state: {setting: SettingState}): string {
    const setting: ISetting = state.setting.setting;
    return setting.sidebar_menu_style.value.toString();
}
export function footer (state: {setting: SettingState}): string{
    const setting: ISetting = state.setting.setting;
    return setting.footer.value.toString();
}
export function body_font_family (state: {setting: SettingState}): string{
    const setting: ISetting = state.setting.setting;
    return setting.body_font_family.value.toString();
}
export function heading_font_family (state: {setting: SettingState}): string{
    const setting: ISetting = state.setting.setting;
    return setting.heading_font_family.value.toString();
}
export function settingObj (state: any): SettingState{
    return state;
}