'use client';
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './suites.css';

export default function Suites() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const imageRefs = useRef([]);
  const textRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        duration: 1.4,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: titleRef.current,
          start: 'top 80%',
        },
      }
    );

    // Subtitle animation
    gsap.fromTo(
      subtitleRef.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        delay: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: subtitleRef.current,
          start: 'top 80%',
        },
      }
    );

    gsap.fromTo(
      textRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.3,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: textRef.current,
          start: 'top 75%',
        },
      }
    );

    imageRefs.current.forEach((img, index) => {
      if (img) {
        gsap.fromTo(
          img,
          { opacity: 0, scale: 1.1, clipPath: 'inset(8% 8% 8% 8%)' },
          {
            opacity: 1,
            scale: 1,
            clipPath: 'inset(0% 0% 0% 0%)',
            duration: 1.6,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: img,
              start: 'top 80%',
            },
          }
        );

        gsap.to(img, {
          y: -40,
          scrollTrigger: {
            trigger: img,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1.5,
          },
        });
      }
    });
  }, []);

  return (
    <div className="suitesSection" ref={sectionRef}>
      <div className="suitesIntro">
        <h1 ref={titleRef} className="suitesTitle">
          The Zarari.
        </h1>
        <p ref={subtitleRef} className="suitesSubtitle">
          Eternity in the Heart of Botswana.
        </p>
      </div>

      <div className="suitesContent">
        <div className="suitesText" ref={textRef}>
          <p className="suitesDescription">
            Nestled in the heart of Botswana’s iconic Okavango Delta, The Zarari
            is a sanctuary where time slows and the wild whispers its secrets.
            Here, the untamed beauty of Africa meets unrivaled luxury: private
            suites embedded in the savannah, sun-drenched wilderness stretch to
            the horizon, and every moment is curated to connect you with
            nature’s raw elegance.
          </p>
          <p className="suitesDescription">
            At The Zarari, adventure and serenity coexist: glide silently in a
            mokoro through crystal-clear channels, witness majestic elephants
            roaming freely, or simply unwind as the African sunset paints the
            sky in gold and crimson. This is Africa, reimagined; a place where
            luxury is immersive, intimate, and timeless.
          </p>
          <div className="suitesFeatures">
            <div className="feature">
              <span className="featureNumber">180°</span>
              <span className="featureText">Panoramic Views</span>
            </div>
            <div className="feature">
              <span className="featureNumber">11</span>
              <span className="featureText">Private Suites</span>
            </div>
            <div className="feature">
              <span className="featureNumber">24/7</span>
              <span className="featureText">Butler Service</span>
            </div>
          </div>
          <a href="#" className="suitesLink">
            Explore the Suites →
          </a>
        </div>

        <div className="suitesImages">
          <div
            className="suiteImageLarge"
            ref={(el) => (imageRefs.current[0] = el)}
          >
            <img src="/images/img3.webp" alt="Rock Sanctuary Main View" />
          </div>
          <div className="suiteImageGrid">
            <div
              className="suiteImageSmall"
              ref={(el) => (imageRefs.current[1] = el)}
            >
              <img src="/images/img2.jpg" alt="Private Pool" />
            </div>
            <div
              className="suiteImageSmall"
              ref={(el) => (imageRefs.current[2] = el)}
            >
              <img src="/images/sideimg1.jpeg" alt="Suite Interior" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
