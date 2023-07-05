import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Vocabulary.scss";
import Input from "../../UI/Input/Input";
import { Button } from "../../UI/Button/Button";
import Spinner from "../../UI/Spinner/Spinner";

interface SynonymAntonymResponse {
  word: string;
  synonyms?: string[];
  antonyms?: string[];
}

type ParameterOption = "synonyms" | "antonyms";

const Vocabulary = () => {
  const [inputValue, setInputValue] = useState("");
  const [selectedParameter, setSelectedParameter] =
    useState<ParameterOption | null>(null);
  const [result, setResult] = useState<string[] | null>(null);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    if (!selectedParameter) {
      return;
    }

    setLoading(true);

    const options = {
      method: "GET",
      url: `https://wordsapiv1.p.rapidapi.com/words/${inputValue}/${selectedParameter}`,
      headers: {
        "X-RapidAPI-Key": "bcfdee6c9dmsh4e3903236f08f3ep1ec2e0jsn25dfcc1e60d7",
        "X-RapidAPI-Host": "wordsapiv1.p.rapidapi.com",
      },
      withCredentials: true,
    };

    setTimeout(async () => {
      try {
        const response = await axios.request<SynonymAntonymResponse>(options);
        if (response.data && response.data[selectedParameter]) {
          setResult(response.data[selectedParameter] || []);
        } else {
          setResult([]);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
        setInputValue("");
      }
    }, 500);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleParameterChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSelectedParameter(event.target.value as ParameterOption);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      fetchData();
    }
  };

  useEffect(() => {
    setResult(null);
  }, [selectedParameter]);

  return (
    <div className="vocabulary">
      <Input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        placeholder="Type your word.."
      />
      <div className="parameter-options">
        <label>
          <input
            type="radio"
            name="parameter"
            value="synonyms"
            checked={selectedParameter === "synonyms"}
            onChange={handleParameterChange}
          />
          Synonyms
        </label>
        <label>
          <input
            type="radio"
            name="parameter"
            value="antonyms"
            checked={selectedParameter === "antonyms"}
            onChange={handleParameterChange}
          />
          Antonyms
        </label>
      </div>
      <Button onClick={fetchData} variant="default">
        Send
      </Button>

      {loading ? (
        <Spinner />
      ) : result !== null &&
        typeof result !== "undefined" &&
        selectedParameter !== null ? (
        <div className="result">
          <h2>
            {selectedParameter.charAt(0).toUpperCase() +
              selectedParameter.slice(1)}
            :
          </h2>

          {result.length > 0 ? (
            <ul>
              {result.map((item: string, index: number) => (
                <li key={index}>- {item}</li>
              ))}
            </ul>
          ) : (
            <p>No {selectedParameter} found.</p>
          )}
        </div>
      ) : null}
    </div>
  );
};

export default Vocabulary;
