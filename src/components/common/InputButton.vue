.<template>
  <div class="input-btn">
    <input
      type="text"
      v-model="msg"
      @keyup.enter="emitMsg"
      placeholder="Add someting..."
    />
    <button @click="emitMsg">Add</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: ''
    };
  },
  methods: {
    emitMsg() {
      if (!(this.msg.trim() === '')) {
        this.$emit('addMsg', this.msg);
      }
      this.msg = '';
    }
  }
};
</script>

<style scoped>
.input-btn {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  width: 100%;
  align-items: center;
}
input {
  /* width: 100%; */
  border-radius: 1em;
  border: 1px solid #dce4ec;
  height: 40px;
  outline: none;
  padding: 0 10px 0 10px;
  line-height: 40px;
  font-size: 18px;
  transition: all 500ms ease;
}
input:focus {
  border: 1px solid black;
}
button {
  border-radius: 2em;
  border: 1px solid black;
  background: none;
  /* height: 40px; */
  line-height: 40px;
  /* width: 50px; */
  outline: none;
  cursor: pointer;
  padding: 0px 20px;
}
</style>
