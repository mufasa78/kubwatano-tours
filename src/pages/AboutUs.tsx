import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import SEOHead from "../components/SEOHead";
import { ArrowLeft, Users, Award, Globe, Heart } from "lucide-react";

const AboutUs = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      <SEOHead
        title="About Us | Kubwa Tano Tours - Luxury Safari Experts"
        description="Learn about Kubwa Tano Tours, Kenya's premier luxury safari company. Our expert team creates unforgettable wildlife experiences with personalized service."
        keywords="about Kubwa Tano Tours, Kenya safari company, luxury tour operators, wildlife experts"
      />
      {/* Header */}
      <div className="bg-gradient-to-r from-[#5c0811] to-[#8B0000] text-white py-6 sm:py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Button
            onClick={() => navigate("/")}
            variant="ghost"
            className="text-white hover:bg-white/20 mb-4 text-sm sm:text-base"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Button>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
            About Kubwa Tano Tours
          </h1>
          <p className="text-base sm:text-lg md:text-xl max-w-3xl leading-relaxed">
            Discover the story behind Kenya's premier luxury safari experience
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
        {/* Our Story */}
        <section className="mb-12 sm:mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#5c0811] mb-4 sm:mb-6">
                Our Story
              </h2>
              <p className="text-gray-700 text-base sm:text-lg mb-4 sm:mb-6 leading-relaxed">
                Founded by Ms. Ayodhika with a simple yet powerful vision: to
                share the breathtaking beauty and rich culture of Kenya with
                travelers from around the world. Our name, "Kubwa Tano," means
                "Big Five" in Swahili, representing our commitment to showcasing
                Africa's most magnificent wildlife.
              </p>
              <p className="text-gray-700 text-base sm:text-lg mb-4 sm:mb-6 leading-relaxed">
                Under Ms. Ayodhika's leadership, we've grown from a passionate
                local initiative to Kenya's leading luxury safari company, but
                our core values remain unchanged: authentic experiences,
                exceptional service, and deep respect for the land and
                communities we serve.
              </p>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                Today, we're proud to have welcomed over 500 travelers from
                around the globe, each taking home memories that last a lifetime
                and stories that inspire others to discover the magic of Kenya
                through Ayodhika's vision.
              </p>
            </div>
            <div className="relative order-1 lg:order-2">
              <img
                src="https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&q=80"
                alt="Safari landscape"
                className="rounded-2xl shadow-2xl w-full h-64 sm:h-80 lg:h-auto object-cover"
              />
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#5c0811] text-center mb-8 sm:mb-12">
            Our Values
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="text-center p-4">
              <div className="bg-[#5c0811] rounded-full w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-3">
                Community First
              </h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                We work closely with local communities, ensuring our tours
                benefit the people who call Kenya home.
              </p>
            </div>
            <div className="text-center p-4">
              <div className="bg-[#5c0811] rounded-full w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center mx-auto mb-4">
                <Award className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-3">
                Excellence
              </h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                Every detail matters. From luxury accommodations to expert
                guides, we deliver exceptional experiences.
              </p>
            </div>
            <div className="text-center p-4">
              <div className="bg-[#5c0811] rounded-full w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center mx-auto mb-4">
                <Globe className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-3">
                Conservation
              </h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                We're committed to protecting Kenya's wildlife and natural
                habitats for future generations.
              </p>
            </div>
            <div className="text-center p-4">
              <div className="bg-[#5c0811] rounded-full w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center mx-auto mb-4">
                <Heart className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-3">
                Authenticity
              </h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                We provide genuine cultural experiences that respect and
                celebrate Kenya's rich heritage.
              </p>
            </div>
          </div>
        </section>

        {/* Founder Section */}
        <section className="mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#5c0811] text-center mb-8 sm:mb-12">
            Meet Our Founder
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
              <div className="text-center lg:text-left order-1 lg:order-1">
                <img
                  src="/images/ayodhika.jpg"
                  alt="Ayodhika - Founder of Kubwa Tano Tours"
                  className="w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 rounded-full mx-auto lg:mx-0 mb-6 border-4 border-[#5c0811] object-cover shadow-2xl"
                />
              </div>
              <div className="order-2 lg:order-2">
                <h3 className="text-xl sm:text-2xl font-bold text-[#5c0811] mb-3 text-center lg:text-left">
                  Ms. Ayodhika Srinagesh
                </h3>
                <p className="text-[#5c0811] font-semibold text-base sm:text-lg mb-4 sm:mb-6 text-center lg:text-left">
                  Founder & CEO
                </p>
                <p className="text-gray-700 text-sm sm:text-base lg:text-lg mb-4 sm:mb-6 leading-relaxed">
                  Ms. Ayodhika Srinagesh founded Kubwa Tano Tours with a vision
                  to showcase the breathtaking beauty and rich cultural heritage
                  of Kenya to travelers from around the world. Her passion for
                  wildlife conservation and authentic cultural experiences
                  drives every aspect of our safari adventures.
                </p>
                <p className="text-gray-700 text-sm sm:text-base lg:text-lg mb-4 sm:mb-6 leading-relaxed">
                  With deep roots in Kenya and extensive knowledge of the
                  country's diverse ecosystems, Ayodhika has built Kubwa Tano
                  Tours into a premier luxury safari company that prioritizes
                  sustainable tourism and meaningful connections with local
                  communities.
                </p>
                <p className="text-gray-700 text-sm sm:text-base lg:text-lg mb-4 sm:mb-6 leading-relaxed">
                  Under her leadership, Kubwa Tano Tours has welcomed hundreds
                  of travelers, each experiencing the magic of Kenya through
                  carefully curated adventures that respect both wildlife and
                  local traditions.
                </p>
                <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-2 sm:space-y-0 sm:space-x-4">
                  <span className="text-gray-700 font-medium text-sm sm:text-base">
                    Connect with Ayodhika:
                  </span>
                  <a
                    href="https://www.instagram.com/ayodhika_"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 bg-[#5c0811] hover:bg-[#7a0b17] text-white px-3 sm:px-4 py-2 rounded-lg transition-colors duration-300 text-sm sm:text-base"
                    aria-label="Follow Ayodhika on Instagram"
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
                      className="sm:w-[18px] sm:h-[18px]"
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
                    <span>@ayodhika_</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-gradient-to-r from-stone-50 to-amber-50 rounded-2xl p-6 sm:p-8 md:p-12 text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#5c0811] mb-4 sm:mb-6">
            Ready to Experience Kenya with Us?
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed">
            Join the hundreds of travelers who have discovered the magic of
            Kenya through our expertly crafted safari experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-md sm:max-w-none mx-auto">
            <Button
              onClick={() => navigate("/booking")}
              className="bg-[#5c0811] hover:bg-[#7a0b17] text-white px-6 sm:px-8 py-3 text-base sm:text-lg w-full sm:w-auto"
            >
              Book Your Safari
            </Button>
            <Button
              onClick={() => navigate("/")}
              variant="outline"
              className="border-[#5c0811] text-[#5c0811] hover:bg-[#5c0811] hover:text-white px-6 sm:px-8 py-3 text-base sm:text-lg w-full sm:w-auto"
            >
              View Our Tours
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
