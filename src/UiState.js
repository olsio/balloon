const pumpButtonActive = state =>
  !state.runningAnimation && roundIsRunning(state)

const nextButtonActive = state => !state.runningAnimation && state.pumps > 0

const roundIsRunning = state =>
  state.pumps <= state.rounds[state.currentRound - 1]

const nextButtonText = state =>
  roundIsRunning(state) ? 'Take Winnings' : 'Next Round'

const showBalloon = state => state.pumps <= state.rounds[state.currentRound - 1]

const start = state => state.currentRound === 0

const end = state => state.currentRound > state.rounds.length

const getUiState = state => {
  return {
    start: start(state),
    end: end(state),
    showBalloon: showBalloon(state),
    nextButtonActive: nextButtonActive(state),
    nextButtonText: nextButtonText(state),
    pumpButtonActive: pumpButtonActive(state)
  }
}

export { getUiState, roundIsRunning }
