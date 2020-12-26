import React from "react"
import { makeStyles } from '@material-ui/core/styles';
import TopBar from "./components/TopBar"
import MenuBar from "./components/MenuBar"


const useStyles = makeStyles((theme) => ({
    root: {
        position: "relative",
        overflow: "hidden",
        height: '100vh !important',

        [theme.breakpoints.up('sm')]: {
        },
        // backgroundColor: '#F4F6F8'
    },
    content: {
        position: "relative",
        display: "block",
        overflowY: "scroll",
        height: "calc(100% - 64px)"
        // marginTop: "64px",
        // height: 'calc(100vh - 64px)',
    }
}));

export default function ({ children }) {
    const classes = useStyles();


    return <div className={classes.root}>
        <TopBar />
        <main className={classes.content}>
            <MenuBar />
            {children}
        </main>
    </div>
}