"use client";
import PropTypes from "prop-types";
import { ReactNode } from "react";

type buttonType = {
  content: string | ReactNode;
  className?: string;
  disabled?: boolean;
  handleClick?: () => void;
  type?: "button" | "submit" | "reset";
};

const CommonButton = ({
  content,
  className,
  disabled,
  handleClick,
  type,
}: buttonType) => {
  const emptyFn = () => {};
  const props = {
    className,
    disabled,
    onClick: disabled ? emptyFn : handleClick,
    type,
  };
  return <button {...props}>{content}</button>;
};

export default CommonButton;

CommonButton.defaultProps = {
  content: "Click Mew",
  className: "common-btn",
  disabled: false,
  handleClick: () => {},
  type: "button",
};

CommonButton.propTypes = {
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  handleClick: PropTypes.func,
  type: PropTypes.string,
};
