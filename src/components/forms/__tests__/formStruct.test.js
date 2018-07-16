import fieldsStruct from '../fieldsStruct'
import { REQUIRED, OPTIONAL, LATER } from '../../../subviews/SignupForm.js'
describe('Ctrating form struct', () => {
  it('parses and varifies api response to struct', () => {
    
    const apiData = [
      'field_ongea_signup_nickname': REQUIRED,
      'field_ongea_signup_birthdate': REQUIRED,
      'field_ongea_signup_gender': REQUIRED,
      'field_ongea_signup_aboutme': REQUIRED,
      'field_ongea_signup_street': OPTIONAL
    ]

    const { meta } = fieldsStruct(apiData)
    expect(meta.kind).toEqual('struct')

    const {props} = meta
    expect (Object.keys(props).length).toEqual(5)

    const {nickname, birthdate, gender, aboutme, street} = props

    // nickname
    expect(nickname.meta.kind).toEqual('irreducible')
    expect(nickname.meta.name).toEqual('String')
    expect(nickname.meta.identity).toBeTruthy

    // birthdate
    expect(birthdate.meta.kind).toEqual('irreducible')
    expect(birthdate.meta.name).toEqual('Date')
    expect(birthdate.meta.identity).toBeTruthy

    // gender
    expect(gender.meta.kind).toEqual('enums')
    expect(gender.meta.name).toEqual(undefined)
    expect(gender.meta.identity).toBeTruthy


    expect(aboutme.meta.kind).toEqual('irreducible')
    expect(aboutme.meta.name).toEqual('String')
    expect(aboutme.meta.identity).toBeTruthy

    // street
    expect(street.meta.kind).toEqual('irreducible')
    expect(street.meta.name).toEqual('String')
    expect(street.meta.identity).toBeTruthy


  })
})
