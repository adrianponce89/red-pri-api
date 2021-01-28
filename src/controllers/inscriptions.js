const Inscription = require('../models/inscription');

module.exports = {
  index: async (req, res, next) => {
    const inscriptions = await Inscription.find({});
    res.status(200).json(inscriptions);
  },
  newInscription: async (req, res, next) => {
    const sanitized = {
      name: req.body.name,
      email: req.body.email,
      eventId: req.body.eventId,
      utm_source: req.body.utm_source,
    };
    res.status(200).json(sanitized);
  },
  removeInscription: async (req, res, next) => {
    const { inscriptionId } = req.params;
    const inscription = await Inscription.deleteOne({
      _id: inscriptionId,
    });
    res.status(200).json({ inscription, success: true });
  },
};
