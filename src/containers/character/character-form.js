import React from 'react'
import { Field } from 'redux-form'
import { Button } from '@material-ui/core'
import { renderAbilityScore, renderProficiency } from '../../form/render'
import { withStyles } from '@material-ui/core/styles'
import FormControl from '@material-ui/core/FormControl'
import FormLabel from '@material-ui/core/FormLabel'

const styles = theme => ({
  root: {
    display: 'flex',
  },
  abilities: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
  }
})

const CharacterForm = ({ handleSubmit, pristine, reset, submitting, formValues, classes }) => (
  <form onSubmit={handleSubmit}>
    <FormLabel component="legend">Abilities</FormLabel>
    <FormControl className={classes.abilities}>
      <Field name="strengthAttribute" attribute="strength" component={renderAbilityScore}/>
      <Field name="dexterityAttribute" attribute="dexterity" component={renderAbilityScore}/>
      <Field name="constitutionAttribute" attribute="constitution" component={renderAbilityScore}/>
      <Field name="wisdomAttribute" attribute="wisdom" component={renderAbilityScore}/>
      <Field name="intelligenceAttribute" attribute="intelligence" component={renderAbilityScore}/>
      <Field name="charismaAttribute" attribute="charisma" component={renderAbilityScore}/>
    </FormControl>
    <FormLabel component="legend">Defense</FormLabel>

    <Field name="radios" component={renderProficiency} />
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
