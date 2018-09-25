import React from 'react'
import { Field } from 'redux-form'
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
    justifyContent: 'space-around'
  },
  defense: {
    display: 'flex'
  },
  general: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row'
    // justifyContent: 'space-around',
  },
  textField: {
    margin: theme.spacing.unit
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
    <FormLabel className={classes.defense} component="h3">
      Defense
    </FormLabel>
    <FormControl className={classes.armor} />

    <Field
      name="radios"
      defaultValue="untrained"
      component={renderProficiency}
    />
    <Field
      name="skill"
      label="Perception"
      ability={{
        type: 'wisdom',
        value: formValues && formValues.wisdomAttribute
      }}
      proficiency={2}
      component={renderSkill}
    />
    <div>
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
