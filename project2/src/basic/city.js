

const city = () => {
  let CityList = ['Bangalore', 'Delhi', 'Chennai', 'Noida']
  return (
    <div>
      <h1> City List</h1>

      {
        CityList.map((val,ind)=>(
          <>
          <p key={ind}>{val}</p>
          </>
        ))
      }

    </div>
  )
}

export default city
