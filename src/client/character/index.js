import React from 'react'
import { connect } from 'react-redux'
import { getFormValues, reduxForm } from 'redux-form'
import CharacterForm from './character-form'

const FORM_NAME = 'character'

const CharacterFormContainer = props => <CharacterForm {...props} />

const mapStateToProps = state => ({
  formValues: getFormValues(FORM_NAME)(state)
})

export default connect(mapStateToProps)(
  reduxForm({ form: FORM_NAME })(CharacterFormContainer)
)
