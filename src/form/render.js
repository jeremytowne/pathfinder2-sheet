import React from 'react'
import Proficiency from './proficiency'
import AbilityScore from './ability-score'

export function renderProficiency({ input, ...props }) {
  return <Proficiency {...input} {...props} onChange={input.onChange} />
}

export function renderAbilityScore({ input, ...props }) {
  return <AbilityScore {...input} {...props} />
}
