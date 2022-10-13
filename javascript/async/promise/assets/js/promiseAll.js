// 3
// Parallay
// Sequncely
// Race
let cl = console.log;
const promisify = (item, timer) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(item);
    }, timer);
  });

const a = () => promisify("HTML", 100);
const b = () => promisify("JS", 5000);
const c = () => promisify("Angular", 3000);

async function parallayCall() {
  const allPromises = [a(), b(), c()];
  cl(allPromises);
  const [output1, output2, output3] = await Promise.all(allPromises);
  cl(
    `Promise are consumed Parallaly and result is ${output1} ${output2} ${output3}`
  );
}

parallayCall();

async function raceCall() {
  const allPromises = [a(), b(), c()];
  const output1 = await Promise.race(allPromises);
  cl( `promise are called with Race ${output1}`)
}
(raceCall())

