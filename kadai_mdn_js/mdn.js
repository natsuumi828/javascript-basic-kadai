// const today = new Date();
// const date = () => {
//   console.log(today.getFullYear () +'年');
//   console.log(today.getMonth() + 1 +'月');
//   console.log(today.getDate() + '日');
// }
// date();

const today = new Date();

const year = today.getFullYear();
const month = today.getMonth() + 1;
const day = today.getDate();

console.log( year + '年' + month + '月' + day + '日');