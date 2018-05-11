const errorImage = [
    {
        "Interner Lüfter mit starken Laufgeräuschen": {
          "errorName": "Verdampfer Lüfter Lagerschaden",
          "errorCauses":[
              {
                  "errorCause": "Interner Lüfter defekt",
                "troubleshooting": "Ventilator austauschen",
                "qualifiedPerson":true,
                "component":"Interner Lüfter",
                "area":"Interner Bereich"
              },
              {
                  "errorCause": "Unwucht am Rotor",
                  "troubleshooting": "Verschmutzung prüfen, ggf. reinigen / Lüfter tauschen",
                  "qualifiedPerson":true,
                  "component":"Interner Lüfter",
                  "area":"Interner Bereich"
                },
          ]
        }},
        {"Interner Lüfter läuft nicht an":{
          "errorName": "Lüfter zeigt keine Funktion",
          "errorCauses":[
              {
                  "errorCause": "Anschlußstecker lose",
                  "troubleshooting": "Stecker überprüfen / Platine sowie am Lüfter",
                  "qualifiedPerson":true,
                  "component":"Interner Lüfter",
                  "area":"Interner Bereich"
              },
              {
                  "errorCause": "Lüfter fest",
                  "troubleshooting": "Lüfter austauschen",
                  "qualifiedPerson":false,
                  "component":"Interner Lüfter",
                  "area":"Interner Bereich"
                },
               {
                  "errorCause":  "Keine Spannung am Lüfter",
                  "troubleshooting": "Anschlußleitung prüfen / Spannungsversorgung des KG prüfen",
                  "qualifiedPerson":true,
                  "component":"Interner Lüfter",
                  "area":"Interner Bereich"
                },
          ]
        }},
        {"Keine kalte Luft am Luftauslass (intern)": {
          "errorName": "Gerät kühlt nicht",
          "errorCauses":[
              {
                    "errorCause": "Verdampfer Wärmetauscher verschmutzt",
                    "troubleshooting": "Wärmetauscher reinigen",
                    "qualifiedPerson":false,
                    "component":"Wärmetauscher",
                    "area":"Interner Bereich"
              },
              {
                    "errorCause": "Interner Lüfter defekt",
                    "troubleshooting": "Lüfter austauschen",
                    "qualifiedPerson":true,
                    "component":"Interner Lüfter",
                    "area":"Interner Bereich"
                },
                {
                    "errorCause": "Kältekreis defekt",
                    "troubleshooting": "Hersteller kontaktieren / Gerät zur Rep. einsenden",
                    "qualifiedPerson":true,
                    "component":"Kältekreis",
                    "area":"Kältekreis"
                },
                {
                    "errorCause": "Sollwert noch nicht erreicht",
                    "troubleshooting": "Sollwert prüfen / kein Fehler",
                    "qualifiedPerson":true,
                    "component":"Software",
                    "area":"Software"
                },
                {
                    "errorCause": "ER01 am Display HD Schalter ausgelöst",
                    "troubleshooting": "siehe ER01 ",
                    "qualifiedPerson":true,
                    "component":"Fehlerbeschreibung: Hochdruck Pressostat ausgelöst einsteigen",
                    "area":"Externer Bereich"
                },
          ]
        }},
        {"Kurzschluss (einschalten Gerät)": {
          "errorName": "Kurzschluss beim einschalten des Gerätes",
          "errorCauses":[
              {
                  "errorCause": "Gerät falsch angeschlossen",
                  "troubleshooting": "Geräteanschluss prüfen ",
                  "qualifiedPerson":true,
                  "component":"Kühlgerät",
                  "area":"Externer Bereich"
              },
              {
                  "errorCause": "Falsche Spannung angelegt",
                  "troubleshooting": "Spannung prüfen und ändern",
                  "qualifiedPerson":true,
                  "component":"Kühlgerät",
                  "area":"Externer Bereich"
                },
                {
                  "errorCause": "Trafo TS1 defekt",
                  "troubleshooting": "Trafo austauschen",
                  "qualifiedPerson":true,
                  "component":"Trafo",
                  "area":"Externer Bereich"
                },
                {
                    "errorCause": "Steuerplatine elektrisch defekt",
                    "troubleshooting": "Platine austauschen",
                    "qualifiedPerson":true,
                    "component":"Schaltplatine",
                    "area":"Interner Bereich"
                },
                {
                    "errorCause": "Interner Lüfter elektrisch defekt",
                    "troubleshooting": "Internen Lüfter austauschen",
                    "qualifiedPerson":true,
                    "component":"Interner Lüfter",
                    "area":"Interner Bereich"
                },
                {
                    "errorCause": "Kondensatverdunster elektrisch defekt",
                    "troubleshooting": "Kondensatverdunster tauschen",
                    "qualifiedPerson":true,
                    "component":"Kondensatverdunster",
                    "area":"Externer Bereich"
                },
          ]
        }},
        {"Kurzschluss (zuschalten Kältekreislauf)": {
          "errorName": "Kurzschluss beim zuschalten des Kältekreislaufes",
          "errorCauses":[
              {
                  "errorCause": "Verdichter elektrisch defekt",
                  "troubleshooting": "Hersteller kontaktieren / Gerät zur Rep. einsenden",
                  "qualifiedPerson":true,
                  "component":"Verdichter",
                  "area":"Interner Bereich"
              },
              {
                  "errorCause": "Schütz K20 defekt",
                  "troubleshooting": "Schütz K20 austauschen",
                  "qualifiedPerson":true,
                  "component":"Schutz K20",
                  "area":"Interner Bereich"
                },
                {
                  "errorCause": "Verflüssiger Lüfter defekt",
                  "troubleshooting": "Verflüssiger Lüfter austauschen",
                  "qualifiedPerson":true,
                  "component":"Verflüssiger Lüfter",
                  "area":"Externer Bereich"
                },
          ]
        }},
        {"Externer Lüfter mit starken Laufgeräuschen": {
          "errorName": "Verflüssiger Lüfter Lagerschaden",
          "errorCauses":[
              {
                  "errorCause": "Externer Lüfter defekt",
                  "troubleshooting": "Externer Lüfter austauschen",
                  "qualifiedPerson":false,
                  "component":"Externer Lüfter",
                  "area":"Externer Bereich"
              },
              {
                  "errorCause": "Unwucht am Rotor",
                  "troubleshooting": "Verschmutzung prüfen ggf. reinigen / Lüfter tauschen",
                  "qualifiedPerson":false,
                  "component":"Externer Lüfter",
                  "area":"Externer Bereich"
                },
          ]
        }},
        {"Externer Lüfter niedrige Drehzahl": {
          "errorName": "Lüfterelektrik fehlerhaft",
          "errorCauses":[
              {
                  "errorCause": "Kondensator des Lüfters defekt",
                  "troubleshooting": "Kondensator ist fest verbaut / Lüfter austauschen",
                  "qualifiedPerson":false,
                  "component":"Externer Lüfter",
                  "area":"Externer Bereich"
              },
              {
                  "errorCause": "Transformator falsch angeschlossen",
                  "troubleshooting": "Verdrahtung prüfen und korrigieren",
                  "qualifiedPerson":true,
                  "component":"Transformator",
                  "area":"Externer Bereich"
                },
          ]
        }},
        {"Externer Lüfter läuft nicht an ": {
          "errorName": "Lüfter zeigt keine Funktion",
          "errorCauses":[
              {
                  "errorCause": "Anschlussstecker lose",
                  "troubleshooting": "Stecker überprüfen / Platine sowie am Lüfter ",
                  "qualifiedPerson":true,
                  "component":"Externer Lüfter",
                  "area":"Externer Bereich"
              },
              {
                  "errorCause": "Lüfter fest ",
                  "troubleshooting": "Lüfter austauschen",
                  "qualifiedPerson":false,
                  "component":"Externer Lüfter",
                  "area":"Externer Bereich"
                },
                {
                  "errorCause": "Keine Spannung am Lüfter",
                  "troubleshooting": "Anschlussleitung prüfen / Spannungsversorgung des KG prüfen",
                  "qualifiedPerson":true,
                  "component":"Kühlgerät",
                  "area":"Externer Bereich"
                },
          ]
        }},
        {"Keine Heiße / Warme Luft am Luftauslass (extern)": {
          "errorName": "Kältekreislauf defekt",
          "errorCauses":[
              {
                  "errorCause": "Externer Lüfter defekt",
                  "troubleshooting": "Externer Lüfter austauschen",
                  "qualifiedPerson":false,
                  "component":"Externer Lüfter",
                  "area":"Externer Bereich"
              },
              {
                  "errorCause": "Kältekreis undicht",
                  "troubleshooting": "Hersteller kontaktieren / Gerät zur Rep. einsenden",
                  "qualifiedPerson":true,
                  "component":"Kältekreis",
                  "area":"Kältekreis"
                },
                {
                  "errorCause": "Expansionsventil defekt",
                  "troubleshooting": "Hersteller kontaktieren / Gerät zur Rep. einsenden",
                  "qualifiedPerson":true,
                  "component":"Expansions-Ventil",
                  "area":"Externer Bereich"
                },
                {
                    "errorCause": "Sollwert nicht erreicht",
                    "troubleshooting": "Sollwert prüfen / kein Fehler",
                    "qualifiedPerson":true,
                    "component":"Software",
                    "area":"Software"
                },
                {
                    "errorCause": "ER01 am Display HD Schalter ausgelöst",
                    "troubleshooting": "siehe ER01 ",
                    "qualifiedPerson":false,
                    "component":"Fehlerbeschreibung: Hochdruck Pressostat ausgelöst einsteigen",
                    "area":"Externer Bereich"
                },
          ]
        }},
        {"Verdichter hat im Betrieb starke Laufgeräusche": {
            "errorName": "Verdichter mechanisch defekt",
            "errorCauses":[
                {
                    "errorCause": "Ventilplatte im Verdichter defekt",
                    "troubleshooting": "Hersteller kontaktieren / Gerät zur Rep. einsenden",
                    "qualifiedPerson":true,
                    "component":"Verdichter",
                    "area":"Externer Bereich"
                },
                {
                    "errorCause": "Kältekreis undicht",
                    "troubleshooting": "Hersteller kontaktieren / Gerät zur Rep. einsenden",
                    "qualifiedPerson":true,
                    "component":"Kältekreis",
                    "area":"Kältekreis"
                  },
                  {
                    "errorCause": "Expansionsventil defekt",
                    "troubleshooting": "Hersteller kontaktieren / Gerät zur Rep. einsenden",
                    "qualifiedPerson":true,
                    "component":"Expansionsventil",
                    "area":"Externer Bereich"
                  },
            ]
          }},
          {"Verdichter schaltet nicht ein": {
            "errorName": "Verdichter keine Funktion",
            "errorCauses":[
                {
                    "errorCause": "Sollwert nicht erreicht",
                    "troubleshooting": "Sollwert prüfen / kein Fehler",
                    "qualifiedPerson":true,
                    "component":"Software",
                    "area":"Software"
                },
                {
                    "errorCause": "ER01 am Display HD Schalter ausgelöst",
                    "troubleshooting": "siehe ER01",
                    "qualifiedPerson":false,
                    "component":"Fehlerbeschreibung: Hochdruck Pressostat ausgelöst einsteigen",
                    "area":"Externer Bereich"
                  },
                  {
                    "errorCause": "Schütz K20 defekt",
                    "troubleshooting": "Schütz K20 austauschen",
                    "qualifiedPerson":true,
                    "component":"Schutz K20",
                    "area":"Externer Bereich"
                  },
                  {
                    "errorCause": "Thermische Abschaltung des Verdichter ausgelöste",
                    "troubleshooting": "Verdichter Tempo. prüfen / Hersteller kontaktieren ",
                    "qualifiedPerson":true,
                    "component":"Verdichter",
                    "area":"Externer Bereich"
                  },
                  {
                    "errorCause": "Steuerplatine defekt",
                    "troubleshooting": "Steuerplatine austauschen",
                    "qualifiedPerson":true,
                    "component":"Steuerplatine",
                    "area":"Interner Bereich"
                  },
                  {
                    "errorCause": "Antifreeue ER15 ausgelöst",
                    "troubleshooting": "Gerät durch abschalten der Spannung neu starten",
                    "qualifiedPerson":true,
                    "component":"Kühlgerät",
                    "area":"Externer Bereich"
                  },
                  {
                    "errorCause": "Verdichter elektrisch / mechanisch defekt",
                    "troubleshooting": "Hersteller kontaktieren / Gerät zur Rep. Einsenden",
                    "qualifiedPerson":true,
                    "component":"Verdichter",
                    "area":"Externer Bereich"
                  },
            ]
          }},
          {"Hochdruckstörung": {
            "errorName": "Druckschalter löst aus",
            "errorCauses":[
                {
                    "errorCause": "Verflüssiger Wärmetauscher",
                    "troubleshooting": "Wärmetauscher reinigen ",
                    "qualifiedPerson":false,
                    "component":"Wärmetauscher",
                    "area":"Externer Bereich"
                },
                {
                    "errorCause": "Hochdruckschalter defekt",
                    "troubleshooting": "Hersteller kontaktieren / Gerät zur Rep. einsenden",
                    "qualifiedPerson":true,
                    "component":"Hochdruck Pressostat",
                    "area":"Externer Bereich"
                  },
                  {
                    "errorCause": "Umgebungs Temperatur zu hoch",
                    "troubleshooting": "Applikation neu beurteilen ggf. anderes Gerät verwenden",
                    "qualifiedPerson":false,
                    "component":"Schaltschrank komplett",
                    "area":"Externer Bereich"
                  },
            ]
          }},
          {"Kondensat verdunstet nicht": {
            "errorName": "Kondensatverdunster keine Funktion",
            "errorCauses":[
                {
                    "errorCause": "Heizelement defekt",
                    "troubleshooting": "Kondensatverdunster austauschen",
                    "qualifiedPerson":true,
                    "component":"Kondensatverdunster",
                    "area":"Externer Bereich"
                },
                {
                    "errorCause": "Kondensateinlauf in den Verdunster verstopft",
                    "troubleshooting": "Kondensateinlauf kontrollieren ggf. reinigen",
                    "qualifiedPerson":false,
                    "component":"Kondensateilauf",
                    "area":"Externer Bereich"
                  },
                  {
                    "errorCause": "Sicherungen defekt",
                    "troubleshooting": "Sicherungen prüfen und austauschen",
                    "qualifiedPerson":true,
                    "component":"Sicherung Kondensatverdunster",
                    "area":"Externer Bereich"
                  },
                  {
                    "errorCause": "Steuerplatine defekt",
                    "troubleshooting": "Steuerplatine austauschen",
                    "qualifiedPerson":true,
                    "component":"Steuerplatine",
                    "area":"Interner Bereich"
                  },
            ]
          }},
          {"Gerät hat keine Funktion ": {
            "errorName": "Transformator defekt",
            "errorCauses":[
                {
                    "errorCause": "Kurzschluss im Transformator",
                    "troubleshooting": "Transformator austauschen",
                    "qualifiedPerson":true,
                    "component":"Transformator",
                    "area":"Externer Bereich"
                },
                {
                    "errorCause": "Sicherung vom Transformator defekt",
                    "troubleshooting": "Sicherungen prüfen und austauschen",
                    "qualifiedPerson":true,
                    "component":"Sicherung Transformator",
                    "area":"Externer Bereich"
                  },
                  {
                    "errorCause": "Transformator auf falsche Spannung geklemmt",
                    "troubleshooting": "Verdrahtung prüfen und ggf. ändern",
                    "qualifiedPerson":true,
                    "component":"Transformator",
                    "area":"Externer Bereich"
                  },
            ]
          }},
          {"Störmeldekontakt öffnet (1)": {
            "errorName": "Hochdruckschalter ausgelöst (ER01)",
            "errorCauses":[
                {
                    "errorCause": "Wärmetauscher stark verschmutzt",
                    "troubleshooting": "Gerät / Wärmetauscher reinigen",
                    "qualifiedPerson":true,
                    "component":"Wärmetauscher",
                    "area":"Externer Bereich"
                },
                {
                    "errorCause": "Hochdruckschalter defekt",
                    "troubleshooting": "Hersteller kontaktieren / Gerät zur Rep. einsenden",
                    "qualifiedPerson":true,
                    "component":"Hochdruckschalter",
                    "area":"Externer Bereich"
                  },
                  {
                    "errorCause": "Stecker auf der Platine falsch gesteckt",
                    "troubleshooting": "Platine und Belegung prüfen ",
                    "qualifiedPerson":true,
                    "component":"Steuerplatine",
                    "area":"Interner Bereich"
                  },
            ]
          }},
          {"Störmeldekontakt öffnet (2)": {
            "errorName": "Temperatur Grenzwert im Schaltschrank überschritten (ER07)",
            "errorCauses":[
                {
                    "errorCause": "Kältekreislauf defekt",
                    "troubleshooting": "Hersteller kontaktieren / Gerät zur Rep. einsenden",
                    "qualifiedPerson":true,
                    "component":"Kältekreis",
                    "area":"Kältekreis"
                },
                {
                    "errorCause": "Türkontaktschalter geöffnet (Tür offen)",
                    "troubleshooting": "Tür schließen / Türkontaktschalter prüfen",
                    "qualifiedPerson":false,
                    "component":"Türkontaktschalter",
                    "area":"Schaltschrank"
                  },
                  {
                    "errorCause": "Sicherung des Kühlgerätes defekt",
                    "troubleshooting": "Sicherungen prüfen",
                    "qualifiedPerson":true,
                    "component":"Sicherung",
                    "area":"Interner Bereich"
                  },
            ]
          }},
          {"Störmeldekontakt öffnet (3)": {
            "errorName": "Phasenfolge Fehler / Phasenausfall (Drehfeld falsch herum) (ER04)",
            "errorCauses":[
                {
                    "errorCause": "Falsches Drehfeld angelegt",
                    "troubleshooting": "Drehfeld kontrollieren und ändern",
                    "qualifiedPerson":true,
                    "component":"Drehfeld",
                    "area":"Interner Bereich"
                },
                {
                    "errorCause": "Nur 2 Phasen verbunden t",
                    "troubleshooting": "Phasen messen ob jede Phase vorhanden ist",
                    "qualifiedPerson":true,
                    "component":"Drehfeld",
                    "area":"Interner Bereich"
                  },
                  {
                    "errorCause": "Phasenfolge Relais defekt",
                    "troubleshooting": "Relais prüfen und ggf. austauschen lassen",
                    "qualifiedPerson":true,
                    "component":"Relais",
                    "area":"Interner Bereich"
                  },
            ]
          }},
          {"Störmeldekontakt öffnet (4)": {
            "errorName": "Sensor 1 /TS1 defekt (ER05)",
            "errorCauses":[
                {
                    "errorCause": "Sensor (TS1) nicht richtig auf der Steuerplatine gesteckt",
                    "troubleshooting": "Stecker Belegung prüfen ggf. korrigieren",
                    "qualifiedPerson":true,
                    "component":"Sensor 1",
                    "area":"Interner Bereich"
                },
                {
                    "errorCause": "Sensor Leitung gebrochen (Kabelbruch)",
                    "troubleshooting": "Sensor austauschen",
                    "qualifiedPerson":true,
                    "component":"Sensor 1",
                    "area":"Interner Bereich"
                  },
                  {
                    "errorCause": "Fehler auf der Steuerplatine",
                    "troubleshooting": "Steuerplatine tauschen",
                    "qualifiedPerson":true,
                    "component":"Steuerplatine",
                    "area":"Interner Bereich"
                  },
            ]
          }},
          {"Störmeldekontakt öffnet (5)": {
            "errorName": "Temperatur Grenzwert im Schaltschrank unterschritten (ER06)",
            "errorCauses":[
                {
                    "errorCause": "Luftkurzschluss durch zu dicht verbaute Komponenten",
                    "troubleshooting": "Einbau Situation des Gerätes prüfen ggf. ändern",
                    "qualifiedPerson":true,
                    "component":"Schaltschrank komplett",
                    "area":"Schaltschrank"
                },
                {
                    "errorCause": "Sollwert des Kühlgerätes zu niedrig eingestellt)",
                    "troubleshooting": "Sollwert Einstellung prüfen und ändern",
                    "qualifiedPerson":true,
                    "component":"Software",
                    "area":"Software"
                  },
                  {
                    "errorCause": "Schaltschrank nicht richtig abgedichtet",
                    "troubleshooting": "Schaltschrank Abdichtung sowie Einbau der KG prüfen lassen",
                    "qualifiedPerson":true,
                    "component":"Schaltschrank komplett",
                    "area":"Schaltschrank"
                  },
                  {
                    "errorCause": "Minimal Temp Alarm wurde verstellt",
                    "troubleshooting": "Einstellung überprüfen ggf. ändern",
                    "qualifiedPerson":true,
                    "component":"Software",
                    "area":"Software"
                  },
            ]
          }},
          {"Störmeldekontakt öffnet (6)": {
            "errorName": "Sensor 3 /TS3 defekt (ER11)",
            "errorCauses":[
                {
                    "errorCause": "Sensor (TS3) nicht richtig auf der Platine gesteckt",
                    "troubleshooting": "Stecker Belegung prüfen ggf. korrigieren",
                    "qualifiedPerson":true,
                    "component":"Sensor 3",
                    "area":"Interner Bereich"
                },
                {
                    "errorCause": "Sensor Leitung gebrochen (Kabelbruch)",
                    "troubleshooting": "Sensor austauschen",
                    "qualifiedPerson":true,
                    "component":"Sensor 3",
                    "area":"Interner Bereich"
                  },
                  {
                    "errorCause": "Fehler auf der Steuerplatine",
                    "troubleshooting": "Platine tauschen",
                    "qualifiedPerson":true,
                    "component":"Sensor 3",
                    "area":"Interner Bereich"
                  },
            ]
          }},
          {"Störmeldekontakt öffnet (7)": {
            "errorName": "Antifreeze Temp. |<1°C Sicherheitsabschaltung (ER15)",
            "errorCauses":[
                {
                    "errorCause": "Kältekreis defektt",
                    "troubleshooting": "Hersteller kontaktieren / Gerät zur Rep. einsenden",
                    "qualifiedPerson":true,
                    "component":"Kältekreis",
                    "area":"Kältekreis"
                },
                {
                    "errorCause": "Steuerplatine defekt",
                    "troubleshooting": "Steuerplatine austauschen",
                    "qualifiedPerson":true,
                    "component":"Steuerplatine",
                    "area":"Interner Bereich"
                  },
                  {
                    "errorCause": "Sollwert einstellung zu niedrig",
                    "troubleshooting": "Sollwert prüfen ggf. korrigieren",
                    "qualifiedPerson":true,
                    "component":"Software",
                    "area":"Software"
                  },
                  {
                    "errorCause": "Sensor 1 (TS1) defekt ER05 Zwangskühlung",
                    "troubleshooting": "Sensor 1 austauschen",
                    "qualifiedPerson":true,
                    "component":"Sensor 1",
                    "area":"Interner Bereich"
                  },
            ]
          }},
          {"Störmeldekontakt öffnet (8)": {
            "errorName": "Sensor 4 (TS4) defekt (ER16)",
            "errorCauses":[
                {
                    "errorCause": "Sensor (TS3) nicht richtig auf der Platine gesteckt",
                    "troubleshooting": "Stecker Belegung prüfen ggf. korrigieren",
                    "qualifiedPerson":true,
                    "component":"Sensor 4",
                    "area":"Interner Bereich"
                },
                {
                    "errorCause": "Sensor Leitung gebrochen (Kabelbruch)",
                    "troubleshooting": "Sensor austauschen",
                    "qualifiedPerson":true,
                    "component":"Sensor 4",
                    "area":"Interner Bereich"
                  },
                  {
                    "errorCause": "Fehler auf der Steuerplatine",
                    "troubleshooting": "Platine tauschen",
                    "qualifiedPerson":true,
                    "component":"Steuerplatine",
                    "area":"Interner Bereich"
                  },
            ]
          }},
          {"Ein oder mehrere Geräte kühlen dauerhaft": {
            "errorName": "Multimaster Anschluss",
            "errorCauses":[
                {
                    "errorCause": "Multimaster falsch angeschlossen",
                    "troubleshooting": "Anschlussstecker / Belegung prüfen",
                    "qualifiedPerson":true,
                    "component":"Kühlgerät",
                    "area":"Interner Bereich"
                },
                {
                    "errorCause": "Fehler auf der Steuerplatine",
                    "troubleshooting": "Steuerplatine tauschen",
                    "qualifiedPerson":true,
                    "component":"Steuerplatine",
                    "area":"Interner Bereich"
                  },
                  {
                    "errorCause": "Verdrahtung im Gerät falsch",
                    "troubleshooting": "Verdrahtung prüfen ggf. ändern",
                    "qualifiedPerson":true,
                    "component":"Kühlgerät",
                    "area":"Interner Bereich"
                  },
            ]
          }},
];

export default errorImage;