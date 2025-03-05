const schedule =
  '<strong>Programul de vot:</strong> Votul se va desfășura pe parcursul a trei zile la ambele scrutinuri, după programul de mai jos. Pentru alegătorii care se află la sediul secţiei de votare la închiderea acesteia, există posibilitatea prelungirii votării cu încă trei ore.</p><p><strong>TURUL 1:</strong></p><ul><li>Vineri, 2 mai, între 07:00 și 21:00 (ora locală)</li><li>Sâmbătă, 3 mai, între 07:00 și 21:00 (ora locală)</li><li>Duminică, 4 mai, între 07:00 (ora locală) și 21:00, ora locală, pentru tările din estul României, respectiv ora 21:00, ora României, pentru țările din vestul României. De exemplu, în următoarele țări, ora de închidere a votării este ora 21:00, ora României:<ul><li>Algeria, Austria, Belarus, Belgia, Bosnia şi Herţegovina, Cehia, Croaţia, Danemarca, Elveţia, Franţa, Germania, Italia, Luxemburg, Macedonia de Nord, Marea Britanie, Maroc, Muntenegru, Nigeria, Norvegia, Olanda, Polonia, Serbia, Slovacia, Slovenia, Spania, Suedia, Tunisia, Ungaria - secțiile de votare se închid la ora 20:00 (ora locală);</li><li>Islanda, Irlanda, Portugalia, Senegal - urnele se închid la ora 19:00 (ora locală);</li><li>Brazilia, Chile, Argentina, Uruguay - secțiile de votare se închid la ora 16:00 (ora locală);</li><li>Canada (Dieppe) - secțiile de votare se închid la ora 15:00 (ora locală);</li><li>Canada (Ottawa, Toronto, Montreal, Quebec), Columbia, Cuba, Peru, SUA (Washington, Miami, New York) - secțiile de votare se închid la ora 14:00 (ora locală);</li><li>Canada (Winnipeg), SUA (Chicago, Houston, Dallas) - secțiile de votare se închid la ora 13:00 (ora locală);</li><li>Canada (Calgary, Edmonton) - secțiile de votare se închid la ora 12:00 (ora locală);</li><li>SUA (San Francisco, Los Angeles), Canada (Vancouver) - secțiile de votare se închid la ora 11:00 (ora locală);</li></ul></li></ul><p><strong>TURUL 2:</strong></p><ul><li>Vineri, 16 mai, între 07:00 și 21:00 (ora locală)</li><li>Sâmbătă, 17 mai, între 07:00 și 21:00 (ora locală)</li><li>Duminică, 18 mai, între 07:00 (ora locală) și 21:00, ora locală, pentru tările din estul României, respectiv ora 21:00, ora României, pentru țările din vestul României. De exemplu, în următoarele țări, ora de închidere a votării este ora 21:00, ora României:<ul><li>Algeria, Austria, Belarus, Belgia, Bosnia şi Herţegovina, Cehia, Croaţia, Danemarca, Elveţia, Franţa, Germania, Italia, Luxemburg, Macedonia de Nord, Marea Britanie, Maroc, Muntenegru, Nigeria, Norvegia, Olanda, Polonia, Serbia, Slovacia, Slovenia, Spania, Suedia, Tunisia, Ungaria - secțiile de votare se închid la ora 20:00 (ora locală);</li><li>Islanda, Irlanda, Portugalia, Senegal - urnele se închid la ora 19:00 (ora locală);</li><li>Brazilia, Chile, Argentina, Uruguay - secțiile de votare se închid la ora 16:00 (ora locală);</li><li>Canada (Dieppe) - secțiile de votare se închid la ora 15:00 (ora locală);</li><li>Canada (Ottawa, Toronto, Montreal, Quebec), Columbia, Cuba, Peru, SUA (Washington, Miami, New York) - secțiile de votare se închid la ora 14:00 (ora locală);</li><li>Canada (Winnipeg), SUA (Chicago, Houston, Dallas) - secțiile de votare se închid la ora 13:00 (ora locală);</li><li>Canada (Calgary, Edmonton) - secțiile de votare se închid la ora 12:00 (ora locală);</li><li>SUA (San Francisco, Los Angeles), Canada (Vancouver) - secțiile de votare se închid la ora 11:00 (ora locală);</li></ul></li></ul>'
const documents =
  '<strong>Documente necesare:</strong> Pentru a vota ai nevoie de un act de identitate emis de statul român, valabil în ziua votului: cartea de identitate; cartea electronică de identitate; cartea de identitate provizorie; buletinul de identitate; paşaportul diplomatic; paşaportul diplomatic electronic; paşaportul de serviciu; paşaportul de serviciu electronic; paşaportul simplu; paşaportul simplu electronic; paşaportul simplu temporar; în cazul elevilor din şcolile militare, carnetul de serviciu militar.</p><p>'

export default {
  donate: 'Donează',
  how_to_contribute: 'Află cum poți contribui',
  helpMessage: `Vot Diaspora este una dintre zecile de soluții din Infrastructura Binelui construită de Code for Romania. Ajută-ne să le ținem în viață și să le creștem. <b>Trimite „PUTEM” prin SMS la <a href="sms://8864?body=PUTEM">8864</a></b> pentru a dona 4 euro lunar și ne poți ajuta să digitalizăm România construind sute de alte soluții la fel de utile.`,
  banner: 'O soluție Commit Global.',
  nav_about: 'Despre',
  guide_title:
    'Selectează din opțiunile de mai jos ce ți se potrivește pentru a afla informații despre cum să votezi la Alegerile Prezidențiale 2025:',
  votersGuide: {
    option_a_text: 'Am domiciliu sau reședința în străinătate',
    option_aa_text:
      'M-am înregistrat în registrul electoral, pe www.votstrăinătate.ro pentru vot la secție',
    text_aar:
      '<p>Termenul limită de înscriere în Registrul electoral ca alegător în străinătate la o secție de votare este de <strong>04.03.2025, ora 23:59:59</strong>. Înscrierea se face urmând instrucțiunile de aici <a href="https://www.votstrainatate.ro/presedinte" target="_blank">https://www.votstrainatate.ro/presedinte</a><p><p>Dacă te-ai înregistrat în Registrul electoral, poți să votezi la secția de votare la care ești înregistrat pe liste permanente sau la orice secție de votare din străinătate pe liste suplimentare.</p>' +
      documents +
      schedule,

    option_ab_text:
      'M-am înregistrat în registrul electoral pe www.votstrăinătate.ro pentru vot prin corespondență',

    text_abr:
      '<p>Termenul limită de înscriere în Registrul electoral ca alegător în străinătate la o secție de votare este de <strong>04.03.2025, ora 23:59:59</strong>. Înscrierea se face urmând instrucțiunile de aici <a href="https://www.votstrainatate.ro/presedinte" target="_blank">https://www.votstrainatate.ro/presedinte</a></p><p>Dacă ai ales să votezi prin corespondență la alegerile prezidențiale trebuie să te asiguri că expediezi plicul cu suficient timp înaintea datei votării, pentru ca acesta să ajungă cu cep puțin 3 zile înaintea datei votării, a sediul biroului electoral pentru votul prin corespondență. Plicurile ajunse după această dată nu vor mai fi luate în calcul.<p><p>Dacă ai fost informat de AEP că plicul tău nu a ajuns până la această dată, poți să votezi la orice secție de votare din străinătate pe listele suplimentare. Trebuie să ai la tine un document de identitate valabil precum buletinul sau pașaportul. Dacă ai votat deja prin corespondență nu poți vota din nou la secție. </p><p>În cazul în care votul tău nu a ajuns și te duci la secție.</p><p>Iată documentele de care ai nevoie și programul de vot: </p>' +
      documents +
      schedule,

    option_ac_text: 'Nu m-am înregistrat în registrul electoral',
    text_acr:
      '<p>Dacă nu te-ai înscris pentru vot la secție sau prin corespondență, poți vota la orice secție de votare din străinătate pe liste suplimentare.</p><p>Iată documentele de care ai nevoie și programul de vot:</p>' +
      documents +
      schedule,

    /// A1 END
    option_b_text: 'Nu am domiciliu sau reședința în străinătate',
    text_br:
      '<p>Dacă nu ai domiciliu sau reședință în străinătate, dar te afli în străinătate în zilele alegerilor, poți vota la orice secție de votare din străinătate pe liste suplimentare.</p><p>Iată documentele de care ai nevoie și programul de vot:</p><p>' +
      documents +
      schedule,

    callToAction: 'Alege una dintre opțiunile de mai jos',
  },
  pollingStationSearch: {
    question: 'Unde stai?',
    callToAction:
      '<p>Caută orașul în care locuiești pentru a afla care sunt cele mai apropiate secții de votare. Orice căutare pe harta din această platformă pentru noi înseamnă un cost suplimentar. Dacă te ajută Vot Diaspora, <a href="https://code4.ro/ro/doneaza/" target="_blank"> descoperă cum poți contribui </a> la proiectele Code for Romania, organizație care a dezvoltat acest site complet pro bono.</p>',
    searchPlaceholder:
      'Caută adresa ta pentru a afla la ce secție ești arondat',
    addressNotFound:
      'Nu am găsit secția corespunzătoare străzii tale. Iată cele mai apropiate secții de adresa căutată și lista străzilor arondate lor pentru a identifica unde anume trebuie să votezi.',
    hasPermanentResidence: 'Adresa căutată este arondată la secția:',
  },
  pollingStationCard: {
    distance: 'Distanța:',
    seeStreets: 'Vezi lista de străzi',
    pollingStationNumber: 'Secția de votare Nr.',
    address: 'Adresa:',
    assignedStreetsLabel:
      'La această secție pot vota persoanele care locuiesc pe următoarele străzi:',
  },
  back_button: 'Înapoi',
  back_to_start_button: 'Înapoi la început',
  introduction: `<p>În anul 2025 cetățenii români din diaspora vor avea mai multe zile la dispoziție pentru a putea vota în cadrul celor două tururi ale Alegerilor Prezidențiale. Dacă aveți sunteți în afara Romîniei în zilele alegerilor puteți vota la secțiile de votare organizate în diaspora dacă prezentați un act de identitate valid.</p><p>Folosind harta de mai jos veți putea vedea care este cea mai apropiată secție de votare de locul în care vă veți afla în zilele de vot.</p><p>Momentan harta conține secțiile de votare organizate la alegerile din 2024. Vom actualiza harta atunci când va fi publicată lista secțiilor de votare pentru Alegerile Prezidențiale din 2025.</p>`,
  about: {
    title: 'Despre proiect',
    text: `<p>Vot Diaspora este o platformă care simplifică pe înțelesul cetățenilor ghidul electoral al alegerilor la fiecare rundă electorală. Vot Diaspora este primul proiect pe care <a target="_blank" rel="noopener" href="https://code4.ro/">Code for Romania </a> l-a construit, începând cu anul 2016,  pentru a facilita accesul cetățenilor români de peste hotare la informație și a ajuta la o mai mare transparență a procesului electoral. La alegerile europarlamentare din 2019, aplicația a fost utilizată de 25% din totalul alegătorilor din diaspora, iar la ultima rundă a alegerilor prezidențiale, 185.000 alegători s-au informat prin votdiaspora.ro </p><p>Accesând votdiaspora.ro, toți cetățenii vor putea să verifice, alături de documentele și procedurile necesare pentru a vota la secție sau prin corespondență dacă se află în afara țării și care este secția la care sunt arondați în funcție de statutul fiecăruia. Website-ul va fi disponibil cu informații actualizate la fiecare nouă rundă electorală. Conținutul prezent pe platforma Vot Diaspora este realizat în parteneriat cu experții electorali ai Observatorului Electoral.</p><p>Vot Diaspora face parte din ecosistemul electoral dezvoltat de voluntarii Code for Romania, fiind cea de-a patra aplicație dedicată procesului electoral din țara noastră. Monitorizare Vot este aplicația web și mobilă dedicată observatorilor electorali independenți - prima aplicație de monitorizare electorală din România, fiind și cea mai utilizată de acest tip la nivel global. Lansată în 2016 aceasta a fost folosită la toate rundele electorale din ultimii patru ani și a fost preluată inclusiv în Polonia, încă din 2018, în cadrul primelor alegeri monitorizate independent în statul polonez. Am dezvoltat de asemenea și <a target="_blank" rel="noopener" href="https://rezultatevot.ro/">Rezultate Vot</a>, website lansat în 2019 cu ocazia alegerilor europarlamentare - o platformă care arată în timp real prezența la vot și rezultatele alegerilor. Din anul 2020 platforma va cuprinde și întregul istoric electoral post-decembrist și alte funcționalități în premieră pentru România, fiind nu doar locul unde vor putea fi aflate cel mai rapid și ușor rezultatele alegerilor, ci și un bun instrument de analiză comparativă a datelor.</p><p> Toate aplicațiile din ecosistemul dedicat alegerilor sunt dezvoltate pro bono de către voluntarii Code for Romania și menținute de echipa noastră permanentă. </p><p > Code for Romania este o organizație non-profit care dezvoltă pro bono soluții digitale pentru a rezolva probleme sociale. Înființată în anul 2016, Code for Romania a ajuns în prezent la o comunitate de peste 3000 de voluntari din sectorul IT care au dezvoltat zeci de aplicații web și mobile pentru România, precum cele din ecosistemul Covid-19, soluțiile de sprijin pentru refugiații din Ucraina, redirectioneaza.ro și altele. Din 2023 soluțiile Code for Romania sprijină persoanele vulnerabile din întreaga lume și este primul ONG românesc care scalează la nivel internațional</p>`,
    p1: 'Soluție proiectată în:',
    p2: 'dezvoltată pro bono de:',
    p3: 'în parteneriat cu:',
  },
  info_text:
    'Pe 6 decembrie au loc alegeri parlamentare în România. Cetățenii care locuiesc în diaspora sau se află în diaspora în tranzit în momentul alegerilor nu pot să își exprime votul, acest lucru fiind posibil doar pentru cetățenii care se află pe teritoriul României în aria circumscripției la care este arondată adresa lor de domiciliu. Dacă ai rude în țară, atunci încurajează-i să folosească Vot România pentru a afla în ce condiții pot să voteze, de ce documente au nevoie și unde se află secția la care sunt arondați.',
  map_text: `<p class="font-weight-bold m-0">În curând aici vei găsi o hartă și un buton de căutare care te vor ajuta să găsești secția de votare de care aparții.<br/> Dacă Vot România te ajută, fă o <a
  href="https://code4.ro/ro/doneaza/"
  target="_blank"
  rel="noopener noreferrer">donație oricât de mică</a> pentru Code for Romania care a dezvoltat acest site complet pro bono.</p>`,
  temp_text:
    ' Harta secțiilor de votare disponibilă la acest moment este harta secțiilor organizate pentru alegerile prezidențiale din 2019. Vom actualiza lista secțiilor imediat ce aceasta devine disponibilă.',
  social_share: {
    title: 'Informează-ți prietenii',
    text:
      'Distribuie aceste informații în social media pentru a ajuta cât mai mulți români să afle unde pot vota la prezidențiale din 2025, de ce documente au nevoie și alte sfaturi utile.',
  },
  donate_card: {
    title: 'Susține-ne',
    text:
      'Vot Diaspora este una dintre zecile de soluții din Infrastructura Binelui construită de Code for Romania.',
  },
  with_mae_support: 'Realizat cu sprijinul',
  text_day_we_go_home:
    '<p>Alegerile prezidențiale 2024 au fost anulate prin <a href="https://www.ccr.ro/wp-content/uploads/2024/12/Comunicat-de-presa-6-decembrie-2024.pdf" target="_blank">decizia</a> Curții Constituționale din 6 decembrie 2024.</p><p>Biroul Electoral Central a suspendat votul în diaspora pe 6 decembrie 2024.</p>',
  cookie: {
    title: 'Politica de cookies',
    text: `<p>Acest website foloseste cookie-uri pentru a furniza vizitatorilor o experienta mult mai buna de navigare si servicii adaptate nevoilor si interesului fiecaruia</p>
    <p>Cookie-urile au rolul de a facilita accesul si livrarea serviciilor folosite de utilizator de internet, cum ar fi personalizarea anumitor setari (limba, tara, preturi afisante in moneda nationala. Cookie-urile, pe baza informatiilor pe care le aduna despre utilizatori, ii ajuta pe detinatorii de site-uri sa isi eficientizeze produsul astfel incat acesta sa fie cat mai usor accesat de catre utilizatori, de asemenea cresc gradul de eficienta a publicitatii online si nu in ultimul rand pot permite aplicatiilor multimedia sau de alt tip de pe alte site-uri sa fie incluse intr-un anumit site pentru a face navigarea mai utila.</p>
    <h2>Ce este un cookie?</h2>
    <p>Cookie (browser cookie sau HTTP cookie) este un fisier de mici dimensiuni, format din litere si numere, care este stocat pe orice terminal cu acces la intrenet (computer, telefon mobil, tableta etc.) si este instalat prin solicitara emisa de catre un web-server unui browser (ex: Internet Explorer, Chrome). De retinut: Cookie-urile nu contin programe software, virusi sau spyware si nu pot accesa informatiile de pe hard drive-ul utilizatorului.</p>
    <p>Un cookie este format din nume si continut, durata de existenta a acestuia fiind determinata, putand fi accesat din nou de webserver in momentul in care un utilizator se intoarce pe website-ul asociat webserverului respectiv.</p>
    <p>Cookie-urile nu solicita informatii cu caracter personal si nu identifica personal utilizatorii de internet.</p>
    <p>Cookieuri de sesiune - acestea sunt stocate temporat in istoricul browser-ului care le memoreaza pana cand utilizatorul iese de pe web-siteul respectiv sau inchide fereastra browserului.</p>
    <p>Cookieuri Persistente - Acestea sunt stocate, in functie de durata prestabilita, pe hard-drive-ul unui computer sau echipament. Cookie-urile persistente le includ si pe cele plasate de un alt website decat cel pe care il viziteaza utilizatorul la momentul respectiv - cunoscute sub numele de third party cookies - care pot fi folosite in mod anonim pentru a memora interesele unui utilizator, astfel incat sa fie livrata publicitate cat mai relevanta pentru utilizatori.</p>
    <h2>Care sunt avantajele cookie-urilor?</h2>
    <p>Un cookie contine informatii care fac legatura intre utilizatori si un anume website. Daca un browser acceseaza acel web-server din nou, acesta poate citi informatia deja stocata si reactiona in consecinta.</p>
    <h2>Care este durata de viata a unui cookie?</h2>
    <p>Exista cookie-uri folosite exclusiv pentru o singura sesiune - acestea nu mai sunt retinute dupa ce utilizatorul iese de pe website. Cookie-uri permanente - sunt retinute si refolosite de fiecare data cand utilizatorul revine pe acel website, insa pot fi sterse oricand de utilizator.</p>
    <h2>Ce sunt cookie-urile plasate de terti?</h2>
    <p>Parti de continut sau servicii pot fi plasate pe website-ul accesat, de catre terte parti prin intermediul bannerelor, boxurilor sau linkurilor - iar toate aceste instrumente pot contine cookie-uri. Ele se numesc third party cookies pentru ca nu sunt plasate de proprietarul website-ului respectiv, iar furnizorii terti se supun legilor in vigoare si politicilor de confidentialitate ale detinatorului site-ului.</p>
    <h2>Cum sunt folosite cookie-urile de catre acest site?</h2>
    <p>O vizita pe acest site poate plasa cookie-uri in scopuri de:</p>
    <ul>
      <li>Cookie-uri folosite pentru finalizarea unei donatii</li>
      <li>Cookie-uri de analiza a vizitatorilor</li>
      <li>Cookie-uri de inregistrare</li>
      <li>Unele cookie-uri pot proveni de la terti.</li>
    </ul>
    <h2>Cookie-uri folosite pentru finalizarea unei donatii'</h2>
    <p>Completarea formularului de donatie cuprinde mai multi pasi. Pentru a tine evidenta unei persoane si pentru a-i oferi documentul necesar vom salva un fisier cookie ce ne ofera o metoda de a-l identifica (precum un numar de ordine). Pentru fiecare completare a formularului se va crea un cookie nou sau se va suprascrie cel deja existent.</p>
    <h2>Cookie-uri pentru analiza vizitatorilor</h2>
    <p>De fiecare data cand un utilizator viziteaza acest site softul de analytics furnizat de o terta parte genereaza un cookie de analiza a utilizatorului. Acest cookie ne spune daca ati mai vizitat acest site pana acum. Browser-ul ne va spune daca aveti acest cookie, iar daca nu, vom genera unul. Acesta permite monitorizarea utilizatorilor unici care ne viziteaza si cat de des o fac. Acest cookie nu poate fi folosit pentru a identifica persoanele fizice, ele sunt folosite doar in scop statistic.</p>
    <h2>Cookie-uri pentru inregistrare</h2>
    <p>Atunci cand va inregistrati pe acest site, generam un cookie cu datele de pe acesta. Cookie-ul ne ajuta in pasii urmatori pentru a comunica cu server-ul. Este posibil ca acesta sa ramana daca nu urmati toti pasii inregistrarii, dar el va fi rescris data urmatoare cand va veti inregistra din nou.</p>
    <h2>Alte cookie-uri ale tertelor parti</h2>
    <p>Pe unele pagini, tertii pot seta propriile cookie-uri anonime, in scopul de a urmari succesul unei aplicatii, sau pentru a customiza o aplicatie. Datorita modului de utilizare, acest site nu poate accesa aceste cookie-uri, la fel cum tertele parti nu pot accesa cookie-urile detinute de acest site. De exemplu, cand distribuiti o pagina folosind butonul pentru retelele sociale aflat pe acest site, acea retea sociala va inregistra activitatea dvs.</p>
    <h2>Ce tip de informatii sunt stocate si accesate prin intermediul cookie-urilor?</h2>
    <p>Cookie-urile pastreaza informatii intr-un fisier text de mici dimensiuni care permit unui website sa recunoasca un browser. Webserver-ul va recunoaste browserul pana cand cookie-ul expira sau este sters. Cookie-ul stocheaza informatii importante care imbunatatesc experienta de navigare pe Internet (ex: un numar de ordine pentru donatia ta).</p>
    <h2>De ce sunt cookie-urile importante pentru Internet?</h2>
    <p>Cookie-urile reprezinta punctul central al functionarii eficiente a Internetului, ajutand la generarea unei experiente de navigare prietenoase si adaptata preferintelor si intereselor fiecarui utilizator. Refuzarea sau dezactivarea cookieurilor poate face unele site-uri imposibil de folosit.</p>
    <p>Refuzarea sau dezactivarea cookie-urilor nu inseamna ca nu veti mai primi publicitate online - ci doar ca aceasta nu va mai putea tine cont de preferintele si interesele dvs, evidentiate prin comportamentul de navigare.</p>
    <h2>Securitate si probleme legate de confidentialitate</h2>
    <p>Cookie-urile NU sunt virusi! Ele folosesc formate tip plain text. Nu sunt alcatuite din bucati de cod asa ca nu pot fi executate nici nu pot auto-rula. In consecinta, nu se pot duplica sau replica pe alte retele pentru a se rula sau replica din nou. Deoarece nu pot indeplini aceste functii, nu pot fi considerate virusi.</p>
    <p>Cookie-urile pot fi totusi folosite pentru scopuri negative. Deoarece stocheaza informatii despre preferintele si istoricul de navigare al utilizatorilor, atat pe un anume site cat si pe mai multe alte siteuri, cookieurile pot fi folosite ca o forma de Spyware. Multe produse anti-spyware sunt constiente de acest fapt si in mod constant marcheaza cookie-urile pentru a fi sterse in cadrul procedurilor de stergere/scanare anti-virus/anti-spyware.</p>
    <p>In general browserele au integrate setari de confidentialitate care furnizeaza diferite nivele de acceptare a cookieurilor, perioada de valabilitate si stergere automata dupa ce utilizatorul a vizitat un anumit site.</p>
    <h2>Alte aspecte de securitate legate de cookie-uri</h2>
    <p>Deoarece protectia identitatii este foarte valoroasa si reprezinta dreptul fiecarui utilizator de internet, este indicat sa se stie ce eventuale probleme pot crea cookieurile. Pentru ca prin intermediul lor se transmit in mod constant in ambele sensuri informatii intre browser si website, daca un atacator sau persoana neautorizata intervine in parcursul de transmitere a datelor, informatiile continute de cookie pot fi interceptate. Desi foarte rar, acest lucru se poate intampla daca browserul se conecteaza la server folosind o retea necriptata (ex: o retea WiFi nesecurizata).</p>
    <p>Alte atacuri bazate pe cookie implica setari gresite ale cookieurilor pe servere. Daca un website nu solicita browserului sa foloseasca doar canale criptate, atacatorii pot folosi aceasta vulnerabilitate pentru a pacali browserele in a trimite informatii prin intermediul canalelor nesecurizate. Atacatorii utilizeaza apoi informatiile in scopuri de a accesa neautorizat anumite site-uri. Este foarte important sa fiti atenti in alegerea metodei celei mai potrivite de protectie a informatiilor personale.</p>
    <h2>Sfaturi pentru o navigare sigura si responsabila, bazata pe cookies</h2>
    <p>Datorita flexibilitatii lor si a faptului ca majoritatea dintre cele mai vizitate site-uri si cele mai mari folosesc cookieuri, acestea sunt aproape inevitabile. Dezactivarea cookie-urilor nu va permite accesul utilizatorului pe site-urile cele mai raspandite si utilizate printre care Youtube, Gmail, Yahoo si altele. Iata cateva sfaturi care va pot asigura ca navigati fara griji insa cu ajutorul cookie-urilor:</p>
    <ul>
      <li>Particularizati-va setarile browserului in ceea ce priveste cookie-urile pentru a reflecta un nivel confortabil pentru voi al securitatii utilizarii cookie-urilor. Daca nu va deranjeaza cookie-urile si sunteti singura persoana care utilizaeaza computerul, puteti seta termene lungi de expirare pentru stocarea istoricului de navigare si al datelor personale de acces. Daca impartiti accesul la calculator, puteti lua in considerare setarea browserului pentru a sterge datele individuale de navigare de fiecare data cand inchideti browserul. Aceasta este o varianta de a accesa site-urile care plaseaza cookie-uri si de a sterge orice informatie de vizitare la inchiderea sesiunii navigare.</li>
      <li>Instalati-va si updatati-va constant aplicatii antispyware.</li>
      <li>Multe dintre aplicatiile de detectare si prevenire a spyware-ului includ detectarea atacurilor pe site-uri. Astfel, impiedica browserul de la a accesa website-uri care ar putea sa exploateze vulnerabilitatile browserului sau sa descarce software periculos. Asigurati-va ca aveti browserul mereu updatat. Multe dintre atacurile bazate pe cookies se realizeaza exploatand punctele slabe ale versiunilor vechi ale browserelor.</li>
      <li>Cookie-urile sunt pretutindeni si nu pot fi evitate daca doriti sa va bucurati de acces pe cele mai bune si cele mai mari site-uri de pe Internet - locale sau internationale. Cu o intelegere clara a modului lor de operare si a beneficiilor pe care le aduc, puteti lua masurile necesare de securitate astel incat sa puteti naviga cu incredere pe internet.</li>
    </ul>
    <h2>Cum pot opri cookie-urile?</h2>
    <p>Dezactivarea si refuzul de a primi cookie-uri pot face anumite site-uri impracticabile sau dificil de vizitat si folosit. De asemenea, refuzul de a accepta cookie-uri nu inseamna ca nu veti mai primi/vedea publicitate online.</p>
    <p>Este posibila setarea din browser pentru ca aceste cookie-uri sa nu mai fie acceptate sau poti seta browserul sa accepte cookie-uri de la un site anume. Dar, de exemplu, daca nu doresti sa folosesti cookie-urile nu poti sa urmezi si pasii urmatori dupa inregistrarea completarea formularului.</p>
    <p>Toate browserele moderne ofera posibilitatea de a schimba setarile cookie-urilor. Aceste setari se gasesc de regula in optiuni sau in meniul de preferinte al browserului tau.</p>
    <p>Pentru setarile cookie-urilor generate de terti, si pentru mai multe informatii privind confidentialitatea legata de publicitatea online, IAB Romania pune la dispozitie urmatorul site:
      <a href="http://www.youronlinechoices.com/ro/">http://www.youronlinechoices.com/ro/</a>
    </p>`,
  },
}
