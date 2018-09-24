import React from 'react'
import PropTypes from 'prop-types'
import isNaN from 'lodash/isNaN'
import parseInt from 'lodash/parseInt'
import { withStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import FormControl from '@material-ui/core/FormControl'
import { getAbilityModifierText } from '../../helpers'

const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    margin: theme.spacing.unit,
  },
  attribute: {
    padding: theme.spacing.unit * 1.5,
    backgroundColor: 'lightgrey',
    width: '90px',
  },
  modifier: {
    fontSize: '20px',
    fontWeight: 'bold',
    width: '90px',
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  score: {
    width: '90px',
  },
})

class AbilityScore extends React.Component {
  state = {
    modifier: ''
  }

  handleChange = event => {
    const parsedValue = parseInt(event.target.value)
    if (isNaN(parsedValue)) {
      this.setState({ modifier: '' })
      this.props.onChange(event.target.value)
    } else {
      const modifier = getAbilityModifierText(parsedValue)
      this.setState({ modifier })
      this.props.onChange(parsedValue)
    }
  }

  render = () => {
    const { classes, attribute } = this.props
    return (
      <FormControl variant="outlined" className={classes.root}>
        <Paper className={classes.attribute} elevation={1}>
          <Typography variant="headline" component="h3">
            {attribute.slice(0, 3).toUpperCase()}
          </Typography>
        </Paper>
        <TextField
          disabled
          className={classes.modifier}
          label="Modifier"
          value={this.state.modifier}
          variant="outlined"
        />
        <TextField
          className={classes.score}
          label="Score"
          variant="outlined"
          onChange={this.handleChange}
          value={this.props.value}
        />
      </FormControl>
    )
  }
}

AbilityScore.propTypes = {
  attribute: PropTypes.oneOf([
    'strength',
    'dexterity',
    'constitution',
    'wisdom',
    'intelligence',
    'charisma'
  ]).isRequired
}

export default withStyles(styles)(AbilityScore)
