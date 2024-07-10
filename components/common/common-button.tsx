"use client";
import PropTypes from "prop-types";
import { ReactNode } from "react";

type buttonType = {
  content: string | ReactNode;
  className?: string;
  disabled?: boolean;
  handleClick?: () => void;
};

const CommonButton = ({
  content,
  className,
  disabled,
  handleClick,
}: buttonType) => {
  const emptyFn = () => {};
  const props = {
    className,
    disabled,
    onClick: disabled ? emptyFn : handleClick,
  };
  return <button {...props}>{content}</button>;
};

export default CommonButton;

CommonButton.defaultValues = {
  content: "Click Mew",
  className: "",
  disabled: false,
  handleClick: () => {},
};

CommonButton.propTypes = {
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  handleClick: PropTypes.func,
};
