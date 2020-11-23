import useJoke from 'hooks/useJoke'
import Button from 'components/Button'
import './Joke.scss'

const Joke = () => {
  const { joke, getRamdomJoke } = useJoke()

  return (
    <div className="dad-joke">
      <div className="joke">
        <h1 className="text">{joke}</h1>
      </div>
      <Button className="button" onClick={getRamdomJoke}>
        Load another joke
      </Button>
    </div>
  )
}

export default Joke
