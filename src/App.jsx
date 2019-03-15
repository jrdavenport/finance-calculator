import React from 'react';
import Navigation from './components/navigation';
import Projector from './components/projector';
import './App.scss';
import WithAuthentication from './components/withAuthentication';

export const App = () => (
  <div className="app">
    <div className="header">
      <h1 className="app-title">Money Flux</h1>
      <Navigation />
    </div>
    <div className="content">
      <Projector />
    </div>
  </div>
);

const AuthenticatedApp = () => (
  <WithAuthentication>
    <App />
  </WithAuthentication>
);

export default AuthenticatedApp;