import { useContext } from "react";
import { NewsContext } from "../../../../MyContext/NewsProvider";
import BreakingNewsCard from "./BreakingNewsCard";

const BreakingNews = () => {
   const allNews = useContext(NewsContext);

   const filteredNews = allNews
      .filter((news) => news.category_id === "4")
      .splice(0, 3);
   return (
      <div>
         {filteredNews.map((news) => (
            <BreakingNewsCard key={news._id} news={news} />
         ))}
      </div>
   );
};

export default BreakingNews;
