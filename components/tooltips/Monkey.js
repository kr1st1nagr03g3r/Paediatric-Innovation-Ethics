import Container from '@mui/material/Container'
import Giraffe from './Giraffe'

export default function Monkey(props) {
  return (
    <>
      <Container>
        <Giraffe barriers={props.giraffeOne} />
        {/* <Giraffe barriers={props.giraffeTwo} />
        <Giraffe barriers={props.giraffeThree} />
        <Giraffe barriers={props.giraffeFour} />
        <Giraffe barriers={props.giraffeFive} />
        <Giraffe barriers={props.giraffeSix} />
        <Giraffe barriers={props.giraffeSeven} /> */}
      </Container>
    </>
  )
}
