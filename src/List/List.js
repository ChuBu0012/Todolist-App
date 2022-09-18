import Item from "./Item";
function List(props) {
  const { data } = props;

  return (
    <>
      <ul className=" mt-10 text-3xl w-4/12 m-auto leading-10">
        {data.map((ele) => {
          return <Item {...ele} key={ele.id} />;
        })}
      </ul>
    </>
      
    
  );
}

export default List;
