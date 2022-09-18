
function Item(props) {
  const { title, money } = props;
  const status = money > 0 ? "+" : "";
  const statusStyle = money > 0 ? "text-green-400 " : "text-red-400";
  const formatnumber = (num) =>{
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
  }
  return (
    <li className="flex justify-between my-5 border-2 p-4 rounded-lg text-sky-900 ">
      <span className="underline underline-offset-2 decoration-dotted ">
        {title}
      </span>{" "}
      <span className={statusStyle + " "}>
        {status}
        {formatnumber(money)}
      </span>
      
    
    </li>
  );
}

export default Item;
