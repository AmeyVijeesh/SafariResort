'use client';
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './section2.css';

export default function ExperienceSection() {
  const mainImageRef = useRef(null);
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const gridRefs = useRef([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Main image reveal
    gsap.fromTo(
      mainImageRef.current,
      {
        opacity: 0,
        scale: 1.15,
        clipPath: 'inset(15% 15% 15% 15%)',
      },
      {
        opacity: 1,
        scale: 1,
        clipPath: 'inset(0% 0% 0% 0%)',
        duration: 2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: mainImageRef.current,
          start: 'top 70%',
        },
      }
    );

    gsap.to(mainImageRef.current, {
      y: -60,
      scrollTrigger: {
        trigger: mainImageRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1.5,
      },
    });

    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.3,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: titleRef.current,
          start: 'top 80%',
        },
      }
    );

    // Description animation
    gsap.fromTo(
      descRef.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        delay: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: descRef.current,
          start: 'top 80%',
        },
      }
    );

    // Grid items stagger animation
    gridRefs.current.forEach((item, index) => {
      if (item) {
        gsap.fromTo(
          item,
          { opacity: 0, y: 60 },
          {
            opacity: 1,
            y: 0,
            duration: 1.2,
            delay: index * 0.15,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: item,
              start: 'top 85%',
            },
          }
        );
      }
    });
  }, []);

  const experiences = [
    {
      title: 'Guided Safari',
      description:
        'Traverse the waterways and plains in private guided safaris, where lions, elephants, and wild dogs roam freely. Each journey is tailored to your pace, ensuring that it is thrilling, intimate, and unforgettable.',
      image: '/images/img4.jpg',
    },
    {
      title: 'Helicopter Ride',
      description:
        'Experience the privilege of a helicopter ride across the Okhavango Delta. Map the beauty of African geography, keep up with hunting leopards, and see the sunset light up the distant horizon.',
      image: '/images/img7.jpg',
    },
    {
      title: 'Private Wine Cellar',
      description:
        'Savour the most bespoke vintages, surrounded by the wilderness. The rarest and best Africa has to offer. ',
      image: '/images/img8.jpg',
    },
    {
      title: 'Cultural Exchange',
      description:
        'Visit the neighbouring Nxhoga village for a dive into tribal culture. Talk to the people, weave baskets, watch hut building or visit the bakery, huts, or the market. ',
      image: '/images/img9.avif',
    },
  ];

  return (
    <div className="experienceSection">
      <div className="experienceHero">
        <div className="experienceHeroImage" ref={mainImageRef}>
          <img src="/images/img5.jpg" alt="Safari Experience" />
        </div>
      </div>

      <div className="experienceIntro">
        <h2 ref={titleRef} className="experienceTitle">
          Crafted Encounters
        </h2>
        <p ref={descRef} className="experienceDesc">
          Every moment at The Zarari is designed to awaken your senses and
          connect you deeply with Africa’s wild soul. From intimate wildlife
          safaris to tranquil water journeys, each experience is carefully
          curated: allowing you to explore, discover, and savor the untamed
          beauty around you.
        </p>
      </div>

      <div className="experienceGrid">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="experienceCard"
            ref={(el) => (gridRefs.current[index] = el)}
          >
            <div className="experienceCardImage">
              <img src={exp.image} alt={exp.title} />
            </div>
            <div className="experienceCardContent">
              <h3 className="experienceCardTitle">{exp.title}</h3>
              <p className="experienceCardDesc">{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
