import TcombForm from 'tcomb-form-native'

const Gender = TcombForm.enums({
  M: 'Male',
  F: 'Female'
})

const possibleFieldsStruct = [
  { apiName: 'field_ongea_signup_nickname',      name: 'nickname',       struct: TcombForm.String },
  { apiName: 'field_ongea_signup_birthdate',     name: 'birthdate',      struct: TcombForm.Date },
  { apiName: 'field_ongea_signup_gender',        name: 'gender',         struct: Gender },
  { apiName: 'field_ongea_signup_aboutme',       name: 'aboutme',        struct: TcombForm.String },
  { apiName: 'field_ongea_signup_street',        name: 'street',         struct: TcombForm.String },
  { apiName: 'field_ongea_signup_postcode',      name: 'postcode',       struct: TcombForm.String },
  { apiName: 'field_ongea_signup_town',          name: 'town',           struct: TcombForm.String },
  { apiName: 'field_ongea_signup_region',        name: 'region',         struct: TcombForm.String },
  { apiName: 'field_ongea_signup_country',       name: 'country',        struct: TcombForm.String },
  { apiName: 'field_ongea_signup_phone',         name: 'phone',          struct: TcombForm.String },
  { apiName: 'field_ongea_signup_passid',        name: 'passid',         struct: TcombForm.String },
  { apiName: 'field_ongea_signup_issuedon',      name: 'issuedon',       struct: TcombForm.String },
  { apiName: 'field_ongea_signup_expireson',     name: 'expireson',      struct: TcombForm.String },
  { apiName: 'field_ongea_signup_nationality',   name: 'nationality',    struct: TcombForm.String },
  { apiName: 'field_ongea_signup_website',       name: 'website',        struct: TcombForm.String },
  { apiName: 'field_ongea_signup_profilepic',    name: 'profilepic',     struct: TcombForm.String },
  { apiName: 'field_ongea_signup_emergcon',      name: 'emergcon',       struct: TcombForm.String },
  { apiName: 'field_ongea_signup_emphone',       name: 'emphone',        struct: TcombForm.String },
  { apiName: 'field_ongea_signup_skillsrelated', name: 'skillsrelated',  struct: TcombForm.String },
  { apiName: 'field_ongea_signup_exampleof',     name: 'exampleof',      struct: TcombForm.String },
  { apiName: 'field_ongea_signup_foodoptions',   name: 'foodoptions',    struct: TcombForm.String },
  { apiName: 'field_ongea_signup_foodreq',       name: 'foodreq',        struct: TcombForm.String },
  { apiName: 'field_ongea_signup_skills',        name: 'skills',         struct: TcombForm.String },
  { apiName: 'field_ongea_signup_skillsdetails', name: 'skillsdetails',  struct: TcombForm.String },
  { apiName: 'field_ongea_signup_motiviation',   name: 'motiviation',    struct: TcombForm.String },
  { apiName: 'field_ongea_signup_hearabout',     name: 'hearabout',      struct: TcombForm.String },
  { apiName: 'field_ongea_signup_roomreq',       name: 'roomreq',        struct: TcombForm.String },
  { apiName: 'field_ongea_signup_canshare',      name: 'canshare',       struct: TcombForm.String }
]

const mapFieldsToStruct = (selectedFields) => {
  const selectedFieldsStruct = possibleFieldsStruct.reduce((returnObject, currentObject) => {
    if (selectedFields.includes(currentObject.apiName)) {
      returnObject[currentObject.name] = currentObject.struct
    }
    return returnObject
  }, {})
  return (selectedFieldsStruct)
}

const fieldsStruct = (selectedFields) => {
  return (
    TcombForm.struct(mapFieldsToStruct(selectedFields))
  )
}

export default fieldsStruct
