import React from 'react';
import LayoutHeader from './components/LayoutHeader';
import MainView from './components/MainView';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <LayoutHeader />
      <MainView />
    </div>
  );
};

export default App;

// DONE