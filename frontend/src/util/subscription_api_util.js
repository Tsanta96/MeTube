import axios from 'axios';

export const createSubscription = data => {
  return axios.post('/api/subscriptions', data)
};

export const fetchSubscriptions = () => {
  return axios.get('/api/subscriptions')
};

export const fetchSubscription = subId => {
  return axios.get(`/api/subscriptions/${subId}`)
};

export const deleteSubscription = subId => {
  return axios.delete(`/api/subscriptions/${subId}`)
};