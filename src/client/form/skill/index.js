import React from 'react'
import PropTypes from 'prop-types'
import isNil from 'lodash/isNil'
import { withStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import FormControl from '@material-ui/core/FormControl'
import {
  getAbilityModifierText,
  getAbilityShortText,
  getModifierText,
  getAbilityModifier
} from '../../helpers/index'

const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    margin: theme.spacing.unit
  },
  textField: {
    width: '90px',
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  }
})

const attributeValue = attr => (isNil(attr) ? 0 : attr)
const proficiencyValue = (characterLevel, proficiency) => {
  const proficiencyMap = {
    untrained: -2,
    trained: 0,
    expert: 1,
    master: 2,
    legendary: 3,
  }
  return characterLevel + proficiencyMap[proficiency]
}

class Skill extends React.Component {
  state = {
    skill: 0
  }

  static getDerivedStateFromProps(props) {
    return {
      skill:
        getAbilityModifier(attributeValue(props.ability.value)) +
        attributeValue(proficiencyValue(props.characterLevel, props.proficiency)) +
        attributeValue(props.value.item) +
        attributeValue(props.value.armor)
    }
  }

  onItemChange = event => {
    this.props.onChange({
      ...this.props.value,
      item: parseInt(event.target.value, 10)
    })
  }

  onArmorChange = event => {
    this.props.onChange({
      ...this.props.value,
      armor: parseInt(event.target.value, 10)
    })
  }

  render = () => {
    const { label, ability, value, displayArmor, classes } = this.props
    return (
      <FormControl className={classes.root}>
        <TextField
          disabled
          className={classes.textField}
          label={label}
          value={this.state.skill}
        />
        <TextField
          disabled
          className={classes.textField}
          variant="outlined"
          label={getAbilityShortText(ability.type)}
          value={getAbilityModifierText(ability.value)}
        />
        <TextField
          className={classes.textField}
          type="number"
          variant="outlined"
          label="Item"
          value={value.item}
          onChange={this.onItemChange}
        />
        {displayArmor && (
          <TextField
            className={classes.textField}
            type="number"
            variant="outlined"
            label="Armor"
            value={value.armor}
            onChange={this.onArmorChange}
          />
        )}
      </FormControl>
    )
  }
}

const modifierShape = PropTypes.shape({
  type: PropTypes.string,
  value: PropTypes.number,
})

Skill.propTypes = {
  label: PropTypes.string.isRequired,
  ability: modifierShape.isRequired,
  proficiency: PropTypes.string,
  characterLevel: PropTypes.number,
  displayArmor: PropTypes.bool,
  value: PropTypes.object, // item and optional armor
  onChange: PropTypes.func.isRequired
}

Skill.defaultProps = {
  displayArmor: false,
  value: {},
  characterLevel: 1,
  proficiency: 'untrained',
}

export default withStyles(styles)(Skill)
