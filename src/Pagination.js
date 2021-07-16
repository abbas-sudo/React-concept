import React, { useState } from 'react'

const Pagination = ({ totalPages, handleClick }) => {
    const pages = [...Array(totalPages).keys()].map(num => num + 1);

    let [firstCount, setFirstCount] = useState(0);
    let [lastCount, setLastCount] = useState(5);

    const showCounts = pages.slice(firstCount, lastCount);

    function handleIncrease() {
        if(lastCount <= totalPages-1){
        setFirstCount(firstCount + 1);
        setLastCount(lastCount + 1);
        }else{
            return;
        }
    }

    function handleMinus() {
        if(!firstCount <= 0){
        setFirstCount(firstCount - 1);
        setLastCount(lastCount - 1);
    }else{
        return;
    }
}

    return (
        <div>
            <nav style={{ marginTop: '40px', marginLeft: '350px' }}>
                <ul class="pagination pagination-lg">
                    <li class="page-item ">
                        <a class="page-link" href="#" tabindex="-1" onClick={handleMinus}>Previous</a>
                    </li>
                    {showCounts.map(num => (
                        <button class=" page-item page-link"
                            key={num}
                            onClick={() => handleClick(num)}
                        >{num}</button>

                    ))}
                    <li class="page-item">
                        <a class="page-link" href="#" onClick={handleIncrease} >Next</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Pagination
