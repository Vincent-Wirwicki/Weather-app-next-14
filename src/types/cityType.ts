type LocalNamesType = {
  [key: string]: string;
};

type CityType = {
  name: string;
  local_names?: LocalNamesType;
  lat: number;
  lon: number;
  country: string;
  state: string;
};

export type CitiesType = CityType[];
