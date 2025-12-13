import express from 'express';
import cors from 'cors';
import { bikes } from './data/bike';
import { cart } from './data/cart';

export function generateUUID(): string {
  return `${new Date().getTime().toString()}${Math.random().toString(36).substring(2)}`;
}

const app = express();
const PORT = 3001;

// ✅ Enable CORS
app.use(cors());

// ✅ Parse JSON
app.use(express.json());

app.get('/bikes', (req, res) => {
  const _bikes =
    !req.query['brand'] || req.query['brand'] === 'all'
      ? bikes
      : bikes.filter((b) => b.brand === req.query['brand']);
  res.status(200).send(_bikes.sort((a, b) => (a.price < b.price ? 1 : -1)));
});

app.get('/bikes/:bikeId', (req, res) => {
  const bike = bikes.find((b) => req.params.bikeId === b.id);
  if (!bike) return res.status(404).send(`Bike with id ${req.params.bikeId} not found`);
  return res.status(200).send(bike);
});

app.get('/cart/items', (req, res) => {
  return res.status(200).send(cart.items);
});

app.post('/cart/items', (req, res) => {
  const bike = bikes.find((b) => req.body.bikeId === b.id);
  if (!bike) return res.status(404).send(`Bike with id ${req.body.bikeId} not found`);
  cart.addItem(bike);
  return res.status(200).send(bike);
});

app.post('/cart/items/:itemId/quantity', (req, res) => {
  cart.setQuantity(req.params.itemId, req.body.quantity);
  return res.status(200).send(req.body.quantity);
});

app.delete('/cart/items/:itemId', (req, res) => {
  const bike = bikes.find((b) => req.params.itemId === b.id);
  if (!bike) return res.status(404).send(`Bike with id ${req.body.bikeId} not found`);
  cart.removeItem(bike);
  return res.status(200).send(bike);
});

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
