import React from 'react'
import { View } from 'react-native'
import fieldsOptions from './fieldsOptions'
var t = require('tcomb-form-native')

var TForm = t.form.Form

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
