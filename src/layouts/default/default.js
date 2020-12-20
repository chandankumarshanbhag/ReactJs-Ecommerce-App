import React from "react"
import { makeStyles } from '@material-ui/core/styles';
import TopBar from "./components/TopBar"


const useStyles = makeStyles((theme) => ({
    root: {
        position: "relative",
        overflow: "hidden",
        height: '100% !important',
        [theme.breakpoints.up('sm')]: {
        },
        // backgroundColor: '#F4F6F8'
    },
    content: {
        position: "relative",
        height: 'calc(100vh - 64px)',
    }
}));

export default function () {
    const classes = useStyles();


    return <div className={classes.root}>
        <TopBar />
        <main className={classes.content}>

        </main>
    </div>
}