<template>
    <el-table :data="rank_list" :date="rank_list">
        <el-table-column prop="spend_time" label="花费时间">

        </el-table-column>
        <el-table-column prop="test_username" label="姓名">

        </el-table-column>
        <!-- <el-table-column fixed="right" label="操作">
            <template slot-scope="scope">
                <el-button @click.native.prevent="deleteRow(scope.$index, rank_list)" type="text" size="small">
                    删除
                </el-button>
            </template>
        </el-table-column> -->
    </el-table>
</template>

<script>
export default {
    data() {
        return {
            rank_list: [{
                spend_time: "120",
                test_username: "bimo",

            }, {
                spend_time: "110",
                test_username: "tom"
            }]
        }
    },
    methods: {
        deleteRow(index, rows) {
            rows.splice(index, 1);
        }
    }
}
</script>