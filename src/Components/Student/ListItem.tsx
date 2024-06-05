import "./List.css";
import { IStudent } from "./Student.type";

interface IListItemProps {
  student: IStudent;
  rowId: Number;
  onEdit: Function;
  onDelete: Function;
}

const ListItem = (props: IListItemProps) => {
  const { student, rowId, onEdit, onDelete } = props;

  return (
    <tr>
      <td>{`${rowId}`}</td>
      <td>{`${student.firstName.toUpperCase()} ${student.lastName.toUpperCase()}`}</td>
      <td>{student.age.toString()}</td>
      <td>{student.email}</td>
      <td>{student.school}</td>
      <td>{student.standard}</td>
      <td>
        <button className="btnEdit" onClickCapture={() => onEdit(student)}>
          Edit
        </button>
        <button
          className="btnDelete"
          onClickCapture={() => onDelete(student.id)}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ListItem;
