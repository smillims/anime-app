/** @jsx createElement */
/** @jsxFrag createFragment */
import { createElement } from '../../framework';
import { header, headerH1 } from './style.css';

export default function Header() {
  return (
    <header class={header}>
      <h1 class={headerH1} title="* read like Tsundoku">
        積ん読 *
      </h1>
    </header>
  );
}
