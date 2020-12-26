import React from "@material-ui/core"
import { makeStyles } from "@material-ui/core"

const useStyles = makeStyles(theme => ({
    root: {

    },
    slide: {
        height: "280px",
        margin: theme.spacing(2),
        borderRadius: "10px",
        width: "calc(100% - " + theme.spacing(1) + ")",
        overflow: "hidden"
    },
    slideImg: {
        objectFit: "cover"
    }
}));

export default function CarouselItem(props) {
    const classes = useStyles();
    return <div className={classes.slide}>
        <img src={props.item} className={classes.slideImg} />
    </div>
}