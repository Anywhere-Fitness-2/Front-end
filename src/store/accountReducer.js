// import * as act from './actions'
// MANAGES THE STATE OF USER ACCOUNT AND PROFILE DATA

const initialAccountState = {
  user: {
    id: 0,
    email: '',
    instructor: '0', // 0
    name: '',
    zip: '',
  },
  isFetching: false,

  // STRETCH
  registered_classes: [], // array of class IDs
  billing: {
    credit_card: '',
    credit_card_exp: '',
    credit_card_cvv: '',
    phone: '',
  },
  purchases: [], // array of purchase objects {date, amount, classID}

  // NON-MVP EXTRA
  errors: [], // last 10 error messages, will display as toasts
}

export function accountReducer(state = initialAccountState, action) {

  switch (action.type) {
    case 'ACCOUNT_FETCHING':
      return {
        ...state,
        isFetching: action.payload
      }

    case 'ACCOUNT_DELETE':
      return {
        ...initialAccountState,
        errors: state.errors
      }

    case 'ACCOUNT_UPDATE':
      return {
        ...state,
        user: {
          ...state.user,
          id: action.payload.user.id || state.user.id,
          email: action.payload.user.email || state.user.email,
          instructor: action.payload.user.instructor || state.user.instructor,  // in case Role changes
          name: action.payload.user.name || state.user.name,
          zip: action.payload.user.zip || state.user.zip,
        }
      }

    case 'ACCOUNT_CLASS_REGISTER':
      console.log('regged: ', state.registered_classes)
      console.log('payload(id): ', action.payload)
      return {
        ...state,
        // registered_classes: state.registered_classes.push(action.payload)
        // registered_classes: [...state.registered_classes].includes(action.payload) ? 
        //   [...state.registered_classes] :
        //   [...state.registered_classes].push(action.payload)
      }
  
    case 'ACCOUNT_CLASS_DELETE':
      return {
        ...state,
        registered_classes: state.registered_classes.filter(item => {
          return (item.id !== action.payload)
        })
      }

    case 'ACCOUNT_CLASS_UPDATE':
      return {
        ...state,
        registered_classes: action.payload
      }

    case 'ACCOUNT_ERROR':
      return {
        ...state,
        errors: state.errors.unshift(action.payload.error).slice(0,10)
      }

    default:
      return state;
  }
}
