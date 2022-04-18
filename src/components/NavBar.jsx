import { AppBar, styled, Toolbar, Typography, Box, InputBase, Badge, Avatar} from '@mui/material'
import InterestsIcon from '@mui/icons-material/Interests';
import MailIcon from '@mui/icons-material/Mail';
import theme from "../theme";
import React from 'react';
import { Notifications } from '@mui/icons-material';


const StyledToolbar = styled(Toolbar)({
  display:"flex",
  justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding:"0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%"
}));

const Icons = styled(Box)(({ theme }) => ({
  display:"none",
  alignItems:"center",
  gap:"20px",
  [theme.breakpoints.up("sm")]:{
    display:"flex"
  }
}));

const UserBox = styled(Box)(({ theme }) => ({
  display:"flex",
  alignItems:"center",
  gap:"10px",
  [theme.breakpoints.up("sm")]:{
    display:"none"
  }
}));

const NavBar = () => {
  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant='h6' sx={{ display:{xs:"none", sm:"block"}}}>Social</Typography>
        <InterestsIcon sx={{ display:{xs:"block", sm:"none"}}}></InterestsIcon>
        <Search>
          <InputBase placeholder='search' />
        </Search>
        <Icons>
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
          <Badge badgeContent={4} color="error">
            <Notifications />
          </Badge>
          <Avatar sx={{width:30, height:30}} src=""/>
        </Icons>
        <UserBox>
          <Avatar sx={{width:30, height:30}} src=""/>
          <Typography variant="span">UserName</Typography>
        </UserBox>
      </StyledToolbar>
    </AppBar>
  )
}

export default NavBar