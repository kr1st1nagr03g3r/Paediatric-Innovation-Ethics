import Container from '@mui/material/Container'

export default function Footer() {
  return (
    <Container maxWidth="lg" sx={{ padding: '60px 0px' }}>
      <p className="legal">
        This research was funded by Genome Canada and the Canadian Institute for
        Health Research.
      </p>
    </Container>
  )
}
