const sentence = "hello there from lighthouse labs";

for (let i in sentence) {
  setTimeout(() => {
    process.stdout.write(sentence[i]);
  }, 50 * i)
};

setTimeout(() => process.stdout.write('\n'), sentence.length * 50);