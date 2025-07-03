import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import './lightsaber.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);

document.addEventListener("DOMContentLoaded", () => {
  const saber = document.createElement("div");
  saber.classList.add("lightsaber-cursor");
  document.body.appendChild(saber);

  document.addEventListener("mousemove", (e) => {
    saber.style.left = `${e.clientX}px`;
    saber.style.top = `${e.clientY}px`;
  });

  document.addEventListener("mousedown", () => {
    saber.classList.add("clicking");
  });

  document.addEventListener("mouseup", () => {
    saber.classList.remove("clicking");
  });
});



import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


