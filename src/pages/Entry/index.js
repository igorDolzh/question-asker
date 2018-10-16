import React from 'react'
import { connect } from 'react-redux'
import { path } from 'ramda'
import PropTypes from 'prop-types'
import { requestAllQuestions } from '../../stores/actions'

export class StaticEntry extends React.Component {
  static propTypes = {
    requestAllQuestions: PropTypes.func.isRequired,
    questions: PropTypes.arrayOf({}).isRequired,
  }

  componentDidMount() {
    console.log('props', this.props)
    this.props.requestAllQuestions()
  }

  render() {
    const { questions } = this.props
    return (
      <div>
        <h2>Question asker</h2>
        {
          JSON.stringify(questions)
        }
      </div>
    )
  }
}

export const Entry = connect(
  (state) => ({
    questions: path(['questions'], state),
  }),
  (dispatch) => ({
    requestAllQuestions: () => dispatch(requestAllQuestions()),
  })
)(StaticEntry)
