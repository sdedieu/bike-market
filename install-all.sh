echo "Installing dependencies in root..."
npm ci
npm ci --prefix projects/sales
npm ci --prefix projects/payment
echo "Done installing in root."
echo "------------------------"