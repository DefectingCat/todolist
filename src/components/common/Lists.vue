.<template>
  <div class="list">
    <transition-group name="list" tag="ul">
      <li v-for="(item, i) in lists" :key="item.id" :id="item.id">
        <div class="item-view">
          <input
            type="checkbox"
            :name="item.id"
            :id="item.id"
            :key="item.id"
            @change="doneItem(i)"
          />
          <label :for="item.id">
            <span
              v-show="isEdit != item.id"
              :class="{ done: item.done }"
              @dblclick="editItem(i, item.id)"
              class="message"
            >
              {{ item.msg }}
            </span>
          </label>
          <input
            type="text"
            v-show="isEdit == item.id"
            v-model="editedMsg"
            @keyup.enter="editMsg(i)"
            @blur="editMsg(i)"
            class="edit"
          />
          <i
            class="ico-btn iconfont icon-bianji"
            @click="editItem(i, item.id)"
          ></i>
          <i class="ico-btn iconfont icon-shanchu" @click="removeItem(i)"></i>
        </div>
      </li>
    </transition-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isEdit: -1,
      editedMsg: ''
    };
  },
  props: {
    lists: Array
  },
  methods: {
    removeItem(i) {
      this.$emit('removeItem', i);
    },
    editItem(i, id) {
      this.isEdit = id;
      this.editedMsg = this.lists[i].msg;
    },
    editMsg(i) {
      this.$emit('editMsg', i, this.editedMsg);
      this.isEdit = -1;
    },
    doneItem(i) {
      this.$emit('doneItem', i);
    }
  }
};
</script>

<style scoped>
/* .list {
  display: flex;
  align-items: center;
} */
ul {
  list-style-type: none;
}
li {
  padding-left: 5%;
  transition: all 500ms ease;
}
.done {
  text-decoration: line-through;
}
.ico-btn {
  cursor: pointer;
  padding-left: 6px;
}
.message {
  display: inline-block;
  width: 250px;
  padding-left: 6px;
  /* padding-right: 4px; */
  word-break: break-all;
  flex: 1;
  font-size: 18px;
}
.item-view {
  display: flex;
  align-items: center;
  /* justify-content: space-around; */
  margin-top: 8px;
}
.edit {
  border: none;
  outline: none;
  font: inherit;
  font-style: italic;
  width: 250px;
  padding-left: 6px;
  /* padding-right: 4px; */
}
/* .list-enter-active,
.list-leave-active {
  transition: all 500ms ease;
} */
.list-leave-active {
  position: absolute;
}
.list-enter {
  opacity: 0;
  transform: translateY(-30px);
}
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
/* .list-move {
  transition: all 500ms ease;
} */
</style>
