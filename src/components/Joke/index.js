import useJoke from 'hooks/useJoke'

const Joke = () => {
  const { joke, getRamdomJoke } = useJoke()

  return (
    <div className="joke">
      <p>{joke}</p>
      <button onClick={getRamdomJoke}>Load another joke</button>
    </div>
  )
}

export default Joke
