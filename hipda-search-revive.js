// ==UserScript==
// @name         hipda搜索超能力~~~~
// @namespace    https://www.hi-pda.com/forum/search.php*
// @version      1.01
// @description  hipda恢复标题搜索结果(感谢论坛网友awk的发现),恢复全文搜索选项(修改自noname2017的脚本)
// @author       xiangzi fang
// @match        https://www.hi-pda.com/forum/search.php*
// @grant        none
// @home-url     https://github.com/fqxufo/hipda-search-revive
// ==/UserScript==

(function () {
  "use strict";

  // 增加全文的option
  var elements = document.getElementsByName("srchtype");
  var selectedelement;
  if (elements.length == 1) {
    selectedelement = elements[0];
  } else if (elements.length == 2) {
    selectedelement = elements[1];
  }
  selectedelement.options.add(new Option("全文", "fulltext"));

  //   生成随机字符串
  function genRandomWord(length) {
    var result = "";
    var characters = "abcdefghijklmnopqrstuvwxyz";
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }
  // 恢复标题搜索
  var optionTitle = document.querySelector(
    "#wrap > form > p.searchkey > select > option:nth-child(1)"
  );
  optionTitle.value = genRandomWord(4);
})();
