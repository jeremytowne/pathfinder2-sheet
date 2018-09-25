import React from 'react'
import Proficiency from './proficiency'
import AbilityScore from './ability-score'
import TextField from '@material-ui/core/TextField'
import Skill from './skill'

export function renderProficiency({ input, ...props }) {
  return <Proficiency {...input} {...props} />
}

export function renderAbilityScore({ input, ...props }) {
  return <AbilityScore {...input} {...props} />
}

export function renderSkill({ input, ...props }) {
  return <Skill {...input} {...props} />
}

export function renderTextField({ input, ...props }) {
  return <TextField {...input} {...props} />
}

export function renderNumberField({ input, ...props }) {
  return (
    <TextField
      {...props}
      type="number"
      onChange={event => input.onChange(parseInt(event.target.value, 10))}
    />
  )
}
