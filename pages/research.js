/* eslint-disable @next/next/link-passhref */
import * as React from 'react';
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container'
import Button from '@mui/material/Button'
import styles from '../styles/Research.module.css'
import Image from 'next/image'
import Images from '../public/images/research/index.js'
// import Pylons from '../public/images/01drugDiscovery/shadedPylons.svg'
import Link from 'next/link';



function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (

    <>
      <style jsx>{`
p {
  font-family: 'Nunito' !important;
}

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
    top: 210px;
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

      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    </>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>

      <Navigation />
      <Container className="center">
        <h2 className="title">Model Overview</h2>

        <p className="para">Linear models of pharmaceutical innovation and commercialization are inadequate and did not capture the complexity of the data we acquired. For example, the classic “pipeline model” of drug development demonstrates the sequence of events necessary for translating basic research from “bench to bedside,” however it fails to account for the elaborate systems of communication, legal and regulatory framework, financial inputs and outputs, and scientific hurdles that shape and determine the path of innovation in this sector.
        </p>
        <p className="para">
          We use the metaphor of a roadmap to demonstrate that translational medicine occurs sequentially but not necessarily linearly. This overview of the road to pharmaceutical innovation visualizes the institutions along the route, the stakeholders moving along the road, and the roadblocks and bottlenecks that impede progress. This is an active ecosystem where the social and scientific are inherently enmeshed.
        </p>
        <Button className="button" href="/research#items">Learn More</Button>
        <br></br>
        <br></br>
      </Container>

      <h2 className="title" id="items">The Innovation Roadmap</h2>


      <Box sx={{ width: '100%', display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
        <Box sx={{ borderBottom: 0, borderColor: 'divider', }}>
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs" >
            <Tab className={styles.tabStyle} label="Roadmap" {...a11yProps(0)} />
            <Tab className={styles.tabStyle} label="Stages / Colours" {...a11yProps(1)} />
            <Tab className={styles.tabStyle} label="Barriers / Roadblocks " {...a11yProps(2)} />
            <Tab className={styles.tabStyle} label="Buildings / Institutions" {...a11yProps(3)} />
          </Tabs>
        </Box>


        <TabPanel value={value} index={0}>
          <Container>
            <p className="para">The Innovation Roadmap is a representation of how scientific research moves from “bench to bedside,” specifically in the context of developing and commercializing new drug products.
            </p>
            <p className="para">
              The Innovation Roadmap presents an alternative to the traditional drug pipeline model: it challenges the idea that scientific innovation and drug development is linear. The model allows for movement back and forth on the road, but also presents possibilities for alternative routes and travel methods to “hack” the roadmap and existing barriers to innovation.
            </p>
          </Container>
          <Container fixed className={styles.research}>
            <Box className={styles.wrapper}>
              <Image src={Images.desaturatedRoadmap} alt="green grass background for many buildings" />
            </Box>
          </Container>
        </TabPanel>

        <TabPanel value={value} index={1}>
          <Container>
            <p className="para">The colours along the road represent the stages of development that research moves through as it is refined, tested, and ultimately used to create a product for clinical use. From drug discovery through to manufacturing and distribution, each stage along the road is met with various obstacles and requires the participation of specific stakeholders.
            </p>
          </Container>
          <Container className={styles.colourLegend}>
            <Box>
              <p className="para">
                <strong>We represent these stages as follows:</strong><br></br><br></br>
              </p>
            </Box>
            <Box classname={styles.colours}>

              <p><span className="red tabItem">Red: Drug Discovery</span></p>
              {/* <p><span className="orangeGradient tabItem">Orange Gradient: Drug Discovery & Pre-Clinical</span></p> */}
              <p><span className="orange tabItem">Orange: New Drug Application (NDA)</span></p>
              <p><span className="yellow tabItem">Yellow: Pre-Clinical</span></p>
              <p><span className="green tabItem">Green: Manufacturing and Distribution</span></p>
              <p><span className="blue tabItem">Blue: Clinical</span></p>
              <p><span className="purple tabItem">Purple: Investigational New Drug Application (IND)</span></p>

            </Box>
          </Container>

          <Container fixed className={styles.research}>
            <Box className={styles.wrapper}>
              <Image src={Images.researchBackground} alt="green grass background for many buildings" />
              {/* <Image src={Pylons} alt="pylons" className="pylons" /> */}
            </Box>
          </Container>
        </TabPanel>


        <TabPanel value={value} index={2}>
          <Container fixed className={styles.research}>
            <p className="para">Barriers and roadblocks (depicted by traffic signs and obstructions) represent the challenges and obstacles that potentially hinder the development and commercialization of new drugs.They can be bottlenecks that slow movement along the “road” to a trickle, or broader, more consequential obstructions that bring movement to a grinding halt.
              <br></br>
              Hover over the buildings to learn more...</p>
            <Box className={styles.wrapper}>
              <Image src={Images.researchBackground} alt="green grass background for many buildings" />
            </Box>
          </Container>
        </TabPanel>

        <TabPanel value={value} index={3}>

          <Container fixed className={styles.research}>
            <p className="para">Barriers and roadblocks (depicted by traffic signs and obstructions) represent the challenges and obstacles that potentially hinder the development and commercialization of new drugs.They can be bottlenecks that slow movement along the “road” to a trickle, or broader, more consequential obstructions that bring movement to a grinding halt.
              <br></br>
              Hover over the buildings to learn more...</p>
            <Box className={styles.wrapper}>
              <Image src={Images.researchBackground} alt="green grass background for many buildings" />
              <table>
                <tbody>


                  {/* ROW ONE */}
                  <tr>
                    <td id="one"></td>
                    <td id="two" >

                      <span className={styles.wrapper}>

                        <Image src={Images.redTTO} alt="" />
                      </span></td>
                    <td id="three"></td>
                    <td id="four">
                      <span className={styles.wrapper}>
                        <Image src={Images.redFundingAgency} alt="" />
                      </span>
                    </td>
                    <td id="five">
                      <span className={styles.wrapper}>
                        <Image src={Images.DDPCRegAgency} alt="" />
                      </span></td>
                  </tr>

                  {/* ROW TWO */}
                  <tr>
                    <td id="six"></td>
                    <td id="seven">
                      <span className={styles.wrapper}>
                        <Image src={Images.INDRegA} alt="" />
                      </span>

                    </td>
                    <td id="eight">
                      <span className={styles.wrapper}>
                        <Image src={Images.DDPCUni} alt="" />
                      </span>
                    </td>
                    <td id="nine">

                      <span className={styles.wrapper}>
                        <Image src={Images.PCCRO} alt="" />
                      </span>
                    </td>
                    <td id="ten">

                      <span className={styles.wrapper}>
                        <Image src={Images.DDPCCRO} alt="" />
                      </span>
                    </td>
                  </tr>
                  {/* ROW THREE */}
                  <tr>
                    <td id="eleven"></td>
                    <td id="twelve">
                      <span className={styles.wrapper}>
                        <Image src={Images.CTRegA} alt="" />
                      </span>

                    </td>
                    <td id="thirteen">
                      <span className={styles.wrapper}>
                        <Image src={Images.CTIndustry} alt="" />
                      </span>
                    </td>
                    <td id="fourteen">
                      <span className={styles.wrapper}>
                        <Image src={Images.CTCRO} alt="" />
                      </span>
                    </td>
                    <td id="fifteen"></td>
                  </tr>

                  <tr>
                    <td id="sixteen"></td>
                    <td id="seventeen">
                      <span className={styles.wrapper}>
                        <Image src={Images.CTAMC} alt="" />
                      </span>
                    </td>
                    <td id="eighteen"></td>
                    <td id="nineteen"></td>
                    <td id="twenty">
                      <span className={styles.wrapper}>
                        <Image src={Images.NDAregAgency} alt="" />
                      </span>
                    </td>
                  </tr>

                  <tr>
                    <td id="twentyone">
                    </td>
                    <td id="twentytwo">
                      <span id="MandDIndustry" className={styles.wrapper}>
                        <Image src={Images.MandDIndustry} alt="" />
                      </span>
                    </td>
                    <td id="twentythree">

                      <span id="MandDInsurance" className={styles.wrapper}>
                        <Image src={Images.MandDInsurance} alt="" />
                      </span>
                    </td>
                    <td id="twentyfour">
                      <span id="MandDRegA" className={styles.wrapper}>
                        <Image src={Images.MandDRegA} alt="" />
                      </span>
                    </td>
                    <td id="twentyfive">

                    </td>
                  </tr>
                </tbody>
              </table>
            </Box>
          </Container>
        </TabPanel>

      </Box>

      <Footer />
    </>
  );
}
