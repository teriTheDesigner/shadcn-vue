<script>
import { ref } from 'vue'

export default {
  name: 'DragAndDrop',
  setup() {
    const items = ref([
      { id: 0, title: 'Item 1', list: 1 },
      { id: 1, title: 'Item 2', list: 1 },
      { id: 2, title: 'Item 3', list: 2 },
      { id: 3, title: 'Item 4', list: 2 },
      { id: 4, title: 'Item 5', list: 2 }
    ])

    const getList = (list) => {
      return items.value.filter((item) => item.list == list)
    }

    const startDrag = (event, item) => {
      console.log(item)
      event.dataTransfer.dropEffect = 'move'
      event.dataTransfer.effectAllowed = 'move'
      event.dataTransfer.setData('itemID', item.id)
    }
    const onDrop = (event, list) => {
      const itemID = event.dataTransfer.getData('itemID')
      const item = items.value.find((item) => item.id == itemID)
      item.list = list
    }
    return { getList, startDrag, onDrop }
  }
}
</script>
<template>
  <main class="m-20">
    <div class="drop-zone" @drop="onDrop($event, 1)" @dragenter.prevent @dragover.prevent>
      <div
        v-for="item in getList(1)"
        :key="item.id"
        class="drag-el"
        draggable="true"
        @dragstart="startDrag($event, item)"
      >
        {{ item.title }}
      </div>
    </div>
    <div class="drop-zone" @drop="onDrop($event, 2)" @dragenter.prevent @dragover.prevent>
      <div
        v-for="item in getList(2)"
        :key="item.id"
        class="drag-el"
        draggable="true"
        @dragstart="startDrag($event, item)"
      >
        {{ item.title }}
      </div>
    </div>
  </main>
</template>

<style>
.drop-zone {
  width: 50%;
  margin: 50px auto;
  background-color: pink;
  padding: 20px;
  border-radius: 12px;
  min-height: 20px;
}
.drag-el {
  background-color: rgb(204, 123, 135);
  color: white;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 6px;
  display: flex;
  align-content: center;
  justify-content: center;
  cursor: pointer;
}
.drag-el:nth-last-of-type(1) {
  margin-bottom: 0px;
}
</style>
