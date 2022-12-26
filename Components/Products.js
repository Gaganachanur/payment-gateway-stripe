import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Image from "next/image";
import { Button, Icon, Popup } from "semantic-ui-react";
import { FaRegComment } from "react-icons/Fa";
import { FiSend } from "react-icons/Fi";
import { CgBookmark } from "react-icons/Cg";
import { BiRupee } from "react-icons/bi";

import InstaFeeds from "./InstaFeeds";
import girlWhiteshirt from "../assets/girlWhiteshirt.jpg";
import RedTop from "../assets/RedTop.jpg";
import blackShirt from "../assets/blackShirt.jpg";
import GaganBlueShirt from "../assets/GaganBlueShirt.jpg";
import fasionquote from "../assets/fasionquote.jpg";
import { checkout } from "../pages/checkout";
import { Fragment } from "react";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function Products() {
  const [expanded, setExpanded] = React.useState(false);
  const [expanded1, setExpanded1] = React.useState(true);
  const [expanded2, setExpanded2] = React.useState(false);
  const [expanded3, setExpanded3] = React.useState(false);

  const [whitecount, setWhiteCount] = React.useState(998);
  const [redcount, setRedCount] = React.useState(998);
  const [blackcount, setBlackCount] = React.useState(998);
  const [bluecount, setBlueCount] = React.useState(998);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const handleExpandClick1 = () => {
    setExpanded1(!expanded1);
  };
  const handleExpandClick2 = () => {
    setExpanded2(!expanded2);
  };
  const handleExpandClick3 = () => {
    setExpanded3(!expanded3);
  };

  return (
    <Fragment>
      <div className="flex flex-wrap justify-around">
        <div className="mt-20">
          <Image
            src={fasionquote}
            alt="Picture of the author"
            width={330}
            height={200}
          />
        </div>
        <div>
          <Card
            sx={{ maxWidth: 345 }}
            className="border-spacing-4 shadow-2xl p-2 m-5 rounded-xl border ..."
          >
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                  R
                </Avatar>
              }
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title="Sophia "
              subheader="oct 1, 2019"
            />
            <Image
              src={RedTop}
              alt="Picture of the author"
              width={330}
              height={200}
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                This impressive paella is a perfect party dish and a fun meal to
                cook together with your guests. Add 1 cup of frozen peas along
                with the mussels, if you like.
              </Typography>
            </CardContent>

            <CardActions disableSpacing>
              <div  className=" px-2" onClick={() => setRedCount(redcount + 1)}>
                <Popup
                  trigger={<Icon name="heart" color="red" size="large" />}
                  content="Add to wish list"
                />
              </div>
                <div
                 expand={expanded1}
                 onClick={handleExpandClick1}
                 aria-expanded={expanded1}
                 aria-label="show more"
                >  <FaRegComment size="20px" /></div>
              <div className="px-2">
                {" "}
                <FiSend size="25px" />
              </div>
              <ExpandMore
                expand={expanded1}
                onClick={handleExpandClick1}
                aria-expanded={expanded1}
                aria-label="show more"
              >
                <CgBookmark size="30px" />
              </ExpandMore>
            </CardActions>
            <p>Wish listed by alexa_good_one and {redcount}</p>
            <Collapse in={expanded1} timeout="auto" unmountOnExit>
              <InstaFeeds />
            </Collapse>
          </Card>
        </div>
        {/* <div ><Steps/></div> */}
      </div>
      <h1 className="text-3xl font-semibold ... p-5 font-Kalam">
        {" "}
        Our Premium products
      </h1>
      <div className="flex flex-wrap justify-evenly">
        <div>
          <Card
            sx={{ maxWidth: 345 }}
            className="border-spacing-4 shadow-2xl p-2 m-5 rounded-xl border ..."
          >
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: "#9c27b0" }} aria-label="recipe">
                  R
                </Avatar>
              }
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title="William Alexander"
              subheader="august 4, 2022"
            />
            <Image
              src={blackShirt}
              alt="Picture of the author"
              width={330}
              height={200}
            />
            <CardContent>
              <p className="font-Kalam text-2xl  font-semibold ...">
                Black T-shirt
              </p>
              <div className="flex text-2xl">
                <BiRupee />
                <p>699</p>
              </div>

              <button
                className="button w-full"
                onClick={() => {
                  checkout({
                    lineItems: [
                      {
                        price: "price_1MJH66SIUtlkQfBLFfr3c6dN",
                        quantity: 1,
                      },
                    ],
                  });
                }}
              >
                {" "}
                buy now
              </button>
            </CardContent>
            <CardActions disableSpacing>
              <div  className=" px-2" onClick={() => setBlackCount(blackcount + 1)}>
                <Popup
                  trigger={<Icon name="heart" color="red" size="large" />}
                  content="Add to wish list"
                />
              </div>

             
                <div  expand={expanded2}
                onClick={handleExpandClick2}
                aria-expanded={expanded2}
                aria-label="show more"> <FaRegComment size="20px" /></div>
             
              <div className="px-2">
                {" "}
                <FiSend size="25px" />
              </div>
              <ExpandMore
                expand={expanded2}
                onClick={handleExpandClick2}
                aria-expanded={expanded2}
                aria-label="show more"
              >
                <CgBookmark size="30px" />
              </ExpandMore>
            </CardActions>
            <p className="text-xl font-semibold ...">
              Wish listed by ronaldo and {blackcount}
            </p>
            <Collapse in={expanded2} timeout="auto" unmountOnExit>
              <InstaFeeds />
            </Collapse>
          </Card>
        </div>
        <div>
          <Card
            sx={{ maxWidth: 345 }}
            className="border-spacing-4 shadow-2xl p-2 m-5 rounded-xl border ..."
          >
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: "#5393ff" }} aria-label="recipe">
                  G
                </Avatar>
              }
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title="Gagan R Achanur"
              subheader="September 14, 2022"
            />
            <Image
              src={GaganBlueShirt}
              alt="Picture of the author"
              width={330}
              height={200}
            />
            <CardContent>
              <p className="font-Kalam text-2xl  font-semibold ...">
                Blue T-shirt{" "}
              </p>
              <div className="flex text-2xl">
                <BiRupee />
                <p>899</p>
              </div>
              <button
                className="button w-full"
                onClick={() => {
                  checkout({
                    lineItems: [
                      {
                        price: "price_1MJH1XSIUtlkQfBLB1qf0xrD",
                        quantity: 1,
                      },
                    ],
                  });
                }}
              >
                {" "}
                buy now
              </button>
            </CardContent>
            <CardActions disableSpacing>
              <div  className=" px-2" onClick={() => setBlueCount(bluecount + 1)}>
                <Popup
                  trigger={<Icon name="heart" color="red" size="large" />}
                  content="Add to wish list"
                />
              </div>

            
                <div  expand={expanded3}
                onClick={handleExpandClick3}
                aria-expanded={expanded3}
                aria-label="show more"
                >  <FaRegComment size="20px" /></div>
              
              

              <div className="px-2">
                {" "}
                <FiSend size="25px" />
              </div>
              <ExpandMore
                expand={expanded3}
                onClick={handleExpandClick3}
                aria-expanded={expanded3}
                aria-label="show more"
              >
                <CgBookmark size="30px" />
              </ExpandMore>
            </CardActions>
            <p className="text-xl font-semibold ...">
              Wish listed by iamsrk and {bluecount}
            </p>
            <Collapse in={expanded3} timeout="auto" unmountOnExit>
              <InstaFeeds />
            </Collapse>
          </Card>
        </div>
        <div>
          <Card
            sx={{ maxWidth: 345 }}
            className="border-spacing-4 shadow-2xl p-2 m-5 rounded-xl border ..."
          >
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: "#8bc34a" }} aria-label="recipe">
                  R
                </Avatar>
              }
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title="Noah Daniel Elizabeth"
              subheader="julay 14, 2020"
            />
            <Image
              src={girlWhiteshirt}
              alt="Picture of the author"
              width={330}
              height={200}
            />
            <CardContent>
              <p className=" text-2xl font-Kalam font-semibold ...">
                White Shirt{" "}
              </p>
              <div className="flex text-2xl">
                <BiRupee />
                <p>799</p>
              </div>
              <button
                className="button w-full "
                onClick={() => {
                  checkout({
                    lineItems: [
                      {
                        price: "price_1MJH7YSIUtlkQfBLFF7qEscE",
                        quantity: 1,
                      },
                    ],
                  });
                }}
              >
                {" "}
                buy now
              </button>
            </CardContent>

            <CardActions disableSpacing>
              <div
                className=" px-2"
                onClick={() => setWhiteCount(whitecount + 1)}
              >
                <Popup
                  trigger={<Icon name="heart" color="red" size="large" />}
                  content="Add to wish list"
                />
              </div>

              <FaRegComment
                expand={expanded}
                onClick={handleExpandClick}
                aria-expanded={expanded1}
                aria-label="show more"
                size="20px"
              />

              <div className="px-2">
                {" "}
                <FiSend size="25px" />
              </div>

              <ExpandMore
                expand={expanded}
                onClick={handleExpandClick}
                aria-expanded={expanded1}
                aria-label="show more"
              >
                <CgBookmark size="30px" />
              </ExpandMore>
            </CardActions>
            <div className="text-xl font-semibold ...">
              Wish listed by nintendo and {whitecount}
            </div>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <InstaFeeds />
            </Collapse>
          </Card>
        </div>
      </div>
    </Fragment>
  );
}
