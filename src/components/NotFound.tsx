import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 to-amber-50 flex items-center justify-center px-4">
      <div className="text-center max-w-md mx-auto">
        <div className="mb-8">
          <img
            src="/images/safarit.png"
            alt="Kubwa Tano Tours"
            className="h-20 w-20 mx-auto mb-4 rounded-xl"
          />
          <h1 className="text-6xl font-bold text-[#5c0811] mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Page Not Found
          </h2>
          <p className="text-gray-600 mb-8">
            The safari adventure you're looking for seems to have wandered off the beaten path.
          </p>
        </div>
        
        <div className="space-y-4">
          <Button
            onClick={() => navigate("/")}
            className="bg-[#5c0811] hover:bg-[#7a0b17] text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg w-full"
          >
            <Home className="h-4 w-4 mr-2" />
            Return Home
          </Button>
          
          <Button
            onClick={() => navigate(-1)}
            variant="outline"
            className="border-[#5c0811] text-[#5c0811] hover:bg-[#5c0811] hover:text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 w-full"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Go Back
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;