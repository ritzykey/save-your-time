import { useContext } from 'react';
import { calcCurrentTime, getMinutes } from '../../function/calcTimes';
import { StateContext } from '../../contexts/StateContext';
import { minutes } from './../../function/calcTimes';

const VideoDurations = () => {
  const { state, setState } = useContext(StateContext);

  const videoDurationClick = (durationTime) => {
    setState({
      ...state,
      durationTime: durationTime,
      durationRealTime: durationTime / state.speed,
      savedTime: durationTime - durationTime / state.speed,
      currentRealTime: calcCurrentTime(
        state.rangeValue,
        durationTime,
        state.speed
      ),
      currentTime: calcCurrentTime(state.rangeValue, durationTime),
    });
  };

  const handleDurationInput = (e) => {
    const durationTime = Math.abs(e.target.value * minutes);
    setState({
      ...state,
      durationTime: durationTime,
      durationRealTime: durationTime / state.speed,
      savedTime: durationTime - durationTime / state.speed,
      currentRealTime: calcCurrentTime(
        state.rangeValue,
        durationTime,
        state.speed
      ),
      currentTime: calcCurrentTime(state.rangeValue, durationTime),
    });
  };

  return (
    <div className='col-12 col-md-7 col-lg-5'>
      <div className='h3 mt-2 text-center'>Video Durations</div>
      <div className='container row gap-3'>
        <button
          className='col btn btn-dark bg-youtube'
          onClick={() => videoDurationClick(10 * minutes)}
        >
          10
        </button>
        <button
          className='col btn btn-dark bg-youtube'
          onClick={() => videoDurationClick(20 * minutes)}
        >
          20
        </button>
        <button
          className='col btn btn-dark bg-youtube'
          onClick={() => videoDurationClick(30 * minutes)}
        >
          30
        </button>
        <input
          type='number'
          className='col form-control  btn-dark border border-primary'
          id='durationInput'
          min='0'
          onChange={handleDurationInput}
          value={getMinutes(state.durationTime)}
          placeholder='duration time'
        />
      </div>
    </div>
  );
};

export default VideoDurations;
