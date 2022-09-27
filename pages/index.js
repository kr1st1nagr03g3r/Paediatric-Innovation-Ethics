import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Navigation from '../components/Navigation'
import Image from 'next/image'
import Images from '../public/images/home/index'
import Footer from '../components/Footer'
import Container from '@mui/material/Container'
import { Box } from '@mui/system'


export default function Home() {
  return (
    <>
      <style jsx>{`
  h2, h3, p {
color: ghostwhite;
  }
    `}</style>

      <div className={styles.container}>
        <Head>
          <title>PBT - Paediatric Brain Tumors</title>
          <meta name="This work models the hypothetical roadmap of pharmaceutical innovation in pediatric neuro-oncology." content="PBT" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Navigation />

        <Container>
          <h3>
            This work models the hypothetical roadmap of pharmaceutical innovation in pediatric neuro-oncology. The roadmap presents the social, ethical, economic, and legal barriers to and facilitators of innovation in this sector, based on extensive in-depth qualitative and ethnographic research.
          </h3>
          <Box className="center">
            <Image src={Images.schoolroom} height="180" width="960" alt="children playing and painting with their teacher" />
          </Box>
          <div className="mobile image p-[60px]">
            <Image src={Images.girlPlaying} height="700" width="960" alt="children playing and painting with their teacher" />
          </div>

          <h4 className="white">Project Background</h4>
          <p>Pediatric brain tumours (PBT) are the leading cause of cancer-related death in children under the age of 20. Treatments are often ineffective and have significant effects on quality of life. New “precision medicine” treatments using genomic and molecular analyses have a great deal of potential, but there are barriers in bringing targeted treatments to pediatric populations. </p>

          <Box className="center">
            <Image src={Images.lab} width={800} height={800} alt="a lab researching paediatric brain tumors" />
          </Box>
          <p>In this study, we gathered data about the social, ethical, economic, and legal challenges of researching and developing new pharmaceutical treatments for pediatric brain tumours. Our aim was to identify and understand the barriers and facilitators to the implementation of safer and more effective treatments, facilitate communication across stakeholder groups, and highlight potential interventions.  </p>
          <Box>
            <Image src={Images.dna} alt="a lab researching paediatric brain tumors" />
          </Box>
        </Container>
        <Footer />
      </div>
    </>

  )
}



