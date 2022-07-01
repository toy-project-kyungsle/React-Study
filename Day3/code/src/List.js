import React, { useState, useEffect } from 'react';
import './router1.css';
import profile1 from './profile 1.png';
import profile2 from './profile 2.png';
import profile3 from './profile 3.png';
import profile4 from './profile 4.png';
import profile5 from './profile 5.png';
import profile6 from './profile 6.png';
function List({ ListState, setListState }) {
  const A = [
    { id: 'tkim', image: profile1 },
    { id: 'kyungsle', image: profile2 },
    { id: 'jimin', image: profile3 },
    { id: 'seunam', image: profile4 },
    { id: 'jwoo', image: profile5 },
    { id: 'jolim', image: profile6 },
  ];

  return (
    <>
      {!ListState ? (
        <div></div>
      ) : (
        <div class="body">
          <p class="create_list_title">친바 생성 목록</p>
          <div class="list_image">
            {A.map((elem) => (
              <>
                <div class="image_each">
                  <img src={elem.image}></img>
                  <p class="elem_id">{elem.id}</p>
                </div>
              </>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default List;
