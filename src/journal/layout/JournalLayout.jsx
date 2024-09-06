import { Box, Toolbar } from "@mui/material"
import { NavBar, SideBar } from "../components";

const drawerWidth = 240;

export const JournalLayout = ({ children }) => {
  return (
    <Box sx={{ display: 'flex'}}>

        {/* NAVBAR drawerWidth*/}
        <NavBar drawerWidth={ drawerWidth }/>
        {/* SIDEBAR drawerWidth*/}
        <SideBar drawerWidth={ drawerWidth }/>

        <Box 
        component='main'
        sx={{ flexGrow: 1, p:3}}
        >
            {/* TOOLBAR */}
            <Toolbar>
                
            </Toolbar>

            { children }
        </Box>
    </Box>
  )
}
