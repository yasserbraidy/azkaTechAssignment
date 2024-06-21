import { Draft, PayloadAction, createSlice } from '@reduxjs/toolkit';
import { initialState, defaultState } from '../state';
import { updateBodyClass, updateHtmlClass, updateHtmlAttr, updateTitle, updateColorRootVar, updateStorage, updateDomValueBySetting, getStorage } from '../../../utilities/settings';
import { setFontFamily } from '../../../utilities/root-var';
import _ from 'lodash';
import { IChoices, ISetting, SettingState } from '../interface';
const DefaultSetting = defaultState.setting

const Choices: IChoices = {
  SchemeChoice: DefaultSetting.theme_scheme?.choices ?? [],
  ColorChoice: DefaultSetting.theme_color?.choices ?? [],
  StyleAppearanceChoice: DefaultSetting.theme_style_appearance?.choices ?? [],
  CardStyle: DefaultSetting.card_style?.choices ?? [],
  FSChoice: DefaultSetting.theme_font_size?.choices ?? [],
  Animation: DefaultSetting.theme_transition?.choices ?? [],
};

function createSettingObj (state: SettingState ){
  return {
    saveLocal: state.saveLocal,
    storeKey: state.storeKey,
    setting: _.cloneDeep(state.setting)
  }
}

export const settingSlice = createSlice({
  name: 'setting',
  initialState,
  
  reducers: {
    setSetting: (state: Draft<SettingState>, action: PayloadAction<void>) => {
      const json = getStorage(state.storeKey);
      if (json === 'none') state.saveLocal = 'none'
      if(json !== null && json !== 'none') {
        state.saveLocal = json.saveLocal
        state.setting = json.setting
      }
      let stateSetting = state as SettingState;

      let setting = stateSetting.setting as ISetting;
      updateDomValueBySetting(setting, Choices)
      updateStorage(state.saveLocal, state.storeKey, createSettingObj(stateSetting));
    },
    reset_state: (state: Draft<SettingState>, action: PayloadAction<void>) => {
      let stateSetting = state as SettingState;
      let setting = stateSetting.setting as ISetting;

      setting = defaultState.setting
      updateDomValueBySetting(setting, Choices)
      updateStorage(state.saveLocal, state.storeKey, createSettingObj(stateSetting))
    },
    saveLocal: (state: Draft<SettingState>, action) => {
      if(typeof action.payload !== typeof undefined) {
        state.saveLocal = action.payload
      }

      const settingObj: SettingState = {
        saveLocal: state.saveLocal,
        storeKey: state.storeKey,
        setting: _.cloneDeep(state.setting as ISetting)
      }
      updateStorage(state.saveLocal, state.storeKey, settingObj)
    },
    app_name: (state: Draft<SettingState>, action) => {
      if(typeof action.payload !== typeof undefined) {
        state.setting.app_name.value = action.payload
      }
      updateTitle(state.setting.app_name.value)
      updateStorage(state.saveLocal, state.storeKey, createSettingObj(state as SettingState))
    },
    theme_scheme_direction: (state: Draft<SettingState>, action) => {
      if(typeof action.payload !== typeof undefined) {
        state.setting.theme_scheme_direction.value = action.payload
      }
      updateHtmlAttr({prop: 'dir',  value: state.setting.theme_scheme_direction.value})
      updateStorage(state.saveLocal, state.storeKey, createSettingObj(state as SettingState))
    },
    theme_scheme: (state: Draft<SettingState>, action) => {
      if(typeof action.payload !== typeof undefined) {
        state.setting.theme_scheme.value = action.payload
      }
      const settingState = state as SettingState;
      const theme = settingState.setting.theme_color;
      updateBodyClass(Choices.SchemeChoice, state.setting.theme_scheme.value)
      updateColorRootVar(state.setting.theme_scheme.value, theme, Choices.ColorChoice)
      updateStorage(state.saveLocal, state.storeKey, createSettingObj(state as SettingState))
    },
    theme_style_appearance: (state: Draft<SettingState>, action) => {
      
      if(typeof action.payload !== typeof undefined) {
        state.setting.theme_style_appearance.value = action.payload
      }
      updateBodyClass(Choices.StyleAppearanceChoice, state.setting.theme_style_appearance.value)
      updateStorage(state.saveLocal, state.storeKey, createSettingObj(state as SettingState))
    },
    theme_color: (state: Draft<SettingState>, action) => {
      
      if(typeof action.payload !== typeof undefined) {
        _.forEach(action.payload.colors, (value, key) => {
          state.setting.theme_color.colors[key] = value
        })
        state.setting.theme_color.value = action.payload.value
      }
      const settingState = state as SettingState;
      const theme = settingState.setting.theme_color;

      updateColorRootVar(state.setting.theme_scheme.value, theme, Choices.ColorChoice)
      updateStorage(state.saveLocal, state.storeKey, createSettingObj(state as SettingState))
    },
    theme_transition: (state: Draft<SettingState>, action) => {
      if(typeof action.payload !== typeof undefined) {
        state.setting.theme_transition.value = action.payload
      }
      updateBodyClass(Choices.Animation, state.setting.theme_transition.value)
      updateStorage(state.saveLocal, state.storeKey, createSettingObj(state as SettingState))
    },
    theme_font_size: (state: Draft<SettingState>, action) => {

      if(typeof action.payload !== typeof undefined) {
        state.setting.theme_font_size.value = action.payload
      }
      updateHtmlClass(Choices.FSChoice, state.setting.theme_font_size.value)
      updateStorage(state.saveLocal, state.storeKey, createSettingObj(state as SettingState))
    },
    page_layout: (state: Draft<SettingState>, action) => {
      const setting = state.setting;
      setting.page_layout.value = action.payload
      updateStorage(state.saveLocal, state.storeKey, createSettingObj(state as SettingState))
    },
    header_navbar: (state: Draft<SettingState>, action) => {
      state.setting.header_navbar.value = action.payload
      updateStorage(state.saveLocal, state.storeKey, createSettingObj(state as SettingState))
    },
    card_style: (state: Draft<SettingState>, action) => {
      if(typeof action.payload !== typeof undefined) {
        state.setting.card_style.value = action.payload
      }
      updateBodyClass(Choices.CardStyle, state.setting.card_style.value)
      updateStorage(state.saveLocal, state.storeKey, createSettingObj(state as SettingState))
    },
    header_banner: (state: Draft<SettingState>, action) => {
      state.setting.header_banner.value = action.payload
      updateStorage(state.saveLocal, state.storeKey, createSettingObj(state as SettingState))
    },
    sidebar_color: (state: Draft<SettingState>, action) => {
      state.setting.sidebar_color.value = action.payload
      updateStorage(state.saveLocal, state.storeKey, createSettingObj(state as SettingState))
    },
    sidebar_type: (state: Draft<SettingState>, action) => {
      state.setting.sidebar_type.value = action.payload
      updateStorage(state.saveLocal, state.storeKey, createSettingObj(state as SettingState))
    },
    sidebar_show: (state: Draft<SettingState>, action) => {
      state.setting.sidebar_show.value = action.payload
      updateStorage(state.saveLocal, state.storeKey, createSettingObj(state as SettingState))
    },
    navbar_show: (state: Draft<SettingState>, action) => {
      state.setting.navbar_show.value = action.payload
      updateStorage(state.saveLocal, state.storeKey, createSettingObj(state as SettingState))
    },
    sidebar_menu_style: (state: Draft<SettingState>, action) => {
      state.setting.sidebar_menu_style.value = action.payload
      updateStorage(state.saveLocal, state.storeKey, createSettingObj(state as SettingState))
    },
    footer: (state: Draft<SettingState>, action) => {
      state.setting.footer.value = action.payload
      updateStorage(state.saveLocal, state.storeKey, createSettingObj(state as SettingState))
    },
    body_font_family: (state: Draft<SettingState>, action) => {
      if(typeof action.payload !== typeof undefined) {
        state.setting.body_font_family.value = action.payload
      }
      setFontFamily('body', state.setting.body_font_family.value)
      updateStorage(state.saveLocal, state.storeKey, createSettingObj(state as SettingState))
    },
    heading_font_family: (state: Draft<SettingState>, action) => {
      if(typeof action.payload !== typeof undefined) {
        state.setting.heading_font_family.value = action.payload
      }
      setFontFamily('heading', state.setting.heading_font_family.value)
      updateStorage(state.saveLocal, state.storeKey, createSettingObj(state as SettingState))
    }
  },
});

export default settingSlice.reducer;
