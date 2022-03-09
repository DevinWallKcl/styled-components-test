import { getPathValue, mapValue, MapObject } from './objectUtilities'

export const prop = (key: string, defaultValue?: any) => (props: any) => {
  let value = props?.[key]

  // Key is a path lets walk it.
  if (key.includes('.')) {
    value = getPathValue(key, props)
  }

  return value ?? defaultValue
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

export const themeColor =
  (key: string) =>
  ({ theme }: any) =>
    getPathValue(key, theme.colors)
