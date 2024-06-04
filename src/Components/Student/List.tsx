import { IStudent } from "./Student.type";
import "./List.css";

interface StudentListProps {
  list: IStudent[];
  onDelete: (id: string) => void;
  onEdit: (data: IStudent) => void;
}
const StudentList = ({ list, onDelete, onEdit }: StudentListProps) => {
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
        {list.map((student, index) => {
          return (
            <tbody key={student.id}>
              <td>{index + 1}</td>
              <td>{`${student.firstName.toUpperCase()} ${student.lastName.toUpperCase()}`}</td>
              <td>{student.age.toString()}</td>
              <td>{student.email}</td>
              <td>{student.school}</td>
              <td>{student.standard}</td>
              <td>
                <button
                  className="btnEdit"
                  onClickCapture={() => onEdit(student)}
                >
                  Edit
                </button>
                <button
                  className="btnDelete"
                  onClickCapture={() => onDelete(student.id)}
                >
                  Delete
                </button>
              </td>
            </tbody>
          );
        })}
      </table>
    </>
  );
};

export default StudentList;
