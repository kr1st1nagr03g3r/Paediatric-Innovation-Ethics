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

        .tt01,
        .tt02 {
          border: 3px solid red;
          width: 100px;
          height: 100px;
          background: #696969a8;
          border-radius: 25px;
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
              <h3 className="bold tooltipTip">{props.barriers.title}</h3>
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
              <p className={` tooltipSize ${props.barriers.tooltipColour}`}>
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
