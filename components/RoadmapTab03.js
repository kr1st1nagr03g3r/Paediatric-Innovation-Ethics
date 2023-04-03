import * as React from "react";
import styles from "../styles/Research.module.css";
import Images from "../public/images/research/index";
import Image from "next/image";
import { Box, Button, Container } from "@mui/material";
import ImageTest from "./Barriers";
import Barriers from "./Barriers";
import Link from "next/link";

// const HtmlTooltip = styled(({ className, ...props }) => (
//   <Tooltip {...props} classes={{ popper: className }} />
// ))(({ theme }) => ({
//   [`& .${tooltipClasses.tooltip}`]: {
//     backgroundColor: '#f5f5f9',
//     color: 'rgba(0, 0, 0, 0.87)',
//     maxWidth: 600,
//     border: '1px solid #dadde9',
//     fontFamily: 'Nunito',
//     padding: '30px',
//     borderRadius: '25px',
//   },
// }))

export default function RoadmapTab02() {
return (
<>
<style jsx>{`
.relative {
position: relative;
display: block;
}
.absolute {
position: absolute;
}

span.hoverInfo {
display: flex;
}
span.centerButton {
display: none !important;
}

.relative {
position: relative;
}

.absolute {
position: absolute;
}

.redLink {
height: 100px;
width: 100%;
z-index: 1000;
top: 0;
left: 0;
position: absolute;
}

.gradientLink {
height: 100px;
width: 100%;
z-index: 1000;
top: 110px;
left: 0;
position: absolute;
}
.purpleLink {
height: 100px;
width: 100%;
z-index: 1000;
top: 508px;
left: 0;
position: absolute;
}

.greenLink {
height: 200px;
width: 100%;
z-index: 1000;
top: 667px;
left: 0;
position: absolute;
}

.blueLink {
height: 200px;
width: 200px;
z-index: 1000;
top: 214px;
left: 39px;
position: absolute;
}

.yellowLink {
  height: 177px;
  width: 200px;
  z-index: 1000;
  top: 300px;
  left: 420px;
  position: absolute;
}

.orangeLink {
height: 177px;
width: 200px;
z-index: 1000;
top: 300px;
left:  689px;
position: absolute;
}

@media only screen and (max-width: 1024px) {
.yellowLink {
height: 139px;
width: 200px;
top: 216px;
left: 254px;
}

.orangeLink {
height: 177px;
width: 200px;
top: 211px;
left: 529px;
}

.greenLink {
top: 543px;
}
}





@media only screen and (max-width: 768px) {
.redLink {
height: 58px;
}

.gradientLink {
height: 100px;
width: 80%;
z-index: 1000;
top: 62px;
right: 0;
position: absolute;
left: unset;
}

.purpleLink {
top: 248px;
}

.blueLink {
height: 100px;
width: 100px;
z-index: 1000;
top: 128px;
left: 39px;
}

.yellowLink {
height: 123px;
width: 100px;
top: 126px;
left: 205px;
}

.orangeLink {
height: 100px;
width: 100px;
top: 135px;
left: 384px;
}

.greenLink {
height: 161px;
width: 100%;
z-index: 1000;
top: 341px;
left: 0;
position: absolute;
}
}

@media only screen and (max-width: 425px) {
  .orangeLink, .purpleLink, .gradientLink, .blueLink, .greenLink, .yellowLink {
   width: 0px !Important;
  }
  .redLink {
    height: 230px:
  }
}


@media only screen and (max-width: 1200px) {
span.hoverInfo {
display: none !important;
}
span.centerButton.center {
padding: 20px 0px;
display: flex !important;
}
}
}
`}</style>
      <div>
        <Container maxWidth="lg">
          <p>
            The buildings along the road represent the institutional
            stakeholders involved in the development and commercialization of
            new drugs.
          </p>
          <span className="hoverInfo center">
            <p>Click on these items to learn more.</p>
          </span>
          <div className="relative">
            <div className="relative">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/buildingsInstitutions.png" alt="" width="100%"></img>
              <Link passHref href="/model-overview/drug-discovery">
                <div className="redLink cursorPointer"></div>
              </Link>
              <Link passHref href="/model-overview/drug-discovery-pre-clinical">
                <div className="gradientLink cursorPointer"></div>
              </Link>
              <Link passHref href="/model-overview/clinical-trials">
                <div className="purpleLink cursorPointer"></div>
              </Link>

              <Link passHref href="/model-overview/ind">
                <div className="blueLink cursorPointer"></div>
              </Link>
              <Link passHref href="/model-overview/pre-clinical">
                <div className="yellowLink cursorPointer"></div>
              </Link>
              <Link passHref href="/model-overview/nda">
                <div className="orangeLink cursorPointer"></div>
              </Link>

              <Link passHref href="/model-overview/manufacturing-distributing">
                <div className="greenLink cursorPointer"></div>
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
