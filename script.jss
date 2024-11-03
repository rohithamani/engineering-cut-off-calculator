function calculateEngineeringCutoff() {
    // Clear previous error messages
    document.getElementById('mathsError').innerText = '';
    document.getElementById('physicsError').innerText = '';
    document.getElementById('chemistryError').innerText = '';
    
    // Get values from input fields
    const maths = parseFloat(document.getElementById('maths').value);
    const physics = parseFloat(document.getElementById('physics').value);
    const chemistry = parseFloat(document.getElementById('chemistry').value);
    
    // Validate inputs
    let valid = true;
    if (isNaN(maths) || maths < 0 || maths > 100) {
        document.getElementById('mathsError').innerText = "Enter a valid mark (0-100)";
        valid = false;
    }
    if (isNaN(physics) || physics < 0 || physics > 100) {
        document.getElementById('physicsError').innerText = "Enter a valid mark (0-100)";
        valid = false;
    }
    if (isNaN(chemistry) || chemistry < 0 || chemistry > 100) {
        document.getElementById('chemistryError').innerText = "Enter a valid mark (0-100)";
        valid = false;
    }

    if (!valid) return; // Stop if any input is invalid

    // Calculate engineering cutoff
    const cutoff = (maths / 2) + (physics / 4) + (chemistry / 4);
    
    // Display the result
    document.getElementById('result').innerText = `Engineering Cutoff: ${cutoff.toFixed(2)}`;
    document.getElementById('result').style.display = 'block';
}
