<?php

error_reporting(E_ALL);
ini_set('display_errors', 1);

// 连接到数据库
$servername = "localhost";
$username = "root";  // 替换为您的数据库用户名
$password = "";      // 替换为您的数据库密码
$dbname = "credit_caculation";  // 替换为您创建的数据库名称

$conn = new mysqli($servername, $username, $password, $dbname);

// 检查连接是否成功
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

// 获取 POST 请求中的数据
$RequiredCredit1 = $_POST["RequiredCredit1"];
$RequiredCredit2 = $_POST["RequiredCredit2"];
$RequiredCredit3 = $_POST["RequiredCredit3"];
$RequiredCredit4 = $_POST["RequiredCredit4"];

$DepartmentalElective1 = $_POST["DepartmentalElective1"];
$DepartmentalElective2 = $_POST["DepartmentalElective2"];
$DepartmentalElective3 = $_POST["DepartmentalElective3"];
$DepartmentalElective4 = $_POST["DepartmentalElective4"];

$NonDepartmentalElective1 = $_POST["NonDepartmentalElective1"];
$NonDepartmentalElective2 = $_POST["NonDepartmentalElective2"];
$NonDepartmentalElective3 = $_POST["NonDepartmentalElective3"];
$NonDepartmentalElective4 = $_POST["NonDepartmentalElective4"];

$GeneralEducationCourseCredit1 = $_POST["GeneralEducationCourseCredit1"];
$GeneralEducationCourseCredit2 = $_POST["GeneralEducationCourseCredit2"];
$GeneralEducationCourseCredit3 = $_POST["GeneralEducationCourseCredit3"];
$GeneralEducationCourseCredit4 = $_POST["GeneralEducationCourseCredit4"];


// 将数据插入数据库表格
$sql = "INSERT INTO credit_data (
  RequiredCredit1,
  RequiredCredit2,
  RequiredCredit3,
  RequiredCredit4,
  DepartmentalElective1,
  DepartmentalElective2,
  DepartmentalElective3,
  DepartmentalElective4,
  NonDepartmentalElective1,
  NonDepartmentalElective2,
  NonDepartmentalElective3,
  NonDepartmentalElective4,
  GeneralEducationCourseCredit1,
  GeneralEducationCourseCredit2,
  GeneralEducationCourseCredit3,
  GeneralEducationCourseCredit4
) VALUES (
  $RequiredCredit1,
  $RequiredCredit2,
  $RequiredCredit3,
  $RequiredCredit4,
  $DepartmentalElective1,
  $DepartmentalElective2,
  $DepartmentalElective3,
  $DepartmentalElective4,
  $NonDepartmentalElective1,
  $NonDepartmentalElective2,
  $NonDepartmentalElective3,
  $NonDepartmentalElective4,
  $GeneralEducationCourseCredit1,
  $GeneralEducationCourseCredit2,
  $GeneralEducationCourseCredit3,
  $GeneralEducationCourseCredit4
)";

if ($conn->query($sql) === TRUE) {
  echo "Data inserted successfully!";
} else {
  echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>