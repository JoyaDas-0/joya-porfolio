// For toggling skill details
function toggleDetails(skillId) {
  const details = document.getElementById(skillId);
  if (details.style.display === "none") {
    details.style.display = "block";
  } else {
    details.style.display = "none";
  }
}

// Open Calculator
function openCalculator() {
  const calcWindow = window.open("", "_blank", "width=300,height=400");
  calcWindow.document.write(`
    <style>
      body {
        font-family: Arial, sans-serif;
        background-color:rgb(0, 0, 0); 
        text-align: center;
        margin: 0;
        padding: 0;
      }
      #calculator {
        margin: 2px auto;
        width: 250px;
        padding: 2px;
        border: 20px solid rgb(9, 77, 145); 
        border-radius: 25px;
        background-color: rgb(0, 0, 0); 
        box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.1);
      }
      h3 {
        color:rgb(255, 255, 255);
        font-size: 24px;
      }
      #display {
        width: 90%;
        height: 40px;
        margin-bottom: 15px;
        font-size: 20px;
        text-align: right;
        border: 2px solid #ccc;
        border-radius: 15px;
        padding: 5px;
      }
      button {
        width: 50px;
        height: 50px;
        margin: 5px;
        font-size: 25px;
        color: #ffffff;
        background-color: rgb(35, 42, 49); 
        border: none;
        border-radius: 5px;
        cursor: pointer;
        transition: background-color 0.3s;
      }
      .clear {
        width: 50%;
        height: 60px;
      }
      button:hover {
        background-color: rgb(95, 93, 93); 
      }
      button:active {
        background-color: rgb(73, 90, 107);
      }
      .operator {
        background-color: rgb(167, 12, 12); 
      }
      .operator:hover {
        background-color: rgb(204, 0, 112);
      }
      .clear {
        background-color: rgb(4, 127, 30);
      }
      .clear:hover {
        background-color: rgb(53, 229, 0);
      }
    </style>

    <h3>Calculator</h3>
    <div id="calculator">
      <input id="display" type="text" readonly /><br>
      <button onclick="appendNumber(1)">1</button>
      <button onclick="appendNumber(2)">2</button>
      <button onclick="appendNumber(3)">3</button><br>
      <button onclick="appendNumber(4)">4</button>
      <button onclick="appendNumber(5)">5</button>
      <button onclick="appendNumber(6)">6</button><br>
      <button onclick="appendNumber(7)">7</button>
      <button onclick="appendNumber(8)">8</button>
      <button onclick="appendNumber(9)">9</button><br>
      <button onclick="appendNumber(0)">0</button>
      <button class="operator" onclick="appendOperator('+')">+</button>
      <button class="operator" onclick="appendOperator('-')">-</button><br>
      <button class="operator" onclick="appendOperator('')"></button>
      <button class="operator" onclick="appendOperator('/')">/</button>
      <button class="operator" onclick="calculate()">=</button><br>
      <button class="clear" onclick="clearDisplay()">Clear</button>
    </div>

    <script>
      let expression = "";

      // Append numbers to the expression
      function appendNumber(num) {
        expression += num;
        document.getElementById('display').value = expression;
      }

      // Append operators to the expression
      function appendOperator(op) {
        if (expression === "" || "+-*/".includes(expression.slice(-1))) return;
        expression += op;
        document.getElementById('display').value = expression;
      }

      // Calculate the result
      function calculate() {
        try {
          const result = eval(expression); 
          document.getElementById('display').value = result;
          expression = result.toString();
        } catch (error) {
          document.getElementById('display').value = "Error!";
          expression = "";
        }
      }

      // Clear the display
      function clearDisplay() {
        expression = "";
        document.getElementById('display').value = "";
      }
    </script>
  `);
}

// Open Interactive Light Bulb
function openInteractiveLightBulb() {
  const bulbWindow = window.open("", "_blank", "width=400,height=500");
  if (!bulbWindow) {
      alert("Popup blocked! Please allow popups for this site.");
      return;
  }

  bulbWindow.document.write(`
    <style>
      body {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100vh;
        margin: 0;
        font-family: Arial, sans-serif;
        background-color: #f0f0f0;
      }
      img {
        width: 200px;
        height: 250px;
        margin-bottom: 20px;
        transition: opacity 0.5s;
      }
      button {
        padding: 10px 20px;
        margin: 5px;
        border: none;
        background-color: #0073e6;
        color: white;
        border-radius: 5px;
        cursor: pointer;
      }
      button:hover {
        background-color: #005bb5;
      }
    </style>
    <div>
      <img id="lightbulb" src="images/bulb-off.jpg" alt="Light Bulb" onerror="handleImageError()">
      <button onclick="turnOn()">Turn On</button>
      <button onclick="turnOff()">Turn Off</button>
    </div>
    <script>
      function turnOn() {
        document.getElementById('lightbulb').src = 'images/bulb-on.jpg';
      }
      function turnOff() {
        document.getElementById('lightbulb').src = 'images/bulb-off.jpg';
      }
      function handleImageError() {
        alert('Image failed to load. Check the file path or file name.');
      }
    </script>
  `);
}

// Open Digital Clock
function openClock() {
  const clockWindow = window.open("", "_blank", "width=300,height=200");
  clockWindow.document.write(`
    <style>
      body {
        font-family: Arial, sans-serif;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin: 0;
        height: 100%;
        background-color: rgb(0, 0, 1);
        color: white;
      }
      h1 {
        font-size: 48px;
        margin: 0;
      }
      h3 {
        font-size: 20px;
        color: red;
      }
    </style>
    <body>
      <h3>Digital Clock</h3>
      <h1 id="clock"></h1>
      <script>
        function updateClock() {
          const now = new Date();
          let hours = now.getHours();
          const minutes = now.getMinutes();
          const seconds = now.getSeconds();
          const ampm = hours >= 12 ? 'PM' : 'AM';
          hours = hours % 12;
          hours = hours ? hours : 12;
          const timeString = 
            (hours < 10 ? '0' + hours : hours) + ':' +
            (minutes < 10 ? '0' + minutes : minutes) + ':' +
            (seconds < 10 ? '0' + seconds : seconds) + ' ' + ampm;
          document.getElementById('clock').innerText = timeString;
        }
        setInterval(updateClock, 1000);
        updateClock();
      </script>
    </body>
  `);
}
  