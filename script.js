const checkcgpa = () => {
  let cgpa = cgpaInput.value;

  if (cgpa === "" || cgpa <= 0.0 || cgpa > 5.0) {
    error.innerHTML = "invalid credentials";
    result.innerHTML = "";
  } else if (cgpa <= 1.49 && cgpa > 0.0) {
    result.innerHTML = '<span class="text-danger">"Pass (You are a failure, can you make it??)"</span>';
    error.innerHTML = "";
  } else if (cgpa <= 2.39 && cgpa >= 1.5) {
    result.innerHTML = '<span class="text-warning">"Third Class Honours"</span>';
    error.innerHTML = "";
  } else if (cgpa <= 3.49 && cgpa >= 2.40) {
    result.innerHTML = '<span class="text-info">"Second Class Honours (Lower Division)"</span>';
    error.innerHTML = "";
  } else if (cgpa <= 4.49 && cgpa >= 3.5) {
    result.innerHTML = '<span class="text-info">"Second Class Honours (Upper Division)"</span>';
    error.innerHTML = "";
  } else if (cgpa <= 5.00 && cgpa >= 4.5) {
    result.innerHTML = '<span class="text-success">"First Class Honours"</span>';
    error.innerHTML = "";
  }
};
