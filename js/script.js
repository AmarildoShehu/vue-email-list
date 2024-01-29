console.log("js script ok");

console.log("Vue js ok", Vue);

const { createApp } = Vue;
const endpoint = "https://flynn.boolean.careers/exercises/api/random/mail";
const numOfEmails = 10;

const app = createApp({
  data: () => ({
    emails: [],
  }),
  created() {
    for (let i = 0; i < numOfEmails; i++) {
      axios.get(endpoint).then((res) => {
        console.log(res.data);

        this.emails.push(res.data.response);
      });
    }
  },
});

app.mount("#root");
