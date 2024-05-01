export type Fetcher = typeof fetcher;

export const fetcher = async <Response>(path: string, init: RequestInit = {}): Promise<Response> => {
  const { headers, ...args } = init;

  try {
    const res = await fetch(`${import.meta.env.VITE_MICROCMS_API_BASE_URL}/${path}`, {
      mode: "cors",
      headers: new Headers({
        "X-MICROCMS-API-KEY": import.meta.env.VITE_X_MICROCMS_API_KEY ?? "",
        ...(headers ?? {}),
      }),
      ...args,
    });

    return await res.json();
  } catch (error) {
    console.log(error);
    throw new Error();
  }
};
