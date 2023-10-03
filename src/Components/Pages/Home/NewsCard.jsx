import { Rating } from "@mui/material";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const NewsCard = ({ news }) => {
   const [publishDate, setPublishDate] = useState([]);
   const [ratingValue, setRatingValue] = useState(0);
   const { author, title, image_url, details, total_view, rating } = news;

   useEffect(() => {
      if (author && author.published_date) {
         const publishDateAndTime = author.published_date;
         const publishDate = publishDateAndTime.split(" ");
         setPublishDate(publishDate);
      }
      if (rating && rating.number) {
         setRatingValue(rating.number);
      }
   }, [author, rating]);

   return (
      <div className="my-6">
         <div className=" bg-white mx-auto block border border-gray-200 rounded-lg shadow md:max-w-xl">
            <div className="flex p-4 bg-gray-100 justify-between items-center">
               <div className="flex items-center justify-between">
                  <img
                     className="w-10 mr-3 h-10 rounded-full"
                     src={author.img}
                     alt={author.name}
                  />
                  <div>
                     <h4>{author.name ? author.name : "No name"}</h4>
                     <p className="text-secondary">{publishDate[0]}</p>
                  </div>
               </div>
               <div className="flex gap-3 items-center justify-between">
                  <svg
                     className="w-5 h-5 text-gray-800 "
                     aria-hidden="true"
                     xmlns="http://www.w3.org/2000/svg"
                     fill="none"
                     viewBox="0 0 14 20">
                     <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m13 19-6-5-6 5V2a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v17Z"
                     />
                  </svg>
                  <svg
                     className="w-5 h-5 text-gray-800 "
                     aria-hidden="true"
                     xmlns="http://www.w3.org/2000/svg"
                     fill="none"
                     viewBox="0 0 18 18">
                     <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m5.953 7.467 6.094-2.612m.096 8.114L5.857 9.676m.305-1.192a2.581 2.581 0 1 1-5.162 0 2.581 2.581 0 0 1 5.162 0ZM17 3.84a2.581 2.581 0 1 1-5.162 0 2.581 2.581 0 0 1 5.162 0Zm0 10.322a2.581 2.581 0 1 1-5.162 0 2.581 2.581 0 0 1 5.162 0Z"
                     />
                  </svg>
               </div>
            </div>
            <div className="p-4 pb-0">
               <h2 className="text-lg pb-3 font-bold leading-loose text-primary">
                  {title}
               </h2>
               <img
                  className="object-cover w-full rounded-t-lg md:h-auto md:rounded-none md:rounded-l-lg"
                  src={image_url}
                  alt=""
               />

               <div className="flex flex-col justify-between p-4 leading-normal">
                  <p className="mb-3 font-normal text-sm text-secondary">
                     {details}...{" "}
                     <Link to="/" className="text-blue-500">
                        Read More
                     </Link>
                  </p>
                  <hr />
                  <div className="mt-3 flex items-center justify-between">
                     <Rating name="read-only" value={ratingValue} readOnly />
                     <div className="flex items-center justify-end gap-2">
                        <svg
                           className="w-5 h-5 text-gray-800 dark:text-white"
                           aria-hidden="true"
                           xmlns="http://www.w3.org/2000/svg"
                           fill="none"
                           viewBox="0 0 20 14">
                           <g
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2">
                              <path d="M10 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                              <path d="M10 13c4.97 0 9-2.686 9-6s-4.03-6-9-6-9 2.686-9 6 4.03 6 9 6Z" />
                           </g>
                        </svg>
                        <span>{total_view}</span>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default NewsCard;
