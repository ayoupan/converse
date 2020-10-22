<?php
header('content-type:text/html;charset=utf-8;');

$uname = $_GET['myname'];//获取前端传递的用户名

$upass = $_GET['mypass'];//获取前端传递的密码

// 连接数据库
$conn = mysqli_connect('127.0.0.1','root','root','user');

$sql = "SELECT * FROM `info` WHERE `myname`='$uname' AND `mypass`='$upass'";

$res = mysqli_query($conn,$sql);
// 解析结果
$row = mysqli_fetch_assoc($res);
// 断开连接
mysqli_close($conn);

if($row){
	header('location:../pages/converse.html');

}else{
    echo "用户名或密码错误!";
}

?>