import { Link } from "react-router-dom";

const FormFooter = ({ linkComment, linkUrl, linkText }) => {
   return (
      <div className="p-6 pt-0">
         <p className=" flex justify-center font-sans text-sm font-light leading-normal text-inherit antialiased">
            {linkComment}
            <Link
               to={linkUrl}
               className="ml-1 block font-sans text-sm font-bold leading-normal text-red-700 antialiased">
               {linkText}
            </Link>
         </p>
      </div>
   );
};

export default FormFooter;
