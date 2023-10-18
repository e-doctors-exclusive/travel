import React, { useState} from 'react'
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { useRouter } from 'next/navigation';
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ConnectingAirportsOutlinedIcon from '@mui/icons-material/ConnectingAirportsOutlined';
import AirlinesOutlinedIcon from '@mui/icons-material/AirlinesOutlined';
import InboxOutlinedIcon from '@mui/icons-material/InboxOutlined';
import LogoutIcon from '@mui/icons-material/Logout';
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";





interface SideBarProps {
  clicked: boolean;
  setClicked: React.Dispatch<React.SetStateAction<boolean>>;
  fetchUsers?:()=> Promise<void>
}

const SideBar: React.FC<SideBarProps> = ({ clicked, setClicked }) => {
  const router = useRouter();

    return (
      <div id="app" style={{ height: "100vh", display: "flex", position: 'fixed' }}>
      <Sidebar style={{ height: "100vh" }}>
        <Menu>
          <MenuItem
            icon={<MenuOutlinedIcon />}
            onClick={() => {
              setClicked(!clicked);
            }}
            style={{ textAlign: "center" }}
          >
            <h2>Tripma DB</h2>
          </MenuItem>
          <MenuItem icon={<HomeOutlinedIcon />} onClick={() => router.push('/home')}>
            Home
          </MenuItem>
          <MenuItem icon={<PeopleOutlinedIcon />} onClick={() => router.push('/users')}>
            Users
          </MenuItem>
          <MenuItem icon={<ConnectingAirportsOutlinedIcon />} onClick={() => router.push('/flights')}>
            Flights
          </MenuItem>
          <MenuItem icon={<AirlinesOutlinedIcon />} onClick={() => router.push('/airlines')}>
            Airlines
          </MenuItem>
          <MenuItem icon={<AddCircleOutlinedIcon />} onClick={() => router.push('/addairline')}>
            Add a Brand
          </MenuItem>
          <MenuItem icon={<AddCircleOutlinedIcon />} onClick={() => router.push('/addflight')}>
            Add a Flight
          </MenuItem>
          <MenuItem icon={<InboxOutlinedIcon />} onClick={() => router.push('/inbox')}>
            Inbox
          </MenuItem>
          <MenuItem icon={<LogoutIcon />} onClick={() => router.push('/')}>
            Logout
          </MenuItem>
        </Menu>
      </Sidebar>
    </div>
    )
}

export default SideBar