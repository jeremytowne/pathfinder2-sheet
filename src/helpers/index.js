export function getAbilityModifier(abilityScore) {
  return Math.floor((abilityScore - 10) / 2)
}

export function getModifierText(modifierValue) {
  return modifierValue < 0 ? `-${Math.abs(modifierValue)}` : `+${modifierValue}`
}

export function getAbilityModifierText(abilityScore) {
  const modifierValue = getAbilityModifier(abilityScore)
  if(isNaN(modifierValue)) {
    return ''
  }
  return getModifierText(modifierValue)
}

export function getAbilityShortText(abilityText) {
  return abilityText.slice(0, 3).toUpperCase()
}