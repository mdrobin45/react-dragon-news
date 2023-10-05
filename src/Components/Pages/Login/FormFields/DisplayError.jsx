const DisplayError = ({ errMsg }) => {
   return <>{errMsg ? <p className="text-red-500">{errMsg}</p> : ""}</>;
};

export default DisplayError;
