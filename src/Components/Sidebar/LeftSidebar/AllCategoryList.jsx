import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const AllCategoryList = () => {
   const [categories, setCategories] = useState([]);

   // Fetch category
   useEffect(() => {
      fetch("/public/api/categories.json")
         .then((res) => res.json())
         .then((data) => setCategories(data));
   }, []);
   return (
      <div>
         <h2 className="text-lg text-primary font-semibold leading-medium">
            All Category
         </h2>
         <ul>
            {categories.map((category) => (
               <NavLink to={`/category/${category.id}`} key={category.id}>
                  <li className="hover:bg-gray-200 py-3 px-2 text-secondary font-medium">
                     {category.name}
                  </li>
               </NavLink>
            ))}
         </ul>
      </div>
   );
};

export default AllCategoryList;
