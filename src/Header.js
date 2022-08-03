import React, { useEffect, useState } from 'react'
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import {Avatar} from '@material-ui/core';
import {useDataLayerValue} from './DataLayer';
// import {useEffect,useState} from React;
function Header() {
    const [{user}, dispatch]=useDataLayerValue();
    const [show,handleshow]=useState(false);
    useEffect(()=>{
        window.addEventListener("scroll",()=>{
            if(window.scrollY>100){
            handleshow(true);
            }
            else  handleshow(false);

        });
        return()=>{
        window.removeEventListener("scroll");
        };
    },[]);
  return (
    <div className={`header ${show &&"header_black"}`}>
        <div className="header_left">
        <SearchIcon />
        <input placeholder='Search for artists, Songs, albums' 
        type="text" value="" />

        </div>
        <div className="header_right">
            <Avatar src={user?.images[0]?.url} alt={user?.display_name} />

        <h4>{user?.display_name}</h4>
        </div>
    </div>
  )
}

export default Header