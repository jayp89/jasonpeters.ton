
import React from 'react';
import StyledText from '../TextWithTonIcon';

export const SectionHeader: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h2 className="font-orbitron text-3xl font-bold text-amber-300 mb-6 relative pb-2
    after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-16 after:h-0.5 after:bg-amber-300 after:shadow-[0_0_10px_#daa520]">
    {children}
  </h2>
);

export const SubHeader: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <h3 className="font-orbitron text-2xl font-bold text-amber-300 mt-8 mb-4">{children}</h3>
);

export const SubSubHeader: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <h4 className="text-xl font-bold text-white mt-6 mb-3">{children}</h4>
);

export const SubSubSubHeader: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <h5 className="text-lg font-bold text-amber-300 mt-4 mb-2">{children}</h5>
);

export const BioParagraph: React.FC<{ children?: React.ReactNode; className?: string; html?: string }> = ({ children, className, html }) => {
    if (html) {
        return <p className={`text-gray-300 leading-relaxed text-lg mb-4 ${className ?? ''}`} dangerouslySetInnerHTML={{ __html: html }} />;
    }
    return <p className={`text-gray-300 leading-relaxed text-lg mb-4 ${className ?? ''}`}>{children}</p>;
};

export const BioTable: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <div className="overflow-x-auto my-6">
        <table className="w-full min-w-[600px] text-left border-collapse">{children}</table>
    </div>
);

export const BioTableHead: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <thead><tr>{children}</tr></thead>
);

export const BioTableHeader: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <th className="border border-amber-400/20 p-3 bg-white/5 font-bold text-amber-300">{children}</th>
);

export const BioTableBody: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <tbody>{children}</tbody>
);

export const BioTableRow: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <tr className="hover:bg-white/5 transition-colors duration-200">{children}</tr>
);

export const BioTableCell: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <td className="border border-amber-400/20 p-3 align-top">{children}</td>
);

export const BioOrderedList: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <ol className="list-decimal list-inside space-y-2 text-gray-300 leading-relaxed text-lg mb-4">{children}</ol>
);

export const BioListItem: React.FC<{ children?: React.ReactNode; html?: string }> = ({ children, html }) => {
    if (html) {
        return <li dangerouslySetInnerHTML={{ __html: html }} />;
    }
    return <li>{children}</li>;
};