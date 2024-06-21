import _ from 'lodash'
import { getElements } from '../dom'

// get style root variables function
export const getRootVars = (property: string, elem = document.body) => {
  let newElement: any = elem
  if (_.isString(newElement)) {
    newElement = getElements(newElement)
  }
  return getComputedStyle(elem).getPropertyValue(property).trim() || null
}

// add or update css root variables function
export const setRootVariables = (variables: any) => {
  const _root = document.documentElement
  const _variables = variables
  _.forEach(_variables, function (value, key) {
    _root.style.setProperty(key, value)
  })
}


// remove css root variables function
export const removeRootVariables = (variables: string[]) => {
  const _root = document.documentElement;

  if (Array.isArray(variables)) {
    variables.forEach((variable) => {
      const name = variable.split(":")[0].trim();
      _root.style.removeProperty(name);
    });
  }
}


export const getVariableColor = () => {
  const prefix = getRootVars("--prefix") || 'bs-'
  return {
    primary: getRootVars(`--${prefix}primary`),
    info: getRootVars(`--${prefix}info`),
    warning: getRootVars(`--${prefix}warning`),
    primary_light: getRootVars(`--${prefix}primary-tint-20`)
  }
}

// setFontFamily function
export const setFontFamily = (type: string, fontFamily: string) => {
  const elements = getElements(`[data-font-${type}="google"]`);
  // add font into head
  elements.forEach(elem => {
    elem.remove()
  })

  if(fontFamily === null) {
    fontFamily = 'Inter'
  }

  if (fontFamily !== null && fontFamily !== 'Inter') {
    const head = document.querySelector('head');
    const link = document.createElement('link');
    link.setAttribute('rel', 'stylesheet');
    link.setAttribute(`data-font-${type}`, 'google');
    link.setAttribute('href', `https://fonts.googleapis.com/css2?family=${fontFamily}:wght@300;400;500;700&display=swap`);    if (head !== null) {
      head.appendChild(link);
    }
  }

  // change font-family by style root variables
  const prefix = getRootVars("--prefix") || 'bs-'
  const obj : { [key: string]: any } = {};
  obj[`--${prefix}${type}-font-family`] = `${fontFamily}, sans-serif`;
  
  const variables = Object.entries(obj).map(([key, value]) => `${key}: ${value}`);
  setRootVariables(variables);
}

//fullscreen
export function toggleFullScreen() {
    const element = document.documentElement as HTMLElement;

    if (!document.fullscreenElement && !(document as any).mozFullScreenElement && !(document as any).webkitFullscreenElement && !(document as any).msFullscreenElement) {
        if (element.requestFullscreen) {
            element.requestFullscreen();
        }
        else if ((element as any).mozRequestFullScreen) {
            (element as any).mozRequestFullScreen();
        }
        else if ((element as any).webkitRequestFullscreen) {
            (element as any).webkitRequestFullscreen();
        }
        else if ((element as any).msRequestFullscreen) {
            (element as any).msRequestFullscreen();
        }
    }
    else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        }
        else if ((document as any).mozCancelFullScreen) {
            (document as any).mozCancelFullScreen();
        }
        else if ((document as any).webkitExitFullscreen) {
            (document as any).webkitExitFullscreen();
        }
        else if ((document as any).msExitFullscreen) {
            (document as any).msExitFullscreen();
        }
    }

}