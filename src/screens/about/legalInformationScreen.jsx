// (C) Copyright IBM Deutschland GmbH 2021.  All rights reserved.

/***********************************************************************************************
imports
***********************************************************************************************/

import React, { PureComponent } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Linking,
  ScrollView,
} from "react-native";

import config from "../../config/configProvider";
import Banner from "../../components/banner/banner";
import ScrollIndicatorWrapper from "../../components/scrollIndicatorWrapper/scrollIndicatorWrapper";

let localStyle;

const Licenses = require("../../assets/files/licenses.json");

/***********************************************************************************************
component:
renders the webView screen
***********************************************************************************************/

class LegalInformationScreen extends PureComponent {
  /**
   * @constructor
   * @param  {object}    props
   * @param  {object}    props.navigation the navigation object provided by 'react-navigation'
   */

  // rendering
  /*-----------------------------------------------------------------------------------*/

  render() {
    const { navigation } = this.props;
    return (
      <View>
        <View style={localStyle.wrapper}>
          {/* banner */}
          <Banner
            nav={navigation}
            title={config.text.legalInformation.title}
            subTitle={config.text.legalInformation.subTitle}
            noMenu
          />

          {/* content */}
          <View style={{ ...localStyle.flexi, ...localStyle.wrapper }}>
            <ScrollIndicatorWrapper
              contentData={
                <View style={{ ...localStyle.wrapper, ...localStyle.top }}>
                  {/* top elements title & text */}
                  <Text style={localStyle.titleText}>
                    {config.text.legalInformation.headline}
                  </Text>
                  <View style={localStyle.top}>
                    <Text
                      style={[localStyle.u, localStyle.h2, localStyle.center]}
                    >
                      Probandeninformation und Einwilligungserklärung zur Studie
                    </Text>
                  </View>
                  <View style={{ flex: 1 }}>
                    <ScrollView
                      style={[localStyle.infoText, localStyle.wrapper]}
                    >
                      <Text style={[localStyle.p, localStyle.center]}>
                        „Selbstmonitoring-App für Mitarbeitergesundheit im
                        Gesundheitswesen“ (S.A.M.) im Rahmen von PREPARED (NUM
                        2.0) Selbstmonitoring für Mitarbeitergesundheit (S.A.M.)
                        im Rahmen von egePan
                      </Text>
                      <Text style={[localStyle.h3]}>
                        Sehr geehrte lesende Person,
                      </Text>
                      <Text style={localStyle.p}>
                        mit diesem Schreiben möchten wir Sie über die oben
                        benannte Studie an unserer Klinik informieren und nach
                        Ihrem Interesse zur freiwilligen Studienteilnahme
                        fragen. Bitte lesen Sie sich dieses
                        Informationsschreiben sorgfältig durch. Sollten Sie
                        weiterführende Fragen hierzu haben, stehen wir Ihnen
                        hierfür gerne zur Verfügung. Sie können uns per E-Mail
                        (PSY.NUM@med.uni-muenchen.de) erreichen. Die vorliegende
                        Studie wurde durch die Ethikkommission des Landes
                        Rheinland-Pfalz ethisch geprüft und zustimmend bewertet,
                        zusätzlich erfolgte ein zustimmendes Ethikvotum der
                        Ethikkommission am LMU Klinikum (Projektnummer:
                        23-0230).
                      </Text>
                      <Text
                        style={[localStyle.center, localStyle.b, localStyle.u]}
                      >
                        Ziel und Zweck der Studie
                      </Text>
                      <Text style={localStyle.p}>
                        Die Selbstmonitoring App für Mitarbeitergesundheit (
                        <Text style={localStyle.b}>S.A.M.</Text>) ist ein
                        Projektteil des{" "}
                        <Text style={localStyle.b}>PREPARED</Text>{" "}
                        Verbundforschungsprojekts des LMU Klinikums (Klinik für
                        Psychiatrie und Psychotherapie) und der
                        Universitätsmedizin Mainz (Klinik und Poliklinik für
                        Psychosomatische Medizin und Psychotherapie & Klinik für
                        Psychiatrie und Psychotherapie). PREPARED wird im Rahmen
                        des{" "}
                        <Text style={localStyle.b}>
                          Netzwerks Universitätsmedizin{" "}
                        </Text>
                        (NUM) vom{" "}
                        <Text style={localStyle.b}>
                          Bundesministerium für Bildung und Forschung{" "}
                        </Text>
                        (BMBF) (Förderkennzeichen: 01KX2121) gefördert und steht
                        unter der Gesamtprojektleitung von Prof. Dr. Jochen
                        Schmitt und Prof. Dr. Simone Scheithauer. Die
                        Wissenschaftler:innen der Studie haben sich zum Ziel
                        gesetzt, Mitarbeitenden von Kliniken in Deutschland die
                        Möglichkeit zu geben, ihre mentale Gesundheit am Ende
                        bzw. nach der COVID-19-Pandemie zu monitoren. Dies soll
                        dazu beitragen, bei einer zukünftigen Gesundheitskrise
                        oder -katastrophe zeitnah die mentale Gesundheit von
                        Mitarbeitenden in Kliniken erfassen und evaluieren zu
                        können. Darüber hinaus verfolgt die Studie weitere
                        wissenschaftliche Fragestellungen. Zu diesen zählen
                        beispielsweise die Fragen, wie Personen belastende
                        Lebensumstände und Stress über einen längeren Zeitraum
                        bewältigen, um Rückschlüsse auf mögliche Risikofaktoren
                        und Interventionen zu erhalten. Besonders die Faktoren
                        Burnout als arbeitsbezogenes Beanspruchungsmerkmal soll
                        untersucht und präventive Faktoren (z. B.
                        Selbstwirksamkeit oder soziale Unterstützung) zur
                        Vermeidung analysiert werden. Ziel der Studie ist,
                        Merkmale zu identifizieren, die vor der Entwicklung
                        psychischer Störungen schützen. Bitte beachten Sie, dass
                        Sie an der Studie nur teilnehmen können, wenn Sie
                        mindestens 18 Jahre alt sind und einwilligen, dass Ihre
                        Daten für die oben beschriebenen Zwecke genutzt werden.
                      </Text>
                      <Text
                        style={[
                          localStyle.center,
                          localStyle.b,
                          localStyle.u,
                          localStyle.p,
                        ]}
                      >
                        Ablauf der Studie:
                      </Text>
                      <Text style={localStyle.p}>
                        <Text style={localStyle.b}>
                          Zeitraum der Studie:{"\n"}
                        </Text>
                        Im Rahmen der Studie möchten wir Ihnen über einen
                        Zeitraum von drei Monaten in einem zwei-wöchentlichen
                        Rhythmus Fragen zu Ihrer psychischen Gesundheit stellen.
                        Insgesamt werden Sie 7 Fragebögen (1 Start-Fragebogen, 6
                        wöchentliche Fragebögen) ausfüllen können. Die Studie
                        startet im Frühjahr 2023. Der Zeitraum der Befragung
                        erstreckt sich über drei Monate.
                      </Text>
                      <Text style={localStyle.p}>
                        <Text style={localStyle.b}>Voraussetzungen:{"\n"}</Text>
                        Um an der Studie teilnehmen zu können, müssen Sie sich
                        die für die Studie entwickelte S.A.M.-App auf Ihr
                        Smartphone herunterladen. Die App ist in dem Apple App
                        Store und Google Play Store verfügbar. Die Anwendung
                        wurde auf Grundlage des COMPASS Open-Source Projekts
                        entwickelt (https://num-compass.science/de/), welches
                        ebenfalls im Rahmen des Netzwerks Universitätsmedizin
                        (NUM) BMBF gefördert wird (Förderkennzeichen: 01KX2021).
                        Nachdem Sie die App heruntergeladen und auf Ihrem
                        Smartphone installiert haben, wird Ihnen beim
                        erstmaligen Öffnen der App die Einwilligungserklärung
                        zur Teilnahme an der Studie und Nutzung der App
                        angezeigt. Wenn Sie der Nutzung zustimmen, können Sie
                        die App nutzen und es wird Ihnen im Anschluss eine
                        persönliche Benutzer-ID zugewiesen (ein sogenanntes
                        “Pseudonym”, bzw. Pseudonymisierungsschlüssel), die Sie
                        jederzeit in der App einsehen können. Diese sollte
                        notiert werden, falls Sie sich versehentlich ausloggen.
                        Im Anschluss können Sie mit der Bearbeitung des ersten
                        Fragebogens beginnen. Es müssen alle Pflichtfelder
                        ausgefüllt werden, damit der Fragebogen abgesendet
                        werden kann. Sie werden wöchentlich per sog.
                        “Push-Notification”, also einer Benachrichtigung auf
                        Ihrem Smartphone, darüber informiert, dass ein neuer
                        Fragebogen zum Ausfüllen vorliegt. Zum Ende der Studie
                        erhalten Sie ebenfalls eine Push-Notification mit
                        weiterführenden Informationen zur Studie.
                      </Text>
                      <Text
                        style={[localStyle.b, localStyle.center, localStyle.u]}
                      >
                        Sonstige wichtige Informationen
                      </Text>
                      <Text style={localStyle.p}>
                        Wichtig: Sie können nur teilnehmen, wenn Sie mindestens
                        18 Jahre alt sind und einwilligen, dass Ihre Daten für
                        die oben beschriebenen Zwecke genutzt werden. Außerdem
                        müssen Sie für mindestens 19 Stunden die Woche an einer
                        deutschen Universitätsklinik eingestellt sein.
                      </Text>
                      <Text style={localStyle.p}>
                        Vielen Dank für Ihre Zeit und Ihren Beitrag zur
                        Wissenschaft. Mit Ihrer Hilfe kommen wir dem Ziel einen
                        Schritt näher, einen Beitrag zur Gesundheit von
                        Mitarbeitenden in Kliniken zu leisten, indem wir Ihnen
                        die Möglichkeit geben, selbst ihre mentale Gesundheit zu
                        monitoren und gegebenenfalls entsprechende
                        Unterstützungsangebote zu nutzen.
                      </Text>
                      <Text style={localStyle.p}>
                        <Text style={localStyle.b}>
                          Finanzieller Aufwand (z.B. Fahrtkostenerstattung) und
                          Aufwandsentschädigung{"\n"}
                        </Text>
                        Für die Teilnahme an der Studie fallen Ihnen keine
                        unmittelbaren finanziellen Kosten an. Ebenfalls bieten
                        wir keine Aufwandsentschädigung für die Teilnahme an.
                        Jedoch erhalten Sie in der App weitere Informationen
                        sowie mögliche anonyme Unterstützungsangebote der
                        Universitätskliniken für, auf die Sie einfach per Klick
                        zugreifen können. So liegt es in Ihrer Hand, zu
                        bewerten, ob Sie auf Grundlage Ihrer Ergebnisse externe
                        Beratungs- oder Unterstützungsangebote in Anspruch
                        nehmen möchten.
                      </Text>
                      <Text
                        style={[localStyle.b, localStyle.center, localStyle.u]}
                      >
                        Nutzen und Risiken
                      </Text>
                      <Text style={localStyle.p}>
                        Die Teilnahme an der Studie kann Ihnen dabei helfen,
                        Ihre mentale Gesundheit über einen Zeitraum von 3
                        Monaten zu beobachten. Der daraus resultierende Nutzen
                        wurde im vorherigen Absatz “Finanzieller Aufwand und
                        Aufwandsentschädigung” näher beschrieben. Die
                        Verarbeitung Ihrer per Fragebogen übermittelten Daten
                        gilt gem. Artikel 9 DSGVO als Verarbeitung besonderer
                        Kategorien personenbezogener Daten. Der
                        Studiendurchführer versichert, entsprechende technische
                        und organisatorische Maßnahmen zu ergreifen, um eine
                        rechtskonforme Verarbeitung Ihrer Daten zu
                        gewährleisten.
                      </Text>
                      <Text
                        style={[localStyle.b, localStyle.center, localStyle.u]}
                      >
                        Freiwilligkeit der Studienteilnahme und
                        Widerrufsmöglichkeit
                      </Text>
                      <Text style={localStyle.p}>
                        Die Teilnahme an dieser Studie ist freiwillig. Ihnen
                        entstehen keine Nachteile durch Versagen der
                        Einwilligung. Sie können zudem jederzeit und ohne Angabe
                        von Gründen Ihre Einwilligung zur Teilnahme an der
                        Studie widerrufen (schriftlich oder per E-Mail) und der
                        Weiterverarbeitung Ihrer Daten widersprechen, ohne dass
                        Ihnen dadurch Nachteile entstehen. Ihre
                        personenbeziehbaren Daten werden in diesem Fall
                        gelöscht. Die zu diesem Zeitpunkt bereits anonymisierten
                        Daten können nicht gelöscht werden, da Ihnen diese Daten
                        nicht mehr zugeordnet werden können. Ihr Widerruf wird
                        erst wirksam ab dem Zeitpunkt des Zuganges der Erklärung
                        bei der Universitätsmedizin Mainz. Er hat keine
                        Rückwirkung, d.h. die Verarbeitung Ihrer Daten bis zu
                        diesem Zeitpunkt bleibt rechtmäßig.
                      </Text>
                      <Text
                        style={[localStyle.b, localStyle.center, localStyle.u]}
                      >
                        Datenschutzrechtliche Informationen
                      </Text>
                      <Text style={localStyle.p}>
                        Wir garantieren die Einhaltung datenschutzrechtlicher
                        Bestimmungen. Ihre personenbezogenen Daten werden
                        jederzeit vertraulich behandelt.
                      </Text>
                      <Text style={localStyle.p}>
                        Im Rahmen der Studie werden explizit keine
                        personenbezogenen Daten von Ihnen wie z.B. Ihr Name,
                        Adresse, Email-Adresse oder Geburtsdatum erhoben.
                        Sämtliche sonstige, zur Auswertung notwendige Metadaten
                        werden in pseudonymisierter Form erhoben.
                        Pseudonymisiert bedeutet, dass Ihre personenbezogenen
                        Daten durch einen wertneutralen Code (z.B. XYZ01)
                        ersetzt werden. Über den wertneutralen Code kann das
                        Studienpersonal nach Beendigung der Studie die von Ihnen
                        übersandten Fragebögen zuordnen und auswerten. Eine
                        Beratung durch den Datenschutzbeauftragten der
                        Universitätsmedizin Mainz hat stattgefunden.
                      </Text>
                      <Text style={localStyle.p}>
                        Um Sie über neue verfügbare Fragebögen mittels sog.
                        Push-Notifications auf dem Smartphone benachrichtigen zu
                        können, setzten wir - mit Ihrer ausdrücklichen
                        Zustimmung - den in Android integrierten Push-Dienst
                        “Firebase Cloud Messaging-Dienst” (FCM) ein, bei der
                        Ihre IP-Adresse an die Firma Google übermittelt wird.
                        Sollten Sie ein Gerät mit einem Betriebssystem der Firma
                        Apple (iOS) verwenden, setzen wir zusätzlich den Dienst
                        “Apple Push Notification Services” ein. Diese Dienste
                        der Betriebssystemhersteller erzeugen auf Ihrem
                        Smartphone einen wertneutralen Sicherheitsschlüssel, den
                        wir auf dem Server den Universitätsmedizin Mainz mit
                        Ihrer pseudonymisierten Benutzer-ID verknüpfen. Dadurch
                        können wir Sie rechtzeitig über den FCM-Dienst mittels
                        Push-Benachrichtigung informieren, sobald ein neuer
                        Fragebogen zur Verfügung steht. Hierzu senden wir den
                        Text der entsprechenden Benachrichtigung (z.B. “Es steht
                        ein neuer Fragebogen für Sie bereit.”) mit dem von FCM
                        erzeugten Sicherheitsschlüssel an die Firma Google sowie
                        bei iOS-Geräten an die Firma Apple. In diesen Fällen
                        können Daten ohne geeignete Garantien i.S.d. Art. 46
                        DSGVO an alle Google- bzw. Apple-Rechenzentren (auch in
                        Nicht-EU-Ländern ohne angemessenes Datenschutzniveau,
                        insbesondere USA) übertragen werden. Mit Urteil vom
                        16.07.2020, Az.: C-311/18 („Schrems II“) hat der EuGH
                        festgestellt, dass in den USA kein angemessenes
                        Datenschutzniveau gewährleistet werden kann. Es besteht
                        dort zum einen das Risiko eines Zugriffs auf die
                        übertragenen Daten durch US-Sicherheitsbehörden ohne,
                        dass eine Möglichkeit vorgesehen ist, wirksame
                        Rechtsbehelfe einzulegen. Zum anderen fehlen
                        durchsetzbare Betroffenenrechte. Die Übermittlung
                        erfolgt daher nur mit Ihrer ausdrücklichen Einwilligung
                        auf Grundlage des Art. 49 Abs. 1 Buchst. a) DSGVO.{" "}
                      </Text>
                      <Text style={localStyle.p}>
                        In diesen Fällen ist nicht gewährleistet, dass die
                        Datenverarbeitung in gleichwertiger Weise durch
                        unabhängige Behörden und Gerichte kontrolliert werden
                        kann und/oder Ihnen durchsetzbare Rechte und wirksame
                        Rechtsbehelfe zur Verfügung stehen. Des Weiteren können
                        umfangreichere Zugriffsrechte durch staatliche Organe
                        und/oder private Stellen bestehen, wodurch Ihnen
                        erhebliche persönliche Nachteile entstehen können.
                      </Text>
                      <Text style={localStyle.p}>
                        Eine Beratung durch den Datenschutzbeauftragten der
                        Universitätsmedizin Mainz hat stattgefunden.
                      </Text>
                      <Text style={localStyle.b}>
                        Gemäß der Europäischen Datenschutz-Grundverordnung
                        (DS-GVO) informieren wir Sie im Folgenden über Ihre
                        Rechte in Bezug auf die Verarbeitung Ihrer
                        personenbezogenen Daten:
                      </Text>
                      <Text style={localStyle.p}>
                        <Text style={localStyle.u}>I. Art der Daten{"\n"}</Text>
                        Bei den Daten die wir von Ihnen verarbeiten, handelt es
                        sich um personenbezogene Daten gemäß Art. 4 Nr. 1 DS-GVO
                        bzw. um besondere Kategorien von personenbezogenen Daten
                        in Form von Gesundheitsdaten nach Art. 4 Nr. 15 DS-GVO.
                      </Text>
                      <Text localStyle={localStyle.p}>
                        Wir verarbeiten folgende personenbezogene Daten im
                        Rahmen der Studie:
                      </Text>
                      <View style={localStyle.list}>
                        <View style={localStyle.item}>
                          <Text style={localStyle.enum}>•</Text>
                          <Text style={localStyle.shrink}>
                            Demografische Daten zu Geschlecht und Alter,
                          </Text>
                        </View>
                        <View style={localStyle.item}>
                          <Text style={localStyle.enum}>•</Text>
                          <Text style={localStyle.shrink}>
                            Berufsbezogene Daten zu Funktion, Fachbereich,
                            Einsatzort
                          </Text>
                        </View>
                        <View style={localStyle.item}>
                          <Text style={localStyle.enum}>•</Text>
                          <Text style={localStyle.shrink}>
                            Daten zur allgemeinen Erholungsfähigkeiten
                          </Text>
                        </View>
                        <View style={localStyle.item}>
                          <Text style={localStyle.enum}>•</Text>
                          <Text style={localStyle.shrink}>
                            Daten zur mentalen Gesundheit und chronische
                            Grunderkrrankungen
                          </Text>
                        </View>
                      </View>
                      <Text>
                        <Text style={localStyle.u}>
                          II. Verarbeitungszweck{"\n"}
                        </Text>
                        Die Verarbeitung Ihrer personenbezogenen Daten erfolgt
                        ausschließlich zum oben beschriebenen Studienzweck. Eine
                        Verarbeitung Ihrer Daten über den Studienzweck hinaus
                        findet nicht statt.
                      </Text>
                      <Text style={localStyle.p}>
                        <Text style={localStyle.u}>
                          III. Rechtsgrundlage:{"\n"}
                        </Text>
                        Rechtsgrundlage für die von Ihnen im Rahmen der oben
                        benannten Studie verarbeiteten personenbezogenen Daten
                        ist Ihre Einwilligungserklärung gemäß Art. 7 und Art. 9
                        Abs. 2 lit. a) DS-GVO und § 37 Abs. 1
                        Landeskrankenhausgesetz Rheinland-Pfalz (LKG RLP).
                      </Text>

                      <Text style={localStyle.p}>
                        <Text style={localStyle.u}>
                          IV. Empfänger/Kategorien von Empfängern:
                        </Text>
                      </Text>
                      <View style={localStyle.list}>
                        <View style={localStyle.item}>
                          <Text style={localStyle.enum}>a)</Text>
                          <Text style={localStyle.shrink}>
                            Die pseudonymisierten Daten werden auf die
                            NUM-Plattform der Universitätsmedizin Mainz
                            übermittelt und dort gespeichert.
                          </Text>
                        </View>
                        <View style={localStyle.item}>
                          <Text style={localStyle.enum}>b)</Text>
                          <Text style={localStyle.shrink}>
                            Ihre im Rahmen der Studie verarbeiteten
                            personenbezogenen Daten werden anonymisiert an
                            folgende Empfänger/Kategorien von Empfängern[1]
                            weitergegeben:
                          </Text>
                        </View>
                        <Text style={localStyle.p}>
                          Die mit der Durchführung der Studie betrauten Personen
                          in den folgenden Einrichtungen:
                        </Text>
                        <View style={localStyle.list}>
                          <View style={localStyle.item}>
                            <Text style={localStyle.enum}>-</Text>
                            <Text style={localStyle.shrink}>
                              Klinik für Psychiatrie und Psychotherapie des LMU
                              Klinikums
                            </Text>
                          </View>
                          <View style={localStyle.item}>
                            <Text style={localStyle.enum}>-</Text>
                            <Text style={localStyle.shrink}>
                              Klinik für Psychiatrie und Psychotherapie der
                              Universitätsmedizin Mainz
                            </Text>
                          </View>
                          <View style={localStyle.item}>
                            <Text style={localStyle.enum}>-</Text>
                            <Text style={localStyle.shrink}>
                              Interdisziplinäres Zentrum für Klinische Studien
                              (IZKS) der Universitätsmedizin Mainz
                            </Text>
                          </View>
                          <View style={localStyle.item}>
                            <Text style={localStyle.enum}>-</Text>
                            <Text style={localStyle.shrink}>
                              Klinik für Psychosomatische Medizin und
                              Psychotherapie der Universitätsmedizin Mainz
                            </Text>
                          </View>
                          <View style={localStyle.item}>
                            <Text style={localStyle.enum}>-</Text>
                            <Text style={localStyle.shrink}>
                              Institut für Medizinische Biometrie, Epidemiologie
                              und Informatik (IMBEI)
                            </Text>
                          </View>
                        </View>
                        <View style={localStyle.item}>
                          <Text style={localStyle.enum}>c)</Text>
                          <Text style={localStyle.shrink}>
                            Eine Weitergabe der Daten an Dritte (Personen, die
                            nicht zur Durchführung der oben benannten Studie
                            eingesetzt werden) oder eine Veröffentlichung
                            findet, wenn überhaupt, nur in anonymisierter Form
                            statt.
                          </Text>
                        </View>
                      </View>
                      <Text style={localStyle.u}>
                        V. Speicherdauer und Löschung:
                      </Text>
                      <View style={localStyle.list}>
                        <View style={localStyle.item}>
                          <Text style={localStyle.enum}>a)</Text>
                          <Text style={localStyle.shrink}>
                            Die studienbezogenen Daten werden nach Erreichen des
                            Studienziels, spätestens jedoch nach 10 Jahren oder
                            im Falle eines Widerrufs der Einwilligung gelöscht,
                            soweit gesetzliche Vorgaben nicht längere
                            Aufbewahrungsfristen vorsehen.
                          </Text>
                        </View>
                        <View style={localStyle.item}>
                          <Text style={localStyle.enum}>b)</Text>
                          <Text style={localStyle.shrink}>
                            Bitte beachten Sie, dass die in die Auswertung
                            eingebrachten Informationen durch eine erfolgte
                            Anonymisierung keine Rückverfolgung zu ihrer Person
                            mehr möglich machen, weshalb nach der Anonymisierung
                            auch keine Löschung Ihrer zu Studienzwecken
                            erhobenen Daten aus der Studie möglich ist.
                          </Text>
                        </View>
                      </View>
                      <Text style={localStyle.p}>
                        <Text style={localStyle.u}>
                          VI. Betroffenenrechte:{"\n"}
                        </Text>
                        Bezüglich Ihrer Daten haben Sie folgende Rechte. Bitte
                        notieren Sie sich nach der App-Installation Ihre
                        persönliche Benutzer-ID, die Sie zur Wahrnehmung Ihrer
                        Rechte angeben müssen. Ohne Ihre Benutzer-ID ist kein
                        eindeutiger Bezug zu Ihren Daten und damit keine
                        Durchsetzung der folgenden Rechte möglich;
                      </Text>
                      <View style={localStyle.list}>
                        <Text style={localStyle.p}>
                          <Text style={localStyle.u}>
                            Recht auf Auskunft nach Artikel 15 DS-GVO:{"\n"}
                          </Text>
                          Sie haben das Recht, Auskunft darüber zu verlangen, ob
                          und welche personenbezogenen Daten von Ihnen durch uns
                          verarbeitet werden. Das Recht auf Auskunft kann im
                          Sinne des § 27 Abs. 2 BDSG eingeschränkt werden, also
                          wenn Daten nicht automatisiert – etwa nur papierhaft –
                          verarbeitet werden.
                        </Text>
                        <Text style={localStyle.p}>
                          <Text style={localStyle.u}>
                            Recht auf Berichtigung nach Artikel 16, 19 DS-GVO:
                            {"\n"}
                          </Text>
                          Sie haben das Recht, Sie betreffende unrichtige
                          personenbezogene Daten berichtigen zu lassen. Das
                          Recht auf Berichtigung kann im Sinne des § 27 Abs. 2
                          BDSG eingeschränkt werden.
                        </Text>
                        <Text style={localStyle.p}>
                          <Text style={localStyle.u}>
                            Recht auf Löschung nach Artikel 17, 19 DS-GVO:{"\n"}
                          </Text>
                          Sie haben das Recht, die Löschung der Sie betreffenden
                          personenbezogenen Daten zu verlangen. Wenn Sie die
                          Löschung Ihrer Daten verlangen, informieren wir die
                          Empfänger Ihrer personenbezogenen Daten über Ihr
                          Löschverlangen.
                        </Text>
                        <Text style={localStyle.p}>
                          <Text style={localStyle.u}>
                            Recht auf Einschränkung der Verarbeitung nach
                            Artikel 18, 19 DS-GVO:{"\n"}
                          </Text>
                          Sie haben das Recht, die Verarbeitung der Sie
                          betreffenden personenbezogenen Daten einzuschränken.
                          Das Recht auf Einschränkung der Verarbeitung kann
                          ebenfalls im Sinne des § 27 Abs. 2 BDSG eingeschränkt
                          werden.
                        </Text>
                        <Text style={localStyle.p}>
                          <Text style={localStyle.u}>
                            Recht auf Datenübertragbarkeit nach Art. 20 DS-GVO:
                            {"\n"}
                          </Text>
                          Sie haben das Recht, die sie betreffenden
                          personenbezogenen Daten, die sie dem Verantwortlichen
                          für die Studie bereitgestellt haben, zu erhalten.
                          Damit können Sie beantragen, dass diese Daten entweder
                          Ihnen oder, soweit technisch möglich, einer anderen
                          von Ihnen benannten Stelle übermittelt werden.
                        </Text>
                        <Text style={localStyle.p}>
                          <Text style={localStyle.u}>
                            Widerspruchsrecht nach Art. 21 DS-GVO:
                            {"\n"}
                          </Text>
                          Sie haben das Recht, gegen die Verarbeitung der Sie
                          betreffenden personenbezogenen Daten Widerspruch
                          einzulegen. Das Recht kann im Sinne des § 27 Abs. 2
                          BDSG eingeschränkt werden.
                        </Text>
                      </View>
                      <Text style={localStyle.p}>
                        <Text style={localStyle.u}>
                          VII. Automatisierte Entscheidungsfindung:{"\n"}
                        </Text>
                        Ihre personenbezogenen Daten sind nicht Gegenstand von
                        Entscheidungen, die ausschließlich auf einer
                        automatisierten Verarbeitung basieren (z.B. Profiling).
                      </Text>
                      <Text style={localStyle.p}>
                        <Text style={localStyle.u}>
                          VIII. Folgen der Nichtbereitstellung:{"\n"}
                        </Text>
                        Die Bereitstellung der personenbezogenen Daten ist weder
                        gesetzlich, noch vertraglich festgeschrieben, noch für
                        einen Vertragsschluss erforderlich. Die Bereitstellung
                        der Daten stellt keine Verpflichtung dar. Die
                        Nichtbereitstellung hat keine Folgen.
                      </Text>
                      <Text style={localStyle.p}>
                        <Text style={localStyle.u}>
                          IX. Verantwortlicher:{"\n"}
                        </Text>
                        Für die Verarbeitung Ihrer personenbezogenen Daten ist
                        rechtlich verantwortlich:
                      </Text>
                      <Text style={localStyle.list}>
                        Universitätsmedizin der Johannes Gutenberg-Universität
                        Mainz vertreten durch den Vorstand{"\n"}
                        Langenbeckstraße 1, 55131 Mainz{"\n"}
                        Telefon: 06131 17-0 Webseite:{"\n"}
                        http://www.unimedizin-mainz.de/
                      </Text>
                      <Text style={localStyle.p}>
                        <Text style={localStyle.u}>
                          IX. Verantwortlicher:{"\n"}
                        </Text>
                        Für die Verarbeitung der anonymisierten Daten ist
                        rechtlich verantwortlich:
                      </Text>
                      <Text style={localStyle.list}>
                        LMU Klinikum, Klinik für Psychiatrie und Psychotherapie
                        vertreten durch den Vorstand{"\n"}
                        Nußbaumstraße 7, 80336 München{"\n"}
                        Telefon: 089 4400 55511{"\n"}
                        Webseite: https://www.lmu-klinikum.de/
                      </Text>
                      <Text style={localStyle.p}>
                        Ihnen steht ein Beschwerderecht bei einer
                        Aufsichtsbehörde Ihrer Wahl zu. Die zuständige
                        Aufsichtsbehörde für die Universitätsmedizin Mainz ist
                        der Landesbeauftragte für den Datenschutz und die
                        Informationsfreiheit Rheinland-Pfalz:
                      </Text>
                      <Text style={localStyle.list}>
                        Postfach 30 40, 55020 Mainz{"\n"}
                        Hintere Bleiche 34, 55116 Mainz{"\n"}
                        Tel.: +49 (0) 6131 208-2449{"\n"}
                        Fax: +49 (0) 6131 208-2497{"\n"}
                        Email: poststelle@datenschutz.rlp.de{"\n"}
                        https://www.datenschutz.rlp.de
                      </Text>
                      <Text style={localStyle.p}>
                        Kontaktdaten des Datenschutzbeauftragten der
                        Universitätsmedizin Mainz:
                      </Text>
                      <Text style={localStyle.list}>
                        Langenbeckstraße 1, 55131 Mainz{"\n"}
                        Tel.: 06131/17-0{"\n"}
                        Email: datenschutz@unimedizin-mainz.de
                      </Text>
                      <Text style={localStyle.p}>
                        Zusätzlich besteht ein Beschwerderecht bei der
                        Datenschutz-Aufsichtsbehörde des LMU Klinikums:
                      </Text>
                      <Text style={localStyle.list}>
                        Bayerischer Landesbeauftragter für den Datenschutz
                        (BayLfD)
                        {"\n"}
                        Postanschrift: Postfach 22 12 19, 80502 München{"\n"}
                        Hausanschrift: Wagmüllerstr. 18, 80538 München{"\n"}
                        Tel.: 089 212672-0{"\n"}
                        Fax: 089 212672-50{"\n"}
                      </Text>
                      <Text style={localStyle.p}>
                        Kontaktdaten des Datenschutzbeauftragten des LMU
                        Klinikums:
                      </Text>
                      <Text style={localStyle.list}>
                        Gerhard Meyer{"\n"}
                        Behördlicher Datenschutzbeauftragter{"\n"}
                        LMU Klinikum{"\n"}
                        Pettenkoferstr. 8, 80336 München{"\n"}
                        Tel.: 089 4400 58454{"\n"}
                        Fax: 089 4400 55192{"\n"}
                        E-Mail: datenschutz@med.uni-muenchen.de{"\n"}
                      </Text>
                      <Text style={[localStyle.u, localStyle.center]}>
                        Kontaktinformationen:
                      </Text>
                      <Text style={[localStyle.p]}>
                        Bei Rückfragen oder bei der Geltendmachung Ihrer
                        Betroffenenrechte stehen Ihnen folgende Ansprechpartner
                        gerne zur Verfügung:
                      </Text>
                      <Text style={[localStyle.p, localStyle.b]}>
                        Inhaltliche Fragen:{" "}
                      </Text>
                      <Text style={localStyle.p}>
                        LMU Klinikum, Klinik für Psychiatrie und Psychotherapie
                        (Nußbaumstraße 7, 80336 München):
                        PSY.NUM@med.uni-muenchen.de{" "}
                      </Text>
                      <Text style={localStyle.b}>Technische Fragen:</Text>
                      <Text style={localStyle.p}>
                        Gutenberg Health Hub der Universitätsmedizin der
                        Johannes Gutenberg-Universität Mainz{"\n"}
                        Geb. 301B{"\n"}
                        Langenbeckstr. 1, 55131 Mainz{"\n"}
                        06131 - 17 7222{"\n"}
                        ghh@unimedizin-mainz.de
                      </Text>
                    </ScrollView>
                  </View>
                  <Text style={localStyle.title}>
                    {config.text.legalInformation.licenses.title}
                  </Text>
                  {Object.entries(Licenses).map((license) => (
                    <View
                      style={localStyle.licenseItem}
                      key={license[1].licenseUrl}
                    >
                      <Text style={localStyle.licenseItemTitle}>
                        {license[0]}
                      </Text>
                      <TouchableOpacity
                        onPress={() =>
                          Linking.openURL(
                            license[1].licenseUrl.replace("/master/", "/HEAD/")
                          )
                        }
                      >
                        <Text>Lizenz(en): {license[1].licenses}</Text>
                      </TouchableOpacity>

                      <TouchableOpacity
                        onPress={() => Linking.openURL(license[1].repository)}
                      >
                        <Text style={localStyle.link}>Quelle</Text>
                      </TouchableOpacity>
                    </View>
                  ))}
                  <Text style={localStyle.infoText}>
                    {config.text.legalInformation.licenses.ApacheLicense}
                  </Text>
                  <Text style={localStyle.infoText}>
                    {config.text.legalInformation.licenses.MITLicense}
                  </Text>
                  <Text style={localStyle.infoText}>
                    {config.text.legalInformation.licenses.BSD3License}
                  </Text>
                </View>
              }
            />
          </View>
        </View>
      </View>
    );
  }
}

/***********************************************************************************************
localStyle
***********************************************************************************************/

localStyle = StyleSheet.create({
  wrapper: {
    height: "100%",
    flexDirection: "column",
    backgroundColor: config.theme.values.defaultBackgroundColor,
  },

  flexi: {
    flex: 3,
  },

  title: {
    ...config.theme.fonts.title,
    textAlign: "center",
    alignSelf: "center",
    color: config.theme.values.defaultTitleTextColor,
  },

  top: {
    justifyContent: "center",
    alignItems: "center",
    paddingTop: config.appConfig.scaleUiFkt(15),
    marginBottom: config.appConfig.scaleUiFkt(35),
  },

  infoText: {
    marginTop: config.appConfig.scaleUiFkt(20),
    marginBottom: config.appConfig.scaleUiFkt(20),
    marginLeft: config.appConfig.scaleUiFkt(40),
    marginRight: config.appConfig.scaleUiFkt(40),
    textAlign: "justify",
    alignSelf: "auto",
    color: config.theme.colors.accent4,
    ...config.theme.fonts.body,
    fontSize: 12,
  },

  titleText: {
    width: "80%",
    textAlign: "center",
    alignSelf: "center",
    ...config.theme.fonts.header2,
  },

  licenseItem: {
    width: "80%",
    paddingVertical: 7,
  },

  licenseItemTitle: {
    fontWeight: "600",
    paddingBottom: 3,
  },

  link: {
    color: config.theme.colors.primary,
  },

  p: {
    marginVertical: 10,
    flexWrap: "wrap",
    textAlign: "left",
    ...config.theme.fonts.body,
  },

  u: {
    textDecorationLine: "underline",
  },

  b: {
    fontWeight: "bold",
  },

  center: {
    textAlign: "center",
  },

  h2: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 0.5,
  },

  h3: {
    fontSize: 16,
    fontWeight: "bold",
    marginVertical: 0.2,
  },

  list: {
    marginVertical: 10,
    marginHorizontal: 5,
    width: "90%",
    alignSelf: "center",
  },

  item: {
    flexDirection: "row",
    marginVertical: 5,
  },

  enum: {
    paddingRight: 5,
  },

  shrink: {
    flexShrink: 1,
  },
});

/***********************************************************************************************
export
***********************************************************************************************/

export default LegalInformationScreen;
