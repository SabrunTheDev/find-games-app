import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

interface Genre {
  id: number;
  name: string;
}

interface GetGenres {
  count: number;
  results: Genre[];
}

const useGenres = () => {
  const [genres, setGenre] = useState<Genre[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);
    apiClient
      .get<GetGenres>("/genres", { signal: controller.signal })
      .then((res) => {
        setGenre(res.data.results);
        setError("");
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(`Error While Fetching: ${err.message}`);
        setLoading(false);
        setGenre([]);
      });

    return () => controller.abort();
  }, []);

  return { genres, error, loading };
};

export default useGenres;
