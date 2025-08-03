// Utility to preload critical images for better performance
export const preloadImage = (src: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve();
    img.onerror = reject;
    img.src = src;
  });
};

export const preloadCriticalImages = async () => {
  const criticalImages = [
    "/images/safari-adventure.jpeg",
    "/images/luxury-accommodation.jpeg",
    "/images/cultural-experience.jpeg",
    "/images/adventure-activities.jpeg",
    "/images/transportation-logistics.jpeg",
    "/images/safarit.png"
  ];

  try {
    await Promise.all(criticalImages.map(preloadImage));
    console.log("Critical images preloaded successfully");
  } catch (error) {
    console.warn("Some images failed to preload:", error);
  }
};

// Lazy loading utility for non-critical images
export const createLazyImageObserver = () => {
  if ('IntersectionObserver' in window) {
    return new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          if (img.dataset.src) {
            img.src = img.dataset.src;
            img.classList.remove('lazy');
            img.classList.add('loaded');
          }
        }
      });
    });
  }
  return null;
};