export interface Indexable {
  [key: string]: any
}

export function getPathValue(key: string, object: Indexable) {
  const properties = key?.split('.')
  let currentIndex = 0
  let currentProperty = object?.[properties?.[currentIndex]]

  while (
    currentProperty != null &&
    currentProperty != undefined &&
    ++currentIndex < properties.length
  ) {
    currentProperty = currentProperty[properties[currentIndex]]
  }

  return currentProperty
}

export interface MapObject {
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
