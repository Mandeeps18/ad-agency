// routes.js
const express = require('express');
const router = express.Router();
const Ad = require('../models/ad');
const Client = require('../models/client');
const Campaign = require('../models/campigan');

// Ad routes
router.post('/ads', async (req, res) => {

    console.log('abhay bhai chichi');
    
  const { title, description, image, client, campaign } = req.body;

  // Validate the request body
  if (!title || !description || !image || !client || !campaign) {
    return res.status(400).send({ error: 'Missing required fields' });
  }

  try {
    // Find the client and campaign documents
    const clientDoc = await Client.findById(client);
    const campaignDoc = await Campaign.findById(campaign);

    // If the client or campaign documents don't exist, return an error
    if (!clientDoc || !campaignDoc) {
      return res.status(404).send({ error: 'Client or campaign not found' });
    }

    // Create a new Ad document
    const ad = new Ad({ title, description, image, client: clientDoc._id, campaign: campaignDoc._id });

    // Save the Ad document
    await ad.save();
    res.send(ad);
  } catch (err) {
    res.status(500).send(err);
  }
});

router.get('/ads', async (req, res) => {
  try {
    const ads = await Ad.find().populate('client').populate('campaign');
    res.send(ads);
  } catch (err) {
    res.status(500).send(err);
  }
});

// Client routes
router.post('/clients', async (req, res) => {
  const client = new Client(req.body);
  try {
    await client.save();
    res.send(client);
  } catch (err) {
    res.status(500).send(err);
  }
});

router.get('/clients', async (req, res) => {
  try {
    const clients = await Client.find();
    res.send(clients);
  } catch (err) {
    res.status(500).send(err);
  }
});

// Campaign routes
router.post('/campaigns', async (req, res) => {
  const campaign = new Campaign(req.body);
  try {
    await campaign.save();
    res.send(campaign);
  } catch (err) {
    res.status(500).send(err);
  }
});

router.get('/campaigns', async (req, res) => {
  try {
    const campaigns = await Campaign.find();
    res.send(campaigns);
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;