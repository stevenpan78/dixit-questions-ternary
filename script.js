function check() {
    function myfunc(str) {
        return (str.length > 21) ? (`${str.substr(0,12)} ... ${str.substr(-6)}`) : str;
    }

    var string1 = document.getElementsByTagName('input')[0].value
    document.write(myfunc(string1) + '<br />');
}

/*
function myfunc(str){
    arr = [];
    for(i=0;i<str.length;i++){
        arr += str[i];
    }
	str.length > 21 ? (
	console.log(arr.slice(0,11) + "..." + arr.slice(arr.length-6,arr.length))
	) : (
	console.log(arr)
	);
}

myfunc("abcdefghijklmnopqrstuvwxyz");
myfunc("good dog");

*/
