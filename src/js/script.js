const submitButton = document.getElementById("submit")

submitButton.addEventListener("click", () => {
  const number1 = document.getElementById("angka-pertama").value
  const number2 = document.getElementById("angka-kedua").value

  const operators = document.getElementById("operator").value

  let result = document.getElementById("hasil")

  switch (operators) {
    case "tambah":
      result.value = parseInt(number1) + parseInt(number2)
      break;
    case "kurang":
      result.value = parseInt(number1) - parseInt(number2)
      break;
    case "bagi":
      result.value = parseInt(number1) / parseInt(number2)
      break;
    case "kali":
      result.value = parseInt(number1) * parseInt(number2)
      break;
  }
  
})

const resetButton = document.getElementById("reset")

resetButton.addEventListener("click", () => {
  document.getElementById("angka-pertama").value = ""
  document.getElementById("angka-kedua").value = ""
  document.getElementById("hasil").value = ""
})