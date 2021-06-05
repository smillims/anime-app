import React from 'react';
import { header, headerH1 } from './style.css';

export default function Header() {
  return (
    <header className={header}>
      <h1 className={headerH1} title="* read like Tsundoku">
        積ん読 *
      </h1>
    </header>
  );
}
