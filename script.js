// Fonction pour convertir le binaire en décimal
function binToDec(binary) {
    let decimal = 0;
    for (let i = binary.length - 1; i >= 0; i--) {
      const digit = parseInt(binary[i]);
      if (isNaN(digit) || digit !== 0 && digit !== 1) {
        return "Entrez un nombre binaire valide.";
      }
      decimal += digit * Math.pow(2, binary.length - 1 - i);
    }
    return decimal;
  }
  
  // Écouteur d'événement pour le bouton "Convertir"
  document.getElementById("convertBtn").addEventListener("click", function () {
    const binaryInput = document.getElementById("binaryInput").value;
    const decimalOutput = document.getElementById("decimalOutput");
    const decimalValue = binToDec(binaryInput);
    decimalOutput.textContent = "Équivalent décimal : " + decimalValue;
  });
  
  // Écouteur d'événement pour le champ d'entrée
const binaryInput = document.getElementById("binaryInput");
binaryInput.addEventListener("input", function () {
  const input = binaryInput.value;
  const errorMessage = document.getElementById("error");
  
  if (input.length > 8) {
    binaryInput.value = input.slice(0, 8);
    errorMessage.textContent = "Limite de 8 chiffres atteinte.";
    return;
  }
  
  errorMessage.textContent = "";
  for (let i = 0; i < input.length; i++) {
    if (input[i] !== "0" && input[i] !== "1") {
      errorMessage.textContent = "Entrez uniquement des 0 et des 1.";
      break;
    }
  }
});