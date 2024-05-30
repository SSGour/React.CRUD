import { IStudent } from "./Student.type";
import "./studentList.css";

interface Props {
  list: IStudent[];
}
const StudentList = ({ list }: Props) => {
  return (
    <div>
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
              <td>{`${student.firstName}${student.lastName}`}</td>
              <td>{student.age}</td>
              <td>{student.email}</td>
              <td>{student.school}</td>
              <td>{student.standard}</td>
              <td>
                <button className="btnView">View</button>
                <button className="btnEdit">Edit</button>
                <button className="btnDelete">delete</button>
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default StudentList;
