import Head from 'next/head'
import Navigation from '../components/Navigation'
import Image from 'next/image'
import Images from '../public/images/home/index'
import Footer from '../components/Footer'
import Container from '@mui/material/Container'
import { Box } from '@mui/system'

export default function Home() {
  return (
    <>
      <div>
        <Head>
          <title>PBT - Paediatric Brain Tumors</title>
          <meta
            name="This work models the hypothetical roadmap of pharmaceutical innovation in pediatric neuro-oncology."
            content="PBT"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Navigation />

        <Container maxWidth="lg">
          <h3>
            This work models the hypothetical roadmap of pharmaceutical
            innovation in pediatric neuro-oncology. The roadmap presents the
            social, ethical, economic, and legal barriers to and facilitators of
            innovation in this sector, based on extensive in-depth qualitative
            and ethnographic research.
          </h3>
          <Box
            className="desktop"
            sx={{ display: 'flex', justifyContent: 'center' }}
          >
            <Image
              src={Images.schoolroom}
              height="180"
              width="960"
              alt="children playing and painting with their teacher"
            />
          </Box>
          <div className="mobile">
            <Image
              src={Images.girlPlaying}
              height="700"
              width="960"
              alt="children playing and painting with their teacher"
            />
          </div>

          <h4>Project Background</h4>
          <p>
            Pediatric brain tumours (PBT) are the leading cause of
            cancer-related death in children under the age of 20. Treatments are
            often ineffective and have significant effects on quality of life.
            New “precision medicine” treatments using genomic and molecular
            analyses have a great deal of potential, but there are barriers in
            bringing targeted treatments to pediatric populations.
          </p>

          <Box
            className="center"
            sx={{ display: 'flex', justifyContent: 'center' }}
          >
            <Image
              src={Images.lab}
              width={800}
              height={800}
              alt="a lab researching paediatric brain tumors"
            />
          </Box>
          <Box>
            <p>
              In this study, we gathered data about the social, ethical,
              economic, and legal challenges of researching and developing new
              pharmaceutical treatments for pediatric brain tumours. Our aim was
              to identify and understand the barriers and facilitators to the
              implementation of safer and more effective treatments, facilitate
              communication across stakeholder groups, and highlight potential
              interventions.{' '}
            </p>
          </Box>
          <Box sx={{ padding: '60px 0px' }}>
            <Image
              src={Images.dna}
              alt="a lab researching paediatric brain tumors"
            />
          </Box>
        </Container>
        <Footer />
      </div>
    </>
  )
}
