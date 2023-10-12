import { useState } from "react";

export const useField = (type) => {
  const [value, setValue] = useState(false);

  const onChange = (e) => {
    setValue(!value);
  };

  return {
    type,
    onChange,
    value,
  };
};
