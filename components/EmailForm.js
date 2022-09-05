import { useState } from "react";
import { TextField } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./theme";

export const EmailForm = () => {
  const [email, setEmail] = useState("");

  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/subscribeUser", {
      body: JSON.stringify({
        email: e.target.value,
      }),

      headers: {
        "Content-Type": "application/json",
      },

      method: "POST",
    });
    console.log(e.target.value)
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <div className="email__form">
      <form>
      <ThemeProvider theme={theme}>
          <TextField
            inputProps={{
              color: "white",
              pattern: `(?:[a-z0-9!#$%&'*+/=?^_'{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_'{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])`,
            }}
            id="outlined-basic"
            name="email"
            type="email"
            required
            color="secondary" 
            label="email"
            variant="outlined"
            placeholder="email@domain.com"
            value={email}
            styles={{color: '#fff'}}
            onChange={(e) => handleEmailChange(e)}
          />
          <button
            name="subscribe"
            className="email__form__button"
            type="submit"
            value={email}
            onClick={(e) => handleEmailSubmit(e)}
          >
            SEND
          </button>
      </ThemeProvider>
      </form>
    </div>
  );
};
