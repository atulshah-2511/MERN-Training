
const Company = () => {
  let CompanyList = ['Apple', 'Lava', 'HP', 'Dell', "Mi"]
  return (
    <div>

      <h1> Company List :</h1>
      {
        CompanyList.map((val, ind) => (
          <>
            <p key={ind}>{val}</p>
          </>
        ))
      }
    </div>
  )
}

export default Company