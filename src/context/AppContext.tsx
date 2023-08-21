import React, { createContext, useState } from 'react';
import App from '../App';

interface AppContextValue {
  chartImage: string;
  setChartImage: React.Dispatch<React.SetStateAction<string>>;
}

export const appContext = createContext<AppContextValue | null>(null);

export const AppContext: React.FC = () => {
  const [chartImage, setChartImage] = useState<string>("");

  const contextValue: AppContextValue = {
    chartImage,
    setChartImage,
  };

  return (
    <appContext.Provider value={contextValue}><App/></appContext.Provider>
  );
};

