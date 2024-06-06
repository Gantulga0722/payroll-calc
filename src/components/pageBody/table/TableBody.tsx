import { Payment, columns } from "./Columns";
import { DataTable } from "./DataTable";

async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.s
  return [
    {
      id: "728ed52f",
      photo: "",
      name: "Гантулга",
      position: "Full stack Developer",
      salary: 8000000,
      bonus: 0,
      hours: 80,
      payed: 3500000,
      status: false,
      more: false,
    },
    // ...
  ];
}

export const DemoPage = async () => {
  const data = await getData();

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  );
};
