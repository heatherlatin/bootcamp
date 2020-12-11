// Import MySQL connection.
var connection = require("./promisify-mysql.js");

class DataRow {
  constructor(item, tableName) {
    this.data = item;
    this.tableName = tableName;
  }
  setField(field, value) {
    this.data[field] = value;
  }
  async save() {
    const { id, ...update } = this.data;
    if (id === null) {
        const results = await connection.query("INSERT INTO ?? SET ?", [this.tableName, update]);
        this.data.id = results.insertId;
        return results;
    }
    return await connection.query("UPDATE ?? SET ? WHERE ?", [this.tableName, update, { id }]);
  }
  display() {
    // display one row
    console.table(this.data);
  }
}

class DataList {
  constructor(dataRows) {
    this.dataRows = dataRows
  }
  display() {
    console.table(this.dataRows.map(item => item.data));
  }
}

class DataTable {
  constructor(tableName) {
    this.tableName = tableName;
  }
  async get(where) {
    // returns array of rows
    let queryStr = "SELECT * FROM ??"
    if (where) {
      queryStr += " WHERE ?"
    }
    const data = await connection.query(queryStr, [this.tableName,where]);
    return new DataList(data.map(item => new DataRow(item, this.tableName)));
  }
  async save(object) {
    const strippedObject = JSON.parse(JSON.stringify(object));
    const dataRow = new DataRow(strippedObject, this.tableName);
    await dataRow.save();
    return dataRow;
  }
  async join(columns, tables, where) {
    // display one row
    // returns array of rows
    let questionMarkString = columns.map(() => "??").join(", ");
    let queryStr = `SELECT ${questionMarkString} FROM ??`
    let tableData = [];
    for (let i = 1; i < tables.length; i++) {
      queryStr += " JOIN ?? ON ??.id = ??.??";
      tableData.push(tables[i].name);
      tableData.push(tables[i].name);
      tableData.push(tables[i].joinOnTable);
      tableData.push(tables[i].joinOnColumn);
    }
    if (where) {
      queryStr += " WHERE ?"
    }
    const data = await connection.query(queryStr, [...columns, tables[0].name, ...tableData, where]);
    return data;
  }
}

module.exports = DataTable;
