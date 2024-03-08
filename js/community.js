const navItems = document.querySelectorAll(".nav-item");

navItems.forEach((navItem, i) => {
  navItem.addEventListener("click", () => {
    navItems.forEach((item, j) => {
      item.className = "nav-item";
    });
    navItem.className = "nav-item active";
  });
});


"use strict";
(function () {
	window.onload = () => {
		const obj = document.querySelector("#gallery");
		const time = 10000;
		function animStart() {
			if (obj.classList.contains("active") == false) {
				obj.classList.add("active");
				setTimeout(() => {
					animEnd();
				}, time);
			}
		}
		function animEnd() {
			obj.classList.remove("active");
			obj.offsetWidth;
		}
		document.addEventListener("scroll", function () {
			// scroll or scrollend
			animStart();
		});
		window.addEventListener("resize", animStart);
		animStart();
	};
})();


// 获取所有的 "like-icon" 元素
var likeIcons = document.getElementsByClassName('like-icon');

// 为每个 "like-icon" 元素添加点击事件
for (var i = 0; i < likeIcons.length; i++) {
  likeIcons[i].addEventListener('click', function() {
    // 点击后，切换 "liked" 类，从而改变颜色
    this.classList.toggle('liked');
  });
}


