'use client';
import Navbar from './components/navbar';
import './home.css';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Suites from './components/suites';
import ExperienceSection from './components/section2';
import Footer from './components/footer';

export default function Home() {
  const titleRef = useRef(null);
  const sectionTitleRef = useRef(null);
  const sectionParaRef = useRef(null);
  const sectionImgRef = useRef(null);
  const videoRef = useRef(null);
  const suitesRef = useRef([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Hero title animation - fade in from bottom
    gsap.fromTo(
      titleRef.current,
      {
        opacity: 0,
        y: 80,
        scale: 0.95,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.8,
        ease: 'power3.out',
        delay: 0.5,
      }
    );

    // Video parallax effect
    gsap.to(videoRef.current, {
      scrollTrigger: {
        trigger: videoRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: 1.5,
      },
      scale: 1.2,
      opacity: 0.4,
      ease: 'none',
    });

    // Section title animation
    gsap.fromTo(
      sectionTitleRef.current,
      {
        opacity: 0,
        y: 60,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionTitleRef.current,
          start: 'top 80%',
          end: 'top 50%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    // Image reveal animation
    gsap.fromTo(
      sectionImgRef.current,
      {
        opacity: 0,
        scale: 1.1,
        clipPath: 'inset(10% 10% 10% 10%)',
      },
      {
        opacity: 1,
        scale: 1,
        clipPath: 'inset(0% 0% 0% 0%)',
        duration: 1.6,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionImgRef.current,
          start: 'top 85%',
          end: 'top 50%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    gsap.to(sectionImgRef.current, {
      y: -50,
      scrollTrigger: {
        trigger: sectionImgRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1.5,
      },
    });

    // Suites section animations
    suitesRef.current.forEach((suite, index) => {
      if (suite) {
        gsap.fromTo(
          suite,
          {
            opacity: 0,
            y: 80,
          },
          {
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: suite,
              start: 'top 85%',
              end: 'top 50%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }
    });
  }, []);

  return (
    <>
      <div style={{ height: '100vh' }}>
        <Navbar />
        <video
          ref={videoRef}
          src="/videos/bgvideo1.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100vh',
            objectFit: 'cover',
            zIndex: -1,
          }}
        />
      </div>
      <div className="homeContent">
        <h1 ref={titleRef} className="homeTitle">
          Experience Africa Like Never Before.
        </h1>
      </div>
      <Suites />
      <ExperienceSection />
    </>
  );
}
