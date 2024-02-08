import { ReactNode, createContext, useState } from "react";

type ChildrenType = {
  children: ReactNode;
};

type ParameterContextType = {
  loading: string;
  setLoading: React.Dispatch<React.SetStateAction<string>>;
  destination: string;
  setDestination: React.Dispatch<React.SetStateAction<string>>;
  date: string;
  setDate: React.Dispatch<React.SetStateAction<string>>;
  containerSize: string;
  setContainerSize: React.Dispatch<React.SetStateAction<string>>;
};

export const ParameterContext = createContext<ParameterContextType>({
  loading: "",
  setLoading: () => {},
  destination: "",
  setDestination: () => {},
  date: "",
  setDate: () => {},
  containerSize: "",
  setContainerSize: () => {},
});

export const ParameterProvider = ({ children }: ChildrenType) => {
  const [loading, setLoading] = useState("");
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");
  const [containerSize, setContainerSize] = useState("");

  console.log({loading, destination, date, containerSize})

  const value = {
    loading,
    setLoading,
    destination,
    setDestination,
    date,
    setDate,
    containerSize,
    setContainerSize,
  };

  return (
    <ParameterContext.Provider value={value}>
      {children}
    </ParameterContext.Provider>
  );
};
