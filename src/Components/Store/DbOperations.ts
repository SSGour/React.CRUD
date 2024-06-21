import { IStudent, ITeacher } from "Components/Student/Student.type";
import { getData, setData } from "./LocalStorageUtils";
import { LocalStorageKeys } from "Shared/Constants/AppConstants";

//Auth
export const registration = (user: ITeacher) => {
  // need to check if there is any user list exist ,
  //if exist then check for that user, alert the user that email id already exist
  //else register the user
  const dbUsers = getData(LocalStorageKeys.UserListKey);
  let userList = dbUsers ? (JSON.parse(dbUsers) as ITeacher[]) : [];
  // check for user
  if (userList) {
    let isUserAlreadyExist = userList.find(
      (usr: ITeacher) =>
        usr.email.toLowerCase() === user.email.toLowerCase() ||
        user.userName.toLowerCase() === user.userName.toLowerCase()
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

export const getRegisteredStudent = (): IStudent[] => {
  const dbStudent = getData(LocalStorageKeys.StudentListKey);
  const studentList = dbStudent ? (JSON.parse(dbStudent) as IStudent[]) : [];

  return studentList;
};
