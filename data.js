// Dati del calendario. tipo: "moderne" e/o "storiche". Date AAAA-MM-GG.
const GARE = [
  {
    "id": "rally-dei-laghi",
    "nome": "Rally dei Laghi",
    "provincia": "VA",
    "km": 315,
    "tipo": [
      "moderne"
    ],
    "inizio": "2026-01-28",
    "fine": "2026-02-01",
    "location": []
  },
  {
    "id": "rally-del-bardolino",
    "nome": "Rally del Bardolino",
    "provincia": "VR",
    "km": 115,
    "tipo": [
      "moderne",
      "storiche"
    ],
    "inizio": "2026-03-13",
    "fine": "2026-03-14",
    "location": [
      {
        "link": "https://www.google.com/maps/dir/Via+San+Marco,+36016+Thiene+VI/45.5294096,10.7381554/@45.546765,10.9785729,61759m/data=!3m1!1e3!4m11!4m10!1m5!1m1!1s0x4778ca3d1dd83161:0x88f46a3b8ba2c1d4!2m2!1d11.4942799!2d45.6948837!1m1!4e1!3e0!5i1?entry=ttu&g_ep=EgoyMDI2MTEwMy4wIKXMDSoASAFQAw%3D%3D",
        "img": "img/rally-del-bardolino-1.webp"
      },
      {
        "link": "https://www.google.com/maps/dir/Via+San+Marco,+36016+Thiene+VI/45.5572066,10.7233304/@45.5396536,10.8001779,14963m/data=!3m1!1e3!4m11!4m10!1m5!1m1!1s0x4778ca3d1dd83161:0x88f46a3b8ba2c1d4!2m2!1d11.4942799!2d45.6948837!1m1!4e1!3e0!5i1?entry=ttu&g_ep=EgoyMDI2MTEwMy4wIKXMDSoASAFQAw%3D%3D",
        "img": "img/rally-del-bardolino-2.webp"
      }
    ]
  },
  {
    "id": "rally-del-ciocco",
    "nome": "Rally del Ciocco",
    "provincia": "GE",
    "km": 345,
    "tipo": [
      "moderne"
    ],
    "inizio": "2026-03-27",
    "fine": "2026-03-29",
    "location": []
  },
  {
    "id": "paganella-rally",
    "nome": "Paganella Rally",
    "provincia": "TN",
    "km": 138,
    "tipo": [
      "moderne",
      "storiche"
    ],
    "inizio": "2026-04-18",
    "fine": "2026-04-19",
    "location": [
      {
        "link": "https://www.google.com/maps/dir/Via+San+Marco,+36016+Thiene+VI/46.1770556,11.052677/@45.9545885,11.0842012,122619m/data=!3m1!1e3!4m10!4m9!1m5!1m1!1s0x4778ca3d1dd83161:0x88f46a3b8ba2c1d4!2m2!1d11.4942799!2d45.6948837!1m1!4e1!3e0?entry=ttu&g_ep=EgoyMDI2MTEwMy4wIKXMDSoASAFQAw%3D%3D",
        "img": "img/paganella-rally-1.webp"
      },
      {
        "link": "https://www.google.com/maps/dir/Via+San+Marco,+36016+Thiene+VI/Elettro+Casalinghi+Zeni+Di+Depetris+Adriana+E+C.+Sas,+Via+Clamer,+38010+Andalo+TN/@46.0735262,11.0316764,53465m/data=!3m1!1e3!4m14!4m13!1m5!1m1!1s0x4778ca3d1dd83161:0x88f46a3b8ba2c1d4!2m2!1d11.4942799!2d45.6948837!1m5!1m1!1s0x478265a43d5d220d:0x52877f76827c37c1!2m2!1d11.0071864!2d46.1646572!3e0?entry=ttu&g_ep=EgoyMDI2MTEwMy4wIKXMDSoASAFQAw%3D%3D",
        "img": "img/paganella-rally-2.webp"
      }
    ]
  },
  {
    "id": "rally-friuliveneziagiulia",
    "nome": "Rally FriuliVeneziaGiulia",
    "provincia": "UD",
    "km": 185,
    "tipo": [
      "moderne",
      "storiche"
    ],
    "inizio": "2026-05-01",
    "fine": "2026-05-02",
    "location": [
      {
        "link": "https://www.google.com/maps/dir/Via+San+Marco,+36016+Thiene+VI/46.1783848,13.3867497/@45.7978798,11.7622156,245930m/data=!3m1!1e3!4m10!4m9!1m5!1m1!1s0x4778ca3d1dd83161:0x88f46a3b8ba2c1d4!2m2!1d11.4942799!2d45.6948837!1m1!4e1!3e0?entry=ttu&g_ep=EgoyMDI2MTEwMy4wIKXMDSoASAFQAw%3D%3D",
        "img": "img/rally-friuliveneziagiulia-1.webp"
      },
      {
        "link": "",
        "img": ""
      }
    ]
  },
  {
    "id": "rally-benacvs",
    "nome": "Rally Benacvs",
    "provincia": "VR",
    "km": 115,
    "tipo": [
      "moderne",
      "storiche"
    ],
    "inizio": "2026-05-08",
    "fine": "2026-05-09",
    "location": []
  },
  {
    "id": "valsugana-historic",
    "nome": "Valsugana Historic",
    "provincia": "TN",
    "km": 85,
    "tipo": [
      "storiche"
    ],
    "inizio": "2026-06-01",
    "fine": "2026-06-02",
    "location": []
  },
  {
    "id": "rally-due-valli",
    "nome": "Rally Due Valli",
    "provincia": "VR",
    "km": 100,
    "tipo": [
      "moderne"
    ],
    "inizio": "2026-06-04",
    "fine": "2026-06-06",
    "location": [
      {
        "link": "https://www.google.com/maps/dir/Via+San+Marco,+36016+Thiene+VI/45.596786,11.0696906/@45.5921286,11.0747179,6786m/data=!3m1!1e3!4m10!4m9!1m5!1m1!1s0x4778ca3d1dd83161:0x88f46a3b8ba2c1d4!2m2!1d11.4942799!2d45.6948837!1m1!4e1!3e0?entry=ttu&g_ep=EgoyMDI2MTEwMy4wIKXMDSoASAFQAw%3D%3D",
        "img": "img/rally-due-valli-1.webp"
      },
      {
        "link": "https://www.google.com/maps/dir/Via+San+Marco,+36016+Thiene+VI/45.4889024,11.0901339/@45.5050209,11.1063977,15887m/data=!3m1!1e3!4m10!4m9!1m5!1m1!1s0x4778ca3d1dd83161:0x88f46a3b8ba2c1d4!2m2!1d11.4942799!2d45.6948837!1m1!4e1!3e0?entry=ttu&g_ep=EgoyMDI2MTEwMy4wIKXMDSoASAFQAw%3D%3D",
        "img": "img/rally-due-valli-2.webp"
      }
    ]
  },
  {
    "id": "rally-san-martino-di-castrozza",
    "nome": "Rally San Martino Di Castrozza",
    "provincia": "TN",
    "km": 84,
    "tipo": [
      "moderne",
      "storiche"
    ],
    "inizio": "2026-06-19",
    "fine": "2026-06-20",
    "location": []
  },
  {
    "id": "rally-roma-capitale",
    "nome": "Rally Roma Capitale",
    "provincia": "RM",
    "km": 550,
    "tipo": [
      "moderne"
    ],
    "inizio": "2026-07-03",
    "fine": "2026-07-05",
    "location": []
  },
  {
    "id": "rally-della-marca",
    "nome": "Rally della Marca",
    "provincia": "TV",
    "km": 60,
    "tipo": [
      "moderne",
      "storiche"
    ],
    "inizio": "2026-07-10",
    "fine": "2026-07-11",
    "location": [
      {
        "link": "https://www.google.com/maps/dir/Via+San+Marco,+36016+Thiene+VI/45.8882652,11.8976635/@45.7921188,11.5586199,61489m/data=!3m2!1e3!4b1!4m10!4m9!1m5!1m1!1s0x4778ca3d1dd83161:0x88f46a3b8ba2c1d4!2m2!1d11.4942799!2d45.6948837!1m1!4e1!3e0?entry=ttu&g_ep=EgoyMDI2MTEwMy4wIKXMDSoASAFQAw%3D%3D",
        "img": "img/rally-della-marca-1.webp"
      },
      {
        "link": "https://www.google.com/maps/dir/Via+San+Marco,+36016+Thiene+VI/45.8286105,12.1474308/@45.8289433,12.1483386,770m/data=!3m1!1e3!4m10!4m9!1m5!1m1!1s0x4778ca3d1dd83161:0x88f46a3b8ba2c1d4!2m2!1d11.4942799!2d45.6948837!1m1!4e1!3e0?entry=ttu&g_ep=EgoyMDI2MTEwMy4wIKXMDSoASAFQAw%3D%3D",
        "img": "img/rally-della-marca-2.webp"
      }
    ]
  },
  {
    "id": "rally-campagnolo",
    "nome": "Rally Campagnolo",
    "provincia": "VI",
    "km": 35,
    "tipo": [
      "storiche"
    ],
    "inizio": "2026-07-17",
    "fine": "2026-07-18",
    "location": [
      {
        "link": "https://www.google.com/maps/dir/Via+San+Marco,+36016+Thiene+VI/45.6814143,11.3265716/@45.6878579,11.3699643,15401m/data=!3m2!1e3!4b1!4m10!4m9!1m5!1m1!1s0x4778ca3d1dd83161:0x88f46a3b8ba2c1d4!2m2!1d11.4942799!2d45.6948837!1m1!4e1!3e0?entry=ttu&g_ep=EgoyMDI2MTEwMy4wIKXMDSoASAFQAw%3D%3D",
        "img": "img/rally-campagnolo-1.webp"
      },
      {
        "link": "https://www.google.com/maps/dir/Via+San+Marco,+36016+Thiene+VI/45.7576912,11.3330141/@45.7551662,11.3379479,2275m/data=!3m1!1e3!4m10!4m9!1m5!1m1!1s0x4778ca3d1dd83161:0x88f46a3b8ba2c1d4!2m2!1d11.4942799!2d45.6948837!1m1!4e1!3e0?entry=ttu&g_ep=EgoyMDI2MTEwMy4wIKXMDSoASAFQAw%3D%3D",
        "img": "img/rally-campagnolo-2.webp"
      }
    ]
  },
  {
    "id": "rally-scorse",
    "nome": "Rally Scorsè",
    "provincia": "VE",
    "km": 60,
    "tipo": [
      "moderne",
      "storiche"
    ],
    "inizio": "2026-07-25",
    "fine": "2026-07-26",
    "location": [
      {
        "link": "https://www.google.com/maps/dir/Via+San+Marco,+36016+Thiene+VI/45.5815006,12.1838679/@45.587088,11.9339443,33883m/data=!3m1!1e3!4m10!4m9!1m5!1m1!1s0x4778ca3d1dd83161:0x88f46a3b8ba2c1d4!2m2!1d11.4942799!2d45.6948837!1m1!4e1!3e0?entry=ttu&g_ep=EgoyMDI2MTEwMy4wIKXMDSoASAFQAw%3D%3D",
        "img": "img/rally-scorse-1.webp"
      },
      {
        "link": "https://www.google.com/maps/dir/Via+San+Marco,+36016+Thiene+VI/45.5928308,12.1573912/@45.59196,12.1595848,547m/data=!3m1!1e3!4m10!4m9!1m5!1m1!1s0x4778ca3d1dd83161:0x88f46a3b8ba2c1d4!2m2!1d11.4942799!2d45.6948837!1m1!4e1!3e0?entry=ttu&g_ep=EgoyMDI2MTEwMy4wIKXMDSoASAFQAw%3D%3D",
        "img": "img/rally-scorse-2.webp"
      },
      {
        "link": "https://www.google.com/maps/dir/Via+San+Marco,+36016+Thiene+VI/45.6058105,12.2028585/@45.6065708,12.2050288,601m/data=!3m1!1e3!4m10!4m9!1m5!1m1!1s0x4778ca3d1dd83161:0x88f46a3b8ba2c1d4!2m2!1d11.4942799!2d45.6948837!1m1!4e1!3e0?entry=ttu&g_ep=EgoyMDI2MTEwMy4wIKXMDSoASAFQAw%3D%3D",
        "img": "img/rally-scorse-3.webp"
      }
    ]
  },
  {
    "id": "rally-1000-miglia",
    "nome": "Rally 1000 miglia",
    "provincia": "B",
    "km": null,
    "tipo": [],
    "inizio": "2026-08-04",
    "fine": "2026-08-05",
    "location": [
      {
        "link": "https://www.google.com/maps/dir/Via+San+Marco,+36016+Thiene+VI/45.6840914,10.4334948/@45.5466485,10.6081292,123518m/data=!3m1!1e3!4m10!4m9!1m5!1m1!1s0x4778ca3d1dd83161:0x88f46a3b8ba2c1d4!2m2!1d11.4942799!2d45.6948837!1m1!4e1!3e0?entry=ttu&g_ep=EgoyMDI2MTEwMy4wIKXMDSoASAFQAw%3D%3D",
        "img": "img/rally-1000-miglia-1.webp"
      },
      {
        "link": "https://www.google.com/maps/dir/Via+San+Marco,+36016+Thiene+VI/45.6746738,10.3425836/@45.5466485,10.6081292,123518m/data=!3m1!1e3!4m10!4m9!1m5!1m1!1s0x4778ca3d1dd83161:0x88f46a3b8ba2c1d4!2m2!1d11.4942799!2d45.6948837!1m1!4e1!3e0?entry=ttu&g_ep=EgoyMDI2MTEwMy4wIKXMDSoASAFQAw%3D%3D",
        "img": "img/rally-1000-miglia-2.webp"
      }
    ]
  },
  {
    "id": "rally-valli-della-carnia",
    "nome": "Rally Valli Della Carnia",
    "provincia": "UD",
    "km": 215,
    "tipo": [
      "moderne"
    ],
    "inizio": "2026-08-21",
    "fine": "2026-08-22",
    "location": []
  },
  {
    "id": "rally-citta-di-schio",
    "nome": "Rally Città Di Schio",
    "provincia": "VI",
    "km": 20,
    "tipo": [
      "moderne",
      "storiche"
    ],
    "inizio": "2026-09-11",
    "fine": "2026-09-12",
    "location": [
      {
        "link": "https://www.google.com/maps/dir/Via+San+Marco,+36016+Thiene+VI/45.7576912,11.3330141/@45.7551662,11.3379479,2275m/data=!3m1!1e3!4m10!4m9!1m5!1m1!1s0x4778ca3d1dd83161:0x88f46a3b8ba2c1d4!2m2!1d11.4942799!2d45.6948837!1m1!4e1!3e0?entry=ttu&g_ep=EgoyMDI2MTEwMy4wIKXMDSoASAFQAw%3D%3D",
        "img": "img/rally-citta-di-schio-1.webp"
      },
      {
        "link": "",
        "img": ""
      }
    ]
  },
  {
    "id": "rally-legend",
    "nome": "Rally Legend",
    "provincia": "RSM",
    "km": 300,
    "tipo": [
      "moderne",
      "storiche"
    ],
    "inizio": "2026-10-08",
    "fine": "2026-10-11",
    "location": []
  },
  {
    "id": "rally-citta-di-bassano",
    "nome": "Rally Città Di Bassano",
    "provincia": "VI",
    "km": 30,
    "tipo": [
      "moderne",
      "storiche"
    ],
    "inizio": "2026-10-09",
    "fine": "2026-10-10",
    "location": [
      {
        "link": "https://www.google.com/maps/dir/Via+San+Marco,+36016+Thiene+VI/45.8051871,11.5345692/@45.7526982,11.4512247,30766m/data=!3m2!1e3!4b1!4m10!4m9!1m5!1m1!1s0x4778ca3d1dd83161:0x88f46a3b8ba2c1d4!2m2!1d11.4942799!2d45.6948837!1m1!4e1!3e0?entry=ttu&g_ep=EgoyMDI2MTEwMy4wIKXMDSoASAFQAw%3D%3D",
        "img": "img/rally-citta-di-bassano-1.webp"
      },
      {
        "link": "",
        "img": ""
      }
    ]
  },
  {
    "id": "rally-sanremo",
    "nome": "Rally Sanremo",
    "provincia": "IM",
    "km": 490,
    "tipo": [
      "moderne",
      "storiche"
    ],
    "inizio": "2026-10-16",
    "fine": "2026-10-18",
    "location": []
  },
  {
    "id": "rally-piancavallo",
    "nome": "Rally Piancavallo",
    "provincia": "PN",
    "km": 120,
    "tipo": [
      "moderne",
      "storiche"
    ],
    "inizio": "2026-10-24",
    "fine": "2026-10-25",
    "location": [
      {
        "link": "https://www.google.com/maps/dir/Via+San+Marco,+36016+Thiene+VI/45.5572066,10.7233304/@45.5396536,10.8001779,14963m/data=!3m1!1e3!4m11!4m10!1m5!1m1!1s0x4778ca3d1dd83161:0x88f46a3b8ba2c1d4!2m2!1d11.4942799!2d45.6948837!1m1!4e1!3e0!5i1?entry=ttu&g_ep=EgoyMDI2MTEwMy4wIKXMDSoASAFQAw%3D%3D",
        "img": "img/rally-piancavallo-1.webp"
      },
      {
        "link": "",
        "img": ""
      }
    ]
  },
  {
    "id": "rally-lago-di-garda",
    "nome": "Rally Lago di Garda",
    "provincia": "",
    "km": null,
    "tipo": [],
    "inizio": "2026-10-31",
    "fine": "2026-11-01",
    "location": [
      {
        "link": "https://www.google.com/maps/dir/Via+San+Marco,+36016+Thiene+VI/45.5916798,10.5230379/@45.5466485,10.6081292,123518m/data=!3m1!1e3!4m10!4m9!1m5!1m1!1s0x4778ca3d1dd83161:0x88f46a3b8ba2c1d4!2m2!1d11.4942799!2d45.6948837!1m1!4e1!3e0?entry=ttu&g_ep=EgoyMDI2MTEwMy4wIKXMDSoASAFQAw%3D%3D",
        "img": "img/rally-lago-di-garda-1.webp"
      },
      {
        "link": "",
        "img": ""
      }
    ]
  },
  {
    "id": "rally-valpolicella-e-val-dadige",
    "nome": "Rally lessinia Historic",
    "provincia": "VR",
    "km": 110,
    "tipo": [
      "moderne",
      "storiche"
    ],
    "inizio": "2026-11-26",
    "fine": "2026-11-27",
    "location": [
      {
        "link": "https://www.google.com/maps/dir/Via+San+Marco,+36016+Thiene+VI/45.5572066,10.7233304/@45.5396536,10.8001779,14963m/data=!3m1!1e3!4m11!4m10!1m5!1m1!1s0x4778ca3d1dd83161:0x88f46a3b8ba2c1d4!2m2!1d11.4942799!2d45.6948837!1m1!4e1!3e0!5i1?entry=ttu&g_ep=EgoyMDI2MTEwMy4wIKXMDSoASAFQAw%3D%3D",
        "img": ""
      },
      {
        "link": "https://www.google.com/maps/dir/Via+San+Marco,+36016+Thiene+VI/45.5572066,10.7233304/@45.5396536,10.8001779,14963m/data=!3m1!1e3!4m11!4m10!1m5!1m1!1s0x4778ca3d1dd83161:0x88f46a3b8ba2c1d4!2m2!1d11.4942799!2d45.6948837!1m1!4e1!3e0!5i1?entry=ttu&g_ep=EgoyMDI2MTEwMy4wIKXMDSoASAFQAw%3D%3D",
        "img": ""
      }
    ]
  },
  {
    "id": "prealpi-master-show",
    "nome": "Prealpi Master Show",
    "provincia": "TV",
    "km": 70,
    "tipo": [
      "moderne"
    ],
    "inizio": "2026-12-12",
    "fine": "2026-12-13",
    "location": [
      {
        "link": "https://www.google.com/maps/dir/Via+San+Marco,+36016+Thiene+VI/45.5572066,10.7233304/@45.5396536,10.8001779,14963m/data=!3m1!1e3!4m11!4m10!1m5!1m1!1s0x4778ca3d1dd83161:0x88f46a3b8ba2c1d4!2m2!1d11.4942799!2d45.6948837!1m1!4e1!3e0!5i1?entry=ttu&g_ep=EgoyMDI2MTEwMy4wIKXMDSoASAFQAw%3D%3D",
        "img": ""
      },
      {
        "link": "https://www.google.com/maps/dir/Via+San+Marco,+36016+Thiene+VI/45.5572066,10.7233304/@45.5396536,10.8001779,14963m/data=!3m1!1e3!4m11!4m10!1m5!1m1!1s0x4778ca3d1dd83161:0x88f46a3b8ba2c1d4!2m2!1d11.4942799!2d45.6948837!1m1!4e1!3e0!5i1?entry=ttu&g_ep=EgoyMDI2MTEwMy4wIKXMDSoASAFQAw%3D%3D",
        "img": ""
      }
    ]
  },
  {
    "id": "colli-euganei",
    "nome": "Colli euganei",
    "provincia": "PD",
    "km": 50,
    "tipo": [
      "moderne",
      "storiche"
    ],
    "inizio": "",
    "fine": "",
    "location": [
      {
        "link": "https://www.google.com/maps/dir/Via+San+Marco,+36016+Thiene+VI/45.5572066,10.7233304/@45.5396536,10.8001779,14963m/data=!3m1!1e3!4m11!4m10!1m5!1m1!1s0x4778ca3d1dd83161:0x88f46a3b8ba2c1d4!2m2!1d11.4942799!2d45.6948837!1m1!4e1!3e0!5i1?entry=ttu&g_ep=EgoyMDI2MTEwMy4wIKXMDSoASAFQAw%3D%3D",
        "img": ""
      },
      {
        "link": "https://www.google.com/maps/dir/Via+San+Marco,+36016+Thiene+VI/45.5572066,10.7233304/@45.5396536,10.8001779,14963m/data=!3m1!1e3!4m11!4m10!1m5!1m1!1s0x4778ca3d1dd83161:0x88f46a3b8ba2c1d4!2m2!1d11.4942799!2d45.6948837!1m1!4e1!3e0!5i1?entry=ttu&g_ep=EgoyMDI2MTEwMy4wIKXMDSoASAFQAw%3D%3D",
        "img": ""
      }
    ]
  },
  {
    "id": "rally-2-valli-storico",
    "nome": "Rally 2 valli storico",
    "provincia": "",
    "km": null,
    "tipo": [],
    "inizio": "",
    "fine": "",
    "location": [
      {
        "link": "https://www.google.com/maps/dir/Via+San+Marco,+36016+Thiene+VI/45.4576628,11.2426356/@45.5505244,11.2241734,61755m/data=!3m2!1e3!4b1!4m10!4m9!1m5!1m1!1s0x4778ca3d1dd83161:0x88f46a3b8ba2c1d4!2m2!1d11.4942799!2d45.6948837!1m1!4e1!3e0?entry=ttu&g_ep=EgoyMDI2MTEwMy4wIKXMDSoASAFQAw%3D%3D",
        "img": "img/rally-2-valli-storico-1.webp"
      },
      {
        "link": "https://www.google.com/maps/dir/Via+San+Marco,+36016+Thiene+VI/45.5672779,11.2159871/@45.5663065,11.2193848,31039m/data=!3m1!1e3!4m10!4m9!1m5!1m1!1s0x4778ca3d1dd83161:0x88f46a3b8ba2c1d4!2m2!1d11.4942799!2d45.6948837!1m1!4e1!3e0?entry=ttu&g_ep=EgoyMDI2MTEwMy4wIKXMDSoASAFQAw%3D%3D",
        "img": "img/rally-2-valli-storico-2.webp"
      }
    ]
  }
];

const ALTRE_GARE = [
  "10-12 Val d’Orcia (CIRT)",
  "20-21 Rally del Sebino",
  "31 luglio-2 agosto Regione Piemonte (CIAR)"
];
