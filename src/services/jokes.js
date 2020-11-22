const get = (query = `joke { joke }`) => {
  return fetch(`https://icanhazdadjoke.com/graphql?query={${query}}`, {
    method: `POST`,
    headers: {
      Accept: `application/json`,
    },
  })
    .then(response => response.json())
    .then(({ data }) => data.joke.joke)
}

export default {
  get,
}
