import { useState } from 'react';

const links = [
  ['#u-nas', 'U nás'],
  ['#nabidka', 'Co si dáte'],
  ['#pribeh', 'Náš příběh'],
  ['#navsteva', 'Kdy a kde'],
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header>
      <nav className="wrap" aria-label="Hlavní navigace">
        <a className="brand" href="#domu" aria-label="Ahoj, úvod" onClick={() => setOpen(false)}>
          <strong>ahoj.</strong><small>U Zvěřinů · Žernovník</small>
        </a>
        <div className={`navlinks${open ? ' open' : ''}`} id="navigation">
          {links.map(([href, label]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}
        </div>
        <a className="phone" href="tel:+420723748557">↗ &nbsp; 723 748 557</a>
        <button className="menu-toggle" aria-expanded={open} aria-controls="navigation" onClick={() => setOpen(!open)}>Menu ☰</button>
      </nav>
    </header>
  );
}
