import Player from './components/Player.jsx';
import TimerChallenge from './components/TimerChallenge.jsx';
function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChallenge title="easy" targetTime ={1}/>
        <TimerChallenge title="not easy" targetTime ={5}/>
        <TimerChallenge title="easy" targetTime ={10}/>
        <TimerChallenge title ="for the pros" targetTime = {15}/>
      </div>
    </>
  );
}

export default App;
