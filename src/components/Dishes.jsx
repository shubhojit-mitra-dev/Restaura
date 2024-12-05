import { useState } from "react";
import { DISHES } from "../constants";
import DishCard from "./DishCard";

const Dishes = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const mobileVisibleCount = 4;
  const tabletVisibleCount = 6;

  return (
    <section className="container mx-auto py-16" id="dishes">
      <h2 className="mb-8 text-center text-3xl sm:text-5xl font-bold">
        Our Dishes
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 mx-8 relative">
        {/* Fully visible cards */}
        {DISHES.slice(
          0,
          isExpanded 
            ? DISHES.length 
            : window.innerWidth >= 1024 
              ? DISHES.length 
              : window.innerWidth >= 768 
                ? tabletVisibleCount 
                : mobileVisibleCount
        ).map((dish, index) => (
          <DishCard 
            key={index} 
            project={{
              title: dish.title,
              description: dish.description,
              image: dish.image
            }} 
          />
        ))}
        
        {/* Partial Cards with Fade Effect */}
        {!isExpanded && (
          <>
            {/* Mobile - One Faded Card */}
            <div className="relative sm:hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black z-10"></div>
              <DishCard 
                project={{
                  title: DISHES[mobileVisibleCount].title,
                  description: DISHES[mobileVisibleCount].description,
                  image: DISHES[mobileVisibleCount].image
                }} 
              />
            </div>

            {/* Tablet - Two Faded Cards */}
            {DISHES.slice(tabletVisibleCount-1, tabletVisibleCount+1).map((dish, index) => (
              <div key={index} className="hidden sm:block lg:hidden relative">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black z-10"></div>
                <DishCard 
                  project={{
                    title: dish.title,
                    description: dish.description,
                    image: dish.image
                  }} 
                />
              </div>
            ))}
          </>
        )}
      </div>

      {/* Show More Button */}
      {!isExpanded && DISHES.length > mobileVisibleCount && (
        <div className="flex justify-center mt-8 lg:hidden">
          <button
            onClick={() => setIsExpanded(true)}
            className="px-6 py-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors duration-200"
          >
            Show More
          </button>
        </div>
      )}
    </section>
  );
};

export default Dishes;