import * as React from 'react'
import { styled } from '@mui/material/styles'
import styles from '../../styles/Research.module.css'
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip'
import { Box, Button, Container, ListItem, ListItemText } from '@mui/material'
import Image from 'next/image'

const HtmlTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: '#f5f5f9',
    color: 'rgba(0, 0, 0, 0.87)',
    maxWidth: 600,
    border: '1px solid #dadde9',
    fontFamily: 'Nunito',
    padding: '30px',
    borderRadius: '25px',
  },
}))

const Imagecss = {
  width: '100%',
}

export default function Giraffe(props) {
  return (
    <>
      <style jsx>{`
        .tt01 {
          padding: 20px 10px 10px 10px;
        }

        .tt02 {
          padding: 10px 0px 0px 30px;
        }

        .tt03 {
          padding: 20px 10px 10px 10px;
        }
        .tt04 {
          padding: 20px 10px 10px 10px;
        }
         {
          /* RED DRUG DISCOVERY HURDLES */
        }
        .tt01,
        .tt02,
        .tt03,
        .tt04 {
          border: 3px solid red;
          width: 100px;
          height: 100px;
          background: #696969a8;
          border-radius: 25px;
        }
        /* ORANGE GRADIENT DRUG DISCOVERY PRE CLINICAL HURDLES */

        .tt05 {
          padding: 30px 10px 10px 10px;
        }
        .tt06 {
          padding: 20px 10px 10px 10px;
        }
        .tt07 {
          padding: 10px 0px 0px 30px;
        }
        .tt08 {
          padding: 20px 10px 10px 10px;
        }
        .tt09 {
          padding: 20px 10px 10px 10px;
        }

        .tt05,
        .tt06,
        .tt07,
        .tt08,
        .tt09 {
          border-radius: 25px;
          width: 100px;
          height: 100px;
          background: #696969a8;
          position: relative;
        }

        .tt05::before,
        .tt06::before,
        .tt07::before,
        .tt08::before,
        .tt09::before {
          content: '';
          position: absolute;

          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          border-radius: 25px;
          border: 3px solid transparent;
          background: linear-gradient(90deg, red, yellow) border-box;
          -webkit-mask: linear-gradient(#fff 0 0) padding-box,
            linear-gradient(#fff 0 0);
          -webkit-mask-composite: destination-out;
          mask-composite: exclude;
        }

        /* YELLOW PRE CLINICAL HURDLES */

        .tt10 {
          padding: 10px 0px 0px 30px;
        }

        .tt11 {
          padding: 30px 10px 10px 10px;
        }

        .tt10,
        .tt11 .tt10,
        .tt11 {
          border: 3px solid yellow;
          border-radius: 25px;
          width: 100px;
          height: 100px;
          background: #696969a8;
          position: relative;
        }

        .tt12 {
          padding: 10px 0px 0px 30px;
        }

        .tt12 {
          border: 3px solid #3fb5dc;
          border-radius: 25px;
          width: 100px;
          height: 100px;
          background: #696969a8;
          position: relative;
        }

        .tt13 {
          padding: 20px 10px 10px 10px;
        }

        .tt14 {
          padding: 20px 10px 10px 10px;
        }

        .tt15 {
          padding: 10px 0px 0px 30px;
        }

        .tt16 {
          padding: 15px 0px 0px 20px;
        }

        .tt17 {
          padding: 20px 10px 10px 10px;
        }

        .tt13,
        .tt14,
        .tt15,
        .tt16,
        .tt17 {
          border: 3px solid #732db5;
          border-radius: 25px;
          width: 100px;
          height: 100px;
          background: #696969a8;
          position: relative;
        }

        .tt18 {
          padding: 10px 0px 0px 30px;
        }

        .tt18 {
          border: 3px solid orange;
          border-radius: 25px;
          width: 100px;
          height: 100px;
          background: #696969a8;
          position: relative;
        }

        .tt19 {
          padding: 25px 10px 10px 10px;
        }

        .tt20 {
          padding: 10px 0px 0px 30px;
        }

        .tt21 {
          padding: 20px 10px 10px 10px;
        }

        .tt19,
        .tt20,
        .tt21 {
          border: 3px solid #67dd09;
          border-radius: 25px;
          width: 100px;
          height: 100px;
          background: #696969a8;
          position: relative;
        }

        .red,
        .orangeGradient,
        .orange,
        .yellow,
        .green,
        .blue,
        .purple {
          padding: 15px;
          -webkit-border-radius: 25px;
          -moz-border-radius: 25px;
          border-radius: 25px;
          -webkit-box-shadow: #2f2b2b 3px 3px 12px;
          -moz-box-shadow: #2f2b2b 3px 3px 12px;
          box-shadow: #2f2b2b 3px 3px 12px;
        }
        .tooltipTitle {
          margin-top: 15px !important;
        }
      `}</style>
      <HtmlTooltip
        placement="top"
        followCursor={false}
        title={
          <>
            <Box>
              <h3 className="bold">{props.barriers.title}</h3>
              <p className="black fade">{props.barriers.description}</p>

              <Button variant="contained" href={props.barriers.link}>
                Learn More
              </Button>
            </Box>
          </>
        }
      >
        <Container maxWidth className={styles.colourLegend}>
          <Box className={styles.colours}>
            <span className={styles.tabItem}>
              <p className={` tooltipOpacity ${props.barriers.tooltipColour}`}>
                <Image
                  style={Imagecss}
                  src={props.barriers.icon}
                  alt={props.barriers.alt}
                />
              </p>
            </span>
          </Box>
        </Container>
      </HtmlTooltip>
    </>
  )
}
