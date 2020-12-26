import React from "react"
import { makeStyles } from "@material-ui/core"
import { Paper, Button } from '@material-ui/core'
import Carousel from 'react-material-ui-carousel'
import Slide1 from "./../../assets/images/slides/slide1.jpg"
import Slide2 from "./../../assets/images/slides/slide2.jpg"
import Slide3 from "./../../assets/images/slides/slide3.jpg"
import CarouselItem from "./components/CarouselItem"
import ProductsHList from "./components/ProductsHList"

const useStyles = makeStyles(theme => ({
    root: {

    },
    slide: {
        height: "280px",
        margin: theme.spacing(1),
        borderRadius: "10px",
        width: "calc(100% - " + theme.spacing(1) + ")",
        overflow: "hidden"
    },
    slideImg: {
        objectFit: "cover"
    }
}));

var items = [Slide1, Slide2, Slide3]
var products = [
    {
        img: require("./../../assets/images/productthumbnail/j5shoy80/t-shirt/k/n/6/l-t-prt-no-3-nvy-v-prt-no-1-blk-02-vimal-original-imaewehwrxwqyzx2.jpeg"),
        title: "Get your favorite T-Shirts"
    },{
        img: require("./../../assets/images/productthumbnail/jeiukcw0/t-shirt/b/x/h/s-t-prt-no-8-nv-striped-gry-02-vimal-original-imaf37478p99frbg.jpeg"),
        title: "Get your favorite T-Shirts"
    },{
        img: require("./../../assets/images/productthumbnail/j6fcqkw0/coin/g/2/p/gb24k-999-2g-bangalore-refinery-original-imaewwgbgaxhsfw4.jpeg"),
        title: "Get your favorite T-Shirts"
    },{
        img: require("./../../assets/images/productthumbnail/jjylw280/body-skin-treatment/s/y/h/525-weight-gain-granules-525gm-accumass-original-imaf7f6rmzxrgafv.jpeg"),
        title: "Get your favorite T-Shirts"
    },{
        img: require("./../../assets/images/productthumbnail/jkvh0nk0/shirt/3/u/2/m-12143757white-jack-jones-original-imaf824cq7deygxz.jpeg"),
        title: "Get your favorite T-Shirts"
    },{
        img: require("./../../assets/images/productthumbnail/jn6ck280/iron/8/n/u/usha-pro-3816-original-imaf9x4pyxpuus6m.jpeg"),
        title: "Get your favorite T-Shirts"
    },{
        img: require("./../../assets/images/productthumbnail/k0plpjk0/energy-sport-drink-mix/c/j/2/250-pre-workout-300-muscleblaze-original-imafkfbnu6gztvg4.jpeg"),
        title: "Get your favorite T-Shirts"
    },{
        img: require("./../../assets/images/productthumbnail/kcp4osw0/bottle/z/a/b/700-classic-bottle-titan-380ml-fitkit-original-imaftrp2jt4zsggj.jpeg"),
        title: "Get your favorite T-Shirts"
    }
]

export default function () {
    const classes = useStyles();

    return <div>
        <Carousel navButtonsAlwaysVisible={true} animation="slide" indicators={false}>
            {items.map((item, i) => <CarouselItem key={i} item={item} />)}
        </Carousel>
        <ProductsHList products={products} />
    </div>
}
