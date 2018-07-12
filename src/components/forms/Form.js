import React from 'react'
import { View } from 'react-native'
import fieldsOptions from './fieldsOptions'
import colors from '../../utils/colors'
var t = require('tcomb-form-native')

var TForm = t.form.Form

t.form.Form.stylesheet.controlLabel.normal.fontSize = 13
t.form.Form.stylesheet.controlLabel.normal.color = colors.grayDark

t.form.Form.stylesheet.textbox.normal.fontSize = 14
t.form.Form.stylesheet.textbox.normal.height = 34

class Form extends React.Component {
  props: {
    fields: Function // this is `tcomb-form-native` fields struct
  }
  render () {
    return (
      <View>
        <TForm
          ref="form"
          type={this.props.fields}
          options={fieldsOptions}
        />
      </View>
    )
  }
}

export default Form
