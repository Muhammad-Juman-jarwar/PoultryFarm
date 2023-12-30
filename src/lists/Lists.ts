const users = [
  {
    id: "1",
    name: "John Doe",
    email: "jksdalj@gmail.com",
    type: "Admin",
    password: "123456",
  },
  {
    id: "2",
    name: "Jane Doe",
    email: "uroweu@gmail.com",
    type: "User",
    password: "123456",
  },
  {
    id: "3",
    name: "John Smith",
    email: "lsaljd@gmail.com",
    type: "Employee",
    password: "123456",
  },
  {
    id: "4",
    name: "Jane Smith",
    email: "123@gmail.com",
    type: "Worker",
    password: "890123",
  },
];

const inputFields = [
  {
    name: "name",
    type: "text",
    label: "Name",
    placeholder: "Enter your name",
  },
  {
    name: "email",
    type: "email",
    label: "Email",
    placeholder: "Enter your email",
  },
  {
    name: "password",
    type: "password",
    label: "Password",
    placeholder: "Enter your password",
  },
];

const UsersColumns = [
  { label: "Name", key: "name" },
  { label: "Email", key: "email" },
  { label: "Type", key: "type" },
];

const EmployeesColumns = [
  { label: "Name", key: "name" },
  { label: "Email", key: "email" },
  { label: "Type", key: "type" },
  { label: "Salary", key: "salary" },
];

const selectInputFields = [
  {
    name: "selectedOption1",
    options: [
      { value: "options1", label: "Select Any Option" },
      { value: "Admin", label: "Admin" },
      { value: "Employee", label: "Employee" },
      { value: "User", label: "User" },
      { value: "Worker", label: "Worker" },
    ],
  },
];

const selectInputFields2 = [
  {
    name: "selectedOption1",
    options: [
      { value: "options1", label: "Select Any Option" },
      { value: "Admin", label: "Admin" },
      { value: "Employee", label: "Employee" },
      { value: "User", label: "User" },
      { value: "Worker", label: "Worker" },
    ],
  },
  {
    name: "selectedOption2",
    options: [
      { value: "options1", label: "Select Any Option" },
      { value: "Worker", label: "Worker" },
      { value: "mazdoor", label: "mazdoor" },
      { value: "noWorker", label: "noWorker" },
    ],
  },
];

export {
  users,
  inputFields,
  UsersColumns,
  EmployeesColumns,
  selectInputFields,
  selectInputFields2,
};
