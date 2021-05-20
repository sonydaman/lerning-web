import React, { useState } from 'react'
import PropTypes from 'prop-types'

const ExampleForUseState = props => {
    const [table, setTable] = useState(5)
    const handelTableName = (e) =>{
         setTable(e.currentTarget.value)
    }
    const renderTable = ()=>{
        
        const isNumber = Number.isInteger(parseInt(table));
        // console.log(isNumber,table,typeof table)
        if(isNumber){
            var res = [1,2,3,4,5,6,7,8,9,10];
            // res.length = table;
            // let index = 0;
            // for(index = 0; index < table; index++) {
            //              res.push( <div key={index}>{table} * {item} = {(item) * (table)}</div>)
            //             // res.push(index)
            //        }
            // return res;
            // console.log(res)
            return res.map((item,index)=>{
                return <div key={index}>{table} * {item} = {(item) * (table)}   </div>
            })
            // console.log(res);
            // return  "HI";
        }
        else {
            return "Kindly enter a number";
        }

    }
    return (
        <div>
           <h1>Table of {table}</h1>
           Add your table <input onChange={handelTableName} />
           {table && renderTable()}
        </div>
    )
}

ExampleForUseState.propTypes = {

}

export default ExampleForUseState
