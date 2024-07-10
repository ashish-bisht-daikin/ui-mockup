import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import PropTypes from "prop-types";

type CommonInputType = {
  placeholder?: string;
  labelText?: string;
  hideLabel?: boolean;
  name?: string;
  value?: string;
  controlled?: boolean;
  onChange?: () => void;
};

const CommonInput = ({
  placeholder,
  hideLabel,
  labelText,
  name,
  value,
  onChange,
  controlled,
}: CommonInputType) => {
  const inputProps: {
    placeholder?: string;
    value?: string;
    onChange?: () => void;
    name?: string;
  } = {
    placeholder,
  };
  const labelProps: { htmlFor?: string } = {};
  if (name) {
    labelProps.htmlFor = name;
    inputProps.name = name;
  }
  if (controlled) {
    inputProps.value = value;
    inputProps.onChange = onChange;
  }
  return (
    <>
      {!hideLabel && <Label {...labelProps}>{labelText}</Label>}
      <Input {...inputProps} />
    </>
  );
};

CommonInput.defaultValues = {
  placeholder: "Enter Text...",
  className: "",
  disabled: false,
  handleClick: () => {},
  labelText: "Text",
  hideLabel: false,
  onchange: () => {},
  controlled: false,
};

CommonInput.propTypes = {
  placeholder: PropTypes.string,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  handleClick: PropTypes.func,
  labelText: PropTypes.string,
  hideLabel: PropTypes.bool,
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  controlled: PropTypes.bool,
};

export default CommonInput;
