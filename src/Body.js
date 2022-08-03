import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';import React from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import './Body.css';
import { useDataLayerValue } from './DataLayer';
import Header from './Header';
import SongRow from './SongRow';
function Body({spotify}) {
  const [{Discover}, dispatch]= useDataLayerValue();
  return (
    <div className='body'>
    <Header spotify={spotify} />
    <div className="body_info">
      <img
      className='body_img' src={Discover?.images[0].url} alt="" />
      <div className="body_infoText">
        <strong>PLAYLIST</strong>
        <h2>Discover Weekly</h2>
        <p>{Discover?.description}</p>
        
      </div>
    </div>
    <div className="body_songs">
      <div className="body_icons">
        <PlayCircleFilledIcon className="body_shuffle" />
        <FavoriteIcon fontSize='large' />
        <MoreHorizIcon />

      </div>
      {/* list of songs */}
      {Discover?.tracks.items.map((item)=>(
        <SongRow track={item.track} />
      ))}
    </div>
    </div>
  )
}

export default Body