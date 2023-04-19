const oneLinerJoke = require('one-liner-joke');

function getJoke(props, context, flow) {
  const { output, jokeTag } = props;
  if (!output) {
    flow.fail( new Error('Output prop is not specified'));
  }
  context[output] = jokeTag
    ? oneLinerJoke.getRandomJokeWithTag(jokeTag)
    : oneLinerJoke.getRandomJoke();
  flow.proceed();
}

module.exports = function getJokePolicy() {
  return getJoke;
};