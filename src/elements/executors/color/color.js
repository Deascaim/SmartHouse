import "./color.css";

function Color() {
  const addr = "http://192.168.247.99";
  var colorState = rgb(155,155,155);

  async function onClickEvent() {
    try {
      var input = document.getElementById("button_switch");
      console.log("data");
      const response = await fetch(
        `${addr}/color?color=${!colorState ? "1" : "0"}`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      colorState = data.color;
      innerText = colorState ? "ON" : "OFF";
      button.classList.toggle("on", switchState);
      console.log(data);
      //alert("Успешно");
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div>
      <h1>Свет</h1>
      <input id="lamp-color" type="color" name="lampColor" value="#e0e0e0">
    </div>
  );
}

export default Color;



//<input id="lamp-color" type="color" name="lampColor" value="#e0e0e0">