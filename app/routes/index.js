// app/routes/index.js
module.exports = function(app, io) {

  // =====================================
  // Typeform Survey =====================
  // =====================================
  require('./typeform.js')(app, io);

  // =====================================
  // Data API ============================
  // =====================================
  require('./api.js')(app);

  // =====================================
  // SMS API ============================
  // =====================================
  require('./sms.js')(app);
};
