import PropTypes from "prop-types";
import BodySvg from "../assets/BodySvg";

function HomeDisplay({ children }) {
  return (
    <div className="h-full relative">
      <BodySvg />
      {children}
    </div>
  );
}

HomeDisplay.propTypes = {
  children: PropTypes.object.isRequired,
};

export default HomeDisplay;
