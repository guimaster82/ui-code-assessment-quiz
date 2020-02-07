import * as React from 'react';
import AppController from './common/AppController'

export const App = () => (
  <div>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h1>Lucid</h1>
        <h2>Welcome to UI Team code assessment!</h2>
    </div>
    <AppController />
  </div>
);
