import React from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import Image from 'next/image'
import Images from '../public/images/research/index.js'
import styles from "../styles/Research.module.css"
import Box from '@mui/system/Box'
import Container from '@mui/system/Container'


const Research = () => {
  return (
    <>
      <Navigation />
      <Container fixed className={styles.research}>
        <h2 className="title">Model Overview</h2>


        <p className="para">Linear models of pharmaceutical innovation and commercialization are inadequate and did not capture the complexity of the data we acquired. For example, the classic “pipeline model” of drug development demonstrates the sequence of events necessary for translating basic research from “bench to bedside,” however it fails to account for the elaborate systems of communication, legal and regulatory framework, financial inputs and outputs, and scientific hurdles that shape and determine the path of innovation in this sector.
        </p>

        <p className="para">
          We use the metaphor of a roadmap to demonstrate that translational medicine occurs sequentially but not necessarily linearly. This overview of the road to pharmaceutical innovation visualizes the institutions along the route, the stakeholders moving along the road, and the roadblocks and bottlenecks that impede progress. This is an active ecosystem where the social and scientific are inherently enmeshed.
        </p>


        <Container fixed className={styles.research}>
          <Box className={styles.wrapper}>
            <Image src={Images.researchBackground} alt="green grass background for many buildings" require={true} />
            <table>
              <tbody>


                <tr>
                  <td>content</td>
                  <td>
                    <div className={styles.wrapper}>
                      <Image src={Images.redTTO} alt="" require={true} />
                    </div></td>
                  <td>content</td>
                  <td >
                    <div className={styles.wrapper}>
                      <Image src={Images.redFundingAgency} alt="" require={true} />
                    </div>
                  </td>
                  <td>
                    <div className={styles.wrapper}>
                      <Image src={Images.DDPCRegAgency} alt="" require={true} />
                    </div></td>
                </tr>


                <tr>
                  <td>content</td>
                  <td>
                    <div className={styles.wrapper}>
                      <Image src={Images.INDRegA} alt="" require={true} />
                    </div>

                  </td>
                  <td>
                    <div className={styles.wrapper}>
                      <Image src={Images.DDPCUni} alt="" require={true} />
                    </div>
                  </td>
                  <td>

                    <div className={styles.wrapper}>
                      <Image src={Images.PCCRO} alt="" require={true} />
                    </div>
                  </td>
                  <td>

                    <div className={styles.wrapper}>
                      <Image src={Images.DDPCCRO} alt="" require={true} />
                    </div>
                  </td>
                </tr>

                <tr>
                  <td>content</td>
                  <td>
                    <div className={styles.wrapper}>
                      <Image src={Images.CTRegA} alt="" require={true} />
                    </div>

                  </td>
                  <td>
                    <div className={styles.wrapper}>
                      <Image src={Images.CTIndustry} alt="" require={true} />
                    </div>
                  </td>
                  <td>
                    <div className={styles.wrapper}>
                      <Image src={Images.CTCRO} alt="" require={true} />
                    </div>
                  </td>
                  <td>content</td>
                </tr>



                <tr>
                  <td>content</td>
                  <td>
                    <div className={styles.wrapper}>
                      <Image src={Images.CTAMC} alt="" require={true} />
                    </div>
                  </td>
                  <td>content</td>
                  <td>content</td>
                  <td>content</td>
                </tr>
                <tr>
                  <td>content</td>
                  <td>content</td>
                  <td>content</td>
                  <td>content</td>
                  <td>content</td>
                </tr>
              </tbody>
            </table>




          </Box>
        </Container>








        {/* <div className="container">
          <Image src={Placeholder} alt="" />
        </div> */}
        <Footer />
      </Container>
    </>

  )
}

export default Research