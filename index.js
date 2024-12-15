// import { customAlphabet } from "nanoid";
// import Toastify from "toastify-js";
// import "toastify-js/src/toastify.css";
// import * as basicLightbox from "basiclightbox";

// const model = {};
// const nanoid = customAlphabet("Украфівіячс1234?-_&&", 12);
// model.id = nanoid();

// console.log(model);

Toastify({
  text: "Невірно заповнені поля",
  duration: 3000,
  //   destination: "https://google.com",
  newWindow: true,
  close: true,
  gravity: "bottom", // `top` or `bottom`
  position: "right", // `left`, `center` or `right`
  stopOnFocus: true, // Prevents dismissing of toast on hover
  style: {
    background: "linear-gradient(to right, #00b09b, #96c93d)",
  },
  className: "",
  offset: {
    x: "100px", // horizontal axis - can be a number or a string indicating unity. eg: '2em'
    y: "100px", // vertical axis - can be a number or a string indicating unity. eg: '2em'
  },
  onClick: function () {
    console.log("Ok");
  }, // Callback after click
}).showToast();

const instance = basicLightbox.create(
  `
	<h1>Not closable</h1>
	<p>It's not possible to close this lightbox with a click.</p>
`,
  {
    closable: false,
  }
);
console.log(instance);
instance.show();
console.log(instance.visible());

instance.close();
