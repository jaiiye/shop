/*
用途：检查输入字符串是否为空或者全部都是空格

输入：str

返回：
如果全是空返回true,否则返回false
*/
function isNull( str ){
	if ( str === "" ) return true;
	var regu = "^[ ]+$";
	var re = new RegExp(regu);
	return re.test(str);
}
/*
用途：检查输入手机号码是否正确

输入：
s：字符串

返回：

如果通过验证返回true,否则返回false
*/
function checkMobile( s ){  
	var regu =/^[1][3|4|5|7|8][0-9]{9}$/;
	var re = new RegExp(regu);
	if (re.test(s)) {
		return true;
	}else{
		return false;
	}
}
/*
用途：检查输入字符串是否只由英文字母和数字和下划线组成

输入：
s：字符串

返回：
如果通过验证返回true,否则返回false
*/
function isNumberOr_Letter( s ){//判断是否是数字或字母
	var regu = /^[0-9a-zA-Z\_]+$/;
	var re = new RegExp(regu);
	if (re.test(s)) {
		return true;
	}else{
		return false;
	}
}
/*

用途：检查输入对象的值是否符合整数格式

输入：str 输入的字符串

返回：如果通过验证返回true,否则返回false
*/

function isInteger( str ){ 

var regu = /^[]{0,1}[0-9]{1,}$/;

return regu.test(str);

}