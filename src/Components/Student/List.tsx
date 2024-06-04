import { IStudent } from "./Student.type";
import "./List.css";
import StudentRow from "./TableRow";

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
        {list.map((student, index) => (
          <StudentRow
            student={student}
            index={index}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        ))}
      </table>
    </>
  );
};

export default StudentList;
