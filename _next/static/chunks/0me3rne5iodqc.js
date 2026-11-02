(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,31713,e=>{"use strict";var t=e.i(26691),a=e.i(52106);let i={termite:{label:"Termite",summary:"Known for multi-stage intrusion activity that can progress quickly from initial access to privilege escalation and data theft.",behaviors:["Tuoni post-exploitation tooling and reverse-proxy infrastructure","ClickFix-style malvertisement infections","ExMatter or Rclone-style data exfiltration","Kerberoasting, offline hash cracking, lateral movement, and privilege escalation"],hunt:"Review for Tuoni or Cobalt Strike-like activity, bulk outbound transfers, Kerberos service-ticket anomalies, unexpected privileged-account changes, and unauthorized remote-access tools."},akira:{label:"Akira",summary:"Historically gains access through remote services and compromised credentials, then establishes persistence and stages data for extortion.",behaviors:["Compromised VPN credentials, phishing, RDP, and exploitation of internet-facing systems","AnyDesk, LogMeIn, Ngrok, and other remote-access or tunneling tools","Credential theft, privileged-account creation, lateral movement, and defense evasion","Mimikatz, Rclone, WinSCP, FileZilla, and network-discovery utilities"],hunt:"Review VPN, RDP, identity, endpoint, and firewall telemetry; investigate unexpected remote-access tools, credential misuse, new privileged accounts, and suspicious outbound data transfers."},unknown:{label:"Unknown / other",summary:"No actor-specific behavior will be inserted. The generated message will use general pre-ransomware hunting guidance.",behaviors:["Unauthorized remote access or persistence","Credential misuse and unexpected account changes","Lateral movement and suspicious administrative activity","Data staging, bulk outbound transfer, or encryption precursors"],hunt:"Review identity, endpoint, VPN, firewall, and network telemetry for unauthorized access, persistence, lateral movement, data staging, and unusual outbound transfers."}},n=[{id:"intrusion",label:"Intrusion in progress",description:"Suspected active compromise with technical details or indicators."},{id:"actor",label:"Threat actor notification",description:"High-level notification when reporting is sensitive or limited."},{id:"access",label:"Attacker-controlled access",description:"A host, account, or endpoint observed in adversary infrastructure."},{id:"recovery",label:"Data recovery assistance",description:"Notification that a trusted third party may assist with file recovery."}],s=`The entity is also advised to hunt for any other backdoors potentially placed by the threat actors based on this potential access.

This includes unauthorized remote monitoring and management tools used for persistence, including AnyDesk, Atera, GoTo Resolve, OptiTune, ScreenConnect, Splashtop, TeamViewer, or Zoho Assist. The organization should also review for unexpected RDP sessions, Brute Ratel C4 or Cobalt Strike implants, backdoor accounts, and changes to existing accounts. A domain-wide credential reset may be appropriate as part of incident response activities.

Unauthorized RMM Detection:

(Note: CISA does not endorse any commercial product or service. Any reference to specific commercial products, processes, or services does not constitute endorsement, recommendation, or favoring by CISA.)

Please see: https[:]//lolrmm[.]io/ for further information on detecting common RMMs.

Overall, the entity is advised to activate its cyber incident response plan to contain this apparent activity.`,r=`Note:
CISA does not endorse any commercial product, service, or vendor. Any reference to a third party is provided solely for awareness and does not constitute an endorsement or recommendation by CISA. The data recovery assistance referenced in this notification is offered independently by the third party and not by CISA. CISA does not guarantee the effectiveness of any data recovery services, makes no representations regarding the third party’s methods or outcomes, and assumes no liability for any interaction between the affected entity and the third party. Engagement with the third party is entirely voluntary and at the discretion of the affected entity.`,o="__PRNI_REPORTING_DETAILS__";function l(e){return e.replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"})[e]||e)}function c(e){return l(e).replace(/\n/g,"<br>")}function d(e){if("u"<typeof document)return"";let t=document.createElement("div");t.innerHTML=e;let a=new Set(["P","BR","DIV","SPAN","STRONG","B","EM","I","U","UL","OL","LI","TABLE","THEAD","TBODY","TFOOT","TR","TH","TD","IMG","H1","H2","H3","H4"]),i=new Set(["SCRIPT","STYLE","IFRAME","OBJECT","EMBED","FORM","INPUT","BUTTON","LINK","META"]);for(let e of Array.from(t.querySelectorAll("*"))){if(i.has(e.tagName)){e.remove();continue}if(!a.has(e.tagName)){e.replaceWith(...Array.from(e.childNodes));continue}for(let t of Array.from(e.attributes)){let a=t.name.toLowerCase(),i=["colspan","rowspan"].includes(a)&&["TD","TH"].includes(e.tagName),n=["src","alt","width","height"].includes(a)&&"IMG"===e.tagName;i||n||e.removeAttribute(t.name)}if("IMG"===e.tagName){let t=e.getAttribute("src")||"";/^data:image\/(png|jpe?g|gif|webp);base64,/i.test(t)||/^https:\/\//i.test(t)||e.remove()}}return t.innerHTML}function h(e){document.execCommand("insertHTML",!1,e)}e.s(["default",0,function(){let[e,u]=(0,a.useState)(""),[p,m]=(0,a.useState)(""),[f,g]=(0,a.useState)(""),[y,b]=(0,a.useState)(""),[v,x]=(0,a.useState)(""),[j,w]=(0,a.useState)(""),[T,N]=(0,a.useState)(""),[A,C]=(0,a.useState)(""),[R,I]=(0,a.useState)(!1),[S,$]=(0,a.useState)(""),k=(0,a.useRef)(null),E=(0,a.useMemo)(()=>e&&p?function(e){let t=i[e.variant],a=e.region.trim()?`Region ${e.region.trim()}${e.state.trim()?`/${e.state.trim().toUpperCase()}`:""} Cyber -`:e.state.trim()?`${e.state.trim().toUpperCase()} Cyber -`:"Regional Cyber Team -",n=e.state.trim().toUpperCase()||"Region",l=e.sector.trim()||"Critical Infrastructure",d=`TLP:AMBER Pre-Ransomware Notification in Your Region - ${n} - ${l}`,h=`TLP:AMBER

${a}

This information was provided to CISA by a trusted third party. This information should only be provided to the potentially affected entity using out-of-band communication methods for the recipient such as phone or personal email accounts for OPSEC purposes and to avoid tipping off the threat actors.`,u=e.detailsText.trim(),p=e.entity.trim(),m=`Known ${t.label} Activity

${t.summary}

${t.behaviors.map(e=>`• ${e}`).join("\n")}

Threat-Hunting Focus

${t.hunt}`,[f,g=""]=("intrusion"===e.template?`${h}

//

Per conversation, a trusted third party shared a tip with CISA that a suspected ransomware gang appears to have an intrusion in progress at the following entity. No assumption should be made that this is the only foothold the adversary may have on the network.

Potentially Affected Entity:

${p}

Details:

According to the trusted third party, threat actors associated with ${"Unknown / other"===t.label?"a suspected ransomware operation":`the ${t.label} ransomware operation`} appear to be active in the subject entity’s environment.

${o}

${m}

//

${s}`:"actor"===e.template?`${h}

//

The Cybersecurity and Infrastructure Security Agency (CISA) is providing this notification based on information received from a trusted source indicating that your organization has been identified in connection with cyber activity associated with ${"Unknown / other"===t.label?"a suspected ransomware threat actor":`the ${t.label} ransomware threat actor`}.

Current reporting indicates that the activity may be ongoing and warrants immediate review. CISA is sharing this information to enable your organization to identify, investigate, and mitigate potential malicious activity before ransomware deployment, data exfiltration, or other operational impacts occur.

//

Potentially Affected Entity

${p}

Reported Activity

${o}

${m}

Recommended Actions

• Review authentication, VPN, firewall, network, and endpoint telemetry for suspicious activity.
• Investigate unauthorized accounts, remote-access activity, credential misuse, and signs of lateral movement.
• Isolate affected systems and activate incident response procedures if suspicious activity is identified.
• Enforce multifactor authentication for remote access and privileged accounts.
• Confirm the integrity and availability of offline or otherwise isolated backups.

//

Requested Response

CISA would appreciate notification regarding the results of your review, including whether any suspicious or malicious activity was identified.`:"access"===e.template?`${h}

//

Per conversation, a trusted third party shared a tip with CISA indicating that a workstation or account associated with the following entity was observed in attacker-controlled infrastructure. The available information does not establish whether the activity has since been remediated or whether additional unauthorized access or persistence remains. No assumption should be made that this is the only foothold the adversary may have on the network.

Potentially Affected Entity:

${p}

Details:

${o}

Assessment:

The reporting may indicate unauthorized access to a system or account associated with the organization; however, it does not by itself establish the scope of access, successful credential use, data exfiltration, lateral movement, or ransomware deployment.

${m}

//

${s}`:`${h}

//

A trusted third party shared a tip with CISA indicating that a suspected ransomware gang may have compromised systems belonging to the potentially affected entity. The same third party may also be able to assist the entity in recovering files.

Potentially Affected Entity:

${p}

Details:

${o}

${m}

//

If the entity elects to pursue data recovery assistance, CISA can facilitate an introduction to the trusted third party using secure, out-of-band communication channels.

Please advise whether the entity wishes to proceed, and CISA will enable the connection.

${r}`).split(o);return{subject:d,body:`${f}${u}${g}`,html:`<div class="email-html">${c(f)}<div class="rich-details">${e.detailsHtml}</div>${c(g)}</div>`}}({template:e,variant:p,entity:f,region:y,state:v,sector:j,detailsText:T,detailsHtml:A}):null,[e,p,f,y,v,j,T,A]),P=!!(T.trim()||/<img\b/i.test(A)),O=!!(e&&p&&f.trim()&&P),M=n.find(t=>t.id===e);async function L(e,t){await navigator.clipboard.writeText(e),$(`${t} copied`),window.setTimeout(()=>$(""),1800)}function D(){k.current&&(C(d(k.current.innerHTML)),N(k.current.innerText.replace(/\u00a0/g," ")),I(!1))}async function U(e){e.preventDefault();let t=e.clipboardData,a=t.getData("text/html"),i=Array.from(t.items).filter(e=>"file"===e.kind&&e.type.startsWith("image/")).map(e=>e.getAsFile()).filter(e=>!!e);if(a?h(d(a)):0===i.length&&h(l(t.getData("text/plain")).replace(/\n/g,"<br>")),!a&&i.length)for(let e of i)try{let t=await function(e){return new Promise((t,a)=>{let i=new FileReader;i.onload=()=>t(String(i.result)),i.onerror=()=>a(i.error),i.readAsDataURL(e)})}(e);k.current?.focus(),h(`<img src="${t}" alt="Pasted reporting image">`)}catch{$("One image could not be pasted")}D()}async function B(e="Formatted email",t=!0){if(!E)return;let a=t?`Subject: ${E.subject}

${E.body}`:E.body,i=t?`<p><strong>Subject:</strong> ${l(E.subject)}</p>`:"",n=`${i}${E.html.replace('<div class="email-html">','<div style="font-family:Arial,Helvetica,sans-serif;font-size:14px;line-height:1.55;color:#1f2d26">').replace('<div class="rich-details">','<div style="margin:0">').replace(/<table>/gi,'<table style="width:100%;border-collapse:collapse;margin:12px 0">').replace(/<th>/gi,'<th style="border:1px solid #9daaa2;padding:7px 9px;text-align:left;background:#edf3ef">').replace(/<td>/gi,'<td style="border:1px solid #9daaa2;padding:7px 9px;text-align:left;vertical-align:top">').replace(/<img /gi,'<img style="display:block;max-width:100%;height:auto;margin:12px 0" ')}`;try{"u">typeof ClipboardItem&&navigator.clipboard.write?await navigator.clipboard.write([new ClipboardItem({"text/plain":new Blob([a],{type:"text/plain"}),"text/html":new Blob([n],{type:"text/html"})})]):await navigator.clipboard.writeText(a),$(`${e} copied`)}catch{await navigator.clipboard.writeText(a),$("Email copied as plain text")}window.setTimeout(()=>$(""),3e3)}async function H(){if(!E)return;await B("Formatted body",!1);let e=`subject=${encodeURIComponent(E.subject)}&body=${encodeURIComponent(E.body)}`,t=e.length<7500?`mailto:?${e}`:`mailto:?subject=${encodeURIComponent(E.subject)}`;window.location.href=t}return(0,t.jsxs)("main",{children:[(0,t.jsxs)("header",{className:"topbar",children:[(0,t.jsxs)("div",{className:"brand",children:[(0,t.jsx)("span",{className:"brand-mark",children:"P"}),(0,t.jsxs)("div",{children:[(0,t.jsx)("strong",{children:"PRNI"}),(0,t.jsx)("span",{children:"Email Builder"})]})]}),(0,t.jsxs)("div",{className:"tlp",children:[(0,t.jsx)("span",{}),"TLP:AMBER"]})]}),(0,t.jsxs)("section",{className:"intro",children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("p",{className:"eyebrow",children:"PRE-RANSOMWARE NOTIFICATION"}),(0,t.jsx)("h1",{children:"Turn threat reporting into a ready-to-review email."}),(0,t.jsx)("p",{className:"lede",children:"Choose a notification format and ransomware variant, add the reporting you received, then generate a consistent PRNI draft."})]}),(0,t.jsxs)("div",{className:"privacy-note",children:[(0,t.jsx)("span",{children:"✓"}),(0,t.jsxs)("p",{children:[(0,t.jsx)("strong",{children:"Drafts stay in your browser."}),(0,t.jsx)("br",{}),"No entered information is sent or saved by this page."]})]})]}),(0,t.jsxs)("section",{className:"workspace",children:[(0,t.jsxs)("form",{className:"builder",onSubmit:e=>{e.preventDefault(),O&&I(!0)},children:[(0,t.jsxs)("div",{className:"section-heading",children:[(0,t.jsx)("span",{children:"01"}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h2",{children:"Choose the format"}),(0,t.jsx)("p",{children:"Start with the notification type that best fits the reporting."})]})]}),(0,t.jsxs)("label",{children:["EMAIL TEMPLATE",(0,t.jsxs)("select",{value:e,onChange:e=>{u(e.target.value),I(!1)},children:[(0,t.jsx)("option",{value:"",children:"Select a template…"}),n.map(e=>(0,t.jsx)("option",{value:e.id,children:e.label},e.id))]})]}),M&&(0,t.jsx)("p",{className:"field-help",children:M.description}),(0,t.jsxs)("label",{children:["RANSOMWARE VARIANT",(0,t.jsxs)("select",{value:p,onChange:e=>{m(e.target.value),I(!1)},children:[(0,t.jsx)("option",{value:"",children:"Select a variant…"}),Object.entries(i).map(([e,a])=>(0,t.jsx)("option",{value:e,children:a.label},e))]})]}),p&&(0,t.jsxs)("aside",{className:"actor-card",children:[(0,t.jsxs)("div",{className:"actor-title",children:[(0,t.jsx)("span",{className:"pulse"}),(0,t.jsxs)("strong",{children:[i[p].label," activity profile"]}),(0,t.jsx)("span",{className:"auto-tag",children:"AUTO-INSERTED"})]}),(0,t.jsx)("p",{children:i[p].summary}),(0,t.jsx)("ul",{children:i[p].behaviors.slice(0,3).map(e=>(0,t.jsx)("li",{children:e},e))})]}),(0,t.jsx)("div",{className:"divider"}),(0,t.jsxs)("div",{className:"section-heading",children:[(0,t.jsx)("span",{children:"02"}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h2",{children:"Add the reporting"}),(0,t.jsx)("p",{children:"These fields are placed into the subject, routing line, and notification body."})]})]}),(0,t.jsxs)("label",{children:["POTENTIALLY AFFECTED ENTITY",(0,t.jsx)("input",{value:f,onChange:e=>{g(e.target.value),I(!1)},placeholder:"Organization name"})]}),(0,t.jsxs)("div",{className:"field-row three",children:[(0,t.jsxs)("label",{children:["REGION",(0,t.jsx)("input",{value:y,onChange:e=>{b(e.target.value),I(!1)},placeholder:"e.g., 9"})]}),(0,t.jsxs)("label",{children:["STATE",(0,t.jsx)("input",{value:v,maxLength:2,onChange:e=>{x(e.target.value),I(!1)},placeholder:"CA"})]}),(0,t.jsxs)("label",{children:["SECTOR",(0,t.jsx)("input",{value:j,onChange:e=>{w(e.target.value),I(!1)},placeholder:"Information Technology"})]})]}),(0,t.jsxs)("label",{children:["REPORTING DETAILS",(0,t.jsx)("div",{ref:k,className:"rich-editor",contentEditable:!0,role:"textbox","aria-multiline":"true","data-placeholder":"Paste or type incident reporting here. Tables, images, lists, and formatted text are supported.",onInput:D,onPaste:U,suppressContentEditableWarning:!0}),(0,t.jsx)("span",{className:"editor-help",children:"Paste text, tables, or screenshots. Pasted content stays in this browser."}),(0,t.jsxs)("span",{className:"counter",children:[T.length.toLocaleString()," characters"]})]}),(0,t.jsxs)("button",{className:"generate",type:"submit",disabled:!O,children:["Generate email ",(0,t.jsx)("span",{children:"→"})]}),(0,t.jsx)("p",{className:"required-note",children:"Template, variant, entity, and reporting details are required."})]}),(0,t.jsxs)("section",{className:"preview","aria-live":"polite",children:[(0,t.jsxs)("div",{className:"preview-head",children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("span",{children:"EMAIL PREVIEW"}),(0,t.jsx)("h2",{children:R?"Ready for review":"Your draft will appear here"})]}),R&&(0,t.jsx)("button",{className:"text-button",onClick:function(){u(""),m(""),g(""),b(""),x(""),w(""),N(""),C(""),I(!1),k.current&&(k.current.innerHTML="")},children:"Start over"})]}),R&&E?(0,t.jsxs)("div",{className:"email-result",children:[(0,t.jsxs)("div",{className:"email-actions",children:[(0,t.jsx)("button",{onClick:()=>L(E.subject,"Subject"),children:"Copy subject"}),(0,t.jsx)("button",{onClick:()=>B(),children:"Copy formatted email"}),(0,t.jsx)("button",{onClick:function(){if(!E)return;let e=["X-Unsent: 1","To: PRNI <PRNI@cisa.dhs.gov>",`Subject: ${E.subject}`,"MIME-Version: 1.0","Content-Type: text/plain; charset=UTF-8","Content-Transfer-Encoding: 8bit","",E.body].join("\r\n"),t=URL.createObjectURL(new Blob([e],{type:"message/rfc822;charset=utf-8"})),a=document.createElement("a");a.href=t,a.download=`PRNI-${v.trim().toUpperCase()||"region"}-${f.trim().replace(/[^a-z0-9]+/gi,"-").replace(/^-|-$/g,"")||"entity"}.eml`,a.click(),URL.revokeObjectURL(t)},children:"Download .eml"}),(0,t.jsx)("button",{className:"primary",onClick:H,"aria-describedby":"outlook-compatibility",title:"Opens the Outlook app registered as your device’s default email application",children:"Open Outlook draft"})]}),(0,t.jsxs)("p",{className:"outlook-note",id:"outlook-compatibility",children:[(0,t.jsx)("strong",{children:"Windows and Mac:"})," Works with new and classic/legacy Outlook when Outlook is your default email app. The subject and plain-text body are filled in automatically. To preserve tables and images, paste the formatted body copied when the draft opens. If Outlook does not open, use “Copy formatted email” and start a message manually."]}),(0,t.jsxs)("div",{className:"subject",children:[(0,t.jsx)("span",{children:"SUBJECT"}),(0,t.jsx)("strong",{children:E.subject})]}),(0,t.jsx)("div",{className:"email-body",dangerouslySetInnerHTML:{__html:E.html}})]}):(0,t.jsxs)("div",{className:"empty-state",children:[(0,t.jsx)("div",{className:"mail-icon",children:"✉"}),(0,t.jsx)("h3",{children:"Build a notification"}),(0,t.jsx)("p",{children:"Select both dropdowns and add the reporting details. The template and actor context will be combined automatically."}),(0,t.jsxs)("div",{className:"progress-list",children:[(0,t.jsx)("span",{className:e?"done":"",children:"1"}),(0,t.jsx)("p",{children:"Template selected"}),(0,t.jsx)("span",{className:p?"done":"",children:"2"}),(0,t.jsx)("p",{children:"Variant selected"}),(0,t.jsx)("span",{className:f.trim()&&P?"done":"",children:"3"}),(0,t.jsx)("p",{children:"Reporting added"})]})]})]})]}),S&&(0,t.jsxs)("div",{className:"toast",children:["✓ ",S]}),(0,t.jsxs)("footer",{children:[(0,t.jsx)("span",{children:"PRNI Email Builder"}),(0,t.jsx)("span",{children:"Review all generated language and indicators before sending."})]})]})}])}]);