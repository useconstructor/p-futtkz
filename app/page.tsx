'use client';

import { useState, useEffect } from 'react';

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div style={{ backgroundColor: '#F5F1E8', minHeight: '100vh' }}>
      {/* Sticky Navigation */}
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          backgroundColor: isScrolled ? 'rgba(245, 241, 232, 0.98)' : 'transparent',
          backdropFilter: isScrolled ? 'blur(10px)' : 'none',
          transition: 'all 0.3s ease',
          borderBottom: isScrolled ? '1px solid rgba(44, 62, 53, 0.1)' : 'none',
        }}
      >
        <nav
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '24px 60px',
            maxWidth: '1400px',
            margin: '0 auto',
          }}
        >
          <a href="/" style={{ textDecoration: 'none' }}>
            <span
              style={{
                fontFamily: 'Georgia, serif',
                fontSize: '1.5rem',
                color: '#2C3E35',
                letterSpacing: '0.05em',
              }}
            >
              SERENITY
            </span>
          </a>
          <div style={{ display: 'flex', gap: '40px', alignItems: 'center' }}>
            <a href="#about" className="nav-link">ABOUT</a>
            <a href="#classes" className="nav-link">CLASSES</a>
            <a href="#wellness" className="nav-link">WELLNESS</a>
            <a href="#journal" className="nav-link">JOURNAL</a>
            <a href="#contact" className="nav-link">CONTACT</a>
          </div>
        </nav>
      </header>

      {/* Hero Split Section */}
      <section
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          minHeight: '100vh',
          paddingTop: '80px',
        }}
      >
        {/* Left Content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: '80px 60px',
            backgroundColor: '#F5F1E8',
          }}
        >
          <p
            style={{
              fontSize: '0.75rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: '#6B9B8D',
              marginBottom: '24px',
            }}
          >
            BOUTIQUE YOGA STUDIO
          </p>
          <h1
            style={{
              fontFamily: 'Georgia, serif',
              fontSize: '4rem',
              fontWeight: 400,
              lineHeight: 1.1,
              color: '#2C3E35',
              marginBottom: '32px',
              maxWidth: '500px',
            }}
          >
            Make space.<br />For what matters.
          </h1>
          <p
            style={{
              fontSize: '1.1rem',
              lineHeight: 1.7,
              color: '#3D4F46',
              marginBottom: '48px',
              maxWidth: '420px',
            }}
          >
            A sanctuary where movement meets mindfulness. Discover classes designed for every body, every breath, every intention.
          </p>
          <div style={{ display: 'flex', gap: '16px' }}>
            <a href="#classes" className="btn-primary">
              EXPLORE CLASSES
            </a>
            <a href="#about" className="btn-outline">
              OUR STORY
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div
          style={{
            backgroundColor: '#E8E4DB',
            backgroundImage: 'linear-gradient(135deg, #D4CFC6 0%, #E8E4DB 50%, #C9C4BB 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              width: '100%',
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
            }}
          >
            {/* Decorative yoga pose silhouette */}
            <svg
              viewBox="0 0 200 300"
              style={{
                width: '60%',
                maxWidth: '300px',
                height: 'auto',
                opacity: 0.15,
              }}
            >
              <ellipse cx="100" cy="60" rx="25" ry="30" fill="#6B9B8D" />
              <path
                d="M100 90 L100 180 M60 120 L100 130 L140 100 M100 180 L70 270 M100 180 L130 260"
                stroke="#6B9B8D"
                strokeWidth="8"
                strokeLinecap="round"
                fill="none"
              />
            </svg>
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <section
        style={{
          backgroundColor: '#6B9B8D',
          padding: '60px 60px',
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '40px',
            maxWidth: '1200px',
            margin: '0 auto',
            textAlign: 'center',
          }}
        >
          <div>
            <p
              style={{
                fontFamily: 'Georgia, serif',
                fontSize: '3rem',
                color: 'white',
                marginBottom: '8px',
              }}
            >
              12+
            </p>
            <p
              style={{
                fontSize: '0.75rem',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: 'rgba(255, 255, 255, 0.85)',
              }}
            >
              Years of Practice
            </p>
          </div>
          <div>
            <p
              style={{
                fontFamily: 'Georgia, serif',
                fontSize: '3rem',
                color: 'white',
                marginBottom: '8px',
              }}
            >
              40+
            </p>
            <p
              style={{
                fontSize: '0.75rem',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: 'rgba(255, 255, 255, 0.85)',
              }}
            >
              Weekly Classes
            </p>
          </div>
          <div>
            <p
              style={{
                fontFamily: 'Georgia, serif',
                fontSize: '3rem',
                color: 'white',
                marginBottom: '8px',
              }}
            >
              2,500+
            </p>
            <p
              style={{
                fontSize: '0.75rem',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: 'rgba(255, 255, 255, 0.85)',
              }}
            >
              Active Members
            </p>
          </div>
          <div>
            <p
              style={{
                fontFamily: 'Georgia, serif',
                fontSize: '3rem',
                color: 'white',
                marginBottom: '8px',
              }}
            >
              4.9
            </p>
            <p
              style={{
                fontSize: '0.75rem',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: 'rgba(255, 255, 255, 0.85)',
              }}
            >
              Star Rating
            </p>
          </div>
        </div>
      </section>

      {/* About Split Section */}
      <section
        id="about"
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          minHeight: '80vh',
        }}
      >
        {/* Left Image */}
        <div
          style={{
            backgroundColor: '#D4CFC6',
            backgroundImage: 'linear-gradient(45deg, #C9C4BB 0%, #D4CFC6 50%, #E0DBD2 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div
            style={{
              width: '80%',
              height: '70%',
              backgroundColor: 'rgba(107, 155, 141, 0.1)',
              borderRadius: '4px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <svg
              viewBox="0 0 100 100"
              style={{ width: '40%', opacity: 0.2 }}
            >
              <circle cx="50" cy="50" r="45" stroke="#6B9B8D" strokeWidth="2" fill="none" />
              <path
                d="M50 15 L50 85 M15 50 L85 50"
                stroke="#6B9B8D"
                strokeWidth="2"
              />
            </svg>
          </div>
        </div>

        {/* Right Content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: '80px 60px',
            backgroundColor: '#F5F1E8',
          }}
        >
          <p
            style={{
              fontSize: '0.75rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: '#6B9B8D',
              marginBottom: '24px',
            }}
          >
            OUR STORY
          </p>
          <h2
            style={{
              fontFamily: 'Georgia, serif',
              fontSize: '2.75rem',
              fontWeight: 400,
              lineHeight: 1.2,
              color: '#2C3E35',
              marginBottom: '32px',
              maxWidth: '450px',
            }}
          >
            A thoughtful space for transformation
          </h2>
          <p
            style={{
              fontSize: '1.05rem',
              lineHeight: 1.8,
              color: '#3D4F46',
              marginBottom: '24px',
              maxWidth: '480px',
            }}
          >
            Founded on the belief that wellness is not a destination but a journey, Serenity Yoga Studios has been guiding our community through mindful movement for over a decade.
          </p>
          <p
            style={{
              fontSize: '1.05rem',
              lineHeight: 1.8,
              color: '#3D4F46',
              marginBottom: '40px',
              maxWidth: '480px',
            }}
          >
            Our studio is designed to be a refuge from the everyday—a place where you can reconnect with your body, quiet your mind, and nurture your spirit in the company of a supportive community.
          </p>
          <a href="#contact" className="btn-primary" style={{ alignSelf: 'flex-start' }}>
            MEET OUR INSTRUCTORS
          </a>
        </div>
      </section>

      {/* Classes Section */}
      <section
        id="classes"
        style={{
          padding: '120px 60px',
          backgroundColor: '#F5F1E8',
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <p
              style={{
                fontSize: '0.75rem',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: '#6B9B8D',
                marginBottom: '24px',
              }}
            >
              OUR OFFERINGS
            </p>
            <h2
              style={{
                fontFamily: 'Georgia, serif',
                fontSize: '2.75rem',
                fontWeight: 400,
                color: '#2C3E35',
                marginBottom: '24px',
              }}
            >
              Classes for every journey
            </h2>
            <p
              style={{
                fontSize: '1.05rem',
                lineHeight: 1.7,
                color: '#3D4F46',
                maxWidth: '600px',
                margin: '0 auto',
              }}
            >
              From gentle flows to challenging vinyasa, find the practice that speaks to where you are today.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '32px',
            }}
          >
            {[
              {
                title: 'Vinyasa Flow',
                description: 'Dynamic sequences linking breath and movement for strength and flexibility.',
                level: 'All Levels',
              },
              {
                title: 'Restorative',
                description: 'Gentle, supported poses designed to promote deep relaxation and healing.',
                level: 'Beginner Friendly',
              },
              {
                title: 'Power Yoga',
                description: 'An energizing practice that builds heat, stamina, and mental focus.',
                level: 'Intermediate',
              },
            ].map((classItem, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: 'white',
                  padding: '48px 40px',
                  borderRadius: '4px',
                  border: '1px solid rgba(44, 62, 53, 0.08)',
                }}
              >
                <p
                  style={{
                    fontSize: '0.7rem',
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    color: '#6B9B8D',
                    marginBottom: '16px',
                  }}
                >
                  {classItem.level}
                </p>
                <h3
                  style={{
                    fontFamily: 'Georgia, serif',
                    fontSize: '1.5rem',
                    fontWeight: 400,
                    color: '#2C3E35',
                    marginBottom: '16px',
                  }}
                >
                  {classItem.title}
                </h3>
                <p
                  style={{
                    fontSize: '0.95rem',
                    lineHeight: 1.7,
                    color: '#3D4F46',
                    marginBottom: '24px',
                  }}
                >
                  {classItem.description}
                </p>
                <a
                  href="#contact"
                  style={{
                    fontSize: '0.75rem',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: '#6B9B8D',
                    textDecoration: 'none',
                    borderBottom: '1px solid #6B9B8D',
                    paddingBottom: '2px',
                  }}
                >
                  VIEW SCHEDULE
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wellness Section */}
      <section
        id="wellness"
        style={{
          padding: '120px 60px',
          backgroundColor: '#E8E4DB',
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <p
            style={{
              fontSize: '0.75rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: '#6B9B8D',
              marginBottom: '24px',
            }}
          >
            WELLNESS PROGRAMS
          </p>
          <h2
            style={{
              fontFamily: 'Georgia, serif',
              fontSize: '2.75rem',
              fontWeight: 400,
              color: '#2C3E35',
              marginBottom: '24px',
            }}
          >
            Beyond the mat
          </h2>
          <p
            style={{
              fontSize: '1.05rem',
              lineHeight: 1.7,
              color: '#3D4F46',
              maxWidth: '650px',
              margin: '0 auto 48px',
            }}
          >
            Extend your practice with workshops, meditation sessions, and wellness retreats designed to deepen your connection to self.
          </p>
          <a href="#contact" className="btn-primary">
            EXPLORE PROGRAMS
          </a>
        </div>
      </section>

      {/* Journal Section */}
      <section
        id="journal"
        style={{
          padding: '120px 60px',
          backgroundColor: '#F5F1E8',
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <p
              style={{
                fontSize: '0.75rem',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: '#6B9B8D',
                marginBottom: '24px',
              }}
            >
              FROM THE JOURNAL
            </p>
            <h2
              style={{
                fontFamily: 'Georgia, serif',
                fontSize: '2.75rem',
                fontWeight: 400,
                color: '#2C3E35',
              }}
            >
              Insights for your practice
            </h2>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '40px',
            }}
          >
            {[
              {
                title: 'Finding stillness in a busy world',
                excerpt: 'Simple techniques to cultivate calm amidst the chaos of daily life.',
                date: 'August 2026',
              },
              {
                title: 'The beginner\'s guide to breathwork',
                excerpt: 'Explore the foundations of pranayama and its transformative benefits.',
                date: 'July 2026',
              },
            ].map((post, index) => (
              <div
                key={index}
                style={{
                  padding: '40px',
                  backgroundColor: 'white',
                  borderRadius: '4px',
                  border: '1px solid rgba(44, 62, 53, 0.08)',
                }}
              >
                <p
                  style={{
                    fontSize: '0.7rem',
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    color: '#6B9B8D',
                    marginBottom: '16px',
                  }}
                >
                  {post.date}
                </p>
                <h3
                  style={{
                    fontFamily: 'Georgia, serif',
                    fontSize: '1.4rem',
                    fontWeight: 400,
                    color: '#2C3E35',
                    marginBottom: '12px',
                    lineHeight: 1.4,
                  }}
                >
                  {post.title}
                </h3>
                <p
                  style={{
                    fontSize: '0.95rem',
                    lineHeight: 1.7,
                    color: '#3D4F46',
                    marginBottom: '20px',
                  }}
                >
                  {post.excerpt}
                </p>
                <a
                  href="#"
                  style={{
                    fontSize: '0.75rem',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: '#6B9B8D',
                    textDecoration: 'none',
                    borderBottom: '1px solid #6B9B8D',
                    paddingBottom: '2px',
                  }}
                >
                  READ MORE
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        style={{
          padding: '120px 60px',
          backgroundColor: '#2C3E35',
        }}
      >
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <p
            style={{
              fontSize: '0.75rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: '#6B9B8D',
              marginBottom: '24px',
            }}
          >
            GET IN TOUCH
          </p>
          <h2
            style={{
              fontFamily: 'Georgia, serif',
              fontSize: '2.75rem',
              fontWeight: 400,
              color: 'white',
              marginBottom: '24px',
            }}
          >
            Begin your journey
          </h2>
          <p
            style={{
              fontSize: '1.05rem',
              lineHeight: 1.7,
              color: 'rgba(255, 255, 255, 0.8)',
              marginBottom: '48px',
            }}
          >
            Ready to make space for what matters? We&apos;d love to welcome you to our studio. Reach out to book a class or learn more about membership options.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
            <a
              href="mailto:hello@serenityyoga.com"
              className="btn-primary"
            >
              CONTACT US
            </a>
            <a
              href="#classes"
              style={{
                display: 'inline-block',
                backgroundColor: 'transparent',
                color: 'white',
                padding: '14px 32px',
                border: '1px solid rgba(255, 255, 255, 0.5)',
                borderRadius: '2px',
                textDecoration: 'none',
                fontSize: '0.75rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
              }}
            >
              VIEW SCHEDULE
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        style={{
          backgroundColor: '#243029',
          padding: '60px 60px 40px',
        }}
      >
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: '2fr 1fr 1fr 1fr',
            gap: '60px',
          }}
        >
          <div>
            <span
              style={{
                fontFamily: 'Georgia, serif',
                fontSize: '1.5rem',
                color: 'white',
                letterSpacing: '0.05em',
                display: 'block',
                marginBottom: '20px',
              }}
            >
              SERENITY
            </span>
            <p
              style={{
                fontSize: '0.9rem',
                lineHeight: 1.7,
                color: 'rgba(255, 255, 255, 0.6)',
                maxWidth: '280px',
              }}
            >
              A thoughtful space for transformation in the heart of the city.
            </p>
          </div>
          <div>
            <p
              style={{
                fontSize: '0.7rem',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: 'rgba(255, 255, 255, 0.4)',
                marginBottom: '20px',
              }}
            >
              Studio
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <a href="#about" style={{ color: 'rgba(255, 255, 255, 0.7)', textDecoration: 'none', fontSize: '0.9rem' }}>About</a>
              <a href="#classes" style={{ color: 'rgba(255, 255, 255, 0.7)', textDecoration: 'none', fontSize: '0.9rem' }}>Classes</a>
              <a href="#" style={{ color: 'rgba(255, 255, 255, 0.7)', textDecoration: 'none', fontSize: '0.9rem' }}>Instructors</a>
            </div>
          </div>
          <div>
            <p
              style={{
                fontSize: '0.7rem',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: 'rgba(255, 255, 255, 0.4)',
                marginBottom: '20px',
              }}
            >
              Resources
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <a href="#wellness" style={{ color: 'rgba(255, 255, 255, 0.7)', textDecoration: 'none', fontSize: '0.9rem' }}>Wellness</a>
              <a href="#journal" style={{ color: 'rgba(255, 255, 255, 0.7)', textDecoration: 'none', fontSize: '0.9rem' }}>Journal</a>
              <a href="#" style={{ color: 'rgba(255, 255, 255, 0.7)', textDecoration: 'none', fontSize: '0.9rem' }}>FAQ</a>
            </div>
          </div>
          <div>
            <p
              style={{
                fontSize: '0.7rem',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: 'rgba(255, 255, 255, 0.4)',
                marginBottom: '20px',
              }}
            >
              Connect
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <a href="#contact" style={{ color: 'rgba(255, 255, 255, 0.7)', textDecoration: 'none', fontSize: '0.9rem' }}>Contact</a>
              <a href="#" style={{ color: 'rgba(255, 255, 255, 0.7)', textDecoration: 'none', fontSize: '0.9rem' }}>Instagram</a>
              <a href="#" style={{ color: 'rgba(255, 255, 255, 0.7)', textDecoration: 'none', fontSize: '0.9rem' }}>Newsletter</a>
            </div>
          </div>
        </div>
        <div
          style={{
            maxWidth: '1200px',
            margin: '60px auto 0',
            paddingTop: '30px',
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            textAlign: 'center',
          }}
        >
          <p
            style={{
              fontSize: '0.8rem',
              color: 'rgba(255, 255, 255, 0.4)',
            }}
          >
            &copy; 2026 Serenity Yoga Studios. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
