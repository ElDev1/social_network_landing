import { Settings } from "@mui/icons-material";
import { Button, styled, Typography } from "@mui/material";

function App() {
  const BlueButton = styled(Button)(({theme})=> ({
    backgroundColor: theme.palette.otherColor.main,
    color: "#888",
    margin: 5,
    "&:hover": {
      backgroundColor: "lightblue"
    },
    "&disabled": {
      backgroundColor: "gray",
      color: "white"
    }
  }))
  
  return (
    <div>
      <Button variant="text">text</Button>
      <Button
        startIcon={<Settings/>}
        variant="contained"
        color="otherColor"
        size="small" 
      >
        Settings
      </Button>
      <BlueButton>My Button</BlueButton>
    </div>
  );
}

export default App;
