import "./App.css";
import CheckboxExampel from "./comnponents/Checkbox";
import { Button, ButtonGroup } from "@mui/material";
import { Save, Delete } from "@mui/icons-material";

function App() {
  return (
    <>
      <CheckboxExampel />
      <ButtonGroup>
        <Button
          size="large"
          startIcon={<Save />}
          style={{ fontSize: "20px" }}
          variant="contained"
          color="primary"
        >
          Save
        </Button>
        <Button
          size="large"
          startIcon={<Delete />}
          style={{ fontSize: "20px" }}
          variant="contained"
          color="secondary"
        >
          Discard
        </Button>
      </ButtonGroup>
    </>
  );
}

export default App;
