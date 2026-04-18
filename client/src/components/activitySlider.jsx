import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SliderLib from 'react-slick';
const Slider = SliderLib.default ?? SliderLib;
import { getActivities } from '../actions/itActions';
import './components.css';

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <button
      aria-label='Next'
      className={className}
      style={{
        ...style,
        display: 'block',
        background: 'lightgrey',
        border: 'none',
        cursor: 'pointer',
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <button
      aria-label='Previous'
      className={className}
      style={{
        ...style,
        display: 'block',
        background: 'lightgrey',
        border: 'none',
        cursor: 'pointer',
      }}
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
};

function ActivitySlider({ itinId }) {
  const dispatch = useDispatch();
  const activity = useSelector((state) => state.activity);

  useEffect(() => {
    dispatch(getActivities(itinId));
  }, [dispatch, itinId]);

  return (
    <div>
      <h2>Activities</h2>
      <Slider {...sliderSettings} style={{ width: '300px' }}>
        {activity.activities.map((activity, index) => (
          <div className='actPicnPlace' key={index}>
            <img className='actPic' src={activity.actPic} alt={activity.actPlace} />
            <p className='actPlace'>{activity.actPlace}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default ActivitySlider;
