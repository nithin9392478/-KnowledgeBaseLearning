import { useState } from 'react';
import './QuickHelp.css';
import HelpItemsData from './HelpItemsData';


const QuickHelp = () => {
    const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

    const toggleExpand = (index: number) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    return (
        <div className="col-lg-3 col-12 p-3 d-flex flex-column gap-3 border quick-help">
            <div className='fw-bold d-flex'>
                <div className='d-flex justify-content-center'><div className='artical-border h-100'></div></div>
                Quick help
            </div>
            <div className='d-flex flex-column gap-3'>
                <div>
                    <input type="text" className="search-input form-control" placeholder="Search for articles, topics, or keywords..." />
                </div>
                {HelpItemsData.map((item, index) => (
                    <div key={index} className='accordion-item  border-0 help-item'>
                        <div className='accordion-header  help-font d-flex justify-content-between' onClick={() => toggleExpand(index)}>
                            <span className='accordion-title fw-bold  quick-help-title'>{item.title}</span>
                            <span className='accordion-icon'>{expandedIndex === index ? '-' : '+'}</span>
                        </div>
                        {expandedIndex === index && (
                            <div className='accordion-content help-item-discription'>
                                {item.discription}
                            </div>
                        )}
                        <div className='quick-border'></div>
                    </div>
                    
                ))}
            </div>
        </div>
    );
};

export default QuickHelp;

