import { useState, useEffect, useCallback } from 'react'
import services from 'services'
import debounce from 'helpers/debounce'

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
    getRamdomJoke: debounce(getRamdomJoke, 300),
  }
}

export default useJoke
