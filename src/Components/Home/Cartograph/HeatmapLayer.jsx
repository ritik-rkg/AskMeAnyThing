// src/components/HeatmapLayer.jsx
import React, { useEffect, useState } from 'react';
import { useMap } from 'react-leaflet';

const HeatmapLayer = ({ data }) => {
  const map = useMap();
  const [heatmapOverlay, setHeatmapOverlay] = useState(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = '/leaflet-heatmap.js';
    script.onload = () => {
      const HeatmapOverlay = window.HeatmapOverlay;
      const heatmapLayer = new HeatmapOverlay({
        radius: 0.05,
        maxOpacity: 0.8,
        scaleRadius: true,
        useLocalExtrema: true,
        latField: 'lat',
        lngField: 'lng',
        valueField: 'count',
      });

      heatmapLayer.setData({
        max: 8,
        data: data,
      });

      map.addLayer(heatmapLayer);
      setHeatmapOverlay(heatmapLayer);
    };
    script.onerror = () => {
      console.error('Failed to load leaflet-heatmap.js');
    };
    document.body.appendChild(script);

    return () => {
      if (heatmapOverlay) {
        map.removeLayer(heatmapOverlay);
      }
    };
  }, [map, data, heatmapOverlay]);

  return null;
};

export default HeatmapLayer;
