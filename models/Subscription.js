const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SubscriptionSchema = new Schema ({
  subscriber_id: {
    type: String,
    required: true
  },
  subscription_id: {
    type: String,
    required: true
  }
})

module.exports = Subscription = mongoose.model('Subscription', SubscriptionSchema);