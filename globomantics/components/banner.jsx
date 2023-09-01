import Image from 'next/image'
import { logo } from "./banner.module.css";

const subtitleStyle = {
  fontStyle: "italic",
  fontSize: "x-large",
  color: "#5070ff",
};

const Banner = ({ children }) => {
  return (
    <header className="row mb-4">
      <div className="col-5">
        <Image src="/GloboLogo.png" alt="logo" className={logo} width={200} height={150} />
      </div>
      <div className="col-7 mt-5" style={subtitleStyle}>
        {children}
      </div>
    </header>
  );
};

export default Banner;
