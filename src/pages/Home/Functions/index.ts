export function getVariableColor() {
    let prefix = getComputedStyle(document.body).getPropertyValue('--prefix') || 'bs-';
    if (prefix) {
        prefix = prefix.trim()
    }
    const color1 = getComputedStyle(document.body).getPropertyValue(`--${prefix}primary`);
    const color2 = getComputedStyle(document.body).getPropertyValue(`--${prefix}info`);
    const color3 = getComputedStyle(document.body).getPropertyValue(`--${prefix}primary-tint-20`);
    const color4 = getComputedStyle(document.body).getPropertyValue(`--${prefix}warning`);
    return {
        primary: color1.trim(),
        info: color2.trim(),
        warning: color4.trim(),
        primary_light: color3.trim(),
    };
}