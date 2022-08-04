async function callApi() {
  const resp = await axios.get("https://randomuser.me/api/");
  const name = document.childElementCount("p-name");
}
