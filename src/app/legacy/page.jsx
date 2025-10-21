'use client';
import { useRef, useEffect } from 'react';
import gsap from 'gsap';

import './style.css';

export default function Legacy() {
  const heroRef = useRef(null);
  const personRefs = useRef([]);

  useEffect(() => {
    // Hero animation
    gsap.fromTo(
      heroRef.current,
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: 'power3.out',
        delay: 0.3,
      }
    );

    // Person cards animation
    personRefs.current.forEach((person, index) => {
      if (person) {
        gsap.fromTo(
          person,
          { opacity: 0, y: 80 },
          {
            opacity: 1,
            y: 0,
            duration: 1.3,
            ease: 'power3.out',
            delay: 0.5 + index * 0.2,
          }
        );
      }
    });
  }, []);

  const people = [
    {
      name: 'Mr. Amey Vijeesh',
      title: 'Co Founder, Director, CEO',
      image: '/images/founder1.jpeg',
      description:
        'The Zarari is a brainchild of Amey Vijeesh: once a 16 year old student, preparing for JEE, now a successful businessman who owns some of the most sought-after properties in the world. He defines the stories of resilience, hardwork, and adaptability, constantly switching tactics to tackle the problem more efficiently. Besides managing several companies, Amey is also a philanthropist and has contributed generously to poor African countries.',
    },
    {
      name: 'Mrs. Rose Amey',
      title: 'Co Founder, Operations Director',
      image: '/images/founder3.jpg',
      description:
        'Rose, born in the United States, shared a dream with Amey from the very beginning — to create a sanctuary that blends the wild beauty of Africa with timeless luxury. Leaving high school to pursue this vision together, her dedication, grace, and love for culture have been the heartbeat of The Zarari. Rose ensures every detail of the resort reflects warmth, elegance, and authenticity, shaping experiences that mirror the passion she and Amey poured into building their dream — side by side, heart by heart.',
    },
    {
      name: 'Mr. Krishna Soni',
      title: 'Creative Director & Cultural Curator',
      image: '/images/founder2.jpeg',
      description:
        "Once trapped in the relentless cycle of rat races, Krishna Soni sought freedom by joining Mr. Amey's company. Initially an office worker, Krishna Soni rose magnificently to the top and now manages the cultural aspect of Zarari, weaving local artistry and heritage into every corner of the sanctuary.",
    },
  ];

  return (
    <>
      <div className="legacyPage">
        <div className="legacyHero" ref={heroRef}>
          <h1 className="legacyTitle">Our Legacy</h1>
          <p className="legacySubtitle">
            The dreamers who shaped a sanctuary of the Delta
          </p>
        </div>

        <div className="legacyContent">
          {people.map((person, index) => (
            <div
              key={index}
              className="personCard"
              ref={(el) => (personRefs.current[index] = el)}
            >
              <div className="personImage">
                <img src={person.image} alt={person.name} />
              </div>
              <div className="personContent">
                <h2 className="personName">{person.name}</h2>
                <p className="personTitle">{person.title}</p>
                <p className="personDescription">{person.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
