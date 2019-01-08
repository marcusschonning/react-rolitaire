const initialState = {
  totalSec: 0,
  sec: 0,
  min: 0,
  hrs: 0,
  timeStr: '00:00:00',
  timerActive: false,
}

const getTimeStr = (number) => {
  return number < 10 ? '0' + number.toString() : number.toString();
}

const timer = (state = initialState, action) => {
  switch(action.type) {
    case 'TIMER_START':
      return {
        ...initialState,
        timerActive: true,
      }
    case 'TIMER_STOP': {
      return {
        ...state,
        timerActive: false
      }
    }
    case 'TIMER_TICK':
      const totalSec = state.totalSec + 1;
      const sec = totalSec % 60;
      const min = sec === 0 && totalSec > 0 ? state.min + 1 : state.min;
      const hrs = min % 60 === 0 && min > 0 ? state.hrs + 1 : state.hrs;
      const timeStr = getTimeStr(hrs) + ':' + getTimeStr(min) + ':' + getTimeStr(sec);
      return {
        ...state,
        totalSec: totalSec,
        sec: sec,
        min: min,
        hrs: hrs,
        timeStr: timeStr,
      }
    default:
      return state;
  }

}

export default timer;
