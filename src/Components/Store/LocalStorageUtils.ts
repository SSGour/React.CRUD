export const setData = (key: string, value: string) => {
  const localStorage = window.localStorage;

  //set data
  return localStorage.setItem(key, value);
};

export const getData = (key: string): string | null => {
  const localStorage = window.localStorage;

  //get data
  return localStorage.getItem(key);
};
