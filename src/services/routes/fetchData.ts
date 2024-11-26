import { ERROR_MESSAGES } from "@/hooks/err/ErrorHandling";

export default async function fetchData() {
  const cacheKey = "data";
  const cacheStorage = window.sessionStorage;

  {/**Buscar dados da API */}
  async function fetchFromAPI() {
    const res = await fetch(`${process.env.API_URL}`);

    if(!res.ok){
      throw new Error(ERROR_MESSAGES.API_FAILED);
    };

    return await res.json();
  };

  const cachedData = cacheStorage.getItem(cacheKey); {/** Recuperar dados do cache */}

  try {
    const apiData = await fetchFromAPI();

    {/** Se ouver cache comparar com API */}
    if (cachedData){
      const cachedJson = JSON.parse(cachedData);

      if(JSON.stringify(apiData) === JSON.stringify(cachedJson)){
        return cachedJson;
      };
    };

    {/** Atualizar os dados do cache e retornalo */}
    cacheStorage.setItem(cacheKey, JSON.stringify(apiData));

  } catch (error){
    console.log(`${ERROR_MESSAGES.FETCH_FAILED}: ${error}`);

    {/** Se caso a API falhar verificar se a dados no cache e usalos */}
    if(cachedData) return JSON.parse(cachedData);
  }
};

