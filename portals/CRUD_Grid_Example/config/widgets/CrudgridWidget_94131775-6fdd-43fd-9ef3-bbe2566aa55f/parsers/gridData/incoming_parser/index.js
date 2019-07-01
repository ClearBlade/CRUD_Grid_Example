/** @type {GridSourceObj} */
var gridData = {
  keyColumn: "item_id", 
  data: [], 
  columns: this.dsModel.getCRUDSchema(), 
  count: this.dsModel.getCount()
};

for (var row of this.datasource) {
  gridData.data.push(row.data)
}

return gridData;