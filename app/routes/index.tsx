import { Typography, Container } from '@mui/material'
import { colors } from '~/theme'

export default function Index() {
  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: '100%',
      }}
    >
      <Typography
        variant="h1"
        marginTop={3}
        fontSize={40}
        fontWeight="bold"
        color={colors.grey.light}
      >
        Yahiko
      </Typography>
      <Typography
        color={colors.grey.light}
        paragraph
        marginTop={2}
        textAlign="center"
        fontSize={18}
      >
        Write and share documents in real-time!
      </Typography>
    </Container>
  )
}
