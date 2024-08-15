// import { TileLayer, MapContainer } from "react-leaflet";
// import { HeatmapLayer } from "react-leaflet-heatmap-layer-v3";
// import { useEffect, useRef, useState } from "react";
// import "leaflet/dist/leaflet.css";
// import img from "./placeholder.png";
// import L from "leaflet";

// const customMarkerIcon = L.icon({
//   iconUrl: img,
//   iconSize: [28, 30],
//   iconAnchor: [12.5, 41]
// });

// const heatmapData = [
//   [22.6708,71.5724],[22.7251,71.6370],[22.8554,71.7918],[22.9939,71.4600],[22.5761,71.2010]]

// const Cartograph = () => {
//   const [position, setPosition] = useState([
//     52.5981984642711,
//     -0.26200987606836373
//   ]);
//   const [data, setData] = useState([]);
//   const heatmapOptions = {
//     radius: 20,
//     blur: 20,
//     maxZoom: 18,
//     minOpacity: 0.5,
//     maxOpacity: 1
//   };

//   useEffect(() => {
//     setData(heatmapData);
//   }, [data]);

//   return (
//     <div >
//         <MapContainer
//           center={[22.6708, 71.5724]}
//           zoom={13}
//           key={Math.random()}
//           style={{ height: '80vh', width: '100%' }}
//         >
//           <HeatmapLayer
//             fitBoundsOnLoad
//             fitBoundsOnUpdate
//             points={data}
//             longitudeExtractor={(point) => point[1]}
//             latitudeExtractor={(point) => point[0]}
//             key={Math.random() + Math.random()}
//             intensityExtractor={(point) => parseFloat(point[2])}
//             // max={100}
//             {...heatmapOptions}
//           />
//           <TileLayer
//             attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//             url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//           />
//         </MapContainer>
//       {/* </div> */}
//     </div>
//   );
// }

// export default Cartograph;

// import { TileLayer, MapContainer } from "react-leaflet";
// import { HeatmapLayer } from "react-leaflet-heatmap-layer-v3";
// import { useEffect, useState } from "react";
// import "leaflet/dist/leaflet.css";
// import img from "./placeholder.png";
// import L from "leaflet";

// const customMarkerIcon = L.icon({
//   iconUrl: img,
//   iconSize: [28, 30],
//   iconAnchor: [12.5, 41]
// });

// const pointSets = [
//   [[22.6708, 71.5724], [22.7251, 71.6370], [22.8554, 71.7918], [22.9939, 71.4600], [22.5761, 71.2010]],
//   [[22.5896, 71.4018], [22.6698, 71.3297], [22.7555, 71.5408], [22.8123, 71.6875], [22.9017, 71.8144]],
//   [[22.6198, 71.4826], [22.7241, 71.5634], [22.8344, 71.6147], [22.9481, 71.7635], [22.6817, 71.8822]],
//   [[22.6217, 71.5528], [22.7105, 71.6892], [22.7964, 71.4805], [22.8792, 71.7326], [22.5643, 71.6021]]
// ];

// const Cartograph = () => {
//   const [data, setData] = useState(pointSets[0]);

//   useEffect(() => {
//     let index = 0;
//     const interval = setInterval(() => {
//       index++;
//       if (index < pointSets.length) {
//         setData(pointSets[index]);
//       } else {
//         clearInterval(interval); // Stop the interval once the last set is displayed
//       }
//     }, 2000);

//     return () => clearInterval(interval); // Cleanup interval on unmount
//   }, []);

//   const heatmapOptions = {
//     radius: 20,
//     blur: 20,
//     maxZoom: 18,
//     minOpacity: 0.5,
//     maxOpacity: 1
//   };

//   return (
//     <div>
//       <MapContainer
//         center={[22.6708, 71.5724]}
//         zoom={10}
//         style={{ height: '80vh', width: '100%' }}
//       >
//         <HeatmapLayer
//           fitBoundsOnLoad={false}
//           fitBoundsOnUpdate={false}
//           points={data}
//           longitudeExtractor={(point) => point[1]}
//           latitudeExtractor={(point) => point[0]}
//           intensityExtractor={(point) => parseFloat(point[2] || 1)} // Default intensity if not provided
//           {...heatmapOptions}
//         />
//         <TileLayer
//           attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//         />
//       </MapContainer>
//     </div>
//   );
// }

// export default Cartograph;

//this is final till now
// import { TileLayer, MapContainer, Marker, Tooltip } from "react-leaflet";
// import { HeatmapLayer } from "react-leaflet-heatmap-layer-v3";
// import { useEffect, useState } from "react";
// import "leaflet/dist/leaflet.css";
// import img from "./placeholder.png";
// import L from "leaflet";

// const customMarkerIcon = L.icon({
//   iconUrl: img,
//   iconSize: [28, 30],
//   iconAnchor: [12.5, 41]
// });

// // const pointSets = [
// //   [[22.6708, 71.5724], [22.7251, 71.6370], [22.8554, 71.7918], [22.9939, 71.4600], [22.5761, 71.2010]],
// //   [[22.5896, 71.4018], [22.6698, 71.3297], [22.7555, 71.5408], [22.8123, 71.6875], [22.9017, 71.8144]],
// //   [[22.6198, 71.4826], [22.7241, 71.5634], [22.8344, 71.6147], [22.9481, 71.7635], [22.6817, 71.8822]],
// //   [[22.6217, 71.5528], [22.7105, 71.6892], [22.7964, 71.4805], [22.8792, 71.7326], [22.5643, 71.6021]]
// // ];
// const pointSets = [
//   [
//     [22.3072, 73.1812], // Vadodara
//     [21.1702, 72.8311], // Surat
//     [22.4707, 70.0577], // Rajkot
//     [21.5222, 70.4579], // Junagadh
//     [23.2156, 69.3522]  // Bhuj
//   ],
//   [
//     [23.0225, 72.5714], // Ahmedabad
//     [22.2736, 70.7984], // Morbi
//     [22.2375, 70.6615], // Jamnagar
//     [23.2420, 69.6669], // Mandvi
//     [22.3094, 72.1363]  // Anand
//   ],
//   [
//     [20.9467, 72.9520], // Valsad
//     [22.8030, 70.8223], // Gandhidham
//     [23.7333, 72.6667], // Mehsana
//     [23.1125, 70.0989], // Dhrol
//     [21.7645, 72.1519]  // Bharuch
//   ],
//   [
//     [22.5804, 72.9662], // Nadiad
//     [21.7604, 72.6822], // Navsari
//     [21.1877, 72.7964], // Udhna
//     [23.1281, 72.6062], // Kalol
//     [22.8037, 71.3895]  // Botad
//   ],
//   [
//     [21.7679, 70.6270], // Veraval
//     [21.5500, 70.4581], // Kodinar
//     [23.2824, 69.6708], // Mundra
//     [23.5880, 72.3693], // Himmatnagar
//     [22.7654, 71.6673]  // Surendranagar
//   ],
//   [
//     [23.0833, 70.3667], // Kandla
//     [22.8166, 69.6212], // Mandvi (Kutch)
//     [20.9807, 71.9121], // Amreli
//     [23.6446, 70.2144], // Bhachau
//     [22.3000, 70.7833]  // Gondal
//   ],
//   [
//     [21.6417, 69.6295], // Porbandar
//     [22.2704, 73.1951], // Karamsad
//     [21.5196, 71.7720], // Palitana
//     [22.8896, 71.1676], // Dhandhuka
//     [23.8033, 72.4011]  // Vijapur
//   ],
//   [
//     [23.0537, 72.5463], // Gandhinagar
//     [23.1553, 69.6833], // Anjar
//     [21.7679, 72.1402], // Dahej
//     [22.3072, 71.6393], // Halvad
//     [22.6854, 72.8702]  // Patan
//   ],
//   [
//     [22.2010, 72.7965], // Bhavnagar
//     [22.7359, 73.1993], // Halol
//     [22.8467, 69.8572], // Nakhatrana
//     [22.7390, 71.7333], // Viramgam
//     [22.9937, 71.3026]  // Wankaner
//   ],
//   [
//     [23.0951, 72.6492], // Dehgam
//     [21.8869, 72.6436], // Vapi
//     [23.4945, 72.7091], // Kadi
//     [22.4673, 70.0567], // Paddhari
//     [23.0794, 72.5937]  // Kalol (Gandhinagar)
//   ],
//   [
//     [23.0135, 70.2333], // Adipur
//     [23.3498, 73.1583], // Lunawada
//     [22.5794, 72.9693], // Mahemdavad
//     [22.7412, 71.7326], // Maliya
//     [21.3145, 70.3647]  // Mangrol
//   ],
//   [
//     [21.2468, 71.5674], // Diu (Union Territory)
//     [22.1236, 71.6669], // Muli
//     [21.7645, 71.9675], // Sihor
//     [22.0732, 72.9352], // Tithal
//     [21.1985, 72.7997]  // Sachin
//   ],
//   [
//     [23.0333, 72.6333], // Sanand
//     [22.8833, 70.8000], // Keshod
//     [23.0386, 70.2206], // Samakhiali
//     [23.2122, 72.6844], // Himatnagar
//     [22.8154, 71.6667]  // Surendranagar
//   ],
//   [
//     [22.5504, 72.0669], // Wadhwan
//     [22.0987, 70.0926], // Chotila
//     [23.2513, 72.6208], // Vijapur
//     [23.2599, 72.8567], // Visnagar
//     [23.1167, 70.1833]  // Kutch
//   ],
//   [
//     [22.8239, 73.3327], // Dabhoi
//     [23.2222, 70.8000], // Dhrangadhra
//     [23.8471, 72.1431], // Vijaynagar
//     [22.1003, 72.6185], // Olpad
//     [21.2500, 72.8167]  // Magdalla
//   ],
//   [
//     [22.5654, 70.5817], // Jasdan
//     [23.0516, 69.6687], // Naliya
//     [21.9425, 70.7429], // Bhavnagar
//     [23.8506, 72.3742], // Prantij
//     [21.6427, 69.6295]  // Ranavav
//   ],
//   [
//     [22.8358, 73.1551], // Bodeli
//     [22.2025, 70.9439], // Junagadh
//     [22.9151, 70.7364], // Jamnagar
//     [21.1255, 71.7221], // Una
//     [23.6676, 72.5468]  // Prantij
//   ],
//   [
//     [23.1480, 69.6640], // Bhachau
//     [21.7581, 72.1367], // Bharuch
//     [23.1377, 72.6023], // Kalol
//     [23.1765, 70.2666], // Rapar
//     [21.5394, 70.4581]  // Kodinar
//   ],
//   [
//     [23.2186, 72.6505], // Dholka
//     [22.8080, 73.0023], // Dabhoi
//     [23.0338, 72.6405], // Kadi
//     [22.9723, 73.1757], // Vaghodia
//     [21.9605, 73.5548]  // Kevadia
//   ],
//   [
//     [21.3000, 71.7833], // Somnath
//     [22.8696, 70.9283], // Shapar
//     [23.1168, 70.3333], // Morbi
//     [21.9056, 73.6915], // Mandvi (Surat)
//     [22.4203, 69.8762]  // Bhuj
//   ],
//   [
//     [23.1122, 72.5597], // Nadiad
//     [21.3667, 71.8417], // Diu
//     [22.8333, 70.8333], // Ranavav
//     [21.5294, 70.4468], // Kodinar
//     [22.7500, 71.7167]  // Dhandhuka
//   ]
// ];

const pointSets = [[[28.687648988258573, 77.02443305021204], [28.84757627739629, 77.1454018529781], [28.798764075111567, 77.12070736796198], [28.596784601387938, 76.89714450609921], [28.84629898011564, 77.24606046730567]], [[28.688514830981806, 77.028541837043], [28.835277525954382, 77.14874912387398], [28.784908071158327, 77.13493329596398], [28.589559096051733, 76.90395795314663], [28.836977981162185, 77.25699412692116]], [[28.68938067370504, 77.03265062387393], [28.82297877451247, 77.15209639476988], [28.771052067205087, 77.14915922396598], [28.582333590715525, 76.91077140019404], [28.827656982208733, 77.26792778653665]], [[28.69024651642827, 77.03675941070487], [28.81068002307056, 77.15544366566577], [28.757196063251847, 77.16338515196799], [28.575108085379316, 76.91758484724144], [28.818335983255277, 77.27886144615215]], [[28.691112359151504, 77.04086819753583], [28.79838127162865, 77.15879093656166], [28.743340059298603, 77.17761107996998], [28.56788258004311, 76.92439829428885], [28.80901498430182, 77.28979510576764]], [[28.69197820187474, 77.04497698436677], [28.78608252018674, 77.16213820745755], [28.729484055345363, 77.19183700797198], [28.560657074706903, 76.93121174133626], [28.79969398534837, 77.30072876538313]], [[28.692844044597972, 77.04908577119771], [28.77378376874483, 77.16548547835343], [28.715628051392123, 77.20606293597399], [28.553431569370694, 76.93802518838368], [28.790372986394914, 77.31166242499862]], [[28.693709887321205, 77.05319455802866], [28.76148501730292, 77.16883274924933], [28.701772047438883, 77.220288863976], [28.546206064034486, 76.94483863543108], [28.781051987441458, 77.3225960846141]], [[28.694575730044438, 77.0573033448596], [28.74918626586101, 77.17218002014522], [28.687916043485643, 77.23451479197799], [28.53898055869828, 76.95165208247849], [28.771730988488002, 77.3335297442296]], [[28.69544157276767, 77.06141213169056], [28.736887514419102, 77.1755272910411], [28.674060039532403, 77.24874071997999], [28.531755053362073, 76.95846552952591], [28.762409989534547, 77.34446340384508]], [[28.696307415490903, 77.0655209185215], [28.72458876297719, 77.178874561937], [28.660204035579163, 77.262966647982], [28.524529548025864, 76.96527897657332], [28.753088990581094, 77.35539706346059]], [[28.697173258214136, 77.06962970535244], [28.71229001153528, 77.18222183283288], [28.646348031625923, 77.27719257598399], [28.51730404268966, 76.97209242362072], [28.74376799162764, 77.36633072307608]], [[28.69803910093737, 77.0737384921834], [28.69999126009337, 77.18556910372878], [28.632492027672683, 77.291418503986], [28.51007853735345, 76.97890587066813], [28.734446992674183, 77.37726438269156]], [[28.6989049436606, 77.07784727901434], [28.68769250865146, 77.18891637462467], [28.618636023719443, 77.305644431988], [28.502853032017242, 76.98571931771554], [28.72512599372073, 77.38819804230705]], [[28.699770786383837, 77.08195606584528], [28.67539375720955, 77.19226364552055], [28.604780019766203, 77.31987035999], [28.495627526681034, 76.99253276476296], [28.715804994767275, 77.39913170192254]], [[28.70063662910707, 77.08606485267623], [28.66309500576764, 77.19561091641644], [28.59092401581296, 77.334096287992], [28.48840202134483, 76.99934621181036], [28.70648399581382, 77.4]], [[28.701502471830302, 77.09017363950717], [28.65079625432573, 77.19895818731233], [28.57706801185972, 77.348322215994], [28.48117651600862, 77.00615965885777], [28.697162996860364, 77.4]], [[28.702368314553535, 77.09428242633811], [28.638497502883823, 77.20230545820823], [28.56321200790648, 77.36254814399601], [28.473951010672412, 77.01297310590519], [28.687841997906908, 77.4]], [[28.703234157276768, 77.09839121316907], [28.626198751441912, 77.20565272910412], [28.54935600395324, 77.376774071998], [28.466725505336207, 77.0197865529526], [28.678520998953456, 77.4]], [[28.7041, 77.1025], [28.6139, 77.209], [28.5355, 77.391], [28.4595, 77.0266], [28.6692, 77.4]]]
const pointSets1 = 

[[[23.906172483588918, 72.59215634751529], [23.889053924957075, 70.95232392009618], [20.540659724448066, 68.8845093308418], [21.54802682930958, 72.9791212288238], [21.86382592921103, 73.51837081173528]], [[23.85966340550529, 72.59106390817237], [23.80579845522249, 71.06963318745954], [20.573793423161323, 69.09222462921853], [21.586214890924868, 72.86186747993834], [21.815556143463077, 73.48856182164394]], [[23.813154327421664, 72.58997146882946], [23.72254298548791, 71.1869424548229], [20.606927121874584, 69.29993992759529], [21.62440295254015, 72.74461373105287], [21.76728635771513, 73.45875283155262]], [[23.766645249338037, 72.58887902948656], [23.639287515753324, 71.30425172218627], [20.640060820587845, 69.50765522597203], [21.66259101415544, 72.6273599821674], [21.71901657196718, 73.42894384146129]], [[23.72013617125441, 72.58778659014365], [23.556032046018743, 71.42156098954962], [20.673194519301106, 69.71537052434878], [21.700779075770722, 72.51010623328195], [21.670746786219233, 73.39913485136995]], [[23.673627093170783, 72.58669415080074], [23.47277657628416, 71.53887025691297], [20.706328218014363, 69.92308582272553], [21.73896713738601, 72.39285248439649], [21.622477000471285, 73.36932586127863]], [[23.627118015087156, 72.58560171145783], [23.389521106549577, 71.65617952427634], [20.739461916727624, 70.13080112110228], [21.777155199001292, 72.27559873551102], [21.574207214723334, 73.3395168711873]], [[23.58060893700353, 72.58450927211491], [23.306265636814995, 71.77348879163969], [20.772595615440885, 70.33851641947902], [21.81534326061658, 72.15834498662555], [21.525937428975386, 73.30970788109596]], [[23.5340998589199, 72.583416832772], [23.22301016708041, 71.89079805900306], [20.805729314154142, 70.54623171785578], [21.853531322231863, 72.04109123774009], [21.477667643227438, 73.27989889100463]], [[23.48759078083627, 72.5823243934291], [23.13975469734583, 72.00810732636641], [20.838863012867403, 70.75394701623253], [21.891719383847146, 71.92383748885463], [21.429397857479486, 73.25008990091331]], [[23.441081702752644, 72.58123195408619], [23.056499227611248, 72.12541659372977], [20.871996711580664, 70.96166231460927], [21.929907445462433, 71.80658373996917], [21.38112807173154, 73.22028091082197]], [[23.394572624669017, 72.58013951474328], [22.973243757876663, 72.24272586109313], [20.90513041029392, 71.16937761298603], [21.968095507077717, 71.68932999108371], [21.33285828598359, 73.19047192073064]], [[23.34806354658539, 72.57904707540037], [22.88998828814208, 72.36003512845649], [20.938264109007182, 71.37709291136277], [22.006283568693004, 71.57207624219824], [21.284588500235643, 73.1606629306393]], [[23.301554468501763, 72.57795463605746], [22.806732818407497, 72.47734439581986], [20.971397807720443, 71.58480820973952], [22.044471630308287, 71.45482249331278], [21.236318714487695, 73.13085394054798]], [[23.255045390418136, 72.57686219671454], [22.723477348672915, 72.59465366318321], [21.0045315064337, 71.79252350811626], [22.082659691923574, 71.33756874442732], [21.188048928739743, 73.10104495045665]], [[23.20853631233451, 72.57576975737163], [22.640221878938334, 72.71196293054656], [21.03766520514696, 72.00023880649302], [22.120847753538857, 71.22031499554186], [21.139779142991795, 73.07123596036531]], [[23.162027234250882, 72.57467731802873], [22.55696640920375, 72.82927219790993], [21.070798903860222, 72.20795410486976], [22.159035815154144, 71.1030612466564], [21.091509357243847, 73.04142697027399]], [[23.115518156167255, 72.57358487868582], [22.473710939469168, 72.94658146527328], [21.103932602573483, 72.41566940324651], [22.197223876769428, 70.98580749777092], [21.043239571495896, 73.01161798018266]], [[23.069009078083628, 72.57249243934291], [22.390455469734583, 73.06389073263665], [21.13706630128674, 72.62338470162325], [22.235411938384715, 70.86855374888546], [20.994969785747948, 72.98180899009132]], [[23.0225, 72.5714], [22.3072, 73.1812], [21.1702, 72.8311], [22.2736, 70.7513], [20.9467, 72.952]]]
// const Cartograph = () => {
//   const [data, setData] = useState(pointSets[0]);

//   useEffect(() => {
//     let index = 0;
//     const interval = setInterval(() => {
//       index++;
//       if (index < pointSets.length) {
//         setData(pointSets[index]);
//       } else {
//         clearInterval(interval); // Stop the interval once the last set is displayed
//       }
//     }, 1000);

//     return () => clearInterval(interval); // Cleanup interval on unmount
//   }, []);

//   const heatmapOptions = {
//     radius: 20,
//     blur: 20,
//     maxZoom: 18,
//     minOpacity: 0.5,
//     maxOpacity: 1
//   };

//   return (
//     <div>
//       <MapContainer
//         center={[22.6708, 71.5724]}
//         zoom={5}
//         style={{ height: '80vh', width: '100%' }}
//       >
//         <HeatmapLayer
//           fitBoundsOnLoad={false}
//           fitBoundsOnUpdate={false}
//           points={data}
//           longitudeExtractor={(point) => point[1]}
//           latitudeExtractor={(point) => point[0]}
//           intensityExtractor={(point) => parseFloat(point[2] || 1)} // Default intensity if not provided
//           {...heatmapOptions}
//         />
//         <TileLayer
//           attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//         />
//         {data.map((point, index) => (
//           <Marker
//             key={index}
//             position={[point[0], point[1]]}
//             icon={customMarkerIcon}
//           >
//             <Tooltip permanent>
//               <span>{index + 1}</span>
//             </Tooltip>
//           </Marker>
//         ))}
//       </MapContainer>
//     </div>
//   );
// }

// export default Cartograph;

//zooming feature kaam kar raha hia isme
// import { TileLayer, MapContainer, Marker, Tooltip, useMap } from "react-leaflet";
// import { HeatmapLayer } from "react-leaflet-heatmap-layer-v3";
// import { useEffect, useState } from "react";
// import "leaflet/dist/leaflet.css";
// import img from "./placeholder.png";
// import L from "leaflet";

// const customMarkerIcon = L.icon({
//   iconUrl: img,
//   iconSize: [28, 30],
//   iconAnchor: [12.5, 41]
// });

// const pointSets = [
//   [[22.6708, 71.5724], [22.7251, 71.6370], [22.8554, 71.7918], [22.9939, 71.4600], [22.5761, 71.2010]],
//   [[22.5896, 71.4018], [22.6698, 71.3297], [22.7555, 71.5408], [22.8123, 71.6875], [22.9017, 71.8144]],
//   [[22.6198, 71.4826], [22.7241, 71.5634], [22.8344, 71.6147], [22.9481, 71.7635], [22.6817, 71.8822]],
//   [[22.6217, 71.5528], [22.7105, 71.6892], [22.7964, 71.4805], [22.8792, 71.7326], [22.5643, 71.6021]]
// ];

// const cityCenters = {
//   Gujarat: [22.6708, 71.5724],
//   Delhi: [28.7041, 77.1025],
//   Mumbai: [19.0760, 72.8777],
//   Bangalore: [12.9716, 77.5946],
//   Kolkata: [22.5726, 88.3639]
// };

// const CitySelector = ({ onCityChange }) => {
//   return (
//     <select onChange={onCityChange} style={{ marginBottom: '10px' }}>
//       <option value="">Select a city</option>
//       <option value="Gujarat">Gujarat</option>
//       <option value="Delhi">Delhi</option>
//       <option value="Mumbai">Mumbai</option>
//       <option value="Bangalore">Bangalore</option>
//       <option value="Kolkata">Kolkata</option>
//     </select>
//   );
// };

// const MapUpdater = ({ center, zoom }) => {
//   const map = useMap();

//   useEffect(() => {
//     if (center && zoom) {
//       map.setView(center, zoom);
//     }
//   }, [center, zoom, map]);

//   return null;
// };

// const Cartograph = () => {
//   const [data, setData] = useState(pointSets[0]);
//   const [mapCenter, setMapCenter] = useState([22.6708, 71.5724]);
//   const [mapZoom, setMapZoom] = useState(5);

//   useEffect(() => {
//     let index = 0;
//     const interval = setInterval(() => {
//       index++;
//       if (index < pointSets.length) {
//         setData(pointSets[index]);
//       } else {
//         clearInterval(interval);
//       }
//     }, 2000);

//     return () => clearInterval(interval);
//   }, []);

//   const handleCityChange = (event) => {
//     const city = event.target.value;
//     if (cityCenters[city]) {
//       setMapCenter(cityCenters[city]);
//       setMapZoom(8); // Set zoom level between 5 and 8
//     }
//   };
// const nameWare = ['Warehouse 1','Warehouse 2','Warehouse 3','Warehouse 4','Warehouse 5']
//   const heatmapOptions = {
//     radius: 20,
//     blur: 20,
//     maxZoom: 18,
//     minOpacity: 0.5,
//     maxOpacity: 1
//   };

//   return (
//     <div>
//       <CitySelector onCityChange={handleCityChange} />
//       <MapContainer
//         center={mapCenter}
//         zoom={mapZoom}
//         style={{ height: '80vh', width: '100%' }}
//       >
//         <MapUpdater center={mapCenter} zoom={mapZoom} />
//         <HeatmapLayer
//           fitBoundsOnLoad={false}
//           fitBoundsOnUpdate={false}
//           points={data}
//           longitudeExtractor={(point) => point[1]}
//           latitudeExtractor={(point) => point[0]}
//           intensityExtractor={(point) => parseFloat(point[2] || 1)}
//           {...heatmapOptions}
//         />
//         <TileLayer
//           attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//         />
//         {data.map((point, index) => (
//           <Marker
//             key={index}
//             position={[point[0], point[1]]}
//             icon={customMarkerIcon}
//           >
//             <Tooltip permanent>
//               <span>{nameWare[index]}</span>
//             </Tooltip>
//           </Marker>
//         ))}
//       </MapContainer>
//     </div>
//   );
// }

// export default Cartograph;

//FINALLY WORKING CODE --------

// import { TileLayer, MapContainer, Marker, Tooltip, useMap } from "react-leaflet";
// import { HeatmapLayer } from "react-leaflet-heatmap-layer-v3";
// import { useEffect, useState } from "react";
// import "leaflet/dist/leaflet.css";
// import img from "./placeholder.png";
// import L from "leaflet";

// const customMarkerIcon = L.icon({
//   iconUrl: img,
//   iconSize: [28, 30],
//   iconAnchor: [12.5, 41]
// });

// const cityCenters = {
//   Gujarat: [22.6708, 71.5724],
//   Delhi: [28.7041, 77.1025],
//   Mumbai: [19.0760, 72.8777],
//   Bangalore: [12.9716, 77.5946],
//   Kolkata: [22.5726, 88.3639]
// };

// const CitySelector = ({ onCityChange }) => {
//   return (
//     <select onChange={onCityChange} style={{ marginBottom: '10px' }}>
//       <option value="">Select a city</option>
//       <option value="Gujarat">Gujarat</option>
//       <option value="Delhi">Delhi</option>
//       <option value="Mumbai">Mumbai</option>
//       <option value="Bangalore">Bangalore</option>
//       <option value="Kolkata">Kolkata</option>
//     </select>
//   );
// };


// const MapUpdater = ({ center, zoom }) => {
//   const map = useMap();

//   useEffect(() => {
//     if (center && zoom) {
//       map.setView(center, zoom);
//     }
//   }, [center, zoom, map]);

//   return null;
// };

// const Cartograph = () => {
//   const [data, setData] = useState([]);
//   const [mapCenter, setMapCenter] = useState([22.6708, 71.5724]);
//   const [mapZoom, setMapZoom] = useState(5);
//   const [citySelected, setCitySelected] = useState(false);

//   useEffect(() => {
//     if (citySelected) {
//       let index = 0;
//       setData(pointSets[index]);
//       const interval = setInterval(() => {
//         index++;
//         if (index < pointSets.length) {
//           setData(pointSets[index]);
//         } else {
//           clearInterval(interval);
//         }
//       }, 1000);

//       return () => clearInterval(interval); // Cleanup interval on unmount
//     }
//   }, [citySelected]);

//   const handleCityChange = (event) => {
//     const city = event.target.value;
//     if (city === "Gujarat") {
//       setCitySelected(true); // Start point updates only when Gujarat is selected
//       setMapCenter(cityCenters[city]);
//       setMapZoom(6); // Set zoom level between 5 and 8
//     } else {
//       setCitySelected(false); // Stop point updates if another city is selected
//       setMapCenter(cityCenters[city]);
//       setMapZoom(18); // Reset zoom to default for other cities
//       setData([]); // Clear points if another city is selected
//     }
//   };

//   const heatmapOptions = {
//     radius: 20,
//     blur: 20,
//     maxZoom: 18,
//     minOpacity: 0.5,
//     maxOpacity: 1
//   };

//   return (
//     <div>
//       <CitySelector onCityChange={handleCityChange} />
//       <MapContainer
//         center={mapCenter}
//         zoom={mapZoom}
//         style={{ height: '80vh', width: '100%' }}
//       >
//         <MapUpdater center={mapCenter} zoom={mapZoom} />
//         <HeatmapLayer
//           fitBoundsOnLoad={false}
//           fitBoundsOnUpdate={false}
//           points={data}
//           longitudeExtractor={(point) => point[1]}
//           latitudeExtractor={(point) => point[0]}
//           intensityExtractor={(point) => parseFloat(point[2] || 1)}
//           {...heatmapOptions}
//         />
//         <TileLayer
//           attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//         />
//         {data.map((point, index) => (
//           <Marker
//             key={index}
//             position={[point[0], point[1]]}
//             icon={customMarkerIcon}
//           >
//             <Tooltip permanent>
//               <span>{nameWare[index]}</span>
//             </Tooltip>
//           </Marker>
//         ))}
//       </MapContainer>
//     </div>
//   );
// }

// export default Cartograph;


///
import { TileLayer, MapContainer, Marker, Tooltip, useMap } from "react-leaflet";
import { HeatmapLayer } from "react-leaflet-heatmap-layer-v3";
import { useEffect, useState } from "react";
import "leaflet/dist/leaflet.css";
import img from "./placeholder.png";
import img4 from "./placeholder1.png";
import img5 from "./placeholder2.png";
import img2 from "./location.png";
import img3 from "./location2.png";
// import img2 from "./loca"
import L from "leaflet";

const customMarkerIcon = L.icon({
  iconUrl: img5,
  iconSize: [28, 30],
  iconAnchor: [12.5, 41]
});

// const pointSets = [
//   [[22.6708, 71.5724], [22.7251, 71.6370], [22.8554, 71.7918], [22.9939, 71.4600], [22.5761, 71.2010]],
//   [[22.5896, 71.4018], [22.6698, 71.3297], [22.7555, 71.5408], [22.8123, 71.6875], [22.9017, 71.8144]],
//   [[22.6198, 71.4826], [22.7241, 71.5634], [22.8344, 71.6147], [22.9481, 71.7635], [22.6817, 71.8822]],
//   [[22.6217, 71.5528], [22.7105, 71.6892], [22.7964, 71.4805], [22.8792, 71.7326], [22.5643, 71.6021]]
// ];
const nameWare = ['W1','W2','W3','W4','W5']
const cityCenters = {
  Gujarat: [22.6708, 71.5724],
  Delhi: [28.7041, 77.1025],
  Mumbai: [19.0760, 72.8777],
  Bangalore: [12.9716, 77.5946],
  Kolkata: [22.5726, 88.3639]
};



const CitySelector = ({ onCityChange }) => {
  return (

    <select
      onChange={onCityChange}
      className="py-2 mb-2 bg-myColor text-white text-base rounded-md font-medium text-center  justify-between shadow-md focus:outline-none focus:ring-2 focus:ring-blue-300 "
    >
      <option className="bg-white text-md  text-gray-900" value="Select a city" disabled selected>Select a city</option>
      <option className="bg-white text-md text-gray-900" value="Gujarat">Gujarat</option>
      <option className="bg-white text-md text-gray-900" value="Delhi">Delhi</option>
      <option className="bg-white text-md text-gray-900" value="Mumbai">Mumbai</option>
      <option className="bg-white text-md text-gray-900" value="Bangalore">Bangalore</option>
      <option className="bg-white text-sm text-gray-900"value="Kolkata">Kolkata</option>
    </select>

  );
};


const MapUpdater = ({ center, zoom }) => {
  const map = useMap();

  useEffect(() => {
    if (center && zoom) {
      map.setView(center, zoom);
    }
  }, [center, zoom, map]);

  return null;
};

const Cartograph = () => {
  const [data, setData] = useState([]);
  const [mapCenter, setMapCenter] = useState([28.7041, 77.1025]);
  const [mapZoom, setMapZoom] = useState(5);
  const [citySelected, setCitySelected] = useState(false);
  const [runProcess, setRunProcess] = useState(false);

  useEffect(() => {
    if (runProcess) {
      let index = 0;
      setData(pointSets[index]);
      const interval = setInterval(() => {
        index++;
        if (index < pointSets.length) {
          setData(pointSets[index]);
        } else {
          clearInterval(interval);
        }
      }, 1000);

      return () => clearInterval(interval); // Cleanup interval on unmount
    }
  }, [runProcess]);

  const handleCityChange = (event) => {
    const city = event.target.value;
    if (city === "Delhi") {
      setCitySelected(true);
      setMapCenter(cityCenters[city]);
      setMapZoom(9.5);
    } else {
      setCitySelected(false);
      setMapCenter(cityCenters[city]);
      setMapZoom(9);
      setData([]);
    }
  };

  const handleRunClick = () => {
    if (citySelected) {
      setRunProcess(true);
    } else {
      alert("Please select Gujarat to start the process.");
    }
  };

  

  const heatmapOptions = {
    radius: 20,
    blur: 20,
    maxZoom: 18,
    minOpacity: 0.5,
    maxOpacity: 1
  };

  return (
    <div>
      <div className="mx-[20vw] flex justify-center">
      <CitySelector onCityChange={handleCityChange} />
      <button type="button" onClick={handleRunClick} disabled={!citySelected} className="px-3 py-2 mx-4 mb-2 text-md font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Find Locations</button>
      <button disabled type="button" class="text-white bg-blue-700 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 mb-2 text-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex items-center">
<svg aria-hidden="true" role="status" class="inline w-4 h-4 me-3 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"/>
<path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"/>
</svg>
Please Wait
</button>
      </div>
       
      <MapContainer
        center={mapCenter}
        zoom={mapZoom}
        style={{ height: '74vh', width: '100%'}}
      >
        <MapUpdater center={mapCenter} zoom={mapZoom} />
        <HeatmapLayer
          fitBoundsOnLoad={false}
          fitBoundsOnUpdate={false}
          points={data}
          longitudeExtractor={(point) => point[1]}
          latitudeExtractor={(point) => point[0]}
          intensityExtractor={(point) => parseFloat(point[2] || 1)}
          {...heatmapOptions}
        />
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {data.map((point, index) => (
          <Marker
            key={index}
            position={[point[0], point[1]]}
            icon={customMarkerIcon}
          >
            <Tooltip permanent>
              <span>{nameWare[index]}</span>
            </Tooltip>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}

export default Cartograph;
