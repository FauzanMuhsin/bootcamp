import { useRef} from "react";

const ClickCounter = () => {
  const data = [
    { id: 1, name: 'Kotak A' },
    { id: 2, name: 'Kotak B' },
    { id: 3, name: 'Kotak C' }
  ];

  // Gunakan Map untuk menyimpan banyak referensi sekaligus
  const itemsRef = useRef(new Map());

  const handleHighlight = (id) => {
    const node = itemsRef.current.get(id);
    node.style.backgroundColor = 'yellow'; // Mengubah elemen spesifik
  };

  const renderList = () => {
    return data.map((item) => (
      <div 
        key={item.id} 
        // Logika untuk memasukkan elemen ke dalam Map
        ref={(el) => {
          if (el) {
            itemsRef.current.set(item.id, el);
          } else {
            itemsRef.current.delete(item.id);
          }
        }}
        style={{ padding: '10px', border: '1px solid black', margin: '5px' }}
      >
        {item.name} 
        <button onClick={() => handleHighlight(item.id)}>Highlight</button>
      </div>
    ));
  };

  return <div>{renderList()}</div>;
};

export default ClickCounter

// import { useRef, useState } from "react";

// const Click = () => {
//     const countRef = useRef(0);
//     const [count, setCount] = useState(0);

//     countRef.current = countRef.current + 1;

//     if (countRef.current > 5) {
//          count + 1;
//     } else {

//     }

// }

// export default Click