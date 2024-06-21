// a function that mixes 2 colors
export const colorMix = (color1: string, color2: string, weight: number = 50) => {
  function d2h (d: number) { return d.toString(16) } // convert a decimal value to hex
  function h2d(h: string) { return parseInt(h, 16) } // convert a hex value to decimal
  
  let color = '#'
  for (let i = 0; i <= 5; i += 2) { // loop through each of the 3 hex pairsâ€”red, green, and blue
    const v1 = h2d(color1.substr(i, 2)) // extract the current pairs
    const v2 = h2d(color2.substr(i, 2))
    // combine the current pairs from each source color, according to the specified weight
    let val = d2h(Math.floor(v2 + (v1 - v2) * (weight / 100.0)))

    while (val.length < 2) { val = '0' + val } // prepend a '0' if val results in a single digit

    color += val // concatenate val to our new color string
  }

  return color // PROFIT!
}
// a function that tint the color
export function tintColor (color: string, weight: number = 50) {
  const color1 = color.substring(1) // strip the '#' character from the beginning
  const color2 = 'FFFFFF'
  return colorMix(color2, color1, weight)
}

// shade color function
export const shadeColor = (color: string, weight: number = 50) => {
  const color1 = color.substring(1) // strip the '#' character from the beginning
  const color2 = '000000'
  return colorMix(color2, color1, weight)
}

// color hex to rgb function
export const hexToRgb = (hex: string) => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (result !== null) {
    return `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}`
  }
  else return;
}

// get color shade & tint Functions
export const getColorShadeTint = (colorName: string, colorValue: string, dark: boolean) => {

  const colors : { [key: string]: any } = {};
  if (dark) {
    colors[`${colorName}-shade-80`] = tintColor(colorValue, 80)
    colors[`${colorName}-shade-60`] = tintColor(colorValue, 60)
    colors[`${colorName}-shade-40`] = tintColor(colorValue, 40)
    colors[`${colorName}-shade-20`] = tintColor(colorValue, 20)
    colors[`${colorName}-shade-10`] = tintColor(colorValue, 10)
    colors[`${colorName}-tint-10`] = shadeColor(colorValue, 10)
    colors[`${colorName}-tint-20`] = shadeColor(colorValue, 20)
    colors[`${colorName}-tint-40`] = shadeColor(colorValue, 40)
    colors[`${colorName}-tint-60`] = shadeColor(colorValue, 60)
    colors[`${colorName}-tint-80`] = shadeColor(colorValue, 80)
    colors[`${colorName}-tint-90`] = shadeColor(colorValue, 90)
    colors[`${colorName}-rgb`] = hexToRgb(colorValue)
    colors[colorName] = colorValue
  } else {
    colors[`${colorName}-shade-80`] = shadeColor(colorValue, 80)
    colors[`${colorName}-shade-60`] = shadeColor(colorValue, 60)
    colors[`${colorName}-shade-40`] = shadeColor(colorValue, 40)
    colors[`${colorName}-shade-20`] = shadeColor(colorValue, 20)
    colors[`${colorName}-shade-10`] = shadeColor(colorValue, 10)
    colors[`${colorName}-tint-10`] = tintColor(colorValue, 10)
    colors[`${colorName}-tint-20`] = tintColor(colorValue, 20)
    colors[`${colorName}-tint-40`] = tintColor(colorValue, 40)
    colors[`${colorName}-tint-60`] = tintColor(colorValue, 60)
    colors[`${colorName}-tint-80`] = tintColor(colorValue, 80)
    colors[`${colorName}-tint-90`] = tintColor(colorValue, 90)
    colors[`${colorName}-rgb`] = hexToRgb(colorValue)
    colors[colorName] = colorValue
  }
  return colors
}
