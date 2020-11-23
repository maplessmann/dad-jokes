import { useState, useEffect, useCallback } from 'react'
import services from 'services'
import debounce from 'helpers/debounce'

const useJoke = () => {
  const [joke, setJoke] = useState('Loading...')

  const getRamdomJoke = useCallback(() => {
    services.jokes.get().then(setJoke)
  }, [])

  useEffect(() => {
    getRamdomJoke()
  }, [getRamdomJoke])

  return {
    joke,
    getRamdomJoke: debounce(getRamdomJoke, 100),
  }
}

export default useJoke
