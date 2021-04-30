





const fm_hasClass = (e, c) => {
    let classes = e.className;
    if (!classes) return false;
    if (classes === c) return true;
    return classes.search("\\b" + c + "\\b") != -1;
}
const fm_addClass = (e, c) => {
    if (fm_hasClass(e, c)) return;
    let classes = e.className;
    if (classes && classes[classes.length-1] != " ")
        c = " " + c;
    e.className += c;
}
const fm_removeClass = (e, c) => {
    let pattern = new RegExp("\\b" + c + "\\b\\s*", "g");
    e.className = e.className.replace(pattern, "");
}
const fm_addEvent = (elm,listener,fn) => {
	try{
		elm.addEventListener(listener,fn,false);
	}catch(e){
		elm.attachEvent("on"+listener,fn);
	}
}
fm_addEvent(window, 'load', function() {
   let offsettop;
   offsettop = 350;
   fm_addEvent(window, 'scroll', function() {
   if (offsettop < Math.max(document.body.scrollTop,document.documentElement.scrollTop)) {
       fm_addClass(document.body, 'is-fixed-pagetop');
   } if ((offsettop - 50) > Math.max(document.body.scrollTop,document.documentElement.scrollTop)) {
       fm_removeClass(document.body, 'is-fixed-pagetop');
   }
 });
});


