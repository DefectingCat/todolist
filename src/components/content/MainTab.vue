.<template>
  <div class="main-tab">
    <div class="input">
      <InputButton @addMsg="addMsg" />
    </div>
    <Lists
      :lists="lists"
      @removeItem="removeItem"
      @editMsg="editMsg"
      @doneItem="doneItem"
    />

    <div class="wrap-proecss">
      <div class="processed" :style="{ width: process }">
        <span>
          {{ process }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import InputButton from '@/components/common/InputButton';
import Lists from '@/components/common/Lists';

export default {
  components: {
    InputButton,
    Lists
  },
  data() {
    return {
      lists: [],
      id: 0
    };
  },
  methods: {
    addMsg(msg) {
      let item = { id: this.id, msg: msg, done: false };
      this.lists.unshift(item);
      this.id++;
    },
    removeItem(i) {
      this.lists.splice(i, 1);
    },
    editMsg(i, message) {
      this.lists[i].msg = message;
    },
    doneItem(i) {
      this.lists[i].done
        ? (this.lists[i].done = false)
        : (this.lists[i].done = true);
    }
  },
  computed: {
    process() {
      let doneItem = [];
      let result = 0;
      let len = this.lists.length;
      for (let i of this.lists) {
        if (i.done) {
          doneItem.push(i);
        }
      }
      result = (doneItem.length / len) * 100;
      if (Math.floor(result)) {
        return `${Math.floor(result)}%`;
      } else {
        return 0;
      }
    }
  }
};
</script>

<style scoped>
.main-tab {
  position: fixed;
  top: 50%;
  left: 50%;
  background-color: #fff;
  box-shadow: 0 20px 80px rgba(0, 0, 0, 0.6);
  height: 600px;
  width: 400px;
  transform: translate(-50%, -50%);
  display: flex;
  flex-flow: column nowrap;
  /* justify-content: start; */
  /* justify-items: center; */
  align-items: center;
  border-radius: 1em;
}
.input {
  margin-top: 7%;
  width: 350px;
}
.list {
  margin-top: 7%;
  width: 350px;
  overflow: scroll;
}
.list::-webkit-scrollbar {
  width: 0;
}
.processed {
  display: flex;
  background-color: rgba(189, 189, 189, 0.562);
  height: 30px;
  transition: all 500ms ease;
  border-radius: 1em;
  overflow: hidden;
  line-height: 30px;
  justify-content: flex-end;
}
.processed span {
  margin-right: 4px;
}
.wrap-proecss {
  position: absolute;
  bottom: 0;
  width: 100%;
  border-radius: 1em;
  overflow: hidden;
}
</style>
