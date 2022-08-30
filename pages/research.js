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




function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <>

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
      </Container>



      <Container className={styles.tabs}>
        <Box id="items" sx={{ width: '100%' }}>
          <Box sx={{ borderBottom: 0, borderColor: 'divider', }}>
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs" >
              <Tab sx={{ textTransform: 'none', color: '#ffffff' }} label="Roadmap" {...a11yProps(0)} />
              <Tab sx={{ textTransform: 'none', color: '#ffffff' }} label="Roadblocks" {...a11yProps(1)} />
              <Tab sx={{ textTransform: 'none', color: '#ffffff' }} label="Item Three" {...a11yProps(2)} />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>

            <p className="para">Roads represent...

              Ullamco tempor ad excepteur Lorem consectetur ea eiusmod do. Ut quis ullamco exercitation laborum occaecat veniam incididunt. Incididunt commodo aute est nostrud excepteur enim non fugiat dolore incididunt culpa ut. Proident nulla fugiat in enim exercitation anim eiusmod duis dolor aliqua excepteur aliquip. Dolore dolor Lorem voluptate ea non nulla mollit ipsum.
              <br></br><br></br>

              <Container fixed className={styles.research}>
                <Box className={styles.wrapper}>
                  <Image src={Images.researchBackground} alt="green grass background for many buildings" />
                </Box>
              </Container>

            </p>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <p className="para">Roadblocks represent...

              Ullamco tempor ad excepteur Lorem consectetur ea eiusmod do. Ut quis ullamco exercitation laborum occaecat veniam incididunt. Incididunt commodo aute est nostrud excepteur enim non fugiat dolore incididunt culpa ut. Proident nulla fugiat in enim exercitation anim eiusmod duis dolor aliqua excepteur aliquip. Dolore dolor Lorem voluptate ea non nulla mollit ipsum.
              <br></br><br></br>

              <Container fixed className={styles.research}>
                <Box className={styles.wrapper}>
                  <Image src={Images.researchBackground} alt="green grass background for many buildings" />
                </Box>
              </Container>

            </p>
          </TabPanel>
          <TabPanel value={value} index={2}>
            Item Three
          </TabPanel>
        </Box>
      </Container>
      <Footer />
    </>
  );
}
