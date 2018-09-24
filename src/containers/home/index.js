import React from 'react'
import { push } from 'connected-react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import CharacterForm from '../character'
import { Button } from '@material-ui/core'

const Home = props => (
  <div>
    <h1>Character Sheet</h1>

    {/*<p>*/}
      {/*<Button variant="outlined" onClick={() => props.changePage()}>*/}
        {/*Go to about page via redux*/}
      {/*</Button>*/}
    {/*</p>*/}

    <CharacterForm onSubmit={val => console.log(val)}/>
  </div>
)

const mapStateToProps = (/*{ home }*/) => ({
  // count: home.count,
  // isIncrementing: home.isIncrementing,
  // isDecrementing: home.isDecrementing
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      // increment,
      // incrementAsync,
      // decrement,
      // decrementAsync,
      changePage: () => push('/about-us')
    },
    dispatch
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
