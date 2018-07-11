import moment from 'moment'
var stylesheet = require('tcomb-form-native/lib/stylesheets/bootstrap')

const fieldsOptions = () => ({
  fields: {
    birthdate: {
      label: 'Birthday',
      mode: 'date',
      config: {
        format: (date) =>  moment(date).format('DD-MM-YYYY')
      }
    },
    gender: {
      label: 'Gender',
      help: 'Please select your gender',
      'nullOption': { value: 'not-set', text: 'Select' }
    },
    aboutme: {
      lable: 'About Me',
      help: 'A brief text about yourself',
      multiline: true,
      stylesheet: {
        ...stylesheet,
        textbox: {normal: {
          ...stylesheet.textbox.normal,
          height: 80
        }}
      }
    }
  }
})


export default fieldsOptions
