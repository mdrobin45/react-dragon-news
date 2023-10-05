import qzone1 from "../../../../assets/images/qZone1.png";
import qzone2 from "../../../../assets/images/qZone2.png";
import qzone3 from "../../../../assets/images/qZone3.png";

const Qzone = () => {
   return (
      <div className="bg-gray-100 p-3 mt-10">
         <h2 className="text-lg text-primary font-semibold leading-medium">
            Q - Zone
         </h2>
         <img src={qzone1} alt="Q-Zone" />
         <img className="my-3" src={qzone2} alt="Q-Zone" />
         <img src={qzone3} alt="Q-Zone" />
      </div>
   );
};

export default Qzone;
