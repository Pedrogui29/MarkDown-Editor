import React, {useState} from 'react';
import ReactMarkdown from 'react-markdown';

import './index.css';
export default function App() {
const [input,setInput] = useState();
return (
 <div className= "App">
     <textarea
     autoFocus
     className= "textarea"
     value={input}
     onChange= {(e) => setInput(e.target.value)}
     />
     <ReactMarkdown children={input} className="markdown"  /> 
  </div>
 );
}
    
