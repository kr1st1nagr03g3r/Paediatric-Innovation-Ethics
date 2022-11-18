import Container from '@mui/material/Container'

import React from 'react'
import Navigation from '../components/Navigation'
import Image from 'next/image'

import Button from '@mui/material/Button'
import Footer from '../components/Footer'
import Images from '../public/images/index/index.js'

export default function Contact() {
  return (
    <>
      <style jsx>{`
        .center {
          text-align: center;
        }
        .half {
          width: 50%;
        }
        .textLeft {
          padding-right: 30px;
        }
        .centerButton {
          padding-top: 60px;
          display: flex;
          flex-direction: row;
          justify-content: center;
          margin: 0 auto;
        }
        .imageCenter {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
        }
        @media only screen and (max-width: 1200px) {
          .half {
            width: 100%;
          }
        }
      `}</style>

      <Navigation />
      {/* JENNIFER */}
      <Container maxWidth={false} disableGutters={true}>
        <Container maxWidth="lg" sx={{ paddingBottom: '60px' }}>
          <h4 className="center">Jennifer Fishman, PhD</h4>
          <Container
            sx={{
              background: 'inherit',
              ContainerShadow: 'none',
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              flexDirection: {
                xs: 'column',
                lg: 'row',
              },
            }}
          >
            <div className="half textLeft">
              <p>
                Is a sociologist of gender, science, technology, and medicine.
                She uses empirical qualitative methods to describe and analyze
                the emergence of new medical knowledge and technologies, from
                the early stages of development to their integration into
                clinical practice and dissemination to clinicians and patients.
                Often referred to as “empirical ethics,” she analyzes the oft
                unexamined and presumptive ethics and (gendered) values within
                new scientific enterprises and how these impact re search
                trajectories, technological diffusion and commercialization, and
                ultimately patients consumers. She holds a PhD in Sociology from
                the University of California, San Francisco.
              </p>
            </div>
            <div className="half imageCenter">
              <span>
                <Image
                  src={Images.Jennifer}
                  width={400}
                  height={400}
                  alt="illustration of Jennifer Fishman"
                />
              </span>
            </div>
          </Container>
          <div className="centerButton">
            <Button href="mailto:jennifer.fishman@mcgill.ca">Contact</Button>
          </div>
        </Container>

        {/* PEGGY */}

        <Container
          maxWidth
          disableGutters={true}
          sx={{ background: '#f8f8ff1a', padding: '60px 0px' }}
        >
          <Container maxWidth="lg">
            <h4 className="center">Peggy Chiappetta, PhD</h4>
            <Container
              sx={{
                background: 'inherit',
                ContainerShadow: 'none',
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                flexDirection: {
                  xs: 'column',
                  lg: 'row',
                },
              }}
            >
              <div className="half imageCenter">
                <span>
                  <Image
                    src={Images.Peggy}
                    width={400}
                    height={400}
                    alt="illustration of Jennifer Fishman"
                  />
                </span>
              </div>
              <div className="half textLeft">
                <p>
                  Peggy Chiappetta is a researcher focused on the economic and
                  financial aspects of pharmaceutical and biotech innovation.
                  Her interests extend broadly to R&D financing and modeling,
                  new business development, technology transfer and research
                  commercialization, and IP valuation. She holds a PhD in
                  Science and Technology Studies from York University and an MA
                  in Science and Technology Studies from the University of
                  British Columbia.
                </p>
              </div>
              <div className="centerButton">
                <Button href="mailto:margaret.chiappetta@mcgill.ca">
                  Contact
                </Button>
              </div>
            </Container>
          </Container>
        </Container>
        {/* KASIA */}
        <Container maxWidth="lg">
          <h4 className="center">Kasia Tolwinski, PhD</h4>
          <Container
            sx={{
              background: 'inherit',
              ContainerShadow: 'none',
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              flexDirection: {
                xs: 'column',
                lg: 'row',
              },
            }}
          >
            <div className="half textLeft">
              <p>
                Kasia Tolwinski is a researcher and policy analyst specializing
                in the sociology of science, technology, and medicine. She holds
                a PhD in Science & Technology Studies from Cornell University.
                She conducts research on knowledge production and science-based
                policy in the biomedical and environmental sciences. This
                includes projects on the social and ethical implications of
                experimental pediatric brain tumour research, the neuroscience
                of poverty, epigenetics, and renewable energy.
              </p>
            </div>
            <div className="half imageCenter">
              <span>
                <Image
                  src={Images.Kasia}
                  width={400}
                  height={400}
                  alt="illustration of Jennifer Fishman"
                />
              </span>
            </div>
          </Container>
          <div className="centerButton">
            <Button href="mailto:kasia.tolwinski@mail.mcgill.ca">
              Contact
            </Button>
          </div>
        </Container>
      </Container>
      <Footer />
    </>
  )
}
