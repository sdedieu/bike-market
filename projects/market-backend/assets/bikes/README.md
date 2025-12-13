# Bike images

`originals/` preserves the 18 manufacturer photos. `sources.json` records their URLs.
`images/` contains centered 1600 × 900 transparent PNGs with a shared visible width of 1280 pixels, preserving the bikes’ proportions.

The backend serves `images/` at `/images/bikes`; the frontend API proxy exposes these at `/api/images/bikes`.
