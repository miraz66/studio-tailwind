import BodySvg from "../assets/BodySvg";
import PropTypes from "prop-types";

function HomeDisplay({ children }) {
  return (
    <div className="h-screen relative">
      <BodySvg />
      {children}
    </div>
  );
}

HomeDisplay.propTypes = {
  children: PropTypes.object.isRequired,
};

export default HomeDisplay;
