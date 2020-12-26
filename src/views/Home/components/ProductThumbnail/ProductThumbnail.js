import React, { PropTypes } from 'react'
import { makeStyles, Typography } from "@material-ui/core"
const useStyles = makeStyles(theme => ({
    root: {
        margin: theme.spacing(1),
        width: "200px",
        display: "block"
    },
    img: {
        height: "140px"
    }
}));

const ProductThumbnail = props => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <center>
                <img src={props.details.img.default} alt="" className={classes.img} />
                <div>
                    <Typography variant="body2">{props.details.title}</Typography>
                    <Typography variant="caption">{props.details.title}</Typography>
                </div>
            </center>

        </div>
    )
}

ProductThumbnail.propTypes = {

}

export default ProductThumbnail