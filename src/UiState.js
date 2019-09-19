const nextButtonActive = state => !state.runningAnimation && state.pumps > 0

const roundIsRunning = state =>
  state.pumps <= state.rounds[state.currentRound - 1]

const start = state => state.currentRound === 0

const end = state => state.currentRound > state.rounds.length

const isLastRound = state =>
  state.pumps === state.rounds[state.currentRound - 1] - 1

const currentScreen = state => {
  if (start(state)) {
    return 'START'
  }

  if (end(state)) {
    return 'END'
  }

  return 'GAME'
}
const getUiState = state => {
  return {
    currentScreen: currentScreen(state),
    nextButtonActive: nextButtonActive(state)
  }
}

export { getUiState, roundIsRunning, isLastRound }
