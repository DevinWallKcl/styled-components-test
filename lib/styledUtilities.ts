import { DefaultTheme } from 'styled-components'

type MapObject = {
  [value: string | number]: any
  default: any
}

export const mapValue = (selector: any, valueMap: MapObject) => {
  let value = valueMap[selector]

  if (!value) {
    value = valueMap.default
  }

  return value
}

export const prop = (key: string, defaultValue?: any) => (props: any) => {
  if (props[key] != undefined) {
    return props[key] ?? defaultValue
  }

  // Key is a path lets walk it.
  if (key.includes('.')) {
    const properties = key.split('.')
    let currentIndex = 0
    let currentProperty = props[properties[currentIndex]]

    while (
      currentProperty != null &&
      currentProperty != undefined &&
      ++currentIndex < properties.length
    ) {
      currentProperty = currentProperty[properties[currentIndex]]
    }

    return currentProperty ?? defaultValue
  }
}

type PropsCallback = (props: any) => MapObject

export const mapProp =
  (key: string, mapOrFunction: PropsCallback | MapObject) => (props: any) => {
    const valueMap =
      typeof mapOrFunction == 'function' ? mapOrFunction(props) : mapOrFunction

    return mapValue(prop(key)(props), valueMap)
  }

type TestCallback = (props: any) => boolean

export const ifProp =
  (keyOrTestFunction: string | TestCallback, pass: any, fail?: any) =>
  (props: any) => {
    const testResult =
      typeof keyOrTestFunction == 'function'
        ? keyOrTestFunction(props)
        : prop(keyOrTestFunction)(props)

    const resultToUse = testResult ? pass : fail

    return typeof resultToUse == 'function' ? resultToUse(props) : resultToUse
  }
