import Item from "./Item";
function List(props) {
  const { data } = props;

  return (
    <>
      <ul className="list mt-10 text-xl md:text-3xl w-3/4  m-auto leading-10">
        {data.map((ele) => {
          return <Item {...ele} key={ele.id} />;
        })}
      </ul>
    </>
      
    
  );
}

export default List;
