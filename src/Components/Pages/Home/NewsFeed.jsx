import { useLoaderData, useParams } from "react-router-dom";
import NewsCard from "./NewsCard";

const NewsFeed = () => {
   const { catId } = useParams();
   const allNews = useLoaderData();

   const filteredNews = allNews.filter((news) => news.category_id === catId);
   console.log(allNews);
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
