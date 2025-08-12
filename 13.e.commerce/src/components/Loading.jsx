import React, { useState } from 'react'
import CircularProgress from '@mui/material/CircularProgress';
import Button from '@mui/material/Button';
import Backdrop from '@mui/material/Backdrop';
import { useSelector } from 'react-redux';
function Loading() {
    const { loading } = useSelector((store) => store.product)



    return (
        <Backdrop
            sx={(theme) => ({ color: '#fff', zIndex: theme.zIndex.drawer + 1 })}
            open={loading}

        >
            <CircularProgress color="inherit" />
        </Backdrop>
    )
}

export default Loading