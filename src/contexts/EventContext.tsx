import { createContext, useState, useEffect, ReactNode } from "react";
import axios from "axios";

export interface Event {
  _id: string;
  name: string;
  price: string;
  category: string;
  date: string;
  __v: number;
}




interface EventContextData {
  products: Event[];
  
  
  addEvent: (event: Omit<Event, "_id" | "__v" | "date">) => Promise<void>;
}

export const EventContext = createContext<EventContextData>({
  products: [],

  addEvent: async () => {},
});

export const EventProvider = ({ children }: { children: ReactNode }) => {
  const [products, setproducts] = useState<Event[]>([]);




  const fetchproducts = async () => {
    const response = await axios.get(
   
   
   
      "https://product-app-74q6.onrender.com/products"
    );
    setproducts(response.data.payload);
  };

  useEffect(() => {
   
    fetchproducts();
  }, []);

  const addEvent = async (event: Omit<Event, "_id" | "__v" | "date">) => {
   
   
    await axios.post("https://product-app-74q6.onrender.com/products", event);
    fetchproducts();
  };

  return (
   
   <EventContext.Provider value={{ products, addEvent }}>
   
   
      {children}
    </EventContext.Provider>
  );
};
