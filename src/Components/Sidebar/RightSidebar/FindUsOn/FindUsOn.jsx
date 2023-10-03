const FindUsOn = () => {
   return (
      <div>
         <h2 className="text-lg text-primary font-semibold leading-medium">
            All Category
         </h2>
         <ul className="mt-3">
            <li className="w-full">
               <a
                  className="py-2 px-2 w-full block text-secondary font-medium border-x border-t"
                  href="#">
                  <div className="flex items-center justify-start">
                     <svg
                        className="w-6 h-6 p-1 mr-2 bg-gray-200 rounded-full text-blue-800 dark:text-white"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 8 19">
                        <path
                           fillRule="evenodd"
                           d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                           clipRule="evenodd"
                        />
                     </svg>
                     <span>Facebook</span>
                  </div>
               </a>
            </li>
            <li className=" w-full">
               <a
                  className="py-2 px-2 w-full block text-secondary font-medium border-x border-t"
                  href="#">
                  <div className="flex items-center justify-start">
                     <svg
                        className="w-6 h-6 p-1 mr-2 bg-gray-200 rounded-full text-blue-800 dark:text-white"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 8 19">
                        <path
                           fillRule="evenodd"
                           d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                           clipRule="evenodd"
                        />
                     </svg>
                     <span>Twitter</span>
                  </div>
               </a>
            </li>
            <li className="w-full">
               <a
                  className="py-2 px-2 w-full block text-secondary font-medium border"
                  href="#">
                  <div className="flex items-center justify-start">
                     <svg
                        className="w-6 h-6 p-1 mr-2 bg-gray-200 rounded-full text-blue-800 dark:text-white"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 15 15">
                        <path
                           fillRule="evenodd"
                           d="M7.979 5v1.586a3.5 3.5 0 0 1 3.082-1.574C14.3 5.012 15 7.03 15 9.655V15h-3v-4.738c0-1.13-.229-2.584-1.995-2.584-1.713 0-2.005 1.23-2.005 2.5V15H5.009V5h2.97ZM3 2.487a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
                           clipRule="evenodd"
                        />
                        <path d="M3 5.012H0V15h3V5.012Z" />
                     </svg>

                     <span>Linkedin</span>
                  </div>
               </a>
            </li>
         </ul>
      </div>
   );
};

export default FindUsOn;
