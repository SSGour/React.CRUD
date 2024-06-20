export const setData = (key: string, value: string) => {
  const localStorage = window.localStorage;

  //set data
  localStorage.setItem(key, value);
};

export const getData = (key: string): string | null => {
  const localStorage = window.localStorage;

  //set data
  return localStorage.getItem(key);
};
