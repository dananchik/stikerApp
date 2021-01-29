<template>
  <form action="">
    <input type="text" name="title" v-model="form.title" placeholder="title" />
    <textarea
      name="description"
      cols="30"
      rows="10"
      placeholder="description"
      v-model="form.description"
    ></textarea>
    <input type="file" ref="file" @change="ChangeImage()" />
    <button @click.prevent="CreateStiker">отправить</button>
  </form>
</template>

<script>
export default {
  name: "CreateForm",
  data: () => ({
    form: {
      title: "",
      description: "",
      file: "",
    },
  }),
  methods: {
    CreateStiker(e) {
        let data = new FormData()
        data.append('file', this.form.file)
        data.append('title',this.form.title)
        data.append('description', this.form.description)
        axios
            .post("/api/stikers", data, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
            })
            .then((res) => {
            console.log(res.data);
            // доделать
            });
        },
    ChangeImage(e) {
      this.form.file = this.$refs.file.files[0];
      console.log(this.form.file)
    },
  },
};
</script>

<style></style>
