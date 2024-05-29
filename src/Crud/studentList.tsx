import { IStudent } from "./Student.type";
import "./studentList.css";

interface Props {
  list: IStudent[];
}
const StudentList = (props: Props) => {
  return (
    <>
      <table>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Email</th>
          <th>Class</th>
          <th>Action</th>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </table>
    </>
  );
};

export default StudentList;
