import { createContext, useEffect, useState } from "react";

export const NewsContext = createContext(null);

const NewsProvider = ({ children }) => {
   const [allNews, setNews] = useState([]);

   // Fetch news
   useEffect(() => {
      fetch("/public/api/news.json")
         .then((res) => res.json())
         .then((data) => setNews(data));
   }, []);
   return (
      <NewsContext.Provider value={allNews}>{children}</NewsContext.Provider>
   );
};

export default NewsProvider;
