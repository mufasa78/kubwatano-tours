import { useEffect } from "react";
import { motion } from "framer-motion";
import HeroSection from "./HeroSection";
import TourPackagesGallery from "./TourPackagesGallery";
import TestimonialCarousel from "./TestimonialCarousel";
import ServicesCarousel from "./ServicesCarousel";
import SEOHead from "./SEOHead";
import AnimatedSection from "@/components/ui/animated-section";
import Separator from "@/components/ui/separator";
import OptimizedImage from "@/components/ui/optimized-image";
import { Button } from "./ui/button";
import { Mail, Phone, MapPin } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { preloadCriticalImages } from "../utils/imagePreloader";
import { preloadCriticalResources } from "../utils/performance";

const HomePage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Preload critical images and resources for better performance
    preloadCriticalImages();
    preloadCriticalResources();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <SEOHead />
      {/* Hero Section */}
      <HeroSection />

      {/* About Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 lg:px-16 bg-gradient-to-br from-stone-50 to-amber-50 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 left-0 w-full h-full opacity-5">
          <div className="absolute top-20 left-10 w-32 h-32 bg-[#5c0811] rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-amber-600 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative">
          <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-12 lg:gap-16">
            <AnimatedSection className="lg:w-1/2 space-y-6 sm:space-y-8" direction="left">
              <motion.h2 
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#5c0811] leading-tight"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                About Kubwa Tano Tours
              </motion.h2>
              <Separator variant="gradient" />
              <motion.p 
                className="text-gray-700 text-base sm:text-lg leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Experience the magic of Kenya and beyond with our curated luxury
                safari adventures. At Kubwa Tano Tours, we blend luxury,
                culture, and adventure to create unforgettable journeys through
                Africa's most breathtaking landscapes.
              </motion.p>
              <motion.p 
                className="text-gray-700 text-lg leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                Our expert guides and personalized service ensure that every
                moment of your safari is comfortable, authentic, and truly
                memorable. From the majestic wildlife of the Maasai Mara to the
                pristine beaches of the Kenyan coast, we showcase the best of
                East Africa.
              </motion.p>
              <motion.div 
                className="grid grid-cols-2 gap-4 sm:gap-6 md:gap-8 py-6 sm:py-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <motion.div 
                  className="text-center group"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#5c0811] group-hover:text-amber-600 transition-colors duration-300">500+</div>
                  <div className="text-sm sm:text-base text-gray-600 font-medium">
                    Happy Travelers
                  </div>
                </motion.div>
                <motion.div 
                  className="text-center group"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#5c0811] group-hover:text-amber-600 transition-colors duration-300">15+</div>
                  <div className="text-sm sm:text-base text-gray-600 font-medium">
                    Years Experience
                  </div>
                </motion.div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 1.0 }}
              >
                <Button
                  onClick={() => navigate("/about")}
                  className="bg-[#5c0811] hover:bg-[#7a0b17] text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:shadow-xl hover:scale-105 transform"
                >
                  Learn More About Us
                </Button>
              </motion.div>
            </AnimatedSection>
            <AnimatedSection className="lg:w-1/2" direction="right" delay={0.3}>
              <div className="relative group">
                <OptimizedImage
                  src="https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&h=600&fit=crop&crop=center&auto=format&q=80"
                  alt="Safari Experience"
                  className="rounded-2xl shadow-2xl w-full h-96 group-hover:shadow-3xl transition-all duration-500"
                  width={800}
                  quality={90}
                  priority
                />
                <motion.div 
                  className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-xl border border-gray-100"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 1.2 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-2xl font-bold text-[#5c0811]">4.9★</div>
                  <div className="text-gray-600 text-sm font-medium">
                    Customer Rating
                  </div>
                </motion.div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Tour Packages Section */}
      <section data-section="tour-packages" className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 lg:px-16 bg-white relative">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-[#5c0811] rounded-full"></div>
          <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-amber-600 rounded-full"></div>
          <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-[#5c0811] rounded-full"></div>
          <div className="absolute bottom-1/3 right-1/4 w-2 h-2 bg-amber-600 rounded-full"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative">
          <AnimatedSection className="text-center mb-12 sm:mb-16 lg:mb-20">
            <motion.h2 
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#5c0811] mb-6 sm:mb-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              Our Safari Experiences
            </motion.h2>
            <Separator variant="elegant" className="mb-8" />
            <motion.p 
              className="text-gray-700 text-lg max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Discover our carefully crafted safari packages designed to
              showcase the beauty and diversity of Kenya and beyond. Each tour
              is meticulously planned to provide authentic experiences while
              ensuring your comfort and safety.
            </motion.p>
          </AnimatedSection>
          <AnimatedSection direction="up" delay={0.2}>
            <TourPackagesGallery />
          </AnimatedSection>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-stone-50 via-stone-25 to-amber-25 relative overflow-hidden">
        {/* Animated background elements */}
        <motion.div 
          className="absolute top-10 left-10 w-20 h-20 bg-[#5c0811] rounded-full opacity-10 blur-xl"
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360]
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div 
          className="absolute bottom-10 right-10 w-32 h-32 bg-amber-600 rounded-full opacity-10 blur-xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0]
          }}
          transition={{ 
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        <AnimatedSection direction="fade" delay={0.2}>
          <ServicesCarousel />
        </AnimatedSection>
      </section>

      {/* Testimonials Section */}
      <section data-section="testimonials" className="py-20 px-4 md:px-8 lg:px-16 bg-white relative">
        {/* Subtle background decoration */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-stone-25 to-transparent opacity-30"></div>
        
        <div className="max-w-7xl mx-auto relative">
          <AnimatedSection className="text-center mb-16">
            <motion.h2 
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#5c0811] mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              What Our Guests Say
            </motion.h2>
            <Separator variant="safari" className="mb-8" />
            <motion.p 
              className="text-gray-700 text-lg max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Read about the experiences of travelers who have explored Kenya
              with Kubwa Tano Tours.
            </motion.p>
          </AnimatedSection>
          <AnimatedSection direction="up" delay={0.4}>
            <TestimonialCarousel />
          </AnimatedSection>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-[#5c0811] via-[#7a0b17] to-[#5c0811] text-white relative overflow-hidden">
        {/* Animated background elements */}
        <motion.div 
          className="absolute top-0 left-0 w-full h-full opacity-10"
          initial={{ backgroundPosition: "0% 0%" }}
          animate={{ backgroundPosition: "100% 100%" }}
          transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
          style={{
            background: "radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "50px 50px"
          }}
        />
        
        <div className="max-w-7xl mx-auto text-center relative">
          <AnimatedSection direction="up">
            <motion.h2 
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              Ready to Begin Your African Adventure?
            </motion.h2>
            <Separator variant="safari" className="mb-8 bg-white" />
            <motion.p 
              className="text-xl mb-10 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Book your journey today and experience the magic of Kenya with our
              expert guides and luxury accommodations.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Button
                onClick={() => navigate("/booking")}
                className="bg-white text-[#5c0811] hover:bg-stone-100 hover:scale-105 text-lg px-10 py-6 rounded-xl font-semibold transition-all duration-300 shadow-xl hover:shadow-2xl transform"
              >
                Book Your Journey
              </Button>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Section */}
      <section data-section="contact" className="py-12 sm:py-16 px-4 sm:px-6 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#5c0811] mb-3 sm:mb-4">
              Contact Us
            </h2>
            <p className="text-gray-700 max-w-3xl mx-auto">
              Have questions about our tours or need help planning your perfect
              safari? Get in touch with our team.
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-6 sm:gap-8">
            <div className="md:w-1/2">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#5c0811]"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#5c0811]"
                      placeholder="Your email"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#5c0811]"
                    placeholder="Subject"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#5c0811]"
                    placeholder="Your message"
                  ></textarea>
                </div>
                <Button className="bg-[#5c0811] hover:bg-[#7a0b17] text-white w-full md:w-auto px-8">
                  Send Message
                </Button>
              </form>
            </div>
            <div className="md:w-1/2 bg-stone-50 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold text-[#5c0811] mb-6">
                Get In Touch
              </h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-[#5c0811] mr-4" />
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <p className="text-gray-700">info@kubwatanotours.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-[#5c0811] mr-4" />
                  <div>
                    <h4 className="font-medium">Phone</h4>
                    <p className="text-gray-700">+254 123 456 789</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-[#5c0811] mr-4" />
                  <div>
                    <h4 className="font-medium">Address</h4>
                    <p className="text-gray-700">Nairobi, Kenya</p>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <h4 className="font-medium mb-4">Follow Us</h4>
                <div className="flex space-x-3">
                  <a
                    href="https://www.facebook.com/kubwatano.tours/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-10 w-10 rounded-full bg-[#5c0811] hover:bg-[#7a0b17] flex items-center justify-center text-white transition-colors duration-300"
                    aria-label="Follow us on Facebook"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                  </a>
                  <a
                    href="https://www.instagram.com/kubwatanotours"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-10 w-10 rounded-full bg-[#5c0811] hover:bg-[#7a0b17] flex items-center justify-center text-white transition-colors duration-300"
                    aria-label="Follow us on Instagram"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect
                        x="2"
                        y="2"
                        width="20"
                        height="20"
                        rx="5"
                        ry="5"
                      ></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                  </a>
                  <a
                    href="https://www.tiktok.com/@kubwa.tano.tours"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-10 w-10 rounded-full bg-[#5c0811] hover:bg-[#7a0b17] flex items-center justify-center text-white transition-colors duration-300"
                    aria-label="Follow us on TikTok"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                    </svg>
                  </a>
                  <a
                    href="https://www.pinterest.com/lathasrinagesh/kubwa-tano/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-10 w-10 rounded-full bg-[#5c0811] hover:bg-[#7a0b17] flex items-center justify-center text-white transition-colors duration-300"
                    aria-label="Follow us on Pinterest"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 0C5.374 0 0 5.374 0 12s5.374 12 12 12c.343 0 .682-.014 1.02-.041-.063-.307-.12-.62-.12-.959 0-1.183.453-2.252 1.188-3.06-.061-.256-.094-.521-.094-.794 0-2.315 1.881-4.196 4.196-4.196.794 0 1.538.221 2.177.606C21.434 10.774 22 9.465 22 8c0-3.314-2.686-6-6-6-2.206 0-4.136 1.194-5.18 2.97C9.785 4.394 8.926 4 7.98 4 5.766 4 4 5.766 4 7.98c0 1.473.8 2.756 1.98 3.44-.061.256-.094.521-.094.794 0 2.315 1.881 4.196 4.196 4.196.946 0 1.805-.394 2.84-.97C13.864 16.806 15.794 18 18 18c3.314 0 6-2.686 6-6 0-1.465-.566-2.774-1.433-3.756-.639.385-1.383.606-2.177.606-2.315 0-4.196-1.881-4.196-4.196 0-.273.033-.538.094-.794C15.552 2.453 14.183 2 12 2z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#3a050a] text-white py-8 sm:py-12 px-4 sm:px-6 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row md:flex-row justify-between gap-6 sm:gap-8">
            <div className="sm:w-1/2 md:w-1/3">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-3 border border-white/20 inline-block mb-4">
                <img
                  src="https://storage.googleapis.com/tempo-image-previews/github%7C153092835-1754057017173-image.png"
                  alt="Kubwa Tano Tours Logo"
                  className="h-12 w-12 rounded-xl object-cover"
                />
              </div>
              <p className="text-sm text-gray-300 mb-6">
                Kubwa Tano Tours offers luxury safari experiences throughout
                Kenya and East Africa. Our expert guides and personalized
                service ensure unforgettable adventures.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="text-gray-300 hover:text-white transition-colors text-left"
                  >
                    Home
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => navigate("/about")}
                    className="text-gray-300 hover:text-white transition-colors text-left"
                  >
                    About Us
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      const element = document.querySelector('[data-section="tour-packages"]');
                      element?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-gray-300 hover:text-white transition-colors text-left"
                  >
                    Safari Packages
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      const element = document.querySelector('[data-section="testimonials"]');
                      element?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-gray-300 hover:text-white transition-colors text-left"
                  >
                    Testimonials
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      const element = document.querySelector('[data-section="contact"]');
                      element?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-gray-300 hover:text-white transition-colors text-left"
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Popular Tours</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Maasai Mara Safari
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Amboseli National Park
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Tsavo East & West
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Lake Nakuru
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Diani Beach Getaway
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
              <p className="text-sm text-gray-300 mb-4">
                Subscribe to our newsletter for the latest updates and offers.
              </p>
              <form className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="px-4 py-2 w-full bg-white/10 border border-white/20 rounded-l-md focus:outline-none focus:ring-2 focus:ring-white/50 text-white"
                />
                <button className="bg-[#5c0811] hover:bg-[#7a0b17] px-4 py-2 rounded-r-md">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
          <div className="border-t border-white/10 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-sm text-gray-400 mb-4 md:mb-0">
                © {new Date().getFullYear()} Kubwa Tano Tours. All rights
                reserved. Made with ❤️ by Help With Mufasa.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://www.facebook.com/kubwatano.tours/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-8 w-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors duration-300"
                  aria-label="Follow us on Facebook"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/kubwatanotours"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-8 w-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors duration-300"
                  aria-label="Follow us on Instagram"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect
                      x="2"
                      y="2"
                      width="20"
                      height="20"
                      rx="5"
                      ry="5"
                    ></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
                <a
                  href="https://www.tiktok.com/@kubwa.tano.tours"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-8 w-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors duration-300"
                  aria-label="Follow us on TikTok"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                  </svg>
                </a>
                <a
                  href="https://www.pinterest.com/lathasrinagesh/kubwa-tano/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-8 w-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors duration-300"
                  aria-label="Follow us on Pinterest"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 0C5.374 0 0 5.374 0 12s5.374 12 12 12c.343 0 .682-.014 1.02-.041-.063-.307-.12-.62-.12-.959 0-1.183.453-2.252 1.188-3.06-.061-.256-.094-.521-.094-.794 0-2.315 1.881-4.196 4.196-4.196.794 0 1.538.221 2.177.606C21.434 10.774 22 9.465 22 8c0-3.314-2.686-6-6-6-2.206 0-4.136 1.194-5.18 2.97C9.785 4.394 8.926 4 7.98 4 5.766 4 4 5.766 4 7.98c0 1.473.8 2.756 1.98 3.44-.061.256-.094.521-.094.794 0 2.315 1.881 4.196 4.196 4.196.946 0 1.805-.394 2.84-.97C13.864 16.806 15.794 18 18 18c3.314 0 6-2.686 6-6 0-1.465-.566-2.774-1.433-3.756-.639.385-1.383.606-2.177.606-2.315 0-4.196-1.881-4.196-4.196 0-.273.033-.538.094-.794C15.552 2.453 14.183 2 12 2z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
