const errorData = [
    {
      "ER00": {
        "errorName": "Türkontaktschleife ist unterbrochen",
        "errorCauses":[
            {
                "errorCause": "Schaltschranktür ist offen",
              "troubleshooting": "Schaltschranktür schließen",
              "qualifiedPerson":false,
              "component":"Schaltschranktür",
              "area":"Schaltschrank"
            },
            {
                "errorCause": "Türkontaktschalter nicht angeschlossen",
                "troubleshooting": "Schalter anschließen",
                "qualifiedPerson":false,
                "component":"Türkontaktschalter",
                "area":"Interner Bereich"
              },
              {
                "errorCause": "Verdrahtung im Gerät falsch",
                "troubleshooting": "Verdrahtung vom Fachpersonal prüfen lassen",
                "qualifiedPerson":true,
                "component":"Türkontaktschalter",
                "area":"Interner Bereich"
              },
              {
                "errorCause": "Türkontaktschalter defekt",
                "troubleshooting": "Türkontaktschalter überprüfen / tauschen",
                "qualifiedPerson":true,
                "component":"Türkontaktschalter",
                "area":"Schaltschrank"
              },
        ]
      }},
      {"ER01":{
        "errorName": "Hochdruck Pressostat ausgelöst",
        "errorCauses":[
            {
                "errorCause": "Verlüssiger/Wärmetauscher verschmutzt",
                "troubleshooting": "Wartung beauftragen / Wärmetauscher reinigen",
                "qualifiedPerson":true,
                "component":"Verflüssiger Wärmetauscher",
                "area":"Externer Bereich"
            },
            {
                "errorCause": "Verflüssiger Ventilator defekt",
                "troubleshooting": "Ventilator prüfen / ggf. tauschen",
                "qualifiedPerson":true,
                "component":"Verflüssiger Ventilator",
                "area":"Externer Bereich"
              },
             {
                "errorCause":  "Lufteinlass blockiert",
                "troubleshooting": "Lufteinlass frei machen",
                "qualifiedPerson":false,
                "component":"Lufteinlass",
                "area":"Externer Bereich"
              },
              {
                "errorCause": "Hochdruck Pressostat defekt",
                "troubleshooting": "Gerät zur Überprüfung einsenden",
                "qualifiedPerson":true,
                "component":"Hochdruck Pressostat",
                "area":"Externer Bereich"
              },
        ]
      }},
      {"ER04": {
        "errorName": "Phasenfolge Fehler / Phasenausfall (Drehfeld falsch herum)",
        "errorCauses":[
            {
                "errorCause": "Falsches Drehfeld angelegt",
              "troubleshooting": "Drehfeld kontrollieren und ändern",
              "qualifiedPerson":true,
              "component":"Drehfeld",
              "area":"Interner Bereich"
            },
            {
                "errorCause": "Nur 2 Phasen verbunden",
                "troubleshooting": "Phasen Messen ob jede Phase vorhanden ist",
                "qualifiedPerson":true,
                "component":"Drehfeld",
                "area":"Interner Bereich"
              },
              {
                "errorCause": "Phasenfolge Relais defekt",
                "troubleshooting": "Relais prüfen und ggf. austauschen lassen",
                "qualifiedPerson":false,
                "component":"Relai",
                "area":"Interner Bereich"
              },
        ]
      }},
      {"ER05": {
        "errorName": "Sensor 1 /TS1 defekt",
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
                "troubleshooting": "Platine tauschen",
                "qualifiedPerson":false,
                "component":"Steuerplatine",
                "area":"Interner Bereich"
              },
        ]
      }},
      {"ER06": {
        "errorName": "Sensor 1 Minimum (Minimal Temp. Alarm)",
        "errorCauses":[
            {
                "errorCause": "Sensor (TS1) nicht richtig auf der Steuerplatine gesteckt",
                "troubleshooting": "Einbau Situation des Gerätes prüfen ggf. ändern",
                "qualifiedPerson":true,
                "component":"Schaltschrank komplett",
                "area":"Schaltschrank"
            },
            {
                "errorCause": "Sollwert des Kühlgerätes zu niedrig eingestellt",
                "troubleshooting": "Sollwert Einstellung prüfen und ändern",
                "qualifiedPerson":true,
                "component":"Software",
                "area":"Software"
              },
              {
                "errorCause": "Schaltschrank nicht richtig abgedichtet",
                "troubleshooting": "Schaltschrank Abdichtung sowie Einbau der Kühlgeräte prüfen lassen",
                "qualifiedPerson":true,
                "component":"Schaltschrank komplett",
                "area":"Externer Bereich"
              },
              {
                "errorCause": "Gerät im externen Bereich verschmutzt (Wärmetauscher)",
                "troubleshooting": "Gerät reinigen / Wärmetauscher prüfen ",
                "qualifiedPerson":false,
                "component":"Software",
                "area":"Software"
              },
        ]
      }},
      {"ER07": {
        "errorName": "Sensor 1 Maximum (Maximal Temp. Alarm)",
        "errorCauses":[
            {
                "errorCause": "Gerät im externen Bereich verschmutzt (Wärmetauscher)",
                "troubleshooting": "Gerät reinigen / Wärmetauscher prüfen ",
                "qualifiedPerson":false,
                "component":"Kühlgerät",
                "area":"Externer Bereich"
            },
            {
                "errorCause": "Gerät im internen Bereich verschmutzt",
                "troubleshooting": "Gerät reinigen / Wärmetauscher prüfen ",
                "qualifiedPerson":true,
                "component":"Kühlgerät",
                "area":"Interner Bereich"
              },
              {
                "errorCause": "Interner Lüfter ohne Funktion",
                "troubleshooting": "Interner Lüfter prüfen ggf. tauschen ",
                "qualifiedPerson":false,
                "component":"Interner Lüfter",
                "area":"Interner Bereich"
              },
              {
                "errorCause": "Undichtigkeit im Kältekreis (Ölspuren an Rohrleitungen)",
                "troubleshooting": "Hersteller kontaktieren / Gerät zur Rep. einsenden",
                "qualifiedPerson":true,
                "component":"Kältekreis",
                "area":"Kältekreis"
              },
              {
                "errorCause": "Kälteleistung des Gerätes nicht ausreichend",
                "troubleshooting": "Verlustleistung des Schaltschrankes prüfen  ",
                "qualifiedPerson":true,
                "component":"Schaltschrank komplett",
                "area":"Schaltschrank"
              },
              {
                "errorCause": "Expansions-Ventil defekt",
                "troubleshooting": "Hersteller kontaktieren / Gerät zur Rep. einsenden",
                "qualifiedPerson":true,
                "component":"Expansions-Ventil",
                "area":"Externer Bereich"
              },
        ]
      }},
      {"ER11": {
        "errorName": "Sensor 3 (TS3) defekt",
        "errorCauses":[
            {
                "errorCause": "Sensor (TS3) nicht richtig auf der Platine gesteckt",
                "troubleshooting": "Stecker Belegung prüfen ggf. korrigieren",
                "qualifiedPerson":true,
                "component":"Sensor 3",
                "area":"Interner Bereich"
            },
            {
                "errorCause": "Sensor (TS3) Leitung gebrochen (Kabelbruch)",
                "troubleshooting": "Sensor austauschen",
                "qualifiedPerson":true,
                "component":"Sensor 3",
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
      {"ER15": {
        "errorName": "Antifreeze Temp. |<1°C Sicherheitsabschaltung",
        "errorCauses":[
            {
                "errorCause": "Kältekreis defekt",
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
                "errorCause": "Sollwert Einstellung zu niedrig",
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
      {"ER16": {
        "errorName": "Sensor 4 (TS4 defekt)",
        "errorCauses":[
            {
                "errorCause": "Sensor (TS3) nicht richtig auf der Seuerplatine gesteckt",
                "troubleshooting": "Stecker Belegung prüfen ggf. korrigieren",
                "qualifiedPerson":true,
                "component":"Steuerplatine",
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
]

export default errorData;