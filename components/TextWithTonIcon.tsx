import React from 'react';

interface TextWithTonIconProps {
  text: string;
  className?: string;
}

const TextWithTonIcon: React.FC<TextWithTonIconProps> = ({ text, className }) => {
  // Regex to find "TON" or "TON Blockchain" as whole words, case-insensitive
  const regex = /\b(TON Blockchain|TON)\b/gi;
  const parts = text.split(regex);

  return (
    <span className={className}>
      {parts.map((part, index) => {
        if (part.toLowerCase() === 'ton' || part.toLowerCase() === 'ton blockchain') {
          return (
            <span key={index} className="inline-flex items-center align-middle text-ton-blue whitespace-nowrap">
              <svg className="w-[1.2em] h-[1.2em] mr-1 inline-block" fill="currentColor" aria-hidden="true">
                <use href="#ton"></use>
              </svg>
              {part}
            </span>
          );
        }
        return part;
      })}
    </span>
  );
};

export default TextWithTonIcon;