import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { NewsContext } from "../../MyContext/NewsProvider";

const SingleNews = () => {
   const allNews = useContext(NewsContext);
   const { newsId } = useParams();

   const singleNews = allNews.find((news) => news._id === newsId);
   const { image_url, title, details, category_id } = singleNews;
   return (
      <div className="my-6">
         <div className=" bg-white w-full block border border-gray-200 rounded-lg shadow">
            <div className="p-4 pb-0">
               <img
                  className="object-cover w-full rounded-t-lg md:h-auto md:rounded-none md:rounded-l-lg"
                  src={image_url}
                  alt=""
               />
               <h2 className="text-lg pb-3 font-bold leading-loose text-primary">
                  {title}
               </h2>

               <div className="flex flex-col justify-between pb-4 leading-normal">
                  <p className="mb-3 font-normal text-sm text-secondary">
                     {details}
                  </p>
                  <Link
                     to={`/category/${category_id}`}
                     className="text-white w-72  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                     <svg
                        className="w-3.5 h-3.5 text-white mr-3"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 10">
                        <path
                           stroke="currentColor"
                           strokeLinecap="round"
                           strokeLinejoin="round"
                           strokeWidth="2"
                           d="M13 5H1m0 0 4 4M1 5l4-4"
                        />
                     </svg>
                     All news in this category
                  </Link>
               </div>
            </div>
         </div>
      </div>
   );
};

export default SingleNews;
