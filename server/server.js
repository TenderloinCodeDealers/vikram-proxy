const express = require('express');
const url = require('url');
const compression = require('compression');

// Set up Express server and JSON parsing of API requests
const app = express();
// Allow Cross Origin Requests
app.use(compression());
app.use('/:id', express.static('client/dist'));
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on ${port}...`));
/* --------------------------------------------------------------------------------------------- */

const carousel = 'http://54.183.146.159';
const ratings = 'http://13.57.214.131:30';
const recentlyViewed = 'http://54.193.11.2:3000';
const sideBar = 'http://18.191.153.175:8080';

// API Requests to Photo Carousel
app.get('/:id/api/images', (req, res) => {
  res.redirect(307, `${carousel}/${req.params.dealId}/api/images`);
});

/* --------------------------------------------------------------------------------------------- */

// API Requests to Ratings and Reviews
app.get('/:dealId/api/ratings', (req, res) => {
  res.redirect(
    url.format({
      pathname: `${ratings}/${req.params.dealId}/api/ratings`,
      query: req.query
    })
  );
});

app.get('/:dealId/api/reviews', (req, res) => {
  res.redirect(307, `${ratings}/${req.params.dealId}/api/reviews`);
});
/* --------------------------------------------------------------------------------------------- */

// API Requests to Recently Viewed Deals
app.get('/:id/api/recently-viewed-product-data', (req, res) => {
  res.redirect(`${recentlyViewed}/${req.params.id}/api/recently-viewed-product-data`);
});

app.get('/:id/api/recently-viewed-service-data', (req, res) => {
  res.redirect(`${recentlyViewed}/${req.params.id}/api/recently-viewed-service-data`);
});
/* --------------------------------------------------------------------------------------------- */

// API Requests to Side Bar
app.get('/:id/api/products', (req, res) => {
  res.redirect(`${sideBar}/${req.params.id}/api/products`);
});
