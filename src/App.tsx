import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { usePerformance } from "./hooks/usePerformance";

// Lazy load components for better performance
const Home = lazy(() => import("./components/home"));
const AboutUs = lazy(() => import("./pages/AboutUs"));
const Booking = lazy(() => import("./pages/Booking"));
const TourDetails = lazy(() => import("./pages/TourDetails"));
const NotFound = lazy(() => import("./components/NotFound"));

function App() {
  usePerformance();
  
  return (
    <Suspense fallback={
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-stone-50 to-amber-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-[#5c0811] mx-auto mb-4"></div>
          <p className="text-[#5c0811] font-medium">Loading your safari adventure...</p>
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
