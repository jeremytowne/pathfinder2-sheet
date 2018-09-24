export function getAbilityModifier(abilityScore) {
  return Math.floor((abilityScore - 10) / 2)
}

export function getAbilityModifierText(abilityScore) {
  const modifierValue = getAbilityModifier(abilityScore)
  return modifierValue < 0 ? `-${Math.abs(modifierValue)}` : `+${modifierValue}`
}