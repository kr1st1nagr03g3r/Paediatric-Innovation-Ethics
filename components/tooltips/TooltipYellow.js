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

export default function TooltipYellow() {
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
              <h3 className="bold tooltipTitle">Pre-Clinical</h3>
              <p className="black fade">
                The pre-clinical stage evaluates the drug&apos;s safety and
                efficacy in non-human animals and extrapolates the results to
                prospective human outcomes. At this stage, in-vivo studies are
                conducted to understand optimal dosage, rates of metabolism and
                elimination, and the half-life of the drug.
              </p>

              <Button
                color="primary"
                variant="contained"
                href="/model-overview/pre-clinical"
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
              <p className="yellow">Yellow</p>
            </span>
          </Box>
        </Container>
      </HtmlTooltip>
    </>
  )
}
