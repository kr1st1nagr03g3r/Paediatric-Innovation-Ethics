import * as React from 'react'
import { styled } from '@mui/material/styles'
import styles from '../../styles/Research.module.css'
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip'

import { Box, Button, Container, ListItem, ListItemText } from '@mui/material'

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

export default function TooltipGreen() {
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
              <h3 className="bold tooltipTitle">
                Manufacturing and Distributing
              </h3>
              <p className="black fade">
                Following regulatory approval for clinical use, developers must
                then manufacture and develop the drug at commercial scale. This
                involves working out logistical issues related to product
                labeling, packaging, shipping, and storage.
              </p>

              <Button
                color="primary"
                variant="contained"
                href="/manufacturing-distributing"
              >
                Learn More
              </Button>
            </Box>
          </>
        }
      >
        <Container maxWidth={true} className={styles.colourLegend}>
          <Box className={styles.colours}>
            <span className={styles.tabItem}>
              <p className="green">Green</p>
            </span>
          </Box>
        </Container>
      </HtmlTooltip>
    </>
  )
}
