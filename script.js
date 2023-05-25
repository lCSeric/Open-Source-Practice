function calculateCredits() {
      var RequiredCredit1 = parseInt(document.getElementById("RequiredCredit1").value||0);
      var RequiredCredit2 = parseInt(document.getElementById("RequiredCredit2").value||0);
      var RequiredCredit3 = parseInt(document.getElementById("RequiredCredit3").value||0);
      var RequiredCredit4 = parseInt(document.getElementById("RequiredCredit4").value||0);
      
      var DepartmentalElective1 = parseInt(document.getElementById("DepartmentalElective1").value||0);
      var DepartmentalElective2 = parseInt(document.getElementById("DepartmentalElective2").value||0);
      var DepartmentalElective3 = parseInt(document.getElementById("DepartmentalElective3").value||0);
      var DepartmentalElective4 = parseInt(document.getElementById("DepartmentalElective4").value||0);
      
      var NonDepartmentalElective1 = parseInt(document.getElementById("NonDepartmentalElective1").value||0);
      var NonDepartmentalElective2 = parseInt(document.getElementById("NonDepartmentalElective2").value||0);
      var NonDepartmentalElective3 = parseInt(document.getElementById("NonDepartmentalElective3").value||0);
      var NonDepartmentalElective4 = parseInt(document.getElementById("NonDepartmentalElective4").value||0);
      
      var GeneralEducationCourseCredit1 = parseInt(document.getElementById("GeneralEducationCourseCredit1").value||0);
      var GeneralEducationCourseCredit2 = parseInt(document.getElementById("GeneralEducationCourseCredit2").value||0);
      var GeneralEducationCourseCredit3 = parseInt(document.getElementById("GeneralEducationCourseCredit3").value||0);
      var GeneralEducationCourseCredit4 = parseInt(document.getElementById("GeneralEducationCourseCredit4").value||0);
      
      
      var sum = RequiredCredit1 + RequiredCredit2 + RequiredCredit3 + RequiredCredit4;
      var sum1 = DepartmentalElective1 + DepartmentalElective2 + DepartmentalElective3 + DepartmentalElective4;
      var sum2 = NonDepartmentalElective1 + NonDepartmentalElective2 + NonDepartmentalElective3 + NonDepartmentalElective4;
      var sum3 = GeneralEducationCourseCredit1 + GeneralEducationCourseCredit2 + GeneralEducationCourseCredit3 + GeneralEducationCourseCredit4;
      
      var need = 51-sum;
      var need1 = 20-sum1;
      var need2 = 31-sum2;
      var need3 = 26-sum3;
      
      document.getElementById("sumResult").textContent = sum;
      document.getElementById("sum1Result").textContent = sum1;
      document.getElementById("sum2Result").textContent = sum2;
      document.getElementById("sum3Result").textContent = sum3;
      
      document.getElementById("needResult").textContent = need;
      document.getElementById("need1Result").textContent = need1;
      document.getElementById("need2Result").textContent = need2;
      document.getElementById("need3Result").textContent = need3;
      
      // Send data to the server for processing
      fetch('/calculate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ course: course, credits: credits })
      })
      .then(response => response.json())
      .then(data => {
        // Display the calculated results
        document.getElementById("result").innerHTML = `
          <p>Current Credits: ${data.currentCredits}</p>
          <p>Remaining Credits Needed: ${data.remainingCredits}</p>
          <p>Required Credits: ${data.requiredCredits}</p>
          <p>Departmental Electives Credits: ${data.departmentalElectives}</p>
          <p>Non-Departmental Electives Credits: ${data.nonDepartmentalElectives}</p>
          <p>General Education Course Credits: ${data.generalEducation}</p>
        `;
      });
    }
