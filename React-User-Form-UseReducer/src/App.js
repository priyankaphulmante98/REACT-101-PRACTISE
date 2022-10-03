import { useReducer, useState } from "react";
import "./App.css";
import { UserRow } from "./Component/UserRow";

const initialState = {
  name: "",
  gender: "",
  role: "",
  maritalStatus: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "name":
      return { ...state, name: action.payload };
    case "gender":
      return { ...state, gender: action.payload };
    case "role":
      return { ...state, role: action.payload };
    case "maritalStatus":
      return { ...state, maritalStatus: action.payload };
    case "reset":
      return initialState;
    default:
      return state;
  }
};


const InputName = (value) => (
  {
    type: "name",
    payload: value
  }
)
const InputGender = (value) => (
  {
    type: "gender",
    payload: value
  }
)

const InputRole = (value) => (
  {
    type: "role",
    payload: value
  }
)

const InputCheckBox = (value) => (
  {
    type: "maritalStatus",
    payload: value
  }
)

const ActionReset=()=>(
   {
    type:"reset"
  }
)

function App() {

  const [state, dispatch] = useReducer(reducer, initialState);
  const [data, setData] = useState([])


  const handleSubmit = (e) => {
    e.preventDefault();
    setData([...data, state]);
    dispatch(ActionReset());
  }

  console.log(data);

  return (
    <div className="App">
      <div>
        <h1>User Form</h1>
        <h3>useReducer</h3>
        <div className="form-wrapper" data-testid="form-wrapper">
          <form data-testid="form-element" onSubmit={handleSubmit}>
            <div className="name-wrapper" data-testid="name-wrapper">
              <label>Name</label>
              {/* keep an input tag with name attribute as "name" type as "text" and placeholder as "Name" */}
              <input type="text" name="name" placeholder="Name" onChange={(e) => dispatch(InputName(e.target.value))} />
            </div>
            <div className="gender-wrapper" data-testid="gender-wrapper">
              <label>Gender</label>
              <select name="gender" placeholder="Gender" data-testid="gender-select" onChange={(e) => dispatch(InputGender(e.target.value))}>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Prefer Not To Say">Prefer Not To Say</option>
              </select>
            </div>
            <div className="role-wrapper" data-testid="role-wrapper">
              <label>Role</label>
              <select name="role" data-testid="role-select" placeholder="Role" onChange={(e) => dispatch(InputRole(e.target.value))}>
                <option value="FrontEnd Developer">FrontEnd Developer</option>
                <option value="BackEnd Developer">BackEnd Developer</option>
                <option value="FullStack Developer">FullStack Developer</option>
              </select>
            </div>
            <div
              className="marital-status-wrapper"
              data-testid="marital-status-wrapper"
            >
              <legend>Martial Status</legend>
              <div>
                {/* keep an input tag with type as "checkbox" and name as "maritalStatus" */}
                <input type={"checkbox"} name="maritalStatus" onChange={(e) => dispatch(InputCheckBox(e.target.checked))} />
                <label>Married</label>
              </div>
            </div>
            <div>
              <button type="submit">SUBMIT</button>
            </div>
          </form>
        </div>

        {/* map through the userdata and render UserRow component to display the data in tabular format */}
        {/* print "no users found"  in there is no user data */}

        {
          data.length === 0 ? <h2 className="no-user-container" data-testid="no-user-container"> no users found </h2>
            : <table style={{margin:"Auto"}}>
              <tr>
                <th>s No</th>
                <th>Name</th>
                <th>gender</th>
                <th>Role</th>
                <th>marital Status</th>
              </tr>
              {
              data.map((el) => (
              <UserRow key={el.id} id={el.id} name={el.name} gender={el.gender} role={el.role} maritalStatus={el.maritalStatus} />
              ))
              }
            </table>
        }

      </div>
    </div>
  );
}

export default App;