import * as SubscriptionApiUtil from '../util/subscription_api_util';

export const RECEIVE_SUBSCRIPTIONS = 'RECEIVE_SUBSCRIPTIONS';
export const RECEIVE_SUBSCRIPTION = 'RECEIVE_SUBSCRIPTION';
export const REMOVE_SUBSCRIPTION = 'REMOVE_SUBSCRIPTION';

export const receiveSubscriptions = subscriptions => ({
  type: RECEIVE_SUBSCRIPTIONS,
  subscriptions
});

export const receiveSubscription = subscription => ({
  type: RECEIVE_SUBSCRIPTION,
  subscription
});

export const removeSubscription = subId => ({
  type: REMOVE_SUBSCRIPTION,
  subId
});

export const fetchSubscriptions = () => dispatch => (
  SubscriptionApiUtil.fetchSubscriptions()
    .then(subscriptions => dispatch(receiveSubscriptions(subscriptions)))
);

export const fetchSubscription = (subId) => dispatch => (
  SubscriptionApiUtil.fetchSubscription(subId)
    .then(subscription => dispatch(receiveSubscription(subscription)))
);

export const createSubscription = data => dispatch => {
  return SubscriptionApiUtil.createSubscription(data)
    .then(subscription => dispatch(receiveSubscription(subscription)))
};

export const deleteSubscription = (subId) => dispatch => (
  SubscriptionApiUtil.deleteSubscription(subId)
    .then(() => dispatch(removeSubscription(subId)))
);

