import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface DynamicTextProps {
  text: string;
}

const DynamicText = ({ text }: DynamicTextProps) => {
  const [displayText, setDisplayText] = useState<string[]>(
    Array(text.length).fill(" ")
  );

  useEffect(() => {
    const duration = 50 / text.length ** 0.75;
    const interval = setInterval(() => {
      let replacementLetter = " ";
      let replacementIndex = 0;
      setDisplayText((prev) => {
        const newText = [...prev];
        const randomIndex = Math.floor(Math.random() * text.length);
        if (newText.length > text.length) newText.pop();
        replacementLetter = text[randomIndex];
        replacementIndex = randomIndex;
        if (newText[randomIndex] === replacementLetter) {
          replacementLetter = " ";
          return newText;
        } else if (newText[randomIndex] === " ") {
          newText[randomIndex] = replacementLetter;
          return newText;
        }
        newText[randomIndex] = text[randomIndex];
        return newText;
      });
    }, duration);

    return () => clearInterval(interval);
  }, [text]);

  return (
    <>
      {displayText.map((letter, i) => {
        return (
          <motion.span
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            {letter}
          </motion.span>
        );
      })}
    </>
  );
};

export default DynamicText;
