
export const toggleTextContent = (querySelector, initText, altText) => {
  const elem = document.querySelector(querySelector)
  elem.textContent = (elem.text === initText)
    ? altText
    : elem.textContent = initText
}

export const toggleVisibility = (querySelector) => {
  const elem = document.querySelector(querySelector)
  elem.style.display = (window.getComputedStyle(elem).display !== 'none')
    ? 'none'
    : 'block'
  
  return { isVisible: elem.style.display === 'block' }
}

export const toggleStyleAttr = (querySelector, styleAttr, valueA, valueB) => { 
  const elem = document.querySelector(querySelector)
  elem.style[styleAttr] = (window.getComputedStyle(elem)[styleAttr] !== valueA)
    ? valueA
    : valueB
}

export const toggleClassName = (querySelector, classToToggle) => { 
  const elem = document.querySelector(querySelector)
  const currentClasses = elem.className

  elem.className = (!currentClasses.includes(classToToggle))
    ? addClassName(currentClasses, classToToggle)
    : removeClassName(currentClasses, classToToggle)
}

export const toggleUniqueClassName = (commonQuerySelector, enabledQuerySelector, classToToggle) => {
  const elements = document.querySelectorAll(commonQuerySelector)
  const enabled = document.querySelector(enabledQuerySelector)

  elements.forEach((elem) =>
    elem.className = removeClassName(elem.className, classToToggle))
  enabled.className = addClassName(enabled.className, classToToggle)
}

export const addClassName = (prevClasses, classToAdd) => {
  return prevClasses.trim() + '' + classToAdd
}

export const removeClassName = (prevClasses, classToRemove) => {
  return prevClasses.replace(classToRemove, '').trim()
}