(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,31713,e=>{"use strict";var t=e.i(26691),i=e.i(52106);let a={termite:{label:"Termite",summary:"Known for multi-stage intrusion activity that can progress quickly from initial access to privilege escalation and data theft.",behaviors:["Tuoni post-exploitation tooling and reverse-proxy infrastructure","ClickFix-style malvertisement infections","ExMatter or Rclone-style data exfiltration","Kerberoasting, offline hash cracking, lateral movement, and privilege escalation"],hunt:"Review for Tuoni or Cobalt Strike-like activity, bulk outbound transfers, Kerberos service-ticket anomalies, unexpected privileged-account changes, and unauthorized remote-access tools."},akira:{label:"Akira",summary:"Historically gains access through remote services and compromised credentials, then establishes persistence and stages data for extortion.",behaviors:["Compromised VPN credentials, phishing, RDP, and exploitation of internet-facing systems","AnyDesk, LogMeIn, Ngrok, and other remote-access or tunneling tools","Credential theft, privileged-account creation, lateral movement, and defense evasion","Mimikatz, Rclone, WinSCP, FileZilla, and network-discovery utilities"],hunt:"Review VPN, RDP, identity, endpoint, and firewall telemetry; investigate unexpected remote-access tools, credential misuse, new privileged accounts, and suspicious outbound data transfers."},unknown:{label:"Unknown / other",summary:"No actor-specific behavior will be inserted. The generated message will use general pre-ransomware hunting guidance.",behaviors:["Unauthorized remote access or persistence","Credential misuse and unexpected account changes","Lateral movement and suspicious administrative activity","Data staging, bulk outbound transfer, or encryption precursors"],hunt:"Review identity, endpoint, VPN, firewall, and network telemetry for unauthorized access, persistence, lateral movement, data staging, and unusual outbound transfers."}},n=[{id:"intrusion",label:"Intrusion in progress",description:"Suspected active compromise with technical details or indicators."},{id:"actor",label:"Threat actor notification",description:"High-level notification when reporting is sensitive or limited."},{id:"access",label:"Attacker-controlled access",description:"A host, account, or endpoint observed in adversary infrastructure."},{id:"recovery",label:"Data recovery assistance",description:"Notification that a trusted third party may assist with file recovery."}],s=`The entity is also advised to hunt for any other backdoors potentially placed by the threat actors based on this potential access.

This includes unauthorized remote monitoring and management tools used for persistence, including AnyDesk, Atera, GoTo Resolve, OptiTune, ScreenConnect, Splashtop, TeamViewer, or Zoho Assist. The organization should also review for unexpected RDP sessions, Brute Ratel C4 or Cobalt Strike implants, backdoor accounts, and changes to existing accounts. A domain-wide credential reset may be appropriate as part of incident response activities.

Unauthorized RMM Detection:

(Note: CISA does not endorse any commercial product or service. Any reference to specific commercial products, processes, or services does not constitute endorsement, recommendation, or favoring by CISA.)

Please see: https[:]//lolrmm[.]io/ for further information on detecting common RMMs.

Overall, the entity is advised to activate its cyber incident response plan to contain this apparent activity.`,r=`Note:
CISA does not endorse any commercial product, service, or vendor. Any reference to a third party is provided solely for awareness and does not constitute an endorsement or recommendation by CISA. The data recovery assistance referenced in this notification is offered independently by the third party and not by CISA. CISA does not guarantee the effectiveness of any data recovery services, makes no representations regarding the third party’s methods or outcomes, and assumes no liability for any interaction between the affected entity and the third party. Engagement with the third party is entirely voluntary and at the discretion of the affected entity.`;e.s(["default",0,function(){let[e,o]=(0,i.useState)(""),[c,l]=(0,i.useState)(""),[d,h]=(0,i.useState)(""),[u,m]=(0,i.useState)(""),[p,v]=(0,i.useState)(""),[y,f]=(0,i.useState)(""),[g,b]=(0,i.useState)(""),[x,j]=(0,i.useState)(!1),[w,N]=(0,i.useState)(""),C=(0,i.useMemo)(()=>{var t;let i,n,o,l,h,m,v,f,b,x;return e&&c?(i=a[(t={template:e,variant:c,entity:d,region:u,state:p,sector:y,details:g}).variant],n=t.region.trim()?`Region ${t.region.trim()}${t.state.trim()?`/${t.state.trim().toUpperCase()}`:""} Cyber -`:t.state.trim()?`${t.state.trim().toUpperCase()} Cyber -`:"Regional Cyber Team -",o=t.state.trim().toUpperCase()||"Region",l=t.sector.trim()||"Critical Infrastructure",h=`TLP:AMBER Pre-Ransomware Notification in Your Region - ${o} - ${l}`,m=`TLP:AMBER

${n}

This information was provided to CISA by a trusted third party. This information should only be provided to the potentially affected entity using out-of-band communication methods for the recipient such as phone or personal email accounts for OPSEC purposes and to avoid tipping off the threat actors.`,v=t.details.trim(),f=t.entity.trim(),b=`Known ${i.label} Activity

${i.summary}

${i.behaviors.map(e=>`• ${e}`).join("\n")}

Threat-Hunting Focus

${i.hunt}`,x="",{subject:h,body:"intrusion"===t.template?`${m}

//

Per conversation, a trusted third party shared a tip with CISA that a suspected ransomware gang appears to have an intrusion in progress at the following entity. No assumption should be made that this is the only foothold the adversary may have on the network.

Potentially Affected Entity:

${f}

Details:

According to the trusted third party, threat actors associated with ${"Unknown / other"===i.label?"a suspected ransomware operation":`the ${i.label} ransomware operation`} appear to be active in the subject entity’s environment.

${v}

${b}

//

${s}`:"actor"===t.template?`${m}

//

The Cybersecurity and Infrastructure Security Agency (CISA) is providing this notification based on information received from a trusted source indicating that your organization has been identified in connection with cyber activity associated with ${"Unknown / other"===i.label?"a suspected ransomware threat actor":`the ${i.label} ransomware threat actor`}.

Current reporting indicates that the activity may be ongoing and warrants immediate review. CISA is sharing this information to enable your organization to identify, investigate, and mitigate potential malicious activity before ransomware deployment, data exfiltration, or other operational impacts occur.

//

Potentially Affected Entity

${f}

Reported Activity

${v}

${b}

Recommended Actions

• Review authentication, VPN, firewall, network, and endpoint telemetry for suspicious activity.
• Investigate unauthorized accounts, remote-access activity, credential misuse, and signs of lateral movement.
• Isolate affected systems and activate incident response procedures if suspicious activity is identified.
• Enforce multifactor authentication for remote access and privileged accounts.
• Confirm the integrity and availability of offline or otherwise isolated backups.

//

Requested Response

CISA would appreciate notification regarding the results of your review, including whether any suspicious or malicious activity was identified.`:"access"===t.template?`${m}

//

Per conversation, a trusted third party shared a tip with CISA indicating that a workstation or account associated with the following entity was observed in attacker-controlled infrastructure. The available information does not establish whether the activity has since been remediated or whether additional unauthorized access or persistence remains. No assumption should be made that this is the only foothold the adversary may have on the network.

Potentially Affected Entity:

${f}

Details:

${v}

Assessment:

The reporting may indicate unauthorized access to a system or account associated with the organization; however, it does not by itself establish the scope of access, successful credential use, data exfiltration, lateral movement, or ransomware deployment.

${b}

//

${s}`:`${m}

//

A trusted third party shared a tip with CISA indicating that a suspected ransomware gang may have compromised systems belonging to the potentially affected entity. The same third party may also be able to assist the entity in recovering files.

Potentially Affected Entity:

${f}

Details:

${v}

${b}

//

If the entity elects to pursue data recovery assistance, CISA can facilitate an introduction to the trusted third party using secure, out-of-band communication channels.

Please advise whether the entity wishes to proceed, and CISA will enable the connection.

${r}`}):null},[e,c,d,u,p,y,g]),A=!!(e&&c&&d.trim()&&g.trim()),T=n.find(t=>t.id===e);async function R(e,t){await navigator.clipboard.writeText(e),N(`${t} copied`),window.setTimeout(()=>N(""),1800)}return(0,t.jsxs)("main",{children:[(0,t.jsxs)("header",{className:"topbar",children:[(0,t.jsxs)("div",{className:"brand",children:[(0,t.jsx)("span",{className:"brand-mark",children:"P"}),(0,t.jsxs)("div",{children:[(0,t.jsx)("strong",{children:"PRNI"}),(0,t.jsx)("span",{children:"Email Builder"})]})]}),(0,t.jsxs)("div",{className:"tlp",children:[(0,t.jsx)("span",{}),"TLP:AMBER"]})]}),(0,t.jsxs)("section",{className:"intro",children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("p",{className:"eyebrow",children:"PRE-RANSOMWARE NOTIFICATION"}),(0,t.jsx)("h1",{children:"Turn threat reporting into a ready-to-review email."}),(0,t.jsx)("p",{className:"lede",children:"Choose a notification format and ransomware variant, add the reporting you received, then generate a consistent PRNI draft."})]}),(0,t.jsxs)("div",{className:"privacy-note",children:[(0,t.jsx)("span",{children:"✓"}),(0,t.jsxs)("p",{children:[(0,t.jsx)("strong",{children:"Drafts stay in your browser."}),(0,t.jsx)("br",{}),"No entered information is sent or saved by this page."]})]})]}),(0,t.jsxs)("section",{className:"workspace",children:[(0,t.jsxs)("form",{className:"builder",onSubmit:e=>{e.preventDefault(),A&&j(!0)},children:[(0,t.jsxs)("div",{className:"section-heading",children:[(0,t.jsx)("span",{children:"01"}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h2",{children:"Choose the format"}),(0,t.jsx)("p",{children:"Start with the notification type that best fits the reporting."})]})]}),(0,t.jsxs)("label",{children:["EMAIL TEMPLATE",(0,t.jsxs)("select",{value:e,onChange:e=>{o(e.target.value),j(!1)},children:[(0,t.jsx)("option",{value:"",children:"Select a template…"}),n.map(e=>(0,t.jsx)("option",{value:e.id,children:e.label},e.id))]})]}),T&&(0,t.jsx)("p",{className:"field-help",children:T.description}),(0,t.jsxs)("label",{children:["RANSOMWARE VARIANT",(0,t.jsxs)("select",{value:c,onChange:e=>{l(e.target.value),j(!1)},children:[(0,t.jsx)("option",{value:"",children:"Select a variant…"}),Object.entries(a).map(([e,i])=>(0,t.jsx)("option",{value:e,children:i.label},e))]})]}),c&&(0,t.jsxs)("aside",{className:"actor-card",children:[(0,t.jsxs)("div",{className:"actor-title",children:[(0,t.jsx)("span",{className:"pulse"}),(0,t.jsxs)("strong",{children:[a[c].label," activity profile"]}),(0,t.jsx)("span",{className:"auto-tag",children:"AUTO-INSERTED"})]}),(0,t.jsx)("p",{children:a[c].summary}),(0,t.jsx)("ul",{children:a[c].behaviors.slice(0,3).map(e=>(0,t.jsx)("li",{children:e},e))})]}),(0,t.jsx)("div",{className:"divider"}),(0,t.jsxs)("div",{className:"section-heading",children:[(0,t.jsx)("span",{children:"02"}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h2",{children:"Add the reporting"}),(0,t.jsx)("p",{children:"These fields are placed into the subject, routing line, and notification body."})]})]}),(0,t.jsxs)("label",{children:["POTENTIALLY AFFECTED ENTITY",(0,t.jsx)("input",{value:d,onChange:e=>{h(e.target.value),j(!1)},placeholder:"Organization name"})]}),(0,t.jsxs)("div",{className:"field-row three",children:[(0,t.jsxs)("label",{children:["REGION",(0,t.jsx)("input",{value:u,onChange:e=>{m(e.target.value),j(!1)},placeholder:"e.g., 9"})]}),(0,t.jsxs)("label",{children:["STATE",(0,t.jsx)("input",{value:p,maxLength:2,onChange:e=>{v(e.target.value),j(!1)},placeholder:"CA"})]}),(0,t.jsxs)("label",{children:["SECTOR",(0,t.jsx)("input",{value:y,onChange:e=>{f(e.target.value),j(!1)},placeholder:"Information Technology"})]})]}),(0,t.jsxs)("label",{children:["REPORTING DETAILS",(0,t.jsx)("textarea",{value:g,onChange:e=>{b(e.target.value),j(!1)},placeholder:"Paste or type the incident-specific reporting here. Include indicators, dates, infrastructure, accounts, telemetry, or other investigative details.\n\nPlain-text bullets are preserved."}),(0,t.jsxs)("span",{className:"counter",children:[g.length.toLocaleString()," characters"]})]}),(0,t.jsxs)("button",{className:"generate",type:"submit",disabled:!A,children:["Generate email ",(0,t.jsx)("span",{children:"→"})]}),(0,t.jsx)("p",{className:"required-note",children:"Template, variant, entity, and reporting details are required."})]}),(0,t.jsxs)("section",{className:"preview","aria-live":"polite",children:[(0,t.jsxs)("div",{className:"preview-head",children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("span",{children:"EMAIL PREVIEW"}),(0,t.jsx)("h2",{children:x?"Ready for review":"Your draft will appear here"})]}),x&&(0,t.jsx)("button",{className:"text-button",onClick:function(){o(""),l(""),h(""),m(""),v(""),f(""),b(""),j(!1)},children:"Start over"})]}),x&&C?(0,t.jsxs)("div",{className:"email-result",children:[(0,t.jsxs)("div",{className:"email-actions",children:[(0,t.jsx)("button",{onClick:()=>R(C.subject,"Subject"),children:"Copy subject"}),(0,t.jsx)("button",{onClick:()=>R(`Subject: ${C.subject}

${C.body}`,"Email"),children:"Copy email"}),(0,t.jsx)("button",{className:"primary",onClick:function(){if(!C)return;let e=["X-Unsent: 1","To: PRNI <PRNI@cisa.dhs.gov>",`Subject: ${C.subject}`,"MIME-Version: 1.0","Content-Type: text/plain; charset=UTF-8","Content-Transfer-Encoding: 8bit","",C.body].join("\r\n"),t=URL.createObjectURL(new Blob([e],{type:"message/rfc822;charset=utf-8"})),i=document.createElement("a");i.href=t,i.download=`PRNI-${p.trim().toUpperCase()||"region"}-${d.trim().replace(/[^a-z0-9]+/gi,"-").replace(/^-|-$/g,"")||"entity"}.eml`,i.click(),URL.revokeObjectURL(t)},children:"Download .eml"})]}),(0,t.jsxs)("div",{className:"subject",children:[(0,t.jsx)("span",{children:"SUBJECT"}),(0,t.jsx)("strong",{children:C.subject})]}),(0,t.jsx)("pre",{children:C.body})]}):(0,t.jsxs)("div",{className:"empty-state",children:[(0,t.jsx)("div",{className:"mail-icon",children:"✉"}),(0,t.jsx)("h3",{children:"Build a notification"}),(0,t.jsx)("p",{children:"Select both dropdowns and add the reporting details. The template and actor context will be combined automatically."}),(0,t.jsxs)("div",{className:"progress-list",children:[(0,t.jsx)("span",{className:e?"done":"",children:"1"}),(0,t.jsx)("p",{children:"Template selected"}),(0,t.jsx)("span",{className:c?"done":"",children:"2"}),(0,t.jsx)("p",{children:"Variant selected"}),(0,t.jsx)("span",{className:d.trim()&&g.trim()?"done":"",children:"3"}),(0,t.jsx)("p",{children:"Reporting added"})]})]})]})]}),w&&(0,t.jsxs)("div",{className:"toast",children:["✓ ",w]}),(0,t.jsxs)("footer",{children:[(0,t.jsx)("span",{children:"PRNI Email Builder"}),(0,t.jsx)("span",{children:"Review all generated language and indicators before sending."})]})]})}])}]);