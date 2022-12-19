import { Counter } from "./components/Counter";
import DataTable from "./components/DataTable";
import { FetchData } from "./components/FetchData";
import { Home } from "./components/Home";

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: '/counter',
    element: <Counter />
  },
  {
    path: '/fetch-data',
    element: <FetchData />
},
{
    path: '/data-table',
    element: <DataTable />
}
];

export default AppRoutes;
