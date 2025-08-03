import { Suspense, lazy, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { usePerformance } from "./hooks/usePerformance";

// Lazy load components for better performance
const Home = lazy(() => import("./components/home"));
const AboutUs = lazy(() => import("./pages/AboutUs"));
const Booking = lazy(() => import("./pages/Booking"));
const TourDetails = lazy(() => import("./pages/TourDetails"));
const NotFound = lazy(() => import("./components/NotFound"));

function App() {
  usePerformance();
  const location = useLocation();

  // Log route changes for debugging
  useEffect(() => {
    console.log('Route changed to:', location.pathname);
  }, [location]);

  // Handle potential routing errors
  useEffect(() => {
    const handleRouteError = (event: ErrorEvent) => {
      console.error('Route error:', event.error);
    };

    window.addEventListener('error', handleRouteError);
    return () => window.removeEventListener('error', handleRouteError);
  }, []);
  
  return (
    <Suspense fallback={
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-stone-50 to-amber-50 px-4">
        <div className="text-center max-w-sm mx-auto">
          <div className="relative">
            <div className="animate-spin rounded-full h-16 w-16 border-4 border-[#5c0811]/20 border-t-[#5c0811] mx-auto mb-4"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <img
                src="/images/safarit.png"
                alt="Loading"
                className="h-8 w-8 rounded-lg object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
              />
            </div>
          </div>
          <p className="text-[#5c0811] font-medium text-sm sm:text-base">
            Loading your safari adventure...
          </p>
          <p className="text-gray-500 text-xs mt-2">
            Please wait while we prepare your experience
          </p>
        </div>
      </div>
    }>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/tour/:tourId" element={<TourDetails />} />
        {/* Catch all route for 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}

export default App;
