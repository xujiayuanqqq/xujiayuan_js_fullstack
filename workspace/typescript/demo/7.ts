// const Status = {
//   WANT: 0,
//   DECIDE: 1,
//   REFUSE: 2
// };

// 枚举
enum Status {
  WANT,
  DECIDE,
  REFUSE
}

function getServe(status: any) {
  if (status === Status.WANT) {
    return 'result';
  } else if (status === Status.DECIDE) {
    return 'buy';
  } else if (status === Status.REFUSE) {
    return 'back'
  }
}

const result = getServe(0);
console.log(result);
console.log(Status.WANT);
console.log(Status.DECIDE);
console.log(Status.REFUSE);
console.log(Status.DECIDE, Status[1]); //  枚举通过下标反查

// enum Status {
//   WANT = 1, // 可以改变默认值，从1开始
//   DECIDE,
//   REFUSE
// }