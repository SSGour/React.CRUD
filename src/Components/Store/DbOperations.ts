import { IStudent, ITeacher } from "Components/Student/Student.type";
import { getData, setData } from "./LocalStorageUtils";
import { LocalStorageKeys } from "Shared/Constants/AppConstants";

// Auth
export const registration = (user: ITeacher): boolean => {
  // Need to check if there is any user list exist,
  // If exist then check for that user, alert the user that email id already exist
  // Else register the user
  const dbUsers = getData(LocalStorageKeys.UserListKey);
  let userList = dbUsers ? (JSON.parse(dbUsers) as ITeacher[]) : [];

  // Check for existing user
  let isUserAlreadyExist = userList.find(
    (usr: ITeacher) =>
      usr.email.toLowerCase() === user.email.toLowerCase() ||
      usr.userName.toLowerCase() === user.userName.toLowerCase()
  );

  if (isUserAlreadyExist) {
    return true;
  } else {
    userList = [...userList, user];
    setData(LocalStorageKeys.UserListKey, JSON.stringify(userList));
    return false;
  }
};

export const getRegisteredUsers = (): ITeacher[] => {
  const dbUsers = getData(LocalStorageKeys.UserListKey);
  const userList = dbUsers ? (JSON.parse(dbUsers) as ITeacher[]) : [];
  return userList;
};

export const getRegisteredStudent = (): IStudent[] => {
  const dbStudent = getData(LocalStorageKeys.StudentListKey);
  const studentList = dbStudent ? (JSON.parse(dbStudent) as IStudent[]) : [];
  return studentList;
};

export const getLoggedInUser = (): string | null => {
  const loggedInUser = getData(LocalStorageKeys.LoggedInUserKey);
  return loggedInUser;
};

export const setLoggedInUser = (userName: string): void => {
  setData(LocalStorageKeys.LoggedInUserKey, userName);
};
