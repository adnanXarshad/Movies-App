import "./App.css";
import Pagination from "./components/Pagination";
import TableOne from "./components/TableOne";
import TableTwo from "./components/TableTwo";

function App() {
  return (
    <div className="row justify-content-center">
      <TableOne />
      <div className="col-md-9">
        <TableTwo />
      </div>
      <Pagination/>
    </div>
  );
}

export default App;
