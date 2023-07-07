import {DateTime} from 'luxon';

function Time() {
  return <div>{DateTime.now().toLocaleString()}</div>;
}

export default Time;
