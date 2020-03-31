jQuery.fn.myAccordion=function(){
  //1. 为插件中的元素自动添加class
  //获得当前插件的父元素
  var $parent=this;
  //为插件父元素添加class accordion
  $parent
    .addClass("accordion")
  //return $parent
  //为父元素下的所有子元素中奇数位置的元素添加.title
    .children(":nth-child(2n+1)") //记住
    .addClass("title")
  //return 所有奇数位置的元素: children(":nth-child(2n+1)")
  //为每个奇数位置的下一个兄弟元素加class content和fade
    .next() //自带遍历: 得到的是所有奇数位置的下一个兄弟元素，也就是所有偶数位置的元素
    .addClass("content fade")
  //return 所有偶数位置的元素
  //为所有偶数位置的元素中第一个元素加class in
    .first() //获得集合中第一个元素
    .addClass("in");
  //2. 为插件中的元素自动绑定事件处理函数
  $parent.on("click",".title",e=>
    $(e.target).next(".content").toggleClass("in")
      .siblings(".content").removeClass("in")
  );
}
//希望将来
//$("#my-accordion").myAccordion();