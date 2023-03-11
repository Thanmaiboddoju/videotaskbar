import React from 'react';

const History = (setOfLinks) => {
    return (
        <div>
            {/* {setOfLinks?.map((o) => {
                return (
                    <div>{o}</div>
                )
            })} */}
            {console.log(JSON.parse(localStorage.getItem("linkhistory")))}
        </div>
    );
}

export default History;
