 'use client';
import { useState } from 'react';
const links = [['Research', '#Experience_Section'], ['About', '#About_Section'], ['Projects', '#Projects_Section'], ['Contact', '#Message_Form']];
export default function NavigationBar() {
  const [open, setOpen] = useState(false);
  return <nav className="site-nav" aria-label="Main navigation">
    <a href="#Home" className="wordmark" onClick={() => setOpen(false)}>si<span>.</span><span className="sr-only"> Saleem Ibrahim home</span></a>
    <button className="menu-toggle" aria-expanded={open} aria-controls="main-menu" onClick={() => setOpen(!open)}>{open ? 'Close' : 'Menu'} <span aria-hidden="true">{open ? '×' : '+'}</span></button>
    <div id="main-menu" className={`nav-links ${open ? 'is-open' : ''}`}>{links.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}<a className="nav-cv" href="/Saleem-Ibrahim-Resume.pdf" target="_blank" rel="noopener noreferrer">CV &#8599;</a></div>
  </nav>;
}
