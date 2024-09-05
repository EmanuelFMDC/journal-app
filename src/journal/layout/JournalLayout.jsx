import { Box } from "@mui/material"

const drawerWidth = 240;

export const JournalLayout = ({ Children }) => {
  return (
    <Box sx={{ display: 'flex'}}>

        {/* NAVBAR drawerWidth*/}

        {/* SIDEBAR drawerWidth*/}

        <Box 
        component='main'
        sx={{ flexGrow: 1, p:3}}
        >
            {/* TOOLBAR */}

            { Children }
        </Box>
    </Box>
  )
}
