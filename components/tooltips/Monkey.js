import Container from '@mui/material/Container'
import Giraffe from './Giraffe'

export default function Monkey(props) {
  return (
    <>
      <Container sx={{ paddingTop: '100px' }}>
        <Container
          sx={{ display: 'flex', flexDirection: 'row', padding: '50px 0px' }}
        >
          <Giraffe barriers={props.giraffeOne} />
          <Giraffe barriers={props.giraffeTwo} />
          <Giraffe barriers={props.giraffeThree} />
          <Giraffe barriers={props.giraffeFour} />
          <Giraffe barriers={props.giraffeFive} />
          <Giraffe barriers={props.giraffeSix} />
          <Giraffe barriers={props.giraffeSeven} />
        </Container>
        <Container
          sx={{ display: 'flex', flexDirection: 'row', padding: '50px 0px' }}
        >
          <Giraffe barriers={props.giraffeEight} />
          <Giraffe barriers={props.giraffeNine} />
          <Giraffe barriers={props.giraffeTen} />
          <Giraffe barriers={props.giraffeEleven} />
          <Giraffe barriers={props.giraffeTwelve} />
          <Giraffe barriers={props.giraffeThirteen} />
          <Giraffe barriers={props.giraffeFourteen} />
        </Container>
        <Container
          sx={{ display: 'flex', flexDirection: 'row', padding: '50px 0px' }}
        >
          <Giraffe barriers={props.giraffeFifteen} />
          <Giraffe barriers={props.giraffeSixteen} />
          <Giraffe barriers={props.giraffeSeventeen} />
          <Giraffe barriers={props.giraffeEighteen} />
          <Giraffe barriers={props.giraffeNineteen} />
          <Giraffe barriers={props.giraffeTwenty} />
          <Giraffe barriers={props.giraffeTwentyOne} />
        </Container>
      </Container>
    </>
  )
}
