import * as React from 'react'
import { styled } from '@mui/material/styles'
import styles from '../../styles/Research.module.css'
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip'
import { Box, Button, Container, ListItem, ListItemText } from '@mui/material'
import Images from '../../public/images/research/index.js'
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

export default function Tooltip08() {
  return (
    <>
      <style jsx>{`
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
              <h3 className="bold tooltipTitle">Academic Medical Centers</h3>
              <p className="black fade">
                Human trials are typically undertaken at hospitals in research
                centers. Although clinical trials are considered primarily
                research and conducted by researchers, they are dependent upon
                hospital resources and infrastructure, such as nursing support,
                pharmacy support, and clinic space. Studies are sometimes
                investigator-initiated but can often supported or sponsored by
                industry partners.
              </p>

              <Button
                variant="contained"
                href="/model-overview/clinical-trials"
              >
                Learn More
              </Button>
            </Box>
          </>
        }
      >
        <Container maxWidth={false} className={styles.colourLegend}>
          <Box className={styles.colours}>
            <span className={styles.tabItem}>
              <p className="purple tooltipSize ">
                <Image
                  height={90}
                  width={100}
                  src={Images.CTAMC}
                  alt="orange University"
                />
              </p>
            </span>
          </Box>
        </Container>
      </HtmlTooltip>
    </>
  )
}
