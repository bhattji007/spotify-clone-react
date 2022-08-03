import React from 'react'
import './Footer.css';

import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import RepeatIcon from '@mui/icons-material/Repeat';
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import VolumeDownIcon from '@mui/icons-material/VolumeDown';
import { Grid, Slider } from '@mui/material';
function Footer() {
  return (
    <div className='footer'>
      <div className="footer_left">
       <img className='footer_albumlogo' src="https://mui.com/static/ads-in-house/themes.png" alt="" />
       <div className="footer_songInfo">
         <h4>No song is playing</h4>
         <p>...</p>
       </div>
      </div>
      <div className="footer_center">
       <ShuffleIcon className='footer_green'/>
       <SkipPreviousIcon className='footer_icon'/>
       <PlayCircleOutlineIcon className='footer_icon' fontSize="large"/>
        <SkipNextIcon className='footer_icon' />
        <RepeatIcon className='footer_green' />
      </div>
      <div className="footer_right">
      <Grid container spacing={2}>
        <Grid item>
          <PlaylistPlayIcon />
        </Grid>
        <Grid item>
          <VolumeDownIcon />
        </Grid>
        <Grid item xs>
          <Slider />
        </Grid>
      </Grid>
      </div>
    </div>
  )
}

export default Footer