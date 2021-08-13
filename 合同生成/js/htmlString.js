//合同模板字符串
var htmlString = `<h2 style="text-align:center">员工入职登记表</h3>
  <table style="width:100%" border="1">
    <tr>
      <td>姓名</td>
      <td id="name" colspan="2">{{name}}</td>
      <td>性别</td>
      <td id="sex" colspan="2">{{sex}}</td>
      <td colspan="2" rowspan="4">贴照片出</td>
    </tr>
    <tr>
      <td>民族</td>
      <td id="nation" colspan="2">{{nation}}</td>
      <td>出生日期</td>
      <td id="birthday" colspan="2">{{birthday}}</td>
    </tr>
    <tr>
      <td>学历</td>
      <td id="education" colspan="2">{{education}}</td>
      <td>户口所在地</td>
      <td id="registered" colspan="2">{{registered}}</td>
    </tr>
    <tr>
      <td>入职时间</td>
      <td id="entry" colspan="2">{{entry}}</td>
      <td>试用期截止日</td>
      <td id="probation" colspan="2">{{probation}}</td>
    </tr>
    <tr>
      <td>政治面貌</td>
      <td id="political">{{political}}</td>
      <td>工作经验</td>
      <td id="background">{{background}}</td>
      <td>身份证号码</td>
      <td id="id" colspan="3">{{id}}</td>
    </tr>
    <tr>
      <td>电话</td>
      <td id="phone" colspan="2">{{phone}}</td>
      <td>住址</td>
      <td id="address" colspan="4">{{address}}</td>
    </tr>
    <tr>
      <td>岗位</td>
      <td id="post" colspan="2">{{post}}</td>
      <td>社保号</td>
      <td id="securityId" colspan="4">{{securityId}}</td>
    </tr>
    <tr>
      <td>毕业学校</td>
      <td id="school" colspan="2">{{school}}</td>
      <td>专业</td>
      <td id="major" colspan="4">{{major}}</td>
    </tr>
    <tr>
      <td rowspan="4">家庭情况</td>
      <td>父亲姓名</td>
      <td id="father">{{father}}</td>
      <td>父亲工作岗位</td>
      <td id="fatherJop" colspan="4">{{fatherJop}}</td>
    </tr>
    <tr>
      <td>母亲姓名</td>
      <td id="mother">{{mother}}</td>
      <td>母亲工作岗位</td>
      <td id="motherJop" colspan="4">{{motherJop}}</td>
    </tr>
    <tr>
      <td>紧急联系人</td>
      <td id="emergency">{{emergency}}</td>
      <td>联系电话</td>
      <td id="emergencyPhone" colspan="4">{{emergencyPhone}}</td>
    </tr>
    <tr>
      <td>家庭住址</td>
      <td id="familyAddress" colspan="6">{{familyAddress}}</td>
    </tr>
    <tr>
      <td>签收文件</td>
      <td colspan="7"></td>
    </tr>
  </table>`

//合同表单字段
var formObj = {
  name: '',
  sex: '',
  nation: '',
  birthday: 'date',//日期选择类型
  education: '',
  registered: '',
  entry: 'date',//日期选择类型
  probation: 'date',//日期选择类型
  political: '',
  background: '',
  id: '',
  phone: '',
  address: '',
  post: '',
  securityId: '',
  school: '',
  major: '',
  father: '',
  fatherJop: '',
  mother: '',
  motherJop: '',
  emergency: '',
  emergencyPhone: '',
  familyAddress: ''
};

//表单模板字符串
var resultForm = htmlString;

//遍历表单字段，将input输入框嵌入到对应的位置
for (item in formObj) {
  //避免id触发，将表单模板的id去掉（replace方法是js的字符串替换方法，详情：https://www.runoob.com/jsref/jsref-replace.html）
  resultForm = resultForm.replace(`id="${item}"`, '')
  //按不同类型嵌入不同类型的input框（这里只有text类型、date类型，所以if...else即可）
  if (formObj[item] === 'date') {
    resultForm = resultForm.replace(`{{${item}}}`, `<input onchange="inputChange(this)" onblur="inputBlur(this)" onfocus="inputFocus(this)" id="form-${item}" type="date"></input>`)
  } else {
    resultForm = resultForm.replace(`{{${item}}}`, `<input onchange="inputChange(this)" onblur="inputBlur(this)" onfocus="inputFocus(this)" id="form-${item}" type="text"></input>`)
  }
}

//记录当前正在编辑的字段id（用于高亮显示对应位置）
var activeId = '';


//handlebars处理函数（参数是合同模板字符串）
function strTohtml(htmlString) {
  //利用handlebars将表单的值替换到相应位置
  var template = Handlebars.compile(htmlString);
  var resultHtml = template(formObj);
  //将替换值后合同模板写入页面（写到id为htbd的元素里面，详情：https://www.runoob.com/jsref/prop-html-innerhtml.html）
  document.getElementById('htbd').innerHTML = resultHtml;
}

//input框失去焦点事件的处理函数（参数是input框本身）
function inputBlur(e) {
  //取消高亮显示（高亮是通过设置元素的backgroundColor来实现的）
  if (activeId) {
    document.getElementById(activeId).style.backgroundColor = '';
  }
}

//input框获取焦点事件的处理函数（参数是input框本身）
function inputFocus(e) {
  //取消上一个高亮显示
  if (activeId) {
    document.getElementById(activeId).style.backgroundColor = '';
  }
  //高亮显示正在编辑的位置
  document.getElementById(e.id.split('-')[1]).style.backgroundColor = 'yellow';
  //记录当前高亮显示的元素id
  activeId = e.id.split('-')[1];
}

//input框值改变事件的处理函数（参数是input框本身）
function inputChange(e) {
  //将值写入相应的合同表单字段
  formObj[e.id.split('-')[1]] = e.value
  //调用handlebars处理函数，实现动态预览
  strTohtml(htmlString);
}

//将表单模板字符串写入页面（写到id为htform的元素里面）
document.getElementById('htform').innerHTML = resultForm;

//将合同表单字段的所有值清空（这一步是因为上面的formObj里面记录了input框的类型，如果不清空handlebars会把值替换到合同模板字符串里面）
for (item in formObj) {
  formObj[item] = ''
}



//调用handlebars处理函数将合同模板写入页面
strTohtml(htmlString);