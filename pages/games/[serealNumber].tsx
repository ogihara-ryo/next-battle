import { useRouter } from 'next/router'

const GamePage = () => {
  const router = useRouter()
  const { serealNumber } = router.query

  return (
    <h1>Your sereal number: {serealNumber}</h1>
  )
}

export default GamePage
