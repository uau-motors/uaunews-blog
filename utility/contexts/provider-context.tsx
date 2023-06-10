import {
  createContext,
  useContext,
  ReactElement,
  useState,
  useEffect,
  ChangeEvent,
  FormEvent,
  MouseEvent,
  useMemo
} from "react";

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
  format: "signin"
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

    console.log("event", event.target.name);

    if (field === "name") setName(event.target.value);
    if (field === "email") setEmail(event.target.value);
    if (field === "password") setPassword(event.target.value);

    console.log("handleChange", field);
  };

  const handleFormat = (f: string = "") => {
    setPassword("");
    setFormat(f);
  };

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
    format
  };

  return <OverlayContext.Provider value={contextValue}>{children}</OverlayContext.Provider>;
};
