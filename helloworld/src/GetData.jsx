import React, { useState } from 'react';
// import { getData } from './variables/data';


const GetData = () => {

    const [page, setPage] = useState(1);


    const prev = () => {
        setPage(page + -1);
    }
    const next = () => {
        setPage(page + 1);
    }

    // const nowData = getData.filter((data) => {
    //     if (page === 1) {
    //         return data.contents_detail_id === 1;
    //     } else if (page === 2) {
    //         return data.contents_detail_id === 2;
    //     }
    // });


    return (
        <div>
            {/* {nowData.map((data) => (
                <li key={data.contents_detail_id} style={{ listStyle: 'none' }}>{data.answer} */}
                    {/* style={{ listStyle: 'none' }}>
                    顧客名:{data.CustomerName}　住所:{data.Address} */}
                {/* </li>
            ))} */}
            <button onClick={prev}>←</button>
            <button onClick={next}>→</button>
        </div>

    );
}

export default GetData;