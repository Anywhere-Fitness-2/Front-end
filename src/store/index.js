import { combineReducers } from 'redux'

import { appReducer } from './appReducer'
import { accountReducer } from './accountReducer'
import { instructorReducer } from './instructorReducer'
import { classesReducer } from './classesReducer'

export default combineReducers({
  app: appReducer,
  account: accountReducer,
  instructor: instructorReducer,
  // classes: classesReducer
})
