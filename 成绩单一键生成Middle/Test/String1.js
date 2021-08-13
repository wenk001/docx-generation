//初一成绩单字符串
var string1=`<h2 style="text-align: center;">成绩单</h2>

<div>
    <h4 style="text-align:center">{{name}}同学，在本次考试中成绩如下：</h4>
    <table  style="text-align:center;" align="center"  bgcolor="black">
        <tr bgcolor="white">
            {{#if Chi}}
            <td style="text-align:center;padding:10px" align="center" border="0" cellspacing="0">语文</td>
            {{/if}}
            {{#if ChiR}}
            <td style="text-align:center;padding:10px" align="center" border="0" cellspacing="0">排名</td>
            {{/if}}
            {{#if Mat}}    
            <td style="text-align:center;padding:10px" align="center" border="0" cellspacing="0">数学</td>
            {{/if}}
            {{#if MatR}}    
            <td style="text-align:center;padding:10px" align="center" border="0" cellspacing="0">排名</td>
            {{/if}}
            {{#if Eng}}  
            <td style="text-align:center;padding:10px" align="center" border="0" cellspacing="0">英语</td>
            {{/if}}
            {{#if EngR}}  
            <td style="text-align:center;padding:10px" align="center" border="0" cellspacing="0">排名</td>
            {{/if}}
            {{#if Bio}}  
            <td style="text-align:center;padding:10px" align="center" border="0" cellspacing="0">生物</td>
            {{/if}}
            {{#if BioR}}  
            <td style="text-align:center;padding:10px" align="center" border="0" cellspacing="0">排名</td>
            {{/if}}
            {{#if Geo}}  
            <td style="text-align:center;padding:10px" align="center" border="0" cellspacing="0">地理</td>
            {{/if}}
            {{#if GeoR}}  
            <td style="text-align:center;padding:10px" align="center" border="0" cellspacing="0">排名</td>
            {{/if}}
            {{#if His}} 
            <td style="text-align:center;padding:10px" align="center" border="0" cellspacing="0">历史</td>
            {{/if}}
            {{#if HisR}} 
            <td style="text-align:center;padding:10px" align="center" border="0" cellspacing="0">排名</td>
            {{/if}}
            {{#if PE}} 
            <td style="text-align:center;padding:10px" align="center" border="0" cellspacing="0">体育</td>
            {{/if}}
            {{#if PER}} 
            <td style="text-align:center;padding:10px" align="center" border="0" cellspacing="0">排名</td>
            {{/if}}
            {{#if Phy}} 
            <td style="text-align:center;padding:10px" align="center" border="0" cellspacing="0">物理</td>
            {{/if}}
            {{#if PhyR}} 
            <td style="text-align:center;padding:10px" align="center" border="0" cellspacing="0">排名</td>
            {{/if}}
            {{#if Che}} 
            <td style="text-align:center;padding:10px" align="center" border="0" cellspacing="0">化学</td>
            {{/if}}
            {{#if CheR}} 
            <td style="text-align:center;padding:10px" align="center" border="0" cellspacing="0">排名</td>
            {{/if}}
            {{#if DF}} 
            <td style="text-align:center;padding:10px" align="center" border="0" cellspacing="0">道法</td>
            {{/if}}
            {{#if DFR}} 
            <td style="text-align:center;padding:10px" align="center" border="0" cellspacing="0">排名</td>
            {{/if}}
            {{#if All}}
            <td style="text-align:center;padding:10px" align="center" border="0" cellspacing="0">总分</td>
            {{/if}}
            {{#if AllR}}
            <td style="text-align:center;padding:10px" align="center" border="0" cellspacing="0">排名</td>
            {{/if}}
            </tr>
        <tr bgcolor="white">
        {{#if Chi}}
            <td id="Chi" style="text-align:center;padding:10px" align="center" border="0" cellspacing="0">{{Chi}}&nbsp;</td>
            {{/if}}
            {{#if ChiR}}           
            <td id="ChiR" style="text-align:center;padding:10px" align="center" border="0" cellspacing="0">{{ChiR}}</td>
            {{/if}}
            {{#if Mat}}    
            <td id="Mat" style="text-align:center;padding:10px" align="center" border="0" cellspacing="0">{{Mat}}</td>
            {{/if}}
            {{#if MatR}} 
            <td id="MatR" style="text-align:center;padding:10px" align="center" border="0" cellspacing="0">{{MatR}}</td>
            {{/if}}
            {{#if Eng}}         
            <td id="Eng" style="text-align:center;padding:10px" align="center" border="0" cellspacing="0">{{Eng}}</td>
            {{/if}}
            {{#if EngR}}          
            <td id="EngR" style="text-align:center;padding:10px" align="center" border="0" cellspacing="0">{{EngR}}</td>
            {{/if}}
            {{#if Bio}}                
            <td id="Bio" style="text-align:center;padding:10px" align="center" border="0" cellspacing="0">{{Bio}}</td>
            {{/if}}
            {{#if BioR}}              
            <td id="BioR" style="text-align:center;padding:10px" align="center" border="0" cellspacing="0">{{BioR}}</td>
            {{/if}}
            {{#if Geo}}           
            <td id="Geo" style="text-align:center;padding:10px" align="center" border="0" cellspacing="0">{{Geo}}</td>
            {{/if}}
            {{#if GeoR}}          
            <td id="GeoR" style="text-align:center;padding:10px" align="center" border="0" cellspacing="0">{{GeoR}}</td>
            {{/if}}
            {{#if His}}                
            <td id="His" style="text-align:center;padding:10px" align="center" border="0" cellspacing="0">{{His}}</td>
            {{/if}}
            {{#if HisR}}               
            <td id="HisR" style="text-align:center;padding:10px" align="center" border="0" cellspacing="0">{{HisR}}</td>
            {{/if}}
            {{#if PE}}            
            <td id="PE" style="text-align:center;padding:10px" align="center" border="0" cellspacing="0">{{PE}}</td>
            {{/if}}
            {{#if PER}}               
            <td id="PER" style="text-align:center;padding:10px" align="center" border="0" cellspacing="0">{{PER}}</td>
            {{/if}}
            {{#if Phy}}               
            <td id="Phy" style="text-align:center;padding:10px" align="center" border="0" cellspacing="0">{{Phy}}</td>
            {{/if}}
            {{#if PhyR}}               
            <td id="PhyR" style="text-align:center;padding:10px" align="center" border="0" cellspacing="0">{{PhyR}}</td>
            {{/if}}
            {{#if Che}}               
            <td id="Che" style="text-align:center;padding:10px" align="center" border="0" cellspacing="0">{{Che}}</td>
            {{/if}}
            {{#if CheR}}               
            <td id="CheR" style="text-align:center;padding:10px" align="center" border="0" cellspacing="0">{{CheR}}</td>
            {{/if}}
            {{#if DF}}           
            <td id="DF" style="text-align:center;padding:10px" align="center" border="0" cellspacing="0">{{DF}}</td>
            {{/if}}
            {{#if DFR}}        
            <td id="DFR" style="text-align:center;padding:10px" align="center" border="0" cellspacing="0">{{DFR}}</td>
            {{/if}}
            {{#if All}}      
            <td id="All" style="text-align:center;padding:10px" align="center" border="0" cellspacing="0">{{All}}</td>                   
            {{/if}}
            {{#if AllR}}      
            <td id="AllR" style="text-align:center;padding:10px" align="center" border="0" cellspacing="0">{{AllR}}</td>
            {{/if}}
            </tr><br>
            </table>
            <p style="text-align:center">学习建议：<br><br><br><br><br></p>
</div>`


//成绩单字段
var subject = {
    name:'',
    Chi:'',
    ChiR:'',
    Mat:'',
    MatR:'',
    Eng:'',
    EngR:'',
    Bio:'',
    BioR:'',
    Geo:'',
    GeoR:'',
    His:'',
    HisR:'',
    PE:'',
    PER:'',
    Phy:'',
    PhyR:'',
    Che:'',
    CheR:'',
    DF:'',
    DFR:'',
    All:'',
    AllR:''
};

//  var template = Handlebars.compile(string1);
//  var resultHtml = template(subject);
//  var oldInnerHTML = document.getElementById("form").innerHTML
//  document.getElementById("form").innerHTML=oldInnerHTML + resultHtml;


var nameList = []
var ChiList = []
var ChiRList = []
var MatList = []
var MatRList = []
var EngList = []
var EngRList = []
var BioList = []
var BioRList = []
var GeoList = []
var GeoRList = []
var HisList=[]
var HisRList=[]
var PEList=[]
var PERList=[]
var PhyList=[]
var PhyRList=[]
var CheList=[]
var CheRList=[]
var DFList=[]
var DFRList=[]
var AllList = []
var AllRList = []

var AList={
    '姓名': nameList,
    '语文': ChiList,
    '语文排名':ChiRList,
    '数学':MatList,
    '数学排名':MatRList,
    '英语':EngList,
    '英语排名':EngRList,
    '生物':BioList,
    '生物排名':BioRList,
    '地理':GeoList,
    '地理排名':GeoRList,
    '历史':HisList,
    '历史排名':HisRList,
    '体育':PEList,
    '体育排名':PERList,
    '物理':PhyList,
    '物理排名':PhyRList,
    '化学':CheList,
    '化学排名':CheRList,
    '道法':DFList,
    '道法排名':DFRList,
    '总分':AllList,
    '总分排名':AllRList
}

function loop(){
for(let i = 0; i< nameList.length; i++){
    subject = {
        name: nameList[i],
        Chi: ChiList[i],
        ChiR: ChiRList[i],
        Mat:MatList[i],
        MatR:MatRList[i],
        Eng:EngList[i],
        EngR:EngRList[i],
        Bio:BioList[i],
        BioR:BioRList[i],
        Geo:GeoList[i],
        GeoR:GeoRList[i],
        His:HisList[i],
        HisR:HisRList[i],
        PE:PEList[i],
        PER:PERList[i],
        Phy:PhyList[i],
        PhyR:PhyRList[i],
        Che:CheList[i],
        CheR:CheRList[i],
        DF:DFList[i],
        DFR:DFRList[i],
        All:AllList[i],
        AllR:AllRList[i]
    }
    var template = Handlebars.compile(string1);
    var resultHtml = template(subject);
    var oldInnerHTML = document.getElementById("form").innerHTML
    document.getElementById("form").innerHTML=oldInnerHTML + resultHtml;
}
}

var SheetNames = []
var Sheets = {}
function readWorkbookFromLocalFile(file) {
    var reader = new FileReader();
    reader.onload = function (e) {
        var data = e.target.result;
        var workbook = XLSX.read(data, { type: 'binary' });
        SheetNames = workbook.SheetNames
        Sheets = workbook.Sheets
        
        var Type=[]
        var alphabet=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
        for(var i = 0; i < SheetNames.length; i++ ){
            let item = Sheets[SheetNames[i]]
            let end = alphabet.indexOf(item['!ref'].split(':')[1][0])
            let j = 0
            while(j <= end){
                if(item[`${alphabet[j]}1`]){
                    Type.push([item[`${alphabet[j]}1`].v,alphabet[j]])
                }
                j++
            }
        }
        Type.forEach((value)=>{
            console.log(value)
            for(var i = 0; i < SheetNames.length; i++ ){
                let item = Sheets[SheetNames[i]]
                let j = 2
                while(item[`${ value[1] + j}`]){
                    if(AList[value[0]]){
                        AList[value[0]].push(String(item[`${value[1] + j}`].v))
                    }
                    j++
                }
            }
    
        })

loop()
        // console.log(Type)
        // console.log(nameList)
        // console.log(ChiList)
        // console.log(ChiRList)
        // console.log(MatList)
        // console.log(MatRList)
        // console.log(EngList)
        // console.log(EngRList)
        // console.log(BioList)
        // console.log(BioRList)
        // console.log(GeoList)
        
    };
    reader.readAsBinaryString(file);
}
function daoru(e) {
    document.getElementById("form").innerHTML = '';
    var files = e.files[0]
    readWorkbookFromLocalFile(files)
}
function reset(e) {
    e.value = ''
}