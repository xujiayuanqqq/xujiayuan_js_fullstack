<template>
    <div>
        <comment-form @addComment="addComment"/>
        <comment-list :list="list"/>
        <pagination :totalCount="totalCount" 
        :currentPage="currentPage"
        :pagesize="pagesize"
         @turnPage="turnPage"/>
    </div>
</template>
<script>
import CommentForm from './CommentForm.vue'
import CommentList from './CommentList.vue'
import Pagination from './Pagination.vue'
export default {
    data () {
        return {
            // totalData 所以的数据 => 当前页面的评论 list  
            list: [],
            // pagination组件无法独立， list
            pagesize: 3,
            totalData: [],
            totalCount: 0,
            currentPage: 1
        }
    },
    methods: {
        turnPage (curr) {

        },
        addComment (msg) {
            // console.log(msg);
            // this.list.push(msg);
            this.totalData.push({text: msg});
            this.totalCount = this.totalData.length;
            if (this.totalCount <= this.pagesize) {
                this.list = this.totalData;
            } else {
                // this.list = 
                this.list = this.totalData.slice(this.totalCount-this.pagesize);
            }
            this.currentPage = 1;
            this.list.reverse();
        }
    },
    components: {
        CommentForm,
        CommentList,
        Pagination
    }
}
</script>
<style>

</style>
