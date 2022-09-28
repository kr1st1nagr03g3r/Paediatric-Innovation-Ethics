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

export default function TooltipRed() {
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
              <h3 className="bold tooltipTitle">Drug Discovery</h3>
              <p className="black fade">
                Drug discovery is the first phase of pharmaceutical R&D. At this
                stage, therapeutic targets and their molecular mechanisms are
                identified, isolated, and characterized. If a target is
                demonstrated to have a functional role in the disease, a
                chemical lead with an affinity and selectivity for the target is
                identified and optimized.
              </p>

              <Button
                color="primary"
                variant="contained"
                href="/model-overview/drug-discovery"
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
              <p className="red">Red</p>
            </span>
          </Box>
        </Container>
      </HtmlTooltip>
    </>
  )
}
