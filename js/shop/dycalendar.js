
! function(t) {
	"use strict";

	function e(t, e) {
		var a, n, r, d, l, i;
		for(a = o.createElement("table"), n = o.createElement("tr"), l = 0; l <= 6; l += 1)(r = o.createElement("td")).innerHTML = "日一二三四五六" [l], n.appendChild(r);
		for(a.appendChild(n), n = o.createElement("tr"), l = 0; l <= 6 && l !== t.firstDayIndex; l += 1) r = o.createElement("td"), n.appendChild(r);
		for(i = 1; l <= 6;)(r = o.createElement("td")).innerHTML = i, t.today.date === i && t.today.monthIndex === t.monthIndex && !0 === e.highlighttoday && r.setAttribute("class", "dycalendar-today-date"), e.date === i && e.month === t.monthIndex && !0 === e.highlighttargetdate && r.setAttribute("class", "dycalendar-target-date"), n.appendChild(r), i += 1, l += 1;
		for(a.appendChild(n), d = 3; d <= 7; d += 1) {
			for(n = o.createElement("tr"), l = 0; l <= 6; l += 1) {
				if(i > t.totaldays) return a.appendChild(n), a;
				(r = o.createElement("td")).innerHTML = i, t.today.date === i && t.today.monthIndex === t.monthIndex && !0 === e.highlighttoday && r.setAttribute("class", "dycalendar-today-date"), e.date === i && e.month === t.monthIndex && !0 === e.highlighttargetdate && r.setAttribute("class", "dycalendar-target-date"), i += 1, n.appendChild(r)
			}
			a.appendChild(n)
		}
		return a
	}

	function a(t, a) {
		var n, r, d, l;
		return n = e(t, a), (d = o.createElement("div")).setAttribute("class", "dycalendar-month-container"), (r = o.createElement("div")).setAttribute("class", "dycalendar-header"), r.setAttribute("data-option", JSON.stringify(a)), "show" === a.prevnextbutton && ((l = o.createElement("span")).setAttribute("class", "dycalendar-prev-next-btn prev-btn"), l.setAttribute("data-date", a.date), l.setAttribute("data-month", a.month), l.setAttribute("data-year", a.year), l.setAttribute("data-btn", "prev"), l.innerHTML = "&lt;", r.appendChild(l)), (l = o.createElement("span")).setAttribute("class", "dycalendar-span-month-year"), "mmm" === a.monthformat ? l.innerHTML = t.monthName + " " + t.year : "full" === a.monthformat && (l.innerHTML = t.monthNameFull + " " + t.year), r.appendChild(l), "show" === a.prevnextbutton && ((l = o.createElement("span")).setAttribute("class", "dycalendar-prev-next-btn next-btn"), l.setAttribute("data-date", a.date), l.setAttribute("data-month", a.month), l.setAttribute("data-year", a.year), l.setAttribute("data-btn", "next"), l.innerHTML = "&gt;", r.appendChild(l)), d.appendChild(r), (r = o.createElement("div")).setAttribute("class", "dycalendar-body"), r.appendChild(n), d.appendChild(r), d
	}

	function n(t, e) {
		var a, n, r;
		return(n = o.createElement("div")).setAttribute("class", "dycalendar-day-container"), (a = o.createElement("div")).setAttribute("class", "dycalendar-header"), (r = o.createElement("span")).setAttribute("class", "dycalendar-span-day"), "ddd" === e.dayformat ? r.innerHTML = y.ddd[t.targetedDayIndex] : "full" === e.dayformat && (r.innerHTML = y.full[t.targetedDayIndex]), a.appendChild(r), n.appendChild(a), (a = o.createElement("div")).setAttribute("class", "dycalendar-body"), (r = o.createElement("span")).setAttribute("class", "dycalendar-span-date"), r.innerHTML = t.date, a.appendChild(r), n.appendChild(a), (a = o.createElement("div")).setAttribute("class", "dycalendar-footer"), (r = o.createElement("span")).setAttribute("class", "dycalendar-span-month-year"), "mmm" === e.monthformat ? r.innerHTML = t.monthName + " " + t.year : "full" === e.monthformat && (r.innerHTML = t.monthNameFull + " " + t.year), a.appendChild(r), n.appendChild(a), n
	}

	function r(t, e) {
		var a;
		for(a in e) !1 === t.hasOwnProperty(a) && (t[a] = e[a]);
		return t
	}

	function d(e, a, n) {
		var r, d, l = new Date,
			i = {};
		return e < s || e > m ? (t.console.error("Invalid Year"), !1) : a > 11 || a < 0 ? (t.console.error("Invalid Month"), !1) : n > 31 || n < 1 ? (t.console.error("Invalid Date"), !1) : (i.year = e, i.month = a, i.date = n, i.today = {}, r = l.toString().split(" "), d = y.ddd.indexOf(r[0]), i.today.dayIndex = d, i.today.dayName = r[0], i.today.dayFullName = y.full[d], d = u.mmm.indexOf(r[1]), i.today.monthIndex = d, i.today.monthName = r[1], i.today.monthNameFull = u.full[d], i.today.date = l.getDate(), i.today.year = r[3], l.setDate(1), l.setMonth(a), l.setFullYear(e), r = l.toString().split(" "), d = y.ddd.indexOf(r[0]), i.firstDayIndex = d, i.firstDayName = r[0], i.firstDayFullName = y.full[d], d = u.mmm.indexOf(r[1]), i.monthIndex = d, i.monthName = r[1], i.monthNameFull = u.full[d], l.setFullYear(e), l.setMonth(a + 1), l.setDate(0), i.totaldays = l.getDate(), l.setFullYear(e), l.setMonth(a), l.setDate(n), r = l.toString().split(" "), d = y.ddd.indexOf(r[0]), i.targetedDayIndex = d, i.targetedDayName = r[0], i.targetedDayFullName = y.full[d], i)
	}

	function l(e) {
		var r, l, i, s, m, u = "id";
		switch("#" === e.target[0] ? u = "id" : "." === e.target[0] && (u = "class"), l = e.target.substring(1), e.type) {
			case "day":
				r = n(d(e.year, e.month, e.date), e);
				break;
			case "month":
				r = a(d(e.year, e.month, e.date), e);
				break;
			default:
				return t.console.error("Invalid type"), !1
		}
		if("id" === u) o.getElementById(l).innerHTML = r.outerHTML;
		else if("class" === u)
			for(i = 0, s = (m = o.getElementsByClassName(l)).length; i < s; i += 1) m[i].innerHTML = r.outerHTML
	}
	var i = {},
		o = t.document,
		s = 1900,
		m = 9999,
		u = {
			full: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
			mmm: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
		},
		y = {
			full: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
			d: ["S", "M", "T", "W", "T", "F", "S"],
			dd: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
			ddd: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
		};
	i.draw = function(e) {
		if(void 0 === e) return t.console.error("Option missing"), !1;
		var a = new Date;
		l(e = r(e, {
			type: "day",
			month: a.getMonth(),
			year: a.getFullYear(),
			date: a.getDate(),
			monthformat: "full",
			dayformat: "full",
			highlighttoday: !1,
			highlighttargetdate: !1,
			prevnextbutton: "hide"
		}))
	}, o.body.onclick = function(e) {
		var a, n, r, d, i, o, s = (e = t.event || e).target || e.srcElement;
		s && s.classList && s.classList.contains("dycalendar-prev-next-btn") && (a = parseInt(s.getAttribute("data-date")), n = parseInt(s.getAttribute("data-month")), r = parseInt(s.getAttribute("data-year")), d = s.getAttribute("data-btn"), i = JSON.parse(s.parentElement.getAttribute("data-option")), "prev" === d ? (n -= 1) < 0 && (r -= 1, n = 11) : "next" === d && (n += 1) > 11 && (r += 1, n = 0), i.date = a, i.month = n, i.year = r, l(i)), s && s.classList && s.classList.contains("dycalendar-span-month-year") && (i = JSON.parse(s.parentElement.getAttribute("data-option")), o = new Date, i.date = o.getDate(), i.month = o.getMonth(), i.year = o.getFullYear(), l(i))
	}, t.dycalendar = i
}("undefined" != typeof window ? window : this);