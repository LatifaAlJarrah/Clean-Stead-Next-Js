import Image from "next/image";
import Logo from "../../../assest/images/logo.png";
import "../../../app/globals.css";

export default function LogoDeclare({ steadColor, id }) {
  return (
    <div className="flex justify-center items-center mb-5">
      {id == 1 ? (
        <>
          <Image src={Logo} className="w-12 h-12" alt="Logo" />
          <p className="clean-stead-name">
            كلين <span className={`${steadColor}`}>ستيد</span>
          </p>
        </>
      ) : (
        <div className="flex justify-center items-center">
          <p className="clean-stead-name">
            كلين <span className={`${steadColor}`}>ستيد</span>
          </p>
          <Image src={Logo} className="w-10 h-10 -mr-20" alt="Logo" />
        </div>
      )}
    </div>
  );
}
