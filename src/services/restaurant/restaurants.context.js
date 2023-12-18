import React, { useState, createContext, useEffect, useContext } from "react";

import { restaurantRequest, restaurantTransform } from "./restaurants.service";
import { LocationContext } from "./location/location.context";

export const RestaurantContext = createContext();

export const RestaurantContextProvider = ({ children }) => {
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const { location } = useContext(LocationContext);

  const retrieveRestaurants = async (loc) => {
    setIsLoading(true);
    setRestaurants([]);

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      const results = await restaurantRequest(loc);
      const transformedResults = restaurantTransform(results);

      setRestaurants(transformedResults);
    } catch (err) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (location) {
      let locationString = `${location?.lat},${location?.lng}`;
      retrieveRestaurants(locationString);
    }
  }, [location]);

  return (
    <RestaurantContext.Provider
      value={{
        restaurants,
        isLoading,
        error,
      }}
    >
      {children}
    </RestaurantContext.Provider>
  );
};
