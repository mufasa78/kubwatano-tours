
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useNavigate, useParams } from "react-router-dom";
import {
  ArrowLeft,
  Clock,
  MapPin,
  Users,
  Star,
  Camera,
  Calendar,
  Shield,
  Utensils,
  Car,
} from "lucide-react";

interface TourData {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  price: string;
  duration: string;
  category: "luxury" | "cultural" | "adventure";
  image: string;
  gallery: string[];
  rating: number;
  reviewCount: number;
  groupSize: string;
  highlights: string[];
  itinerary: { day: number; title: string; description: string }[];
  included: string[];
  excluded: string[];
  location: string;
}

const TourDetails = () => {
  const navigate = useNavigate();
  const { tourId } = useParams();

  // Mock data - in a real app, this would come from an API
  const toursData: Record<string, TourData> = {
    "masai-mara": {
      id: "masai-mara",
      title: "Maasai Mara Safari Experience",
      description:
        "Experience the wonder of the Masai Mara with our luxury safari tour. Witness the great migration and enjoy premium accommodations in the heart of Kenya's most famous reserve.",
      longDescription:
        "Embark on an unforgettable journey through Kenya's most iconic wildlife reserve. The Maasai Mara is renowned for its exceptional population of lions, leopards, cheetahs, and the annual migration of zebra, Thomson's gazelle, and wildebeest from the Serengeti. Our luxury safari experience combines world-class game viewing with premium accommodations and expert guides who bring the African wilderness to life.",
      price: "$2,500",
      duration: "5 days",
      category: "luxury",
      image:
        "https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=800&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=800&q=80",
        "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&q=80",
        "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=800&q=80",
        "https://images.unsplash.com/photo-1504432842672-1a79f78e4084?w=800&q=80",
      ],
      rating: 4.9,
      reviewCount: 127,
      groupSize: "2-8 people",
      location: "Maasai Mara, Kenya",
      highlights: [
        "Big Five Wildlife Viewing",
        "Great Migration (seasonal)",
        "Luxury Tented Camp",
        "Professional Safari Guide",
        "Hot Air Balloon Safari (optional)",
        "Maasai Cultural Visit",
      ],
      itinerary: [
        {
          day: 1,
          title: "Arrival & First Game Drive",
          description:
            "Arrive at Maasai Mara and check into your luxury tented camp. After lunch, embark on your first game drive to spot the Big Five and other wildlife.",
        },
        {
          day: 2,
          title: "Full Day Safari",
          description:
            "Early morning and afternoon game drives with a picnic lunch in the bush. Visit the Mara River to witness the dramatic wildebeest crossings (seasonal).",
        },
        {
          day: 3,
          title: "Cultural Experience",
          description:
            "Morning game drive followed by a visit to a traditional Maasai village. Learn about their customs, traditions, and way of life.",
        },
        {
          day: 4,
          title: "Hot Air Balloon Safari",
          description:
            "Optional hot air balloon safari at sunrise followed by a champagne breakfast in the bush. Afternoon at leisure or additional game drive.",
        },
        {
          day: 5,
          title: "Final Game Drive & Departure",
          description:
            "Final morning game drive and breakfast before departure. Transfer to airstrip for your flight back to Nairobi.",
        },
      ],
      included: [
        "Luxury tented accommodation",
        "All meals and beverages",
        "Professional safari guide",
        "4WD safari vehicle",
        "Park entrance fees",
        "Airport transfers",
        "Maasai village visit",
      ],
      excluded: [
        "International flights",
        "Travel insurance",
        "Hot air balloon safari ($450)",
        "Personal expenses",
        "Gratuities",
        "Alcoholic beverages (premium brands)",
      ],
    },
    "cultural-heritage": {
      id: "cultural-heritage",
      title: "Cultural Heritage Tour",
      description:
        "Immerse yourself in Kenya's rich cultural traditions and meet local communities. Learn traditional crafts, participate in ceremonies, and experience authentic village life.",
      longDescription:
        "Discover the heart and soul of Kenya through its diverse cultures and traditions. This immersive cultural tour takes you beyond the typical tourist experience to engage with local communities, learn traditional crafts, and participate in authentic ceremonies. From the Kikuyu highlands to the Luo lakeshores, experience the warmth and hospitality of Kenya's people while supporting sustainable community tourism.",
      price: "$1,800",
      duration: "4 days",
      category: "cultural",
      image:
        "https://images.unsplash.com/photo-1504432842672-1a79f78e4084?w=800&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1504432842672-1a79f78e4084?w=800&q=80",
        "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=800&q=80",
        "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&q=80",
        "https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=800&q=80",
      ],
      rating: 4.7,
      reviewCount: 89,
      groupSize: "4-12 people",
      location: "Central & Western Kenya",
      highlights: [
        "Traditional Craft Workshops",
        "Community Homestays",
        "Cultural Ceremonies",
        "Local Market Visits",
        "Traditional Cooking Classes",
        "Storytelling Sessions",
      ],
      itinerary: [
        {
          day: 1,
          title: "Kikuyu Highlands Experience",
          description:
            "Visit traditional Kikuyu communities in the Central Highlands. Learn about coffee farming, traditional medicine, and participate in a welcoming ceremony.",
        },
        {
          day: 2,
          title: "Craft Workshops & Markets",
          description:
            "Hands-on workshops in traditional crafts including pottery, weaving, and wood carving. Visit local markets and learn about traditional foods and spices.",
        },
        {
          day: 3,
          title: "Luo Cultural Immersion",
          description:
            "Travel to the shores of Lake Victoria to experience Luo culture. Participate in fishing activities, traditional dances, and storytelling sessions.",
        },
        {
          day: 4,
          title: "Community Projects & Farewell",
          description:
            "Visit community development projects supported by tourism. Participate in a farewell ceremony and traditional feast before departure.",
        },
      ],
      included: [
        "Community homestay accommodation",
        "All meals (traditional cuisine)",
        "Cultural guide and interpreter",
        "Workshop materials",
        "Community project visits",
        "Transportation",
        "Cultural performances",
      ],
      excluded: [
        "International flights",
        "Travel insurance",
        "Personal expenses",
        "Alcoholic beverages",
        "Gratuities",
        "Additional craft purchases",
      ],
    },
  };

  const tour = toursData[tourId || "masai-mara"] || toursData["masai-mara"];

  const categoryColors = {
    luxury:
      "bg-gradient-to-r from-amber-50 to-yellow-50 text-amber-800 border-amber-200",
    cultural:
      "bg-gradient-to-r from-emerald-50 to-green-50 text-emerald-800 border-emerald-200",
    adventure:
      "bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-800 border-blue-200",
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="relative h-96 overflow-hidden">
        <img
          src={tour.image}
          alt={tour.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex flex-col justify-between p-4 sm:p-6 lg:p-8">
          <Button
            onClick={() => navigate("/")}
            variant="ghost"
            className="text-white hover:bg-white/20 self-start"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Tours
          </Button>
          <div className="text-white">
            <Badge
              className={`${categoryColors[tour.category]} mb-4`}
              variant="outline"
            >
              {tour.category.charAt(0).toUpperCase() + tour.category.slice(1)}
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {tour.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-lg">
              <div className="flex items-center">
                <Star className="h-5 w-5 text-yellow-400 fill-current mr-1" />
                <span>
                  {tour.rating} ({tour.reviewCount} reviews)
                </span>
              </div>
              <div className="flex items-center">
                <Clock className="h-5 w-5 mr-1" />
                <span>{tour.duration}</span>
              </div>
              <div className="flex items-center">
                <Users className="h-5 w-5 mr-1" />
                <span>{tour.groupSize}</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-1" />
                <span>{tour.location}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Tour Details */}
          <div className="lg:col-span-2 space-y-8">
            {/* Overview */}
            <section>
              <h2 className="text-2xl font-bold text-[#5c0811] mb-4">
                Tour Overview
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                {tour.longDescription}
              </p>

              {/* Highlights */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Tour Highlights
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {tour.highlights.map((highlight, index) => (
                    <div key={index} className="flex items-center">
                      <div className="bg-[#5c0811] rounded-full w-2 h-2 mr-3"></div>
                      <span className="text-gray-700">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Gallery */}
            <section>
              <h2 className="text-2xl font-bold text-[#5c0811] mb-4">
                Photo Gallery
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {tour.gallery.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`${tour.title} gallery ${index + 1}`}
                    className="w-full h-32 object-cover rounded-lg hover:scale-105 transition-transform duration-300 cursor-pointer"
                  />
                ))}
              </div>
            </section>

            {/* Itinerary */}
            <section>
              <h2 className="text-2xl font-bold text-[#5c0811] mb-4">
                Daily Itinerary
              </h2>
              <div className="space-y-4">
                {tour.itinerary.map((day, index) => (
                  <Card key={index} className="border border-gray-200">
                    <CardContent className="p-6">
                      <div className="flex items-start">
                        <div className="bg-[#5c0811] text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1 font-semibold">
                          {day.day}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-gray-900 mb-2">
                            {day.title}
                          </h3>
                          <p className="text-gray-700">{day.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* What's Included/Excluded */}
            <section>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h2 className="text-2xl font-bold text-[#5c0811] mb-4">
                    What's Included
                  </h2>
                  <div className="space-y-2">
                    {tour.included.map((item, index) => (
                      <div key={index} className="flex items-center">
                        <div className="bg-green-500 rounded-full w-5 h-5 flex items-center justify-center mr-3">
                          <span className="text-white text-xs font-bold">
                            ✓
                          </span>
                        </div>
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-[#5c0811] mb-4">
                    What's Not Included
                  </h2>
                  <div className="space-y-2">
                    {tour.excluded.map((item, index) => (
                      <div key={index} className="flex items-center">
                        <div className="bg-red-500 rounded-full w-5 h-5 flex items-center justify-center mr-3">
                          <span className="text-white text-xs font-bold">
                            ✗
                          </span>
                        </div>
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Booking Sidebar */}
          <div className="lg:col-span-1">
            <Card className="sticky top-8 shadow-xl border-0">
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <div className="text-3xl font-bold text-[#5c0811] mb-2">
                    {tour.price}
                  </div>
                  <div className="text-gray-600">per person</div>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex items-center justify-between py-2 border-b border-gray-100">
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 text-[#5c0811] mr-2" />
                      <span className="text-sm font-medium">Duration</span>
                    </div>
                    <span className="text-sm text-gray-600">
                      {tour.duration}
                    </span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-gray-100">
                    <div className="flex items-center">
                      <Users className="h-4 w-4 text-[#5c0811] mr-2" />
                      <span className="text-sm font-medium">Group Size</span>
                    </div>
                    <span className="text-sm text-gray-600">
                      {tour.groupSize}
                    </span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-gray-100">
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 text-[#5c0811] mr-2" />
                      <span className="text-sm font-medium">Location</span>
                    </div>
                    <span className="text-sm text-gray-600">
                      {tour.location}
                    </span>
                  </div>
                  <div className="flex items-center justify-between py-2">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-[#5c0811] mr-2" />
                      <span className="text-sm font-medium">Rating</span>
                    </div>
                    <span className="text-sm text-gray-600">
                      {tour.rating}/5 ({tour.reviewCount})
                    </span>
                  </div>
                </div>

                <Button
                  onClick={() => navigate("/booking")}
                  className="w-full bg-[#5c0811] hover:bg-[#7a0b17] text-white py-4 text-lg font-semibold rounded-lg transition-all duration-300 hover:shadow-lg mb-4"
                >
                  Book This Tour
                </Button>

                <div className="text-center">
                  <p className="text-xs text-gray-500 mb-2">
                    Questions about this tour?
                  </p>
                  <Button
                    variant="outline"
                    className="w-full border-[#5c0811] text-[#5c0811] hover:bg-[#5c0811] hover:text-white"
                    onClick={() =>
                      (window.location.href = "mailto:info@kubwatanotours.com")
                    }
                  >
                    Contact Us
                  </Button>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-200">
                  <div className="flex items-center justify-center space-x-4 text-sm text-gray-600">
                    <div className="flex items-center">
                      <Shield className="h-4 w-4 mr-1" />
                      <span>Insured</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>Free Cancellation</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourDetails;
