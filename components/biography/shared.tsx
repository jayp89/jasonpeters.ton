
import React from 'react';
import StyledText from '../TextWithTonIcon';

export const SectionHeader: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h2 className="font-orbitron text-3xl md:text-4xl font-bold text-amber-300 mb-8 relative pb-4 border-b border-amber-500/30
    after:content-[''] after:absolute after:left-0 after:bottom-[-1px] after:w-24 after:h-1 after:bg-amber-400 after:shadow-[0_0_15px_#daa520]">
    {children}
  </h2>
);

export const SubHeader: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <h3 className="font-orbitron text-2xl font-bold text-amber-200 mt-10 mb-6 pl-4 border-l-4 border-amber-500/50">{children}</h3>
);

export const SubSubHeader: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <h4 className="text-xl font-bold text-white mt-8 mb-4 flex items-center">
        <span className="w-2 h-2 bg-amber-500 rounded-full mr-3"></span>
        {children}
    </h4>
);

export const SubSubSubHeader: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <h5 className="text-lg font-bold text-amber-400/90 mt-6 mb-3 italic">{children}</h5>
);

export const BioParagraph: React.FC<{ children?: React.ReactNode; className?: string; html?: string }> = ({ children, className, html }) => {
    const baseClasses = "text-gray-300 leading-loose text-lg mb-6 tracking-wide";
    if (html) {
        return <p className={`${baseClasses} ${className ?? ''}`} dangerouslySetInnerHTML={{ __html: html }} />;
    }
    return <p className={`${baseClasses} ${className ?? ''}`}>{children}</p>;
};

export const BioTable: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <div className="overflow-x-auto my-8 rounded-lg border border-white/10 shadow-lg bg-black/20">
        <table className="w-full min-w-[600px] text-left border-collapse">{children}</table>
    </div>
);

export const BioTableHead: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <thead className="bg-white/5">{children}</thead>
);

export const BioTableHeader: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <th className="p-4 font-bold text-amber-300 border-b border-white/10 font-orbitron tracking-wider text-sm uppercase">{children}</th>
);

export const BioTableBody: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <tbody className="divide-y divide-white/5">{children}</tbody>
);

export const BioTableRow: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <tr className="hover:bg-white/5 transition-colors duration-200 group">{children}</tr>
);

export const BioTableCell: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <td className="p-4 align-top text-gray-300 text-base leading-relaxed group-hover:text-white transition-colors">{children}</td>
);

export const BioOrderedList: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <ol className="list-decimal list-outside ml-6 space-y-3 text-gray-300 leading-relaxed text-lg mb-8 marker:text-amber-500 marker:font-bold">{children}</ol>
);

export const BioListItem: React.FC<{ children?: React.ReactNode; html?: string }> = ({ children, html }) => {
    if (html) {
        return <li className="pl-2" dangerouslySetInnerHTML={{ __html: html }} />;
    }
    return <li className="pl-2">{children}</li>;
};
