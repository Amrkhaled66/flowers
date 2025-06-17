import { createContext, useContext, useState } from "react";

interface Config {
    tax: string | null;
    shipping: string | null;
    name: string | null;
    description: string | null;
    keywords: string | null;
    short_title: string | null;
    email: string;
    phone: string;
    tiktok: string | null;
    facebook: string | null;
    instagram: string | null;
    whatsapp: string | null;
    logo: string | null;
    favicon: string | null;
}

const defaultConfig: Config = {
    tax: null,
    shipping: null,
    name: null,
    description: null,
    keywords: null,
    short_title: null,
    email: "",
    phone: "",
    tiktok: null,
    facebook: null,
    instagram: null,
    whatsapp: null,
    logo: null,
    favicon: null,
};

const ConfigCtx = createContext<{ config: Config, storeConfig: (config: Config) => void }>({
    config: defaultConfig,
    storeConfig: () => defaultConfig
});

export const ConfigProvider = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    const [config, setConfig] = useState<Config>(defaultConfig);

    const storeConfig = (newConfig: Config) => setConfig(newConfig);

    return (
        <ConfigCtx.Provider value={{ config, storeConfig }}>
            {children}
        </ConfigCtx.Provider>
    );
};

export const useConfig = () => useContext(ConfigCtx);
