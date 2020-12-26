import React from "@material-ui/core"
import { makeStyles, Card, CardHeader, CardActionArea, CardContent, Divider, Button } from "@material-ui/core"
import ProductThumbnail from "../ProductThumbnail"


const useStyles = makeStyles(theme => ({
    root: {
        margin: theme.spacing(2)
    },
    productsRoot: {
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "flex-start"
    }
}));

export default function CarouselItem(props) {
    const classes = useStyles();
    return <div className={classes.root}>
        <Card>
            <CardHeader
                title="Deals of the day"
                titleTypographyProps={{ variant: "h4" }}
                action={<Button size="small" variant="contained" color="primary">View All</Button>}
            ></CardHeader>
            <Divider />
            <CardContent className={classes.productsRoot}>
                {props.products.map((product, productIdx) => {
                    return <ProductThumbnail details={product} />
                })}
            </CardContent>
        </Card>
    </div>
}