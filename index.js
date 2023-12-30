function calculateBMI() {
    // Retrieve values from the form
    var age = parseInt(document.getElementById('age').value);
    var gender = document.getElementById('gender').value;
    var height = parseFloat(document.getElementById('height').value);
    var heightUnit = document.getElementById('heightUnit').value;
    var weight = parseFloat(document.getElementById('weight').value);
    var weightUnit = document.getElementById('weightUnit').value;
  
    var bmi = weight / ((height / 100) * (height / 100));

    var interpretation = getBMIInterpretation(bmi, age, gender);
  
    document.getElementById('result').innerHTML = `Your BMI is: ${bmi.toFixed(2)} (${interpretation})`;
  }
  
  function getBMIInterpretation(bmi, age, gender) {
    if (bmi < 18.5) {
      return 'Underweight';
    } else if (bmi < 24.9) {
      return 'Normal weight';
    } else if (bmi < 29.9) {
      return 'Overweight';
    } else {
      return 'Obese';
    }
  }
  