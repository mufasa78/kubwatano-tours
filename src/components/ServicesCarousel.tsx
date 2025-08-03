import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Users, Star, ArrowUp } from "lucide-react";

interface Service {
  id: string;
  title: string;
  description: string;
  detailedDescription: string;
  image: string;
  features: string[];
  duration: string;
  groupSize: string;
  location: string;
  price: string;
  rating: number;
}

interface ServicesCarouselProps {
  services?: Service[];
}

const ServicesCarousel = ({
  services = [
    {
      id: "safari-adventures",
      title: "Safari Adventures",
      description:
        "Experience Kenya's incredible wildlife in their natural habitat",
      detailedDescription:
        "Embark on thrilling safari adventures across Kenya's most renowned national parks and reserves. Our expert guides will take you on game drives where you'll encounter the Big Five - lions, elephants, buffalo, leopards, and rhinos - along with countless other species. From the vast savannas of Maasai Mara to the elephant herds of Amboseli, each safari is carefully planned to maximize wildlife viewing opportunities while ensuring your comfort and safety.",
      image: "/images/safari-adventure.jpeg",
      features: [
        "Professional wildlife guides",
        "4WD safari vehicles",
        "Game drives at optimal times",
        "Photography assistance",
        "Wildlife tracking expertise",
      ],
      duration: "3-10 days",
      groupSize: "2-8 people",
      location: "Maasai Mara, Amboseli, Tsavo",
      price: "From $1,800",
      rating: 4.9,
    },
    {
      id: "luxury-accommodations",
      title: "Luxury Accommodations",
      description:
        "Stay in premium lodges and tented camps with world-class amenities",
      detailedDescription:
        "Experience the perfect blend of luxury and wilderness in our carefully selected accommodations. From elegant safari lodges with panoramic views to exclusive tented camps that bring you closer to nature, each property offers exceptional service, gourmet dining, and unique experiences. Enjoy spa treatments, infinity pools overlooking the savanna, and personalized service that makes your stay unforgettable.",
      image: "/images/luxury-accommodation.jpeg",
      features: [
        "5-star luxury lodges",
        "Exclusive tented camps",
        "Gourmet dining experiences",
        "Spa and wellness facilities",
        "Personalized butler service",
      ],
      duration: "Flexible",
      groupSize: "2-12 people",
      location: "Premium locations across Kenya",
      price: "From $500/night",
      rating: 4.8,
    },
    {
      id: "cultural-experiences",
      title: "Cultural Experiences",
      description:
        "Immerse yourself in authentic Kenyan traditions and local communities",
      detailedDescription:
        "Discover the rich cultural heritage of Kenya through authentic interactions with local communities. Visit traditional Maasai villages, participate in age-old ceremonies, learn traditional crafts, and share meals with local families. Our cultural experiences are designed to be respectful and beneficial to the communities, providing you with genuine insights into Kenyan traditions while supporting local livelihoods.",
      image: "/images/cultural-experience.jpeg",
      features: [
        "Traditional village visits",
        "Cultural ceremonies participation",
        "Local craft workshops",
        "Community-based tourism",
        "Traditional cuisine experiences",
      ],
      duration: "Half day to 3 days",
      groupSize: "2-15 people",
      location: "Maasai, Samburu, Kikuyu communities",
      price: "From $150",
      rating: 4.7,
    },
    {
      id: "adventure-activities",
      title: "Adventure Activities",
      description: "Thrilling outdoor adventures for the adventurous spirit",
      detailedDescription:
        "For those seeking adrenaline-pumping experiences, our adventure activities offer the perfect blend of excitement and natural beauty. Scale Mount Kenya's peaks, go white-water rafting on the Tana River, take hot air balloon rides over the Maasai Mara, or explore the underwater world while diving in the Indian Ocean. Each adventure is led by certified professionals with top-quality equipment.",
      image: "/images/adventure-activities.jpeg",
      features: [
        "Mountain climbing expeditions",
        "Hot air balloon safaris",
        "White-water rafting",
        "Scuba diving and snorkeling",
        "Professional adventure guides",
      ],
      duration: "1-7 days",
      groupSize: "2-12 people",
      location: "Mount Kenya, Maasai Mara, Coast",
      price: "From $200",
      rating: 4.6,
    },
    {
      id: "transportation-logistics",
      title: "Transportation & Logistics",
      description:
        "Seamless travel arrangements and premium transportation services",
      detailedDescription:
        "Leave all the logistics to us with our comprehensive transportation and travel management services. From airport transfers in luxury vehicles to domestic flights between destinations, we ensure your journey is smooth and comfortable. Our fleet includes modern 4WD safari vehicles, luxury coaches, and we partner with reputable airlines for domestic flights, making your travel experience hassle-free.",
      image: "/images/transportation-logistics.jpeg",
      features: [
        "Airport transfers",
        "Luxury safari vehicles",
        "Domestic flight arrangements",
        "Professional drivers",
        "24/7 support during travel",
      ],
      duration: "Throughout your stay",
      groupSize: "Any size",
      location: "Nationwide coverage",
      price: "Included in packages",
      rating: 4.8,
    },
  ],
}: ServicesCarouselProps) => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  const handleServiceClick = (service: Service) => {
    setSelectedService(service);
    setIsDialogOpen(true);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-2">
            Our Premium Services
          </h2>
          <div className="w-24 h-1 bg-[#5E0000] mx-auto"></div>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Discover the comprehensive range of luxury services that make Kubwa
            Tano Tours your perfect partner for an unforgettable African
            adventure
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => (
            <Card
              key={service.id}
              className="border border-gray-200 bg-white shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer group overflow-hidden"
              onClick={() => handleServiceClick(service)}
            >
              <div className="md:flex">
                <div className="md:w-2/5 relative overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-64 md:h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                    <span className="text-sm font-medium text-gray-900">
                      {service.rating}
                    </span>
                  </div>
                </div>
                <CardContent className="md:w-3/5 p-6">
                  <h3 className="font-bold text-xl text-gray-900 mb-3 group-hover:text-[#5E0000] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="grid grid-cols-2 gap-4 text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4" />
                      <span>{service.duration}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="h-4 w-4" />
                      <span>{service.groupSize}</span>
                    </div>
                    <div className="flex items-center space-x-2 col-span-2">
                      <MapPin className="h-4 w-4" />
                      <span className="text-xs">{service.location}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-[#5E0000]">
                      {service.price}
                    </span>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-[#5E0000] text-[#5E0000] hover:bg-[#5E0000] hover:text-white"
                    >
                      Learn More
                    </Button>
                  </div>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>

        {/* Service Detail Dialog */}
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
            {selectedService && (
              <>
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold text-[#5E0000] mb-2">
                    {selectedService.title}
                  </DialogTitle>
                  <DialogDescription className="text-lg text-gray-600">
                    {selectedService.description}
                  </DialogDescription>
                </DialogHeader>

                <div className="grid md:grid-cols-2 gap-6 mt-6">
                  <div>
                    <img
                      src={selectedService.image}
                      alt={selectedService.title}
                      className="w-full h-64 object-cover rounded-lg shadow-md"
                    />

                    <div className="mt-4 grid grid-cols-2 gap-4">
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <div className="flex items-center space-x-2 mb-1">
                          <Clock className="h-4 w-4 text-[#5E0000]" />
                          <span className="font-medium text-gray-900">
                            Duration
                          </span>
                        </div>
                        <span className="text-gray-600">
                          {selectedService.duration}
                        </span>
                      </div>
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <div className="flex items-center space-x-2 mb-1">
                          <Users className="h-4 w-4 text-[#5E0000]" />
                          <span className="font-medium text-gray-900">
                            Group Size
                          </span>
                        </div>
                        <span className="text-gray-600">
                          {selectedService.groupSize}
                        </span>
                      </div>
                      <div className="bg-gray-50 p-3 rounded-lg col-span-2">
                        <div className="flex items-center space-x-2 mb-1">
                          <MapPin className="h-4 w-4 text-[#5E0000]" />
                          <span className="font-medium text-gray-900">
                            Location
                          </span>
                        </div>
                        <span className="text-gray-600">
                          {selectedService.location}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-bold text-lg text-gray-900 mb-3">
                      About This Service
                    </h4>
                    <p className="text-gray-700 mb-6 leading-relaxed">
                      {selectedService.detailedDescription}
                    </p>

                    <h4 className="font-bold text-lg text-gray-900 mb-3">
                      What's Included
                    </h4>
                    <ul className="space-y-2 mb-6">
                      {selectedService.features.map((feature, index) => (
                        <li key={index} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-[#5E0000] rounded-full" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="bg-[#5E0000] text-white p-4 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-lg font-bold">Starting from</span>
                        <div className="flex items-center space-x-2">
                          <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                          <span className="font-medium">
                            {selectedService.rating}/5
                          </span>
                        </div>
                      </div>
                      <div className="text-2xl font-bold mb-3">
                        {selectedService.price}
                      </div>
                      <Button
                        className="w-full bg-white text-[#5E0000] hover:bg-gray-100"
                        onClick={() => setIsDialogOpen(false)}
                      >
                        Book This Service
                      </Button>
                    </div>
                  </div>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>

        {/* Scroll to Top Button */}
        {showScrollTop && (
          <Button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-50 bg-[#5E0000] hover:bg-[#7a0000] text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
            size="icon"
          >
            <ArrowUp className="h-5 w-5" />
          </Button>
        )}
      </div>
    </div>
  );
};

export default ServicesCarousel;
