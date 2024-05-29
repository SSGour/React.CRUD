import { schools } from "./Student.type";
import "./addStudent.css";

interface Props {
  backBtn: () => void;
}

const AddStudent = (props: Props) => {
  const { backBtn } = props;
  return (
    <>
      <form>
        <div>
          <label htmlFor="Fname">First Name:</label>
          <input id="Fname" type="text" />
        </div>
        <div>
          <label htmlFor="Lname">Last Name:</label>
          <input id="Lname" type="text" />
        </div>
        <div>
          <label htmlFor="Age">Age:</label>
          <input id="Age" type="text" />
        </div>
        <div>
          <label htmlFor="Email">Email:</label>
          <input id="Email" type="text" />
        </div>
        <div>
          <select id="schools">
            <option value="">Schools</option>
            {schools.map((school) => (
              <option key={school} value={school}>
                {school}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="Class">Class:</label>
          <input id="Class" type="text" />
        </div>
        <div className="btnDiv">
          <button onClickCapture={backBtn} className="backBtn">
            Back
          </button>
          <button className="addBtn">Add Student</button>
        </div>
      </form>
    </>
  );
};

export default AddStudent;
