import { useEffect, useState } from "react";

export const Title = () => {
  const [text, setText] = useState("");
  let possible = '-+*/|}{[]~\\":;?/.><=+-_)(*&^%$#@!)}';
  let logoRandom = "";
  let logoTitle = "Shylo Bloom";
  let i = 0;

  useEffect(() => {
    setTimeout(function () {
      const generateRandomTitle = (i, logoRandom) => {
        setTimeout(function () {
          setText(logoRandom);
        }, i * 150);
      };
      for (i = 0; i <= logoTitle.length + 1; i++) {
        logoRandom = logoTitle.substr(0, i);
        for (var j = i; j <= logoTitle.length; j++) {
          logoRandom += possible.charAt(
            Math.floor(Math.random() * possible.length)
          );
        }
        generateRandomTitle(i, logoRandom);
      }
    }, 500);
  }, [logoRandom]);

  return <div className="title">{text && text}</div>;
};
