const SET_AGREEMENT_VERSION = 'agreement/SET_AGREEMENT_VERSION'

const initialState = {
  acceptedVersion: null
}

export default function agreement(state = initialState, action = {}) {
  switch (action.type) {
  case SET_AGREEMENT_VERSION:
    return { ...state, acceptedVersion: action.acceptedVersion }

  default:
    return state
  }
}

export const setAgreementVersion = acceptedVersion => ({
  type: SET_AGREEMENT_VERSION,
  acceptedVersion
})
