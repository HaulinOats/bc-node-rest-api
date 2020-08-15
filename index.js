const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 5000;

app.use(express.static('public'));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.get('/dpnc-health-plan', function (req, res) {
  res.contentType('application/xml');
  res.sendFile(path.join(`${__dirname}/public/xml` , 'health_plan.xml'));
})

app.get('/dpnc-healthcare-provider', function (req, res) {
  res.contentType('application/xml');
  res.sendFile(path.join(`${__dirname}/public/xml` , 'healthcare_provider.xml'));
})

app.listen(PORT, () => console.log(`Listening on ${ PORT }`))