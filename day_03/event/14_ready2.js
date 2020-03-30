//所有页面内容加载完成后才自动执行
//window.onload=function(){
//window.addEventListener("load",function(){
//$(window).load(function(){
//$(document).ready(function(){
$(function(){
  alert("仅HTML+JS加载完成就为btn2绑定事件")
  $("#btn2").click(function(){ alert(`btn2疼！`) })
})