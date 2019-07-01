
// Export using a collection datasource
const query = { 
    ...this.widget.query.query,
    // this removes pagination so we export the full table
    // while keeping any filters we have applied
    // PAGESIZE: 0, 
    // PAGENUM: 0, 
}
return datasources.theCollection.sendData({ query: { query } }).then((data) => (
    data.map(d => d.data)
))

// Export using a Code Service datasource
// const cbQuery = { 
//     ...this.widget.query.query,
//     // this removes pagination so we export the full table
//     // while keeping any filters we have applied
//     // PAGESIZE: 0, 
//     // PAGENUM: 0, 
// }
// return datasources.MY_FETCH_CODE_SERVICE.sendData({ cbQuery }).then((data) => {
//     return data.results.DATA
// })
              