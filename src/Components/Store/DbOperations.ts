import { ITeacher } from "Components/Student/Student.type";
import { json } from "stream/consumers";
import { getData, setData } from "./LocalStorageUtils";
import { LocalStorageKeys } from "Shared/Constants/AppConstants";

//Auth
export const registration = (user: ITeacher) => {
  //make string and store to db
  const userToRegister = JSON.stringify(user);

  // need to check if there is anyuser list exist ,
  //if exist then check for that user, alert the user that email id already exist
  //else register the user
  const dbUsers = getData(LocalStorageKeys.UserListKey);
  let userList = dbUsers ? (JSON.parse(dbUsers) as ITeacher[]) : [];
  // check for user
  if (userList.length > 0) {
    let isUserAlreadyExist = userList.find(
      (usr: ITeacher) => usr.email.toLowerCase() === user.email.toLowerCase()
    );

    if (isUserAlreadyExist) {
      return true;
    } else {
      //   userList.push(user);
      userList = [...userList, user];
      setData(LocalStorageKeys.UserListKey, JSON.stringify(userList));
    }
  }
};

export const getRegisteredUsers = (): ITeacher[] => {
  const dbUsers = getData(LocalStorageKeys.UserListKey);
  const userList = dbUsers ? (JSON.parse(dbUsers) as ITeacher[]) : [];

  return userList;
};

export const Login = (username, apssw) => {};
