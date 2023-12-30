import React from "react";
import { TableProps, User } from "../../types/types";

const ListsTable: React.FC<TableProps> = ({
  list,
  listLabel,
  columns,
  AddButton,
  EditButton,
  DeleteButton,
}) => {
  return (
    <div className="flex flex-col h-full w-[85vw] mx-auto">
      <div className="flex justify-between mb-4 w-full">
        <h1 className="text-lg lg:text-3xl font-bold ">{listLabel}</h1>
        <button
          onClick={AddButton}
          className="bg-green-500 rounded-md lg:rounded-lg p-1 text-sm lg:p-2 lg:text-lg font-semibold text-white"
        >
          <i className="fa fa-plus"></i> Add New {listLabel.slice(0, -6)}
        </button>
      </div>
      <table className="table-auto w-full h-full">
        <thead>
          <tr className="bg-gray-200">
            {columns.map((column) => (
              <th
                key={column.key}
                className="px-1 py-1 lg:px-4 lg:py-2 text-left text-md lg:text-xl"
              >
                {column.label}
              </th>
            ))}
            <th className="px-1 py-1 lg:px-4 lg:py-2 text-left text-md lg:text-xl">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {list.map((user, index) => (
            <tr key={index} className="border-b border-gray-200">
              {columns.map((column) => (
                <td
                  key={column.key}
                  className="px-1 py-1 lg:px-4 lg:py-2 text-left text-md lg:text-xl"
                >
                  {user[column.key as keyof User]}
                </td>
              ))}
              <td className="px-1 py-1 lg:px-4 lg:py-2 text-left">
                <button
                  onClick={() => EditButton(user)}
                  className="bg-blue-500 rounded-md lg:rounded-lg p-1 lg:p-2 text-sm lg:text-lg font-semibold text-white flex justify-center items-center gap-x-1 w-full"
                >
                  <i className="fa fa-edit"></i> Edit
                </button>
                <button
                  onClick={() => DeleteButton(user)}
                  className="bg-red-500 rounded-md lg:rounded-lg p-1 lg:p-2 text-sm lg:text-lg font-semibold text-white flex justify-center items-center gap-x-1 w-full mt-1"
                >
                  <i className="fa fa-trash"></i> Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListsTable;
