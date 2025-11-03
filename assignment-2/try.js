var a = {"a":"b"}

function abc () {console.log(this)}
abc() 

var c = abc.bind(a);
c();