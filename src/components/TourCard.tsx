import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, MapPin, Users, Star, Camera } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";

interface TourCardProps {
  image?: string;
  title?: string;
  description?: string;
  duration?: string;
  location?: string;
  price?: string;
  category?: "luxury" | "culture" | "adventure";
  rating?: number;
  reviewCount?: number;
  groupSize?: string;
  highlights?: string[];
  tourId?: string;
  onViewDetails?: () => void;
}

const TourCard = ({
  image = "https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=800&q=80",
  title = "Masai Mara Safari Experience",
  description = "Experience the wonder of the Masai Mara with our luxury safari tour. Witness the great migration and enjoy premium accommodations in the heart of Kenya's most famous reserve.",
  duration = "5 days",
  location = "Masai Mara, Kenya",
  price = "$1,999",
  category = "luxury",
  rating = 4.8,
  reviewCount = 127,
  groupSize = "2-8 people",
  highlights = [
    "Big Five Wildlife",
    "Great Migration",
    "Luxury Tented Camp",
    "Professional Guide",
  ],
  tourId = "masai-mara",
  onViewDetails,
}: TourCardProps) => {
  const navigate = useNavigate();

  const handleViewDetails = () => {
    if (onViewDetails) {
      onViewDetails();
    } else {
      navigate(`/tour/${tourId}`);
    }
  };
  const categoryColors = {
    luxury:
      "bg-gradient-to-r from-amber-50 to-yellow-50 text-amber-800 border-amber-200",
    culture:
      "bg-gradient-to-r from-emerald-50 to-green-50 text-emerald-800 border-emerald-200",
    adventure:
      "bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-800 border-blue-200",
  };

  return (
    <Card className="group overflow-hidden h-full flex flex-col bg-white border border-gray-200 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
      <div className="relative h-64 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
        <Badge
          className={`absolute top-4 right-4 ${categoryColors[category]} backdrop-blur-sm font-medium px-3 py-1 text-xs`}
          variant="outline"
        >
          {category.charAt(0).toUpperCase() + category.slice(1)}
        </Badge>
        <div className="absolute top-4 left-4 flex items-center bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
          <Star className="h-4 w-4 text-yellow-500 fill-current mr-1" />
          <span className="text-sm font-semibold text-gray-800">{rating}</span>
          <span className="text-xs text-gray-600 ml-1">({reviewCount})</span>
        </div>
        <div className="absolute bottom-4 left-4 flex items-center bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
          <Camera className="h-4 w-4 text-[#6B1D1D] mr-1" />
          <span className="text-xs font-medium text-gray-800">
            Photo Safari
          </span>
        </div>
      </div>

      <CardContent className="flex-grow p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#6B1D1D] transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 text-sm mb-4 leading-relaxed line-clamp-3">
          {description}
        </p>

        <div className="space-y-3 mb-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center text-gray-500 text-sm">
              <Clock className="h-4 w-4 mr-2 text-[#6B1D1D]" />
              <span className="font-medium">{duration}</span>
            </div>
            <div className="flex items-center text-gray-500 text-sm">
              <Users className="h-4 w-4 mr-2 text-[#6B1D1D]" />
              <span className="font-medium">{groupSize}</span>
            </div>
          </div>

          <div className="flex items-center text-gray-500 text-sm">
            <MapPin className="h-4 w-4 mr-2 text-[#6B1D1D]" />
            <span className="font-medium">{location}</span>
          </div>
        </div>

        <div className="mb-4">
          <h4 className="text-sm font-semibold text-gray-800 mb-2">
            Tour Highlights:
          </h4>
          <div className="flex flex-wrap gap-1">
            {highlights.slice(0, 3).map((highlight, index) => (
              <span
                key={index}
                className="inline-block bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full font-medium"
              >
                {highlight}
              </span>
            ))}
            {highlights.length > 3 && (
              <span className="inline-block bg-[#6B1D1D] text-white text-xs px-2 py-1 rounded-full font-medium">
                +{highlights.length - 3} more
              </span>
            )}
          </div>
        </div>
      </CardContent>

      <CardFooter className="p-6 pt-0 flex items-center justify-between border-t border-gray-100">
        <div className="flex flex-col">
          <span className="text-sm text-gray-500">Starting from</span>
          <div className="text-2xl font-bold text-[#6B1D1D]">{price}</div>
          <span className="text-xs text-gray-500">per person</span>
        </div>
        <Button
          onClick={handleViewDetails}
          className="bg-[#6B1D1D] hover:bg-[#5A1818] text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg"
        >
          View Details
        </Button>
      </CardFooter>
    </Card>
  );
};

export default TourCard;
