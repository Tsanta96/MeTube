import { connect } from 'react-redux';
import { 
  createSubscription, 
  fetchSubscriptions, 
  fetchSubscription, 
  removeSubscription 
} from '../../actions/subscription_actions';

import { fetchUserProfile, fetchUsers } from '../../actions/user_actions';

import Subscription from './subscription';

const mapStateToProps = (state, ownProps) => {
  // console.log(state)

  if(state.entities.users){
    // const subIds = state.entities.subscriptions.map(id => id.subscription_id);
    // const subUserIds  = state.entities.users.data.filter(user => 
    //   subIds.includes(subUserIds._id))

    return {
      users: state.entities.users.data,
      subscriptions: Object.values(state.entities.subscriptions)

      // subscriptions: subUserIds

    }
  } else {
    return { 
      users: '', 
      subscriptions: Object.values(state.entities.subscriptions) 
    }
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchUserProfile: userId => dispatch(fetchUserProfile(userId)),
    fetchUsers: () => dispatch(fetchUsers()),
    createSubscription: data => dispatch(createSubscription(data)),
    fetchSubscription: subId => dispatch(fetchSubscription(subId)),
    fetchSubscriptions: () => dispatch(fetchSubscriptions()),
    removeSubscription: subId => dispatch(removeSubscription(subId))
  }
}

export default connect(
  mapStateToProps, mapDispatchToProps
)(Subscription);