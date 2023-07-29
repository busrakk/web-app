import {useEffect, useRef } from 'react';

function useDelayCallback (callback,array,duration = 1000) {
  const timer = useRef();
  useEffect(() => {
    timer.current = setTimeout(() => {
      callback();
    }, duration);
    return () => {
      clearTimeout(timer.current);
    }
  }, [array,callback,duration]);
  return null;
}
export default useDelayCallback;