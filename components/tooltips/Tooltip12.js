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

export default function Tooltip12() {
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
              <h3 className="bold tooltipTitle">Regulatory Agency</h3>
              <p className="black fade">
                At the NDA (or analogous) stage, regulatory agencies are
                responsible for reviewing all data compiled at each previous
                stage of research and development, from discovery through P3
                trials, including information related to labeling, safety,
                prescribing, and patents. Following review, a regulatory agency
                will either approve or deny the new drug application for
                marketing and distribution.
              </p>

              <Button variant="contained" href="/model-overview/nda">
                Learn More
              </Button>
            </Box>
          </>
        }
      >
        <Container maxWidth={false} className={styles.colourLegend}>
          <Box className={styles.colours}>
            <span className={styles.tabItem}>
              <p className="orange tooltipSize">
                <Image
                  height={90}
                  width={100}
                  src={Images.NDAregAgency}
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
