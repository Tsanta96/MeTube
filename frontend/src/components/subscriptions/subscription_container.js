import { connect } from 'react-redux';
import { 
  createSubscription, 
  fetchSubscriptions, 
  fetchSubscription, 
  removeSubscription 
} from '../../actions/subscription_actions';

import { fetchUserProfile, fetchUsers } from '../../actions/user_actions';
import { fetchVideos } from "../../actions/video_actions";

import Subscription from './subscription';

const mapStateToProps = (state, ownProps) => {
  if(state.entities.users){
    // const subIds = state.entities.subscriptions.map(id => id.subscription_id);
    // const subUserIds  = state.entities.users.data.filter(user => 
    //   subIds.includes(subUserIds._id))

    return {
      users: state.entities.users,
      subscriptions: Object.values(state.entities.subscriptions),
      videos: state.entities.videos

      // subscriptions: subUserIds

    }
  } else {
    return { 
      users: '', 
      subscriptions: Object.values(state.entities.subscriptions) ,
      videos: ''
    }
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchUserProfile: userId => dispatch(fetchUserProfile(userId)),
    fetchUsers: () => dispatch(fetchUsers()),
    fetchVideos: () => dispatch(fetchVideos()),
    createSubscription: data => dispatch(createSubscription(data)),
    fetchSubscription: subId => dispatch(fetchSubscription(subId)),
    fetchSubscriptions: () => dispatch(fetchSubscriptions()),
    removeSubscription: subId => dispatch(removeSubscription(subId))
  }
}

export default connect(
  mapStateToProps, mapDispatchToProps
)(Subscription);