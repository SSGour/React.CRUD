import { IStudent } from "./Student.type";
import "./studentList.css";

interface Props {
  list: IStudent[];
  onDelete: (id: string) => void;
}
const StudentList = ({ list, onDelete }: Props) => {
  return (
    <div>
      <h1 className="stuDetails">Student Details</h1>
      <table>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Email</th>
          <th>School</th>
          <th>Class</th>
          <th>Action</th>
        </tr>
        {list.map((student) => {
          return (
            <tr key={student.id}>
              <td>{`${student.firstName} ${student.lastName}`}</td>
              <td>{student.age}</td>
              <td>{student.email}</td>
              <td>{student.school}</td>
              <td>{student.standard}</td>
              <td>
                <button className="btnView">View</button>
                <button className="btnEdit">Edit</button>
                <button
                  className="btnDelete"
                  onClickCapture={() => onDelete(student.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default StudentList;
