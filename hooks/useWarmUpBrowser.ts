import { useEffect } from "react";
import { coolDownAsync, warmUpAsync } from "expo-web-browser";

export const useWarmUpBrowser = () => {
  useEffect(() => {
    void warmUpAsync();

    return () => {
      void coolDownAsync();
    };
  }, []);
};
