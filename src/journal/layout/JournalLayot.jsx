import { Box } from "@mui/system"

const drawerWidth = 240;

export const JournalLayot = ({ children }) => {
    return (
        <Box sx={{ display: 'flex' }}>
            {/* Navbar drawerWidth*/}

            {/* Sidebar drawerWidth*/}

            <Box
                component='main'
                sx={{ flexGrow: 1, p: 3 }}
            >
                {/* Toolbar */}

                {children}
            </Box>
        </Box>
    )
}
