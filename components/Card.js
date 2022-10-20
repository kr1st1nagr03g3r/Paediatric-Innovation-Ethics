import Container from '@mui/material/Container'

export default function Card({ children }) {
  return (
    <>
      <style jsx>
        {`
          p {
            color: black;
          }
          .wrapper {
            background: #c4c4c4;
            display: flex;
            justify-content: center;
            flex-direction: row;
            margin-bottom: 30px;
            border-radius: 50px;
          }
          .inner {
            background: ghostwhite;
            margin: 20px;
            padding: 20px;
            display: flex;
            flex-direction: row;
            border-radius: 50px;
          }

          @media only screen and (max-width: 1200px) {
            .inner {
              flex-direction: column;
              align-items: center;
            }
          }
        `}
      </style>
      <Container maxWidth="lg" disableGutters={true}>
        <div className="wrapper">
          <div className="inner">{children}</div>
        </div>
      </Container>
    </>
  )
}
