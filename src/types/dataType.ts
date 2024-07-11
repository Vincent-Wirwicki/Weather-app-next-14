export type ResData = {
  city: string;
  weather: {
    main: string;
    temp: {
      curr: number;
      feel: number;
    };
  };
};
