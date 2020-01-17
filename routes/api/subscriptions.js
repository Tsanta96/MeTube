const express = require('express');
const router = express.Router();
const Subscription = require('../../models/Subscription');
const toObject = require('../util/toObject');

router.get('/subscriptions', (req, res) => {
  Subscription.find()
    .then(subscriptions => res.json(toObject(subscriptions)))
    .catch(errors => res.status(404).json({ noSubs: "No subscriptions found" }))
});

router.post('/subscriptions', (req, res) => {
  const newSubscription = new Subscription({
    subscriber_id: req.body.subscriber_id,
    subscription_id: req.body.subscription_id
  });
  newSubscription.save()
    .then(subscription => res.json(subscription))
    .catch(error => console.log(error))
});

router.delete('/subscriptions/:id', (req, res) => {
  Subscription.findByIdAndDelete(req.params.id)
    .then(subId => res.json(subId))
    .catch(error => res.status(404).json({ noSubs: "Unable to delete subscription with that id" }))
});

module.exports = router;