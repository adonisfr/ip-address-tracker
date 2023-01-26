import { useEffect, useState } from "react";
import React from "react";
import { validateIp } from "../../shared/dtos/utils";
import { useAppDispatch } from "../../app/hooks";
import { getInfoDataByIp, getIp } from "../../features/search/searchSlice";

const Search = (): JSX.Element => {
  const [errMsg, setErrMsg] = useState("");
  const [ip, setIp] = useState("");

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getIp());
  }, []);

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (ip === "") {
      setErrMsg("This field is required.");
    } else if (validateIp(ip)) {
      dispatch(getInfoDataByIp(ip));
      setErrMsg("");
    } else {
      setErrMsg("You must enter a correct IP address.");
    }
  };

  const handleOnChangeIp = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setIp(value);
    if (value === "") {
      setErrMsg("");
    }
  };

  return (
    <div className="search-ip-address-tracker-container">
      <form className="search-ip-address-tracker" onSubmit={handleSubmit}>
        <input value={ip} onChange={handleOnChangeIp} />
        <button type="submit">
          <span>{`>`}</span>
        </button>
      </form>
      <mark className="error-msg-input">{errMsg}</mark>
    </div>
  );
};

export default Search;
