
// Array of Objects

const Customer = () => {
  let CustomerList = [
      { name: "Laptop", price: '4000', brand: 'HP', color: 'black' },
      { name: "Mouse", price: '800', brand: 'Dell', color: 'White' },
      { name: "Printer", price: '4000', brand: 'Apple', color: 'White' },
      { name: "I phone", price: '80000', brand: 'Apple', color: 'blue' },

  ]
  return (
      <div>
          <h1> Customer List </h1>
          <table>
              <thead>
                  <tr>
                      <th> Sl No</th>
                      <th> Product Name </th>
                      <th> Price</th>
                      <th> Brand </th>
                      <th> Color </th>
                  </tr>
              </thead>
              <tbody>
                  {
                        
                          CustomerList.map((item, index) => {
                          return (
                              <tr key={index}>
                                  <td> {index} </td>
                                  <td>{item.name}</td>
                                  <td> {item.price} </td>
                                  <td>{item.brand}</td>
                                  <td>{item.color}</td>
                              </tr>
                          )
                      })
                  }
              </tbody>
          </table>

      </div>
  )
}
export default Customer

