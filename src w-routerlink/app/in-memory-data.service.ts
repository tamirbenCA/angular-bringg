import { InMemoryDbService } from 'angular-in-memory-web-api';



// I wish to get this from https://www.json-generator.com
// [
//   '{{repeat(100, 120)}}',
//   {
//     id: '{{objectId()}}',
//     isActive: '{{bool()}}',
//     picture: 'http://placehold.it/32x32',
//     age: '{{integer(20, 40)}}',
//     name: '{{firstName()}} {{surname()}}',
//     email: '{{email()}}',
//     latitude: '{{floating(-90.000001, 90)}}',
//     longitude: '{{floating(-180.000001, 180)}}'
//   }
// ]
// 
// Whan adding a user send the same request but with NO repeats.



export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const users = [
      {
        "id": "5a539629533cc30176cca0a0",
        "isActive": true,
        "picture": "http://placehold.it/32x32",
        "age": 24,
        "name": {
          "first": "Beverley",
          "last": "Faulkner"
        },
        "company": "TERSANKI",
        "email": "beverley.faulkner@tersanki.net",
        "latitude": "73.852715",
        "longitude": "30.754574"
      },
      {
        "id": "5a5396299a2e025001cd36c1",
        "isActive": false,
        "picture": "http://placehold.it/32x32",
        "age": 29,
        "name": {
          "first": "Tamera",
          "last": "Washington"
        },
        "company": "INTERGEEK",
        "email": "tamera.washington@intergeek.us",
        "latitude": "-25.170969",
        "longitude": "-120.888925"
      },
      {
        "id": "5a5396293387f13079276ba3",
        "isActive": false,
        "picture": "http://placehold.it/32x32",
        "age": 21,
        "name": {
          "first": "Jennifer",
          "last": "Fernandez"
        },
        "company": "STREZZO",
        "email": "jennifer.fernandez@strezzo.biz",
        "latitude": "57.13786",
        "longitude": "161.902784"
      },
      {
        "id": "5a5396298414173be54a5705",
        "isActive": true,
        "picture": "http://placehold.it/32x32",
        "age": 30,
        "name": {
          "first": "Flores",
          "last": "Little"
        },
        "company": "CUBICIDE",
        "email": "flores.little@cubicide.ca",
        "latitude": "72.000291",
        "longitude": "119.832899"
      },
      {
        "id": "5a5396290469963d9e34bdd1",
        "isActive": false,
        "picture": "http://placehold.it/32x32",
        "age": 31,
        "name": {
          "first": "Chambers",
          "last": "Valencia"
        },
        "company": "GINK",
        "email": "chambers.valencia@gink.com",
        "latitude": "60.001026",
        "longitude": "20.405755"
      },
      {
        "id": "5a53962942cb9fcf324b5006",
        "isActive": true,
        "picture": "http://placehold.it/32x32",
        "age": 29,
        "name": {
          "first": "Bernard",
          "last": "Charles"
        },
        "company": "KNOWLYSIS",
        "email": "bernard.charles@knowlysis.me",
        "latitude": "34.726881",
        "longitude": "157.185927"
      },
      {
        "id": "5a539629f6631841734a19da",
        "isActive": true,
        "picture": "http://placehold.it/32x32",
        "age": 26,
        "name": {
          "first": "Helga",
          "last": "Baxter"
        },
        "company": "RONELON",
        "email": "helga.baxter@ronelon.tv",
        "latitude": "63.653015",
        "longitude": "-64.793965"
      },
      {
        "id": "5a539629b0c09fe2a07ba138",
        "isActive": true,
        "picture": "http://placehold.it/32x32",
        "age": 35,
        "name": {
          "first": "Georgia",
          "last": "Hansen"
        },
        "company": "MANGLO",
        "email": "georgia.hansen@manglo.biz",
        "latitude": "13.711027",
        "longitude": "-3.100376"
      },
      {
        "id": "5a539629252e9f89b17c9370",
        "isActive": true,
        "picture": "http://placehold.it/32x32",
        "age": 34,
        "name": {
          "first": "Elvia",
          "last": "Wooten"
        },
        "company": "PHARMEX",
        "email": "elvia.wooten@pharmex.info",
        "latitude": "-15.56078",
        "longitude": "108.221276"
      },
      {
        "id": "5a539629b2f0a9a739252dd3",
        "isActive": false,
        "picture": "http://placehold.it/32x32",
        "age": 33,
        "name": {
          "first": "Concetta",
          "last": "Lawson"
        },
        "company": "ELECTONIC",
        "email": "concetta.lawson@electonic.io",
        "latitude": "-0.348683",
        "longitude": "-127.191161"
      },
      {
        "id": "5a53962973e94d4633c70ede",
        "isActive": false,
        "picture": "http://placehold.it/32x32",
        "age": 20,
        "name": {
          "first": "Mejia",
          "last": "Whitney"
        },
        "company": "PETICULAR",
        "email": "mejia.whitney@peticular.co.uk",
        "latitude": "3.57417",
        "longitude": "-1.70657"
      },
      {
        "id": "5a53962ae4304ac23acd4d84",
        "isActive": false,
        "picture": "http://placehold.it/32x32",
        "age": 36,
        "name": {
          "first": "Dickerson",
          "last": "Burns"
        },
        "company": "NORALEX",
        "email": "dickerson.burns@noralex.org",
        "latitude": "-53.835827",
        "longitude": "-111.671811"
      },
      {
        "id": "5a53962a10778d7626cb56a7",
        "isActive": true,
        "picture": "http://placehold.it/32x32",
        "age": 32,
        "name": {
          "first": "Beth",
          "last": "Lancaster"
        },
        "company": "ENERVATE",
        "email": "beth.lancaster@enervate.net",
        "latitude": "78.057684",
        "longitude": "2.317211"
      },
      {
        "id": "5a53962a2906063c61dab857",
        "isActive": true,
        "picture": "http://placehold.it/32x32",
        "age": 28,
        "name": {
          "first": "Finley",
          "last": "Banks"
        },
        "company": "EMPIRICA",
        "email": "finley.banks@empirica.us",
        "latitude": "56.984075",
        "longitude": "5.424892"
      },
      {
        "id": "5a53962aee64112e92a37c44",
        "isActive": true,
        "picture": "http://placehold.it/32x32",
        "age": 37,
        "name": {
          "first": "Laurel",
          "last": "Harmon"
        },
        "company": "ZOLAR",
        "email": "laurel.harmon@zolar.biz",
        "latitude": "65.953331",
        "longitude": "59.802758"
      },
      {
        "id": "5a53962a07b608cfc3df93f7",
        "isActive": false,
        "picture": "http://placehold.it/32x32",
        "age": 24,
        "name": {
          "first": "Hurley",
          "last": "Hebert"
        },
        "company": "ZAJ",
        "email": "hurley.hebert@zaj.ca",
        "latitude": "-56.245464",
        "longitude": "82.988618"
      },
      {
        "id": "5a53962ab443ef896506b8eb",
        "isActive": true,
        "picture": "http://placehold.it/32x32",
        "age": 23,
        "name": {
          "first": "Brady",
          "last": "Mccarty"
        },
        "company": "ZYPLE",
        "email": "brady.mccarty@zyple.com",
        "latitude": "77.688847",
        "longitude": "-72.666037"
      },
      {
        "id": "5a53962a384853f7b8f6e0c6",
        "isActive": true,
        "picture": "http://placehold.it/32x32",
        "age": 21,
        "name": {
          "first": "Jimenez",
          "last": "Fry"
        },
        "company": "LIMOZEN",
        "email": "jimenez.fry@limozen.me",
        "latitude": "7.495114",
        "longitude": "-64.389287"
      },
      {
        "id": "5a53962a4a2c98d643244a62",
        "isActive": true,
        "picture": "http://placehold.it/32x32",
        "age": 25,
        "name": {
          "first": "Clayton",
          "last": "Lang"
        },
        "company": "LIQUICOM",
        "email": "clayton.lang@liquicom.tv",
        "latitude": "-39.684288",
        "longitude": "170.987558"
      },
      {
        "id": "5a53962a82f178ac66cb9800",
        "isActive": true,
        "picture": "http://placehold.it/32x32",
        "age": 33,
        "name": {
          "first": "Cora",
          "last": "Porter"
        },
        "company": "EXPOSA",
        "email": "cora.porter@exposa.biz",
        "latitude": "-73.33098",
        "longitude": "-101.358104"
      },
      {
        "id": "5a53962aa1783fa40b2716bd",
        "isActive": false,
        "picture": "http://placehold.it/32x32",
        "age": 24,
        "name": {
          "first": "Elisa",
          "last": "Baird"
        },
        "company": "ECLIPTO",
        "email": "elisa.baird@eclipto.info",
        "latitude": "61.437066",
        "longitude": "-52.002521"
      },
      {
        "id": "5a53962a1c68545298d01e52",
        "isActive": false,
        "picture": "http://placehold.it/32x32",
        "age": 21,
        "name": {
          "first": "Oneal",
          "last": "Mann"
        },
        "company": "PROWASTE",
        "email": "oneal.mann@prowaste.io",
        "latitude": "11.868069",
        "longitude": "4.974133"
      },
      {
        "id": "5a53962af25eeaecc250bdc6",
        "isActive": false,
        "picture": "http://placehold.it/32x32",
        "age": 32,
        "name": {
          "first": "Alyce",
          "last": "Gutierrez"
        },
        "company": "VERTIDE",
        "email": "alyce.gutierrez@vertide.co.uk",
        "latitude": "-41.542839",
        "longitude": "-137.94592"
      },
      {
        "id": "5a53962a77ca24cbb44890c2",
        "isActive": false,
        "picture": "http://placehold.it/32x32",
        "age": 26,
        "name": {
          "first": "Dickson",
          "last": "Myers"
        },
        "company": "ZOSIS",
        "email": "dickson.myers@zosis.org",
        "latitude": "-62.685096",
        "longitude": "-146.99214"
      },
      {
        "id": "5a53962a359248b3a2eefbc4",
        "isActive": true,
        "picture": "http://placehold.it/32x32",
        "age": 20,
        "name": {
          "first": "Shelley",
          "last": "Logan"
        },
        "company": "PHUEL",
        "email": "shelley.logan@phuel.net",
        "latitude": "44.694737",
        "longitude": "57.3852"
      },
      {
        "id": "5a53962a488ba18f0d813941",
        "isActive": false,
        "picture": "http://placehold.it/32x32",
        "age": 22,
        "name": {
          "first": "Fitzpatrick",
          "last": "Jackson"
        },
        "company": "PLASMOX",
        "email": "fitzpatrick.jackson@plasmox.us",
        "latitude": "73.593524",
        "longitude": "3.460334"
      },
      {
        "id": "5a53962a286b9e9f7a836781",
        "isActive": true,
        "picture": "http://placehold.it/32x32",
        "age": 21,
        "name": {
          "first": "Susie",
          "last": "Santiago"
        },
        "company": "BOVIS",
        "email": "susie.santiago@bovis.biz",
        "latitude": "75.78176",
        "longitude": "16.367103"
      },
      {
        "id": "5a53962a5d240b205e502962",
        "isActive": false,
        "picture": "http://placehold.it/32x32",
        "age": 28,
        "name": {
          "first": "Haynes",
          "last": "Vaughn"
        },
        "company": "SPRINGBEE",
        "email": "haynes.vaughn@springbee.ca",
        "latitude": "23.410863",
        "longitude": "-115.483906"
      },
      {
        "id": "5a53962aa702e147a2dcbef6",
        "isActive": true,
        "picture": "http://placehold.it/32x32",
        "age": 33,
        "name": {
          "first": "Mccormick",
          "last": "Howell"
        },
        "company": "EXIAND",
        "email": "mccormick.howell@exiand.com",
        "latitude": "-10.491786",
        "longitude": "59.281124"
      },
      {
        "id": "5a53962a6b894f7458951bb2",
        "isActive": false,
        "picture": "http://placehold.it/32x32",
        "age": 31,
        "name": {
          "first": "Nell",
          "last": "Reese"
        },
        "company": "GADTRON",
        "email": "nell.reese@gadtron.me",
        "latitude": "-28.757504",
        "longitude": "-157.587424"
      },
      {
        "id": "5a53962ab5718884b991c87e",
        "isActive": true,
        "picture": "http://placehold.it/32x32",
        "age": 30,
        "name": {
          "first": "Jordan",
          "last": "Small"
        },
        "company": "OCTOCORE",
        "email": "jordan.small@octocore.tv",
        "latitude": "50.352448",
        "longitude": "170.311763"
      },
      {
        "id": "5a53962a5f045b2adf1263f3",
        "isActive": true,
        "picture": "http://placehold.it/32x32",
        "age": 34,
        "name": {
          "first": "Marilyn",
          "last": "England"
        },
        "company": "PROVIDCO",
        "email": "marilyn.england@providco.biz",
        "latitude": "-85.091092",
        "longitude": "-44.161401"
      },
      {
        "id": "5a53962ac743622553a2f613",
        "isActive": true,
        "picture": "http://placehold.it/32x32",
        "age": 30,
        "name": {
          "first": "Hardy",
          "last": "Reid"
        },
        "company": "OZEAN",
        "email": "hardy.reid@ozean.info",
        "latitude": "13.12079",
        "longitude": "69.551099"
      },
      {
        "id": "5a53962ad47d68220124e4e3",
        "isActive": true,
        "picture": "http://placehold.it/32x32",
        "age": 32,
        "name": {
          "first": "Skinner",
          "last": "Holden"
        },
        "company": "CENTREE",
        "email": "skinner.holden@centree.io",
        "latitude": "-61.206527",
        "longitude": "-125.610806"
      },
      {
        "id": "5a53962aab5ef000eef886f6",
        "isActive": false,
        "picture": "http://placehold.it/32x32",
        "age": 33,
        "name": {
          "first": "Mona",
          "last": "Gentry"
        },
        "company": "POLARIA",
        "email": "mona.gentry@polaria.co.uk",
        "latitude": "25.313148",
        "longitude": "-82.414574"
      },
      {
        "id": "5a53962a3d1f9873c0e25898",
        "isActive": true,
        "picture": "http://placehold.it/32x32",
        "age": 26,
        "name": {
          "first": "Strickland",
          "last": "Summers"
        },
        "company": "AVIT",
        "email": "strickland.summers@avit.org",
        "latitude": "68.563301",
        "longitude": "-170.748238"
      },
      {
        "id": "5a53962ac1184b6db4bc507a",
        "isActive": true,
        "picture": "http://placehold.it/32x32",
        "age": 31,
        "name": {
          "first": "Estrada",
          "last": "Chen"
        },
        "company": "APPLIDECK",
        "email": "estrada.chen@applideck.net",
        "latitude": "-59.336216",
        "longitude": "-167.572002"
      },
      {
        "id": "5a53962abf941f2c6e72dd69",
        "isActive": false,
        "picture": "http://placehold.it/32x32",
        "age": 38,
        "name": {
          "first": "Laverne",
          "last": "Vega"
        },
        "company": "OMNIGOG",
        "email": "laverne.vega@omnigog.us",
        "latitude": "89.099554",
        "longitude": "28.63468"
      },
      {
        "id": "5a53962a04df67197f7f60cb",
        "isActive": true,
        "picture": "http://placehold.it/32x32",
        "age": 38,
        "name": {
          "first": "Allie",
          "last": "Mcbride"
        },
        "company": "FLEXIGEN",
        "email": "allie.mcbride@flexigen.biz",
        "latitude": "72.946717",
        "longitude": "150.558199"
      },
      {
        "id": "5a53962ac9d52a5ed381a8f2",
        "isActive": false,
        "picture": "http://placehold.it/32x32",
        "age": 39,
        "name": {
          "first": "Simpson",
          "last": "Powers"
        },
        "company": "METROZ",
        "email": "simpson.powers@metroz.ca",
        "latitude": "-39.942955",
        "longitude": "104.429116"
      },
      {
        "id": "5a53962a0c18bcddf6c75078",
        "isActive": true,
        "picture": "http://placehold.it/32x32",
        "age": 30,
        "name": {
          "first": "Kaye",
          "last": "Avila"
        },
        "company": "CHILLIUM",
        "email": "kaye.avila@chillium.com",
        "latitude": "8.583885",
        "longitude": "149.801846"
      },
      {
        "id": "5a53962a2e0d50e58d67e445",
        "isActive": true,
        "picture": "http://placehold.it/32x32",
        "age": 22,
        "name": {
          "first": "Gregory",
          "last": "Hooper"
        },
        "company": "ZYTREX",
        "email": "gregory.hooper@zytrex.me",
        "latitude": "13.282757",
        "longitude": "-142.22421"
      },
      {
        "id": "5a53962a5b41208d67cd48cd",
        "isActive": false,
        "picture": "http://placehold.it/32x32",
        "age": 33,
        "name": {
          "first": "Melton",
          "last": "Martinez"
        },
        "company": "QUIZMO",
        "email": "melton.martinez@quizmo.tv",
        "latitude": "-1.024727",
        "longitude": "-5.615746"
      },
      {
        "id": "5a53962a6e2484f4f33552d8",
        "isActive": false,
        "picture": "http://placehold.it/32x32",
        "age": 37,
        "name": {
          "first": "Claire",
          "last": "Sandoval"
        },
        "company": "ANDERSHUN",
        "email": "claire.sandoval@andershun.biz",
        "latitude": "-69.969585",
        "longitude": "-96.115526"
      },
      {
        "id": "5a53962aace0eed7c0730b39",
        "isActive": true,
        "picture": "http://placehold.it/32x32",
        "age": 24,
        "name": {
          "first": "Talley",
          "last": "Medina"
        },
        "company": "EMTRAK",
        "email": "talley.medina@emtrak.info",
        "latitude": "-25.289915",
        "longitude": "-54.855338"
      },
      {
        "id": "5a53962aff2c460b4ee9f934",
        "isActive": false,
        "picture": "http://placehold.it/32x32",
        "age": 27,
        "name": {
          "first": "Aida",
          "last": "Merrill"
        },
        "company": "FLUM",
        "email": "aida.merrill@flum.io",
        "latitude": "-84.23967",
        "longitude": "93.283056"
      },
      {
        "id": "5a53962a3e94537978565ab6",
        "isActive": false,
        "picture": "http://placehold.it/32x32",
        "age": 28,
        "name": {
          "first": "Velasquez",
          "last": "Bolton"
        },
        "company": "MULTRON",
        "email": "velasquez.bolton@multron.co.uk",
        "latitude": "-39.825801",
        "longitude": "16.4046"
      },
      {
        "id": "5a53962a237a04e444327d3b",
        "isActive": false,
        "picture": "http://placehold.it/32x32",
        "age": 20,
        "name": {
          "first": "Jane",
          "last": "William"
        },
        "company": "JASPER",
        "email": "jane.william@jasper.org",
        "latitude": "62.268423",
        "longitude": "110.467832"
      },
      {
        "id": "5a53962aefec2df760de569d",
        "isActive": true,
        "picture": "http://placehold.it/32x32",
        "age": 29,
        "name": {
          "first": "Lynn",
          "last": "Livingston"
        },
        "company": "ERSUM",
        "email": "lynn.livingston@ersum.net",
        "latitude": "42.898831",
        "longitude": "-79.989209"
      },
      {
        "id": "5a53962a7ac1a30701354423",
        "isActive": false,
        "picture": "http://placehold.it/32x32",
        "age": 36,
        "name": {
          "first": "Latisha",
          "last": "Harding"
        },
        "company": "ROUGHIES",
        "email": "latisha.harding@roughies.us",
        "latitude": "70.658707",
        "longitude": "50.952856"
      },
      {
        "id": "5a53962ad1d95b8890a81001",
        "isActive": false,
        "picture": "http://placehold.it/32x32",
        "age": 31,
        "name": {
          "first": "Ryan",
          "last": "Britt"
        },
        "company": "ZANYMAX",
        "email": "ryan.britt@zanymax.biz",
        "latitude": "47.382874",
        "longitude": "60.030853"
      },
      {
        "id": "5a53962abbeda70bc58cc8d1",
        "isActive": false,
        "picture": "http://placehold.it/32x32",
        "age": 31,
        "name": {
          "first": "Lina",
          "last": "Langley"
        },
        "company": "TWIIST",
        "email": "lina.langley@twiist.ca",
        "latitude": "72.491253",
        "longitude": "33.546153"
      },
      {
        "id": "5a53962a4e0761d70793fd19",
        "isActive": true,
        "picture": "http://placehold.it/32x32",
        "age": 30,
        "name": {
          "first": "Golden",
          "last": "Noble"
        },
        "company": "ROCKLOGIC",
        "email": "golden.noble@rocklogic.com",
        "latitude": "37.851852",
        "longitude": "-107.663472"
      },
      {
        "id": "5a53962ac9b82f37170b56b8",
        "isActive": false,
        "picture": "http://placehold.it/32x32",
        "age": 34,
        "name": {
          "first": "Alexandra",
          "last": "Forbes"
        },
        "company": "MAGNINA",
        "email": "alexandra.forbes@magnina.me",
        "latitude": "-60.294577",
        "longitude": "2.197079"
      },
      {
        "id": "5a53962acad0c6ba4066676b",
        "isActive": false,
        "picture": "http://placehold.it/32x32",
        "age": 20,
        "name": {
          "first": "Goff",
          "last": "Foster"
        },
        "company": "UBERLUX",
        "email": "goff.foster@uberlux.tv",
        "latitude": "-81.807697",
        "longitude": "52.994409"
      },
      {
        "id": "5a53962a53bf389bf1a01568",
        "isActive": false,
        "picture": "http://placehold.it/32x32",
        "age": 27,
        "name": {
          "first": "Margie",
          "last": "Garrison"
        },
        "company": "PRIMORDIA",
        "email": "margie.garrison@primordia.biz",
        "latitude": "23.961369",
        "longitude": "169.385745"
      },
      {
        "id": "5a53962a3b96461665e9c5ec",
        "isActive": false,
        "picture": "http://placehold.it/32x32",
        "age": 30,
        "name": {
          "first": "Tammie",
          "last": "Harvey"
        },
        "company": "SNOWPOKE",
        "email": "tammie.harvey@snowpoke.info",
        "latitude": "81.971729",
        "longitude": "107.383998"
      },
      {
        "id": "5a53962a3a091ea7dc5dfc53",
        "isActive": true,
        "picture": "http://placehold.it/32x32",
        "age": 29,
        "name": {
          "first": "Vinson",
          "last": "Jarvis"
        },
        "company": "COSMETEX",
        "email": "vinson.jarvis@cosmetex.io",
        "latitude": "-51.638665",
        "longitude": "-66.420573"
      },
      {
        "id": "5a53962a0fe6acfb54370898",
        "isActive": true,
        "picture": "http://placehold.it/32x32",
        "age": 22,
        "name": {
          "first": "Phyllis",
          "last": "Gardner"
        },
        "company": "ZIZZLE",
        "email": "phyllis.gardner@zizzle.co.uk",
        "latitude": "27.962047",
        "longitude": "-173.141727"
      },
      {
        "id": "5a53962a25d1dc5ed6a9a85d",
        "isActive": false,
        "picture": "http://placehold.it/32x32",
        "age": 36,
        "name": {
          "first": "Lilian",
          "last": "Kelley"
        },
        "company": "VENDBLEND",
        "email": "lilian.kelley@vendblend.org",
        "latitude": "10.70115",
        "longitude": "134.608047"
      },
      {
        "id": "5a53962affeb54824e970207",
        "isActive": false,
        "picture": "http://placehold.it/32x32",
        "age": 27,
        "name": {
          "first": "Erica",
          "last": "Hardy"
        },
        "company": "ETERNIS",
        "email": "erica.hardy@eternis.net",
        "latitude": "15.158085",
        "longitude": "-123.045059"
      },
      {
        "id": "5a53962a00f6ae0d818525c0",
        "isActive": true,
        "picture": "http://placehold.it/32x32",
        "age": 23,
        "name": {
          "first": "Tran",
          "last": "Gill"
        },
        "company": "NETAGY",
        "email": "tran.gill@netagy.us",
        "latitude": "50.881365",
        "longitude": "156.415701"
      },
      {
        "id": "5a53962afe81078051bbf28d",
        "isActive": false,
        "picture": "http://placehold.it/32x32",
        "age": 27,
        "name": {
          "first": "Gallegos",
          "last": "Wolfe"
        },
        "company": "TURNABOUT",
        "email": "gallegos.wolfe@turnabout.biz",
        "latitude": "-24.892728",
        "longitude": "-14.342404"
      },
      {
        "id": "5a53962a97d83c3e071284e8",
        "isActive": true,
        "picture": "http://placehold.it/32x32",
        "age": 34,
        "name": {
          "first": "Herring",
          "last": "Short"
        },
        "company": "MULTIFLEX",
        "email": "herring.short@multiflex.ca",
        "latitude": "-79.647771",
        "longitude": "-123.153249"
      },
      {
        "id": "5a53962a4a21d57d0892c984",
        "isActive": true,
        "picture": "http://placehold.it/32x32",
        "age": 34,
        "name": {
          "first": "Bobbi",
          "last": "Huff"
        },
        "company": "KINETICUT",
        "email": "bobbi.huff@kineticut.com",
        "latitude": "-60.849667",
        "longitude": "-104.442206"
      },
      {
        "id": "5a53962af68cf2c6337e66d4",
        "isActive": false,
        "picture": "http://placehold.it/32x32",
        "age": 29,
        "name": {
          "first": "Christa",
          "last": "Hart"
        },
        "company": "PIVITOL",
        "email": "christa.hart@pivitol.me",
        "latitude": "-33.6957",
        "longitude": "51.487794"
      },
      {
        "id": "5a53962a026f05c41235b176",
        "isActive": false,
        "picture": "http://placehold.it/32x32",
        "age": 23,
        "name": {
          "first": "Alicia",
          "last": "Mckenzie"
        },
        "company": "QIMONK",
        "email": "alicia.mckenzie@qimonk.tv",
        "latitude": "-82.692123",
        "longitude": "90.179628"
      },
      {
        "id": "5a53962aae6e1053a728cac4",
        "isActive": true,
        "picture": "http://placehold.it/32x32",
        "age": 33,
        "name": {
          "first": "Cassie",
          "last": "Ross"
        },
        "company": "EYERIS",
        "email": "cassie.ross@eyeris.biz",
        "latitude": "24.182607",
        "longitude": "-59.222227"
      },
      {
        "id": "5a53962a6568d7202b3675fc",
        "isActive": false,
        "picture": "http://placehold.it/32x32",
        "age": 40,
        "name": {
          "first": "Hattie",
          "last": "Graves"
        },
        "company": "ZOLARITY",
        "email": "hattie.graves@zolarity.info",
        "latitude": "-79.014368",
        "longitude": "-124.153865"
      },
      {
        "id": "5a53962a8e22ce78d672f931",
        "isActive": true,
        "picture": "http://placehold.it/32x32",
        "age": 27,
        "name": {
          "first": "Emerson",
          "last": "Massey"
        },
        "company": "ZYTRAX",
        "email": "emerson.massey@zytrax.io",
        "latitude": "28.455064",
        "longitude": "-87.307297"
      },
      {
        "id": "5a53962a0d08a11cce8de118",
        "isActive": false,
        "picture": "http://placehold.it/32x32",
        "age": 34,
        "name": {
          "first": "Bowers",
          "last": "Rivera"
        },
        "company": "CENTREXIN",
        "email": "bowers.rivera@centrexin.co.uk",
        "latitude": "18.068093",
        "longitude": "134.173282"
      },
      {
        "id": "5a53962afaeff4194b9b7705",
        "isActive": false,
        "picture": "http://placehold.it/32x32",
        "age": 20,
        "name": {
          "first": "Tammy",
          "last": "Ball"
        },
        "company": "SLOFAST",
        "email": "tammy.ball@slofast.org",
        "latitude": "-2.22232",
        "longitude": "63.813465"
      },
      {
        "id": "5a53962a7fa416b01fdded2d",
        "isActive": false,
        "picture": "http://placehold.it/32x32",
        "age": 39,
        "name": {
          "first": "Angelia",
          "last": "Whitaker"
        },
        "company": "IMPERIUM",
        "email": "angelia.whitaker@imperium.net",
        "latitude": "-78.186169",
        "longitude": "-96.505742"
      },
      {
        "id": "5a53962adf7999647e4ad9c6",
        "isActive": true,
        "picture": "http://placehold.it/32x32",
        "age": 40,
        "name": {
          "first": "Frye",
          "last": "Frank"
        },
        "company": "INVENTURE",
        "email": "frye.frank@inventure.us",
        "latitude": "-22.105429",
        "longitude": "-6.798226"
      },
      {
        "id": "5a53962a65de6536c4b507a3",
        "isActive": false,
        "picture": "http://placehold.it/32x32",
        "age": 36,
        "name": {
          "first": "Casandra",
          "last": "Owen"
        },
        "company": "BILLMED",
        "email": "casandra.owen@billmed.biz",
        "latitude": "55.656952",
        "longitude": "63.417971"
      },
      {
        "id": "5a53962a70635501bf0cd38d",
        "isActive": false,
        "picture": "http://placehold.it/32x32",
        "age": 26,
        "name": {
          "first": "Maryann",
          "last": "Hardin"
        },
        "company": "BEDLAM",
        "email": "maryann.hardin@bedlam.ca",
        "latitude": "-24.768827",
        "longitude": "107.375946"
      },
      {
        "id": "5a53962ac6107592dbbecbf6",
        "isActive": true,
        "picture": "http://placehold.it/32x32",
        "age": 33,
        "name": {
          "first": "Dominguez",
          "last": "Waller"
        },
        "company": "APPLIDEC",
        "email": "dominguez.waller@applidec.com",
        "latitude": "43.448978",
        "longitude": "-14.842023"
      },
      {
        "id": "5a53962a5a8d8786e16de62d",
        "isActive": false,
        "picture": "http://placehold.it/32x32",
        "age": 24,
        "name": {
          "first": "Ladonna",
          "last": "Monroe"
        },
        "company": "FURNAFIX",
        "email": "ladonna.monroe@furnafix.me",
        "latitude": "-58.331598",
        "longitude": "149.144194"
      },
      {
        "id": "5a53962a912740909d8e8363",
        "isActive": false,
        "picture": "http://placehold.it/32x32",
        "age": 21,
        "name": {
          "first": "Isabella",
          "last": "Willis"
        },
        "company": "BOSTONIC",
        "email": "isabella.willis@bostonic.tv",
        "latitude": "-48.254907",
        "longitude": "51.903937"
      },
      {
        "id": "5a53962ae3db1884ceeccabd",
        "isActive": true,
        "picture": "http://placehold.it/32x32",
        "age": 23,
        "name": {
          "first": "Workman",
          "last": "Richards"
        },
        "company": "IRACK",
        "email": "workman.richards@irack.biz",
        "latitude": "-6.726997",
        "longitude": "40.21201"
      },
      {
        "id": "5a53962a9d9af16cc51b12c8",
        "isActive": true,
        "picture": "http://placehold.it/32x32",
        "age": 28,
        "name": {
          "first": "Jacobs",
          "last": "Strong"
        },
        "company": "AQUAZURE",
        "email": "jacobs.strong@aquazure.info",
        "latitude": "-36.794743",
        "longitude": "-56.930897"
      },
      {
        "id": "5a53962adc99c985e23b9304",
        "isActive": true,
        "picture": "http://placehold.it/32x32",
        "age": 30,
        "name": {
          "first": "Gilda",
          "last": "Osborne"
        },
        "company": "MAKINGWAY",
        "email": "gilda.osborne@makingway.io",
        "latitude": "-13.937328",
        "longitude": "38.776023"
      },
      {
        "id": "5a53962a84ef04694c0b2d72",
        "isActive": false,
        "picture": "http://placehold.it/32x32",
        "age": 31,
        "name": {
          "first": "Hobbs",
          "last": "Higgins"
        },
        "company": "ECSTASIA",
        "email": "hobbs.higgins@ecstasia.co.uk",
        "latitude": "32.457196",
        "longitude": "34.604897"
      },
      {
        "id": "5a53962a0c6cc99916c80d78",
        "isActive": false,
        "picture": "http://placehold.it/32x32",
        "age": 38,
        "name": {
          "first": "Callahan",
          "last": "Sanders"
        },
        "company": "SLOGANAUT",
        "email": "callahan.sanders@sloganaut.org",
        "latitude": "88.997682",
        "longitude": "-25.917137"
      },
      {
        "id": "5a53962a043b3fd74a691b76",
        "isActive": true,
        "picture": "http://placehold.it/32x32",
        "age": 34,
        "name": {
          "first": "Luz",
          "last": "Lucas"
        },
        "company": "DATAGEN",
        "email": "luz.lucas@datagen.net",
        "latitude": "-34.954833",
        "longitude": "165.320625"
      },
      {
        "id": "5a53962ac55a4c0f85012de2",
        "isActive": true,
        "picture": "http://placehold.it/32x32",
        "age": 27,
        "name": {
          "first": "Sweeney",
          "last": "Patrick"
        },
        "company": "KOZGENE",
        "email": "sweeney.patrick@kozgene.us",
        "latitude": "-20.688335",
        "longitude": "-38.641593"
      },
      {
        "id": "5a53962a160478b8b80299ea",
        "isActive": false,
        "picture": "http://placehold.it/32x32",
        "age": 25,
        "name": {
          "first": "Delacruz",
          "last": "Sutton"
        },
        "company": "FURNITECH",
        "email": "delacruz.sutton@furnitech.biz",
        "latitude": "76.157635",
        "longitude": "-178.16147"
      },
      {
        "id": "5a53962a6e0099110b6dc3d4",
        "isActive": true,
        "picture": "http://placehold.it/32x32",
        "age": 21,
        "name": {
          "first": "Deirdre",
          "last": "Green"
        },
        "company": "NEBULEAN",
        "email": "deirdre.green@nebulean.ca",
        "latitude": "29.261156",
        "longitude": "111.826727"
      },
      {
        "id": "5a53962abd0c587abaddc534",
        "isActive": false,
        "picture": "http://placehold.it/32x32",
        "age": 36,
        "name": {
          "first": "Joni",
          "last": "Norris"
        },
        "company": "KONGENE",
        "email": "joni.norris@kongene.com",
        "latitude": "-53.815286",
        "longitude": "-83.088626"
      },
      {
        "id": "5a53962a153cb90499f0b523",
        "isActive": false,
        "picture": "http://placehold.it/32x32",
        "age": 27,
        "name": {
          "first": "Booth",
          "last": "Campos"
        },
        "company": "FARMEX",
        "email": "booth.campos@farmex.me",
        "latitude": "-84.480572",
        "longitude": "-26.5003"
      },
      {
        "id": "5a53962a26416fcddfbd6c8b",
        "isActive": false,
        "picture": "http://placehold.it/32x32",
        "age": 35,
        "name": {
          "first": "Luna",
          "last": "Sellers"
        },
        "company": "KENEGY",
        "email": "luna.sellers@kenegy.tv",
        "latitude": "8.981644",
        "longitude": "-12.172662"
      },
      {
        "id": "5a53962ace6845cb518f3be9",
        "isActive": true,
        "picture": "http://placehold.it/32x32",
        "age": 22,
        "name": {
          "first": "Jenifer",
          "last": "Moon"
        },
        "company": "GORGANIC",
        "email": "jenifer.moon@gorganic.biz",
        "latitude": "-67.667752",
        "longitude": "140.335479"
      },
      {
        "id": "5a53962aabc5c8a421b330ee",
        "isActive": false,
        "picture": "http://placehold.it/32x32",
        "age": 39,
        "name": {
          "first": "Merritt",
          "last": "Fisher"
        },
        "company": "GENEKOM",
        "email": "merritt.fisher@genekom.info",
        "latitude": "-4.974996",
        "longitude": "12.462749"
      },
      {
        "id": "5a53962a0d9b8b7264d9d008",
        "isActive": true,
        "picture": "http://placehold.it/32x32",
        "age": 24,
        "name": {
          "first": "Mae",
          "last": "Callahan"
        },
        "company": "BIOSPAN",
        "email": "mae.callahan@biospan.io",
        "latitude": "-46.490569",
        "longitude": "162.216275"
      },
      {
        "id": "5a53962a31ded3aea930b793",
        "isActive": true,
        "picture": "http://placehold.it/32x32",
        "age": 35,
        "name": {
          "first": "Erma",
          "last": "Cortez"
        },
        "company": "PROSELY",
        "email": "erma.cortez@prosely.co.uk",
        "latitude": "39.779198",
        "longitude": "118.384549"
      },
      {
        "id": "5a53962aad8e38ec787836bc",
        "isActive": false,
        "picture": "http://placehold.it/32x32",
        "age": 31,
        "name": {
          "first": "Oliver",
          "last": "Meadows"
        },
        "company": "KIDGREASE",
        "email": "oliver.meadows@kidgrease.org",
        "latitude": "-70.439005",
        "longitude": "77.835431"
      },
      {
        "id": "5a53962a202d0d2f5c39f863",
        "isActive": false,
        "picture": "http://placehold.it/32x32",
        "age": 21,
        "name": {
          "first": "Ester",
          "last": "Price"
        },
        "company": "NETPLAX",
        "email": "ester.price@netplax.net",
        "latitude": "76.588006",
        "longitude": "-58.392583"
      },
      {
        "id": "5a53962a9da3440e8105e596",
        "isActive": false,
        "picture": "http://placehold.it/32x32",
        "age": 30,
        "name": {
          "first": "Pearson",
          "last": "Estes"
        },
        "company": "TSUNAMIA",
        "email": "pearson.estes@tsunamia.us",
        "latitude": "31.72764",
        "longitude": "-39.704205"
      },
      {
        "id": "5a53962a5099989a25114169",
        "isActive": false,
        "picture": "http://placehold.it/32x32",
        "age": 20,
        "name": {
          "first": "Johnston",
          "last": "Macias"
        },
        "company": "TELEPARK",
        "email": "johnston.macias@telepark.biz",
        "latitude": "58.454235",
        "longitude": "33.308722"
      },
      {
        "id": "5a53962a3d813abdea51ed69",
        "isActive": false,
        "picture": "http://placehold.it/32x32",
        "age": 21,
        "name": {
          "first": "Jacklyn",
          "last": "Mcleod"
        },
        "company": "BLUEGRAIN",
        "email": "jacklyn.mcleod@bluegrain.ca",
        "latitude": "74.68782",
        "longitude": "50.877625"
      }
    ]
    return {users};
  }
}