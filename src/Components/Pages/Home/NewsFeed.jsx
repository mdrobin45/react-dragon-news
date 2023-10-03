import { useContext } from "react";
import { useParams } from "react-router-dom";
import { NewsContext } from "../../../MyContext/NewsProvider";
import NewsCard from "./NewsCard";

const NewsFeed = () => {
   const { catId } = useParams();
   const allNews = useContext(NewsContext);

   const filteredNews = allNews.filter((news) => news.category_id === catId);
   return (
      <div>
         <h2 className="text-lg font-semibold md:max-w-xl mx-auto">
            Dragon News Home
         </h2>
         {filteredNews.length
            ? filteredNews.map((news) => (
                 <NewsCard news={news} key={news._id} />
              ))
            : allNews.map((news) => <NewsCard news={news} key={news._id} />)}
      </div>
   );
};

export default NewsFeed;
