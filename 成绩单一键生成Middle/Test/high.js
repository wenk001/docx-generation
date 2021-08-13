var High=`<h2 style="text-align: center;">成绩单</h2>

<div>
    <h4 style="text-align:center">{{class}} {{name}} </h4>
    <table  style="text-align:center;" align="center"  bgcolor="black">
        <tr bgcolor="white">
            {{#if Chi}}
            <td style="text-align:center;padding:10px" align="center" border="0" cellspacing="0">语文</td>
            {{/if}}
            {{#if ChiRC}}
            <td style="text-align:center;padding:10px" align="center" border="0" cellspacing="0">班排</td>
            {{/if}}
            {{#if ChiRG}}    
            <td style="text-align:center;padding:10px" align="center" border="0" cellspacing="0">级排</td>
            {{/if}}
            {{#if Mat}}    
            <td style="text-align:center;padding:10px" align="center" border="0" cellspacing="0">数学</td>
            {{/if}}
            {{#if MatRC}}  
            <td style="text-align:center;padding:10px" align="center" border="0" cellspacing="0">班排</td>
            {{/if}}
            {{#if MatRG}}  
            <td style="text-align:center;padding:10px" align="center" border="0" cellspacing="0">级排</td>
            {{/if}}
            {{#if Eng}}  
            <td style="text-align:center;padding:10px" align="center" border="0" cellspacing="0">英语</td>
            {{/if}}
            {{#if EngRC}}  
            <td style="text-align:center;padding:10px" align="center" border="0" cellspacing="0">班排</td>
            {{/if}}
            {{#if EngRG}}  
            <td style="text-align:center;padding:10px" align="center" border="0" cellspacing="0">级排</td>
            {{/if}}
            {{#if Phy}}  
            <td style="text-align:center;padding:10px" align="center" border="0" cellspacing="0">物理</td>
            {{/if}}
            {{#if PhyRC}} 
            <td style="text-align:center;padding:10px" align="center" border="0" cellspacing="0">班排</td>
            {{/if}}
            {{#if PhyRG}} 
            <td style="text-align:center;padding:10px" align="center" border="0" cellspacing="0">级排</td>
            {{/if}}
            {{#if His}} 
            <td style="text-align:center;padding:10px" align="center" border="0" cellspacing="0">历史</td>
            {{/if}}
            {{#if HisRC}} 
            <td style="text-align:center;padding:10px" align="center" border="0" cellspacing="0">班排</td>
            {{/if}}
            {{#if HisRG}} 
            <td style="text-align:center;padding:10px" align="center" border="0" cellspacing="0">级排</td>
            {{/if}}
        </tr>
        <tr bgcolor="white">
            {{#if Chi}}
            <td id="Chi" style="text-align:center;padding:10px" align="center" border="0" cellspacing="0">{{Chi}}&nbsp;</td>
            {{/if}}
            {{#if ChiRC}}           
            <td id="ChiRC" style="text-align:center;padding:10px" align="center" border="0" cellspacing="0">{{ChiRC}}</td>
            {{/if}}
            {{#if ChiRG}}    
            <td id="ChiRG" style="text-align:center;padding:10px" align="center" border="0" cellspacing="0">{{ChiRG}}</td>
            {{/if}}
            {{#if Mat}} 
            <td id="Mat" style="text-align:center;padding:10px" align="center" border="0" cellspacing="0">{{Mat}}</td>
            {{/if}}
            {{#if MatRC}}         
            <td id="MatRC" style="text-align:center;padding:10px" align="center" border="0" cellspacing="0">{{MatRC}}</td>
            {{/if}}
            {{#if MatRG}}          
            <td id="MatRG" style="text-align:center;padding:10px" align="center" border="0" cellspacing="0">{{MatRG}}</td>
            {{/if}}
            {{#if Eng}}                
            <td id="Eng" style="text-align:center;padding:10px" align="center" border="0" cellspacing="0">{{Eng}}</td>
            {{/if}}
            {{#if EngRC}}              
            <td id="EngRC" style="text-align:center;padding:10px" align="center" border="0" cellspacing="0">{{EngRC}}</td>
            {{/if}}
            {{#if EngRG}}           
            <td id="EngRG" style="text-align:center;padding:10px" align="center" border="0" cellspacing="0">{{EngRG}}</td>
            {{/if}}
            {{#if Phy}}          
            <td id="Phy" style="text-align:center;padding:10px" align="center" border="0" cellspacing="0">{{Phy}}</td>
            {{/if}}
            {{#if PhyRC}}                
            <td id="PhyRC" style="text-align:center;padding:10px" align="center" border="0" cellspacing="0">{{PhyRC}}</td>
            {{/if}}
            {{#if PhyRG}}               
            <td id="PhyRG" style="text-align:center;padding:10px" align="center" border="0" cellspacing="0">{{PhyRG}}</td>
            {{/if}}
            {{#if His}}            
            <td id="HisRC" style="text-align:center;padding:10px" align="center" border="0" cellspacing="0">{{His}}</td>
            {{/if}}
            {{#if HisRC}}               
            <td id="HisRC" style="text-align:center;padding:10px" align="center" border="0" cellspacing="0">{{HisRC}}</td>
            {{/if}}
            {{#if HisRG}}               
            <td id="HisRG" style="text-align:center;padding:10px" align="center" border="0" cellspacing="0">{{HisRG}}</td>
            {{/if}}
        </tr>
        <tr bgcolor="white">
            {{#if Che}} 
            <td style="text-align:center;padding:10px" align="center" border="0" cellspacing="0">化学</td>
            {{/if}}
            {{#if CheRC}} 
            <td style="text-align:center;padding:10px" align="center" border="0" cellspacing="0">班排</td>
            {{/if}}
            {{#if CheRG}} 
            <td style="text-align:center;padding:10px" align="center" border="0" cellspacing="0">级排</td>
            {{/if}}
            {{#if Bio}} 
            <td style="text-align:center;padding:10px" align="center" border="0" cellspacing="0">生物</td>
            {{/if}}
            {{#if BioRC}} 
            <td style="text-align:center;padding:10px" align="center" border="0" cellspacing="0">班排</td>
            {{/if}}
            {{#if BioRG}}
            <td style="text-align:center;padding:10px" align="center" border="0" cellspacing="0">级排</td>
            {{/if}}
            {{#if Pol}}
            <td style="text-align:center;padding:10px" align="center" border="0" cellspacing="0">政治</td>
            {{/if}}
            {{#if PolRC}}
            <td style="text-align:center;padding:10px" align="center" border="0" cellspacing="0">班排</td>
            {{/if}}
            {{#if PolRG}}
            <td style="text-align:center;padding:10px" align="center" border="0" cellspacing="0">级排</td>
            {{/if}}
            {{#if Geo}}
            <td style="text-align:center;padding:10px" align="center" border="0" cellspacing="0">地理</td>
            {{/if}}
            {{#if GeoRC}}
            <td style="text-align:center;padding:10px" align="center" border="0" cellspacing="0">班排</td>
            {{/if}}
            {{#if GeoRG}}
            <td style="text-align:center;padding:10px" align="center" border="0" cellspacing="0">级排</td>
            {{/if}}
            {{#if All}}
            <td style="text-align:center;padding:10px" align="center" border="0" cellspacing="0">总分</td>
            {{/if}}
            {{#if AllRC}}
            <td style="text-align:center;padding:10px" align="center" border="0" cellspacing="0">班排</td>
            {{/if}}
            {{#if AllRG}}
            <td style="text-align:center;padding:10px" align="center" border="0" cellspacing="0">级排</td>
            {{/if}}
            </tr>
            <tr bgcolor="white">
            {{#if Che}}
            <td id="Chi" style="text-align:center;padding:10px" align="center" border="0" cellspacing="0">{{Che}}&nbsp;</td>
            {{/if}}
            {{#if CheRC}}           
            <td id="CheRC" style="text-align:center;padding:10px" align="center" border="0" cellspacing="0">{{CheRC}}</td>
            {{/if}}
            {{#if CheRG}}    
            <td id="CheRG" style="text-align:center;padding:10px" align="center" border="0" cellspacing="0">{{CheRG}}</td>
            {{/if}}
            {{#if Bio}} 
            <td id="Bio" style="text-align:center;padding:10px" align="center" border="0" cellspacing="0">{{Bio}}</td>
            {{/if}}
            {{#if BioRC}}         
            <td id="BioRC" style="text-align:center;padding:10px" align="center" border="0" cellspacing="0">{{BioRC}}</td>
            {{/if}}
            {{#if BioRG}}          
            <td id="BioRG" style="text-align:center;padding:10px" align="center" border="0" cellspacing="0">{{BioRG}}</td>
            {{/if}}
            {{#if Pol}}                
            <td id="Pol" style="text-align:center;padding:10px" align="center" border="0" cellspacing="0">{{Pol}}</td>
            {{/if}}
            {{#if PolRC}}              
            <td id="PolRC" style="text-align:center;padding:10px" align="center" border="0" cellspacing="0">{{PolRC}}</td>
            {{/if}}
            {{#if PolRG}}           
            <td id="PolRG" style="text-align:center;padding:10px" align="center" border="0" cellspacing="0">{{PolRG}}</td>
            {{/if}}
            {{#if Geo}}          
            <td id="Geo" style="text-align:center;padding:10px" align="center" border="0" cellspacing="0">{{Geo}}</td>
            {{/if}}
            {{#if GeoRC}}              
            <td id="GeoRC" style="text-align:center;padding:10px" align="center" border="0" cellspacing="0">{{GeoRC}}</td>
            {{/if}}
            {{#if GeoRG}}               
            <td id="GeoRG" style="text-align:center;padding:10px" align="center" border="0" cellspacing="0">{{GeoRG}}</td>
            {{/if}}
            {{#if All}}            
            <td id="AllRC" style="text-align:center;padding:10px" align="center" border="0" cellspacing="0">{{All}}</td>
            {{/if}}
            {{#if AllRC}}               
            <td id="AllRC" style="text-align:center;padding:10px" align="center" border="0" cellspacing="0">{{AllRC}}</td>
            {{/if}}
            {{#if AllRG}}               
            <td id="HisRG" style="text-align:center;padding:10px" align="center" border="0" cellspacing="0">{{AllRG}}</td>
            {{/if}}
        </tr>
        <br>
    </table>
    <p style="text-align:center">学习建议：<br><br><br><br><br></p>
</div>`


//成绩单字段
var subject = {};

var nameList = []
var classList = []
var ChiList = []
var ChiRCList = []
var ChiRGList = []
var MatList = []
var MatRCList = []
var MatRGList = []
var EngList = []
var EngRCList = []
var EngRGList = []
var BioList = []
var BioRCList = []
var BioRGList = []
var GeoList = []
var GeoRCList = []
var GeoRGList = []
var HisList=[]
var HisRCList = []
var HisRGList = []
var PolList=[]
var PolRCList = []
var PolRGList = []
var PhyList=[]
var PhyRCList = []
var PhyRGList = []
var CheList=[]
var CheRCList = []
var CheRGList = []
var AllList = []
var AllRCList = []
var AllRGList = []


var AList={
    '姓名': nameList,
    '班级':classList,
    '语文': ChiList, 
    '语文班排': ChiRCList,
    '语文级排': ChiRGList,
    '数学': MatList,   
    '数学班排': MatRCList,
    '数学级排': MatRGList,
    '英语':EngList,   
    '英语班排': EngRCList,
    '英语级排': EngRGList,
    '生物':BioList,   
    '生物班排':BioRCList,
    '生物级排':BioRGList,
    '地理':GeoList, 
    '地理班排':GeoRCList,
    '地理级排':GeoRGList,
    '历史':HisList,
    '历史班排':HisRCList,
    '历史级排':HisRGList,
    '政治':PolList,
    '政治班排':PolRCList,
    '政治级排':PolRGList,
    '物理':PhyList,
    '物理班排':PhyRCList,
    '物理级排':PhyRGList,
    '化学':CheList,
    '化学班排':CheRCList,
    '化学级排':CheRGList,
    '总分': AllList,
    '总分班排': AllRCList,
    '总分级排': AllRGList
}

function loop(){
    for(let i = 0; i< nameList.length; i++){
        subject = {
            name:nameList[i],
            class: classList[i],
            Chi:ChiList[i], 
            ChiRC: ChiRCList[i],
            ChiRG: ChiRGList[i],         
            Mat:MatList[i],
            MatRC: MatRCList[i],
            MatRG: MatRGList[i],         
            Eng:EngList[i],
            EngRC: EngRCList[i],
            EngRG: EngRGList[i],        
            Bio:BioList[i],
            BioRC: BioRCList[i],
            BioRG: BioRGList[i],    
            Geo:GeoList[i],
            GeoRC: GeoRCList[i],
            GeoRG: GeoRGList[i], 
            His:HisList[i],
            HisRC: HisRCList[i],
            HisRG: HisRGList[i],       
            Pol:PolList[i],
            PolRC: PolRCList[i],
            PolRG: PolRGList[i],        
            Phy:PhyList[i],
            PhyRC: PhyRCList[i],
            PhyRG: PhyRGList[i],     
            Che:CheList[i],
            CheRC: CheRCList[i],
            CheRG: CheRGList[i],
            All: AllList[i],
            AllRC: AllRCList[i],
            AllRG: AllRGList[i]
     
        }
        var template = Handlebars.compile(High);
        var resultHtml = template(subject);
        var oldInnerHTML = document.getElementById("form").innerHTML
        document.getElementById("form").innerHTML = oldInnerHTML + resultHtml;
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

            let alist = Type.filter((item)=>{
                return (item[0] !== '姓名' && item[0] !== '班级')
            })
            alist.forEach((item)=>{
                getEach(item[0])
            })
            getAll(Type)
            //console.log(AList['总分级排'])
            loop()
        };
        reader.readAsBinaryString(file);
    }
    function getEach(type){
        //计算级排
        let par = [...AList[type]]
        par = par.sort((a,b)=>
        {
        return Number(b) - Number(a)
        })
        for(let i = 0; i < AList[type].length ; i++){
            AList[`${type}级排`].push(String(par.indexOf(AList[type][i]) + 1))
        }

        //计算班排
        let c = [...AList['班级']]
        c = Array.from(new Set(c)) 
        let ac = {}
        for(let i = 0; i < c.length; i++){
            let par = [...AList[type]]
            par = par.filter((item,index)=>{
                return AList['班级'][index] === c[i]
            })
            par = par.sort((a,b)=>{
                return Number(b) - Number(a)
            })
            ac[c[i]] = par

        }
        for(let i = 0; i < AList[type].length ; i++){
            AList[`${type}班排`].push(String(ac[AList['班级'][i]].indexOf(AList[type][i]) + 1))
        }
    }
    function getAll(type){
        let alist = type.filter((item)=>{
            return (item[0] !== '姓名' && item[0] !== '班级')
        })
        //计算总分
        for(let i = 0;i < AList[alist[0][0]].length; i++){
            let all = 0
            for(let j = 0; j < alist.length; j++){
                all += Number(AList[alist[j][0]][i])
            }
            AList['总分'].push(String(all))
        }

        //计算级排
        let par = [...AList['总分']]
        par = par.sort((a,b)=>
        {
        return Number(b) - Number(a)
        })
        for(let i = 0; i < AList['总分'].length ; i++){
            AList['总分级排'].push(String(par.indexOf(AList['总分'][i]) + 1))
        }

        //计算班排
        let c = [...AList['班级']]
        c = Array.from(new Set(c)) 
        let ac = {}
        for(let i = 0; i < c.length; i++){
            let par = [...AList['总分']]
            par = par.filter((item,index)=>{
                return AList['班级'][index] === c[i]
            })
            par = par.sort((a,b)=>{
                return Number(b) - Number(a)
            })
            ac[c[i]] = par

        }
        for(let i = 0; i < AList['总分'].length ; i++){
            AList['总分班排'].push(String(ac[AList['班级'][i]].indexOf(AList['总分'][i]) + 1))
        }
    }
    function daoru(e) {
        document.getElementById("form").innerHTML = '';
        var files = e.files[0]
        readWorkbookFromLocalFile(files)
    }
    function reset(e) {
        e.value = ''
    }