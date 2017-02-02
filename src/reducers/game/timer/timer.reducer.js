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
      return Object.assign({}, state, {
        totalSec: 0,
        sec: 0,
        min: 0,
        hrs: 0,
        timeStr: '00:00:00',
        timerActive: true,
      })
    case 'TIMER_STOP': {
      return Object.assign({}, state, {
        ...state,
        timerActive: false
      })
    }
    case 'TIMER_TICK':
      let totalSec = state.totalSec + 1;
      let sec = totalSec % 60;
      let min = sec === 0 && totalSec > 0 ? state.min + 1 : state.min;
      let hrs = min % 60 === 0 && min > 0 ? state.hrs + 1 : state.hrs;
      let timeStr = getTimeStr(hrs) + ':' + getTimeStr(min) + ':' + getTimeStr(sec);
      return Object.assign({}, state, {
        ...state,
        totalSec: totalSec,
        sec: sec,
        min: min,
        hrs: hrs,
        timeStr: timeStr,
      })
    default:
      return state;
  }

}



export default timer;
