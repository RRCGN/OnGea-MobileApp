import React from 'react'
import { TouchableHighlight, View, Text } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import { Progress, Form, fieldsStruct } from '../components/forms'
const REQUIRED = 'in-required'
const OPTIONAL = 'in-optional'
const LATER = 'in-later'

class SignupForm extends React.Component {
  props: { formData: Array }
  state: { requiredFieldsArray: [], optionalFieldsArray: [], laterFieldsArray: [] }

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
  selectOptionalFields () { return this._filterFieldsByType(this.props.formData ,OPTIONAL) }
  selectLaterFields () { return this._filterFieldsByType(this.props.formData ,LATER) }
  // debug function
  selectAllField () {
    let filteredFieldsArray = []
    this.props.formData .filter((formField) => {
      let key = Object.entries(formField)[0][0]
      filteredFieldsArray.push(key)
    })
    return filteredFieldsArray

  }
  login() {
    const formValues = this.formGenerator.getValues()
    console.log('FORM VALUES', formValues)
  }

  render () {
    return (
      <KeyboardAwareScrollView>
        <View style={styles.container}>
          <View style={styles.header}>
            <View style={styles.titleContainer}>
              <Text>Required </Text>
            </View>
            <View style={styles.progressContainer}>
              <Progress current={1} total={3} />
            </View>
          </View>
          <View style={styles.body}>
             <View style={styles.container}>
          {/* display */}
          <Form fields={fieldsStruct(this.selectAllField())}/>
          <TouchableHighlight style={styles.button} onPress={this.onPress} underlayColor='#99d9f4'>
            <Text style={styles.buttonText}>Save</Text>
          </TouchableHighlight>
        </View>
          </View>
        </View>
      </KeyboardAwareScrollView>
    )
  }
}

const styles = {
  container: {},
  header: {
    height: 50,
    flexDirection: 'row'
  },
  progressContainer: {
    height: 50,
    width: 100,
    flex: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'pink'
  },
  titleContainer: {
    height: 50,
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 10
  },
  body: {
    flexDirection: 'column'
  }
}

export default SignupForm
