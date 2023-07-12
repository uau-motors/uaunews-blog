import { createContext, useContext, ReactElement, useState, useEffect, ChangeEvent } from "react";
import { DrawerProps } from "@material-ui/core/Drawer";

export interface ProviderValues {
  isOpenDrawer: boolean;
  toggleDrawer: () => void;
  drawerProps: DrawerProps;

  modalOpen: boolean;
  openModal: () => void;
  closeModal: () => void;

  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleFormat: (f: string | undefined) => void;
  // handleSubmit: (event: FormEvent<HTMLFormElement>, cmsUrl: string | undefined) => void;

  email: string;
  password: string;
  name: string;
  format: string;
  city: string;
  weather: number;
}

const defaultValues = {
  isOpenDrawer: false,
  toggleDrawer: () => {},
  drawerProps: {},

  modalOpen: false,
  openModal: () => {},
  closeModal: () => {},

  handleChange: () => null,
  handleFormat: () => null,
  // handleSubmit: () => null,

  email: "",
  password: "",
  name: "",
  format: "signin",

  city: "",
  weather: 0
};

const OverlayContext = createContext<ProviderValues>(defaultValues);

export const useOverlay = (): ProviderValues => useContext(OverlayContext);

export interface DefaultModeProps {}

interface OverlayProviderProps extends DefaultModeProps {
  children: React.ReactNode;
}

export const OverlayProvider = ({ children }: OverlayProviderProps): ReactElement => {
  const [isOpenDrawer, setIsOpenDrawer] = useState(false);
  const [drawerProps, setDrawerProps] = useState<DrawerProps>({});
  const [modalOpen, setModalOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [format, setFormat] = useState("signin");
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState<number>(0);

  const toggleDrawer = (props?: DrawerProps) => {
    if (props) setDrawerProps(props);
    setIsOpenDrawer((prevIsOpen) => !prevIsOpen);
  };

  const openModal = () => {
    setModalOpen(true);
    console.log("openModal", modalOpen);
  };

  const closeModal = () => {
    setModalOpen(false);
    console.log("closeModal", modalOpen);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    let field = event.target.name;

    if (field === "name") setName(event.target.value);
    if (field === "email") setEmail(event.target.value);
    if (field === "password") setPassword(event.target.value);
  };

  const handleFormat = (f: string = "") => {
    setPassword("");
    setFormat(f);
  };

  const getBrowserCity = (): Promise<string> => {
    return new Promise((resolve, reject) => {
      if (navigator.geolocation) {
        // console.log("navigator ==> ", navigator);
        // navigator.geolocation.getCurrentPosition(
        //   async (position: GeolocationPosition) => {
        //     const latitude = position.coords.latitude;
        //     const longitude = position.coords.longitude;
        //     const url = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=pt-br`;
        //     try {
        //       const response = await fetch(url);
        //       const data = await response.json();
        //       if (data.countryCode === "BR") {
        //         resolve(data.city);
        //         setCity(data.city);
        //       } else {
        //         reject(new Error("A localização não está no Brasil."));
        //       }
        //     } catch (error) {
        //       reject(new Error(`Erro ao obter a localização: ${error.message}`));
        //     }
        //   },
        //   (error: GeolocationPositionError) => {
        //     reject(new Error(`Erro ao obter a localização: ${error.message}`));
        //   }
        // );
      } else {
        reject(new Error("Geolocalização não suportada neste navegador."));
      }
    });
  };

  async function getWeather(city: string): Promise<any> {
    const apiKey = "51e38bb9aa5c0f0180c54903abcc2d84";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      const weatherData = Math.round(data.main.temp);
      setWeather(weatherData);
      return weatherData;
    } catch (error) {
      console.error(error);
      throw new Error("Failed to retrieve weather data");
    }
  }

  // const handleSubmit = async (event: FormEvent<HTMLFormElement>, cmsUrl: string = "") => {
  //   event.preventDefault();
  //   const postURL = `${cmsUrl}/members/api/send-magic-link/`;

  //   const values = {
  //     email,
  //     emailType: `subscribe`,
  //     labels: []
  //   };

  //   try {
  //     fetch(postURL, {
  //       method: `POST`,
  //       mode: `cors`,
  //       headers: { "Content-Type": `application/json` },
  //       body: JSON.stringify(values)
  //     });
  //   } catch {
  //     setMessage(`error`);
  //   }
  //   setMessage(`success`);
  // };

  // useEffect(() => {
  //   const escFunction = (event: globalThis.KeyboardEvent) => {
  //     if (event.key === `Escape`) {
  //       handleClose();
  //     }
  //   };
  //   window.addEventListener(`keydown`, escFunction, false);
  //   return function cleanup() {
  //     window.removeEventListener(`keydown`, escFunction, false);
  //   };
  // }, []);

  useEffect(() => {
    getBrowserCity();
  }, []);

  useEffect(() => {
    if (city) getWeather(city);
  }, [city]);

  const contextValue: ProviderValues = {
    isOpenDrawer,
    drawerProps,
    toggleDrawer,
    modalOpen,
    openModal,
    closeModal,
    handleChange,
    handleFormat,
    // handleSubmit,
    email,
    password,
    name,
    format,
    city,
    weather
  };

  return <OverlayContext.Provider value={contextValue}>{children}</OverlayContext.Provider>;
};
