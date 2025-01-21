import React from "react"
import {Button, Typography, AppBar, Toolbar, CssBaseline,MenuItem, Divider,Box, Card, CardMedia, CardContent, IconButton, Menu} from '@mui/material'
import * as icon from '@mui/icons-material'
// import MenuIcon from '@mui/icons-material/Menu'


const Home = () => {

    const pages = ['Home', 'Contact', 'About', 'Login', 'Signup']
    const [anchorElNav, setAnchorElNav] = React.useState(null)

    const handleOpenNavMenu = (event) => {
      setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
      setAnchorElNav(null);
    };

    return(
        <>
        <header>
          <AppBar position='static' color='primary'>
          <Toolbar>
            <icon.Nature sx={{display: { xs: 'none', md: 'flex' }, margin:'10px'}} />
            <Typography 
              variant='h4' 
              sx={{
                  display: { xs: 'none', md: 'flex' },
                  fontWeight:'Bold',
                  margin:'10px'
                }}>
              Niks.io
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit">
                  <icon.Menu/>
              </IconButton>

              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{ display: { xs: 'block', md: 'none' } }}>

                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography sx={{textAlign: 'center'}}>
                    {page}
                    </Typography>
                  </MenuItem>
                ))}

              </Menu>
            </Box>

            <icon.Nature sx={{display: { xs: 'flex', md: 'none' }, margin:'10px'}} />
            <Typography 
            variant='h4' 
            sx={{
                display: { xs: 'flex', md: 'none' },
                flexGrow:'1',
                fontWeight:'Bold',
                margin:'10px'
              }}>
            Niks.io
            </Typography>
            <Divider />

            <Box sx={{  display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  {page}
                </Button>
              ))}
            </Box>

          </Toolbar>
          </AppBar>
        </header>
        <main style={{display: 'flex', flexDirection:'column', justifyContent: 'center',alignItems:'center', textAlign:'center'}}>
          <Typography variant='h1' paddingTop='15px'>Hello World</Typography>
          <Card sx={{maxWidth:'500px'}}>
            <CardMedia 
              component='img'
              height='200px'
              image='./sunset.jpg'
              alt='Sunset Image.'
            />
            <CardContent>
              <Typography fontWeight='bold'>
                Sunset
              </Typography>
              <Typography>
                <i>This is a sunset image from village.</i>
              </Typography>
            </CardContent>
          </Card>
        </main>
        <footer style={{marginTop:'10px', backgroundColor:'#1976d2'}}>
          <Typography variant='h6' textAlign='center' fontWeight='Bold'>
            Footer
          </Typography>
          <Typography variant='subtitle1' textAlign='center'>
            @copyrights
          </Typography>
        </footer> 
        </>
    )
}

export default Home