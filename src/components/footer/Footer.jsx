import "./index.css";

import { BiHomeCircle, BiSearch, BiBell, BiEnvelope } from "react-icons/bi";

const Footer = () => {
  return (
    <div className="Footer">
      <ul>
        <li className="Footer__item">
          <BiHomeCircle className="Footer__icons" />
        </li>
        <li className="Footer__item">
          <BiSearch className="Footer__icons" />
        </li>
        <li className="Footer__item">
          <BiBell className="Footer__icons" />
        </li>
        <li className="Footer__item">
          <BiEnvelope className="Footer__icons" />
        </li>
      </ul>
    </div>
  );
};

export default Footer;
