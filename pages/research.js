import * as React from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import PropTypes from 'prop-types'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import RoadmapTab00 from '../components/RoadmapTab00'
import RoadmapTab01 from '../components/RoadmapTab01'
import RoadmapTab02 from '../components/RoadmapTab02'
import RoadmapTab03 from '../components/RoadmapTab03'
function TabPanel(props) {
  const { children, value, index, ...other } = props
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
            <Typography component={'div'}>{children}</Typography>
          </Box>
        )}
      </div>
    </>
  )
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
}

Container.propTypes = {
  maxWidth: PropTypes.bool,
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  }
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <>
      <style jsx>{`
        button[aria-expanded='false'] {
          text-transform: none;
          color: ghostwhite;
          font-family: Nunito;
          font-size: 1.25rem;
        }
         {
          text-transform: none;
          color: ghostwhite;
          font-family: Nunito;
          font-size: 1.25rem;
        }
      `}</style>
      <Navigation />

      <Container
        maxWidth
        sx={{
          backgroundColor: '#007100',
          paddingTop: '30px',
        }}
      >
        <h2 className="center">The Innovation Roadmap</h2>

        {/* //@ TABS BEGIN */}
        <Box
          sx={{
            width: '100%',
            minHeight: '500px',
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
          }}
        >
          <Box sx={{ borderBottom: 0, borderColor: 'divider' }}>
            <Tabs
              textColor="inherit"
              allowScrollButtonsMobile={true}
              value={value}
              onChange={handleChange}
              aria-label="basic tabs"
              sx={{
                textTransform: 'none',
                color: 'ghostwhite',
                fontFamily: 'Nunito',
                fontSize: '1.25rem',
              }}
            >
              <Tab className="tabStyle" label="Roadmap" {...a11yProps(0)} />
              <Tab
                className="tabStyle"
                label="Stages and Colours"
                {...a11yProps(1)}
              />
              <Tab
                className="tabStyle"
                label="Barriers and Roadblocks "
                {...a11yProps(2)}
              />
              <Tab
                className="tabStyle"
                label="Buildings and Institutions"
                {...a11yProps(3)}
              />
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
            <RoadmapTab02 />
          </TabPanel>

          {/* //@ INDEX 04 */}
          <TabPanel value={value} index={3}>
            <RoadmapTab03 />
          </TabPanel>
        </Box>
      </Container>
      <Footer />
    </>
  )
}
