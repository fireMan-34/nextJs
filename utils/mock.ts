type SleepFunction = (time?: number) => Promise<number>;

export const sleep: SleepFunction =(time = 1000) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(time);
    }, time);
  });
}