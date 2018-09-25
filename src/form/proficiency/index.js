import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'

const styles = theme => ({
  root: {
    margin: theme.spacing.unit * 3
  },
  group: {
    margin: `${theme.spacing.unit}px 0`,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
  },
  controlLabel: {
    display: 'flex',
    flexDirection: 'column-reverse'
  },
  radio: {
    padding: 0
  }
})

class RadioButtonsGroup extends React.Component {
  handleChange = event => {
    this.props.onChange(event.target.value)
  }

  render() {
    const { classes } = this.props

    return (
      <FormControl component="fieldset" className={classes.root}>
        <RadioGroup
          aria-label="Gender"
          name={this.props.name}
          className={classes.group}
          value={this.props.value}
          onChange={this.handleChange}>
          <FormControlLabel
            className={classes.controlLabel}
            value="untrained"
            control={<Radio className={classes.radio} />}
            label="U"
          />
          <FormControlLabel
            className={classes.controlLabel}
            value="trained"
            control={<Radio className={classes.radio} />}
            label="T"
          />
          <FormControlLabel
            className={classes.controlLabel}
            value="expert"
            control={<Radio className={classes.radio} />}
            label="E"
          />
          <FormControlLabel
            className={classes.controlLabel}
            value="master"
            control={<Radio className={classes.radio} />}
            label="M"
          />
          <FormControlLabel
            className={classes.controlLabel}
            value="legendary"
            control={<Radio className={classes.radio} />}
            label="L"
          />
        </RadioGroup>
      </FormControl>
    )
  }
}

RadioButtonsGroup.defaultProps = {
  value: 'untrained',
}

RadioButtonsGroup.propTypes = {
  classes: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string
}

export default withStyles(styles)(RadioButtonsGroup)
