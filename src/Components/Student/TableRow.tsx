import "./List.css";

const StudentRow = ({ student, index, onEdit, onDelete }) => {
  return (
    <tbody key={student.id}>
      <td>{index + 1}</td>
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
    </tbody>
  );
};

export default StudentRow;
