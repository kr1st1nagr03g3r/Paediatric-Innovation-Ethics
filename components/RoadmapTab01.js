import * as React from 'react'
import styles from '../styles/Research.module.css'
import Images from '../public/images/research'
import Image from 'next/image'
import Container from '@mui/material/Container'
import TooltipRed from './tooltips/TooltipRed'
import TooltipOrangeG from './tooltips/TooltipOrangeG'

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

export default function RoadmapTab01() {
  return (
    <>
      <Container className={styles.roadmapInfo}>
        <p>
          The colours along the road represent the stages of development that
          research moves through as it is refined, tested, and ultimately used
          to create a product for clinical use. From drug discovery through to
          manufacturing and distribution, each stage along the road is met with
          various obstacles and requires the participation of specific
          stakeholders. <strong>We represent these stages as follows:</strong>
        </p>
      </Container>

      {/* //# Tooltips */}

      <TooltipRed />
      <TooltipOrangeG />

      <Container Container className={styles.research}>
        <Container>
          <Image
            className={styles.rainbow}
            src={Images.rainbowRoadTest}
            alt="green grass background for many buildings"
          />
        </Container>
      </Container>
    </>
  )
}
{
  /* <span className={styles.tabItem}>
              <p className="orangeGradient">
                Drug Discovery<br></br>& Pre-Clinical
              </p>
            </span>
            <span className={styles.tabItem}>
              <p className="orange">New Drug Application (NDA)</p>
            </span>
            <span className={styles.tabItem}>
              <p className="yellow">Pre-Clinical</p>
            </span>
            <span className={styles.tabItem}>
              <p className="green">
                Manufacturing<br></br>& Distribution
              </p>
            </span>
            <span className={styles.tabItem}>
              <p className="blue">Clinical</p>
            </span>
            <span className={styles.tabItem}>
              <p className="purple">
                Investigational<br></br>New Drug Application (IND)
              </p>
            </span> */
}
