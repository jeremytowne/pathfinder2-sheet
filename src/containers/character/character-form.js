import React from 'react'
import { Field, Fields } from 'redux-form'
import { Button } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import FormControl from '@material-ui/core/FormControl'
import FormLabel from '@material-ui/core/FormLabel'
import Paper from '@material-ui/core/Paper'
import grey from '@material-ui/core/colors/grey'
import {
  renderAbilityScore,
  renderProficiency,
  renderTextField,
  renderNumberField,
  renderSkill
} from '../../form/render'

const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column'
  },
  section: {
    margin: theme.spacing.unit,
    padding: theme.spacing.unit,
    backgroundColor: grey[100]
  },
  abilities: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    // justifyContent: 'space-around'
  },
  skills: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  general: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row'
  },
  textField: {
    margin: theme.spacing.unit
  },
  skill: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    alignItems: 'center',
  },
  footer: {
    margin: theme.spacing.unit,
  }
})

const CharacterForm = ({
  handleSubmit,
  pristine,
  reset,
  submitting,
  formValues,
  classes
}) => (
  <form className={classes.root} onSubmit={handleSubmit}>
    <Paper className={classes.section}>
      <FormLabel component="legend">General</FormLabel>
      <FormControl className={classes.general}>
        <Field
          name="characterName"
          variant="outlined"
          label="Name"
          className={classes.textField}
          component={renderTextField}
        />
        <Field
          name="characterAncestry"
          label="Ancestry"
          variant="outlined"
          className={classes.textField}
          component={renderTextField}
        />
        <Field
          name="characterLevel"
          label="Level"
          variant="outlined"
          className={classes.textField}
          component={renderNumberField}
        />
      </FormControl>
    </Paper>
    <Paper className={classes.section}>
      <FormLabel component="legend">Abilities</FormLabel>
      <FormControl className={classes.abilities}>
        <Field
          name="strengthAttribute"
          attribute="strength"
          component={renderAbilityScore}
        />
        <Field
          name="dexterityAttribute"
          attribute="dexterity"
          component={renderAbilityScore}
        />
        <Field
          name="constitutionAttribute"
          attribute="constitution"
          component={renderAbilityScore}
        />
        <Field
          name="wisdomAttribute"
          attribute="wisdom"
          component={renderAbilityScore}
        />
        <Field
          name="intelligenceAttribute"
          attribute="intelligence"
          component={renderAbilityScore}
        />
        <Field
          name="charismaAttribute"
          attribute="charisma"
          component={renderAbilityScore}
        />
      </FormControl>
    </Paper>
    <Paper className={classes.section}>
      <FormLabel component="legend">Saving Throws</FormLabel>
      <FormControl className={classes.skills}>
        <div className={classes.skill}>
          <Field
            name="fortitudeSave"
            label="Fortitude"
            ability={{
              type: 'constitution',
              value: formValues && formValues.constitutionAttribute
            }}
            characterLevel={formValues && formValues.characterLevel}
            proficiency={formValues && formValues.fortitudeSaveProficiency}
            component={renderSkill}
          />
          <Field
            name="fortitudeSaveProficiency"
            component={renderProficiency}
          />
        </div>
        <div className={classes.skill}>
          <Field
            name="reflexSave"
            label="Reflex"
            ability={{
              type: 'dexterity',
              value: formValues && formValues.dexterityAttribute
            }}
            characterLevel={formValues && formValues.characterLevel}
            proficiency={formValues && formValues.reflexSaveProficiency}
            component={renderSkill}
          />
          <Field
            name="reflexSaveProficiency"
            component={renderProficiency}
          />
        </div>
        <div className={classes.skill}>
          <Field
            name="willSave"
            label="Will"
            ability={{
              type: 'wisdom',
              value: formValues && formValues.wisdomAttribute
            }}
            characterLevel={formValues && formValues.characterLevel}
            proficiency={formValues && formValues.willSaveProficiency}
            component={renderSkill}
          />
          <Field
            name="willSaveProficiency"
            component={renderProficiency}
          />
        </div>
      </FormControl>
    </Paper>
    <Paper className={classes.section}>
      <FormLabel component="legend">Skills</FormLabel>
      <FormControl className={classes.skills}>
        <div className={classes.skill}>
          <Field
            displayArmor
            name="acrobaticsSkill"
            label="Acrobatics"
            ability={{
              type: 'dexterity',
              value: formValues && formValues.dexterityAttribute
            }}
            characterLevel={formValues && formValues.characterLevel}
            proficiency={formValues && formValues.acrobaticsProficiency}
            component={renderSkill}
          />
          <Field
            name="acrobaticsProficiency"
            component={renderProficiency}
          />
        </div>
        <div className={classes.skill}>
          <Field
            name="arcanaSkill"
            label="Arcana"
            ability={{
              type: 'intelligence',
              value: formValues && formValues.intelligenceAttribute
            }}
            characterLevel={formValues && formValues.characterLevel}
            proficiency={formValues && formValues.intelligenceProficiency}
            component={renderSkill}
          />
          <Field
            name="intelligenceProficiency"
            component={renderProficiency}
          />
        </div>
        <div className={classes.skill}>
          <Field
            displayArmor
            name="athleticsSkill"
            label="Athletics"
            ability={{
              type: 'strength',
              value: formValues && formValues.strengthAttribute
            }}
            characterLevel={formValues && formValues.characterLevel}
            proficiency={formValues && formValues.athleticsProficiency}
            component={renderSkill}
          />
          <Field
            name="athleticsProficiency"
            component={renderProficiency}
          />
        </div>
        <div className={classes.skill}>
          <Field
            name="craftingSkill"
            label="Crafting"
            ability={{
              type: 'intelligence',
              value: formValues && formValues.intelligenceAttribute
            }}
            characterLevel={formValues && formValues.characterLevel}
            proficiency={formValues && formValues.craftingProficiency}
            component={renderSkill}
          />
          <Field
            name="craftingProficiency"
            component={renderProficiency}
          />
        </div>
        <div className={classes.skill}>
          <Field
            name="deceptionSkill"
            label="Deception"
            ability={{
              type: 'charisma',
              value: formValues && formValues.charismaAttribute
            }}
            characterLevel={formValues && formValues.characterLevel}
            proficiency={formValues && formValues.deceptionProficiency}
            component={renderSkill}
          />
          <Field
            name="deceptionProficiency"
            component={renderProficiency}
          />
        </div>
      </FormControl>
    </Paper>
    <div className={classes.footer}>
      <Button
        type="submit"
        variant="outlined"
        color="primary"
        disabled={pristine || submitting}>
        Submit
      </Button>
      <Button
        type="button"
        variant="outlined"
        disabled={pristine || submitting}
        onClick={reset}>
        Clear Values
      </Button>
    </div>
  </form>
)

export default withStyles(styles)(CharacterForm)
