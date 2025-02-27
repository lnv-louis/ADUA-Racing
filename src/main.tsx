import React from 'react';
import App from './App';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('app');

if (container) {
  const root = createRoot(container);
  root.render(<App />);
} else {
  console.error('Failed to find the root element.');
}