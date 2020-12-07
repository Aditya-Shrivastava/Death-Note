import React, { useState } from 'react';
import './Navbar.css';

import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { Link } from 'react-router-dom';

const drawerWidth = 170;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));


function Navbar({title}) {

    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
      <div className="navbar">
        <div className="navbar__items">
            <MenuIcon 
              className="navbar__itemsIcon" 
              onClick={handleDrawerOpen} 
            />
            <h1>{title}</h1>
          </div>

          <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="left"
                open={open}
                classes={{
                  paper: classes.drawerPaper,
                }}
            >
              <div className="navbar__drawer">
                <div className={classes.drawerHeader}>
                    <IconButton onClick={handleDrawerClose}>
                      <div className="navbar__drawerIcon">
                        {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                      </div>
                    </IconButton>
                </div>
                
                <div className="navbar__links" onClick={handleDrawerClose}>
                  <Link to='/'>Home</Link>
                  <Link to='/categories'>Categories</Link>
                </div>
              </div>
            </Drawer>
      </div>


        // <div className={classes.root}>
        //     <CssBaseline />
        //     <AppBar
        //         position="fixed"
        //         className={clsx(classes.appBar, {
        //         [classes.appBarShift]: open,
        //         })}
        //     >
        //         <Toolbar>
        //             <IconButton
        //                 color="inherit"
        //                 aria-label="open drawer"
        //                 onClick={handleDrawerOpen}
        //                 edge="start"
        //                 className={clsx(classes.menuButton, open && classes.hide)}
        //             >
        //                 <MenuIcon />
        //             </IconButton>
        //             <Typography variant="h6" noWrap>
        //                 Home
        //             </Typography>
        //         </Toolbar>
        //     </AppBar>
        //     <Drawer
        //         className={classes.drawer}
        //         variant="persistent"
        //         anchor="left"
        //         open={open}
        //         classes={{
        //         paper: classes.drawerPaper,
        //         }}
        //     >
        //         <div className={classes.drawerHeader}>
        //             <IconButton onClick={handleDrawerClose}>
        //                 {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
        //             </IconButton>
        //         </div>
        //     </Drawer>
        // </div>
    )
}

export default Navbar
