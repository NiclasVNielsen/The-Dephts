const article = document.querySelector('#fn-info');
const allContent = [
    [
        'Rent vand og sanitet', 
        'Vandmangel påvirker mere end 40 procent af verdens befolkning. Det er et alarmerende tal, som  forventes at øge med de stigende globale temperaturer forårsaget af klimaændringerne.',
        'Selvom 2,1 milliarder mennesker har fået forbedret adgang til vand og sanitet siden 1990, er svindende forsyninger af rent drikkevand et stort problem, som påvirker alle kontinenter.',
        'I 2011 oplevede 41 lande ”vandstress”; ti af dem er tæt på at udtømme deres kilder med vedvarende ferskvand og må nu regne med ikke-konventionelle kilder. Tørke og ørkendannelse forværrer allerede disse tendenser. I 2050 forventes det, at hver fjerde er påvirket af tilbagevendende vandmangel.',
        'Universel adgang til sikkert og billigt drikkevand til alle inden 2030 kræver, at vi investerer i infrastruktur, leverer sanitære faciliteter og fremmer hygiejne på alle niveauer. Beskyttelse og genoprettelse af vandrelaterede økosystemer som skove, bjerge, vådområder og floder er afgørende, hvis vi skal afbøde vandmangel. Der er også brug for at styrke det internationale samarbejde for at fremme vandeffektivitet og støtte behandlingsteknologier i udviklingslande.',
        'Adgang til vand og sanitet er et af 17 verdensmål, som indgår i udviklingsdagsordenen for bæredygtig udvikling frem mod 2030. En integreret tilgang er afgørende for fremskridt på tværs af de forskellige mål.'
    ],
    [
        'Sikre baeredygtigt forbrug og produktionsformer',
        'Økonomisk vækst og bæredygtig udvikling kræver, at vi hurtigst muligt reducere vores fodaftryk på naturen ved at ændre på den måde vi producerer og forbruger vores varer og ressourcer på. Landbruget er den største forbruger af vand på verdensplan, og kunstig vanding står nu for ca. 70 procent af alt forbrug af ferskvand beregnet til menneskeligt brug.',
        'Effektiv styring af vores fælles naturressourcer, og måden vi bortskaffer giftigt affald og forurenende stoffer, er vigtige målsætninger for at nå dette mål. At tilskynde industrier, virksomheder og forbrugere til at genbruge og reducere deres affald er også vigtigt. Det samme er støtte til udviklingslande så de kan bevæge sig i en retning af mere bæredygtige forbrugsmønstre inden 2030.',
        'En stor del af verdens befolkning forbruger alt for lidt til at opfylde deres grundlæggende behov. En halvering af det globale madspild per indbygger på forhandler- og forbrugerniveau er vigtigt for at skabe mere effektive produktionsmetoder og forsyningskæder. Det kan forbedre fødevaresikkerheden og skubbe os i retning af en mere ressourceeffektiv økonomi.',
        'Ansvarligt forbrug og produktion er et af 17 verdensmål, som indgår i udviklingsdagsordenen for bæredygtig udvikling frem mod 2030. En integreret tilgang er afgørende for fremskridt på tværs af de forskellige mål.'
    ],
    [
        'Handle hurtigt for at bekaempe klimaforandringer og deres konsekvenser',
        'Alle lande i verden kan se de drastiske konsekvenser af klimaforandringer. Udledningen af drivhusgasser fortsætter med at stige, og udledningen er i dag mere end 50 procent højere end niveauet i 1990. Endvidere forårsager den globale opvarmning langvarige ændringer i vores klimasystem, som truer med uoprettelige konsekvenser, hvis vi ikke handler nu.',
        'De gennemsnitlige årlige tab fra tropiske cykloner og oversvømmelser kan tælles i hundreder milliarder kroner, og kræver en årlig investering på 40 milliarder kroner i katastrofestyring alene. Målet er at mobilisere ca. 680 miliarder kroner om året i 2020 for at imødekomme udviklingslandenes behov samt bidrage til afbødning af klimarelaterede katastrofer.',
        'En styrkelse af modstandsdygtighed og klimatilpasning i sårbare regioner, herunder bl.a. lande uden kyster og østater, skal gå hånd i hånd med oplysningsarbejde og større fokus på forebyggelsesindsatser i nationale politikker og strategier. Hvis den politisk vilje er til stede og den kombineres med en bred vifte af tekniske foranstaltninger, er det muligt at begrænse stigningen af den globale gennemsnitstemperatur til to grader over det før-industrielle niveau. Men det kræver en øjeblikkelig kollektiv indsats.',
        'Klimahandling er et af 17 verdensmål, som indgår i udviklingsdagsordenen for bæredygtig udvikling frem mod 2030. En integreret tilgang er afgørende for fremskridt på tværs af de forskellige mål.'
    ],
    [
        'Bevare og sikre baeredygtig brug af verdens have og deres ressourcer',
        'Verdenshavene - deres temperatur, kemi, strøm og liv – driver de globale systemer, som gør Jorden beboelig for mennesker. Håndteringen af denne livsvigtige ressource er afgørende for menneskeheden som helhed, men også for afbødningen af klimaforandringernes konsekvenser.',
        'Over tre milliarder menneskers levebrød er afhængig af biodiversiteten i hav- og kystområder. Men i dag bliver der overfisket med omkring 30 procent, hvilket er langt over det niveau, hvor fiskebestandene kan reproducere bæredygtigt.',
        'Verdenshavene absorberer omkring 30 procent af den CO2, der produceres af mennesker, og der er sket en stigning i havforsurning på 26 procent siden starten af den industrielle revolution. Havforurening, som hovedsagligt stammer fra landbaserede kilder, er ved at nå et alarmerende niveau. I gennemsnit er der 13.000 stykker plastikaffald på hver kvadratkilometer i havet.',
        'Verdensmålene for bæredygtig udvikling skaber en ramme for bæredygtig forvaltning og beskyttelse af havene og kystnære økosystemer i forhold til landbaseret forurening og adresserer påvirkningerne af havforsuring. Bedre bevarelse og bæredygtig udnyttelse af havbaserede ressourcer gennem international lovgivning vil også bidrage til at afbøde nogle af de udfordringer, som vores verdenshave står overfor.',
        'Livet i havet er et af 17 verdensmål, som indgår i udviklingsdagsordenen for bæredygtig udvikling frem mod 2030. En integreret tilgang er afgørende for fremskridt på tværs af de forskellige mål.'
    ]
];

function loadContent(contentNumber) {
    allContent[contentNumber].forEach((content, index) =>{
        let element;
        if(index == 0){
            element = document.createElement('h1');
        }else{
            element = document.createElement('p');
        }
        article.appendChild(element);
        article.appendChild(document.createElement('br'));
        element = element.appendChild(document.createTextNode(content));
    })
}

function queryCheck(query) {
    if(query == 6){
        loadContent(0);
    }else if(query == 12){
        loadContent(1);
    }else if(query == 13){
        loadContent(2);
    }else if(query == 14){
        loadContent(3);
    }else{
        window.location.href = 'verdensmaal_list.html'
    }
}

let queryString = window.location.search.substring(1);
queryCheck(queryString);