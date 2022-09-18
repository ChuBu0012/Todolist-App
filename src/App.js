import List from "./List/List";
import AddItem from "./Form/AddForm.js";
import { v4 as uuidv4 } from "uuid";
import { useState, useEffect } from "react";
import DataContext from "./data/DataContext.js";
import Report from "./List/Report";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
function App() {
  const data = [
    {
      id: uuidv4(),
      title: "ซื้อเมาส์",
      money: -750,
    },
    {
      id: uuidv4(),
      title: "ค่าอาหารเย็น",
      money: -40,
    },
    {
      id: uuidv4(),
      title: "ค่าอาหารกลางวัน",
      money: -50,
    },
    {
      id: uuidv4(),
      title: "เงินรายวัน",
      money: 150,
    },
    {
      id: uuidv4(),
      title: "ค่าอาหารกลางวัน",
      money: -50,
    },
    {
      id: uuidv4(),
      title: "ค่าเดินทาง",
      money: -25,
    },
    {
      id: uuidv4(),
      title: "เงินรายวัน",
      money: 100,
    },
    {
      id: uuidv4(),
      title: "เงินเก็บ",
      money: 4000,
    },
  ];

  const [newdata, setnewdata] = useState(data);
  const amounts = newdata.map((data) => {
    return data.money;
  });

  const startIncome = amounts
    .filter((ele) => ele > 0)
    .reduce((sum, ele) => sum + ele, 0);
  const startExcome = amounts
    .filter((ele) => ele < 0)
    .reduce((sum, ele) => sum + ele, 0);

  const [reportIncome, setreportIncome] = useState(startIncome);
  const [reportExcome, setreportExcome] = useState(startExcome);
  const [reportSum, setreportSum] = useState(0);

  function receive(receive) {
    setnewdata((data) => {
      return [receive, ...data];
    });
  }
  useEffect(
    () => {
      const amounts = newdata.map((data) => {
        return data.money;
      });
      const income = amounts
        .filter((ele) => ele > 0)
        .reduce((sum, ele) => sum + ele, 0);
      const excome = amounts
        .filter((ele) => ele < 0)
        .reduce((sum, ele) => sum + ele, 0);
      const sum = income + excome;
      
      setreportSum(sum.toFixed(2))
      setreportIncome(income.toFixed(2));
      setreportExcome(excome.toFixed(2));
    },
    [newdata],
    reportIncome,
    reportExcome
  );

  //reducer state
  // const [showreport, setshowreport] = useState(false);
  // const reducer = (state,action)=>{

  //   switch(action.type){
  //     case "SHOW":
  //       return setshowreport(true);
  //     case "HIDE":
  //       return setshowreport(false);
  //   }
  // }
  // const [result,dispatch] = useReducer(reducer,showreport)
  return (
    <DataContext.Provider
      value={{ Income: reportIncome, Excome: reportExcome, Sum: reportSum }}
    >
      <div>
        <h1 className=" text-cyan-900 text-center text-5xl mt-10 underline underline-offset-4 decoration-cyan-600 ">
          Todolist
        </h1>

        <Router>
          <div>
            <ul className="my-16">
              <li className="text-center text-blue-600  underline underline-offset-4 decoration-2 mt-3  ">
                <Link to="/">ข้อมูลบัญชี</Link>
              </li>
              <li className="text-center text-blue-600  underline underline-offset-4 decoration-2 mt-3 ">
                <Link to="/insert">บันทึกข้อมูล</Link>
              </li>
            </ul>

            <Routes>
              <Route exact path="/" element={<Report />}></Route>
              <Route path="/insert" element={
                  <div>
                    <AddItem newData={receive} />
                    <List data={newdata} />
                  </div>
                }>
              </Route>
            </Routes>
          </div>
        </Router>
      </div>
    </DataContext.Provider>
  );
}
export default App;
