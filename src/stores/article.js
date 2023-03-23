import { ref } from 'vue'
import { defineStore } from 'pinia'
import { getAllArticle } from '../api/blog'
import { marked } from 'marked'

// 获取文章列表
export const useArticle = defineStore('article', () => {
    const article = ref([])
    function get(id) {
        return article.value.find(it => it.id === id)
    }
    getAllArticle().then((res) => {
        console.log('请求成功')
        if (res.data) {
            console.log(res.data)
            article.value = res.data
            article.value.forEach((it) => {
                it.html = marked.parse(it.detail)
            })
        }
    })

    return { article, get }
})
