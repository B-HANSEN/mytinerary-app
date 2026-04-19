import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks';
import Slider from 'react-slick';
import { getActivities } from '../actions/itActions';
import { IMG_PLACEHOLDER } from '../utils/placeholders';
import './components.css';

interface ArrowProps {
  className?: string;
  style?: React.CSSProperties;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

function SampleNextArrow({ className, style, onClick }: ArrowProps) {
  return (
    <button
      aria-label='Next'
      className={className}
      style={{ ...style, display: 'block', background: 'lightgrey', border: 'none', cursor: 'pointer' }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow({ className, style, onClick }: ArrowProps) {
  return (
    <button
      aria-label='Previous'
      className={className}
      style={{ ...style, display: 'block', background: 'lightgrey', border: 'none', cursor: 'pointer' }}
      onClick={onClick}
    />
  );
}

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 2,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
  accessibility: false,
};

interface ActivitySliderProps {
  itinId: string;
}

function ActivitySlider({ itinId }: ActivitySliderProps) {
  const dispatch = useAppDispatch();
  const activity = useAppSelector((state) => state.activity);

  useEffect(() => {
    dispatch(getActivities(itinId));
  }, [dispatch, itinId]);

  return (
    <div>
      <h2>Activities</h2>
      <div style={{ width: '300px' }}>
      <Slider {...sliderSettings}>
        {activity.activities.map((activity, index) => (
          <div className='actPicnPlace' key={index}>
            <img
              className='actPic'
              src={activity.actPic}
              alt={activity.actPlace}
              onError={(e) => { e.currentTarget.src = IMG_PLACEHOLDER; }}
            />
            <p className='actPlace'>{activity.actPlace}</p>
          </div>
        ))}
      </Slider>
      </div>
    </div>
  );
}

export default ActivitySlider;
