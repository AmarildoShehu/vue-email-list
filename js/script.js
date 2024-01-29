console.log("js script ok");

console.log("Vue js ok", Vue);

const root = document.getElementById("myList");
const endpoint = "https://flynn.boolean.careers/exercises/api/random/mail";
const numOfEmails = 10;

axios.get(endpoint).then((res) => {
  console.log(res.data);

  root.innerText = res.data.response;
});

// const { createApp } = Vue;
// const app = createApp({});

// app.mount("#root");
