'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './style.css';
import { useRouter } from 'next/navigation';

export default function SuiteShowcase() {
  const heroImgRef = useRef(null);
  const heroTitleRef = useRef(null);
  const heroSubRef = useRef(null);
  const intro1Ref = useRef(null);
  const intro2Ref = useRef(null);
  const layoutRef = useRef(null);
  const imageRefs = useRef([]);
  const specsRef = useRef(null);
  const experienceRef = useRef(null);
  const finalRef = useRef(null);

  const router = useRouter();

  const redirect = (to) => {
    router.push(to);
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Hero image scale
    gsap.fromTo(
      heroImgRef.current,
      { scale: 1.2 },
      { scale: 1, duration: 2.5, ease: 'power2.out' }
    );

    // Hero text stagger
    gsap.fromTo(
      heroTitleRef.current,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 1.2, delay: 0.6, ease: 'power3.out' }
    );

    gsap.fromTo(
      heroSubRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1.2, delay: 1, ease: 'power3.out' }
    );

    // Intro sections
    [intro1Ref, intro2Ref, layoutRef, specsRef, experienceRef].forEach(
      (ref) => {
        if (ref.current) {
          gsap.fromTo(
            ref.current,
            { opacity: 0, y: 60 },
            {
              opacity: 1,
              y: 0,
              duration: 1.3,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: ref.current,
                start: 'top 80%',
                toggleActions: 'play none none reverse',
              },
            }
          );
        }
      }
    );

    // Images reveal
    imageRefs.current.forEach((img) => {
      if (img) {
        gsap.fromTo(
          img,
          { clipPath: 'inset(10% 10% 10% 10%)', scale: 1.15 },
          {
            clipPath: 'inset(0% 0% 0% 0%)',
            scale: 1,
            duration: 1.6,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: img,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }
    });

    // Final section
    gsap.fromTo(
      finalRef.current,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: finalRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      }
    );
  }, []);

  return (
    <div className="lodge">
      {/* Hero */}
      <div className="lodge__hero">
        <div className="lodge__hero-img-wrapper">
          <img
            ref={heroImgRef}
            src="images/img6.jpg"
            alt="Serengeti Suite"
            className="lodge__hero-img"
          />
        </div>
        <div className="lodge__hero-content">
          <h1 ref={heroTitleRef} className="lodge__hero-title">
            The Zarari.
          </h1>
          <p ref={heroSubRef} className="lodge__hero-subtitle"></p>
        </div>
      </div>

      <section ref={intro1Ref} className="lodge__intro">
        <div className="lodge__intro-container">
          <h2 className="lodge__intro-title">
            Rooted in Nature. Refined in Luxury.
          </h2>
          <p className="lodge__intro-text">
            This African sanctuary mirrors the vastness and tranquility of the
            Okavango Delta. The Okavango Suite welcomes you into nature itself;
            textures, tones, and materials inspired by the waterways, plains,
            and sky surrounds you. Every detail creates a seamless extension of
            the landscape, enveloping you in calm and understated elegance.
            Drawing inspiration from the delta’s serene beauty, the suite is
            refined, immersive, and quietly powerful.
          </p>
        </div>
      </section>

      {/* Image 1 */}
      <div className="lodge__image-row">
        <img
          ref={(el) => (imageRefs.current[0] = el)}
          src="/images/img10.jpg"
          alt="Suite interior"
          className="lodge__image"
        />
      </div>

      {/* Layout section */}
      <section ref={layoutRef} className="lodge__layout">
        <div className="lodge__layout-grid">
          <div className="lodge__layout-text">
            <h2 className="lodge__layout-title">
              Your Home in the Wilderness.
            </h2>
            <p className="lodge__layout-para">
              Expansive yet intimate, the suite opens onto the endless waterways
              and plains of the Okavango Delta through floor-to-ceiling windows.
              A luxurious bathroom with an outdoor shower, a private terrace,
              and thoughtfully crafted living spaces create a seamless blend of
              comfort and nature. Designed for connection, reflection, and
              relaxation, the suite embodies understated elegance while
              celebrating the textures, colors, and spirit of contemporary
              African design.
            </p>
          </div>
          <div className="lodge__layout-img-wrapper">
            <img
              ref={(el) => (imageRefs.current[1] = el)}
              src="images/img11.avif"
              alt="Suite bedroom"
              className="lodge__layout-img"
            />
          </div>
        </div>
      </section>

      {/* Specs */}
      <section ref={specsRef} className="lodge__specs">
        <h2 className="lodge__specs-title">Family King Suite</h2>
        <div className="lodge__specs-grid">
          <div className="lodge__spec-item">
            <span className="lodge__spec-label">Concierge</span>
            <span className="lodge__spec-value">Dedicated Butler & Chef</span>
          </div>
          <div className="lodge__spec-item">
            <span className="lodge__spec-label">Guests</span>
            <span className="lodge__spec-value">4 Adults</span>
          </div>
          <div className="lodge__spec-item">
            <span className="lodge__spec-label">Size</span>
            <span className="lodge__spec-value">120 sqm</span>
          </div>
          <div className="lodge__spec-item">
            <span className="lodge__spec-label">Key Features</span>
            <span className="lodge__spec-value">
              Private deck, walk-shower, plunge pool, free-standing bathtub.
            </span>
          </div>
        </div>
      </section>

      {/* Experience Grid */}
      <section ref={experienceRef} className="lodge__experience">
        <h2 className="lodge__experience-title">The Zarari Experience</h2>
        <div className="lodge__experience-grid">
          <div className="lodge__experience-item">
            <div className="lodge__experience-img-wrapper">
              <img
                ref={(el) => (imageRefs.current[2] = el)}
                src="images/img14.jpg"
                alt="Safari experience"
                className="lodge__experience-img"
              />
            </div>
            <h3 className="lodge__experience-subtitle">Stargazing Nights</h3>
            <p className="lodge__experience-text">
              As dusk deepens, the African sky unveils a symphony of stars.
              Experience the delta’s silence beneath constellations that have
              guided generations: vast, eternal, unforgettable.
            </p>
          </div>

          <div className="lodge__experience-item">
            <div className="lodge__experience-img-wrapper">
              <img
                ref={(el) => (imageRefs.current[3] = el)}
                src="images/img12.avif"
                alt="Dining experience"
                className="lodge__experience-img"
              />
            </div>
            <h3 className="lodge__experience-subtitle">Culinary Journey</h3>
            <p className="lodge__experience-text">
              Savor contemporary cuisine infused with local flavors, from bush
              breakfasts under acacia trees to candlelit dinners beneath the
              stars.
            </p>
          </div>

          <div className="lodge__experience-item">
            <div className="lodge__experience-img-wrapper">
              <img
                ref={(el) => (imageRefs.current[4] = el)}
                src="images/img13.avif"
                alt="Wellness"
                className="lodge__experience-img"
              />
            </div>
            <h3 className="lodge__experience-subtitle">Wellness & Spa</h3>
            <p className="lodge__experience-text">
              Indulge in rejuvenating treatments that draw from ancient African
              healing traditions, designed to restore balance and vitality.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section ref={finalRef} className="lodge__final">
        <div className="lodge__final-container">
          <p className="lodge__final-text">
            "To witness a place like this is to understand what we stand to
            lose—and what we must protect."
          </p>
          <button
            className="lodge__final-btn"
            onClick={() => redirect('/contact')}
          >
            Request Availability
          </button>
          <p className="lodge__final-note">
            Rates from $2,400 per person per night, fully inclusive
          </p>
        </div>
      </section>
    </div>
  );
}
