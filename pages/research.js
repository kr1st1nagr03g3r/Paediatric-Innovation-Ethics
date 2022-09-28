
import * as React from 'react';
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container'
import styles from '../styles/Research.module.css'
import Image from 'next/image'
import Images from '../public/images/research/index.js'
import RoadmapTab00 from '../components/RoadmapTab00'
import RoadmapTab01 from '../components/RoadmapTab01';
function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (

    <>
      <style jsx>{`

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
            <Typography component={'div'}>{children}</Typography>
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

Container.propTypes = {
  maxWidth: PropTypes.bool
}


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
      {/* <Container className="center">
        <h2 className="title">Model Overview</h2>

        <p className="para">Linear models of pharmaceutical innovation and commercialization are inadequate and did not capture the complexity of the data we acquired. For example, the classic “pipeline model” of drug development demonstrates the sequence of events necessary for translating basic research from “bench to bedside,” however it fails to account for the elaborate systems of communication, legal and regulatory framework, financial inputs and outputs, and scientific hurdles that shape and determine the path of innovation in this sector.
        </p>
        <p className="para">
          We use the metaphor of a roadmap to demonstrate that translational medicine occurs sequentially but not necessarily linearly. This overview of the road to pharmaceutical innovation visualizes the institutions along the route, the stakeholders moving along the road, and the roadblocks and bottlenecks that impede progress. This is an active ecosystem where the social and scientific are inherently enmeshed.
        </p>
      </Container> */}

      <Container maxWidth={true}
        sx={{
          backgroundColor: '#007100',
          paddingTop: '30px',
        }}
      >
        <h2 className="center">The Innovation Roadmap</h2>


        {/* //@ TABS BEGIN */}
        <Box sx={{
          width: '100%',
          minHeight: '500px',
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column'
        }}>
          <Box sx={{ borderBottom: 0, borderColor: 'divider', }}>
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs" >
              <Tab className={styles.tabStyle} label="Roadmap" {...a11yProps(0)} />
              <Tab className={styles.tabStyle} label="Stages and Colours" {...a11yProps(1)} />
              <Tab className={styles.tabStyle} label="Barriers and Roadblocks " {...a11yProps(2)} />
              <Tab className={styles.tabStyle} label="Buildings and Institutions" {...a11yProps(3)} />
            </Tabs>
          </Box>

          {/* //@ INDEX 00 */}
          <TabPanel value={value} index={0} id="tab">
            <RoadmapTab00 />
          </TabPanel>

          {/* //@ INDEX 01 */}
          <TabPanel value={value} index={1}>
            <RoadmapTab01 />
          </TabPanel>


          {/* //@ INDEX 02 */}
          <TabPanel value={value} index={2}>
            <Container className={styles.research}>
              <p>Barriers and roadblocks (depicted by traffic signs and obstructions) represent the challenges and obstacles that potentially hinder the development and commercialization of new drugs.They can be bottlenecks that slow movement along the “road” to a trickle, or broader, more consequential obstructions that bring movement to a grinding halt.
                <br></br>
                Hover over the buildings to learn more...</p>
              <Box className={styles.wrapper}>
                <Image src={Images.researchBackground} alt="green grass background for many buildings" />
              </Box>
            </Container>
          </TabPanel>

          {/* //@ INDEX 04 */}
          <TabPanel value={value} index={3}>

            <Container className={styles.research}>
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
      </Container>
      <Footer />
    </>
  );
}
