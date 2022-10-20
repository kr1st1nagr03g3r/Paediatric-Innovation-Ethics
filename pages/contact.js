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
          <h3 sx={{ color: 'red' }}>
            Ex veniam nostrud sit amet eiusmod eu labore eu minim nisi
            adipisicing aliquip irure. Deserunt voluptate proident enim ex esse
            amet dolor esse exercitation. In pariatur excepteur consectetur est
            excepteur in laboris ex duis consectetur adipisicing. Quis aliquip
            qui labore nisi nisi officia deserunt. Eu commodo consequat
            voluptate dolor incididunt Lorem id aliquip pariatur commodo dolore
            officia dolore cupidatat.
          </h3>
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
                  Is a Postdoctoral Researcher in the Department of Social
                  Studies of Medicine at McGill University. She is interested in
                  the economic and financial aspects of pharmaceutical and
                  biotech innovation. Her research focuses broadly on R&D
                  financing and modeling, risk capital management, new business
                  ventures, research commercialization, open innovation,
                  intellectual property and IP valuation. She holds a PhD in
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
                Is a Postdoctoral Researcher in the Department of Social Studies
                of Medicine at McGill University. Her past and current projects
                focus on knowledge production and implementation in the
                biomedical sciences. This includes empirical projects on
                neuroscience, epigenetics, precision and genomic medicine, the
                return of genetic test results, and palliative and end of life
                care. She holds a PhD in Science & Technology Studies, Cornell
                University.
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
