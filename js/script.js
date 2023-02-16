const $name = document.querySelector("#name");
const $button = document.querySelector("#button");
const $reset = document.querySelector("#reset");

$button.addEventListener("click", () => {
  const $count = document.querySelectorAll("input[id='movie']:checked").length;
  alert(`${$name.value}님, 저와 ${$count}개의 취향이 같으시네요!`);
});
