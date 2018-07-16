import React from 'react'
import { TouchableHighlight, View, Text } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import {Form, fieldsStruct, FormHeader } from '../components/forms'

// values are exported to tests
export const REQUIRED = 'in-required'
export const OPTIONAL = 'in-optional'
export const LATER = 'in-later'

class SignupForm extends React.Component {
  props: { formData: Array }
  state = {
    signupFormId: 'some-type-of-id',
    currentStep: 1,
    requiredFieldsArray: [],
    optionalFieldsArray: [],
    laterFieldsArray: []
  }

  componentWillMount () {
    const requiredFieldsArray = this.selectRequiredFields()
    const optionalFieldsArray = this.selectOptionalFields()
    const laterFieldsArray = this.selectLaterFields()
    this.setState({ requiredFieldsArray, optionalFieldsArray, laterFieldsArray })
  }
  componentDidMount () {
    // console.log(this.state)
  }

  _filterFieldsByType(collection, type) {
    let filteredFieldsArray = []
    collection.filter((formField) => {
      let key = Object.entries(formField)[0][0]
      let value = Object.entries(formField)[0][1]
      if (value === type){
        filteredFieldsArray.push(key)
      }
    })
    return filteredFieldsArray
  }


  selectRequiredFields () { return this._filterFieldsByType(this.props.formData ,REQUIRED) }
  selectLaterFields () { return this._filterFieldsByType(this.props.formData ,LATER) }
  selectOptionalFields () { return this._filterFieldsByType(this.props.formData ,OPTIONAL) }
  selectFields(step) {


    // console.log(step)
    if (step == 3) {
      return fieldsStruct( this.selectOptionalFields() )
    } else if (step == 2) {
      return fieldsStruct( this.selectLaterFields() )
    } else {
      return fieldsStruct( this.selectRequiredFields() )
    }
  }
  // debug function - could be removed
  selectAllFields () {
    let filteredFieldsArray = []
    this.props.formData .filter((formField) => {
      let key = Object.entries(formField)[0][0]
      filteredFieldsArray.push(key)
    })
    return filteredFieldsArray

  }

  onSavePress() {
    const { currentStep } = this.state
    if (currentStep == 3) return
    this.setState({currentStep: currentStep + 1})
  }

  render () {
    const { currentStep } = this.state
    console.log(this.selectAllFields())
    return (
      <KeyboardAwareScrollView>
        <View style={styles.container}>
          <FormHeader currentStep={currentStep}/>
          <View style={styles.body}>
            <Form fields={this.selectFields(currentStep)}/>
            <TouchableHighlight style={styles.button} onPress={() => {this.onSavePress()}} underlayColor='#99d9f4'>
              <Text style={styles.buttonText}>Save</Text>
            </TouchableHighlight>
          </View>
        </View>
      </KeyboardAwareScrollView>
    )
  }
}

const styles = {
  container: {},
  body: {
    paddingHorizontal: 20,
    marginVertical: 30,
    flexDirection: 'column'
  },
  button: {
    marginTop: 10,
    height: 50,
    justifyContent: 'center'
  },
  buttonText: {
    textAlign: 'center'
  }
}

export default SignupForm
