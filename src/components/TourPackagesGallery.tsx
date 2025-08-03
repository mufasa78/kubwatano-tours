import { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import TourCard from "./TourCard";

interface Tour {
  id: string;
  title: string;
  description: string;
  price: string;
  duration: string;
  category: "luxury" | "culture" | "adventure";
  image: string;
}

const TourPackagesGallery = () => {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const getHighlightForCategory = (
    category: "luxury" | "culture" | "adventure"
  ) => {
    switch (category) {
      case "luxury":
        return "Luxury Accommodation";
      case "culture":
        return "Cultural Immersion";
      case "adventure":
        return "Adventure Activities";
      default:
        return "Premium Experience";
    }
  };

  // Mock data for tour packages
  const tours: Tour[] = [
    {
      id: "masai-mara",
      title: "Maasai Mara Safari",
      description:
        "Experience the iconic wildlife and breathtaking landscapes of Kenya's most famous reserve. Witness the Great Migration and encounter the Big Five in their natural habitat.",
      price: "$2,500",
      duration: "5 days",
      category: "luxury",
      image:
        "https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=800&q=80",
    },
    {
      id: "cultural-heritage",
      title: "Cultural Heritage Tour",
      description:
        "Immerse yourself in Kenya's rich cultural traditions and meet local communities. Learn traditional crafts, participate in ceremonies, and experience authentic village life.",
      price: "$1,800",
      duration: "4 days",
      category: "culture",
      image:
        "https://images.unsplash.com/photo-1504432842672-1a79f78e4084?w=800&q=80",
    },
    {
      id: "mount-kenya",
      title: "Mount Kenya Adventure",
      description:
        "Trek Africa's second-highest peak with experienced guides for an unforgettable journey. Challenge yourself with high-altitude hiking and stunning alpine scenery.",
      price: "$2,200",
      duration: "7 days",
      category: "adventure",
      image:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop&crop=center&auto=format&q=80",
    },
    {
      id: "luxury-beach",
      title: "Luxury Beach Retreat",
      description:
        "Relax in exclusive beachfront accommodations along Kenya's pristine coastline. Enjoy world-class spas, water sports, and gourmet dining with ocean views.",
      price: "$3,200",
      duration: "6 days",
      category: "luxury",
      image:
        "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?w=800&q=80",
    },
    {
      id: "samburu-cultural",
      title: "Samburu Cultural Experience",
      description:
        "Discover the traditions and lifestyle of the Samburu people in northern Kenya. Experience traditional dances, learn about ancient customs, and support local communities.",
      price: "$1,950",
      duration: "5 days",
      category: "culture",
      image:
        "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=800&q=80",
    },
    {
      id: "rift-valley",
      title: "Rift Valley Expedition",
      description:
        "Explore the dramatic landscapes and wildlife of Kenya's Great Rift Valley. Visit flamingo-filled lakes, volcanic craters, and diverse ecosystems in this geological wonder.",
      price: "$2,100",
      duration: "6 days",
      category: "adventure",
      image:
        "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&q=80",
    },
  ];

  const filteredTours =
    activeCategory === "all"
      ? tours
      : tours.filter((tour) => tour.category === activeCategory);

  return (
    <div className="w-full max-w-7xl mx-auto py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="text-center mb-8 sm:mb-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
          Explore Our Tour Packages
        </h2>
        <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-2">
          Discover our carefully curated selection of luxury, cultural, and
          adventure experiences across Kenya and beyond.
        </p>
      </div>

      <Tabs
        defaultValue="all"
        className="w-full"
        onValueChange={setActiveCategory}
      >
        <TabsList className="grid grid-cols-2 sm:grid-cols-4 mb-6 sm:mb-8 w-full max-w-2xl mx-auto gap-1 sm:gap-0">
          <TabsTrigger value="all" className="text-xs sm:text-sm md:text-base px-2 sm:px-4">
            All Tours
          </TabsTrigger>
          <TabsTrigger value="luxury" className="text-xs sm:text-sm md:text-base px-2 sm:px-4">
            Luxury
          </TabsTrigger>
          <TabsTrigger value="culture" className="text-xs sm:text-sm md:text-base px-2 sm:px-4">
            Cultural
          </TabsTrigger>
          <TabsTrigger value="adventure" className="text-xs sm:text-sm md:text-base px-2 sm:px-4">
            Adventure
          </TabsTrigger>
        </TabsList>

        {["all", "luxury", "culture", "adventure"].map((tabValue) => (
          <TabsContent key={tabValue} value={tabValue} className="mt-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
              {filteredTours.map((tour) => (
                <TourCard
                  key={tour.id}
                  tourId={tour.id}
                  title={tour.title}
                  description={tour.description}
                  price={tour.price}
                  duration={tour.duration}
                  image={tour.image}
                  category={tour.category}
                  rating={4.5 + Math.random() * 0.5}
                  reviewCount={Math.floor(Math.random() * 200) + 50}
                  groupSize="2-8 people"
                  highlights={[
                    getHighlightForCategory(tour.category),
                    "Professional Guide",
                    "All Meals Included",
                    "Transportation",
                  ]}
                />
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default TourPackagesGallery;
