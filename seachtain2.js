/* ------------------------------------------------------------------
   Seachtain 2 — An teanga scríofa agus an teanga labhartha
   ------------------------------------------------------------------
   Everything the exam is most likely to draw on, kept as DATA so the
   drills, structure cards and notes all build themselves from it.

   Edit a pattern once here and every drill made from it changes too.
   ------------------------------------------------------------------ */

/* ---- 1. Tasc 4A: the feeling-and-preposition set ------------------ */
/* Irish puts most feelings ON you as a noun: tá bród orm.
   The SECOND preposition (for the cause) is fixed per noun and has
   to be learned. p1 = preposition holding the person, p2 = cause.   */
const PREPSET = [
  { n:"áthas",   en:"happy about",      p1:"ar", p2:"faoi", ex:"Tá áthas orm faoin toradh.",          exen:"I'm happy about the result." },
  { n:"brón",    en:"sorry about",      p1:"ar", p2:"faoi", ex:"Tá brón orm faoi sin.",               exen:"I'm sorry about that." },
  { n:"bród",    en:"proud of",         p1:"ar", p2:"as",   ex:"Tá bród uirthi asainn.",              exen:"She is proud of us." },
  { n:"náire",   en:"ashamed of",       p1:"ar", p2:"as",   ex:"Tháinig náire orm astu.",             exen:"I became ashamed of them." },
  { n:"eagla",   en:"afraid of",        p1:"ar", p2:"roimh",ex:"Tá eagla ar Chaoimhín roimh mhadaí.", exen:"Caoimhín is afraid of dogs." },
  { n:"faitíos", en:"afraid of",        p1:"ar", p2:"roimh",ex:"Tá faitíos air roimh an dorchadas.",  exen:"He's afraid of the dark." },
  { n:"fáilte",  en:"welcome",          p1:"roimh", p2:"",  ex:"Tá fáilte romhat.",                   exen:"You are welcome." },
  { n:"fearg",   en:"angry with",       p1:"ar", p2:"le",   ex:"Tá fearg air leat.",                  exen:"He is angry at you." },
  { n:"éad",     en:"jealous of",       p1:"ar", p2:"le",   ex:"Tá éad orm leo.",                     exen:"I am jealous of them." },
  { n:"imní",    en:"worried about",    p1:"ar", p2:"faoi", ex:"Tá imní orm fút.",                    exen:"I am worried about you." },
  { n:"iontas",  en:"surprised at",     p1:"ar", p2:"faoi", ex:"Tá iontas ar Sheán faoi sin.",        exen:"Seán is surprised about that." },
  { n:"deifir",  en:"in a hurry",       p1:"ar", p2:"",     ex:"Tá deifir ar Shíle.",                 exen:"Síle is in a hurry." },
  { n:"dlús",    en:"in a hurry (Ulster)",p1:"ar",p2:"",    ex:"Tá dlús uirthi.",                     exen:"She's in a hurry." },
  { n:"fonn",    en:"in the mood for",  p1:"ar", p2:"",     ex:"Tá fonn toitín orm.",                 exen:"I'm in the mood for a cigarette.", gen:true },
  { n:"ocras",   en:"hungry",           p1:"ar", p2:"",     ex:"Tá ocras orm.",                       exen:"I'm hungry." },
  { n:"tart",    en:"thirsty",          p1:"ar", p2:"",     ex:"Tá tart orm.",                        exen:"I'm thirsty." },
  { n:"tuirse",  en:"tired",            p1:"ar", p2:"",     ex:"Tá tuirse orm.",                      exen:"I'm tired." },
  { n:"codladh", en:"sleepy",           p1:"ar", p2:"",     ex:"Tá codladh orm.",                     exen:"I'm sleepy." },
  { n:"dúil",    en:"fond of",          p1:"ag", p2:"i",    ex:"Tá dúil agam ann.",                   exen:"I'm fond of it." },
  { n:"suim",    en:"interested in",    p1:"ag", p2:"i",    ex:"Tá suim agam ann.",                   exen:"I'm interested in it." },
  { n:"meas",    en:"respect for",      p1:"ag", p2:"ar",   ex:"Tá meas agam air.",                   exen:"I respect him." },
  { n:"muinín",  en:"trust in",         p1:"ag", p2:"as",   ex:"Tá muinín agam as.",                  exen:"I trust him." },
  { n:"dóchas",  en:"hope in",          p1:"ag", p2:"as",   ex:"Tá dóchas agam as.",                  exen:"I have hope in him." },
];

/* prepositional pronouns, for generating the gap drills */
const PRON = {
  ar:    { me:"orm", tu:"ort", se:"air", si:"uirthi", muid:"orainn", sibh:"oraibh", siad:"orthu" },
  ag:    { me:"agam", tu:"agat", se:"aige", si:"aici", muid:"againn", sibh:"agaibh", siad:"acu" },
  as:    { me:"asam", tu:"asat", se:"as", si:"aisti", muid:"asainn", sibh:"asaibh", siad:"astu" },
  le:    { me:"liom", tu:"leat", se:"leis", si:"léi", muid:"linn", sibh:"libh", siad:"leo" },
  faoi:  { me:"fúm", tu:"fút", se:"faoi", si:"fúithi", muid:"fúinn", sibh:"fúibh", siad:"fúthu" },
  roimh: { me:"romham", tu:"romhat", se:"roimhe", si:"roimpi", muid:"romhainn", sibh:"romhaibh", siad:"rompu" },
  i:     { me:"ionam", tu:"ionat", se:"ann", si:"inti", muid:"ionainn", sibh:"ionaibh", siad:"iontu" },
  de:    { me:"díom", tu:"díot", se:"de", si:"di", muid:"dínn", sibh:"díbh", siad:"díobh" },
  do:    { me:"dom/domh", tu:"duit", se:"dó", si:"di", muid:"dúinn", sibh:"daoibh", siad:"dóibh/daofa" },
  o:     { me:"uaim", tu:"uait", se:"uaidh", si:"uaithi", muid:"uainn", sibh:"uaibh", siad:"uathu" },
};
const PRONLABEL = { me:"mé", tu:"tú", se:"sé", si:"sí", muid:"muid", sibh:"sibh", siad:"siad" };

/* ---- 2. Tasc 4A: the twelve sentences, as set ---------------------- */
const T4A = [
  { en:"He is happy about the result.", a:"Tá sé sásta leis an toradh.",
    alts:["Tá áthas air faoin toradh."],
    note:"Sásta le is one of the few that uses an adjective rather than a noun. The noun version is tá áthas air faoin toradh." },
  { en:"She is proud of us.", a:"Tá bród uirthi asainn.",
    alts:["Tá sí bródúil asainn."],
    note:"Bród ar X as Y. as + sinn = asainn." },
  { en:"Síle is in a hurry.", a:"Tá deifir ar Shíle.",
    alts:["Tá dlús uirthi."],
    note:"Deifir ar. Names lenite after ar: ar Shíle, ar Sheán, ar Chaoimhín. Ulster also tá dlús uirthi." },
  { en:"I am jealous of them.", a:"Tá éad orm leo.",
    alts:["Tá mé in éad leo."],
    note:"Éad ar X le Y. Formad is the Munster word." },
  { en:"Caoimhín is afraid of dogs.", a:"Tá eagla ar Chaoimhín roimh mhadaí.",
    alts:["Tá faitíos ar Chaoimhín roimh mhadaí.","Tá eagla ar Chaoimhín roimh mhadraí."],
    note:"Eagla ar X roimh Y; roimh lenites. Ulster madadh, plural madaí (standard madraí)." },
  { en:"You are welcome.", a:"Tá fáilte romhat.",
    note:"Fáilte roimh — literally 'a welcome before you'." },
  { en:"He is angry at you.", a:"Tá fearg air leat.",
    alts:["Tá olc air leat."],
    note:"Fearg ar X le Y. Ulster also tá olc air leat." },
  { en:"I am in the mood for a cigarette.", a:"Tá fonn toitín orm.",
    alts:["Tá fonn orm toitín a chaitheamh."],
    note:"Fonn + genitive + ar. Or spell it out with a verbal noun." },
  { en:"I am worried about you.", a:"Tá imní orm fút.",
    alts:["Tá mé buartha fút."],
    note:"Imní ar X faoi Y; faoi + tú = fút." },
  { en:"Seán is surprised about that.", a:"Tá iontas ar Sheán faoi sin.",
    note:"Iontas ar X faoi Y. Note iontas = surprise, while iontach on its own is Ulster for 'very'." },
  { en:"I became ashamed of them.", a:"Tháinig náire orm astu.",
    note:"Náire ar X as Y, with tháinig for 'became'. Ag teacht ar = 'is getting'." },
  { en:"I think you are tired.", a:"Sílim go bhfuil tú tuirseach.",
    alts:["Tá mé ag déanamh go bhfuil tú tuirseach."],
    note:"The odd one out — no preposition idiom, just a go clause after a verb of thinking. Tá mé ag déanamh go… is the Ulster 'I reckon that…'." },
];

/* ---- 3. Tasc 4B: má / dá / mura ----------------------------------- */
const T4B = [
  { en:"If you understand this, you are doing well.", a:"Má thuigeann tú seo, tá tú ag déanamh go maith.",
    note:"Má + present + lenition." },
  { en:"If he is there tomorrow, I will speak to him.", a:"Má bhíonn sé ann amárach, labhróidh mé leis.",
    note:"Má bhíonn, NOT má bheidh — no future after má. The main clause can be future." },
  { en:"If she was there, I didn't see her.", a:"Má bhí sí ann, ní fhaca mé í.",
    alts:["Má bhí sí ann, chan fhaca mé í."],
    note:"Má bhí for the past. Ní fhaca is the negative past of feic; Ulster also chan fhaca." },
  { en:"If they didn't understand, they didn't tell me.", a:"Murar thuig siad, níor inis siad domh é.",
    alts:["Murar thuig siad, níor inis siad dom é."],
    note:"Negative má in the past = murar + lenition. Domh is Ulster for dom." },
  { en:"If you don't do the work, you won't succeed.", a:"Mura ndéanann tú an obair, ní éireoidh leat.",
    note:"Mura + eclipsis. Éirigh le = succeed: d'éirigh go maith leis." },
  { en:"If he doesn't arrive soon, he will miss the game.", a:"Mura dtagann sé go luath, caillfidh sé an cluiche.",
    alts:["Mura dtiocfaidh sé go luath, caillfidh sé an cluiche.","Mura dtagann sé go luath, beidh an cluiche caillte air."],
    note:"CORRECTED. The sheet has Muna dtiocfaidh — muna is the Ulster spelling of mura, so write mura in an exam. The present (dtagann) mirrors má and is the safer choice; the future after mura does occur and is not an error." },
  { en:"If I were in charge of the course, I would make a change.", a:"Dá mbeinn i gceannas ar an chúrsa, dhéanfainn athrú air.",
    alts:["Dá mbeinn i gceannas ar an gcúrsa, dhéanfainn athrú air."],
    note:"Hypothetical, so dá + eclipsis + conditional, not má. Standard: ar an gcúrsa." },
  { en:"If you bought me a drink, I would drink it.", a:"Dá gceannófá deoch domh, d'ólfainn í.",
    alts:["Dá gceannófá deoch dom, d'ólfainn í."],
    note:"Dá + eclipsis + conditional (cheannófá → gceannófá). Deoch is feminine, so í." },
];

/* the má / dá / mura rules, for the structure card and the MC drills */
const MARULES = [
  { q:"'If' for something real or open", a:"má", d:"+ lenition, ordinary tenses: má thuigeann tú, má bhí sé ann, má chuirtear." },
  { q:"'If' for something unreal or hypothetical", a:"dá", d:"+ eclipsis + conditional: dá mbeadh an t-airgead agam, cheannóinn é." },
  { q:"Negative of má, present", a:"mura", d:"+ eclipsis: mura dtuigeann tú. Ulster spelling muna." },
  { q:"Negative of má, past (regular verbs)", a:"murar", d:"+ lenition: murar thuig siad. Ulster spelling munar." },
  { q:"Negative of má, past (irregular verbs)", a:"mura", d:"+ the dependent past: mura raibh, mura ndearna, mura bhfaca, mura ndeachaigh, mura bhfuair." },
  { q:"Negative of dá", a:"mura mbeadh", d:"or murach + a noun: murach tusa, bheadh mé i dtrioblóid." },
  { q:"Copula after má (real)", a:"más", d:"más maith leat, más fíor sin." },
  { q:"Copula after dá (unreal)", a:"dá mba", d:"dá mba rud é go… — the standard way to set up a hypothetical." },
  { q:"Future meaning after má", a:"use the present", d:"má thagann sé amárach. With bí, má bhíonn. Má NEVER takes the future." },
];

/* ---- 4. Tasc 5: the conditional ----------------------------------- */
const CONDTABLE = {
  heads: ["", "1st conj. (mol)", "2nd conj. (ceannaigh)"],
  rows: [
    ["mé",        "mholfainn",   "cheannóinn"],
    ["tú",        "mholfá",      "cheannófá"],
    ["sé / sí",   "mholfadh sé", "cheannódh sé"],
    ["muid",      "mholfaimis / mholfadh muid", "cheannóimis / cheannódh muid"],
    ["sibh",      "mholfadh sibh","cheannódh sibh"],
    ["siad",      "mholfaidís",  "cheannóidís"],
  ],
  mut:"Lenition on the first consonant; d' before a vowel or fh (d'ólfainn, d'fhanfainn). After go / dá / an / nach: eclipsis (go gcuirfeadh, dá mbeadh).",
  irreg:[
    ["bí","bheinn"], ["déan","dhéanfainn"], ["tabhair","thabharfainn"],
    ["faigh","gheobhainn (ní bhfaighinn)"], ["ith","d'íosfainn"], ["abair","déarfainn"],
    ["tar","thiocfainn"], ["téigh","rachainn"], ["feic","chífinn / tchífinn"],
    ["clois / cluin","chluinfinn"], ["beir","bhéarfainn"],
  ],
};

const T5PASSAGE = [
  { ga:"Dá mba rud é, a Mhairéad, go gcuirfeadh duine éigin óg ceist ort, duine éigin a bhí ag smaoineamh ar dhul chuig an ollscoil agus a bhí ag smaoineamh Gaeilge a dhéanamh, cad é a mholfá dó nó di?",
    en:"If, Mairéad, some young person were to put a question to you — someone who was thinking of going to university and thinking of doing Irish — what would you recommend to him or her?",
    who:"Máire",
    forms:["Dá mba rud é go… — 'if it were the case that…', the copula under dá","go gcuirfeadh — conditional after go, so eclipsis","a mholfá — conditional 2nd sg; the -fá already contains 'you', so no tú","ar + tú = ort; ag smaoineamh ar dhul — ar lenites the verbal noun"] },
  { ga:"Déarfainn leo an léitheoireacht riachtanach, an rud a bhí leagtha amach ar an chúrsa, a léamh ar dtús ag tús na bliana, agus thabharfadh sé sin am dóibh féin, abair, nuair a thiocfadh aimsir scrúduithe; thabharfadh sé sin am dóibh an léitheoireacht bhreise a dhéanamh agus an staidéar a dhéanamh, agus tá mé ag ceapadh go ndéanfadh sé sin i bhfad níos éasca é, go n-éireodh go maith leo sa Ghaeilge ansin.",
    en:"I'd tell them to read the required reading — what's laid out on the course — first, at the start of the year, and that would give them time themselves, say, when exam season came; that would give them time to do the extra reading and the study, and I think that would make it a great deal easier, and that they'd do well in Irish then.",
    who:"Mairéad",
    forms:["Déarfainn — irregular conditional of abair","ag tús na bliana — genitive after tús: bliain → na bliana","thabharfadh / thiocfadh — conditional lenites the first consonant","an léitheoireacht bhreise — léitheoireacht is feminine, so the adjective lenites","go n-éireodh — go before a vowel adds n-"] },
  { ga:"Agus mar cheist scoir, dá mbeadh breith ar d'aiféala agat, an roghnófá Gaeilge arís?",
    en:"And as a closing question, if you could have your time over again, would you choose Irish again?",
    who:"Máire",
    forms:["mar cheist scoir — 'as a closing question'; scor = cessation, as in lá scoir","breith ar d'aiféala — aiféala is regret, and breith ar d'aiféala is the chance to catch it: to undo a decision","an roghnófá? — conditional question, 2nd sg"] },
  { ga:"Roghnóinn, agus dá mbeadh an rogha agam dhéanfainn athrú ar na cúrsaí atá ann, ach, mar sin féin, tá mé an-sásta leis an chúrsa agus dhéanfainn arís é dá bhféadfainn.",
    en:"I would, and if I had the choice I'd make a change to the courses that are there, but even so, I'm very happy with the course, and I'd do it again if I could.",
    who:"Mairéad",
    forms:["Roghnóinn — the answer to a conditional question repeats the verb; Irish has no bare 'I would'","dá bhféadfainn — féad = to be able; dá + eclipsis + conditional","leis an chúrsa — Ulster lenites after preposition + an (standard: leis an gcúrsa)"] },
];

/* ---- 5. Tasc 6: discussion questions and the modules -------------- */
const T6 = [
  { ga:"An bhfuil mórán difir idir na ranganna ar an ollscoil agus na ranganna ar fhreastail tú orthu roimhe?",
    en:"Is there much difference between the classes at university and the classes you attended before?",
    note:"Sheet has ar Ollscoil — should be ar an ollscoil or san ollscoil. Mórán difir: difear goes genitive after mórán. Ar fhreastail tú orthu is an indirect relative with the preposition picked up at the end.",
    bank:["Is mór an difear atá eatarthu…","Bhí an scoil i bhfad níos struchtúrtha…","Ar an ollscoil, bíonn an freagracht orainn féin…","Níl an oiread treorach le fáil anois…"] },
  { ga:"Déan iarracht míniú a thabhairt ar chuspóirí na modúl seo a leanas.",
    en:"Try to explain the aims of the following modules.",
    note:"Míniú a thabhairt ar = to explain (give an explanation on). Cuspóirí na modúl — modúl keeps the same form in the genitive plural. Here cuspóir means aim, not grammatical object.",
    bank:["Is é cuspóir an mhodúil seo ná…","Díríonn an modúl seo ar…","Baineann an modúl seo le…","Tugann sé léargas dúinn ar…"] },
  { ga:"Cad chuige a bhfuil tábhacht leis na modúil thuasluaite, dar leat?",
    en:"Why are the modules listed above important, in your opinion?",
    note:"Tá tábhacht le rud = something is important. Cad chuige is the Ulster 'why' and takes the indirect relative (a bhfuil). Thuasluaite = above-mentioned, lenited as a plural adjective after na modúil.",
    bank:["Tá tábhacht leo cionn is go…","Cuidíonn sé linn tuigbheáil a fháil ar…","Gan é, bheadh bearna mhór inár gcuid eolais…","Is bunchloch é do…"] },
  { ga:"An bhfuil modúl ar bith nach bhfuil ar an chúrsa a shíleann tú a bheadh úsáideach?",
    en:"Is there any module not on the course that you think would be useful?",
    note:"Ulster ar an chúrsa (standard ar an gcúrsa). A bheadh — conditional in a relative clause.",
    bank:["Ba mhaith liom modúl ar…","Bheadh sé úsáideach dá mbeadh…","Tá bearna ann maidir le…","Shílfinn go mbeadh fiúntas le…"] },
  { ga:"Cad iad na gnéithe den chúrsa Gaeilge is mó a gcuireann tú suim iontu agus cad iad na gnéithe nach gcuireann tú suim iontu?",
    en:"Which aspects of the Irish course interest you most, and which don't interest you?",
    note:"Sheet has cad iad an gnéithe — should be na gnéithe. Cuir suim i = take an interest in; i + iad = iontu. Is mó a gcuireann… is a superlative with an indirect relative.",
    bank:["Is mó a chuireann an chanúineolaíocht suim ionam…","Níl an oiread suime agam i…","Is ríchuma liom faoi…","Tá dúil mhór agam sa litríocht…"] },
];

const MODULES = [
  ["Cumarsáid na Gaeilge","Irish communication","Spoken and written communication skills — this sheet's own module."],
  ["Léamh na Gaeilge","Irish reading","Reading comprehension and building vocabulary from texts."],
  ["Litríocht na Gaeilge","Irish literature","Prose, poetry and drama in Irish."],
  ["Béaloideas agus staidéar oidhreachta","Folklore and heritage studies","Oral tradition, custom and belief. Béaloideas = 'mouth-teaching'; oidhreacht = heritage."],
  ["Athbheochan na Gaeilge","The Irish revival","The revival movement from the 1890s — Conradh na Gaeilge, Hyde, the new prose and journalism."],
  ["Canúineolaíocht na Gaeilge","Irish dialectology","The study of the dialects: canúint = dialect."],
  ["An Ghaeltacht i bhfócas","The Gaeltacht in focus","The Irish-speaking districts: policy, demography, language shift."],
  ["Teangeolaíocht na Gaeilge","Irish linguistics","Phonology, morphology and syntax — the formal study of how the language works."],
  ["An miontráchtas","The dissertation","Literally the 'mini-thesis': tráchtas = thesis, mion- = small, detailed."],
];

/* ---- 6. Tasc 7: opinions about the course ------------------------- */
const T7 = [
  { en:"Too much emphasis is placed on grammar in the course.", a:"Leagtar barraíocht béime ar chúrsaí gramadaí sa chúrsa.",
    note:"Leag béim ar = place emphasis on; béim → genitive béime. Barraíocht is Ulster for an iomarca. Leagtar is the autonomous present." },
  { en:"Some of the classes are too academic.", a:"Bíonn cuid de na ranganna ró-acadúil.",
    note:"Ró- takes a hyphen before a vowel; elsewhere it lenites: rómhall, ródhaor." },
  { en:"I'd like more opportunities to practise my Irish.", a:"Ba mhaith liom níos mó deiseanna le mo chuid Gaeilge a chleachtadh.",
    note:"Le + object + verbal noun for 'to do something'. Deis = opportunity; cleachtadh = practice." },
  { en:"I couldn't care less about the literature course. 'Peig' won't help me get a job.", a:"Is ríchuma liom faoin chúrsa litríochta. Ní chuideoidh 'Peig' liom post a fháil.",
    note:"Is cuma liom = I don't care; the intensifying prefix rí- makes it emphatic. Cuidigh le is Ulster for cabhraigh le." },
  { en:"I don't see the value in some of the modules.", a:"Ní fheicim an fiúntas atá le cuid de na modúil.",
    note:"Tá fiúntas le rud = there's value in something. Ní fheicim — f lenited after ní and silent." },
  { en:"There's a lot of overlap between the various modules.", a:"Bíonn cuid mhór trasnaíola ann idir na modúil éagsúla.",
    note:"Trasnaíl (crossing, overlap) → genitive trasnaíola after cuid mhór." },
  { en:"It's good to get a chance to do your own research on a subject you're keen on.", a:"Is maith seans a fháil do chuid taighde féin a dhéanamh ar ábhar a bhfuil dúil agat ann.",
    note:"Dúil a bheith agat i rud = to be fond of something. The sheet has a stray iad before ann." },
  { en:"I prefer doing coursework instead of a formal exam.", a:"Is fearr liomsa obair chúrsa a dhéanamh in áit scrúdú oifigiúil.",
    note:"Is fearr le = prefer; liomsa emphatic. Obair is feminine, so chúrsa lenites. In áit = instead of." },
  { en:"Three years isn't enough to get a proper grasp of every aspect of the course.", a:"Ní leor trí bliana le heolas ceart a chur ar gach gné den chúrsa.",
    note:"Ní leor = isn't enough. Eolas a chur ar = to get to know. Bliain has the counted form bliana after numbers: trí bliana." },
  { en:"The teaching approach on various modules needs to change.", a:"Tá athrú de dhíth ar an chur chuige teagaisc ar mhodúil éagsúla.",
    note:"De dhíth ar = needed by (Ulster; standard ag teastáil ó). Cur chuige = approach; teagasc → genitive teagaisc." },
];

/* ---- 7. Tasc 8: useful phrases ------------------------------------ */
const T8 = [
  { en:"It's hard not to think of Irish as a school subject.", a:"Is doiligh gan smaoineamh ar an Ghaeilge mar ábhar scoile.",
    alts:["Is deacair gan smaoineamh ar an nGaeilge mar ábhar scoile."],
    note:"Gan + verbal noun gives the negative infinitive. Doiligh is Ulster for deacair." },
  { en:"I don't consider Irish as a subject; it is part of me.", a:"Ní ábhar scoile domhsa an Ghaeilge; is cuid díom í.",
    note:"Copula sentence with a fronted predicate. De + mé = díom; Gaeilge is feminine, hence í." },
  { en:"Having Irish and having a degree in Irish aren't the same thing.", a:"Ní hionann Gaeilge a bheith agat agus céim a bheith agat sa Ghaeilge.",
    note:"Ní hionann X agus Y, here with two verbal-noun clauses. One of the most portable frames you have." },
  { en:"There is no point doing a degree that isn't challenging.", a:"Ní fiú céim a dhéanamh nach bhfuil dúshlánach.",
    note:"Ní fiú + verbal noun = there's no point. Dúshlán = challenge, dúshlánach = challenging." },
  { en:"Everyone has their own opinion about the course.", a:"Tá a bharúil féin ag achan duine faoin chúrsa.",
    alts:["Tá a thuairim féin ag gach duine faoin gcúrsa."],
    note:"Barúil = opinion (Ulster; also tuairim). Achan is the Ulster contraction of gach aon." },
  { en:"I try to work outside the class; every little helps.", a:"Déanaim iarracht obair a dhéanamh taobh amuigh den rang; bailíonn brobh beart.",
    note:"Bailíonn brobh beart — a proverb: wisps gather to make a bundle, i.e. every little helps." },
  { en:"A good start is half the work.", a:"Tús maith leath na hoibre.",
    note:"A set proverb, so no verb at all. Obair → genitive na hoibre, with h after na." },
  { en:"It is easier to talk than to do.", a:"Is fusa a rá ná a dhéanamh.",
    note:"Fusa is the irregular comparative of furasta. Compare the English 'easier said than done'." },
  { en:"Don't turn your back on good advice.", a:"Ná tabhair droim láimhe do dhea-chomhairle.",
    note:"Droim láimhe a thabhairt do = to reject, literally to give the back of the hand to. Dea- (good) lenites." },
  { en:"Do what you say!", a:"Déan mar a deir tú!",
    alts:["Bíodh do ghníomh chomh maith le do bhriathar."],
    note:"Mar a deir tú — direct relative with deir, which stays unlenited. The sheet's English is ambiguous: either 'practise what you preach' or 'go ahead and do it'." },
];

/* ---- 8. Reference: written form vs spoken form -------------------- */
const REDUX = [
  ["a dúirt mé","a dúirt me","Unstressed pronoun shortens; the síneadh fada is not realised."],
  ["rinne siad","rinn' siad","Final unstressed syllable drops; siad shortens."],
  ["oifig an phoist","oifig a' phoist","The n of the article disappears between words; the lenition it caused stays."],
  ["fear an tí","fear a' tí","Same again, with the genitive tí from teach."],
  ["Léim an Mhadaidh","Limavady","The anglicised spelling froze the reduced article as the middle a."],
  ["Port an Pheire","Portaferry","Same pattern. Also Portadown, Port an Dúnáin."],
  ["ag ól, ag éisteacht","ag ól, ag éisteacht","The g survives because a vowel follows."],
  ["ag siúl, ag teacht","a' siúl, a' teacht","Before a consonant the g drops."],
  ["chun an bhaile","'na bhaile","Three words collapse into one spoken shape."],
  ["agus","is, 's","Routine in speech and in song."],
];

/* ---- 9. Reference: Ulster forms vs standard ----------------------- */
const ULST = [
  ["teangaidh","teanga","language"],
  ["doiligh","deacair","difficult"],
  ["cluinstin","cloisteáil","hearing"],
  ["chluintear","cloistear","is heard"],
  ["cluin tú","cloiseann tú","you hear"],
  ["fosta","freisin","also"],
  ["cuid mhór","a lán, go leor","a lot"],
  ["go háirid","go háirithe","especially"],
  ["in amanna","uaireanta","at times"],
  ["toiseacht","tosú","starting"],
  ["cad chuige","cén fáth","why"],
  ["barraíocht","an iomarca","too much"],
  ["cuidigh le","cabhraigh le","help"],
  ["de dhíth ar","ag teastáil ó","needed by"],
  ["scairt a chur ar dhuine","glaoch a chur ar dhuine","to ring someone"],
  ["achan","gach aon","every"],
  ["madadh, gen. madaidh","madra","dog"],
  ["barúil","tuairim","opinion"],
  ["thig liom","is féidir liom","I can"],
  ["thiocfadh liom","d'fhéadfainn","I could"],
  ["domh","dom","to me"],
  ["daofa","dóibh","to them"],
  ["'na bhaile","abhaile","home(wards)"],
  ["ar an chúrsa","ar an gcúrsa","lenition vs eclipsis after preposition + an"],
  ["muna / munar","mura / murar","if not, unless"],
  ["chan fhaca","ní fhaca","I didn't see"],
  ["i dtólamh","i gcónaí","always"],
  ["goitse","gabh anseo","come here"],
];

/* ---- 10. Key vocabulary from the sheet ---------------------------- */
const S2VOCAB = [
  ["an teanga scríofa / labhartha","the written / spoken language","teanga","Scríofa and labhartha are verbal adjectives of scríobh and labhair. Ulster says an teangaidh."],
  ["forainm, pl. forainmneacha","pronoun","teanga","The topic of Antain's first point: the síneadh fada is written every time but not always pronounced long."],
  ["ainm briathartha","verbal noun","teanga","The form ag takes: ag ól, ag teacht, ag siúl."],
  ["an t-alt","the definite article","teanga","t- before a vowel on a masculine noun. Antain's second point: the n is written but often not heard."],
  ["réamhfhocal","preposition","teanga","Tasc 4A is built on the claim that the preposition carries the meaning in Irish."],
  ["cuspóir","object (grammar); aim, objective","teanga","Both senses appear in this sheet: mar chuspóir ag briathar in the script, cuspóirí na modúl in Tasc 6."],
  ["síneadh fada","the long accent","teanga","Plural sínte fada."],
  ["défhoghar","diphthong","teanga","dé- (two) + foghar (sound). Same root as foghraíocht."],
  ["guta / consan","vowel / consonant","teanga","The g of ag is heard before a guta, dropped before a consan."],
  ["logainm, pl. logainmneacha","place-name","teanga","log (place) + ainm. The study is logainmníocht; the state database is logainm.ie."],
  ["canúint / canúineolaíocht","dialect / dialectology","colaiste","One of your modules: Canúineolaíocht na Gaeilge."],
  ["teangeolaíocht","linguistics","colaiste","Phonology, morphology and syntax."],
  ["béaloideas","folklore","colaiste","Literally 'mouth-teaching'."],
  ["oidhreacht","heritage, inheritance","colaiste","Staidéar oidhreachta."],
  ["athbheochan","revival","colaiste","ath- (re-) + beochan (enlivening), from beo."],
  ["miontráchtas","dissertation","colaiste","mion- (small, detailed) + tráchtas (thesis)."],
  ["modh coinníollach","the conditional mood","gram","Tasc 5 is entirely in it."],
  ["léitheoireacht riachtanach","required reading","colaiste","Riachtanach = necessary, required; riachtanas = a requirement."],
  ["leagtha amach","laid out, set out","gram","Verbal adjective of leag amach. An rud a bhí leagtha amach ar an chúrsa."],
  ["aimsir scrúduithe","exam time","colaiste","Aimsir covers tense, time and weather. Scrúdú → genitive plural scrúduithe."],
  ["breith ar d'aiféala","the chance to undo a decision","nath","Aiféala = regret; breith ar is catching hold of it. Dá mbeadh breith ar m'aiféala agam = if I had my time over."],
  ["taighde","research","colaiste","Do chuid taighde féin a dhéanamh."],
  ["obair chúrsa","coursework","colaiste","Obair is feminine, so chúrsa lenites."],
  ["barraíocht béime","too much emphasis","tuairim","Leag béim ar = place emphasis on. Barraíocht is Ulster for an iomarca."],
  ["trasnaíl","overlap, crossing","colaiste","Genitive trasnaíola after cuid mhór."],
  ["fiúntas","worth, value","tuairim","Tá fiúntas le rud = there's value in something."],
  ["dúshlánach","challenging","tuairim","From dúshlán, a challenge."],
  ["cur chuige","approach, method","tuairim","The verbal noun of cuir chuig. An cur chuige teagaisc = the teaching approach."],
  ["baint truisle as duine","to trip someone up","nath","The script's baineann sin truisle astu. Bain X as Y = take X out of Y. Ulster truisle; standard tuisle."],
  ["sruth cainte","flow of speech","nath","Antain's reason for learning the reductions: go mbeidh sruth deas cainte leat."],
  ["is minic a deir daoine","people often say","gram","Fronting with is minic a. Note a deir, not a dheir — deir resists lenition."],
  ["ní hionann X agus Y","X and Y are not the same","gram","The copula with ionann. Appears in Tasc 8, Q3."],
  ["níor mhiste a rá go…","it might be no harm to say that…","gram","From ní miste (it's no harm). The script has nár mhiste a lua."],
  ["cé chomh … is atá","how … it is","gram","cé chomh bunúsach is atá sé. The chomh + agus/is + clause pattern."],
  ["thig liom / thiocfadh liom","I can / I could","gram","Ulster for is féidir liom / d'fhéadfainn. Impersonal: thiocfadh X a lua = X could be mentioned."],
  ["ag iarraidh go mbeidh","wanting that there will be","gram","When 'want' takes a clause rather than a thing, use ag iarraidh go + eclipsis."],
  ["nach dtiocfadh?","couldn't it? (tag question)","gram","Irish has no 'isn't it?' — the tag repeats the verb in the negative: nach bhfuil?, nach ndearna?"],
];

if (typeof window !== 'undefined') {
  window.S2 = { PREPSET, PRON, PRONLABEL, T4A, T4B, MARULES, CONDTABLE, T5PASSAGE,
                T6, MODULES, T7, T8, REDUX, ULST, S2VOCAB };
}
