
import { Drawer, Grid } from '@mui/material'
import React from 'react'
import { Outlet } from 'react-router-dom'
import Appbar from '../components/Appbar/appbar'

export default function AppLayout() {
  return (
    <Grid container >
      <Appbar/>
      <Grid item xs={3}>
       <Drawer>
        asdsa
       </Drawer>
      </Grid>
      <Grid item xs={9}>
        <Outlet/>
      </Grid>
    </Grid>
  )
}
