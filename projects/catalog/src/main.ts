import { initFederation } from '@angular-architects/native-federation';

initFederation()
  .catch((err) => console.error(err))
  .then((_) => import('./bootstrap'))
  .catch((err) => console.error(err))
  .then((_) => import('./bootstrap-banner'))
  .catch((err) => console.error(err));
