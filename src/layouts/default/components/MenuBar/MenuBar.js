import React, { PropTypes, useState } from 'react'
import { Divider, Paper, Typography, Grid, List, ListItem, ListSubheader } from "@material-ui/core"
import { makeStyles } from "@material-ui/core"
import zIndex from '@material-ui/core/styles/zIndex';

const useStyles = makeStyles(theme => ({
    root: {
        position: "relative"
    },
    menuRoot: {
        height: "40px",
        borderRadius: "0px",
        display: "block",
    },
    menuItemsList: {
        listStyle: "none",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "space-evenly",
        verticalAlign: "middle",
        height: "40px",
        margin: "0px",
        position: "relative",
        "& > .menuItemListItem": {
            display: "inline-block",
            textAlign: "center",
            padding: theme.spacing(1),
            "& > .hover-control": {
                display: "none",
                margin: theme.spacing(1),
                marginTop: "0px"
            },
            "&:hover": {
                color: theme.palette.primary.main,
                "& p": {
                    fontWeight: "bold"
                }
            },
            "&:hover > .hover-control": {
                position: "absolute",
                display: "block",
                top: "32px",
                left: 0,
                marginRight: "auto",
                marginLeft: "auto",
                zIndex: 9999,
                width: "100%"
            },
            "& > .hover-control:hover": {
                position: "absolute",
                display: "block",
                top: "32px",
                left: 0,
                marginRight: "auto",
                marginLeft: "auto",
                zIndex: 9999,
                width: "100%"
            }
        }
    },
    menuExpandedRoot: {

    },
    expandedMenu: {
        minHeight: "120px",
        height: "auto"
    }
}));

const Menu = [
    {
        title: "Electronics",
        menu: {
            "Mobiles": ["Samsung", "Iphone", "RealMe", "Micromax"],
            "Mobiles 1": ["Samsung", "Iphone", "RealMe", "Micromax"],
            "Mobiles 2": ["Samsung", "Iphone", "RealMe", "Micromax"]
        }
    },
    {
        title: "TVs & Appliances",
        menu: {
            "fdsfs": ["Samsung", "Iphone", "RealMe", "Micromax"]
        }
    },
    {
        title: "Men",
        menu: {
            "Mobiles": ["Samsung", "Iphone", "RealMe", "Micromax"]
        }
    },
    {
        title: "Women",
        menu: {
            "Mobiles": ["Samsung", "Iphone", "RealMe", "Micromax"]
        }
    },
    {
        title: "Baby & Kids",
        menu: {
            "Mobiles": ["Samsung", "Iphone", "RealMe", "Micromax"]
        }
    },
    {
        title: "Home & Furniture",
        menu: {
            "Mobiles": ["Samsung", "Iphone", "RealMe", "Micromax"]
        }
    },
    {
        title: "Sports, Books & More",
        menu: {
            "Mobiles": ["Samsung", "Iphone", "RealMe", "Micromax"]
        }
    },
    {
        title: "Offer Zone",
        menu: {
            "Mobiles": ["Samsung", "Iphone", "RealMe", "Micromax"]
        }
    }
]

const MenuBar = props => {
    const classes = useStyles();
    const [menuExpanded, setMenuExpanded] = useState(null);

    return (
        <div className={classes.root}>
            <Paper elevation={3} className={classes.menuRoot}>
                <Grid container justify="center" alignItems="center">
                    <Grid item md={10}>
                        <ul className={classes.menuItemsList}>
                            {Menu.map((menu, idx) => {
                                return <li key={idx} className="menuItemListItem"><Typography variant="body2">{menu.title}</Typography>
                                    <div className="hover-control" key={idx + menu.title}>
                                        <Paper className={classes.expandedMenu}>
                                            <Grid container alignItems="flex-start">
                                                {Object.keys(menu.menu).map(x => {
                                                    return <Grid md={3} item key={idx + x}>
                                                        <List>
                                                            <ListSubheader>{x}</ListSubheader>
                                                            {menu.menu[x].map((y, idx) => {
                                                                return <ListItem key={idx + y}>{y}</ListItem>
                                                            })}
                                                        </List>
                                                    </Grid>
                                                })}
                                            </Grid>
                                        </Paper>
                                    </div>
                                </li>;
                            })}
                        </ul>
                    </Grid>
                </Grid>
            </Paper >
            <Divider></Divider>

        </div >
    )
}

MenuBar.propTypes = {

}

export default MenuBar