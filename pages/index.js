import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Navigation from '../components/Navigation'
import 'tailwindcss/tailwind.css'
import Image from 'next/image'
import Footer from '../components/Footer'


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>PBT - Paediatric Brain Tumors</title>
        <meta name="This work models the hypothetical roadmap of pharmaceutical innovation in pediatric neuro-oncology." content="PBT" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navigation />

      <div className="containerGlobal">
        <h2 className="title">
          This work models the hypothetical roadmap of pharmaceutical innovation in pediatric neuro-oncology. The roadmap presents the social, ethical, economic, and legal barriers to and facilitators of innovation in this sector, based on extensive in-depth qualitative and ethnographic research.
        </h2>
        <div className="pt-[60px]">
          <Image src="https://raw.githubusercontent.com/kr1st1nagr03g3r/Let-s-Make-Burgers/24570b675465c22719bf7003bef1556e254873ff/public/schoolroom.svg" height="180" width="960" alt="children playing and painting with their teacher" require={true} />
        </div>
        <h3 className="subtitle">Project Background</h3>
        <p className="para">Pediatric brain tumours (PBT) are the leading cause of cancer-related death in children under the age of 20. Treatments are often ineffective and have significant effects on quality of life. New “precision medicine” treatments using genomic and molecular analyses have a great deal of potential, but there are barriers in bringing targeted treatments to pediatric populations. </p>
        <div className="p-[60px]">
          <Image src="https://raw.githubusercontent.com/kr1st1nagr03g3r/image-dump/a1e8289b7b12dc784962376d27993622a5bddfa9/lab.svg" height="400" width="960" alt="a lab researching paediatric brain tumors" require={true} />
        </div>
        <p className="para">In this study, we gathered data about the social, ethical, economic, and legal challenges of researching and developing new pharmaceutical treatments for pediatric brain tumours. Our aim was to identify and understand the barriers and facilitators to the implementation of safer and more effective treatments, facilitate communication across stakeholder groups, and highlight potential interventions.  </p>
        <div className="pt-[60px]">
          <Image src="https://raw.githubusercontent.com/kr1st1nagr03g3r/image-dump/a1e8289b7b12dc784962376d27993622a5bddfa9/dna.svg" height="180" width="960" alt="a lab researching paediatric brain tumors" require={true} />
        </div>
      </div>
      <Footer />
</div>
   

  )
}



