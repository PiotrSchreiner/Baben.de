"use client";

/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Lottie from "lottie-react";
import animation from "../animDatenschutz.json";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";

function Datenschutz() {
  return (
    <div>
      <div className="relative overflow-hidden ">
        <div className="relative px-4 sm:px-6 lg:px-56">
          <div className="text-lg max-w-prose mx-auto">
            <h1 className="lg:mt-12 mt-36 block lg:text-5xl text-4xl text-center leading-8 font-extrabold tracking-tight text-gray-200 sm:text-5xl">
              <span>Datenschutzerklärung</span>
            </h1>
          </div>
          <div style={{ width: "44%" }} className="mx-auto py-14">
            <Lottie
              className="w-200 h-200"
              loop={true}
              animationData={animation}
            />
            <div
              onClick={() =>
                document
                  ?.getElementById("1")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="text-white bg-transparent hover:text-blue-300 mx-2 cursor-pointer flex object-center justify-center"
            >
              <KeyboardDoubleArrowDownIcon className="w-16 h-16 mt-4" />
            </div>
          </div>
          <div
            id="1"
            className=" prose prose-indigo prose-lg text-gray-200 mx-auto"
          >
            <p className="text-center">Stand 14.10.2023</p>
            <h2 className="pt-10 pb-10 text-2xl font-bold leading-8 text-gray-200">
              I. Verarbeitung der Daten
            </h2>
            <p>
              Unter welchen Bedingungen die personenbezogenen Daten verarbeitet
              werden, erläutert der folgende Abschnitt.
            </p>
            <h3 className="pt-10 text-lg font-semibold leading-8 ">
              Rechtsgrundlage der Verarbeitung
            </h3>
            <p>
              Art. 6 Abs. 1 lit. a DSGVO dient als Rechtsgrundlage für
              Verarbeitungsvorgänge, bei denen eine Einwilligung für einen
              bestimmten Verarbeitungszweck einzuholen ist. Ist die Verarbeitung
              personenbezogener Daten zur Erfüllung eines Vertrags, dessen
              Vertragspartei die betroffene Person ist, erforderlich, wie dies
              beispielsweise bei Verarbeitungsvorgängen der Fall ist, die für
              eine Lieferung von Waren oder die Erbringung einer sonstigen
              Leistung oder Gegenleistung notwendig sind, so beruht die
              Verarbeitung auf Art. 6 Abs. 1 lit. b DSGVO. Gleiches gilt für
              solche Verarbeitungsvorgänge die zur Durchführung vorvertraglicher
              Maßnahmen erforderlich sind, etwa in Fällen von Anfragen zu
              Produkten oder Leistungen. Unterliegt das Unternehmen einer
              rechtlichen Verpflichtung durch welche eine Verarbeitung von
              personenbezogenen Daten erforderlich wird, wie beispielsweise zur
              Erfüllung steuerlicher Pflichten, so basiert die Verarbeitung auf
              Art. 6 Abs. 1 lit. c DSGVO. In seltenen Fällen könnte die
              Verarbeitung von personenbezogenen Daten erforderlich werden, um
              lebenswichtige Interessen der betroffenen Person oder einer
              anderen natürlichen Person zu schützen. Dies wäre beispielsweise
              der Fall, wenn eine Person verletzt werden würde und daraufhin
              sein Name, sein Alter, seine Krankenkassendaten oder sonstige
              lebenswichtige Informationen an einen Arzt, ein Krankenhaus oder
              sonstige Dritte weitergegeben werden müssten. Dann würde die
              Verarbeitung auf Art. 6 Abs. 1 lit. d DSGVO beruhen. Letztlich
              könnten Verarbeitungsvorgänge auf Art. 6 Abs. 1 lit. f DSGVO
              beruhen. Auf dieser Rechtsgrundlage basieren
              Verarbeitungsvorgänge, die von keiner der vorgenannten
              Rechtsgrundlagen erfasst werden, wenn die Verarbeitung zur Wahrung
              eines berechtigten Interesses des für die Verarbeitung
              Verantwortlichen oder eines Dritten erforderlich ist, sofern die
              Interessen, Grundrechte und Grundfreiheiten des Betroffenen nicht
              überwiegen.
            </p>
            <h3 className="pt-10 text-lg font-semibold leading-8 ">
              Dauer, für die die personenbezogenen Daten gespeichert werden
            </h3>
            <p>
              Das Kriterium für die Dauer der Speicherung von personenbezogenen
              Daten ist die jeweilige gesetzliche Aufbewahrungsfrist. Nach
              Ablauf der Frist werden die entsprechenden Daten routinemäßig
              gelöscht, sofern sie nicht mehr zur Vertragserfüllung oder
              Vertragsanbahnung erforderlich sind.
            </p>
            <h3 className="pt-10 text-lg font-semibold leading-8 ">
              Gesetzliche oder vertragliche Vorschriften zur Bereitstellung der
              personenbezogenen Daten; Erforderlichkeit für den
              Vertragsabschluss; Verpflichtung der betroffenen Person, die
              personenbezogenen Daten bereitzustellen; mögliche Folgen der
              Nichtbereitstellung
            </h3>
            <p>
              Die Bereitstellung personenbezogener Daten ist zum Teil gesetzlich
              vorgeschrieben (z.B. Steuervorschriften) oder ergibt sich auch aus
              vertraglichen Regelungen (z.B. Angaben zum Vertragspartner).
              Mitunter kann es zu einem Vertragsschluss erforderlich sein, dass
              eine betroffene Person personenbezogene Daten zur Verfügung
              stellt, die in der Folge verarbeitet werden müssen. Die betroffene
              Person ist beispielsweise verpflichtet personenbezogene Daten
              bereitzustellen, wenn mit ihr ein Vertrag geschlossen werden soll.
              Eine Nichtbereitstellung der personenbezogenen Daten hätte zur
              Folge, dass der Vertrag mit dem Betroffenen nicht geschlossen
              werden könnte.
            </p>

            <h3 className="pt-10 text-lg font-semibold leading-8">
              Bestehen einer automatisierten Entscheidungsfindung
            </h3>
            <p>
              Eine automatische Entscheidungsfindung oder ein Profiling findet
              nicht statt.
            </p>
            <h3>Erfassung von allgemeinen Daten und Informationen</h3>
            <p>
              Sofern mit dem Aufruf der Internetseite durch eine betroffene
              Person oder ein automatisiertes System eine Reihe von allgemeinen
              Daten und Informationen erfasst werden, gilt Folgendes: Diese
              allgemeinen Daten und Informationen werden in den Logfiles des
              Servers gespeichert. Erfasst werden können die verwendeten
              Browsertypen und Versionen, das vom zugreifenden System verwendete
              Betriebssystem, die Internetseite, von welcher ein zugreifendes
              System auf eine Internetseite gelangt (sogenannte Referrer), die
              Unterwebseiten, welche über ein zugreifendes System auf eine
              Internetseite angesteuert werden, das Datum und die Uhrzeit eines
              Zugriffs auf die Internetseite, eine Internet-Protokoll-Adresse
              (IP-Adresse), der Internet-Service-Provider des zugreifenden
              Systems und sonstige ähnliche Daten und Informationen, die der
              Gefahrenabwehr im Falle von Angriffen auf eine
              informationstechnologischen Systeme dienen. Bei der Nutzung dieser
              allgemeinen Daten und Informationen werden keine Rückschlüsse auf
              die betroffene Person gezogen. Diese Informationen werden vielmehr
              benötigt, um die Inhalte der Internetseite korrekt auszuliefern,
              die Inhalte der Internetseite sowie die Werbung für diese zu
              optimieren, die dauerhafte Funktionsfähigkeit der
              informationstechnologischen Systeme und der Technik der
              Internetseite zu gewährleisten sowie um Strafverfolgungsbehörden
              im Falle eines Cyberangriffes die zur Strafverfolgung notwendigen
              Informationen bereitzustellen. Diese anonym erhobenen Daten und
              Informationen werden einerseits statistisch und ferner mit dem
              Ziel ausgewertet, den Datenschutz und die Datensicherheit
              Unternehmen zu erhöhen, um letztlich ein optimales Schutzniveau
              für die verarbeiteten personenbezogenen Daten sicherzustellen. Die
              anonymen Daten der Server-Logfiles werden getrennt von allen durch
              eine betroffene Person angegebenen personenbezogenen Daten
              gespeichert.
            </p>
            <h3 className="pt-10 text-lg font-semibold leading-8">
              Kontaktmöglichkeit über die Internetseite
            </h3>
            <p>
              Enthält die Internetseite aufgrund gesetzlicher Vorschriften
              Angaben, die eine schnelle elektronische Kontaktaufnahme sowie
              eine unmittelbare Kommunikation ermöglichen, wird die
              E-Mail-Adresse erfasst. Sofern eine betroffene Person per E-Mail
              oder über ein Kontaktformular den Kontakt mit dem für die
              Verarbeitung Verantwortlichen aufnimmt, werden die von der
              betroffenen Person übermittelten personenbezogenen Daten
              automatisch gespeichert. Solche auf freiwilliger Basis von einer
              betroffenen Person an den für die Verarbeitung Verantwortlichen
              übermittelten personenbezogenen Daten werden für Zwecke der
              Bearbeitung oder der Kontaktaufnahme zur betroffenen Person
              gespeichert. Es erfolgt keine Weitergabe dieser personenbezogenen
              Daten an Dritte.
            </p>
            <h3>
              Routinemäßige Löschung und Sperrung von personenbezogenen Daten
            </h3>
            <p>
              Der für die Verarbeitung Verantwortliche verarbeitet und speichert
              personenbezogene Daten der betroffenen Person nur für den
              Zeitraum, der zur Erreichung des Speicherungszwecks erforderlich
              ist oder sofern dies durch den Europäischen Richtlinien- und
              Verordnungsgeber oder einen anderen Gesetzgeber in Gesetzen oder
              Vorschriften, welchen der für die Verarbeitung Verantwortliche
              unterliegt, vorgesehen wurde. Entfällt der Speicherungszweck oder
              läuft eine vom Europäischen Richtlinien- und Verordnungsgeber oder
              einem anderen zuständigen Gesetzgeber vorgeschriebene
              Speicherfrist ab, werden die personenbezogenen Daten routinemäßig
              und entsprechend den gesetzlichen Vorschriften gesperrt oder
              gelöscht.
            </p>
            <h2 className="pt-10 text-2xl font-bold leading-8 text-black">
              II. Rechte der betroffenen Person
            </h2>
            <p>
              Im Folgenden wird dargestellt, welche Rechte eine betroffene
              Person hat.
            </p>

            <h3 className="pt-10 text-lg font-semibold leading-8 ">
              Recht auf Bestätigung
            </h3>
            <p>
              Jede betroffene Person hat das Recht, von dem für die Verarbeitung
              Verantwortlichen eine Bestätigung darüber zu verlangen, ob sie
              betreffende personenbezogene Daten verarbeitet werden.
            </p>
            <h3 className="pt-10 text-lg font-semibold leading-8 ">
              Recht auf Auskunft
            </h3>
            <p>
              Jede von der Verarbeitung personenbezogener Daten betroffene
              Person hat das Recht, jederzeit von dem für die Verarbeitung
              Verantwortlichen unentgeltliche Auskunft über die zu seiner Person
              gespeicherten personenbezogenen Daten und eine Kopie dieser
              Auskunft zu erhalten. Ferner hat die betroffene Person das Recht
              auf Auskunft über:
            </p>
            <ul>
              <li>die Verarbeitungszwecke</li>
              <li>
                die Kategorien personenbezogener Daten, die verarbeitet werden
              </li>
              <li>
                die Empfänger oder Kategorien von Empfängern, gegenüber denen
                die
              </li>
              <li>
                personenbezogenen Daten offengelegt worden sind oder noch
                offengelegt werden, insbesondere bei Empfängern in Drittländern
                oder bei internationalen Organisationen
              </li>
              <li>
                falls möglich die geplante Dauer, für die die personenbezogenen
                Daten gespeichert werden, oder, falls dies nicht möglich ist,
                die Kriterien für die Festlegung dieser Dauer
              </li>
              <li>
                das Bestehen eines Rechts auf Berichtigung oder Löschung der sie
                betreffenden personenbezogenen Daten oder auf Einschränkung der
                Verarbeitung durch den Verantwortlichen oder eines
                Widerspruchsrechts gegen diese Verarbeitung
              </li>
              <li>
                das Bestehen eines Beschwerderechts bei einer Aufsichtsbehörde
              </li>
              <li>
                wenn die personenbezogenen Daten nicht bei der betroffenen
                Person erhoben werden: Alle verfügbaren Informationen über die
                Herkunft der Daten
              </li>
              <li>
                das Bestehen einer automatisierten Entscheidungsfindung
                einschließlich Profiling gemäß Artikel 22 Abs.1 und 4 DSGVO und
                aussagekräftige Informationen über die involvierte Logik sowie
                die Tragweite und die angestrebten Auswirkungen einer derartigen
                Verarbeitung für die betroffene Person. Ferner steht der
                betroffenen Person ein Auskunftsrecht darüber zu, ob
                personenbezogene Daten an ein Drittland oder an eine
                internationale Organisation übermittelt wurden. Sofern dies der
                Fall ist, so steht der betroffenen Person im Übrigen das Recht
                zu, Auskunft über die geeigneten Garantien im Zusammenhang mit
                der Übermittlung zu erhalten. Jede von der Verarbeitung
                personenbezogener Daten betroffene Person hat das Recht, die
                unverzügliche Berichtigung sie betreffender unrichtiger
                personenbezogener Daten zu verlangen. Ferner steht der
                betroffenen Person das Recht zu, unter Berücksichtigung der
                Zwecke der Verarbeitung, die Vervollständigung unvollständiger
                personenbezogener Daten - auch mittels einer ergänzenden
                Erklärung - zu verlangen. Recht auf Löschung (Recht auf
                Vergessen werden) Jede von der Verarbeitung personenbezogener
                Daten betroffene Person hat das Recht, von dem Verantwortlichen
                zu verlangen, dass die sie betreffenden personenbezogenen Daten
                unverzüglich gelöscht werden, sofern einer der folgenden Gründe
                zutrifft und soweit die Verarbeitung nicht erforderlich ist:
              </li>
              <li>
                die personenbezogenen Daten wurden für solche Zwecke erhoben
                oder auf sonstige Weise verarbeitet, für welche sie nicht mehr
                notwendig sind.
              </li>
              <li>
                die betroffene Person widerruft ihre Einwilligung, auf die sich
                die Verarbeitung gemäß Art. 6 Abs. 1 Buchstabe a DS-GVO oder
                Art. 9 Abs. 2 Buchstabe a DS-GVO stützte, und es fehlt an einer
                anderweitigen Rechtsgrundlage für die Verarbeitung.
              </li>
              <li>
                die betroffene Person legt gemäß Art. 21 Abs. 1 DS-GVO
                Widerspruch gegen die Verarbeitung ein, und es liegen keine
                vorrangigen berechtigten Gründe für die Verarbeitung vor, oder
                die betroffene Person legt gemäß Art. 21 Abs. 2 DS-GVO
                Widerspruch gegen die Verarbeitung ein.
              </li>
              <li>
                die personenbezogenen Daten wurden unrechtmäßig verarbeitet.
              </li>
              <li>
                die Löschung der personenbezogenen Daten ist zur Erfüllung einer
                rechtlichen Verpflichtung nach dem Unionsrecht oder dem Recht
                der Mitgliedstaaten erforderlich, dem der Verantwortliche
                unterliegt.
              </li>
              <li>
                die personenbezogenen Daten wurden in Bezug auf angebotene
                Dienste der Informationsgesellschaft gemäß Art. 8 Abs. 1 DS-GVO
                erhoben.
              </li>
            </ul>
            <ul>
              <li>
                die betroffene Person legt gemäß Art. 21 Abs. 1 DS-GVO
                Widerspruch gegen die Verarbeitung ein, und es liegen keine
                vorrangigen berechtigten Gründe für die Verarbeitung vor, oder
                die betroffene Person legt gemäß Art. 21 Abs. 2 DS-GVO
                Widerspruch gegen die Verarbeitung ein.
              </li>
              <li>
                die personenbezogenen Daten wurden unrechtmäßig verarbeitet.
              </li>
              <li>
                die Löschung der personenbezogenen Daten ist zur Erfüllung einer
                rechtlichen Verpflichtung nach dem Unionsrecht oder dem Recht
                der Mitgliedstaaten erforderlich, dem der Verantwortliche
                unterliegt.
              </li>
              <li>
                die personenbezogenen Daten wurden in Bezug auf angebotene
                Dienste der Informationsgesellschaft gemäß Art. 8 Abs. 1 DS-GVO
                erhoben.
              </li>
            </ul>
            <h3 className="pt-10 text-lg font-semibold leading-8">
              Recht auf Einschränkung der Verarbeitung
            </h3>
            <p>
              Jede von der Verarbeitung personenbezogener Daten betroffene
              Person hat das vom Europäischen Richtlinien- und Verordnungsgeber
              gewährte Recht, von dem Verantwortlichen die Einschränkung der
              Verarbeitung zu verlangen, wenn eine der folgenden Voraussetzungen
              gegeben ist:
            </p>
            <ul>
              <li>
                die Richtigkeit der personenbezogenen Daten wird von der
                betroffenen Person bestritten, und zwar für eine Dauer, die es
                dem Verantwortlichen ermöglicht, die Richtigkeit der
                personenbezogenen Daten zu überprüfen.
              </li>
              <li>
                die Verarbeitung ist unrechtmäßig, die betroffene Person lehnt
                die Löschung der personenbezogenen Daten ab und verlangt
                stattdessen die Einschränkung der Nutzung der personenbezogenen
                Daten.
              </li>
              <li>
                der Verantwortliche benötigt die personenbezogenen Daten für die
                Zwecke der Verarbeitung nicht länger, die betroffene Person
                benötigt sie jedoch zur Geltendmachung, Ausübung oder
                Verteidigung von Rechtsansprüchen.
              </li>
              <li>
                die betroffene Person hat Widerspruch gegen die Verarbeitung
                gem. Art. 21 Abs. 1 DSGVO eingelegt und es steht noch nicht
                fest, ob die berechtigten Gründe des Verantwortlichen gegenüber
                denen der betroffenen Person überwiegen.
              </li>
            </ul>
            <h3 className="pt-10 text-lg font-semibold leading-8">
              Recht auf Datenübertragbarkeit
            </h3>
            <p>
              Jede von der Verarbeitung personenbezogener Daten betroffene
              Person hat das gewährte Recht, die sie betreffenden
              personenbezogenen Daten, welche durch die betroffene Person einem
              Verantwortlichen bereitgestellt wurden, in einem strukturierten,
              gängigen und maschinenlesbaren Format zu erhalten. Sie hat
              außerdem das Recht, diese Daten einem anderen Verantwortlichen
              ohne Behinderung durch den Verantwortlichen, dem die
              personenbezogenen Daten bereitgestellt wurden, zu übermitteln,
              sofern die Verarbeitung auf der Einwilligung gemäß Art. 6 Abs. 1
              Buchstabe a DSGVO oder Art. 9 Abs. 2 Buchstabe a DSGVO oder auf
              einem Vertrag gemäß Art. 6 Abs. 1 Buchstabe b DSGVO beruht und die
              Verarbeitung mithilfe automatisierter Verfahren erfolgt, sofern
              die Verarbeitung nicht für die Wahrnehmung einer Aufgabe
              erforderlich ist, die im öffentlichen Interesse liegt oder in
              Ausübung öffentlicher Gewalt erfolgt, welche dem Verantwortlichen
              übertragen wurde. Ferner hat die betroffene Person bei der
              Ausübung ihres Rechts auf Datenübertragbarkeit gemäß Art. 20 Abs.
              1 DSGVO das Recht, zu erwirken, dass die personenbezogenen Daten
              direkt von einem Verantwortlichen an einen anderen
              Verantwortlichen übermittelt werden, soweit dies technisch machbar
              ist und sofern hiervon nicht die Rechte und Freiheiten anderer
              Personen beeinträchtigt werden.
            </p>
            <h3 className="pt-10 text-lg font-semibold leading-8">
              Recht auf Widerspruch
            </h3>
            <p>
              Jede von der Verarbeitung personenbezogener Daten betroffene
              Person hat das Recht, aus Gründen, die sich aus ihrer besonderen
              Situation ergeben, jederzeit gegen die Verarbeitung sie
              betreffender personenbezogener Daten, die aufgrund von Art. 6 Abs.
              1 Buchstaben e oder f DSGVO erfolgt, Widerspruch einzulegen. Dies
              gilt auch für ein auf diese Bestimmungen gestütztes Profiling. Im
              Falle eines Widerspruchs werden die personenbezogenen Daten nicht
              mehr verarbeitet, es sei denn, es bestehen zwingende schutzwürdige
              Gründe für die Verarbeitung, die den Interessen, Rechten und
              Freiheiten der betroffenen Person überwiegen, oder die
              Verarbeitung dient der Geltendmachung, Ausübung oder Verteidigung
              von Rechtsansprüchen. Zudem hat die betroffene Person das Recht,
              aus Gründen, die sich aus ihrer besonderen Situation ergeben,
              gegen die sie betreffende Verarbeitung personenbezogener Daten zu
              wissenschaftlichen oder historischen Forschungszwecken oder zu
              statistischen Zwecken gemäß Art. 89 Abs. 1 DSGVO erfolgen,
              Widerspruch einzulegen, es sei denn, eine solche Verarbeitung ist
              zur Erfüllung einer im öffentlichen Interesse liegenden Aufgabe
              erforderlich. Der betroffenen Person steht es ferner frei, im
              Zusammenhang mit der Nutzung von Diensten der
              Informationsgesellschaft ihr Widerspruchsrecht mittels
              automatisierter Verfahren auszuüben, bei denen technische
              Spezifikationen verwendet werden.
            </p>
            <h3 className="pt-10 text-lg font-semibold leading-8">
              Automatisierte Entscheidungen im Einzelfall einschließlich
              Profiling
            </h3>
            <p>
              Jede von der Verarbeitung personenbezogener Daten betroffene
              Person hat das Recht, nicht einer ausschließlich auf einer
              automatisierten Verarbeitung – einschließlich Profiling –
              beruhenden Entscheidung unterworfen zu werden, die ihr gegenüber
              rechtliche Wirkung entfaltet oder sie in ähnlicher Weise erheblich
              beeinträchtigt, sofern die Entscheidung nicht für den Abschluss
              oder die Erfüllung eines Vertrags zwischen der betroffenen Person
              und dem für die Verarbeitung Verantwortlichen erforderlich ist
              oder aufgrund anderer Rechtsvorschriften, denen der für die
              Verarbeitung Verantwortliche unterliegt, zulässig ist und diese
              Rechtsvorschriften angemessene Maßnahmen zur Wahrung der Rechte
              und Freiheiten sowie der berechtigten Interessen der betroffenen
              Person enthalten oder mit ausdrücklicher Einwilligung der
              betroffenen Person erfolgt. Ist die Entscheidung für den Abschluss
              oder die Erfüllung eines Vertrags zwischen der betroffenen Person
              und dem für die Verarbeitung Verantwortlichen erforderlich oder
              erfolgt sie mit ausdrücklicher Einwilligung der betroffenen
              Person, werden angemessene Maßnahmen getroffen, um die Rechte und
              Freiheiten sowie die berechtigten Interessen der betroffenen
              Person zu wahren, wozu mindestens das Recht auf Erwirkung des
              Eingreifens einer Person seitens des Verantwortlichen, auf
              Darlegung des eigenen Standpunkts und auf Anfechtung der
              Entscheidung gehört. Jede von der Verarbeitung personenbezogener
              Daten betroffene Person hat das Recht, eine Einwilligung zur
              Verarbeitung personenbezogener Daten jederzeit zu widerrufen.
            </p>
            <h3 className="pt-10 text-lg font-semibold leading-8">
              Datenschutz bei Bewerbungen und im Bewerbungsverfahren
            </h3>
            <p>
              Sofern der für die Verarbeitung Verantwortliche personenbezogenen
              Daten von Bewerbern zum Zwecke der Abwicklung des
              Bewerbungsverfahrens erhebt und verarbeitet gilt Folgendes: Die
              Verarbeitung kann auch auf elektronischem Wege erfolgen. Dies ist
              insbesondere dann der Fall, wenn ein Bewerber entsprechende
              Bewerbungsunterlagen auf dem elektronischen Wege, beispielsweise
              per E-Mail oder über ein auf der Internetseite befindliches
              Webformular, an den für die Verarbeitung Verantwortlichen
              übermittelt. Schließt der für die Verarbeitung Verantwortliche
              einen Anstellungsvertrag mit einem Bewerber, werden die
              übermittelten Daten zum Zwecke der Abwicklung des
              Beschäftigungsverhältnisses unter Beachtung der gesetzlichen
              Vorschriften gespeichert. Wird von dem für die Verarbeitung
              Verantwortlichen kein Anstellungsvertrag mit dem Bewerber
              geschlossen, so werden die Bewerbungsunterlagen zwei Monate nach
              Bekanntgabe der Absageentscheidung automatisch gelöscht, sofern
              einer Löschung keine sonstigen berechtigten Interessen des für die
              Verarbeitung Verantwortlichen entgegenstehen.
            </p>
            <h2 className="pt-10 text-2xl font-semibold leading-8 text-black">
              III. Besondere Bestimmungen zum Datenschutz bei Verwendung
              bestimmter Komponenten
            </h2>
            <p>
              Wie die Nutzung besonderer Komponenten datenschutzrechtlich
              umgesetzt wird, erläutert der folgende Abschnitt.
            </p>
            <h3 className="pt-10 text-lg font-semibold leading-8">
              Datenschutzbestimmungen zu Einsatz und Verwendung von Google
              Analytics (mit Anonymisierungsfunktion)
            </h3>
            <p>
              Sofern der für die Verarbeitung Verantwortliche auf Internetseiten
              die Komponente Google Analytics (mit Anonymisierungsfunktion)
              integriert hat, gilt Folgendes: Google Analytics ist ein
              Web-Analyse-Dienst. Web-Analyse ist die Erhebung, Sammlung und
              Auswertung von Daten über das Verhalten von Besuchern von
              Internetseiten. Ein Web-Analyse-Dienst erfasst unter anderem Daten
              darüber, von welcher Internetseite eine betroffene Person auf eine
              Internetseite gekommen ist (sogenannte Referrer), auf welche
              Unterseiten der Internetseite zugegriffen oder wie oft und für
              welche Verweildauer eine Unterseite betrachtet wurde. Eine
              Web-Analyse wird überwiegend zur Optimierung einer Internetseite
              und zur Kosten-Nutzen-Analyse von Internetwerbung eingesetzt.
              Betreibergesellschaft der Google-Analytics-Komponente ist die
              Google Inc., 1600 Amphitheatre Pkwy, Mountain View, CA 94043-1351,
              USA. Der für die Verarbeitung Verantwortliche verwendet für die
              Web-Analyse über Google Analytics den Zusatz "_gat._anonymizeIp".
              Mittels dieses Zusatzes wird die IP-Adresse des
              Internetanschlusses der betroffenen Person von Google gekürzt und
              anonymisiert, wenn der Zugriff auf der Internetseiten aus einem
              Mitgliedstaat der Europäischen Union oder aus einem anderen
              Vertragsstaat des Abkommens über den Europäischen Wirtschaftsraum
              erfolgt. Der Zweck der Google-Analytics-Komponente ist die Analyse
              der Besucherströme auf der Internetseite. Google nutzt die
              gewonnenen Daten und Informationen unter anderem dazu, die Nutzung
              der Internetseite auszuwerten, um für uns Online-Reports, welche
              die Aktivitäten auf den Internetseiten aufzeigen,
              zusammenzustellen, und um weitere mit der Nutzung der
              Internetseite in Verbindung stehende Dienstleistungen zu
              erbringen. Google Analytics setzt ein Cookie auf dem
              informationstechnologischen System der betroffenen Person. Was
              Cookies sind, wurde oben bereits erläutert. Mit Setzung des
              Cookies wird Google eine Analyse der Benutzung der Internetseite
              ermöglicht. Durch jeden Aufruf einer der Einzelseiten dieser
              Internetseite, die durch den für die Verarbeitung Verantwortlichen
              betrieben wird und auf welcher eine Google-Analytics-Komponente
              integriert wurde, wird der Internetbrowser auf dem
              informationstechnologischen System der betroffenen Person
              automatisch durch die jeweilige Google-Analytics-Komponente
              veranlasst, Daten zum Zwecke der Online-Analyse an Google zu
              übermitteln. Im Rahmen dieses technischen Verfahrens erhält Google
              Kenntnis über personenbezogene Daten, wie der IP-Adresse der
              betroffenen Person, die Google unter anderem dazu dienen, die
              Herkunft der Besucher und Klicks nachzuvollziehen und in der Folge
              Provisionsabrechnungen zu ermöglichen. Mittels des Cookies werden
              personenbezogene Informationen, beispielsweise die Zugriffszeit,
              der Ort, von welchem ein Zugriff ausging und die Häufigkeit der
              Besuche der Internetseite durch die betroffene Person,
              gespeichert. Bei jedem Besuch der Internetseiten werden diese
              personenbezogenen Daten, einschließlich der IP-Adresse des von der
              betroffenen Person genutzten Internetanschlusses, an Google in den
              Vereinigten Staaten von Amerika übertragen. Diese
              personenbezogenen Daten werden durch Google in den Vereinigten
              Staaten von Amerika gespeichert. Google gibt diese über das
              technische Verfahren erhobenen personenbezogenen Daten unter
              Umständen an Dritte weiter. Die betroffene Person kann die Setzung
              von Cookies durch die Internetseite, wie oben bereits dargestellt,
              jederzeit mittels einer entsprechenden Einstellung des genutzten
              Internetbrowsers verhindern und damit der Setzung von Cookies
              dauerhaft widersprechen. Eine solche Einstellung des genutzten
              Internetbrowsers würde auch verhindern, dass Google ein Cookie auf
              dem informationstechnologischen System der betroffenen Person
              setzt. Zudem kann ein von Google Analytics bereits gesetzter
              Cookie jederzeit über den Internetbrowser oder andere
              Softwareprogramme gelöscht werden. Ferner besteht für die
              betroffene Person die Möglichkeit, einer Erfassung der durch
              Google Analytics erzeugten, auf eine Nutzung dieser Internetseite
              bezogenen Daten sowie der Verarbeitung dieser Daten durch Google
              zu widersprechen und eine solche zu verhindern. Hierzu muss die
              betroffene Person ein Browser-Add-On unter dem Link{" "}
              <a href="https://tools.google.com/dlpage/gaoptout">
                https://tools.google.com/dlpage/gaoptout
              </a>{" "}
              herunterladen und installieren. Dieses Browser-Add-On teilt Google
              Analytics über JavaScript mit, dass keine Daten und Informationen
              zu den Besuchen von Internetseiten an Google Analytics übermittelt
              werden dürfen. Die Installation des Browser- Add-Ons wird von
              Google als Widerspruch gewertet. Wird das
              informationstechnologische System der betroffenen Person zu einem
              späteren Zeitpunkt gelöscht, formatiert oder neu installiert, muss
              durch die betroffene Person eine erneute Installation des
              Browser-Add-Ons erfolgen, um Google Analytics zu deaktivieren.
              Sofern das Browser-Add-On durch die betroffene Person oder einer
              anderen Person, die ihrem Machtbereich zuzurechnen ist,
              deinstalliert oder deaktiviert wird, besteht die Möglichkeit der
              Neuinstallation oder der erneuten Aktivierung des Browser-Add-Ons.
              Weitere Informationen und die geltenden Datenschutzbestimmungen
              von Google können unter{" "}
              <a href="https://www.google.de/intl/de/policies/privacy/">
                https://www.google.de/intl/de/policies/privacy/
              </a>{" "}
              und unter{" "}
              <a href="http://www.google.com/analytics/terms/de.html">
                http://www.google.com/analytics/terms/de.html
              </a>{" "}
              abgerufen werden. Google Analytics wird unter diesem Link{" "}
              <a href="https://www.google.com/intl/de_de/analytics">
                https://www.google.com/intl/de_de/analytics
              </a>{" "}
              genauer erläutert.
            </p>
            <h3 className="pt-10 text-lg font-semibold leading-8">
              Datenschutzbestimmungen zu Einsatz und Verwendung von Google-Ads
            </h3>
            <p>
              Sofern der für die Verarbeitung Verantwortliche auf Internetseiten
              Google Ads integriert hat, gilt Folgendes: Google Ads ist ein
              Dienst zur Internetwerbung, der es Werbetreibenden gestattet,
              sowohl Anzeigen in den Suchmaschinenergebnissen von Google als
              auch im Google-Werbenetzwerk zu schalten. Google Ads ermöglicht es
              einem Werbetreibenden, vorab bestimmte Schlüsselwörter
              festzulegen, mittels derer eine Anzeige in den
              Suchmaschinenergebnissen von Google ausschließlich dann angezeigt
              wird, wenn der Nutzer mit der Suchmaschine ein
              schlüsselwortrelevantes Suchergebnis abruft. Im
              Google-Werbenetzwerk werden die Anzeigen mittels eines
              automatischen Algorithmus und unter Beachtung der zuvor
              festgelegten Schlüsselwörter auf themenrelevanten Internetseiten
              verteilt. Betreibergesellschaft der Dienste von Google Ads ist die
              Google Inc., 1600 Amphitheatre Pkwy, Mountain View, CA 94043-1351,
              USA. Der Zweck von Google Ads ist die Bewerbung der Internetseite
              durch die Einblendung von interessenrelevanter Werbung auf den
              Internetseiten von Drittunternehmen und in den
              Suchmaschinenergebnissen der Suchmaschine Google und eine
              Einblendung von Fremdwerbung auf der Internetseite. Gelangt eine
              betroffene Person über eine Google-Anzeige auf die Internetseite,
              wird auf dem informationstechnologischen System der betroffenen
              Person durch Google ein sogenannter Conversion-Cookie abgelegt.
              Was Cookies sind, wurde oben bereits erläutert. Ein Conversion-
              Cookie verliert nach 30 Tagen seine Gültigkeit und dient nicht zur
              Identifikation der betroffenen Person. Über den Conversion-Cookie
              wird, sofern das Cookie noch nicht abgelaufen ist, nachvollzogen,
              ob bestimmte Unterseiten, beispielsweise der Warenkorb von einem
              Online-Shop-System, auf der Internetseite aufgerufen wurden. Durch
              den Conversion-Cookie kann sowohl der für die Verarbeitung
              Verantwortliche als auch Google nachvollziehen, ob eine betroffene
              Person, die über eine Ads- Anzeige auf die Internetseite gelangt
              ist, einen Umsatz generierte, also einen Warenkauf vollzogen oder
              abgebrochen hat. Die durch die Nutzung des Conversion-Cookies
              erhobenen Daten und Informationen werden von Google verwendet, um
              Besuchsstatistiken für die Internetseite zu erstellen. Diese
              Besuchsstatistiken werden durch wiederum genutzt, um die
              Gesamtanzahl der Nutzer zu ermitteln, welche über Ads-Anzeigen
              vermittelt wurden, also um den Erfolg oder Misserfolg der
              jeweiligen Ads-Anzeige zu ermitteln und um die Ads-Anzeigen für
              die Zukunft zu optimieren. Weder der für die Verarbeitung
              Verantwortliche noch andere Werbekunden von Google-Ads erhalten
              Informationen von Google, mittels derer die betroffene Person
              identifiziert werden könnte. Mittels des Conversion-Cookies werden
              personenbezogene Informationen, beispielsweise die durch die
              betroffene Person besuchten Internetseiten, gespeichert. Bei jedem
              Besuch der Internetseiten werden demnach personenbezogene Daten,
              einschließlich der IP-Adresse des von der betroffenen Person
              genutzten Internetanschlusses, an Google in den Vereinigten
              Staaten von Amerika übertragen. Diese personenbezogenen Daten
              werden durch Google in den Vereinigten Staaten von Amerika
              gespeichert. Google gibt diese über das technische Verfahren
              erhobenen personenbezogenen Daten unter Umständen an Dritte
              weiter. Die betroffene Person kann die Setzung von Cookies durch
              die Internetseite, wie oben bereits dargestellt, jederzeit mittels
              einer entsprechenden Einstellung des genutzten Internetbrowsers
              verhindern und damit der Setzung von Cookies dauerhaft
              widersprechen. Eine solche Einstellung des genutzten
              Internetbrowsers würde auch verhindern, dass Google einen
              Conversion-Cookie auf dem informationstechnologischen System der
              betroffenen Person setzt. Zudem kann ein von Google Ads bereits
              gesetzter Cookie jederzeit über den Internetbrowser oder andere
              Softwareprogramme gelöscht werden. Ferner besteht für die
              betroffene Person die Möglichkeit, der interessenbezogenen Werbung
              durch Google zu widersprechen. Hierzu muss die betroffene Person
              von jedem der von ihr genutzten Internetbrowser aus den Link
              "www.google.de/settings/ads" aufrufen und dort die gewünschten
              Einstellungen vornehmen. Weitere Informationen und die geltenden
              Datenschutzbestimmungen von Google können unter{" "}
              <a href="https://www.google.de/intl/de/policies/privacy/">
                https://www.google.de/intl/de/policies/privacy/
              </a>{" "}
              abgerufen werden.
            </p>
            <h3 className="pt-10 text-lg font-semibold leading-8 ">
              Datenschutzbestimmungen zu Einsatz und Verwendung von X (ehemals
              Twitter)
            </h3>
            <p>
              Sofern der der für die Verarbeitung Verantwortliche auf der
              Internetseite Komponenten von X integriert, gilt Folgendes: X als
              multilingualer öffentlich zugänglicher Mikroblogging-Dienst
              ermöglicht dem Nutzer sogenannte Tweets Kurznachrichten, die auf
              140 Zeichen begrenzt sind zu veröffentlichen und zu verbreiten.
              Diese Kurznachrichten sind für jedermann, also auch für nicht bei
              X angemeldete Personen abrufbar. Die Tweets werden aber auch den
              sogenannten Followern des jeweiligen Nutzers angezeigt. Follower
              sind andere X-Nutzer, die den Tweets eines Nutzers folgen. Ferner
              ermöglicht X über Hashtags, Verlinkungen oder Retweets die
              Ansprache eines breiten Publikums. Betreibergesellschaft von X ist
              die X, Inc., 1355 Market Street, Suite 900, San Francisco, CA
              94103, USA. Durch jeden Aufruf einer der Einzelseiten der
              Internetseite, die durch den für die Verarbeitung Verantwortlichen
              betrieben wird und auf welcher eine X-Komponente (X-Button)
              integriert wurde, wird der Internetbrowser auf dem
              informationstechnologischen System der betroffenen Person
              automatisch durch die jeweilige X-Komponente veranlasst, eine
              Darstellung der entsprechenden X-Komponente von X herunterzuladen.
              Weitere Informationen zu den X-Buttons sind unter{" "}
              <a href="https://about.x.com/de/resources/buttons">
                https://about.x.com/de/resources/buttons
              </a>{" "}
              abrufbar. Im Rahmen dieses technischen Verfahrens erhält X
              Kenntnis darüber, welche konkrete Unterseite der Internetseite
              durch die betroffene Person besucht wird. Zweck der Integration
              der X-Komponente ist es, den Nutzern eine Weiterverbreitung der
              Inhalte diese Internetseite zu ermöglichen, diese Internetseite in
              der digitalen Welt bekannt zu machen und die Besucherzahlen zu
              erhöhen. Sofern die betroffene Person gleichzeitig bei X
              eingeloggt ist, erkennt X mit jedem Aufruf der Internetseite durch
              die betroffene Person und während der gesamten Dauer des
              jeweiligen Aufenthaltes auf der Internetseite, welche konkrete
              Unterseite der Internetseite die betroffene Person besucht. Diese
              Informationen werden durch die X-Komponente gesammelt und durch X
              dem jeweiligen X-Account der betroffenen Person zugeordnet.
              Betätigt die betroffene Person einen der auf einer Internetseite
              integrierten X-Buttons, werden die damit übertragenen Daten und
              Informationen dem persönlichen X-Benutzerkonto der betroffenen
              Person zugeordnet und von X gespeichert und verarbeitet. X erhält
              über die X-Komponente immer dann eine Information darüber, dass
              die betroffene Person die Internetseite besucht hat, wenn die
              betroffene Person zum Zeitpunkt des Aufrufs die Internetseite
              gleichzeitig bei X eingeloggt ist; dies findet unabhängig davon
              statt, ob die betroffene Person die X-Komponente anklickt oder
              nicht. Ist eine derartige Übermittlung dieser Informationen an X
              von der betroffenen Person nicht gewollt, kann diese die
              Übermittlung dadurch verhindern, dass sie sich vor einem Aufruf
              einer Internetseite aus ihrem X-Account ausloggt. Die geltenden
              Datenschutzbestimmungen von X sind unter{" "}
              <a href="https://x.com/privacy?lang=de">
                https://x.com/privacy?lang=de
              </a>{" "}
              abrufbar.
            </p>
            <h3 className="pt-10 text-lg font-semibold leading-8 ">
              Datenschutzbestimmungen zu Einsatz und Verwendung von XING
            </h3>
            <p>
              Sofern der für die Verarbeitung Verantwortliche auf der
              Internetseite Komponenten von XING integriert, gilt Folgendes:
              XING ermöglicht als internetbasiertes soziales Netzwerk die
              Konnektierung der Nutzer mit bestehenden Geschäftskontakten sowie
              das Knüpfen von neuen Businesskontakten. Die einzelnen Nutzer
              können bei XING ein persönliches Profil von sich anlegen.
              Unternehmen können beispielsweise Unternehmensprofile erstellen
              oder Stellenangebote auf XING veröffentlichen.
              Betreibergesellschaft von XING ist die XING AG, Dammtorstraße 30,
              20354 Hamburg, Deutschland. Durch jeden Aufruf einer der
              Einzelseiten der Internetseite, die durch den für die Verarbeitung
              Verantwortlichen betrieben wird und auf welcher eine
              XING-Komponente (XING-Plug-In) integriert wurde, wird der
              Internetbrowser auf dem informationstechnologischen System der
              betroffenen Person automatisch durch die jeweilige XING-Komponente
              veranlasst, eine Darstellung der entsprechenden Xing-Komponente
              von XING herunterzuladen. Weitere Informationen zum den
              XING-Plug-Ins können unter{" "}
              <a href="https://dev.xing.com/plugins">
                https://dev.xing.com/plugins
              </a>{" "}
              abgerufen werden. Im Rahmen dieses technischen Verfahrens erhält
              XING Kenntnis darüber, welche konkrete Unterseite einer
              Internetseite durch die betroffene Person besucht wird. Sofern die
              betroffene Person gleichzeitig bei XING eingeloggt ist, erkennt
              XING mit jedem Aufruf der Internetseite durch die betroffene
              Person und während der gesamten Dauer des jeweiligen Aufenthaltes
              auf der Internetseite, welche konkrete Unterseite der
              Internetseite die betroffene Person besucht. Diese Informationen
              werden durch die XING-Komponente gesammelt und durch XING dem
              jeweiligen XING-Account der betroffenen Person zugeordnet.
              Betätigt die betroffene Person einen der auf der Internetseite
              integrierten XING-Buttons, beispielsweise den "Share"-Button,
              ordnet XING diese Information dem persönlichen XING-Benutzerkonto
              der betroffenen Person zu und speichert diese personenbezogenen
              Daten. XING erhält über die XING-Komponente immer dann eine
              Information darüber, dass die betroffene Person die Internetseite
              besucht hat, wenn die betroffene Person zum Zeitpunkt des Aufrufs
              die Internetseite gleichzeitig bei XING eingeloggt ist; dies
              findet unabhängig davon statt, ob die betroffene Person die
              XING-Komponente anklickt oder nicht. Ist eine derartige
              Übermittlung dieser Informationen an XING von der betroffenen
              Person nicht gewollt, kann diese die Übermittlung dadurch
              verhindern, dass sie sich vor einem Aufruf einer Internetseite aus
              ihrem XING-Account ausloggt. Die von XING veröffentlichten
              Datenschutzbestimmungen, die unter{" "}
              <a href="https://www.xing.com/privacy">
                https://www.xing.com/ privacy
              </a>{" "}
              abrufbar sind, geben Aufschluss über die Erhebung, Verarbeitung
              und Nutzung personenbezogener Daten durch XING. Ferner hat XING
              unter{" "}
              <a href="https://dev.xing.com/plugins/share_button/privacy_policy">
                https://www.xing.com/app/share?op=data_protection
              </a>{" "}
              Datenschutzhinweise für den XING-Share-Button veröffentlicht.
            </p>
            <h3 className="pt-10 text-lg font-semibold leading-8">
              Datenschutzbestimmungen zu Einsatz und Verwendung von Linkedln
            </h3>
            <p>
              Sofern der der für die Verarbeitung Verantwortliche auf der
              Internetseite Komponenten der Linkedln Corporation integriert,
              gilt Folgendes. Linkedln als internetbasiertes soziales Netzwerk
              ermöglicht eine Konnektierung der Nutzer mit bestehenden
              Geschäftskontakten sowie das Knüpfen von neuen Businesskontakten.
              Über 400 Millionen registrierte Personen nutzen Linkedln in mehr
              als 200 Ländern. Damit ist Linkedln derzeit die größte Plattform
              für Businesskontakte und eine der meistbesuchten Internetseiten
              der Welt. Betreibergesellschaft von Linkedln ist die Linkedln
              Corporation, 2029 Stierlin Court Mountain View, CA 94043, USA. Für
              Datenschutzangelegenheiten außerhalb der USA ist Linkedln Ireland,
              Privacy Policy Issues, Wilton Plaza, Wilton Place, Dublin 2,
              Ireland, zuständig. Bei jedem einzelnen Abruf der Internetseite,
              die mit einer Linkedln-Komponente (Linkedln-Plug-In) ausgestattet
              ist, veranlasst diese Komponente, dass der von der betroffenen
              Person verwendete Browser eine entsprechende Darstellung der
              Komponente von Linkedln herunterlädt. Weitere Informationen zu den
              Linkedln-Plug-Ins können unter{" "}
              <a href="https://developer.linkedin.com">
                https://developer.linkedin.com/
              </a>{" "}
              plugins abgerufen werden. Im Rahmen dieses technischen Verfahrens
              erhält Linkedln Kenntnis darüber, welche konkrete Unterseite einer
              Internetseite durch die betroffene Person besucht wird. Sofern die
              betroffene Person gleichzeitig bei Linkedln eingeloggt ist,
              erkennt Linkedln mit jedem Aufruf der Internetseite durch die
              betroffene Person und während der gesamten Dauer des jeweiligen
              Aufenthaltes auf der Internetseite, welche konkrete Unterseite der
              Internetseite die betroffene Person besucht. Diese Informationen
              werden durch die Linkedln-Komponente gesammelt und durch Linkedln
              dem jeweiligen Linkedln-Account der betroffenen Person zugeordnet.
              Betätigt die betroffene Person einen auf der Internetseite
              integrierten Linkedln- Button, ordnet Linkedln diese Information
              dem persönlichen Linkedln-Benutzerkonto der betroffenen Person zu
              und speichert diese personenbezogenen Daten. Linkedln erhält über
              die Linkedln-Komponente immer dann eine Information darüber, dass
              die betroffene Person die Internetseite besucht hat, wenn die
              betroffene Person zum Zeitpunkt des Aufrufes der Internetseite
              gleichzeitig bei Linkedln eingeloggt ist; dies findet unabhängig
              davon statt, ob die betroffene Person die Linkedln-Komponente
              anklickt oder nicht. Ist eine derartige Übermittlung dieser
              Informationen an Linkedln von der betroffenen Person nicht
              gewollt, kann diese die Übermittlung dadurch verhindern, dass sie
              sich vor einem Aufruf einer Internetseite aus ihrem
              Linkedln-Account ausloggt. Linkedln bietet unter{" "}
              <a href="https://www.linkedin.com/legal/privacy-policy">
                https://www.linkedin.com/legal/privacy-policy
              </a>{" "}
              die Möglichkeit, E-Mail-Nachrichten, SMS-Nachrichten und
              zielgerichtete Anzeigen abzubestellen sowie Anzeigen-
              Einstellungen zu verwalten. Linkedln nutzt ferner Partner wie
              Quantcast, Google Analytics, BlueKai, DoubleClick, Nielsen,
              Comscore, Eloqua und Lotame, die Cookies setzen können. Solche
              Cookies können unter{" "}
              <a href="https://www.linkedin.com/legal/cookie-policy">
                https://www.linkedin.com/legal/cookie-policy
              </a>{" "}
              abgelehnt werden. Die geltenden Datenschutzbestimmungen von
              Linkedln sind unter{" "}
              <a href="https://www.linkedin.com/legal/privacy-policy">
                https://www.linkedin.com/legal/privacy-policy
              </a>{" "}
              abrufbar. Die Cookie-Richtlinie von Linkedln ist unter{" "}
              <a href="https://www.linkedin.com/legal/cookie-policy">
                https://www.linkedin.com/legal/cookie-policy
              </a>{" "}
              abrufbar.
            </p>
            <h3 className="pt-10 text-lg font-semibold leading-8">
              Datenschutzbestimmungen zu Einsatz und Verwendung von Facebook
            </h3>
            <p>
              Sofern der für die Verarbeitung Verantwortliche auf Internetseiten
              Komponenten des Unternehmens Facebook integriert hat, gilt
              Folgendes: Facebook als soziales Netzwerk ist ein im Internet
              betriebener sozialer Treffpunkt, eine Online-Gemeinschaft, die es
              den Nutzern in der Regel ermöglicht, untereinander zu
              kommunizieren und im virtuellen Raum zu interagieren. Ein soziales
              Netzwerk kann als Plattform zum Austausch von Meinungen und
              Erfahrungen dienen oder ermöglicht es der Internetgemeinschaft,
              persönliche oder unternehmensbezogene Informationen
              bereitzustellen. Facebook ermöglicht den Nutzern des sozialen
              Netzwerkes unter anderem die Erstellung von privaten Profilen, den
              Upload von Fotos und eine Vernetzung über Freundschaftsanfragen.
              Betreibergesellschaft von Facebook ist die Facebook, Inc., 1
              Hacker Way, Menlo Park, CA 94025, USA. Für die Verarbeitung
              personenbezogener Daten Verantwortlicher ist, wenn eine betroffene
              Person außerhalb der USA oder Kanada lebt, die Facebook Ireland
              Ltd., 4 Grand Canal Square, Grand Canal Harbour, Dublin 2,
              Ireland. Durch jeden Aufruf einer der Einzelseiten dieser
              Internetseite, die durch den für die Verarbeitung Verantwortlichen
              betrieben wird und auf welcher eine Facebook-Komponente
              (Facebook-Plug-In) integriert wurde, wird der Internetbrowser auf
              dem informationstechnologischen System der betroffenen Person
              automatisch durch die jeweilige Facebook-Komponente veranlasst,
              eine Darstellung der entsprechenden Facebook-Komponente von
              Facebook herunterzuladen. Eine Gesamtübersicht über alle
              Facebook-Plug-Ins kann unter{" "}
              <a href="https://developers.facebook.com/docs/plugins/?locale=de_DE">
                https://developers.facebook.com/docs/plugins/?locale=de_DE
              </a>{" "}
              abgerufen werden. Im Rahmen dieses technischen Verfahrens erhält
              Facebook Kenntnis darüber, welche konkrete Unterseite durch die
              betroffene Person besucht wird. Sofern die betroffene Person
              gleichzeitig bei Facebook eingeloggt ist, erkennt Facebook mit
              jedem Aufruf einer Internetseite durch die betroffene Person und
              während der gesamten Dauer des jeweiligen Aufenthaltes auf der
              Internetseite, welche konkrete Unterseite der Internetseite die
              betroffene Person besucht. Diese Informationen werden durch die
              Facebook-Komponente gesammelt und durch Facebook dem jeweiligen
              Facebook-Account der betroffenen Person zugeordnet. Betätigt die
              betroffene Person auf der Internetseite integrierte
              Facebook-Buttons, beispielsweise den "Gefällt mir"-Button, oder
              gibt die betroffene Person einen Kommentar ab, ordnet Facebook
              diese Information dem persönlichen Facebook-Benutzerkonto der
              betroffenen Person zu und speichert diese personenbezogenen Daten.
              Facebook erhält über die Facebook-Komponente immer dann eine
              Information darüber, dass die betroffene Person die Internetseite
              besucht hat, wenn die betroffene Person zum Zeitpunkt des Aufrufs
              die Internetseite gleichzeitig bei Facebook eingeloggt ist; dies
              findet unabhängig davon statt, ob die betroffene Person die
              Facebook-Komponente anklickt oder nicht. Ist eine derartige
              Übermittlung dieser Informationen an Facebook von der betroffenen
              Person nicht gewollt, kann diese die Übermittlung dadurch
              verhindern, dass sie sich vor einem Aufruf einer Internetseite aus
              ihrem Facebook-Account ausloggt. Die von Facebook veröffentlichte
              Datenrichtlinie, die unter{" "}
              <a href="https://www.facebook.com/about/privacy">
                https://www.facebook.com/about/privacy/
              </a>{" "}
              abrufbar ist, gibt Aufschluss über die Erhebung, Verarbeitung und
              Nutzung personenbezogener Daten durch Facebook. Ferner wird dort
              erläutert, welche Einstellungsmöglichkeiten Facebook zum Schutz
              der Privatsphäre der betroffenen Person bietet. Zudem sind
              unterschiedliche Applikationen erhältlich, die es ermöglichen,
              eine Datenübermittlung an Facebook zu unterdrücken. Solche
              Applikationen können durch die betroffene Person genutzt werden,
              um eine Datenübermittlung an Facebook zu unterdrücken.
            </p>
            <h3 className="pt-10 text-lg font-semibold leading-8">
              Datenschutzbestimmungen zu Einsatz und Verwendung von Instagram
            </h3>
            <p>
              Sofern der der für die Verarbeitung Verantwortliche auf der
              Internetseite Komponenten des Dienstes Instagram integriert hat,
              gilt Folgendes: Instagram als audiovisuelle Plattform ermöglicht
              den Nutzern das Teilen von Fotos und Videos und zudem eine
              Weiterverbreitung solcher Daten in anderen sozialen Netzwerken.
              Betreibergesellschaft der Dienste von Instagram ist die Instagram
              LLC, 1 Hacker Way, Building 14 First Floor, Menlo Park, CA, USA.
              Durch jeden Aufruf einer der Einzelseiten der Internetseite, die
              durch den für die Verarbeitung Verantwortlichen betrieben wird und
              auf welcher eine Instagram-Komponente (Insta-Button) integriert
              wurde, wird der Internetbrowser auf dem
              informationstechnologischen System der betroffenen Person
              automatisch durch die jeweilige Instagram-Komponente veranlasst,
              eine Darstellung der entsprechenden Komponente von Instagram
              herunterzuladen. Im Rahmen dieses technischen Verfahrens erhält
              Instagram Kenntnis darüber, welche konkrete Unterseite der
              Internetseite durch die betroffene Person besucht wird. Sofern die
              betroffene Person gleichzeitig bei Instagram eingeloggt ist,
              erkennt Instagram mit jedem Aufruf der Internetseite durch die
              betroffene Person und während der gesamten Dauer des jeweiligen
              Aufenthaltes auf der Internetseite, welche konkrete Unterseite die
              betroffene Person besucht. Diese Informationen werden durch die
              Instagram-Komponente gesammelt und durch Instagram dem jeweiligen
              Instagram-Account der betroffenen Person zugeordnet. Betätigt die
              betroffene Person einen der auf der Internetseite integrierten
              Instagram-Buttons, werden die damit übertragenen Daten und
              Informationen dem persönlichen Instagram-Benutzerkonto der
              betroffenen Person zugeordnet und von Instagram gespeichert und
              verarbeitet. Instagram erhält über die Instagram-Komponente immer
              dann eine Information darüber, dass die betroffene Person die
              Internetseite besucht hat, wenn die betroffene Person zum
              Zeitpunkt des Aufrufs der Internetseite gleichzeitig bei Instagram
              eingeloggt ist; dies findet unabhängig davon statt, ob die
              betroffene Person die Instagram-Komponente anklickt oder nicht.
              Ist eine derartige Übermittlung dieser Informationen an Instagram
              von der betroffenen Person nicht gewollt, kann diese die
              Übermittlung dadurch verhindern, dass sie sich vor einem Aufruf
              einer Internetseite aus ihrem Instagram-Account ausloggt. Weitere
              Informationen und die geltenden Datenschutzbestimmungen von
              Instagram können unter{" "}
              <a href="https://help.instagram.com/155833707900388">
                https://help.instagram.com/155833707900388
              </a>{" "}
              und{" "}
              <a href="https://www.instagram.com/about/legal/privacy/">
                https://www.instagram.com/about/ legal/privacy/
              </a>{" "}
              abgerufen werden.
            </p>
            <h3 className="pt-10 text-lg font-semibold leading-8">
              Datenschutzbestimmungen zu Einsatz und Verwendung von YouTube
            </h3>
            <p>
              Sofern der für die Verarbeitung Verantwortliche auf der
              Internetseite Komponenten von YouTube integriert, gilt Folgendes:
              YouTube als Internet-Videoportal erlaubt Video-Publishern das
              kostenlose Einstellen von Videoclips und anderen Nutzern die
              ebenfalls kostenfreie Betrachtung, Bewertung und Kommentierung
              dieser Clips. YouTube gestattet die Publikation aller Arten von
              Videos, weshalb sowohl komplette Film- und Fernsehsendungen, aber
              auch Musikvideos, Trailer oder von Nutzern selbst angefertigte
              Videos über das Internetportal abrufbar sind.
              Betreibergesellschaft von YouTube ist die YouTube, LLC, 901 Cherry
              Ave., San Bruno, CA 94066, USA. Die YouTube, LLC ist einer
              Tochtergesellschaft der Google Inc., 1600 Amphitheatre Pkwy,
              Mountain View, CA 94043-1351, USA. Durch jeden Aufruf einer der
              Einzelseiten dieser Internetseite, die durch den für die
              Verarbeitung Verantwortlichen betrieben wird und auf welcher eine
              YouTube-Komponente (YouTube-Video) integriert wurde, wird der
              Internetbrowser auf dem informationstechnologischen System der
              betroffenen Person automatisch durch die jeweilige
              YouTube-Komponente veranlasst, eine Darstellung der entsprechenden
              YouTube-Komponente von YouTube herunterzuladen. Weitere
              Informationen zu YouTube können unter{" "}
              <a href="https://www.youtube.com/yt/about/de/">
                https://www.youtube.com/yt/about/de/
              </a>{" "}
              abgerufen werden. Im Rahmen dieses technischen Verfahrens erhalten
              YouTube und Google Kenntnis darüber, welche konkrete Unterseite
              einer Internetseite durch die betroffene Person besucht wird.
              Sofern die betroffene Person gleichzeitig bei YouTube eingeloggt
              ist, erkennt YouTube mit dem Aufruf einer Unterseite, die ein
              YouTube-Video enthält, welche konkrete Unterseite der
              Internetseite die betroffene Person besucht. Diese Informationen
              werden durch YouTube und Google gesammelt und dem jeweiligen
              YouTube-Account der betroffenen Person zugeordnet. YouTube und
              Google erhalten über die YouTube-Komponente immer dann eine
              Information darüber, dass die betroffene Person die Internetseite
              besucht hat, wenn die betroffene Person zum Zeitpunkt des Aufrufs
              die Internetseite gleichzeitig bei YouTube eingeloggt ist; dies
              findet unabhängig davon statt, ob die betroffene Person ein
              YouTube-Video anklickt oder nicht. Ist eine derartige Übermittlung
              dieser Informationen an YouTube und Google von der betroffenen
              Person nicht gewollt, kann diese die Übermittlung dadurch
              verhindern, dass sie sich vor einem Aufruf einer Internetseite aus
              ihrem YouTube-Account ausloggt. Die von YouTube veröffentlichten
              Datenschutzbestimmungen, die unter{" "}
              <a href="https://policies.google.com/privacy">
                https://www.google.de/intl/de/policies/privacy/
              </a>{" "}
              abrufbar sind, geben Aufschluss über die Erhebung, Verarbeitung
              und Nutzung personenbezogener Daten durch YouTube und Google.
            </p>
            <h3 className="pt-10 text-2xl font-semibold leading-8 text-black">
              IV. Begriffsbestimmungen
            </h3>
            <p>
              Die in dieser Datenschutzerklärung verwendeten Begriffe werden im
              Folgenden erläutert.
            </p>
            <h3 className="pt-10 text-lg font-semibold leading-8">
              Personenbezogene Daten
            </h3>
            <p>
              Personenbezogene Daten sind alle Informationen, die sich auf eine
              identifizierte oder identifizierbare natürliche Person (im
              Folgenden "betroffene Person") beziehen. Als identifizierbar wird
              eine natürliche Person angesehen, die direkt oder indirekt,
              insbesondere mittels Zuordnung zu einer Kennung wie einem Namen,
              zu einer Kennnummer, zu Standortdaten, zu einer Online-Kennung
              oder zu einem oder mehreren besonderen Merkmalen, die Ausdruck der
              physischen, physiologischen, genetischen, psychischen,
              wirtschaftlichen, kulturellen oder sozialen Identität dieser
              natürlichen Person sind, identifiziert werden kann.
            </p>
            <h3 className="pt-10 text-lg font-semibold leading-8">
              Betroffene Person
            </h3>
            <p>
              Betroffene Person ist jede identifizierte oder identifizierbare
              natürliche Person, deren personenbezogene Daten von dem für die
              Verarbeitung Verantwortlichen verarbeitet werden.
            </p>
            <h3 className="pt-10 text-lg font-semibold leading-8">
              Verarbeitung
            </h3>
            <p>
              Verarbeitung ist jeder mit oder ohne Hilfe automatisierter
              Verfahren ausgeführte Vorgang oder jede solche Vorgangsreihe im
              Zusammenhang mit personenbezogenen Daten wie das Erheben, das
              Erfassen, die Organisation, das Ordnen, die Speicherung, die
              Anpassung oder Veränderung, das Auslesen, das Abfragen, die
              Verwendung, die Offenlegung durch Übermittlung, Verbreitung oder
              eine andere Form der Bereitstellung, den Abgleich oder die
              Verknüpfung, die Einschränkung, das Löschen oder die Vernichtung.
            </p>
            <h3 className="pt-10 text-lg font-semibold leading-8 ">
              Einschränkung der Verarbeitung
            </h3>
            <p>
              Einschränkung der Verarbeitung ist die Markierung gespeicherter
              personenbezogener Daten mit dem Ziel, ihre künftige Verarbeitung
              einzuschränken.
            </p>
            <h3 className="pt-10 text-lg font-semibold leading-8 ">
              Profiling
            </h3>
            <p>
              Profiling ist jede Art der automatisierten Verarbeitung
              personenbezogener Daten, die darin besteht, dass diese
              personenbezogenen Daten verwendet werden, um bestimmte persönliche
              Aspekte, die sich auf eine natürliche Person beziehen, zu
              bewerten, insbesondere, um Aspekte bezüglich Arbeitsleistung,
              wirtschaftlicher Lage, Gesundheit, persönlicher Vorlieben,
              Interessen, Zuverlässigkeit, Verhalten, Aufenthaltsort oder
              Ortswechsel dieser natürlichen Person zu analysieren oder
              vorherzusagen.
            </p>
            <h3 className="pt-10 text-lg font-semibold leading-8">
              Pseudonymisierung
            </h3>
            <p>
              Pseudonymisierung ist die Verarbeitung personenbezogener Daten in
              einer Weise, auf welche die personenbezogenen Daten ohne
              Hinzuziehung zusätzlicher Informationen nicht mehr einer
              spezifischen betroffenen Person zugeordnet werden können, sofern
              diese zusätzlichen Informationen gesondert aufbewahrt werden und
              technischen und organisatorischen Maßnahmen unterliegen, die
              gewährleisten, dass die personenbezogenen Daten nicht einer
              identifizierten oder identifizierbaren natürlichen Person
              zugewiesen werden.
            </p>
            <h3 className="pt-10 text-lg font-semibold leading-8">
              Verantwortlicher oder für die Verarbeitung Verantwortlicher
            </h3>
            <p>
              Verantwortlicher oder für die Verarbeitung Verantwortlicher ist
              die natürliche oder juristische Person, Behörde, Einrichtung oder
              andere Stelle, die allein oder gemeinsam mit anderen über die
              Zwecke und Mittel der Verarbeitung von personenbezogenen Daten
              entscheidet. Sind die Zwecke und Mittel dieser Verarbeitung durch
              das Unionsrecht oder das Recht der Mitgliedstaaten vorgegeben, so
              kann der Verantwortliche beziehungsweise können die bestimmten
              Kriterien seiner Benennung nach dem Unionsrecht oder dem Recht der
              Mitgliedstaaten vorgesehen werden.
            </p>
            <h3 className="pt-10 text-lg font-semibold leading-8">
              Auftragsverarbeiter
            </h3>
            <p>
              Auftragsverarbeiter ist eine natürliche oder juristische Person,
              Behörde, Einrichtung oder andere Stelle, die personenbezogene
              Daten im Auftrag des Verantwortlichen verarbeitet.
            </p>
            <h3 className="pt-10 text-lg font-semibold leading-8">Empfänger</h3>
            <p>
              Empfänger ist eine natürliche oder juristische Person, Behörde,
              Einrichtung oder andere Stelle, der personenbezogene Daten
              offengelegt werden, unabhängig davon, ob es sich bei ihr um einen
              Dritten handelt oder nicht. Behörden, die im Rahmen eines
              bestimmten Untersuchungsauftrags nach dem Unionsrecht oder dem
              Recht der Mitgliedstaaten möglicherweise personenbezogene Daten
              erhalten, gelten jedoch nicht als Empfänger.
            </p>
            <h3 className="pt-10 text-lg font-semibold leading-8">Dritter</h3>
            <p>
              Dritter ist eine natürliche oder juristische Person, Behörde,
              Einrichtung oder andere Stelle außer der betroffenen Person, dem
              Verantwortlichen, dem Auftragsverarbeiter und den Personen, die
              unter der unmittelbaren Verantwortung des Verantwortlichen oder
              des Auftragsverarbeiters befugt sind, die personenbezogenen Daten
              zu verarbeiten.
            </p>
            <h3 className="pt-10 text-lg font-semibold leading-8">Cookies</h3>
            <p>
              Sofern Cookies verwendet werden gilt Folgendes: Cookies sind
              Textdateien, welche über einen Internetbrowser auf einem
              Computersystem abgelegt und gespeichert werden. Zahlreiche
              Internetseiten und Server verwenden Cookies. Viele Cookies
              enthalten eine sogenannte Cookie-ID. Eine Cookie-ID ist eine
              eindeutige Kennung des Cookies. Sie besteht aus einer
              Zeichenfolge, durch welche Internetseiten und Server dem konkreten
              Internetbrowser zugeordnet werden können, in dem das Cookie
              gespeichert wurde. Dies ermöglicht es den besuchten Internetseiten
              und Servern, den individuellen Browser der betroffenen Person von
              anderen Internetbrowsern, die andere Cookies enthalten, zu
              unterscheiden. Ein bestimmter Internetbrowser kann über die
              eindeutige Cookie-ID wiedererkannt und identifiziert werden.
              Mittels eines Cookies können die Informationen und Angebote auf
              Internetseiten im Sinne des Benutzers optimiert werden. Cookies
              ermöglichen, wie bereits erwähnt, die Benutzer einer Internetseite
              wiederzuerkennen. Zweck dieser Wiedererkennung ist es, den Nutzern
              die Verwendung einer Internetseite zu erleichtern. Der Benutzer
              einer Internetseite, die Cookies verwendet, muss beispielsweise
              nicht bei jedem Besuch der Internetseite erneut seine Zugangsdaten
              eingeben, weil dies von der Internetseite und dem auf dem
              Computersystem des Benutzers abgelegten Cookie übernommen wird.
              Ein weiteres Beispiel ist das Cookie eines Warenkorbes im
              Online-Shop. Der Online-Shop merkt sich die Artikel, die ein Kunde
              in den virtuellen Warenkorb gelegt hat, über ein Cookie. Die
              betroffene Person kann die Setzung von Cookies durch eine
              Internetseite jederzeit mittels einer entsprechenden Einstellung
              des genutzten Internetbrowsers verhindern und damit der Setzung
              von Cookies dauerhaft widersprechen. Ferner können bereits
              gesetzte Cookies jederzeit über einen Internetbrowser oder andere
              Softwareprogramme gelöscht werden. Dies ist in allen gängigen
              Internetbrowsern möglich. Deaktiviert die betroffene Person die
              Setzung von Cookies in dem genutzten Internetbrowser, sind unter
              Umständen nicht alle Funktionen einer Internetseite vollumfänglich
              nutzbar.
            </p>
            <h3 className="pt-10 text-lg font-semibold leading-8">
              Einwilligung
            </h3>
            <p>
              Einwilligung ist jede von der betroffenen Person freiwillig für
              den bestimmten Fall in informierter Weise und unmissverständlich
              abgegebene Willensbekundung in Form einer Erklärung oder einer
              sonstigen eindeutigen bestätigenden Handlung, mit der die
              betroffene Person zu verstehen gibt, dass sie mit der Verarbeitung
              der sie betreffenden personenbezogenen Daten einverstanden ist.
            </p>
            <h3 className="pt-10 text-lg font-semibold leading-8 ">
              Name und Anschrift des für die Verarbeitung Verantwortlichen
            </h3>
            <p>
              Verantwortlicher im Sinne der DSGVO, des Bundesdatenschutzgesetzes
              (BDSG-neu) sowie sonstiger in den Mitgliedstaaten der Europäischen
              Union geltenden Datenschutzgesetze und anderer Bestimmungen mit
              datenschutzrechtlichem Charakter ist:
            </p>
            <p className="mb-10">
              Baben der erde GmbH & Co. KG
              <br />
              Haidrath 3
              <br />
              D-21521 Wohltorf
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Datenschutz;
