import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import LatestNewsTItle from "./LatestNewsTItle";

const MarqueeTitle = () => {
   const [news, setNews] = useState([]);

   // Fetch news
   useEffect(() => {
      fetch("/public/api/news.json")
         .then((res) => res.json())
         .then((data) => setNews(data));
   }, []);
   return (
      <div className="bg-[#F3F3F3] py-4 px-3 flex items-center">
         <button className="px-4 cursor-default py-1 text-lg font-poppins font-medium text-center text-white bg-[#D72050]">
            Latest
         </button>
         <Marquee>
            {news.map((singleNews) => (
               <LatestNewsTItle key={singleNews._id} title={singleNews.title} />
            ))}
         </Marquee>
      </div>
   );
};

export default MarqueeTitle;
