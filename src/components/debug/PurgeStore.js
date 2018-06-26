import React from 'react'
import { Button } from 'react-native'
import { purgeStoredState } from 'redux-persist'
import { persistConfig } from '../../redux'

const PurgeStore = () => {

  const onPurgeStoredState = () => {
    purgeStoredState(persistConfig)
  }
  return ( <Button title='Purge store' onPress={ () => { onPurgeStoredState() }} /> )
}

export default PurgeStore
