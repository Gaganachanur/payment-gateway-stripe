import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea, Button } from "@mui/material";
import Image from "next/image";
import { Fragment } from "react";
import { Reveal } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

import womenPant2 from "../assets/womenPant2.jpg";
import MenTop2 from "../assets/MenTop2.jpg";
import menTop4 from "../assets/menTop4.jpg";
import WomenTop2 from "../assets/WomenTop2.jpg";
import girlPant2 from "../assets/girlPant2.jpg";
import girlTop from "../assets/girlTop.jpg";
import menPant2 from "../assets/menPant2.jpg";
import menPant5 from "../assets/menPant5.jpg";

export default function DemoCards() {
  return (
    <Fragment>
      <div class="lg:grid grid-rows-3 grid-flow-col gap-4 flex items-center justify-center blob  sm:flex flex-wrap p-10 bg-gray-50 ">
        <div class="row-span-3 col-span-4 ...">
        <div className=" flex flex-wrap justify-center">
          <p className="text-6xl  text-black font-Kalam font-semibold"> Grab Your Fashion Now</p>
        </div>
        <p className="text-3xl p-3 text-black font-Kalam font-semibold"> fashion for genZ..</p>
        <button className="bg-black text-white text-xl px-9 py-5 rounded-lg ... transform transition-colors hover:scale-105 hover:shadow-2xl  "> Shop Now</button>
        </div>
      
        <div class="row-span-3 col-span-2 ... flex flex-wrap ">
          
        <div className=" border-spacing-4 shadow-xl p-2 m-5 rounded-xl border ... hover:shadow-2xl transform transition-all hover:translate-x-10  ">
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <Reveal animated="move">
                <Reveal.Content visible>
                  <Image
                    src={MenTop2}
                    alt="Picture of the author"
                    width={240}
                    height={200}
                  />
                </Reveal.Content>
                <Reveal.Content hidden>
                  <Image
                    src={menTop4}
                    alt="Picture of the author"
                    width={240}
                    height={200}
                  />
                </Reveal.Content>
              </Reveal>
              <CardContent>
                <Typography
                  className="font-Kalam  text-2xl font-semibold flex justify-center"
                  gutterBottom
                  variant="h5"
                  component="div"
                >
                  Mens Top
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
        <div className=" border-spacing-4 shadow-xl p-2 m-5 rounded-xl border ...  hover:shadow-2xl transform transition-all hover:translate-y-10 ">
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <Reveal animated="move up">
                <Reveal.Content visible>
                  <Image
                    src={womenPant2}
                    alt="Picture of the author"
                    width={240}
                    height={200}
                  />
                </Reveal.Content>
                <Reveal.Content hidden>
                  <Image
                    src={girlPant2}
                    alt="Picture of the author"
                    width={240}
                    height={200}
                  />
                </Reveal.Content>
              </Reveal>
              <CardContent>
                <Typography
                  className="font-Kalam text-2xl font-semibold flex justify-center"
                  gutterBottom
                  variant="h5"
                  component="div"
                >
                  Women Pants
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
        <div className="border-spacing-4 shadow-xl p-2 m-5 rounded-xl border ...  hover:shadow-2xl transform transition-all hover:scale-110">
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <Reveal animated="move down">
                <Reveal.Content visible>
                  <Image
                    src={girlTop}
                    alt="Picture of the author"
                    width={240}
                    height={200}
                  />
                </Reveal.Content>
                <Reveal.Content hidden>
                  <Image
                    src={WomenTop2}
                    alt="Picture of the author"
                    width={240}
                    height={200}
                  />
                </Reveal.Content>
              </Reveal>
              <CardContent>
                <Typography
                  className="font-Kalam text-2xl font-semibold flex justify-center"
                  gutterBottom
                  variant="h5"
                  component="div"
                >
                  Women Tops
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
        {/* <div className="border-spacing-4 shadow-xl p-2 m-5 rounded-xl border ...  hover:shadow-2xl">
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <Reveal animated="move right">
                <Reveal.Content visible>
                  <Image
                    src={menPant2}
                    alt="Picture of the author"
                    width={240}
                    height={200}
                  />
                </Reveal.Content>
                <Reveal.Content hidden>
                  <Image
                    src={menPant5}
                    alt="Picture of the author"
                    width={240}
                    height={200}
                  />
                </Reveal.Content>
              </Reveal>
              <CardContent>
                <Typography
                  className="font-Kalam text-2xl font-semibold flex justify-center"
                  gutterBottom
                  variant="h5"
                  component="div"
                >
                  Mens Pants
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div> */}
        </div>
      </div>
    </Fragment>
  );
}
