import React from "react";
import { Checkbox, FormControlLabel } from "@mui/material";
import { useField } from "../hooks/customHooks";

const CheckboxExampel = () => {
  const check = useField("text");
  return (
    <div>
      <FormControlLabel
        control={
          <Checkbox
            checked={check.value}
            onChange={check.onChange}
            color="secondary"
          />
        }
        label="Testing checkbox"
      />
    </div>
  );
};

export default CheckboxExampel;
