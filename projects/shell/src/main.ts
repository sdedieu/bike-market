import { initFederation } from '@angular-architects/native-federation';

initFederation('federation.manifest.json')
  .catch((err) => console.error('-1_', err))
  .then((_) => import('./bootstrap'))
  .catch((err) => console.error(err));
