import { useState, useEffect, useCallback } from 'react'
import services from 'services'

const useJoke = () => {
  const [joke, setJoke] = useState('')

  const getRamdomJoke = useCallback(() => {
    services.jokes.get().then(setJoke)
  }, [])

  useEffect(() => {
    getRamdomJoke()
  }, [getRamdomJoke])

  return {
    joke,
    getRamdomJoke,
  }
}

export default useJoke
