import React, { createContext, useState, useEffect } from 'react';

// Create a Context for your data
const DataContext = createContext();

// The provider component to wrap around your app
export const DataProvider = ({ children }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Fetch data from your JSON file
    fetch('/data.json')
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error('Error fetching JSON:', error));
  }, []);

  return (
    <DataContext.Provider value={data}>
      {children}
    </DataContext.Provider>
  );
};

// Custom hook to use the context easily in any component
export const useData = () => {
  return React.useContext(DataContext);
};
