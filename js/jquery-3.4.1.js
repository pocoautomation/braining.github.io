<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd"> 
<html xmlns="http://www.w3.org/1999/xhtml"> 
<head> 
<title>IIS 10.0 Detailed Error - 404.0 - Not Found</title> 
<style type="text/css"> 
<!-- 
body{margin:0;font-size:.7em;font-family:Verdana,Arial,Helvetica,sans-serif;} 
code{margin:0;color:#006600;font-size:1.1em;font-weight:bold;} 
.config_source code{font-size:.8em;color:#000000;} 
pre{margin:0;font-size:1.4em;word-wrap:break-word;} 
ul,ol{margin:10px 0 10px 5px;} 
ul.first,ol.first{margin-top:5px;} 
fieldset{padding:0 15px 10px 15px;word-break:break-all;} 
.summary-container fieldset{padding-bottom:5px;margin-top:4px;} 
legend.no-expand-all{padding:2px 15px 4px 10px;margin:0 0 0 -12px;} 
legend{color:#333333;;margin:4px 0 8px -12px;_margin-top:0px; 
font-weight:bold;font-size:1em;} 
a:link,a:visited{color:#007EFF;font-weight:bold;} 
a:hover{text-decoration:none;} 
h1{font-size:2.4em;margin:0;color:#FFF;} 
h2{font-size:1.7em;margin:0;color:#CC0000;} 
h3{font-size:1.4em;margin:10px 0 0 0;color:#CC0000;} 
h4{font-size:1.2em;margin:10px 0 5px 0; 
}#header{width:96%;margin:0 0 0 0;padding:6px 2% 6px 2%;font-family:"trebuchet MS",Verdana,sans-serif; 
 color:#FFF;background-color:#5C87B2; 
}#content{margin:0 0 0 2%;position:relative;} 
.summary-container,.content-container{background:#FFF;width:96%;margin-top:8px;padding:10px;position:relative;} 
.content-container p{margin:0 0 10px 0; 
}#details-left{width:35%;float:left;margin-right:2%; 
}#details-right{width:63%;float:left;overflow:hidden; 
}#server_version{width:96%;_height:1px;min-height:1px;margin:0 0 5px 0;padding:11px 2% 8px 2%;color:#FFFFFF; 
 background-color:#5A7FA5;border-bottom:1px solid #C1CFDD;border-top:1px solid #4A6C8E;font-weight:normal; 
 font-size:1em;color:#FFF;text-align:right; 
}#server_version p{margin:5px 0;} 
table{margin:4px 0 4px 0;width:100%;border:none;} 
td,th{vertical-align:top;padding:3px 0;text-align:left;font-weight:normal;border:none;} 
th{width:30%;text-align:right;padding-right:2%;font-weight:bold;} 
thead th{background-color:#ebebeb;width:25%; 
}#details-right th{width:20%;} 
table tr.alt td,table tr.alt th{} 
.highlight-code{color:#CC0000;font-weight:bold;font-style:italic;} 
.clear{clear:both;} 
.preferred{padding:0 5px 2px 5px;font-weight:normal;background:#006633;color:#FFF;font-size:.8em;} 
--> 
</style> 
 
</head> 
<body> 
<div id="content"> 
<div class="content-container"> 
  <h3>HTTP Error 404.0 - Not Found</h3> 
  <h4>您要找的资源已被删除、已更名或暂时不可用。</h4> 
</div> 
<div class="content-container"> 
 <fieldset><h4>最可能的原因:</h4> 
  <ul> 	<li>指定的目录或文件在 Web 服务器上不存在。</li> 	<li>URL 拼写错误。</li> 	<li>某个自定义筛选器或模块(如 URLScan)限制了对该文件的访问。</li> </ul> 
 </fieldset> 
</div> 
<div class="content-container"> 
 <fieldset><h4>可尝试的操作:</h4> 
  <ul> 	<li>在 Web 服务器上创建内容。</li> 	<li>检查浏览器 URL。</li> 	<li>检查失败请求跟踪日志并查看哪个模块正在调用 SetStatus。有关详细信息，请单击<a href="http://go.microsoft.com/fwlink/?LinkID=66439">此处</a>。</li> </ul> 
 </fieldset> 
</div> 
 
<div class="content-container"> 
 <fieldset><h4>Detailed Error Information:</h4> 
  <div id="details-left"> 
   <table border="0" cellpadding="0" cellspacing="0"> 
    <tr class="alt"><th>Module</th><td>&nbsp;&nbsp;&nbsp;IIS Web Core</td></tr> 
    <tr><th>Notification</th><td>&nbsp;&nbsp;&nbsp;MapRequestHandler</td></tr> 
    <tr class="alt"><th>Handler</th><td>&nbsp;&nbsp;&nbsp;StaticFile</td></tr> 
    <tr><th>Error Code</th><td>&nbsp;&nbsp;&nbsp;0x80070002</td></tr> 
     
   </table> 
  </div> 
  <div id="details-right"> 
   <table border="0" cellpadding="0" cellspacing="0"> 
    <tr class="alt"><th>Requested URL</th><td>&nbsp;&nbsp;&nbsp;https://localhost:44392/Scripts/jquery-3.4.1.js</td></tr> 
    <tr><th>Physical Path</th><td>&nbsp;&nbsp;&nbsp;E:\bdl projects\BDLIS\BDLIS\Scripts\jquery-3.4.1.js</td></tr> 
    <tr class="alt"><th>Logon Method</th><td>&nbsp;&nbsp;&nbsp;匿名</td></tr> 
    <tr><th>Logon User</th><td>&nbsp;&nbsp;&nbsp;匿名</td></tr> 
     
   </table> 
   <div class="clear"></div> 
  </div> 
 </fieldset> 
</div> 
 
<div class="content-container"> 
 <fieldset><h4>More Information:</h4> 
  此错误表明文件或目录在服务器上不存在。请创建文件或目录并重新尝试请求。 
  <p><a href="https://go.microsoft.com/fwlink/?LinkID=62293&amp;IIS70Error=404,0,0x80070002,19045">View more information &raquo;</a></p> 
   
 </fieldset> 
</div> 
</div> 
</body> 
</html> 
