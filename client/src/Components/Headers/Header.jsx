import React, { useContext } from 'react'
import { GlobalState } from '../../GlobalState'
import './Header.css'

import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuList from '@material-ui/core/MenuList';

import axios from 'axios'
import {Link} from 'react-router-dom'

function Header() {
  const state = useContext(GlobalState)
  console.log(state)
  const [isLogged] = state.userAPI.isLogged; 
  
  
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

 const logoutUser = async() =>{
    await axios.get('/user/logout')

    localStorage.removeItem('firstLogin')

    window.location.href = "/";
  }

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

const handleClose = (event) => {
  if (anchorRef.current && anchorRef.current.contains(event.target)) {
    return;
  }

  setOpen(false);
};

function handleListKeyDown(event) {
  if (event.key === 'Tab') {
    event.preventDefault();
    setOpen(false);
  }
}

// return focus to the button when we transitioned from !open -> open
const prevOpen = React.useRef(open);
React.useEffect(() => {
  if (prevOpen.current === true && open === false) {
    anchorRef.current.focus();
  }

  prevOpen.current = open;
}, [open]);

const loggedRouter = () =>{
  return (
    <>
                       <div className="topbarIconsContainer">
                            
                            <span className="topIconBag">
                                2
                            </span>
                        </div>
                        <img src="https://w7.pngwing.com/pngs/627/693/png-transparent-computer-icons-user-user-icon-thumbnail.png" alt="" className="topAvatar" />
                        <Button
                                ref={anchorRef}
                                aria-controls={open ? 'menu-list-grow' : undefined}
                                aria-haspopup="true"
                                onClick={handleToggle}
                                
                                >
                              
                        </Button>
                        <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
                            {({ TransitionProps, placement }) => (
                                <Grow
                                    {...TransitionProps}
                                    style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                                    >
                                    <Paper>
                                        <ClickAwayListener onClickAway={handleClose}>
                                        <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                                            <Link to="/" onClick={logoutUser} ><MenuItem onClick={handleClose}>Logout</MenuItem></Link>
                                        </MenuList>
                                        </ClickAwayListener>
                                    </Paper>
                                </Grow>
                            )}
                        </Popper>
                      
                       </>
  )
}

 
  return (
      
      <div className="topbar">
          
          <div className="topbarWrapper">
              <div className="topLeft">
                  <span className="logo">Explorers</span>
              </div>
              <div className="topRight">
                     {
                       isLogged ?  loggedRouter() : <button style={{textDecoration: 'none', paddingLeft: '10px', paddingRight: '10px', paddingTop: '5px', paddingBottom: '5px', width: '155px', height: '35px', backgroundColor: '#248bcc', borderRadius: '25px'}}><Link to="/login" style={{textDecoration: 'none', color: 'white', fontSize: '20px'}} >Login</Link></button>
                     }
                    

              </div>
              
          </div>
      </div>
  )
}

export default Header
