import { useState } from 'react';
import './styles.css'
import data from './data'
export function Accordian() {
    const [selectedItemId,setSelectedItemId] = useState(null);
    function setSelected(currentId){
        setSelectedItemId(selectedItemId === currentId ? null : currentId);
    }

    const [enableMutiselection, setEnableMultiselection] = useState(false);
    function setMultipleselection(res){
        setEnableMultiselection(res);
    }
    console.log(enableMutiselection);

    const [multipleIds, setMultipleIds] = useState([]);

    function setmultiSelected(id){
        setSelected(null);
        const copyMultipleIds = [...multipleIds];
        if(!copyMultipleIds.includes(id)){
            copyMultipleIds.push(id);
        }
        else{
            copyMultipleIds.splice(copyMultipleIds.indexOf(id),1);
        }
        setMultipleIds(copyMultipleIds);
    }
    if(enableMutiselection){
        console.log("enabled");
    }
    else{
        console.log("disabled");
    }
    console.log(multipleIds);

  return (
    <div className='container'>
        <button onClick={() => setMultipleselection(!enableMutiselection)}>Enable Multiselection</button>
      <div className="box">
        {(data && data.length>0) ?
            data.map(item => <div className='item' key={item.id}>
                <div className='item-desc'>
                    <h2 className='item-question'>{item.question}</h2>
                    {selectedItemId === item.id || multipleIds.includes(item.id) ? <h3 className='item-answer'>{item.answer}</h3>: null}
                </div>
                <span onClick={() => enableMutiselection === true ? setmultiSelected(item.id) : setSelected(item.id)}>+</span>
            </div>):
            <div>no data found</div>
        }
      </div>
    </div>
  );
}
