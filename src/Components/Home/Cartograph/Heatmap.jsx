import { TileLayer, MapContainer, Marker, Tooltip, useMap } from "react-leaflet";
import { HeatmapLayer } from "react-leaflet-heatmap-layer-v3";
import { useEffect, useState } from "react";
import "leaflet/dist/leaflet.css";
import img from "./placeholder.png";
import img4 from "./placeholder1.png";
import img5 from "./placeholder2.png";
import img2 from "./location.png";
import img3 from "./location2.png";
import points from "./generatedPointsByModel.js"
import L from "leaflet";

const customMarkerIcon = L.icon({
  iconUrl: img5,
  iconSize: [28, 30],
  iconAnchor: [12.5, 41]
});

const pointSets = [[[28.687648988258573, 77.02443305021204], [28.84757627739629, 77.1454018529781], [28.798764075111567, 77.12070736796198], [28.596784601387938, 76.89714450609921], [28.84629898011564, 77.24606046730567]], [[28.688514830981806, 77.028541837043], [28.835277525954382, 77.14874912387398], [28.784908071158327, 77.13493329596398], [28.589559096051733, 76.90395795314663], [28.836977981162185, 77.25699412692116]], [[28.68938067370504, 77.03265062387393], [28.82297877451247, 77.15209639476988], [28.771052067205087, 77.14915922396598], [28.582333590715525, 76.91077140019404], [28.827656982208733, 77.26792778653665]], [[28.69024651642827, 77.03675941070487], [28.81068002307056, 77.15544366566577], [28.757196063251847, 77.16338515196799], [28.575108085379316, 76.91758484724144], [28.818335983255277, 77.27886144615215]], [[28.691112359151504, 77.04086819753583], [28.79838127162865, 77.15879093656166], [28.743340059298603, 77.17761107996998], [28.56788258004311, 76.92439829428885], [28.80901498430182, 77.28979510576764]], [[28.69197820187474, 77.04497698436677], [28.78608252018674, 77.16213820745755], [28.729484055345363, 77.19183700797198], [28.560657074706903, 76.93121174133626], [28.79969398534837, 77.30072876538313]], [[28.692844044597972, 77.04908577119771], [28.77378376874483, 77.16548547835343], [28.715628051392123, 77.20606293597399], [28.553431569370694, 76.93802518838368], [28.790372986394914, 77.31166242499862]], [[28.693709887321205, 77.05319455802866], [28.76148501730292, 77.16883274924933], [28.701772047438883, 77.220288863976], [28.546206064034486, 76.94483863543108], [28.781051987441458, 77.3225960846141]], [[28.694575730044438, 77.0573033448596], [28.74918626586101, 77.17218002014522], [28.687916043485643, 77.23451479197799], [28.53898055869828, 76.95165208247849], [28.771730988488002, 77.3335297442296]], [[28.69544157276767, 77.06141213169056], [28.736887514419102, 77.1755272910411], [28.674060039532403, 77.24874071997999], [28.531755053362073, 76.95846552952591], [28.762409989534547, 77.34446340384508]], [[28.696307415490903, 77.0655209185215], [28.72458876297719, 77.178874561937], [28.660204035579163, 77.262966647982], [28.524529548025864, 76.96527897657332], [28.753088990581094, 77.35539706346059]], [[28.697173258214136, 77.06962970535244], [28.71229001153528, 77.18222183283288], [28.646348031625923, 77.27719257598399], [28.51730404268966, 76.97209242362072], [28.74376799162764, 77.36633072307608]], [[28.69803910093737, 77.0737384921834], [28.69999126009337, 77.18556910372878], [28.632492027672683, 77.291418503986], [28.51007853735345, 76.97890587066813], [28.734446992674183, 77.37726438269156]], [[28.6989049436606, 77.07784727901434], [28.68769250865146, 77.18891637462467], [28.618636023719443, 77.305644431988], [28.502853032017242, 76.98571931771554], [28.72512599372073, 77.38819804230705]], [[28.699770786383837, 77.08195606584528], [28.67539375720955, 77.19226364552055], [28.604780019766203, 77.31987035999], [28.495627526681034, 76.99253276476296], [28.715804994767275, 77.39913170192254]], [[28.70063662910707, 77.08606485267623], [28.66309500576764, 77.19561091641644], [28.59092401581296, 77.334096287992], [28.48840202134483, 76.99934621181036], [28.70648399581382, 77.4]], [[28.701502471830302, 77.09017363950717], [28.65079625432573, 77.19895818731233], [28.57706801185972, 77.348322215994], [28.48117651600862, 77.00615965885777], [28.697162996860364, 77.4]], [[28.702368314553535, 77.09428242633811], [28.638497502883823, 77.20230545820823], [28.56321200790648, 77.36254814399601], [28.473951010672412, 77.01297310590519], [28.687841997906908, 77.4]], [[28.703234157276768, 77.09839121316907], [28.626198751441912, 77.20565272910412], [28.54935600395324, 77.376774071998], [28.466725505336207, 77.0197865529526], [28.678520998953456, 77.4]], [[28.7041, 77.1025], [28.6139, 77.209], [28.5355, 77.391], [28.4595, 77.0266], [28.6692, 77.4]]]
const cityCenters = {
  Gujarat: [22.6708, 71.5724],
  Delhi: [28.7041, 77.1025],
  Mumbai: [19.0760, 72.8777],
  Bangalore: [12.9716, 77.5946],
  Kolkata: [22.5726, 88.3639]
};


const nameWare = ['W1','W2','W3','W4','W5']
const CitySelector = ({ onCityChange }) => {
  return (

    <select
      onChange={onCityChange}
      className="py-2 mb-2 bg-mycolor3 text-white text-base hover:bg-mycolorhover rounded-md font-medium text-center  justify-between shadow-md focus:outline-none  "
    >
      <option className="bg-white text-md  text-gray-900" value="Select a city" selected>Select a city</option>
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
  const [mapCenter, setMapCenter] = useState([23.2547, 77.4029]);
  const [mapZoom, setMapZoom] = useState(6);
  const [citySelected, setCitySelected] = useState(false);
  const [runProcess, setRunProcess] = useState(false);
  const [showWait, setShowWait] = useState(false);
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
      setShowWait(true);
      setTimeout(() => {
        setShowWait(false);
        setRunProcess(true);
      }, 5000);
    } else {
      alert("Please select a city to start the process.");
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
    <div className="">

    <div className="mx-[20vw] flex justify-center ">
      <CitySelector onCityChange={handleCityChange} />
      {showWait ? (
        <button
          disabled
          type="button"
          className="text-white bg-mycolor2 hover:bg-white hover:text-black mx-2 hover:border-2 focus:ring-4 focus:outline-none font-medium rounded-lg text-md px-3.5  mb-2 text-center me-2 inline-flex items-center"
        >
          <svg
            aria-hidden="true"
            role="status"
            className="inline w-4 h-4 me-3 text-black animate-spin"
            viewBox="0 0 100 101"
            fill=""
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="#E5E7EB"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentColor"
            />
          </svg>
          Please Wait
        </button>
      ) : (
        <button
          onClick={handleRunClick}
          type="button"
          className="text-white bg-mycolor2 mx-4 font-medium rounded-lg text-md px-3 py-2 mb-2 text-center me-2 "
        >
          Find Locations
        </button>
      )}
    </div>
       
      <MapContainer
        center={mapCenter}
        zoom={mapZoom}
        style={{ height: '74vh', width: '100%'}}
        className="mx-0"
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
              <span className="font-semibold">{nameWare[index]}</span>
            </Tooltip>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}

export default Cartograph;
