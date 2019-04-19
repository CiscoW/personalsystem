<template>
  <div>
    <el-table
      :data="tableData"
      height="300"
      border
      style="width: 60%">
      <el-table-column
        prop="pk"
        label="序号"
        width="180">
      </el-table-column>
      <el-table-column
        prop="add_time"
        label="新增日期"
        width="200">
      </el-table-column>
      <el-table-column
        prop="book_name"
        label="书名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="model"
        label="来源"
        width="180">
      </el-table-column>

    </el-table>
  </div>
</template>

<script>
  export default {
    name: "table2",
    data() {
      return {
        tableData: []
      }
    },
    beforeCreate() {
      let tableData = [];
      this.$http.get('http://127.0.0.1:8000/api/show_books')
        .then((response) => {
          let res = JSON.parse(response.bodyText);
          // console.log(res);
          if (res.error_num == 0) {
            res['list'].forEach(function (element) {
                let tempData = {
                  model: element.model,
                  pk: element.pk,
                  book_name: element.fields.book_name,
                  add_time: element.fields.add_time
                };

                tableData.push(tempData)
              }
            );
            this.tableData = tableData;
          } else {
            this.$message.error('查询书籍失败');
            console.log(res['msg'])
          }
        });

    },
    methods: {
      showBook() {
        this.$http.get('http://127.0.0.1:8000/api/show_books')
          .then((response) => {
            let res = JSON.parse(response.bodyText);
            // console.log(res);
            if (res.error_num == 0) {
              console.log(res['list']);
              return [{model: '1', pk: 3}, {model: '111', pk: 31}]
            } else {
              this.$message.error('查询书籍失败');
              console.log(res['msg'])
            }
          })
      }
    }
  }
</script>

<style scoped>

</style>
