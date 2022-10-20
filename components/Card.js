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
          }
          .inner {
            background: ghostwhite;
            margin: 20px 20px 10px 20px;
            padding: 20px;
            display: flex;
            flex-direction: row;
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
