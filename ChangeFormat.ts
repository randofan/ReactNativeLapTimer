const changeFormat = (overallTime: number) => {
  let seconds: number = Math.floor(overallTime / 1000);
  let minutes: number = Math.floor(seconds / 60);
  seconds = Math.floor(seconds % 60);
  let centiseconds: number = Math.floor((overallTime % 1000) / 10);

  return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(
    2,
    '0',
  )}.${String(centiseconds).padStart(2, '0')}`;
};

export default changeFormat;
