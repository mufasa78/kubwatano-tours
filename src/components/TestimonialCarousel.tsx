
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Star } from "lucide-react";

interface TestimonialProps {
  testimonials?: {
    id: string;
    name: string;
    location: string;
    avatar: string;
    rating: number;
    text: string;
  }[];
}

const TestimonialCarousel = ({
  testimonials = [
    {
      id: "1",
      name: "Sarah Johnson",
      location: "New York, USA",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=sarah",
      rating: 5,
      text: "Our safari with Kubwa Tano Tours was absolutely magical! The guides were knowledgeable and friendly, and we saw all of the Big Five. The accommodations were luxurious and the attention to detail was impeccable. Truly a once-in-a-lifetime experience!",
    },
    {
      id: "2",
      name: "David Chen",
      location: "Toronto, Canada",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=david",
      rating: 5,
      text: "From the moment we landed in Nairobi to our departure, Kubwa Tano Tours provided exceptional service. The cultural experiences were authentic and the wildlife sightings were beyond our expectations. I highly recommend their luxury safari packages!",
    },
    {
      id: "3",
      name: "Emma Williams",
      location: "London, UK",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=emma",
      rating: 5,
      text: "Our family adventure with Kubwa Tano Tours was perfectly planned. The children were thrilled with the wildlife encounters and the guides made sure everyone was engaged and comfortable. The memories we made will last a lifetime!",
    },
    {
      id: "4",
      name: "Michael Rodriguez",
      location: "Sydney, Australia",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=michael",
      rating: 5,
      text: "The attention to detail and personalized service from Kubwa Tano Tours was outstanding. Our guide knew exactly where to take us for the best wildlife viewing, and the luxury tented camps were incredible. A perfect blend of adventure and comfort!",
    },
  ],
}: TestimonialProps) => {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto">

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {testimonials.map((testimonial) => (
              <CarouselItem
                key={testimonial.id}
                className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3"
              >
                <Card className="border border-gray-200 h-full bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="flex items-center mb-4">
                      <Avatar className="h-12 w-12 border-2 border-[#5E0000]">
                        <AvatarImage
                          src={testimonial.avatar}
                          alt={testimonial.name}
                        />
                        <AvatarFallback className="bg-[#5E0000] text-white">
                          {testimonial.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div className="ml-4">
                        <h4 className="font-semibold text-gray-900">
                          {testimonial.name}
                        </h4>
                        <p className="text-sm text-gray-600">
                          {testimonial.location}
                        </p>
                      </div>
                    </div>

                    <div className="flex mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-5 w-5 ${i < testimonial.rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"}`}
                        />
                      ))}
                    </div>

                    <p className="text-gray-700 flex-grow italic">
                      "{testimonial.text}"
                    </p>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-8">
            <CarouselPrevious className="relative mr-2 bg-[#5E0000] text-white hover:bg-[#7a0000] border-none" />
            <CarouselNext className="relative ml-2 bg-[#5E0000] text-white hover:bg-[#7a0000] border-none" />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
