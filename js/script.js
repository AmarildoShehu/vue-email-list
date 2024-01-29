console.log("js script ok");

console.log("Vue js ok", Vue);

const { createApp } = Vue;
const myList = document.getElementById("myList");
const endpoint = "https://flynn.boolean.careers/exercises/api/random/mail";
const numOfEmails = 10;

const app = createApp({
  data: () => ({}),
  created() {
    axios.get(endpoint).then((res) => {
      console.log(res.data);

      myList.innerText = res.data.response;
    });
  },
});

app.mount("#root");
