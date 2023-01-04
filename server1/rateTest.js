const tester = async () => {
 for (let i = 0; i < 101; i++) {
  console.log(i, await getAllBooks());
  await sleep(100);
 }
};

const getAllBooks = async () => {
 const res = await fetch('http://localhost:8000/books/getAll');
 if (res.status != 200) {
  return res;
 }
 return null;
};

function sleep(ms) {
 return new Promise((resolve) => {
  setTimeout(resolve, ms);
 });
}

tester();
