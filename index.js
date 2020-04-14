


//基本逻辑
/*
每次点击任意编码按钮，需要获取方式为 加密/解密


*/


//获取method-加密or解密 1--编码  2--解码  0--无内容
function Get_method(){
    let oinput = document.getElementsByTagName("input");
    let flag=0;
    for(let i=0; i<oinput.length; i ++){
        if(oinput[i].checked){
            flag = oinput[i].value;
            return flag;
        }
    }
}

//获取输入框中的内容
function Get_text(){
    let otextarea = document.getElementById("text_input");
    return otextarea.value;
}

//输出加密结果
function Input_result(result){
    let otextarea = document.getElementById("text_output");
    otextarea.value = result;
}






//定义加密,解密函数
function ASCII_(){
    let method = Get_method();
    let text_to_handle = Get_text();
    let result="";
    if(text_to_handle == ''){
        alert("请输入需要执行编码/解码的内容！");
    }
    else if(method==1){
        //编码
        for(let i=0;i<text_to_handle.length;i++){
            let x = text_to_handle[i].charCodeAt(0);//获取ASCII码
            result += (x+' ');
        }
        Input_result(result);
    }
    else{
        //解码
        let str = text_to_handle.split(' ');
        for(let i=0;i<str.length;i++){
            str[i] = Number(str[i]);
            result += (String.fromCharCode(str[i]));
        }
        Input_result(result);
    }
}
//ASCII成功



function URL_E(){

    let method = Get_method();
    let text_to_handle = Get_text();
    let result="";
    if(text_to_handle == ''){
        alert("请输入需要执行编码/解码的内容！");
    }
    else if(method==1){
        //编码
        for(let i=0;i<text_to_handle.length;i++){
            let x = text_to_handle[i].charCodeAt(0);//获取ASCII码
            result += ('%'+x.toString(16));//转换成16进制
        }
        Input_result(result);
    }
    else{
        //解码
        result = unescape(text_to_handle);
        Input_result(result);
    }
}
//URL成功




function HTML_10(){
    let method = Get_method();
    let text_to_handle = Get_text();
    let result="";
    if(text_to_handle == ''){
        alert("请输入需要执行编码/解码的内容！");
    }
    else if(method==1){
        //编码
        for(let i=0;i<text_to_handle.length;i++){
            let x = text_to_handle[i].charCodeAt(0);
            result += ('&#'+x.toString(10)+';');
        }
        Input_result(result);
    }
    else{
        //解码
        let str = text_to_handle.split(";");
        for(let i=0;i<str.length-1;i++){
            let x = str[i].replace('&#','');
            result += String.fromCharCode(Number(x));
        }
        Input_result(result);
    }
}
//HTML_10成功



function HTML_16(){
    let method = Get_method();
    let text_to_handle = Get_text();
    let result="";
    if(text_to_handle == ''){
        alert("请输入需要执行编码/解码的内容！");
    }
    else if(method==1){
        //编码
        for(let i=0;i<text_to_handle.length;i++){
            let x = text_to_handle[i].charCodeAt(0);
            result += ('&#x'+x.toString(16)+';');
        }
        Input_result(result);
    }
    else{
        //解码
        let str = text_to_handle.split(";");
        for(let i=0;i<str.length-1;i++){
            let x = str[i].replace('&#x','');
            result += String.fromCharCode(parseInt(x,16));
        }
        Input_result(result);
    }

}
//HTML_16成功




function JSUnicode(){
    let method = Get_method();
    let text_to_handle = Get_text();
    let result="";
    if(text_to_handle == ''){
        alert("请输入需要执行编码/解码的内容！");
    }
    else if(method==1){
        //编码
        for(let i=0;i<text_to_handle.length;i++){
            let x = text_to_handle[i].charCodeAt(0);
            x = x.toString(16);
            x = String(x);
            if(x.length<2){
                result += ('\\u000'+x);
            }
            else if(x.length<3){
                result += ('\\u00'+x);
            }
            else{
                result += ('\\u0'+x);
            }
        }
        Input_result(result);
    }
    else{
        //解码
        let str = text_to_handle.split("\\u");
        for(let i=1;i<str.length;i++){
            let x = str[i];
            result += String.fromCharCode(parseInt(x,16))
        }
        Input_result(result);
    }

}
//JS_Unicode成功




function JS_8(){
    let method = Get_method();
    let text_to_handle = Get_text();
    let result="";
    if(text_to_handle == ''){
        alert("请输入需要执行编码/解码的内容！");
    }
    else if(method==1){
        //编码
        for(let i=0;i<text_to_handle.length;i++){
            let x = text_to_handle[i].charCodeAt(0);
            x = Number(x);
            result += ('\\'+x.toString(8))
        }
        Input_result(result);
    }
    else{
        //解码
        let str = text_to_handle.split("\\");
        for(let i=1;i<str.length;i++){
            let x = str[i];
            result += String.fromCharCode(parseInt(x,8))
        }
        Input_result(result);
    }

}
//JS_8成功




function JS_16(){
    let method = Get_method();
    let text_to_handle = Get_text();
    let result="";
    if(text_to_handle == ''){
        alert("请输入需要执行编码/解码的内容！");
    }
    else if(method==1){
        //编码
        for(let i=0;i<text_to_handle.length;i++){
            let x = text_to_handle[i].charCodeAt(0);
            result += ('\\x'+x.toString(16));

        }
        Input_result(result);
    }
    else{
        //解码
        let str = text_to_handle.split("\\x");
        for(let i=1;i<str.length;i++){
            let x = str[i];
            result += String.fromCharCode(parseInt(x,16));
        }
        Input_result(result);
    }
}
//JS_16成功


function CSS_E(){
    let method = Get_method();
    let text_to_handle = Get_text();
    let result="";
    if(text_to_handle == ''){
        alert("请输入需要执行编码/解码的内容！");
    }
    else if(method==1){
        //编码
        for(let i=0;i<text_to_handle.length;i++){
            let x = text_to_handle[i].charCodeAt(0);
            result += ('\\'+x.toString(16)+' ');
        }
        Input_result(result);
    }
    else{
        //解码
        let str = text_to_handle.split("\\");
        for(let i=1;i<str.length;i++){
            let x = str[i];
            x = x.replace(' ','');
            result += String.fromCharCode(parseInt(x,16));
        }
        Input_result(result);
    }

}




//用户框的操作
function COPY(){
    let a = document.getElementById('tex');
    a.select();
    document.execCommand('copy');
    alert("复制成功");
}

function DEL(){
    let a=document.getElementById('tex');
    a.value='';

}


let recoder = new Array();
let sum=0;
let x = 0;//数组下标，用于获取上一步，下一步
function Storage_(value){
    recoder[x]=value;
    x++;
}

function NextStep(){
    x++;
    if(x>recoder.length-1){
        x=recoder.length-1;
    }
        let oText = document.getElementById('tex');
        oText.value=recoder[x];
}
function PreviousStep(){
    x--;
    if(x<0){x=0;}
    let oText = document.getElementById('tex');
    oText.value=recoder[x];

}
function Replace(){
    if(sum == 0)
    {
        recoder[0]=document.getElementById('tex').value;
        x=1;
        sum=1;
    }
    let str1 = Get_text();
    let oResult = document.getElementById('text_output')
    let oText = document.getElementById('tex');
    let result = oResult.value;
    let text = oText.value;
    text = text.replace(str1,result)
    oText.value = text;
    Storage_(text);
}
