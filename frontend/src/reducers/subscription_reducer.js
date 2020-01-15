import { 
  RECEIVE_SUBSCRIPTIONS, RECEIVE_SUBSCRIPTION, REMOVE_SUBSCRIPTION 
} from '../actions/subscription_actions';

const SubscriptionsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_SUBSCRIPTIONS:
      return Object.assign({}, state, action.subscriptions.data)
    case RECEIVE_SUBSCRIPTION:
      return Object.assign({}, state, {[action.subscription.data._id]: action.subscription.data})
    case REMOVE_SUBSCRIPTION:
      let nextState = Object.assign({}, state);
      delete nextState[action.subId[0]];
      return nextState;
    default:
      return state;
  }
}

export default SubscriptionsReducer;