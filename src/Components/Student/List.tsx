import { IStudent } from "./Student.type";
import "./List.css";
import ListItem from "./ListItem";

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
        <tbody>
          {list.map((student, index) => (
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
