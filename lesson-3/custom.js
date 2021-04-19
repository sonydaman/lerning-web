// $(function () {
//   console.log("hi");
// });

// bind events

$(document).ready(function () {
  console.log("hi");
  var firstName = "Manvinder";
  var secondName = "Khushal";
  var thirdName = "Nidhi";

  //   console.log(firstName + secondName + thirdName);
  console.log(`${firstName} ${secondName} ${thirdName}`);

  const btnSelector = $(".btn");

  //   btnSelector.click(function () {
  //     console.log("Clcik");
  //   });
  btnSelector.click(() => {
    const items = $(".items");
    // actionSelector.hide();
    // actionSelector.fadeOut();
    // actionSelector.remove();
    const itemValues = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    // const item = $("<div></div>").addClass("item").text("6 * 1 = 6");
    itemValues.map((itemValues, index) => {
      //   console.log(itemValues, index);
      const item = $("<div></div>")
        .addClass("item")
        .text(`6 * ${index + 1} = ${6 * itemValues}`);
      items.append(item);
    });
  });
});
