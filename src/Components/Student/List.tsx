import { IStudent } from "./Student.type";
import "./List.css";
import ListItem from "./ListItem";
import { getData } from "Components/Store/LocalStorageUtils";
import { LocalStorageKeys } from "Shared/Constants/AppConstants";

interface StudentListProps {
  list: IStudent[];
  onDelete: (id: string) => void;
  onEdit: (data: IStudent) => void;
}

const StudentList = (props: StudentListProps) => {
  const { list, onDelete, onEdit } = props;

  const user = getData(LocalStorageKeys.UserSchoolKey);

  // Filter the list based on the user's school
  const filteredList = list.filter((student) => student.school === user);

  return (
    <>
      <h1 className="stuDetails">Student Details</h1>
      <table>
        <thead>
          <th>S.No.</th>
          <th>Name</th>
          <th>Age</th>
          <th>Email</th>
          <th>School</th>
          <th>Class</th>
          <th>Action</th>
        </thead>
        <tbody>
          {filteredList.map((student, index) => (
            <ListItem
              key={index}
              student={student}
              rowId={index + 1}
              onEdit={onEdit}
              onDelete={onDelete}
            />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default StudentList;
