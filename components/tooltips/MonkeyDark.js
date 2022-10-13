import Container from '@mui/material/Container'
import Giraffe from './Giraffe'
import Tooltip01 from './Tooltip01'
import Tooltip02 from './Tooltip02'
import Tooltip03 from './Tooltip03'
import Tooltip04 from './Tooltip04'
import Tooltip05 from './Tooltip05'

import Tooltip06 from './Tooltip06'
import Tooltip07 from './Tooltip07'
import Tooltip08 from './Tooltip08'
import Tooltip09 from './Tooltip09'
import Tooltip10 from './Tooltip10'

import Tooltip11 from './Tooltip11'
import Tooltip12 from './Tooltip12'
import Tooltip13 from './Tooltip13'
import Tooltip14 from './Tooltip14'
import Tooltip15 from './Tooltip15'

export default function MonkeyDark(props) {
  return (
    <>
      <Container sx={{ paddingTop: '0px' }}>
        <Container
          sx={{
            display: 'flex',
            flexDirection: 'row',
            padding: '0px 0px',
            opacity: '60%',
          }}
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
          sx={{
            display: 'flex',
            flexDirection: 'row',
            padding: '0px',
            opacity: '60%',
          }}
        >
          <Tooltip01 />
          <Tooltip02 />
          <Tooltip03 />
          <Tooltip04 />
          <Tooltip05 />
        </Container>

        <Container
          sx={{
            display: 'flex',
            flexDirection: 'row',
            padding: '0px',
            opacity: '60%',
          }}
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
          sx={{
            display: 'flex',
            flexDirection: 'row',
            padding: '0px',
            opacity: '60%',
          }}
        >
          <Tooltip06 />
          <Tooltip07 />
          <Tooltip08 />
          <Tooltip09 />
          <Tooltip10 />
        </Container>

        <Container
          sx={{
            display: 'flex',
            flexDirection: 'row',
            padding: '0px',
            opacity: '60%',
          }}
        >
          <Giraffe barriers={props.giraffeFifteen} />
          <Giraffe barriers={props.giraffeSixteen} />
          <Giraffe barriers={props.giraffeSeventeen} />
          <Giraffe barriers={props.giraffeEighteen} />
          <Giraffe barriers={props.giraffeNineteen} />
          <Giraffe barriers={props.giraffeTwenty} />
          <Giraffe barriers={props.giraffeTwentyOne} />
        </Container>

        <Container
          sx={{
            display: 'flex',
            flexDirection: 'row',
            padding: '0px',
            opacity: '60%',
          }}
        >
          <Tooltip11 />
          <Tooltip12 />
          <Tooltip13 />
          <Tooltip14 />
          <Tooltip15 />
        </Container>
      </Container>
    </>
  )
}
