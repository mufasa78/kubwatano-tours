import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useNavigate } from "react-router-dom";
import SEOHead from "../components/SEOHead";
import {
  ArrowLeft,
  Calendar,
  Users,
  MapPin,
  Phone,
  Mail,
  User,
} from "lucide-react";

const Booking = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    tourPackage: "",
    travelDate: "",
    groupSize: "",
    specialRequests: "",
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    alert(
      "Thank you for your booking request! We'll contact you within 24 hours to confirm your safari adventure.",
    );
    console.log("Booking data:", formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 to-amber-50">
      <SEOHead 
        title="Book Your Safari | Kubwa Tano Tours - Luxury Kenya Adventures"
        description="Book your luxury safari adventure in Kenya with Kubwa Tano Tours. Expert guides, premium accommodations, and unforgettable wildlife experiences await."
        keywords="book Kenya safari, luxury safari booking, Maasai Mara tours, Kenya wildlife adventures"
      />
      {/* Header */}
      <div className="bg-gradient-to-r from-[#5c0811] to-[#8B0000] text-white py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Button
            onClick={() => navigate("/")}
            variant="ghost"
            className="text-white hover:bg-white/20 mb-4"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Button>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Book Your Safari Adventure
          </h1>
          <p className="text-xl max-w-3xl">
            Start your journey to Kenya's most spectacular destinations
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Booking Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-xl border-0">
              <CardHeader className="bg-white rounded-t-lg">
                <CardTitle className="text-2xl text-[#5c0811] flex items-center">
                  <Calendar className="h-6 w-6 mr-2" />
                  Booking Details
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8 bg-white rounded-b-lg">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Information */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label
                        htmlFor="firstName"
                        className="text-sm font-medium text-gray-700 mb-2 block"
                      >
                        <User className="h-4 w-4 inline mr-1" />
                        First Name *
                      </Label>
                      <Input
                        id="firstName"
                        type="text"
                        required
                        value={formData.firstName}
                        onChange={(e) =>
                          handleInputChange("firstName", e.target.value)
                        }
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5c0811] focus:border-transparent"
                        placeholder="Enter your first name"
                      />
                    </div>
                    <div>
                      <Label
                        htmlFor="lastName"
                        className="text-sm font-medium text-gray-700 mb-2 block"
                      >
                        <User className="h-4 w-4 inline mr-1" />
                        Last Name *
                      </Label>
                      <Input
                        id="lastName"
                        type="text"
                        required
                        value={formData.lastName}
                        onChange={(e) =>
                          handleInputChange("lastName", e.target.value)
                        }
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5c0811] focus:border-transparent"
                        placeholder="Enter your last name"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label
                        htmlFor="email"
                        className="text-sm font-medium text-gray-700 mb-2 block"
                      >
                        <Mail className="h-4 w-4 inline mr-1" />
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          handleInputChange("email", e.target.value)
                        }
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5c0811] focus:border-transparent"
                        placeholder="your.email@example.com"
                      />
                    </div>
                    <div>
                      <Label
                        htmlFor="phone"
                        className="text-sm font-medium text-gray-700 mb-2 block"
                      >
                        <Phone className="h-4 w-4 inline mr-1" />
                        Phone Number *
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) =>
                          handleInputChange("phone", e.target.value)
                        }
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5c0811] focus:border-transparent"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                  </div>

                  {/* Tour Information */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label
                        htmlFor="tourPackage"
                        className="text-sm font-medium text-gray-700 mb-2 block"
                      >
                        <MapPin className="h-4 w-4 inline mr-1" />
                        Tour Package *
                      </Label>
                      <Select
                        onValueChange={(value) =>
                          handleInputChange("tourPackage", value)
                        }
                      >
                        <SelectTrigger className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5c0811] focus:border-transparent">
                          <SelectValue placeholder="Select a tour package" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="masai-mara">
                            Maasai Mara Safari - $2,500
                          </SelectItem>
                          <SelectItem value="cultural-heritage">
                            Cultural Heritage Tour - $1,800
                          </SelectItem>
                          <SelectItem value="mount-kenya">
                            Mount Kenya Adventure - $2,200
                          </SelectItem>
                          <SelectItem value="luxury-beach">
                            Luxury Beach Retreat - $3,200
                          </SelectItem>
                          <SelectItem value="samburu-cultural">
                            Samburu Cultural Experience - $1,950
                          </SelectItem>
                          <SelectItem value="rift-valley">
                            Rift Valley Expedition - $2,100
                          </SelectItem>
                          <SelectItem value="custom">
                            Custom Package (Contact Us)
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label
                        htmlFor="travelDate"
                        className="text-sm font-medium text-gray-700 mb-2 block"
                      >
                        <Calendar className="h-4 w-4 inline mr-1" />
                        Preferred Travel Date *
                      </Label>
                      <Input
                        id="travelDate"
                        type="date"
                        required
                        value={formData.travelDate}
                        onChange={(e) =>
                          handleInputChange("travelDate", e.target.value)
                        }
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5c0811] focus:border-transparent"
                        min={new Date().toISOString().split("T")[0]}
                      />
                    </div>
                  </div>

                  <div>
                    <Label
                      htmlFor="groupSize"
                      className="text-sm font-medium text-gray-700 mb-2 block"
                    >
                      <Users className="h-4 w-4 inline mr-1" />
                      Group Size *
                    </Label>
                    <Select
                      onValueChange={(value) =>
                        handleInputChange("groupSize", value)
                      }
                    >
                      <SelectTrigger className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5c0811] focus:border-transparent">
                        <SelectValue placeholder="Select group size" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">1 Person</SelectItem>
                        <SelectItem value="2">2 People</SelectItem>
                        <SelectItem value="3-4">3-4 People</SelectItem>
                        <SelectItem value="5-6">5-6 People</SelectItem>
                        <SelectItem value="7-8">7-8 People</SelectItem>
                        <SelectItem value="9+">
                          9+ People (Group Discount)
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label
                      htmlFor="specialRequests"
                      className="text-sm font-medium text-gray-700 mb-2 block"
                    >
                      Special Requests or Dietary Requirements
                    </Label>
                    <Textarea
                      id="specialRequests"
                      value={formData.specialRequests}
                      onChange={(e) =>
                        handleInputChange("specialRequests", e.target.value)
                      }
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5c0811] focus:border-transparent"
                      placeholder="Please let us know about any special requirements, dietary restrictions, or accessibility needs..."
                      rows={4}
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-[#5c0811] hover:bg-[#7a0b17] text-white py-4 text-lg font-semibold rounded-lg transition-all duration-300 hover:shadow-lg"
                  >
                    Submit Booking Request
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Booking Summary */}
          <div className="lg:col-span-1">
            <Card className="shadow-xl border-0 sticky top-8">
              <CardHeader className="bg-[#5c0811] text-white rounded-t-lg">
                <CardTitle className="text-xl">
                  Why Choose Kubwa Tano Tours?
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 bg-white rounded-b-lg">
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-[#5c0811] rounded-full w-8 h-8 flex items-center justify-center mr-3 mt-1">
                      <span className="text-white text-sm font-bold">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        Expert Local Guides
                      </h4>
                      <p className="text-sm text-gray-600">
                        Knowledgeable guides with years of experience
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-[#5c0811] rounded-full w-8 h-8 flex items-center justify-center mr-3 mt-1">
                      <span className="text-white text-sm font-bold">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        Luxury Accommodations
                      </h4>
                      <p className="text-sm text-gray-600">
                        Premium lodges and tented camps
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-[#5c0811] rounded-full w-8 h-8 flex items-center justify-center mr-3 mt-1">
                      <span className="text-white text-sm font-bold">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        Small Group Sizes
                      </h4>
                      <p className="text-sm text-gray-600">
                        Maximum 8 people for personalized experience
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-[#5c0811] rounded-full w-8 h-8 flex items-center justify-center mr-3 mt-1">
                      <span className="text-white text-sm font-bold">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        24/7 Support
                      </h4>
                      <p className="text-sm text-gray-600">
                        Round-the-clock assistance during your trip
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-[#5c0811] rounded-full w-8 h-8 flex items-center justify-center mr-3 mt-1">
                      <span className="text-white text-sm font-bold">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        Conservation Focus
                      </h4>
                      <p className="text-sm text-gray-600">
                        Supporting local communities and wildlife
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-3">
                    Need Help?
                  </h4>
                  <p className="text-sm text-gray-600 mb-3">
                    Our safari experts are here to help you plan the perfect
                    adventure.
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center">
                      <Phone className="h-4 w-4 text-[#5c0811] mr-2" />
                      <span>+254 123 456 789</span>
                    </div>
                    <div className="flex items-center">
                      <Mail className="h-4 w-4 text-[#5c0811] mr-2" />
                      <span>info@kubwatanotours.com</span>
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

export default Booking;
