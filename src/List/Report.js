import { useContext } from "react";
import DataContext from "../data/DataContext.js";



function Report(props) {
  const name = useContext(DataContext);
  const sum = name.Sum;
  
  const formatnumber = (num) =>{
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
  }

  return (
    <div>
      <h1 className=" text-center text-2xl mt-10">
        รายรับ: <span className=" text-green-500">+{formatnumber(name.Income)}฿</span>
      </h1>
      <h1 className=" text-center text-2xl mt-10">
        รายจ่าย: <span className="text-red-500">{formatnumber(name.Excome)}฿</span>
      </h1>
      <h1 className=" text-center text-2xl mt-10">ยอดคงเหลือ: {formatnumber(sum)}฿</h1>
    </div>
  );
}

export default Report;
