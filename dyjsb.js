/**
 作者：临渊
 日期：7-1
 软件：抖音极速版
 功能：签到、看广告、看小说、搜索
 抓包：进入活动后，抓 api5-normal-c-hl.amemv.com 域名请求体里cookie
 变量格式：export dyjsAPP='xxx' 
 Cron： 13,43 8-18,23 * * *

 不支持多账号！不支持多账号！不支持多账号！多账号跑会有错误

 [task_local]
 #抖音极速版
 10,40 8-18,23 * * * https://raw.githubusercontent.com/LinYuanovo/scripts/main/dyjsb.js, tag=抖音极速版, enabled=true
 [rewrite_local]
 https://api5-normal-c-hl.amemv.com/luckycat/aweme/v1/task url script-request-header https://raw.githubusercontent.com/LinYuanovo/scripts/main/dyjsb.js
 [MITM]
 hostname = api5-normal-c-hl.amemv.com
 */

 const $ = new Env('抖音极速');
 const notify = $.isNode() ? require('./sendNotify') : '';
 const {log} = console;
 const Notify = 2; //0为关闭通知，1为完成任务进行通知，2为23.40之后推送一次余额，默认为2
 const debug = 0; //0为关闭调试，1为打开调试，默认为0
 let scriptVersion = "1.0.1";
 //////////////////////
 
 const _0x4d09=['push','getTimezoneOffset','headers','req_id','constructor','get','【上传步数】','\x20============','key','console','\x22,\x22ad_inspire\x22:\x22{\x22score_amount\x22:\x22888\x22,\x22amount\x22:\x22\x22,\x22req_id\x22:\x22','【上传',',\x22submit_time\x22:','搜索赚金币','compile','reward_amount','cookie','\x0a\x0a【debug】===============这是\x20开宝箱\x20返回data==============','【领取第','sendNotify','hasOwnProperty','v1/task/page','，现金余额：','/walk/step_submit?aid=2329&device_platform=android&update_version_code=21040000','\x22,\x22ad_inspire\x22:\x22{\x22score_amount\x22:\x22888\x5c\x22,\x22req_id\x22:\x22','/done/treasure_task?aid=2329&device_platform=android&update_version_code=21040000','excitation_ad_info','return\x20/\x22\x20+\x20this\x20+\x20\x22/','\x0a\x20【','\x20个账号\x20===================','ad_id','\x0a【领取视频奖励】今日已达上限','amount','步数】','warn','forEach','indexOf','*/*','\x0a\x0a【debug】===============这是\x20上传步数\x20返回data==============','toLocaleString','\x0a【debug】===============\x20这是\x20获取任务列表\x20请求\x20url\x20===============','./sendNotify','【领取步数奖励】','\x0a\x0a【debug】===============这是\x20领取视频奖励\x20返回data==============','/done/excitation_ad_treasure_box?aid=2329&device_platform=android&update_version_code=21040000','\x0a\x0a【debug】===============这是\x20签到\x20返回data==============','msg','【开宝箱】','done_limit','err_tips','split','\x0a【debug】===============\x20这是\x20领取搜索奖励\x20请求\x20url\x20===============','today_step','stringify','\x0a【debug】===============\x20这是\x20开宝箱\x20请求\x20url\x20===============','err_no','undefined','getdata','error','\x0a【debug】===============\x20这是\x20上传步数\x20请求\x20url\x20===============','isNode','\x0a【debug】===============\x20这是\x20领取看小说奖励\x20请求\x20url\x20===============','次看小说奖励】','，获得：','log','\x0a【领取开宝箱视频奖励】','\x0a\x0a=============================================\x20\x20\x20\x20\x0a脚本执行\x20-\x20北京时间(UTC+8)：','exception','api5-normal-c-hl.amemv.com','apply','daily_times','已达到上限','task_list','看小说赚金币','\x0a=========\x20开始【第\x20','setdata','\x22,\x22amount\x22:\x22888\x22,\x22ad_rit\x22:\x22','done_time','{\x22step\x22:','amount1','wait','\x0a【领取第','status_extra','https://api5-normal-c-hl.amemv.com/luckycat/aweme/v1/task','data','\x0a【debug】===============\x20这是\x20领取签到视频奖励\x20请求\x20url\x20===============','trace','length','\x22}\x22,\x22ad_alias_position\x22:\x22check_in\x22,\x22timeout\x22:4000}','\x0a金币余额：','return\x20(function()\x20','dyjsAPP','/done/read_novel?aid=2329&device_platform=android&update_version_code=21040000','\x0a【debug】===============\x20这是\x20领取开宝箱视频奖励\x20请求\x20url\x20===============','【领取视频奖励】','/done/sign_in?aid=2329&device_platform=android&update_version_code=21040000','金币余额：','\x0a\x0a【debug】===============这是\x20领取开宝箱视频奖励\x20返回data==============','debug','income_data','\x20,不用请自行关闭重写!','finally','【debug】\x20这是你的全部账号数组:\x0a\x20','{}.constructor(\x22return\x20this\x22)(\x20)','个\x20ck\x20成功:\x20','\x0a【debug】===============\x20这是\x20获取签到详情\x20请求\x20url\x20===============','【领取开宝箱视频奖励】','today_times','\x0a\x0a【debug】===============这是\x20领取看小说奖励\x20返回data==============','【领取搜索奖励】','/page?aid=2329&device_platform=android&update_version_code=21040000','{\x22task_key\x22:\x22','env','amount2','看广告赚金币','name','\x0a【签到】','\x0a\x0a【debug】===============这是\x20领取签到视频奖励\x20返回data==============','score_amount','\x0a===================\x20共找到\x20','\x0a【debug】===============\x20这是\x20领取步数奖励\x20请求\x20url\x20===============','【获取任务列表】失败，原因是：','【领取签到视频奖励】','\x0a============\x20当前版本：','，退出','/done/excitation_ad?aid=2329&device_platform=android&update_version_code=21040000','【领取视频奖励】今日已达上限','\x0a【debug】===============\x20这是\x20领取视频奖励\x20请求\x20url\x20===============','parse','明日再来','post','table','【签到】','\x20\x20最新版本：','catch','task_key','url','completed','done','\x0a\x0a【debug】===============这是\x20获取任务列表\x20返回data==============','\x20账号信息:\x0a\x20','\x22}\x22,\x22ad_alias_position\x22:\x22task\x22,\x22timeout\x22:4000}','\x20\x0a=============================================\x0a','【领取看小说奖励】','getTime','\x0a【领取搜索奖励】','\x0a\x20【debug】\x20这是你第\x20','\x20获取\x20ck\x20成功:\x20'];(function(_0x3ed258,_0x4d0946){const _0x40abb9=function(_0x48f222){while(--_0x48f222){_0x3ed258['push'](_0x3ed258['shift']());}};const _0x33f780=function(){const _0x23bb53={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x544389,_0x4cd167,_0x114eb7,_0xb22367){_0xb22367=_0xb22367||{};let _0x44a84d=_0x4cd167+'='+_0x114eb7;let _0x511fea=0x0;for(let _0x4bbce9=0x0,_0x16b8e3=_0x544389['length'];_0x4bbce9<_0x16b8e3;_0x4bbce9++){const _0x1d3464=_0x544389[_0x4bbce9];_0x44a84d+=';\x20'+_0x1d3464;const _0x46cb1a=_0x544389[_0x1d3464];_0x544389['push'](_0x46cb1a);_0x16b8e3=_0x544389['length'];if(_0x46cb1a!==!![]){_0x44a84d+='='+_0x46cb1a;}}_0xb22367['cookie']=_0x44a84d;},'removeCookie':function(){return'dev';},'getCookie':function(_0x124006,_0x11e92c){_0x124006=_0x124006||function(_0x1275a2){return _0x1275a2;};const _0x3e3b62=_0x124006(new RegExp('(?:^|;\x20)'+_0x11e92c['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));const _0x3864ee=function(_0x52b009,_0x25c634){_0x52b009(++_0x25c634);};_0x3864ee(_0x40abb9,_0x4d0946);return _0x3e3b62?decodeURIComponent(_0x3e3b62[0x1]):undefined;}};const _0x43af70=function(){const _0x437724=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x437724['test'](_0x23bb53['removeCookie']['toString']());};_0x23bb53['updateCookie']=_0x43af70;let _0x5b340c='';const _0x27b14e=_0x23bb53['updateCookie']();if(!_0x27b14e){_0x23bb53['setCookie'](['*'],'counter',0x1);}else if(_0x27b14e){_0x5b340c=_0x23bb53['getCookie'](null,'counter');}else{_0x23bb53['removeCookie']();}};_0x33f780();}(_0x4d09,0x16c));const _0x40ab=function(_0x3ed258,_0x4d0946){_0x3ed258=_0x3ed258-0x0;let _0x40abb9=_0x4d09[_0x3ed258];return _0x40abb9;};const _0x544389=function(){let _0x5898d8=!![];return function(_0x42a956,_0x52a777){const _0x4364fc=_0x5898d8?function(){if(_0x52a777){const _0x48ae15=_0x52a777['apply'](_0x42a956,arguments);_0x52a777=null;return _0x48ae15;}}:function(){};_0x5898d8=![];return _0x4364fc;};}();const _0x27b14e=_0x544389(this,function(){const _0x80127d=function(){const _0x5d7361=_0x80127d[_0x40ab('0x54')](_0x40ab('0x6b'))()[_0x40ab('0x5e')]('^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}');return!_0x5d7361['test'](_0x27b14e);};return _0x80127d();});_0x27b14e();const _0x23bb53=function(){let _0x2003f1=!![];return function(_0x2cc14d,_0x1e9eb6){const _0x717a95=_0x2003f1?function(){if(_0x1e9eb6){const _0x228e85=_0x1e9eb6[_0x40ab('0x1')](_0x2cc14d,arguments);_0x1e9eb6=null;return _0x228e85;}}:function(){};_0x2003f1=![];return _0x717a95;};}();const _0x48f222=_0x23bb53(this,function(){const _0x524457=function(){};const _0x59b948=function(){let _0x42a40f;try{_0x42a40f=Function(_0x40ab('0x16')+_0x40ab('0x23')+');')();}catch(_0x58ce71){_0x42a40f=window;}return _0x42a40f;};const _0x598836=_0x59b948();if(!_0x598836[_0x40ab('0x59')]){_0x598836[_0x40ab('0x59')]=function(_0x548678){const _0x5b9a2a={};_0x5b9a2a[_0x40ab('0x90')]=_0x548678;_0x5b9a2a[_0x40ab('0x72')]=_0x548678;_0x5b9a2a[_0x40ab('0x1e')]=_0x548678;_0x5b9a2a['info']=_0x548678;_0x5b9a2a[_0x40ab('0x8a')]=_0x548678;_0x5b9a2a[_0x40ab('0x93')]=_0x548678;_0x5b9a2a['table']=_0x548678;_0x5b9a2a[_0x40ab('0x12')]=_0x548678;return _0x5b9a2a;}(_0x524457);}else{_0x598836[_0x40ab('0x59')]['log']=_0x524457;_0x598836['console'][_0x40ab('0x72')]=_0x524457;_0x598836[_0x40ab('0x59')][_0x40ab('0x1e')]=_0x524457;_0x598836[_0x40ab('0x59')]['info']=_0x524457;_0x598836[_0x40ab('0x59')][_0x40ab('0x8a')]=_0x524457;_0x598836[_0x40ab('0x59')]['exception']=_0x524457;_0x598836['console'][_0x40ab('0x3f')]=_0x524457;_0x598836['console']['trace']=_0x524457;}});_0x48f222();let scriptVersionLatest='';let dyjsAPP=($[_0x40ab('0x8c')]()?process[_0x40ab('0x2c')]['dyjsAPP']:$[_0x40ab('0x89')]('dyjsAPP'))||'';let dyjsAPPArr=[];let dyjs='';let data='';let msg1='';let msg2='';let activityUrl=_0x40ab('0xf');let task_key='';let ad_rit='';let req_id='';let loginBack=0x0;let excitation_adBack=0x0;let search_excitationBack=0x0;let searchTimes=0x0;let read_novelBack=0x0;let read_novelNum=0x0;let signinBack=0x0;let signinVideoBack=0x0;let boxVideoBack=0x0;let submitStepBack=0x0;let coin=0x0;let cash=0x0;!(async()=>{if(typeof $request!==_0x40ab('0x88')){await GetRewrite();}else{if(!await Envs())return;else{log(_0x40ab('0x92')+new Date(new Date()[_0x40ab('0x4c')]()+new Date()[_0x40ab('0x51')]()*0x3c*0x3e8+0x8*0x3c*0x3c*0x3e8)[_0x40ab('0x77')]()+_0x40ab('0x4a'));await poem();await getVersion();log(_0x40ab('0x37')+scriptVersion+_0x40ab('0x41')+scriptVersionLatest+_0x40ab('0x57'));log(_0x40ab('0x33')+dyjsAPPArr['length']+_0x40ab('0x6d'));if(debug){log(_0x40ab('0x22')+dyjsAPPArr);}for(let _0x621ada=0x0;_0x621ada<dyjsAPPArr[_0x40ab('0x13')];_0x621ada++){let _0x5ccbeb=_0x621ada+0x1;log(_0x40ab('0x6')+_0x5ccbeb+'\x20个账号】=========\x0a');dyjs=dyjsAPPArr[_0x621ada];if(debug){log(_0x40ab('0x4e')+_0x5ccbeb+_0x40ab('0x48')+data+'\x0a');}await submitStep();await $[_0x40ab('0xc')](randomInt(0xbb8,0x1770));if(submitStepBack){await getStepReward();await $[_0x40ab('0xc')](randomInt(0xbb8,0x1770));}await getTaskList();if(loginBack){if(signinBack){await $[_0x40ab('0xc')](randomInt(0xbb8,0x1770));await getSigninInfo();await $[_0x40ab('0xc')](randomInt(0xbb8,0x1770));await getSigninVideoReward();await $[_0x40ab('0xc')](randomInt(0xbb8,0x1770));}await getWatchVideoReward();await $['wait'](randomInt(0xbb8,0x1770));if(search_excitationBack){await getSearchReward();await $[_0x40ab('0xc')](randomInt(0xbb8,0x1770));while(searchTimes!=0x0){await getSearchReward();await $[_0x40ab('0xc')](randomInt(0xbb8,0x1770));}}if(read_novelBack){await getReadNovelReward();await $['wait'](randomInt(0xbb8,0x1770));while(read_novelNum){await getReadNovelReward();await $[_0x40ab('0xc')](randomInt(0xbb8,0x1770));}}}log(_0x40ab('0x1c')+coin+_0x40ab('0x66')+cash);if(msg1!=''){msg1+=_0x40ab('0x15')+coin+_0x40ab('0x66')+cash;}msg2+='\x0a金币余额：'+coin+'，现金余额：'+cash;}if(Notify==0x1){await SendMsg(msg1);}else if(Notify==0x2&&new Date()['getHours']()>=0x17&&new Date()['getMinutes']()>=0x28){await SendMsg(msg2);}}}})()[_0x40ab('0x42')](_0x410063=>log(_0x410063))[_0x40ab('0x21')](()=>$[_0x40ab('0x46')]());function getTaskList(_0x1205ed=0x3*0x3e8){return new Promise(_0x4fe93b=>{let _0xf4d763={'url':activityUrl+_0x40ab('0x2a'),'headers':{'Host':_0x40ab('0x0'),'cookie':''+dyjs}};if(debug){log(_0x40ab('0x78'));log(JSON[_0x40ab('0x85')](_0xf4d763));}$['get'](_0xf4d763,async(_0x5b0e16,_0x3da743,_0x558614)=>{try{if(debug){log(_0x40ab('0x47'));log(_0x558614);}let _0x2e4f64=JSON[_0x40ab('0x3c')](_0x558614);if(_0x2e4f64[_0x40ab('0x87')]==0x0){coin=_0x2e4f64[_0x40ab('0x10')]['income_data'][_0x40ab('0xb')];cash=_0x2e4f64[_0x40ab('0x10')][_0x40ab('0x1f')][_0x40ab('0x2d')];cash=cash/0x64;loginBack=0x1;for(let _0x53d203 in _0x2e4f64[_0x40ab('0x10')][_0x40ab('0x4')]){if(_0x2e4f64[_0x40ab('0x10')][_0x40ab('0x4')][_0x53d203]['profit_desc'][_0x40ab('0x74')]('签到')>-0x1){let _0x2b7e09=JSON[_0x40ab('0x3c')](_0x2e4f64[_0x40ab('0x10')][_0x40ab('0x4')][_0x53d203][_0x40ab('0x45')]);if(!_0x2b7e09){signinBack=0x1;}else signinBack=0x0;}if(_0x2e4f64['data'][_0x40ab('0x4')][_0x53d203][_0x40ab('0x2f')]['indexOf'](_0x40ab('0x2e'))>-0x1){let _0x34eba8=JSON[_0x40ab('0x3c')](_0x2e4f64[_0x40ab('0x10')][_0x40ab('0x4')][_0x53d203]['status_extra']);if(!_0x34eba8['completed']){excitation_adBack=0x1;task_key=_0x2e4f64[_0x40ab('0x10')][_0x40ab('0x4')][_0x53d203][_0x40ab('0x58')];ad_rit=_0x34eba8[_0x40ab('0x6e')];req_id=_0x34eba8[_0x40ab('0x53')];}else excitation_adBack=0x0;if(_0x2e4f64[_0x40ab('0x10')]['task_list'][_0x53d203]['action_desc'][_0x40ab('0x74')](_0x40ab('0x3d'))>-0x1){excitation_adBack=0x0;log(_0x40ab('0x3a'));}}if(_0x2e4f64[_0x40ab('0x10')][_0x40ab('0x4')][_0x53d203][_0x40ab('0x2f')][_0x40ab('0x74')](_0x40ab('0x5d'))>-0x1){let _0x67d59=JSON['parse'](_0x2e4f64[_0x40ab('0x10')][_0x40ab('0x4')][_0x53d203][_0x40ab('0xe')]);if(_0x67d59[_0x40ab('0x27')]!=_0x67d59['times_every_day']){search_excitationBack=0x1;}else search_excitationBack=0x0;}if(_0x2e4f64[_0x40ab('0x10')]['task_list'][_0x53d203]['name']['indexOf'](_0x40ab('0x5'))>-0x1){let _0x2c5686=JSON[_0x40ab('0x3c')](_0x2e4f64[_0x40ab('0x10')][_0x40ab('0x4')][_0x53d203][_0x40ab('0x45')]);if(!_0x2c5686){read_novelBack=0x1;}else read_novelBack=0x0;}}}else{log(_0x40ab('0x35')+_0x2e4f64[_0x40ab('0x81')]+_0x40ab('0x38'));}}catch(_0x2c946f){log(_0x2c946f);}finally{_0x4fe93b();}},_0x1205ed);});}function getWatchVideoReward(_0x1047c0=0x3*0x3e8){return new Promise(_0x21ab1b=>{let _0x49dee2={'url':activityUrl+_0x40ab('0x39'),'headers':{'Host':_0x40ab('0x0'),'Cookie':''+dyjs},'body':'{\x22task_key\x22:\x22'+task_key+'\x22,\x22amount\x22:\x22888\x22,\x22ad_rit\x22:\x22'+ad_rit+_0x40ab('0x68')+req_id+_0x40ab('0x49')};if(debug){log(_0x40ab('0x3b'));log(JSON['stringify'](_0x49dee2));}$[_0x40ab('0x3e')](_0x49dee2,async(_0x455bbb,_0x5b4d9f,_0xffe6bd)=>{try{if(debug){log(_0x40ab('0x7b'));log(_0xffe6bd);}let _0x405710=JSON[_0x40ab('0x3c')](_0xffe6bd);if(_0x405710[_0x40ab('0x87')]===0x0&&_0x405710[_0x40ab('0x10')][_0x40ab('0x64')](_0x40ab('0x70'))){log(_0x40ab('0x1a')+_0x405710[_0x40ab('0x81')]+_0x40ab('0x8f')+_0x405710[_0x40ab('0x10')]['amount']+'金币');msg1+='\x0a【领取视频奖励】'+_0x405710[_0x40ab('0x81')]+_0x40ab('0x8f')+_0x405710[_0x40ab('0x10')][_0x40ab('0x70')]+'金币';}else if(_0x405710[_0x40ab('0x87')]===0x2716&&_0x405710[_0x40ab('0x81')]['indexOf'](_0x40ab('0x3'))>-0x1){log(_0x40ab('0x3a'));msg1+=_0x40ab('0x6f');}else log(_0x40ab('0x1a')+_0x405710[_0x40ab('0x81')]);}catch(_0x56ff00){log(_0x56ff00);}finally{_0x21ab1b();}},_0x1047c0);});}function getSearchReward(_0x4d33f4=0x3*0x3e8){return new Promise(_0x38e532=>{let _0x226c19={'url':activityUrl+'/done/search_excitation?aid=2329&device_platform=android&update_version_code=21040000','headers':{'Host':_0x40ab('0x0'),'Cookie':''+dyjs},'body':''};if(debug){log(_0x40ab('0x83'));log(JSON[_0x40ab('0x85')](_0x226c19));}$[_0x40ab('0x3e')](_0x226c19,async(_0x19b384,_0x37f7dc,_0x6912a1)=>{try{if(debug){log('\x0a\x0a【debug】===============这是\x20领取搜索奖励\x20返回data==============');log(_0x6912a1);}let _0x14ae5e=JSON[_0x40ab('0x3c')](_0x6912a1);if(_0x14ae5e[_0x40ab('0x87')]===0x0&&_0x14ae5e[_0x40ab('0x10')][_0x40ab('0x64')](_0x40ab('0x70'))){searchTimes=_0x14ae5e[_0x40ab('0x10')][_0x40ab('0x2')];log(_0x40ab('0x29')+_0x14ae5e['err_tips']+_0x40ab('0x8f')+_0x14ae5e[_0x40ab('0x10')]['amount']+'金币');msg1+=_0x40ab('0x4d')+_0x14ae5e[_0x40ab('0x81')]+_0x40ab('0x8f')+_0x14ae5e[_0x40ab('0x10')]['amount']+'金币';}else log(_0x40ab('0x29')+_0x14ae5e[_0x40ab('0x81')]);}catch(_0x201275){log(_0x201275);}finally{_0x38e532();}},_0x4d33f4);});}function getReadNovelReward(_0xd59ae2=0x3*0x3e8){return new Promise(_0x4850f0=>{let _0x42172c={'url':activityUrl+_0x40ab('0x18'),'headers':{'Host':'api5-normal-c-hl.amemv.com','Cookie':''+dyjs},'body':''};if(debug){log(_0x40ab('0x8d'));log(JSON[_0x40ab('0x85')](_0x42172c));}$['post'](_0x42172c,async(_0x3f32ef,_0x4e0489,_0x14074b)=>{try{if(debug){log(_0x40ab('0x28'));log(_0x14074b);}let _0x177703=JSON['parse'](_0x14074b);if(_0x177703['err_no']===0x0&&_0x177703[_0x40ab('0x10')][_0x40ab('0x64')](_0x40ab('0x32'))){if(_0x177703[_0x40ab('0x10')][_0x40ab('0x9')]!=_0x177703[_0x40ab('0x10')][_0x40ab('0x80')]){read_novelNum=0x1;}else read_novelNum=0x0;log(_0x40ab('0x62')+_0x177703[_0x40ab('0x10')][_0x40ab('0x9')]+_0x40ab('0x8e')+_0x177703['err_tips']+_0x40ab('0x8f')+_0x177703[_0x40ab('0x10')][_0x40ab('0x32')]+'金币');msg1+=_0x40ab('0xd')+_0x177703[_0x40ab('0x10')][_0x40ab('0x9')]+_0x40ab('0x8e')+_0x177703['err_tips']+_0x40ab('0x8f')+_0x177703['data'][_0x40ab('0x32')]+'金币';}else log(_0x40ab('0x4b')+_0x177703[_0x40ab('0x81')]);}catch(_0x45825f){log(_0x45825f);}finally{_0x4850f0();}},_0xd59ae2);});}function submitStep(_0x43640e=0x3*0x3e8){return new Promise(_0x2be7cc=>{let _0x421487={'url':activityUrl+_0x40ab('0x67'),'headers':{'Accept':_0x40ab('0x75'),'Host':'api5-normal-c-hl.amemv.com','cookie':''+dyjs,'Content-Type':'application/json'},'body':_0x40ab('0xa')+randomInt(0x2ee0,0x32c8)+_0x40ab('0x5c')+(timestampS()-0x14)+'}'};if(debug){log(_0x40ab('0x8b'));log(JSON[_0x40ab('0x85')](_0x421487));}$['post'](_0x421487,async(_0x1b09de,_0x17daf5,_0x5675d8)=>{try{if(debug){log(_0x40ab('0x76'));log(_0x5675d8);}let _0x414d9f=JSON[_0x40ab('0x3c')](_0x5675d8);if(_0x414d9f['err_no']===0x0&&_0x414d9f[_0x40ab('0x10')][_0x40ab('0x64')](_0x40ab('0x84'))){submitStepBack=0x1;log(_0x40ab('0x5b')+_0x414d9f[_0x40ab('0x10')][_0x40ab('0x84')]+_0x40ab('0x71')+_0x414d9f[_0x40ab('0x81')]);}else{submitStepBack=0x0;log(_0x40ab('0x56')+_0x414d9f['err_tips']);}}catch(_0x281d6a){log(_0x281d6a);}finally{_0x2be7cc();}},_0x43640e);});}function getStepReward(_0x197202=0x3*0x3e8){return new Promise(_0x3c37f2=>{let _0x531741={'url':activityUrl+'/walk/receive_step_reward?aid=2329&device_platform=android&update_version_code=21040000','headers':{'Host':_0x40ab('0x0'),'Cookie':''+dyjs},'body':''};if(debug){log(_0x40ab('0x34'));log(JSON[_0x40ab('0x85')](_0x531741));}$[_0x40ab('0x3e')](_0x531741,async(_0x4d9041,_0x43636d,_0x20562c)=>{try{if(debug){log('\x0a\x0a【debug】===============这是\x20领取步数奖励\x20返回data==============');log(_0x20562c);}let _0x29e3a8=JSON[_0x40ab('0x3c')](_0x20562c);if(_0x29e3a8['err_no']===0x0&&_0x29e3a8[_0x40ab('0x10')]['hasOwnProperty'](_0x40ab('0x5f'))){log(_0x40ab('0x7a')+_0x29e3a8['err_tips']+_0x40ab('0x8f')+_0x29e3a8['data'][_0x40ab('0x5f')]+'金币');}else log(_0x40ab('0x7a')+_0x29e3a8[_0x40ab('0x81')]);}catch(_0x5666cf){log(_0x5666cf);}finally{_0x3c37f2();}},_0x197202);});}function signin(_0x1a3baf=0x3*0x3e8){return new Promise(_0x50c810=>{let _0x4017da={'url':activityUrl+_0x40ab('0x1b'),'headers':{'Host':_0x40ab('0x0'),'Cookie':''+dyjs},'body':'{}'};if(debug){log('\x0a【debug】===============\x20这是\x20签到\x20请求\x20url\x20===============');log(JSON[_0x40ab('0x85')](_0x4017da));}$[_0x40ab('0x3e')](_0x4017da,async(_0x2dc43f,_0x223383,_0x2f3bdd)=>{try{if(debug){log(_0x40ab('0x7d'));log(_0x2f3bdd);}let _0x3db6a5=JSON['parse'](_0x2f3bdd);if(_0x3db6a5[_0x40ab('0x87')]===0x0&&_0x3db6a5[_0x40ab('0x10')]['hasOwnProperty'](_0x40ab('0x70'))){log(_0x40ab('0x40')+_0x3db6a5['err_tips']+_0x40ab('0x8f')+_0x3db6a5[_0x40ab('0x10')][_0x40ab('0x70')]+'金币');msg1+=_0x40ab('0x30')+_0x3db6a5[_0x40ab('0x81')]+_0x40ab('0x8f')+_0x3db6a5[_0x40ab('0x10')][_0x40ab('0x70')]+'金币';}else log('【签到】'+_0x3db6a5[_0x40ab('0x81')]);}catch(_0x8f7069){log(_0x8f7069);}finally{_0x50c810();}},_0x1a3baf);});}function getSigninInfo(_0x5afd1c=0x3*0x3e8){return new Promise(_0x38e220=>{let _0x3ede45={'url':activityUrl+'/sign_in/detail?aid=2329&device_platform=android&update_version_code=21040000','headers':{'Host':_0x40ab('0x0'),'Cookie':''+dyjs}};if(debug){log(_0x40ab('0x25'));log(JSON[_0x40ab('0x85')](_0x3ede45));}$[_0x40ab('0x55')](_0x3ede45,async(_0x148c50,_0x3be060,_0x12c452)=>{try{if(debug){log('\x0a\x0a【debug】===============这是\x20获取签到详情\x20返回data==============');log(_0x12c452);}let _0x31871a=JSON[_0x40ab('0x3c')](_0x12c452);if(_0x31871a[_0x40ab('0x87')]===0x0&&_0x31871a[_0x40ab('0x10')][_0x40ab('0x64')](_0x40ab('0x6a'))){signinVideoBack=0x1;task_key=_0x31871a['data']['excitation_ad_info'][_0x40ab('0x43')];ad_rit=_0x31871a[_0x40ab('0x10')]['excitation_ad_info'][_0x40ab('0x6e')];req_id=_0x31871a['data'][_0x40ab('0x6a')][_0x40ab('0x53')];}else{signinVideoBack=0x0;log('【获取签到详情】'+_0x31871a[_0x40ab('0x81')]);}}catch(_0x876c8e){log(_0x876c8e);}finally{_0x38e220();}},_0x5afd1c);});}function getSigninVideoReward(_0x1e53a5=0x3*0x3e8){return new Promise(_0x2d6a01=>{let _0x332169={'url':activityUrl+'/done/excitation_ad_signin?aid=2329&device_platform=android&update_version_code=21040000','headers':{'Host':_0x40ab('0x0'),'Cookie':''+dyjs},'body':'{\x22task_key\x22:\x22'+task_key+_0x40ab('0x8')+ad_rit+_0x40ab('0x5a')+req_id+_0x40ab('0x14')};if(debug){log(_0x40ab('0x11'));log(JSON[_0x40ab('0x85')](_0x332169));}$[_0x40ab('0x3e')](_0x332169,async(_0x53f4d9,_0x35be39,_0x22d019)=>{try{if(debug){log(_0x40ab('0x31'));log(_0x22d019);}let _0x292916=JSON[_0x40ab('0x3c')](_0x22d019);if(_0x292916[_0x40ab('0x87')]===0x0&&_0x292916[_0x40ab('0x10')]['hasOwnProperty']('amount')){log(_0x40ab('0x36')+_0x292916['err_tips']+_0x40ab('0x8f')+_0x292916[_0x40ab('0x10')]['amount']+'金币');msg1+='\x0a【领取签到视频奖励】'+_0x292916[_0x40ab('0x81')]+_0x40ab('0x8f')+_0x292916[_0x40ab('0x10')]['amount']+'金币';}else log('【领取签到视频奖励】'+_0x292916['err_tips']);}catch(_0x19cf26){log(_0x19cf26);}finally{_0x2d6a01();}},_0x1e53a5);});}function openBox(_0x30fbfa=0x3*0x3e8){return new Promise(_0x3b58b4=>{let _0x4798f7={'url':activityUrl+_0x40ab('0x69'),'headers':{'Host':_0x40ab('0x0'),'Cookie':''+dyjs},'body':'{}'};if(debug){log(_0x40ab('0x86'));log(JSON['stringify'](_0x4798f7));}$[_0x40ab('0x3e')](_0x4798f7,async(_0x5a7fe5,_0x36e756,_0x462576)=>{try{if(debug){log(_0x40ab('0x61'));log(_0x462576);}let _0xfc3fda=JSON[_0x40ab('0x3c')](_0x462576);if(_0xfc3fda[_0x40ab('0x87')]===0x0&&_0xfc3fda[_0x40ab('0x10')][_0x40ab('0x64')](_0x40ab('0x70'))){boxVideoBack=0x1;task_key=_0xfc3fda[_0x40ab('0x10')][_0x40ab('0x6a')][_0x40ab('0x43')];ad_rit=_0xfc3fda[_0x40ab('0x10')][_0x40ab('0x6a')][_0x40ab('0x6e')];req_id=_0xfc3fda[_0x40ab('0x10')][_0x40ab('0x6a')]['req_id'];log(_0x40ab('0x7f')+_0xfc3fda[_0x40ab('0x81')]+_0x40ab('0x8f')+_0xfc3fda[_0x40ab('0x10')][_0x40ab('0x70')]+'金币');msg1+='\x0a【开宝箱】'+_0xfc3fda['err_tips']+_0x40ab('0x8f')+_0xfc3fda[_0x40ab('0x10')][_0x40ab('0x70')]+'金币';}else{log('【开宝箱】'+_0xfc3fda[_0x40ab('0x81')]);boxVideoBack=0x0;}}catch(_0x57e6fd){log(_0x57e6fd);}finally{_0x3b58b4();}},_0x30fbfa);});}function getBoxVideoReward(_0x5048d7=0x3*0x3e8){return new Promise(_0x3df0ee=>{let _0x5da688={'url':activityUrl+_0x40ab('0x7c'),'headers':{'Host':_0x40ab('0x0'),'Cookie':''+dyjs},'body':_0x40ab('0x2b')+task_key+_0x40ab('0x8')+ad_rit+_0x40ab('0x5a')+req_id+'\x22}\x22,\x22ad_alias_position\x22:\x22box\x22,\x22timeout\x22:4000}'};if(debug){log(_0x40ab('0x19'));log(JSON[_0x40ab('0x85')](_0x5da688));}$[_0x40ab('0x3e')](_0x5da688,async(_0x4c821d,_0x5d3c9f,_0x19945c)=>{try{if(debug){log(_0x40ab('0x1d'));log(_0x19945c);}let _0x12e223=JSON['parse'](_0x19945c);if(_0x12e223[_0x40ab('0x87')]===0x0&&_0x12e223[_0x40ab('0x10')]['hasOwnProperty'](_0x40ab('0x70'))){log('【领取开宝箱视频奖励】'+_0x12e223[_0x40ab('0x81')]+_0x40ab('0x8f')+_0x12e223['data'][_0x40ab('0x70')]+'金币');msg1+=_0x40ab('0x91')+_0x12e223[_0x40ab('0x81')]+_0x40ab('0x8f')+_0x12e223[_0x40ab('0x10')][_0x40ab('0x70')]+'金币';}else log(_0x40ab('0x26')+_0x12e223[_0x40ab('0x81')]);}catch(_0x208e95){log(_0x208e95);}finally{_0x3df0ee();}},_0x5048d7);});}async function GetRewrite(){if($request[_0x40ab('0x44')]['indexOf'](_0x40ab('0x65'))>-0x1){const _0x13df0c=$request[_0x40ab('0x52')][_0x40ab('0x60')];if(dyjsAPP){if(dyjsAPP[_0x40ab('0x74')](_0x13df0c)==-0x1){dyjsAPP=dyjsAPP+'@'+_0x13df0c;$[_0x40ab('0x7')](dyjsAPP,_0x40ab('0x17'));let _0x1e386d=dyjsAPP[_0x40ab('0x82')]('@');$[_0x40ab('0x7e')]('【'+$['name']+'】'+('\x20获取第'+_0x1e386d['length']+_0x40ab('0x24')+_0x13df0c+_0x40ab('0x20')));}}else{$['setdata'](_0x13df0c,_0x40ab('0x17'));$[_0x40ab('0x7e')]('【'+$[_0x40ab('0x2f')]+'】'+(_0x40ab('0x4f')+_0x13df0c+'\x20,不用请自行关闭重写!'));}}}async function Envs(){if(dyjsAPP){if(dyjsAPP[_0x40ab('0x74')]('@')!=-0x1){dyjsAPP['split']('@')['forEach'](_0x513dcf=>{dyjsAPPArr['push'](_0x513dcf);});}else if(dyjsAPP[_0x40ab('0x74')]('\x0a')!=-0x1){dyjsAPP[_0x40ab('0x82')]('\x0a')[_0x40ab('0x73')](_0x5bd78c=>{dyjsAPPArr[_0x40ab('0x50')](_0x5bd78c);});}else{dyjsAPPArr[_0x40ab('0x50')](dyjsAPP);}}else{log(_0x40ab('0x6c')+$['name']+'】：未填写变量\x20dyjsAPP');return;}return!![];}async function SendMsg(_0x5a9d57){if(!_0x5a9d57)return;if(Notify>0x0){if($[_0x40ab('0x8c')]()){var _0x1c489a=require(_0x40ab('0x79'));await _0x1c489a[_0x40ab('0x63')]($[_0x40ab('0x2f')],_0x5a9d57);}else{$[_0x40ab('0x7e')](_0x5a9d57);}}else{log(_0x5a9d57);}}

 /**
  * 随机数生成
  */
 function randomString(e) {
     e = e || 32;
     var t = "QWERTYUIOPASDFGHJKLZXCVBNM1234567890",
         a = t.length,
         n = "";
     for (i = 0; i < e; i++)
         n += t.charAt(Math.floor(Math.random() * a));
     return n
 }
 
 /**
  * 随机整数生成
  */
 function randomInt(min, max) {
     return Math.round(Math.random() * (max - min) + min)
 }

 /**
  * 获取毫秒时间戳
  */
 function timestampMs(){
    return new Date().getTime();
 }

 /**
  * 获取秒时间戳
  */
 function timestampS(){
    return Date.parse(new Date())/1000;
 }

 /**
  * 获取随机诗词
  */
 function poem(timeout = 3 * 1000) {
	return new Promise((resolve) => {
		let url = {
			url: `https://v1.jinrishici.com/all.json`
		}
		$.get(url, async (err, resp, data) => {
			try {
				data = JSON.parse(data)
				log(`${data.content}  \n————《${data.origin}》${data.author}`);
			} catch (e) {
				log(e, resp);
			} finally {
				resolve()
			}
		}, timeout)
	})
 }

 /**
  * 修改配置文件
  */
  function modify() {
                
    fs.readFile('/ql/data/config/config.sh','utf8',function(err,dataStr){
        if(err){
            return log('读取文件失败！'+err)
        }
        else {
            var result = dataStr.replace(/regular/g,string);
            fs.writeFile('/ql/data/config/config.sh', result, 'utf8', function (err) {
                     if (err) {return log(err);}
                });
            }
    })
 }

/**
 * 获取远程版本
 */
function getVersion(timeout = 3 * 1000) {
    return new Promise((resolve) => {
        let url = {
            url: `https://raw.gh.fakev.cn/LinYuanovo/scripts/main/dyjsb.js`,
        }
        $.get(url, async (err, resp, data) => {
            try {
                scriptVersionLatest = data.match(/scriptVersion = "([\d\.]+)"/)[1]
            } catch (e) {
                $.logErr(e, resp);
            } finally {
                resolve()
            }
        }, timeout)
    })
}

 function Env(t, e) { "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0); class s { constructor(t) { this.env = t } send(t, e = "GET") { t = "string" == typeof t ? { url: t } : t; let s = this.get; return "POST" === e && (s = this.post), new Promise((e, i) => { s.call(this, t, (t, s, r) => { t ? i(t) : e(s) }) }) } get(t) { return this.send.call(this.env, t) } post(t) { return this.send.call(this.env, t, "POST") } } return new class { constructor(t, e) { this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.startTime = (new Date).getTime(), Object.assign(this, e), this.log("", `🔔${this.name}, 开始!`) } isNode() { return "undefined" != typeof module && !!module.exports } isQuanX() { return "undefined" != typeof $task } isSurge() { return "undefined" != typeof $httpClient && "undefined" == typeof $loon } isLoon() { return "undefined" != typeof $loon } toObj(t, e = null) { try { return JSON.parse(t) } catch { return e } } toStr(t, e = null) { try { return JSON.stringify(t) } catch { return e } } getjson(t, e) { let s = e; const i = this.getdata(t); if (i) try { s = JSON.parse(this.getdata(t)) } catch { } return s } setjson(t, e) { try { return this.setdata(JSON.stringify(t), e) } catch { return !1 } } getScript(t) { return new Promise(e => { this.get({ url: t }, (t, s, i) => e(i)) }) } runScript(t, e) { return new Promise(s => { let i = this.getdata("@chavy_boxjs_userCfgs.httpapi"); i = i ? i.replace(/\n/g, "").trim() : i; let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout"); r = r ? 1 * r : 20, r = e && e.timeout ? e.timeout : r; const [o, h] = i.split("@"), n = { url: `http://${h}/v1/scripting/evaluate`, body: { script_text: t, mock_type: "cron", timeout: r }, headers: { "X-Key": o, Accept: "*/*" } }; this.post(n, (t, e, i) => s(i)) }).catch(t => this.logErr(t)) } loaddata() { if (!this.isNode()) return {}; { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e); if (!s && !i) return {}; { const i = s ? t : e; try { return JSON.parse(this.fs.readFileSync(i)) } catch (t) { return {} } } } } writedata() { if (this.isNode()) { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e), r = JSON.stringify(this.data); s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r) } } lodash_get(t, e, s) { const i = e.replace(/\[(\d+)\]/g, ".$1").split("."); let r = t; for (const t of i) if (r = Object(r)[t], void 0 === r) return s; return r } lodash_set(t, e, s) { return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t) } getdata(t) { let e = this.getval(t); if (/^@/.test(t)) { const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t), r = s ? this.getval(s) : ""; if (r) try { const t = JSON.parse(r); e = t ? this.lodash_get(t, i, "") : e } catch (t) { e = "" } } return e } setdata(t, e) { let s = !1; if (/^@/.test(e)) { const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e), o = this.getval(i), h = i ? "null" === o ? null : o || "{}" : "{}"; try { const e = JSON.parse(h); this.lodash_set(e, r, t), s = this.setval(JSON.stringify(e), i) } catch (e) { const o = {}; this.lodash_set(o, r, t), s = this.setval(JSON.stringify(o), i) } } else s = this.setval(t, e); return s } getval(t) { return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null } setval(t, e) { return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null } initGotEnv(t) { this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar, t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar)) } get(t, e = (() => { })) { t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.get(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => { try { if (t.headers["set-cookie"]) { const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString(); s && this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar } } catch (t) { this.logErr(t) } }).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) })) } post(t, e = (() => { })) { if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.post(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) }); else if (this.isQuanX()) t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t)); else if (this.isNode()) { this.initGotEnv(t); const { url: s, ...i } = t; this.got.post(s, i).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) }) } } time(t, e = null) { const s = e ? new Date(e) : new Date; let i = { "M+": s.getMonth() + 1, "d+": s.getDate(), "H+": s.getHours(), "m+": s.getMinutes(), "s+": s.getSeconds(), "q+": Math.floor((s.getMonth() + 3) / 3), S: s.getMilliseconds() }; /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length))); for (let e in i) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i[e] : ("00" + i[e]).substr(("" + i[e]).length))); return t } msg(e = t, s = "", i = "", r) { const o = t => { if (!t) return t; if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? { "open-url": t } : this.isSurge() ? { url: t } : void 0; if ("object" == typeof t) { if (this.isLoon()) { let e = t.openUrl || t.url || t["open-url"], s = t.mediaUrl || t["media-url"]; return { openUrl: e, mediaUrl: s } } if (this.isQuanX()) { let e = t["open-url"] || t.url || t.openUrl, s = t["media-url"] || t.mediaUrl; return { "open-url": e, "media-url": s } } if (this.isSurge()) { let e = t.url || t.openUrl || t["open-url"]; return { url: e } } } }; if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r))), !this.isMuteLog) { let t = ["", "==============📣系统通知📣=============="]; t.push(e), s && t.push(s), i && t.push(i), console.log(t.join("\n")), this.logs = this.logs.concat(t) } } log(...t) { t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator)) } logErr(t, e) { const s = !this.isSurge() && !this.isQuanX() && !this.isLoon(); s ? this.log("", `❗️${this.name}, 错误!`, t.stack) : this.log("", `❗️${this.name}, 错误!`, t) } wait(t) { return new Promise(e => setTimeout(e, t)) } done(t = {}) { const e = (new Date).getTime(), s = (e - this.startTime) / 1e3; this.log("", `🔔${this.name}, 结束! 🕛 ${s} 秒`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t) } }(t, e) }
