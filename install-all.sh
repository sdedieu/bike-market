echo "Installing dependencies in root..."
npm ci
npm ci --prefix projects/market-backend
npm ci --prefix projects/payment
npm ci --prefix projects/chat-backend
echo "Done installing in root."
echo "------------------------"