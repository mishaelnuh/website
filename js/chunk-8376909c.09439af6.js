(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8376909c"],{"27b0":function(e,t){e.exports=class{constructor(){this.seen={}}slug(e){let t=e.toLowerCase().trim().replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g,"").replace(/\s/g,"-");if(this.seen.hasOwnProperty(t)){const e=t;do{this.seen[e]++,t=e+"-"+this.seen[e]}while(this.seen.hasOwnProperty(t))}return this.seen[t]=0,t}}},"49b6":function(e,t,n){const{defaults:s}=n("bdbb"),{cleanUrl:r,escape:i}=n("ad42");e.exports=class{constructor(e){this.options=e||s}code(e,t,n){const s=(t||"").match(/\S*/)[0];if(this.options.highlight){const t=this.options.highlight(e,s);null!=t&&t!==e&&(n=!0,e=t)}return s?'<pre><code class="'+this.options.langPrefix+i(s,!0)+'">'+(n?e:i(e,!0))+"</code></pre>\n":"<pre><code>"+(n?e:i(e,!0))+"</code></pre>"}blockquote(e){return"<blockquote>\n"+e+"</blockquote>\n"}html(e){return e}heading(e,t,n,s){return this.options.headerIds?"<h"+t+' id="'+this.options.headerPrefix+s.slug(n)+'">'+e+"</h"+t+">\n":"<h"+t+">"+e+"</h"+t+">\n"}hr(){return this.options.xhtml?"<hr/>\n":"<hr>\n"}list(e,t,n){const s=t?"ol":"ul",r=t&&1!==n?' start="'+n+'"':"";return"<"+s+r+">\n"+e+"</"+s+">\n"}listitem(e){return"<li>"+e+"</li>\n"}checkbox(e){return"<input "+(e?'checked="" ':"")+'disabled="" type="checkbox"'+(this.options.xhtml?" /":"")+"> "}paragraph(e){return"<p>"+e+"</p>\n"}table(e,t){return t&&(t="<tbody>"+t+"</tbody>"),"<table>\n<thead>\n"+e+"</thead>\n"+t+"</table>\n"}tablerow(e){return"<tr>\n"+e+"</tr>\n"}tablecell(e,t){const n=t.header?"th":"td",s=t.align?"<"+n+' align="'+t.align+'">':"<"+n+">";return s+e+"</"+n+">\n"}strong(e){return"<strong>"+e+"</strong>"}em(e){return"<em>"+e+"</em>"}codespan(e){return"<code>"+e+"</code>"}br(){return this.options.xhtml?"<br/>":"<br>"}del(e){return"<del>"+e+"</del>"}link(e,t,n){if(e=r(this.options.sanitize,this.options.baseUrl,e),null===e)return n;let s='<a href="'+i(e)+'"';return t&&(s+=' title="'+t+'"'),s+=">"+n+"</a>",s}image(e,t,n){if(e=r(this.options.sanitize,this.options.baseUrl,e),null===e)return n;let s='<img src="'+e+'" alt="'+n+'"';return t&&(s+=' title="'+t+'"'),s+=this.options.xhtml?"/>":">",s}text(e){return e}}},"4fd2":function(e,t,n){const{defaults:s}=n("bdbb"),{block:r}=n("7b9e"),{rtrim:i,splitCells:a,escape:l}=n("ad42");e.exports=class e{constructor(e){this.tokens=[],this.tokens.links=Object.create(null),this.options=e||s,this.rules=r.normal,this.options.pedantic?this.rules=r.pedantic:this.options.gfm&&(this.rules=r.gfm)}static get rules(){return r}static lex(t,n){const s=new e(n);return s.lex(t)}lex(e){return e=e.replace(/\r\n|\r/g,"\n").replace(/\t/g,"    "),this.token(e,!0)}token(e,t){let n,s,o,c,h,p,u,g,d,f,m,b,k,x,w,_;e=e.replace(/^ +$/gm,"");while(e)if((o=this.rules.newline.exec(e))&&(e=e.substring(o[0].length),o[0].length>1&&this.tokens.push({type:"space"})),o=this.rules.code.exec(e)){const t=this.tokens[this.tokens.length-1];e=e.substring(o[0].length),t&&"paragraph"===t.type?t.text+="\n"+o[0].trimRight():(o=o[0].replace(/^ {4}/gm,""),this.tokens.push({type:"code",codeBlockStyle:"indented",text:this.options.pedantic?o:i(o,"\n")}))}else if(o=this.rules.fences.exec(e))e=e.substring(o[0].length),this.tokens.push({type:"code",lang:o[2]?o[2].trim():o[2],text:o[3]||""});else if(o=this.rules.heading.exec(e))e=e.substring(o[0].length),this.tokens.push({type:"heading",depth:o[1].length,text:o[2]});else if((o=this.rules.nptable.exec(e))&&(p={type:"table",header:a(o[1].replace(/^ *| *\| *$/g,"")),align:o[2].replace(/^ *|\| *$/g,"").split(/ *\| */),cells:o[3]?o[3].replace(/\n$/,"").split("\n"):[]},p.header.length===p.align.length)){for(e=e.substring(o[0].length),m=0;m<p.align.length;m++)/^ *-+: *$/.test(p.align[m])?p.align[m]="right":/^ *:-+: *$/.test(p.align[m])?p.align[m]="center":/^ *:-+ *$/.test(p.align[m])?p.align[m]="left":p.align[m]=null;for(m=0;m<p.cells.length;m++)p.cells[m]=a(p.cells[m],p.header.length);this.tokens.push(p)}else if(o=this.rules.hr.exec(e))e=e.substring(o[0].length),this.tokens.push({type:"hr"});else if(o=this.rules.blockquote.exec(e))e=e.substring(o[0].length),this.tokens.push({type:"blockquote_start"}),o=o[0].replace(/^ *> ?/gm,""),this.token(o,t),this.tokens.push({type:"blockquote_end"});else if(o=this.rules.list.exec(e)){for(e=e.substring(o[0].length),c=o[2],x=c.length>1,u={type:"list_start",ordered:x,start:x?+c:"",loose:!1},this.tokens.push(u),o=o[0].match(this.rules.item),g=[],n=!1,k=o.length,m=0;m<k;m++)p=o[m],f=p.length,p=p.replace(/^ *([*+-]|\d+\.) */,""),~p.indexOf("\n ")&&(f-=p.length,p=this.options.pedantic?p.replace(/^ {1,4}/gm,""):p.replace(new RegExp("^ {1,"+f+"}","gm"),"")),m!==k-1&&(h=r.bullet.exec(o[m+1])[0],(c.length>1?1===h.length:h.length>1||this.options.smartLists&&h!==c)&&(e=o.slice(m+1).join("\n")+e,m=k-1)),s=n||/\n\n(?!\s*$)/.test(p),m!==k-1&&(n="\n"===p.charAt(p.length-1),s||(s=n)),s&&(u.loose=!0),w=/^\[[ xX]\] /.test(p),_=void 0,w&&(_=" "!==p[1],p=p.replace(/^\[[ xX]\] +/,"")),d={type:"list_item_start",task:w,checked:_,loose:s},g.push(d),this.tokens.push(d),this.token(p,!1),this.tokens.push({type:"list_item_end"});if(u.loose)for(k=g.length,m=0;m<k;m++)g[m].loose=!0;this.tokens.push({type:"list_end"})}else if(o=this.rules.html.exec(e))e=e.substring(o[0].length),this.tokens.push({type:this.options.sanitize?"paragraph":"html",pre:!this.options.sanitizer&&("pre"===o[1]||"script"===o[1]||"style"===o[1]),text:this.options.sanitize?this.options.sanitizer?this.options.sanitizer(o[0]):l(o[0]):o[0]});else if(t&&(o=this.rules.def.exec(e)))e=e.substring(o[0].length),o[3]&&(o[3]=o[3].substring(1,o[3].length-1)),b=o[1].toLowerCase().replace(/\s+/g," "),this.tokens.links[b]||(this.tokens.links[b]={href:o[2],title:o[3]});else if((o=this.rules.table.exec(e))&&(p={type:"table",header:a(o[1].replace(/^ *| *\| *$/g,"")),align:o[2].replace(/^ *|\| *$/g,"").split(/ *\| */),cells:o[3]?o[3].replace(/\n$/,"").split("\n"):[]},p.header.length===p.align.length)){for(e=e.substring(o[0].length),m=0;m<p.align.length;m++)/^ *-+: *$/.test(p.align[m])?p.align[m]="right":/^ *:-+: *$/.test(p.align[m])?p.align[m]="center":/^ *:-+ *$/.test(p.align[m])?p.align[m]="left":p.align[m]=null;for(m=0;m<p.cells.length;m++)p.cells[m]=a(p.cells[m].replace(/^ *\| *| *\| *$/g,""),p.header.length);this.tokens.push(p)}else if(o=this.rules.lheading.exec(e))e=e.substring(o[0].length),this.tokens.push({type:"heading",depth:"="===o[2].charAt(0)?1:2,text:o[1]});else if(t&&(o=this.rules.paragraph.exec(e)))e=e.substring(o[0].length),this.tokens.push({type:"paragraph",text:"\n"===o[1].charAt(o[1].length-1)?o[1].slice(0,-1):o[1]});else if(o=this.rules.text.exec(e))e=e.substring(o[0].length),this.tokens.push({type:"text",text:o[0]});else if(e)throw new Error("Infinite loop on byte: "+e.charCodeAt(0));return this.tokens}}},"65f0":function(e,t,n){var s=n("861d"),r=n("e8b5"),i=n("b622"),a=i("species");e.exports=function(e,t){var n;return r(e)&&(n=e.constructor,"function"!=typeof n||n!==Array&&!r(n.prototype)?s(n)&&(n=n[a],null===n&&(n=void 0)):n=void 0),new(void 0===n?Array:n)(0===t?0:t)}},"7b9e":function(e,t,n){const{noopTest:s,edit:r,merge:i}=n("ad42"),a={newline:/^\n+/,code:/^( {4}[^\n]+\n*)+/,fences:/^ {0,3}(`{3,}|~{3,})([^`~\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?:\n+|$)|$)/,hr:/^ {0,3}((?:- *){3,}|(?:_ *){3,}|(?:\* *){3,})(?:\n+|$)/,heading:/^ {0,3}(#{1,6}) +([^\n]*?)(?: +#+)? *(?:\n+|$)/,blockquote:/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,list:/^( {0,3})(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,html:"^ {0,3}(?:<(script|pre|style)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?\\?>\\n*|<![A-Z][\\s\\S]*?>\\n*|<!\\[CDATA\\[[\\s\\S]*?\\]\\]>\\n*|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:\\n{2,}|$)|<(?!script|pre|style)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:\\n{2,}|$)|</(?!script|pre|style)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:\\n{2,}|$))",def:/^ {0,3}\[(label)\]: *\n? *<?([^\s>]+)>?(?:(?: +\n? *| *\n *)(title))? *(?:\n+|$)/,nptable:s,table:s,lheading:/^([^\n]+)\n {0,3}(=+|-+) *(?:\n+|$)/,_paragraph:/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html)[^\n]+)*)/,text:/^[^\n]+/,_label:/(?!\s*\])(?:\\[\[\]]|[^\[\]])+/,_title:/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/};a.def=r(a.def).replace("label",a._label).replace("title",a._title).getRegex(),a.bullet=/(?:[*+-]|\d{1,9}\.)/,a.item=/^( *)(bull) ?[^\n]*(?:\n(?!\1bull ?)[^\n]*)*/,a.item=r(a.item,"gm").replace(/bull/g,a.bullet).getRegex(),a.list=r(a.list).replace(/bull/g,a.bullet).replace("hr","\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def","\\n+(?="+a.def.source+")").getRegex(),a._tag="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",a._comment=/<!--(?!-?>)[\s\S]*?-->/,a.html=r(a.html,"i").replace("comment",a._comment).replace("tag",a._tag).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),a.paragraph=r(a._paragraph).replace("hr",a.hr).replace("heading"," {0,3}#{1,6} +").replace("|lheading","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}|~{3,})[^`\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|!--)").replace("tag",a._tag).getRegex(),a.blockquote=r(a.blockquote).replace("paragraph",a.paragraph).getRegex(),a.normal=i({},a),a.gfm=i({},a.normal,{nptable:/^ *([^|\n ].*\|.*)\n *([-:]+ *\|[-| :]*)(?:\n((?:.*[^>\n ].*(?:\n|$))*)\n*|$)/,table:/^ *\|(.+)\n *\|?( *[-:]+[-| :]*)(?:\n((?: *[^>\n ].*(?:\n|$))*)\n*|$)/}),a.pedantic=i({},a.normal,{html:r("^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:\"[^\"]*\"|'[^']*'|\\s[^'\"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))").replace("comment",a._comment).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^ *(#{1,6}) *([^\n]+?) *(?:#+ *)?(?:\n+|$)/,fences:s,paragraph:r(a.normal._paragraph).replace("hr",a.hr).replace("heading"," *#{1,6} *[^\n]").replace("lheading",a.lheading).replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").getRegex()});const l={escape:/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,autolink:/^<(scheme:[^\s\x00-\x1f<>]*|email)>/,url:s,tag:"^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",link:/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,reflink:/^!?\[(label)\]\[(?!\s*\])((?:\\[\[\]]?|[^\[\]\\])+)\]/,nolink:/^!?\[(?!\s*\])((?:\[[^\[\]]*\]|\\[\[\]]|[^\[\]])*)\](?:\[\])?/,strong:/^__([^\s_])__(?!_)|^\*\*([^\s*])\*\*(?!\*)|^__([^\s][\s\S]*?[^\s])__(?!_)|^\*\*([^\s][\s\S]*?[^\s])\*\*(?!\*)/,em:/^_([^\s_])_(?!_)|^\*([^\s*<\[])\*(?!\*)|^_([^\s<][\s\S]*?[^\s_])_(?!_|[^\spunctuation])|^_([^\s_<][\s\S]*?[^\s])_(?!_|[^\spunctuation])|^\*([^\s<"][\s\S]*?[^\s\*])\*(?!\*|[^\spunctuation])|^\*([^\s*"<\[][\s\S]*?[^\s])\*(?!\*)/,code:/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,br:/^( {2,}|\\)\n(?!\s*$)/,del:s,text:/^(`+|[^`])(?:[\s\S]*?(?:(?=[\\<!\[`*]|\b_|$)|[^ ](?= {2,}\n))|(?= {2,}\n))/,_punctuation:"!\"#$%&'()*+,\\-./:;<=>?@\\[^_{|}~"};l.em=r(l.em).replace(/punctuation/g,l._punctuation).getRegex(),l._escapes=/\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g,l._scheme=/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/,l._email=/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/,l.autolink=r(l.autolink).replace("scheme",l._scheme).replace("email",l._email).getRegex(),l._attribute=/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/,l.tag=r(l.tag).replace("comment",a._comment).replace("attribute",l._attribute).getRegex(),l._label=/(?:\[[^\[\]]*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,l._href=/<(?:\\[<>]?|[^\s<>\\])*>|[^\s\x00-\x1f]*/,l._title=/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/,l.link=r(l.link).replace("label",l._label).replace("href",l._href).replace("title",l._title).getRegex(),l.reflink=r(l.reflink).replace("label",l._label).getRegex(),l.normal=i({},l),l.pedantic=i({},l.normal,{strong:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,em:/^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/,link:r(/^!?\[(label)\]\((.*?)\)/).replace("label",l._label).getRegex(),reflink:r(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",l._label).getRegex()}),l.gfm=i({},l.normal,{escape:r(l.escape).replace("])","~|])").getRegex(),_extended_email:/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,url:/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,_backpedal:/(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,del:/^~+(?=\S)([\s\S]*?\S)~+/,text:/^(`+|[^`])(?:[\s\S]*?(?:(?=[\\<!\[`*~]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@))|(?= {2,}\n|[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@))/}),l.gfm.url=r(l.gfm.url,"i").replace("email",l.gfm._extended_email).getRegex(),l.breaks=i({},l.gfm,{br:r(l.br).replace("{2,}","*").getRegex(),text:r(l.gfm.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()}),e.exports={block:a,inline:l}},"7db0":function(e,t,n){"use strict";var s=n("23e7"),r=n("b727").find,i=n("44d2"),a="find",l=!0;a in[]&&Array(1)[a]((function(){l=!1})),s({target:"Array",proto:!0,forced:l},{find:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}}),i(a)},8326:function(e){e.exports=JSON.parse('[{"id":"monstergenerator","title":"Monster Card Generator","tags":["js","vue","frontend"],"shortDesc":"Generator monster cards using various APIs","image":"/page/monstergenerator/banner.png","content":"/page/monstergenerator/content.md"},{"id":"stadium","title":"Stadium Design","tags":["structural","coursework","university of toronto","grasshopper"],"shortDesc":"Design of a FIFA football stadium","image":"/page/stadium/banner.png","content":"/page/stadium/content.md"},{"id":"rodsteward-gh","title":"RodSteward-GH","tags":["structural","coursework","university of toronto","grasshopper","thesis","c#"],"shortDesc":"Generating structures using standard rods and 3D printed connections","image":"/page/rodsteward-gh/banner.png","content":"/page/rodsteward-gh/content.md"},{"id":"specklemeetup","title":"Speckle Community Meetup","tags":["speckle"],"shortDesc":"Presented at the Speckle Community Meetup 2019 in London, UK","image":"/page/specklemeetup/banner.png","content":"/page/specklemeetup/content.md"},{"id":"speckleexcel","title":"SpeckleExcel","tags":["speckle","excel","js"],"shortDesc":"Speckle client for Microsoft Excel","image":"/page/speckleexcel/banner.png","content":"/page/speckleexcel/content.md"},{"id":"speckleprocessor","title":"SpeckleProcessor","tags":["speckle","vue","js","netlify","lambda","frontend"],"shortDesc":"Perform calculations on Speckle data from the web","image":"/page/speckleprocessor/banner.png","content":"/page/speckleprocessor/content.md"},{"id":"ccm","title":"Canadian Canoe Museum","tags":["structural","arup","internship","etabs","revit"],"shortDesc":"Structural design as part of Arup","image":"/page/ccm/banner.png","content":"/page/ccm/content.md"},{"id":"gtaa","title":"Greater Toronto Pearson Airport","tags":["structural","arup","internship","etabs","revit"],"shortDesc":"Structural design of expansions and retrofits as part of Arup","image":"/page/gtaa/banner.png","content":"/page/gtaa/content.md"},{"id":"cstx","title":"Finite Element Modelling of Large Reinforced Concrete Structures Using the Novel Hybrid Panel Truss Element","tags":["structural","university of toronto","matlab","cstx"],"shortDesc":"Computers and Structures 2018","image":"/page/cstx/banner.png","content":"/page/cstx/content.md"},{"id":"magnetawan","title":"Magnetawan Bridge Design","tags":["structural","coursework","university of toronto","matlab"],"shortDesc":"Design of a prestressed concrete bridge for coursework","image":"/page/magnetawan/banner.png","content":"/page/magnetawan/content.md"},{"id":"vt4","title":"VecTor4 x GiD","tags":["structural","university of texas at austin","matlab"],"shortDesc":"Using GiD pre and post-processor with VecTor4","image":"/page/vt4/banner.png","content":"/page/vt4/content.md"},{"id":"hypt","title":"Verification of a Novel 2D Finite Element for Reinforced and Prestressed Concrete","tags":["structural","university of toronto","aci"],"shortDesc":"American Concrete Institute Conference Spring 2017","image":"/page/hypt/banner.png","content":"/page/hypt/content.md"}]')},8725:function(e,t,n){const s=n("49b6"),{defaults:r}=n("bdbb"),{inline:i}=n("7b9e"),{findClosingBracket:a,escape:l}=n("ad42");e.exports=class e{constructor(e,t){if(this.options=t||r,this.links=e,this.rules=i.normal,this.options.renderer=this.options.renderer||new s,this.renderer=this.options.renderer,this.renderer.options=this.options,!this.links)throw new Error("Tokens array requires a `links` property.");this.options.pedantic?this.rules=i.pedantic:this.options.gfm&&(this.options.breaks?this.rules=i.breaks:this.rules=i.gfm)}static get rules(){return i}static output(t,n,s){const r=new e(n,s);return r.output(t)}output(t){let n,s,r,i,o,c,h="";while(t)if(o=this.rules.escape.exec(t))t=t.substring(o[0].length),h+=l(o[1]);else if(o=this.rules.tag.exec(t))!this.inLink&&/^<a /i.test(o[0])?this.inLink=!0:this.inLink&&/^<\/a>/i.test(o[0])&&(this.inLink=!1),!this.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(o[0])?this.inRawBlock=!0:this.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(o[0])&&(this.inRawBlock=!1),t=t.substring(o[0].length),h+=this.options.sanitize?this.options.sanitizer?this.options.sanitizer(o[0]):l(o[0]):o[0];else if(o=this.rules.link.exec(t)){const s=a(o[2],"()");if(s>-1){const e=0===o[0].indexOf("!")?5:4,t=e+o[1].length+s;o[2]=o[2].substring(0,s),o[0]=o[0].substring(0,t).trim(),o[3]=""}t=t.substring(o[0].length),this.inLink=!0,r=o[2],this.options.pedantic?(n=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(r),n?(r=n[1],i=n[3]):i=""):i=o[3]?o[3].slice(1,-1):"",r=r.trim().replace(/^<([\s\S]*)>$/,"$1"),h+=this.outputLink(o,{href:e.escapes(r),title:e.escapes(i)}),this.inLink=!1}else if((o=this.rules.reflink.exec(t))||(o=this.rules.nolink.exec(t))){if(t=t.substring(o[0].length),n=(o[2]||o[1]).replace(/\s+/g," "),n=this.links[n.toLowerCase()],!n||!n.href){h+=o[0].charAt(0),t=o[0].substring(1)+t;continue}this.inLink=!0,h+=this.outputLink(o,n),this.inLink=!1}else if(o=this.rules.strong.exec(t))t=t.substring(o[0].length),h+=this.renderer.strong(this.output(o[4]||o[3]||o[2]||o[1]));else if(o=this.rules.em.exec(t))t=t.substring(o[0].length),h+=this.renderer.em(this.output(o[6]||o[5]||o[4]||o[3]||o[2]||o[1]));else if(o=this.rules.code.exec(t))t=t.substring(o[0].length),h+=this.renderer.codespan(l(o[2].trim(),!0));else if(o=this.rules.br.exec(t))t=t.substring(o[0].length),h+=this.renderer.br();else if(o=this.rules.del.exec(t))t=t.substring(o[0].length),h+=this.renderer.del(this.output(o[1]));else if(o=this.rules.autolink.exec(t))t=t.substring(o[0].length),"@"===o[2]?(s=l(this.mangle(o[1])),r="mailto:"+s):(s=l(o[1]),r=s),h+=this.renderer.link(r,null,s);else if(this.inLink||!(o=this.rules.url.exec(t))){if(o=this.rules.text.exec(t))t=t.substring(o[0].length),this.inRawBlock?h+=this.renderer.text(this.options.sanitize?this.options.sanitizer?this.options.sanitizer(o[0]):l(o[0]):o[0]):h+=this.renderer.text(l(this.smartypants(o[0])));else if(t)throw new Error("Infinite loop on byte: "+t.charCodeAt(0))}else{if("@"===o[2])s=l(o[0]),r="mailto:"+s;else{do{c=o[0],o[0]=this.rules._backpedal.exec(o[0])[0]}while(c!==o[0]);s=l(o[0]),r="www."===o[1]?"http://"+s:s}t=t.substring(o[0].length),h+=this.renderer.link(r,null,s)}return h}static escapes(t){return t?t.replace(e.rules._escapes,"$1"):t}outputLink(e,t){const n=t.href,s=t.title?l(t.title):null;return"!"!==e[0].charAt(0)?this.renderer.link(n,s,this.output(e[1])):this.renderer.image(n,s,l(e[1]))}smartypants(e){return this.options.smartypants?e.replace(/---/g,"—").replace(/--/g,"–").replace(/(^|[-\u2014/(\[{"\s])'/g,"$1‘").replace(/'/g,"’").replace(/(^|[-\u2014/(\[{\u2018\s])"/g,"$1“").replace(/"/g,"”").replace(/\.{3}/g,"…"):e}mangle(e){if(!this.options.mangle)return e;const t=e.length;let n,s="",r=0;for(;r<t;r++)n=e.charCodeAt(r),Math.random()>.5&&(n="x"+n.toString(16)),s+="&#"+n+";";return s}}},a6911:function(e,t,n){"use strict";n.r(t);var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.page?n("div",[n("b-container",[n("b-row",{staticClass:"mt-5",attrs:{"no-gutters":""}},[n("b-col",[n("div",{attrs:{id:"pageHeader"}},[n("h1",[e._v(e._s(e.page.title))]),n("br"),n("br"),n("a",{staticClass:"pageNavIcon",on:{click:e.goToPrev}},[n("font-awesome-icon",{attrs:{icon:"arrow-left"}})],1),n("a",{staticClass:"pageNavIcon",on:{click:e.goToNext}},[n("font-awesome-icon",{attrs:{icon:"arrow-right"}})],1)])])],1),n("b-row",{attrs:{"no-gutters":""}},[n("b-col",[n("div",{attrs:{id:"markdown"},domProps:{innerHTML:e._s(e.markdownContent)}})])],1),n("b-row",{attrs:{"no-gutters":""}},[n("b-col",[n("div",{staticStyle:{"text-align":"center"}},[n("a",{staticClass:"pageNavIcon",attrs:{href:"#"},on:{click:e.goToPrev}},[n("font-awesome-icon",{attrs:{icon:"arrow-left"}})],1),n("a",{staticClass:"pageNavIcon",attrs:{href:"#"},on:{click:e.goToNext}},[n("font-awesome-icon",{attrs:{icon:"arrow-right"}})],1),n("br"),n("br")])])],1)],1)],1):e._e()},r=[],i=(n("7db0"),n("c740"),n("8326")),a=n("e0c1"),l=n.n(a),o={name:"Page",data:function(){return{pages:i,selectedId:"",markdownContent:""}},computed:{page:function(){var e=this;return this.pages.find((function(t){return t.id===e.selectedId}))},pageIndex:function(){var e=this;return this.pages.findIndex((function(t){return t.id===e.selectedId}))}},mounted:function(){var e=this;if(this.$route.params.pageId){this.selectedId=this.$route.params.pageId,this.page||this.$router.push("/");var t=new XMLHttpRequest;t.open("GET",this.page.content),t.send(),t.onreadystatechange=function(){e.markdownContent=l()(t.responseText)}}else this.$router.push("/")},methods:{goToPrev:function(){this.pageIndex>=1?this.$router.push({name:"page",params:{pageId:this.pages[this.pageIndex-1].id}}):this.$router.push("/")},goToNext:function(){this.pageIndex<this.pages.length-1?this.$router.push({name:"page",params:{pageId:this.pages[this.pageIndex+1].id}}):this.$router.push("/")}}},c=o,h=n("2877"),p=Object(h["a"])(c,s,r,!1,null,null,null);t["default"]=p.exports},ad42:function(e,t){const n=/[&<>"']/,s=/[&<>"']/g,r=/[<>"']|&(?!#?\w+;)/,i=/[<>"']|&(?!#?\w+;)/g,a={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},l=e=>a[e];function o(e,t){if(t){if(n.test(e))return e.replace(s,l)}else if(r.test(e))return e.replace(i,l);return e}const c=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi;function h(e){return e.replace(c,(e,t)=>{return t=t.toLowerCase(),"colon"===t?":":"#"===t.charAt(0)?"x"===t.charAt(1)?String.fromCharCode(parseInt(t.substring(2),16)):String.fromCharCode(+t.substring(1)):""})}const p=/(^|[^\[])\^/g;function u(e,t){e=e.source||e,t=t||"";const n={replace:(t,s)=>{return s=s.source||s,s=s.replace(p,"$1"),e=e.replace(t,s),n},getRegex:()=>{return new RegExp(e,t)}};return n}const g=/[^\w:]/g,d=/^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;function f(e,t,n){if(e){let e;try{e=decodeURIComponent(h(n)).replace(g,"").toLowerCase()}catch(s){return null}if(0===e.indexOf("javascript:")||0===e.indexOf("vbscript:")||0===e.indexOf("data:"))return null}t&&!d.test(n)&&(n=w(t,n));try{n=encodeURI(n).replace(/%25/g,"%")}catch(s){return null}return n}const m={},b=/^[^:]+:\/*[^/]*$/,k=/^([^:]+:)[\s\S]*$/,x=/^([^:]+:\/*[^/]*)[\s\S]*$/;function w(e,t){m[" "+e]||(b.test(e)?m[" "+e]=e+"/":m[" "+e]=S(e,"/",!0)),e=m[" "+e];const n=-1===e.indexOf(":");return"//"===t.substring(0,2)?n?t:e.replace(k,"$1")+t:"/"===t.charAt(0)?n?t:e.replace(x,"$1")+t:e+t}const _={exec:function(){}};function y(e){let t,n,s=1;for(;s<arguments.length;s++)for(n in t=arguments[s],t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}function $(e,t){const n=e.replace(/\|/g,(e,t,n)=>{let s=!1,r=t;while(--r>=0&&"\\"===n[r])s=!s;return s?"|":" |"}),s=n.split(/ \|/);let r=0;if(s.length>t)s.splice(t);else while(s.length<t)s.push("");for(;r<s.length;r++)s[r]=s[r].trim().replace(/\\\|/g,"|");return s}function S(e,t,n){const s=e.length;if(0===s)return"";let r=0;while(r<s){const i=e.charAt(s-r-1);if(i!==t||n){if(i===t||!n)break;r++}else r++}return e.substr(0,s-r)}function v(e,t){if(-1===e.indexOf(t[1]))return-1;const n=e.length;let s=0,r=0;for(;r<n;r++)if("\\"===e[r])r++;else if(e[r]===t[0])s++;else if(e[r]===t[1]&&(s--,s<0))return r;return-1}function A(e){e&&e.sanitize&&!e.silent&&console.warn("marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options")}e.exports={escape:o,unescape:h,edit:u,cleanUrl:f,resolveUrl:w,noopTest:_,merge:y,splitCells:$,rtrim:S,findClosingBracket:v,checkSanitizeDeprecation:A}},b727:function(e,t,n){var s=n("f8c2"),r=n("44ad"),i=n("7b0b"),a=n("50c4"),l=n("65f0"),o=[].push,c=function(e){var t=1==e,n=2==e,c=3==e,h=4==e,p=6==e,u=5==e||p;return function(g,d,f,m){for(var b,k,x=i(g),w=r(x),_=s(d,f,3),y=a(w.length),$=0,S=m||l,v=t?S(g,y):n?S(g,0):void 0;y>$;$++)if((u||$ in w)&&(b=w[$],k=_(b,$,x),e))if(t)v[$]=k;else if(k)switch(e){case 3:return!0;case 5:return b;case 6:return $;case 2:o.call(v,b)}else if(h)return!1;return p?-1:c||h?h:v}};e.exports={forEach:c(0),map:c(1),filter:c(2),some:c(3),every:c(4),find:c(5),findIndex:c(6)}},bdbb:function(e,t){function n(){return{baseUrl:null,breaks:!1,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartLists:!1,smartypants:!1,xhtml:!1}}function s(t){e.exports.defaults=t}e.exports={defaults:n(),getDefaults:n,changeDefaults:s}},c740:function(e,t,n){"use strict";var s=n("23e7"),r=n("b727").findIndex,i=n("44d2"),a="findIndex",l=!0;a in[]&&Array(1)[a]((function(){l=!1})),s({target:"Array",proto:!0,forced:l},{findIndex:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}}),i(a)},e0c1:function(e,t,n){const s=n("4fd2"),r=n("eba7"),i=n("49b6"),a=n("fbf7"),l=n("8725"),o=n("27b0"),{merge:c,checkSanitizeDeprecation:h,escape:p}=n("ad42"),{getDefaults:u,changeDefaults:g,defaults:d}=n("bdbb");function f(e,t,n){if("undefined"===typeof e||null===e)throw new Error("marked(): input parameter is undefined or null");if("string"!==typeof e)throw new Error("marked(): input parameter is of type "+Object.prototype.toString.call(e)+", string expected");if(n||"function"===typeof t){n||(n=t,t=null),t=c({},f.defaults,t||{}),h(t);const a=t.highlight;let l,o,p=0;try{l=s.lex(e,t)}catch(i){return n(i)}o=l.length;const u=function(e){if(e)return t.highlight=a,n(e);let s;try{s=r.parse(l,t)}catch(i){e=i}return t.highlight=a,e?n(e):n(null,s)};if(!a||a.length<3)return u();if(delete t.highlight,!o)return u();for(;p<l.length;p++)(function(e){"code"!==e.type?--o||u():a(e.text,e.lang,(function(t,n){return t?u(t):null==n||n===e.text?--o||u():(e.text=n,e.escaped=!0,void(--o||u()))}))})(l[p])}else try{return t=c({},f.defaults,t||{}),h(t),r.parse(s.lex(e,t),t)}catch(i){if(i.message+="\nPlease report this to https://github.com/markedjs/marked.",(t||f.defaults).silent)return"<p>An error occurred:</p><pre>"+p(i.message+"",!0)+"</pre>";throw i}}f.options=f.setOptions=function(e){return c(f.defaults,e),g(f.defaults),f},f.getDefaults=u,f.defaults=d,f.Parser=r,f.parser=r.parse,f.Renderer=i,f.TextRenderer=a,f.Lexer=s,f.lexer=s.lex,f.InlineLexer=l,f.inlineLexer=l.output,f.Slugger=o,f.parse=f,e.exports=f},e8b5:function(e,t,n){var s=n("c6b6");e.exports=Array.isArray||function(e){return"Array"==s(e)}},eba7:function(e,t,n){const s=n("49b6"),r=n("27b0"),i=n("8725"),a=n("fbf7"),{defaults:l}=n("bdbb"),{merge:o,unescape:c}=n("ad42");e.exports=class e{constructor(e){this.tokens=[],this.token=null,this.options=e||l,this.options.renderer=this.options.renderer||new s,this.renderer=this.options.renderer,this.renderer.options=this.options,this.slugger=new r}static parse(t,n){const s=new e(n);return s.parse(t)}parse(e){this.inline=new i(e.links,this.options),this.inlineText=new i(e.links,o({},this.options,{renderer:new a})),this.tokens=e.reverse();let t="";while(this.next())t+=this.tok();return t}next(){return this.token=this.tokens.pop(),this.token}peek(){return this.tokens[this.tokens.length-1]||0}parseText(){let e=this.token.text;while("text"===this.peek().type)e+="\n"+this.next().text;return this.inline.output(e)}tok(){let e="";switch(this.token.type){case"space":return"";case"hr":return this.renderer.hr();case"heading":return this.renderer.heading(this.inline.output(this.token.text),this.token.depth,c(this.inlineText.output(this.token.text)),this.slugger);case"code":return this.renderer.code(this.token.text,this.token.lang,this.token.escaped);case"table":{let t,n,s,r,i="";for(s="",t=0;t<this.token.header.length;t++)s+=this.renderer.tablecell(this.inline.output(this.token.header[t]),{header:!0,align:this.token.align[t]});for(i+=this.renderer.tablerow(s),t=0;t<this.token.cells.length;t++){for(n=this.token.cells[t],s="",r=0;r<n.length;r++)s+=this.renderer.tablecell(this.inline.output(n[r]),{header:!1,align:this.token.align[r]});e+=this.renderer.tablerow(s)}return this.renderer.table(i,e)}case"blockquote_start":e="";while("blockquote_end"!==this.next().type)e+=this.tok();return this.renderer.blockquote(e);case"list_start":{e="";const t=this.token.ordered,n=this.token.start;while("list_end"!==this.next().type)e+=this.tok();return this.renderer.list(e,t,n)}case"list_item_start":{e="";const t=this.token.loose,n=this.token.checked,s=this.token.task;if(this.token.task)if(t)if("text"===this.peek().type){const e=this.peek();e.text=this.renderer.checkbox(n)+" "+e.text}else this.tokens.push({type:"text",text:this.renderer.checkbox(n)});else e+=this.renderer.checkbox(n);while("list_item_end"!==this.next().type)e+=t||"text"!==this.token.type?this.tok():this.parseText();return this.renderer.listitem(e,s,n)}case"html":return this.renderer.html(this.token.text);case"paragraph":return this.renderer.paragraph(this.inline.output(this.token.text));case"text":return this.renderer.paragraph(this.parseText());default:{const e='Token with "'+this.token.type+'" type was not found.';if(!this.options.silent)throw new Error(e);console.log(e)}}}}},fbf7:function(e,t){e.exports=class{strong(e){return e}em(e){return e}codespan(e){return e}del(e){return e}text(e){return e}link(e,t,n){return""+n}image(e,t,n){return""+n}br(){return""}}}}]);
//# sourceMappingURL=chunk-8376909c.09439af6.js.map