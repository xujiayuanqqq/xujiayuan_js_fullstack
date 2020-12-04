<template>
  <div>
    <h3>weclome vue3</h3>
    <button v-for="(item, index) in books" :key="index" @click="selectBookFun(index)">{{index}}:{{item}}</button>
    <div v-if="selectBook">你选择了《{{ selectBook }}》这本书</div>
    <div>
      <button @click="overAction">订购</button>
      <div v-if="overText">{{ overText }}订购完成</div>
    </div>
    <div>
      <div>{{ nowTime }}</div>
      <div><button @click="getNowTime">显示时间</button></div>
    </div>
    <div v-if="loading">Loading......</div>
    <img v-if="loaded" :src="result.message" alt="">
    <modal/>
    <div>
      <Suspense>
        <template #default>
          <BookShow />
        </template>
        <template #fallback>
          <h1>Loading......</h1>
        </template>
      </Suspense>
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  reactive,
  toRefs,
  ref,
  watch,
  onErrorCaptured
  // onMounted,
  // onBeforeMount,
  // onBeforeUpdate,
  // onUpdated,
  // onRenderTracked
} from 'vue';
import { nowTime, getNowTime } from './hooks/useNowTime';
import useUrlAxios from './hooks/useURLAxios';
import modal from './components/Modal.vue';
// import AsyncShow from './components/AsyncShow.vue';
import BookShow from './components/BookShow.vue';

export default defineComponent({
  name: 'App',
  components: {
    modal,
    // AsyncShow,
    BookShow
  },
  setup() {
    // const books = ref(['红楼梦', '西游记', '三国演义', '水浒传']);
    // const selectBook = ref('');
    // const selectBookFun = (index: number) => {
    //   selectBook.value = books.value[index]
    // }
    interface DataProps {
      books: string[];
      selectBook: string;
      selectBookFun: (index: number) => void;
    }
    const data: DataProps = reactive({
      books: ['红楼梦', '西游记', '三国演义', '水浒传'],
      selectBook: '',
      selectBookFun: (index: number) => {
        data.selectBook = data.books[index];
      }
    });
    const refData = toRefs(data);
    const overText = ref('');
    const overAction = () => {
      overText.value = data.selectBook;
    };
    watch([overText, () => data.selectBook], (newValue, oldValue) => {
      console.log(newValue, 'new');
      console.log(oldValue, 'old');
      document.title = newValue[0];
    })

    const { result, loading, loaded } = useUrlAxios('/');
    onErrorCaptured((error) => {
      console.log(error);
      return true
    })

    // onBeforeMount(() => {
    //   console.log('2-组件挂载到页面之前执行-----onBeforeMount()');
    // });
    // onMounted(() => {
    //   console.log('3-组件挂载到页面之后执行-----onMounted()');
    // });
    // onBeforeUpdate(() => {
    //   console.log('4-组件更新之前-----onBeforeUpdate()');
    // })
    // onUpdated(() => {
    //   console.log('5-组件更新之后-----onUpdated()');
    // })
    // onRenderTracked((event) => {
    //   console.log("状态跟踪组件----------->");
    //   console.log(event);
    //   /**
    //    * event对象属性
    //    * key 变量发生了变化
    //    * newValue 更新后变量的值
    //    * oldValue 更新前变量的值
    //    * target 目前页面中响应变量和函数
    //    */
    // })
    return {
      ...refData,
      overText,
      overAction,
      nowTime,
      getNowTime,
      result,
      loading,
      loaded
      // data
      // books,
      // selectBook,
      // selectBookFun
    }
  }
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
