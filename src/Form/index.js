import React from 'react';
import { Field, reduxForm } from 'redux-form'

import ColorPicker from './ColorPicker'

import './Form.css';

class Form extends React.PureComponent {
  constructor(props) {
    super(props)

    this.handleColorChange = this.handleColorChange.bind(this)
  }

  handleColorChange(color) {
    this.props.change('color', color)
  }

  render() {
    const { handleSubmit, pristine, submitting } = this.props

    return (
      <div className="form__container">
        <form onSubmit={handleSubmit}>
          <div className="form__field">
            <label>Title
              <Field
                name="title"
                component="input"
                type="text"
                placeholder="Story Title"
                />
            </label>
          </div>
          <div className="form__field">
            <label>Color
              <Field
                ref={input => this.colorValue = input}
                name="color"
                component="input"
                type="hidden"
                />
              <Field
                name="color"
                component={ColorPicker}
                onColorChange={this.handleColorChange}
                />
            </label>
          </div>
          <div className="buttons__container">
            <button type="submit" disabled={pristine || submitting}>Submit</button>
          </div>
        </form>
      </div>
    )
  }
}
export default reduxForm({
  form: 'demoForm', // a unique identifier for this form
})(Form);
