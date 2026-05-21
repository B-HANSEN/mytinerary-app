import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks';
import SliderLib from 'react-slick';
import type { Settings } from 'react-slick';
// react-slick ships as CJS; Vite exposes the module object, not the component directly
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Slider = ((SliderLib as any).default ?? SliderLib) as React.ComponentType<Settings>;
import { getActivities } from '../slices/activitySlice';
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

function SamplePrevArrow({ className, style, onClick }: ArrowProps) {
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

  if (activity.loading || activity.activities.length === 0) {
    return <p>Loading activities...</p>;
  }

  const settings = {
    ...sliderSettings,
    infinite: activity.activities.length >= sliderSettings.slidesToShow,
    slidesToShow: Math.min(sliderSettings.slidesToShow, activity.activities.length),
    slidesToScroll: Math.min(sliderSettings.slidesToScroll, activity.activities.length),
  };

  return (
    <div>
      <h2>Activities</h2>
      <div style={{ width: '300px' }}>
        <Slider {...settings}>
          {activity.activities.map((act, index) => (
            <div className='actPicnPlace' key={index}>
              <img
                className='actPic'
                src={act.actPic}
                alt={act.actPlace}
                onError={(e) => {
                  e.currentTarget.src = IMG_PLACEHOLDER;
                }}
              />
              <p className='actPlace'>{act.actPlace}</p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default ActivitySlider;
