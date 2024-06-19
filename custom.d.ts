interface WeatherProps {
  weather: string;
}

interface LayoutProps {
  children: React.ReactNode;
}

type WeatherDetailType = {
  zipcode: string;
  weather: string;
  temp?: number;
};

type responseItemType = {
  id: string;
  name: string;
};
