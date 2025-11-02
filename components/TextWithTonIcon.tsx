import React from 'react';

interface StyledTextProps {
  text: string;
  className?: string;
}

const StyledText: React.FC<StyledTextProps> = ({ text, className }) => {
  const regex = /\b(TON Blockchain|TON|ETN Ecosystem)\b/gi;
  const parts = text.split(regex);

  return (
    <span className={className}>
      {parts.map((part, index) => {
        if (!part) return null;
        const lowerPart = part.toLowerCase();
        
        if (lowerPart === 'ton' || lowerPart === 'ton blockchain') {
          return (
            <span key={index} className="inline-flex items-center align-middle text-ton-blue whitespace-nowrap font-bold">
              <svg className="w-[1.2em] h-[1.2em] mr-1 inline-block" fill="currentColor" aria-hidden="true">
                <use href="#ton"></use>
              </svg>
              {part}
            </span>
          );
        }
        
        if (lowerPart === 'etn ecosystem') {
             return (
                <span key={index} className="inline-flex items-center align-middle text-etn-gold whitespace-nowrap font-bold">
                    <img src="https://docs.etnecosystem.org/img/etn-eco.svg" className="w-[1.2em] h-[1.2em] mr-1 inline-block" alt="ETN Ecosystem icon" />
                    {part}
                </span>
             )
        }

        return part;
      })}
    </span>
  );
};

export default StyledText;