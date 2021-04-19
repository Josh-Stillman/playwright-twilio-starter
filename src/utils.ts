export const getRandomIntervalSeconds = (
  minSeconds: number,
  maxSeconds: number
) =>
  Math.floor(Math.random() * (maxSeconds - minSeconds + 1) + minSeconds) * 1000;

export const getRandomIntervalMinutes = (
  minMinutes: number,
  maxMinutes: number
) => getRandomIntervalSeconds(minMinutes, maxMinutes) * 60;
