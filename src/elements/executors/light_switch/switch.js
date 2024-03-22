import "./switch.css";

function Switch() {
  const addr = "http://192.168.247.99";
  var switchState = false;

  async function onClickEvent() {
    try {
      var button = document.getElementById("button_switch");
      console.log("data");
      const response = await fetch(
        `${addr}/switch?switch=${!switchState ? "1" : "0"}`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      switchState = data.switch;
      button.innerText = switchState ? "ON" : "OFF";
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
      <button
        className="button"
        id="button_switch"
        type="button"
        onClick={() => onClickEvent()}
      >
        ON
      </button>
    </div>
  );
}

export default Switch;
