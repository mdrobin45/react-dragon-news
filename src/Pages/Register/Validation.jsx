export const formValidation = (name, photoUrl, email, password, tos) => {
   let errorMessage = "";

   // Validate form value
   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
   const mediumPasswordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
   const urlRegex =
      /^(https?:\/\/)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%._+~#?&//=]*)$/;

   if (!name.length) {
      errorMessage = "Name cannot be blank";
   } else if (!urlRegex.test(photoUrl)) {
      errorMessage = "Invalid URL";
   } else if (!emailRegex.test(email)) {
      errorMessage = "Invalid email address";
   } else if (password.length < 8) {
      errorMessage = "Password must be at least 8 characters long";
   } else if (!mediumPasswordRegex.test(password)) {
      errorMessage = "Password must contain at least one letter and one number";
   } else if (!tos) {
      errorMessage = "You must accept the terms and conditions to proceed";
   }

   return errorMessage;
};
