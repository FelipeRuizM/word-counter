<template>
  <div class="home">

    <v-form>
      <v-file-input label="Select subtitles" prepend-icon="mdi-message-text" append-icon="mdi-send" outlined multiple
        v-model="files" @click:append="processSubtitles">
      </v-file-input>
    </v-form>

    <div class="pills">
      <PillComponent v-for="item in groupedWords" :word="item.word" :amount="item.amount" :key="item.word" />
    </div>

  </div>
</template>

<script>
import PillComponent from './PillComponent.vue';
import { ipcRenderer } from 'electron';

export default {
  component: {
    PillComponent
  },
  data: function () {
    return {
      files: [],
      groupedWords: []
    };
  },
  components: { PillComponent },
  methods: {
    processSubtitles() {
      let paths = this.files.map(file => file.path);
      ipcRenderer.send("process-subtitles", paths);
      ipcRenderer.on("process-subtitles", (event, response) => {
        this.groupedWords = response;
      });
    }
  }
}

</script>

<style>
.home {
  margin: 20px;
}

.pills {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>