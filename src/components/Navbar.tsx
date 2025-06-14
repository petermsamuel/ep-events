import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-2" : "bg-white py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <a href="#hero" className="text-2xl font-bold">
          <img 
            src="/lovable-uploads/E&P_events_lion_horizontal.svg" 
            alt="E&P Events Logo" 
            className="h-12 w-auto"
          />
        </a>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-6 w-6" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Desktop Navigation with right-aligned CTA */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#what-we-do" className="text-black hover:text-gold transition-colors">What We Do</a>
          <a href="#featured" className="text-black hover:text-gold transition-colors">Featured In</a>
          <a href="#meet-peter" className="text-black hover:text-gold transition-colors">Meet Peter</a>
          <a href="#testimonials" className="text-black hover:text-gold transition-colors">Testimonials</a>
          <a href="#gallery" className="text-black hover:text-gold transition-colors">Gallery</a>
          <a href="#contact" className="text-black hover:text-gold transition-colors">Contact</a>

          {/* Book a Call Button */}
          <a
            href="https://cal.com/eandp.events/clarity"
            target="_blank"
            rel="noopener noreferrer"
            className="glow-button-inner"
          >
            Book a Call
          </a>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white shadow-md py-4 md:hidden">
            <div className="flex flex-col space-y-4 px-4">
              <a 
                href="#what-we-do" 
                className="text-black hover:text-gold transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                What We Do
              </a>
              <a 
                href="#featured" 
                className="text-black hover:text-gold transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Featured In
              </a>
              <a 
                href="#meet-peter" 
                className="text-black hover:text-gold transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Meet Peter
              </a>
              <a 
                href="#testimonials" 
                className="text-black hover:text-gold transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Testimonials
              </a>
              <a 
                href="#gallery" 
                className="text-black hover:text-gold transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Gallery
              </a>
              <a 
                href="#contact" 
                className="text-black hover:text-gold transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>

              {/* Mobile Book a Call Button */}
              <a
                href="https://cal.com/ryanmcmullen/15min"
                target="_blank"
                rel="noopener noreferrer"
                className="glow-button-inner"
                onClick={() => setIsMenuOpen(false)}
              >
                Book a Call
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
