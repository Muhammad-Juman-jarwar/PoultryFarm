interface User {
  name: string;
  email: string;
  password?: string;
  type: string;
}

interface Column {
  label: string;
  key: any;
}

interface TableProps {
  list: User[];
  listLabel: string;
  AddButton: any;
  EditButton: any;
  DeleteButton: any;
  columns: Column[];
}

interface InputField {
  name: string;
  label: string;
  type: string;
  placeholder: string;
  inputOnChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  inputOnBlur?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  inputValue?: string;
}

interface SelectOption {
  value: string;
  label: string;
}

interface SelectInputField {
  name: string;
  options: SelectOption[];
}

interface FormModelProps {
  open: boolean;
  setOpen: any;
  title: any;
  inputFields: InputField[] | any;
  selectInputFields: SelectInputField[] | any;
  formOnSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  DeleteUserMessage?: String;
}

import React, { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  label?: boolean;
  labelText?: string;
  error?: any;
}

interface SelectProps {
  name: string;
  value: string;
  options: SelectOption[];
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

export type {
  User,
  TableProps,
  InputField,
  SelectInputField,
  FormModelProps,
  InputProps,
  SelectProps,
};
