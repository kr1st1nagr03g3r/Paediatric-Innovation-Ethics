import React from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import Image from 'next/image'
import Images from '../public/images/research/index.js'
import styles from "../styles/Research.module.css"
import Box from '@mui/system/Box'
import Container from '@mui/system/Container'
import ButtonGroup from '../components/ButtonGroup'



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
        <Container><ButtonGroup>


        </ButtonGroup>
          <p className="text-white text-center">        Minim nostrud non dolor do occaecat est minim esse aute ex eiusmod. Duis elit quis labore do enim fugiat duis. Ea irure occaecat dolore do ut cupidatat pariatur occaecat cupidatat anim proident eiusmod sint esse.
            Cupidatat est amet dolor eu dolor eiusmod ullamco nisi quis occaecat. Veniam mollit tempor ut consectetur qui deserunt proident eiusmod magna fugiat dolore. Sit in eiusmod voluptate eiusmod aliquip ad sint voluptate. Adipisicing est do ut laboris elit qui duis non.</p>

        </Container>



        <Container fixed className={styles.research}>
          <Box className={styles.wrapper}>
            <Image src={Images.researchBackground} alt="green grass background for many buildings" />
            <table>
              <tbody>
                <style jsx>{`
td#one {
width: 168px;
}

td#two {
  margin-top: 54px;
}

td#three {
  width: 113px;
}

td#four {
    margin-right: 15px;
    margin-bottom: 85px;
}

td#five {
margin-top: 70px;
}

td#seven {
  margin-right: 601px;
}

td#eight {
  position: absolute;
      top: 240px;
}

td#nine {
  position: absolute;
 top: 295px;
   right: 126px;
}

td#ten {
      position: absolute;
    top: 220px;
    right: -29px;
}

td#eleven {
  margin-top: 129px;
}

td#fourteen {
margin-left: 53px;
  margin-top: 190px;
}

td#sixteen {
width: 390px;
}

td#eighteen {
  width: 0px;
}

td#nineteen {
  width: 0px;
}

td#twenty {
margin-left: 163px;
}

td#twentyone {
  width: 189px;
}

td#twentytwo {
      margin-top: -256px;
      margin-right: -200px;
}

td#twentythree {
  padding-top: 290px;
}

td#twentyfour {
  margin-top: 240px;
  margin-left: 252px;
}
  }
      `}</style>

                {/* ROW ONE */}
                <tr>
                  <td id="one"></td>
                  <td id="two" >

                    <div className={styles.wrapper}>

                      <Image src={Images.redTTO} alt="" />
                    </div></td>
                  <td id="three"></td>
                  <td id="four">
                    <div className={styles.wrapper}>
                      <Image src={Images.redFundingAgency} alt="" />
                    </div>
                  </td>
                  <td id="five">
                    <div className={styles.wrapper}>
                      <Image src={Images.DDPCRegAgency} alt="" />
                    </div></td>
                </tr>

                {/* ROW TWO */}
                <tr>
                  <td id="six"></td>
                  <td id="seven">
                    <div className={styles.wrapper}>
                      <Image src={Images.INDRegA} alt="" />
                    </div>

                  </td>
                  <td id="eight">
                    <div className={styles.wrapper}>
                      <Image src={Images.DDPCUni} alt="" />
                    </div>
                  </td>
                  <td id="nine">

                    <div className={styles.wrapper}>
                      <Image src={Images.PCCRO} alt="" />
                    </div>
                  </td>
                  <td id="ten">

                    <div className={styles.wrapper}>
                      <Image src={Images.DDPCCRO} alt="" />
                    </div>
                  </td>
                </tr>
                {/* ROW THREE */}
                <tr>
                  <td id="eleven"></td>
                  <td id="twelve">
                    <div className={styles.wrapper}>
                      <Image src={Images.CTRegA} alt="" />
                    </div>

                  </td>
                  <td id="thirteen">
                    <div className={styles.wrapper}>
                      <Image src={Images.CTIndustry} alt="" />
                    </div>
                  </td>
                  <td id="fourteen">
                    <div className={styles.wrapper}>
                      <Image src={Images.CTCRO} alt="" />
                    </div>
                  </td>
                  <td id="fifteen"></td>
                </tr>



                <tr>
                  <td id="sixteen"></td>
                  <td id="seventeen">
                    <div className={styles.wrapper}>
                      <Image src={Images.CTAMC} alt="" />
                    </div>
                  </td>
                  <td id="eighteen"></td>
                  <td id="nineteen"></td>
                  <td id="twenty">
                    <div className={styles.wrapper}>
                      <Image src={Images.NDAregAgency} alt="" />
                    </div>
                  </td>
                </tr>


                <tr>
                  <td id="twentyone">

                  </td>
                  <td id="twentytwo">
                    <div id="MandDIndustry" className={styles.wrapper}>
                      <Image src={Images.MandDIndustry} alt="" />
                    </div>
                  </td>
                  <td id="twentythree">

                    <div id="MandDInsurance" className={styles.wrapper}>
                      <Image src={Images.MandDInsurance} alt="" />
                    </div>
                  </td>
                  <td id="twentyfour">
                    <div id="MandDRegA" className={styles.wrapper}>
                      <Image src={Images.MandDRegA} alt="" />
                    </div>
                  </td>
                  <td id="twentyfive">

                  </td>
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