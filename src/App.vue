<template>
  <div class="app">
    <header class="header">
      <div class="container">
        <h1>📚 新概念英语学习</h1>
        <p>New Concept English Learning System</p>
      </div>
    </header>

    <main class="container">
      <div class="nav-tabs">
        <button 
          class="nav-tab" 
          :class="{ active: activeTab === 'lessons' }"
          @click="activeTab = 'lessons'"
        >
          📖 课文学习
        </button>
        <button 
          class="nav-tab" 
          :class="{ active: activeTab === 'words' }"
          @click="activeTab = 'words'"
        >
          📝 单词表
        </button>
        <button 
          class="nav-tab" 
          :class="{ active: activeTab === 'dictation' }"
          @click="activeTab = 'dictation'"
        >
          ✍️ 单词默写
        </button>
        <button 
          class="nav-tab" 
          :class="{ active: activeTab === 'progress' }"
          @click="activeTab = 'progress'"
        >
          📊 学习进度
        </button>
      </div>

      <component :is="currentView" :key="activeTab"></component>
    </main>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import LessonView from './views/LessonView.vue'
import WordsView from './views/WordsView.vue'
import DictationView from './views/DictationView.vue'
import ProgressView from './views/ProgressView.vue'

const activeTab = ref('lessons')

const views = {
  lessons: LessonView,
  words: WordsView,
  dictation: DictationView,
  progress: ProgressView
}

const currentView = ref(views[activeTab.value])

watch(() => activeTab.value, (newTab) => {
  currentView.value = views[newTab]
})
</script>

<style scoped>
.app {
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.header {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  color: white;
  padding: 40px 20px;
  text-align: center;
  border-bottom: 2px solid rgba(255, 255, 255, 0.2);
}

.header h1 {
  font-size: 48px;
  margin-bottom: 10px;
  color: white;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
}

.header p {
  font-size: 18px;
  color: rgba(255, 255, 255, 0.9);
}

main {
  padding-top: 30px;
  padding-bottom: 40px;
}
</style>
