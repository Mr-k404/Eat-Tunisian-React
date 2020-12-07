import React from "react";
import PropTypes from "prop-types";
import Rater from "react-rater";
import "react-rater/lib/react-rater.css";

const Rating = props => (
  <Rater  {...props}>
    <Star />
  </Rater>
);

const Star = props => {
  const starProps = Object.assign({}, props);
  const nameMap = {
    isDisabled: "is-disabled",
    isActive: "is-active",
    isActiveHalf: "is-active-half",
    willBeActive: "will-be-active"
  };

  const className = Object.keys(nameMap)
    // eslint-disable-next-line
    .filter(prop => (delete starProps[prop], props[prop]))
    .map(prop => nameMap[prop])
    .join(" ");
  return <div className={`react-rater-star ${className}`} {...starProps} />;
};

Star.defaultProps = {
  willBeActive: true,
  isActive: true,
  isActiveHalf: true,
  isDisabled: true
};

Star.propTypes = {
  isActive: PropTypes.bool,
  isActiveHalf: PropTypes.bool,
  willBeActive: PropTypes.bool,
  isDisabled: PropTypes.bool
};

export default Rating;