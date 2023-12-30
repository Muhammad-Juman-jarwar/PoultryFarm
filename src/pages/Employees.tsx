import ListsTable from "../components/tables/ListsTable";
import { UsersColumns, users } from "../lists/Lists";

const Employees = () => {
  const addButton = () => {
    console.log("Add Button Clicked");
  };

  return (
    <div>
      <div className="">
        <ListsTable
          list={users}
          AddButton={addButton}
          listLabel="Employees Data"
          columns={UsersColumns}
        />
      </div>
    </div>
  );
};

export default Employees;
