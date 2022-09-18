
import { v4 as uuidv4 } from 'uuid';
import {useState,useEffect} from 'react';

function AddItem(props) {
    const [title, settitle] = useState('');
    const [money, setmoney] = useState(0);
    const [formstatus,setformstatus] = useState(false);
    function inputtitle(e) {
        settitle(e.target.value)
    }
    function inputmoney(e) {
        setmoney(e.target.value)
    }
    function AddnewItem(e) {
        e.preventDefault()
        const Item = {
            id:uuidv4(),
            title:title,
            money:Number(money)
        }
        props.newData(Item)
    }

    useEffect(() => {
      const checkData = title.trim().length > 0 && money !== 0;
      setformstatus(checkData)
    }, [title,money]);
  return (
    <div>
      <form className="flex flex-col items-center mt-6 justify-center" onSubmit={AddnewItem}>
        <div className="my-3">
          <label className="text-2xl">
            ชื่อรายการ <span className="mr-3 ">:</span>
          </label>
          <input type="text" className=" border-2 rounded-md h-10 text-xl pl-2" onChange={inputtitle}/>
        </div>
        <div className="my-3">
          <label className="text-2xl">
            จำนวนเงิน <span className="mr-3 ">:</span>
          </label>
          <input type="number" step={0.25} className=" border-2 rounded-md h-10 text-xl pl-2"  onChange={inputmoney} />
        </div>
        <div className="my-3">
          <input type="Submit" className=" cursor-pointer border-2 w-20 rounded-md h-10 text-xl" onChange={inputmoney}  disabled={!formstatus}  />
        </div>
        
      </form>
    </div>
  );
}

export default AddItem;
