import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';


export default function SimpleBackdrop({open}) {
  return (
    <div>
      <Backdrop
        sx={{ color: '#000', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
      >
        <CircularProgress color="primary" />
      </Backdrop>
    </div>
  );
}
