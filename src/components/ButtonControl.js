/* eslint-disable */
export const subtractionButton = (
  e,
  setGetNumber,
  name,
  dispatch,
  Add,
  Total,
  setLoading,
  setCheck,
  dolar,
  cent,
  numberProduct,
  totals
) => {
  if (
    e.currentTarget.parentElement.querySelector(".number_product").value != 1
  ) {
    const numberProducts = e.currentTarget.parentElement.querySelector(
      ".number_product"
    ).value--;

    setGetNumber(numberProducts);
    const index = Array.from(
      document.querySelectorAll(".product-control")
    ).indexOf(e.currentTarget.parentElement);
    const checkBox = document.querySelectorAll(".select")[index].checked;
    if (checkBox === true) {
      const total = parseFloat(totals) - (dolar + cent / 100);
      // localStorage.setItem("total", total.toFixed(2));
      numberProduct--;
      dispatch(Total({ sum: total.toFixed(2), number: numberProduct }));
    }
    const cart = JSON.parse(localStorage.getItem("cart"));
    let newCart = { ...cart };
    const indexCart = newCart.products.findIndex(
      (item, index) => item.name === name
    );

    newCart.products[indexCart].number--;
    newCart.total -= 1;
    localStorage.setItem("cart", JSON.stringify(newCart));
    dispatch(Add(newCart));
    setLoading(true);
  } else {
    setCheck({
      check: true,
      name: name,
    });
  }
};

export const additionButton = (
  e,
  setGetNumber,
  name,
  dispatch,
  Add,
  Total,
  setLoading,
  dolar,
  cent,
  numberProduct,
  totals
) => {
  e.target.disable = false;
  const numberProducts = e.currentTarget.parentElement.querySelector(
    ".number_product"
  ).value++;

  setGetNumber(numberProducts);

  const index = Array.from(
    document.querySelectorAll(".product-control")
  ).indexOf(e.currentTarget.parentElement);
  const checkBox = document.querySelectorAll(".select")[index].checked;

  if (checkBox === true) {
    const total = parseFloat(totals) + (dolar + cent / 100);

    // localStorage.setItem("total", total.toFixed(2));
    numberProduct++;
    dispatch(Total({ sum: total.toFixed(2), number: numberProduct }));
  }
  const cart = JSON.parse(localStorage.getItem("cart"));
  let newCart = { ...cart };
  const indexCart = newCart.products.findIndex(
    (item, index) => item.name === name
  );
  newCart.products[indexCart].number++;
  newCart.total += 1;
  localStorage.setItem("cart", JSON.stringify(newCart));
  dispatch(Add(newCart));
  setLoading(true);
};

export const checkedAllCheckBox = (dispatch, Total, check) => {
  const cart = JSON.parse(localStorage.getItem("cart"));
  let newCart = { ...cart };
  if (check === true) {
    const total = newCart.products.reduce((totals, item) => {
      return totals + item.number * (item.dolar + item.cent / 100);
    }, 0);
    const number = newCart.products.reduce((totals, item) => {
      return totals + item.number;
    }, 0);
    // localStorage.setItem("total", total.toFixed(2));
    dispatch(Total({ sum: total.toFixed(2), number: number }));
  } else {
    localStorage.setItem("total", 0);
    dispatch(Total({ sum: 0, number: 0 }));
  }
};

export const additionInput = (
  e,
  name,
  dispatch,
  Add,
  Total,
  setLoading,
  number,
  dolar,
  cent,
  numberProduct,
  totals
) => {
  if (e.target.value !== "") {
    e.target.disable = false;

    const cart = JSON.parse(localStorage.getItem("cart"));
    let newCart = { ...cart };
    const indexCart = newCart.products.findIndex((item) => item.name === name);
    const index = Array.from(
      document.querySelectorAll(".product-control")
    ).indexOf(e.currentTarget.parentElement);
    const checkBox = document.querySelectorAll(".select")[index].checked;

    if (checkBox === true) {
      const total =
        parseFloat(totals) -
        newCart.products[indexCart].number * (dolar + cent / 100) +
        number * (dolar + cent / 100);

      const numbers =
        numberProduct - newCart.products[indexCart].number + parseInt(number);
      // localStorage.setItem("total", total.toFixed(2));
      dispatch(Total({ sum: total.toFixed(2), number: numbers }));
    }

    newCart.products[indexCart].number = parseInt(number);

    const total = newCart.products.reduce((totals, number) => {
      return totals + number.number;
    }, 0);
    newCart.total = total;

    localStorage.setItem("cart", JSON.stringify(newCart));

    dispatch(Add(newCart));

    setLoading(true);
  }
};
export const deleteButton = (
  name,
  dispatch,
  Add,
  Total,
  getnumber,
  dolar,
  cent,
  setSelected,
  selected,
  numberProduct,
  totals
) => {
  const cart = JSON.parse(localStorage.getItem("cart"));
  let newCart = { ...cart };
  const check = newCart.products.filter((item) => item.name === name);
  if (check.length !== 0) {
    const index = newCart.products.findIndex((item) => item.name === name);
    newCart.total -= check[0].number;
    console.log(index, newCart.products[index]);
    const total =
      parseFloat(totals) -
      newCart.products[index].number * (dolar + cent / 100);
    newCart.products.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(newCart));
    // localStorage.setItem("total", total.toFixed(2));
    dispatch(Add(newCart));
    const changNumber = (numberProduct -= check[0].number);
    dispatch(
      Total({
        sum: total.toFixed(2),
        number: changNumber,
      })
    );
    setSelected(!selected);
  }
};
export const covertNumberToStar = (number) => {
  if (number === 5) {
    return "-166px -36px";
  } else if (number >= 4.5 && number < 5) {
    return "-84px -28px";
  } else if (number >= 4 && number < 4.5) {
    return "-84px -8px";
  } else if (number >= 3.5 && number < 4) {
    return "-181px -56px";
  } else if (number >= 3 && number < 3.5) {
    return "-293px -180px";
  } else if (number === 2) {
    return "-99px -132px";
  } else if (number === 1) {
    return "-375px -144px";
  } else if (number === 0) {
    return "-375px -144px";
  }
};
export const checkPercentStar = (comments, star) => {
  const numberOfStar = comments.filter((item) => item.star.number === star);
  const percent = (numberOfStar.length / comments.length) * 100;
  return Math.floor(percent);
};
const Covert = (date) => {
  switch (date) {
    case 1:
      return "January";
    case 2:
      return "February";
    case 3:
      return "March";
    case 4:
      return "April";
    case 5:
      return "May";
    case 6:
      return "June";
    case 7:
      return "July";
    case 8:
      return "August";
    case 9:
      return "September";
    case 10:
      return "October";
    case 11:
      return "November";
    case 12:
      return "December";

    default:
      return 0;
  }
};
export const covertDate = (date) => {
  const getDate = new Date(date);
  const covert =
    Covert(getDate.getMonth() + 1) +
    " " +
    getDate.getDate() +
    ", " +
    getDate.getFullYear();
  return covert;
};
