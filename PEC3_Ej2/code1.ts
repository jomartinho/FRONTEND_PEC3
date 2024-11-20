const a = 1 + 2;
const b = a + 3;
const c = {
  apple: a,
  banana: b
};
const d = c.apple * 4;

c.apple = "helloWorld";

const e = c.orange;

const f = c.banana * "text";