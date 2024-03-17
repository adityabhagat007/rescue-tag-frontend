import { Grid, Stack, Tab, TextField } from '@mui/material'
import React from 'react'

export default function DetailsPage() {
  return (
    <Stack>
       <Grid container spacing={2}>
        <Grid item xs>
            Name
        </Grid>
        <Grid item xs>
            <TextField
               
            />
        </Grid>
       </Grid>
    </Stack>
  )
}
