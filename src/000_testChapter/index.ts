interface testObj {
  text: "이렇게 사용하시면 됩니다.";
}

const test = (obj: testObj): void => {
  console.log(obj.text);
  return;
};

export default test;
