import React from 'react';
import thumbnailPlaceholder from '../../assets/images/thumbnailPlaceholder.jpg';
import PlaySvg from '../../assets/svg/playSvg.jsx';
import { getMinutes, getSecond } from '../../function/calcTimes';

const VideoPlayer = ({
  name,
  rangeValue,
  durationTime,
  currentTime,
  handleRangeInput,
  headerText
}) => {
  return (
    <div className='col-12 col-md-7 col-lg-5'>
      <div className="display-6 mb-3 text-center">{headerText}</div>
      
      <div className='card bg-dark text-white'>
        <img
          className='icard-img '
          src={thumbnailPlaceholder}
          alt='Thumbnail'
        />
        <div className='card-img-overlay d-flex align-items-end p-0 '>
          <div className='flex-fill'>
            <div className=' px-2'>
              {/* Range Input */}
              <input
                className='w-100'
                type='range'
                max='1000'
                name={name}
                onChange={handleRangeInput} 
                value={rangeValue}
              />
            </div>
            <div className='p-1 pt-0 fs-4 '>
              <PlaySvg className='fs-2 align-text-bottom ' />
              <span className='time'>
                {`${getMinutes(currentTime)}:${getSecond(currentTime)} `}/
                {` ${getMinutes(durationTime)}:${getSecond(durationTime)}`}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
