'use client';

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import './navbar.css';
import Link from 'next/link';

export const Navbar = () => {
  const router = useRouter();
  useEffect(() => {
    const handleScroll = () => {
      const logo = document.querySelector('.logo');
      if (window.scrollY > window.innerHeight) {
        logo.style.color = '#000';
      } else {
        logo.style.color = '#f0ece1';
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => {
    const checkbox = document.getElementById('active');
    if (checkbox) checkbox.checked = false;
  };

  const redirect = (to) => {
    router.push(to);
  };

  return (
    <div className="navbar">
      <div className="logo" onClick={() => redirect('/')}>
        Zarari.
      </div>
      <input type="checkbox" id="active" />
      <label htmlFor="active" className="menu-btn">
        <span></span>
      </label>
      <label htmlFor="active" className="close"></label>
      <div className="wrapper">
        <ul>
          <div className="logoActive">Zarari.</div>
          <li>
            <Link href="/" onClick={closeMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/suite" onClick={closeMenu}>
              Accommodation
            </Link>
          </li>
          <li>
            <Link href="/legacy" onClick={closeMenu}>
              Legacy
            </Link>
          </li>
          <li>
            <Link href="/contact" onClick={closeMenu}>
              Contact
            </Link>
          </li>
          <li>
            <Link href="/feedback" onClick={closeMenu}>
              Feedback
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
