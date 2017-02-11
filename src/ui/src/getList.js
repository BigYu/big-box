export default function getList(count) {
  let res = [];

  for (let i = 0; i < count; i++) {
    res.push({
      content: `/static/images/${i}.jpg`,
    });
  }

  return res;
}
