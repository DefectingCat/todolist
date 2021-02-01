.<template>
  <div class="list">
    <ul>
      <li v-for="(item, i) in lists" :key="item.id" :id="item.id">
        <label :for="item.id">
          <input
            type="checkbox"
            :name="item.id"
            :id="item.id"
            :key="item.id"
            @change="doneItem(i)"
          />
        </label>
        <input
          type="text"
          v-show="isEdit == item.id"
          v-model="editedMsg"
          @keyup.enter="editMsg(i)"
          :key="item.id"
          @blur="editMsg(i)"
        />
        <span v-show="isEdit != item.id" :class="{ done: item.done }">
          {{ item.msg }}
        </span>

        <button @click="editItem(i, item.id)">编辑</button>
        <button @click="removeItem(i)">删除</button>
      </li>
    </ul>
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
}
.done {
  text-decoration: line-through;
}
</style>
