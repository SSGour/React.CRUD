import { IStudent } from "./Student.type";
import "./studentList.css";

interface Props {
  list: IStudent[];
}
const StudentList = (props: Props) => {
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
        <tr>
          <td>Sidhant</td>
          <td>25</td>
          <td>ssgour@gmail.com</td>
          <td>md</td>
          <td>m.com</td>
          <td>
            <button className="btnView">View</button>
            <button className="btnEdit">Edit</button>
            <button className="btnDelete">delete</button>
          </td>
        </tr>
      </table>
    </div>
  );
};

export default StudentList;
