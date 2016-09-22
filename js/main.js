Array.prototype.shuffle = function() {
	var index = this.length, jIndex, temp;
	if (index == 0) return this;
	while ( --index ) {
		jIndex = Math.floor( Math.random() * ( index + 1 ) );
		temp = this[index];
		this[index] = this[jIndex];
		this[jIndex] = temp;
	}
	return this;
};

document.addEventListener("contextmenu", function(e){
    e.preventDefault();
}, false);

function toggleFullScreen() {
	if ((document.fullScreenElement && document.fullScreenElement !== null) ||    
		(!document.mozFullScreen && !document.webkitIsFullScreen)) {
		if (document.documentElement.requestFullScreen) {  
			document.documentElement.requestFullScreen();  
		} else if (document.documentElement.mozRequestFullScreen) {  
			document.documentElement.mozRequestFullScreen();  
	    } else if (document.documentElement.webkitRequestFullScreen) {  
			document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);  
		}  
	} else {  
		if (document.cancelFullScreen) {  
			document.cancelFullScreen();  
		} else if (document.mozCancelFullScreen) {  
			document.mozCancelFullScreen();  
		} else if (document.webkitCancelFullScreen) {  
			document.webkitCancelFullScreen();  
		}  
	}  
}