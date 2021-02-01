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
</style>
