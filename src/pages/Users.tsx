import React from "react";
import ListsTable from "../components/tables/ListsTable";
import {
  UsersColumns,
  users as initialUsers,
  inputFields,
  selectInputFields,
} from "../lists/Lists";
import FormModel from "../model/FormModel";
import { useFormik } from "formik";

const Users = () => {
  const [open, setOpen] = React.useState(false);
  const [editingUser, setEditingUser] = React.useState<any>(null);
  const [users, setUsers] = React.useState(initialUsers);
  const [DeletingUserMessage, setDeletingUserMessage] = React.useState<any>("");
  const [DeletingUser, setDeletingUser] = React.useState<any>(null);
  const [titleButton, setTitleButton] = React.useState<any>("Add New User");

  const formik = useFormik({
    initialValues: {
      id: editingUser ? editingUser.id : "",
      name: editingUser ? editingUser.name : "",
      email: editingUser ? editingUser.email : "",
      password: editingUser ? editingUser.password : "",
      selectedOption1: editingUser ? editingUser.type : "",
    },
    onSubmit: (values: any) => {
      if (DeletingUserMessage) {
        setUsers((prevUsers) =>
          prevUsers.filter((prevUser) => prevUser.id !== DeletingUser.id)
        );
      } else if (editingUser) {
        setUsers((prevUsers) => {
          const newUsers = [...prevUsers];
          const index = newUsers.findIndex(
            (user: any) => user.id === editingUser.id
          );
          newUsers[index] = { ...editingUser, ...values };
          return newUsers;
        });
      } else {
        values.id = users.length + 1;
        values.type = values.selectedOption1;
        setUsers((prevUsers) => [...prevUsers, values]);
      }
      console.log(values);
      formik.resetForm();
      setOpen(false);
      setEditingUser(null);
      const { name, email, password, selectedOption1, id } = values;
      console.log("id", id);
      console.log("Name:", name);
      console.log("Email:", email);
      console.log("Password:", password);
      console.log("Selected Option:", selectedOption1);
    },
  });

  React.useEffect(() => {
    if (editingUser) {
      formik.resetForm({
        values: {
          id: editingUser.id,
          name: editingUser.name,
          email: editingUser.email,
          password: editingUser.password,
          selectedOption1: editingUser.type,
        },
      });
    } else {
      formik.resetForm();
    }
  }, [editingUser]);

  const handleEditButtonClick = (user: any) => {
    console.log("Editing User", user);
    setTitleButton("Edit User");
    setEditingUser(user);
    setOpen(true);
  };

  const handleDeleteButtonClick = (user: any) => {
    console.log("Deleting User", user);
    setTitleButton("Confirm Delete User");
    setEditingUser(null);
    setDeletingUser(user);
    setDeletingUserMessage("Are you sure you want to delete this user?");
    setOpen(true);
  };

  return (
    <div>
      <div className="">
        <ListsTable
          AddButton={() => setOpen(true)}
          EditButton={handleEditButtonClick}
          DeleteButton={handleDeleteButtonClick}
          list={users}
          listLabel="Users Data"
          columns={UsersColumns}
        />
        <FormModel
          open={open}
          setOpen={setOpen}
          title={titleButton}
          DeleteUserMessage={DeletingUserMessage}
          inputFields={
            !DeletingUserMessage &&
            inputFields.map((field) => ({
              ...field,
              inputValue: formik.values[field.name],
              inputOnChange: (event: any) =>
                formik.setFieldValue(field.name, event.target.value),
              inputOnBlur: () => formik.setFieldTouched(field.name),
            }))
          }
          formOnSubmit={formik.handleSubmit}
          selectInputFields={
            !DeletingUserMessage &&
            selectInputFields.map((field: any, index: number) => ({
              ...field,
              options: selectInputFields[index].options,
              selectValue: formik.values[field.name],
              selectOnChange: (event: any) => {
                formik.setFieldValue(field.name, event.target.value),
                  console.log("New value:", event.target.value);
                console.log("selectValue:", formik.values[field.name]);
                console.log(
                  "formik.setFieldValue:",
                  formik.setFieldValue(field.name, event.target.value)
                );
              },
            }))
          }
        />
      </div>
    </div>
  );
};

export default Users;
