import _ from 'lodash'
import { SettingState } from '../../store/setting/interface';

// get element by selector
export function getElem (selector: string): HTMLElement | null {
  return document.querySelector(selector)
}

// get element by selector all
export function getElements (selector: string): NodeListOf<HTMLElement> {
  return document.querySelectorAll(selector);
}

// class add function
export const addClass = (elem: string, ...classNames: string[]): void => {
  let element = getElements(elem);
  element.forEach((el) => {
    classNames.forEach((className) => {
      el.classList.add(className);
    });
  });
};

// class remove function
export const removeClass = (elem: any, ...className: string[]) => {
  let _newElem: any = elem
  if (_.isString(_newElem)) {
    _newElem = getElements(elem);
  }
  if (_newElem.length !== undefined) {
    _.forEach(_newElem, function (elem) {
      _.forEach(className, function (className) {
        elem.classList.remove(className)
      })
    })
  }
  else {
    _.forEach(className, function (className) {
      _newElem.classList.remove(className)
    })
  }
}

// get attribute value
export const getAttr = function (elem: HTMLElement, attr: string) {
  return elem.getAttribute(attr);
}

// set attribute value
export const setAttr = (elems: string | HTMLElement | NodeListOf<HTMLElement>, object: { prop: string, value: string }): void => {
  let newElem: any = elems;

  if (typeof newElem === 'string') {
    newElem = getElements(newElem);
  }

  if (newElem instanceof NodeList) {
    newElem.forEach((elem: Node) => {
      (elem as HTMLElement).setAttribute(object.prop, object.value);
    });
  } else if (newElem instanceof HTMLElement) {
    newElem.setAttribute(object.prop, object.value);
  }
};


// remove attribute value
export const removeAttr = function (elem: HTMLElement, attr: string) {
  elem.removeAttribute(attr);
}

// Update html content
export const setContent = function (selector: string, content: string) {
  let _newElem: any = selector;

  if(_.isString(_newElem)){
      _newElem = getElements(selector);;
  }

  if(typeof _newElem.length !== typeof undefined){
      _.forEach(_newElem, function (elem) {
          const leftJoin = elem.getAttribute('data-leftJoin') !== null ? elem.getAttribute('data-leftJoin') : '';
          const rightJoin = elem.getAttribute('data-rightJoin') !== null ? elem.getAttribute('data-rightJoin') : '';
          elem.innerHTML =  leftJoin + content +  rightJoin;
      });
  }
}

// Copt to Clipboard function
export const copyToClipboard = (value: SettingState) => {
  const elem = document.createElement("textarea");
  (document.querySelector("body") as HTMLElement).appendChild(elem);
  elem.value = JSON.stringify(value, null, 4);
  elem.select();
  document.execCommand('copy');
  elem.remove();
}