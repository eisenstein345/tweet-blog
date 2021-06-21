function GetLocalData() {
  const localData = localStorage.getItem("tweetsArray");
  return localData ? JSON.parse(localData) : [];
}
export default GetLocalData;
