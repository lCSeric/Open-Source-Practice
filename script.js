function calculateCredits() {
    var RequiredCredit1 = parseInt(document.getElementById("RequiredCredit1").value || 0);
    var RequiredCredit2 = parseInt(document.getElementById("RequiredCredit2").value || 0);
    var RequiredCredit3 = parseInt(document.getElementById("RequiredCredit3").value || 0);
    var RequiredCredit4 = parseInt(document.getElementById("RequiredCredit4").value || 0);
  
    var DepartmentalElective1 = parseInt(document.getElementById("DepartmentalElective1").value || 0);
    var DepartmentalElective2 = parseInt(document.getElementById("DepartmentalElective2").value || 0);
    var DepartmentalElective3 = parseInt(document.getElementById("DepartmentalElective3").value || 0);
    var DepartmentalElective4 = parseInt(document.getElementById("DepartmentalElective4").value || 0);
  
    var NonDepartmentalElective1 = parseInt(document.getElementById("NonDepartmentalElective1").value || 0);
    var NonDepartmentalElective2 = parseInt(document.getElementById("NonDepartmentalElective2").value || 0);
    var NonDepartmentalElective3 = parseInt(document.getElementById("NonDepartmentalElective3").value || 0);
    var NonDepartmentalElective4 = parseInt(document.getElementById("NonDepartmentalElective4").value || 0);
  
    var GeneralEducationCourseCredit1 = parseInt(document.getElementById("GeneralEducationCourseCredit1").value || 0);
    var GeneralEducationCourseCredit2 = parseInt(document.getElementById("GeneralEducationCourseCredit2").value || 0);
    var GeneralEducationCourseCredit3 = parseInt(document.getElementById("GeneralEducationCourseCredit3").value || 0);
    var GeneralEducationCourseCredit4 = parseInt(document.getElementById("GeneralEducationCourseCredit4").value || 0);
  
    var totalRequiredCredit = RequiredCredit1 + RequiredCredit2 + RequiredCredit3 + RequiredCredit4;
    var totalDepartmentalElective = DepartmentalElective1 + DepartmentalElective2 + DepartmentalElective3 + DepartmentalElective4;
    var totalNonDepartmentalElective = NonDepartmentalElective1 + NonDepartmentalElective2 + NonDepartmentalElective3 + NonDepartmentalElective4;
    var totalGeneralEducationCourseCredit = GeneralEducationCourseCredit1 + GeneralEducationCourseCredit2 + GeneralEducationCourseCredit3 + GeneralEducationCourseCredit4;
  


    document.getElementById("sumResult").textContent = totalRequiredCredit;    
    if(51 - totalRequiredCredit <= 0){
        document.getElementById("needResult").textContent = "PASS";
    }
    else{
        document.getElementById("needResult").textContent = 51 - totalRequiredCredit;
    }
        

    document.getElementById("sum1Result").textContent = totalDepartmentalElective;
    if(10-totalDepartmentalElective <= 0){
        document.getElementById("need1Result").textContent = "PASS";
    }
    else{
        document.getElementById("need1Result").textContent = 10 - totalDepartmentalElective;
    }

  
    document.getElementById("sum2Result").textContent = totalNonDepartmentalElective;
    if(10-totalNonDepartmentalElective <= 0){
        document.getElementById("need2Result").textContent = "PASS";
    }
    else{
        document.getElementById("need2Result").textContent = 10 - totalNonDepartmentalElective;
    }
  
    document.getElementById("sum3Result").textContent = totalGeneralEducationCourseCredit;
    if(30-totalNonDepartmentalElective <= 0){
        document.getElementById("need3Result").textContent = "PASS";
    }
    else{
        document.getElementById("need3Result").textContent = 30 - totalGeneralEducationCourseCredit;
    }
    
    
    // if (need <= 0){
    //     document.getElementById("needResult").textContent = "PASS";
    //   }else{
    //     document.getElementById("needResult").textContent = need;
    //   }
    //   if (need1 <= 0){
    //     document.getElementById("need1Result").textContent = "PASS";
    //   }else{
    //     document.getElementById("need1Result").textContent = need1;
    //   }
    //   if (need2 <= 0){
    //     document.getElementById("need2Result").textContent = "PASS";
    //   }else{
    //     document.getElementById("need2Result").textContent = need2;
    //   }
    //   if (need3 <= 0){
    //     document.getElementById("need3Result").textContent = "PASS";
    //   }else{
    //     document.getElementById("need3Result").textContent = need3;
    //   }
    
    // 使用Fetch API发送请求
    fetch("database.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: new URLSearchParams({
        "RequiredCredit1": RequiredCredit1,
        "RequiredCredit2": RequiredCredit2,
        "RequiredCredit3": RequiredCredit3,
        "RequiredCredit4": RequiredCredit4,
        "DepartmentalElective1": DepartmentalElective1,
        "DepartmentalElective2": DepartmentalElective2,
        "DepartmentalElective3": DepartmentalElective3,
        "DepartmentalElective4": DepartmentalElective4,
        "NonDepartmentalElective1": NonDepartmentalElective1,
        "NonDepartmentalElective2": NonDepartmentalElective2,
        "NonDepartmentalElective3": NonDepartmentalElective3,
        "NonDepartmentalElective4": NonDepartmentalElective4,
        "GeneralEducationCourseCredit1": GeneralEducationCourseCredit1,
        "GeneralEducationCourseCredit2": GeneralEducationCourseCredit2,
        "GeneralEducationCourseCredit3": GeneralEducationCourseCredit3,
        "GeneralEducationCourseCredit4": GeneralEducationCourseCredit4
      })
    })
      .then(function(response) {
        if (response.ok) {
          return response.text();
        } else {
          throw new Error("Error: " + response.status);
        }
      })
      .then(function(data) {
        console.log("Data inserted successfully!");
      })
      .catch(function(error) {
        console.log("Error: " + error);
      });
  }