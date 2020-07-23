var getSingle = function(fn){
    var result;
    return function(){
        return result || fn.apply(this, arguments)
    }
}

var bindEvent = getSingle(function(){
    document.getElementById('div1').onclick = function(){
        alert('alert')
    }
    return true
})

var render = function() {
    console.log('开始')
    bindEvent()
}