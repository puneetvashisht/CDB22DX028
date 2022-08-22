const jobs = [
  { id: 1, isActive: true },
  { id: 2, isActive: true },
  { id: 3, isActive: false },
];

// map method is used to map the elements of an array and return a new array.
// It doesn't mutate the original array. Rather it return a new array with the mapped elements..
// It takes a callback function, and this callback function is responsible for changing mapping the array elements..
// let ids = jobs.map((job) => job.id); // map method..

// // 'ids' is an array of id's of job.

// console.log(ids);

const activeJobs = jobs.filter((job) => job.isActive); // filter method..
console.log(activeJobs);
