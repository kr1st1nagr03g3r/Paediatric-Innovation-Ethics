import Container from '@mui/material/Container'

export default function Footer() {
  return (
    <Container maxWidth="lg" sx={{ padding: '60px 16px' }}>
      <p className="text_small center">
        This research was funded by Genome Canada and the Canadian Institute for
        Health Research. 🇨🇦
      </p>
    </Container>
  )
}
