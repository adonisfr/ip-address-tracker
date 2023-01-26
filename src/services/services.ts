const ipUrl = import.meta.env.VITE_IP_IPIFY_URL;
const geoIpUrl = import.meta.env.VITE_GEO_IPIFY_URL;
const geoIpKey = import.meta.env.VITE_GEO_IPIFY_KEY;

export const getIpClient = async () => {
  const response = await fetch(ipUrl).then((resp) => resp.json());
  return response?.ip;
};

export const getDataByIp = async (ip: string) => {
  const ipData = await fetch(
    `${geoIpUrl}apiKey=${geoIpKey}&ipAddress=${ip}`
  ).then((response) => response.json());

  return ipData;
};
