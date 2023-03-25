<script setup>
import { useData } from 'vitepress'
import { ref } from 'vue'
const { site, theme, page, frontmatter } = useData()

let siderbar = theme.value.sidebar
let articleList = ref([])
siderbar.forEach((bar)=>{
    if ("周报" === bar.text) {
        articleList.value = bar.items
    }
})

</script>

## 文件列表

<a v-for="item in articleList" href='item.link'>
  {{ item.text }}
  <br>
</a>
