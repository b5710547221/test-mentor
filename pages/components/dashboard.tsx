import react from 'react'
import * as React from 'react'


interface IObj1 {
  id: string;
  name: string;
  current_price: number;
  symbol: string;
  image: string; 

}
const data = 
     [ {"id" :"222","name":"Doe","current_price":1,"symbol":"aaa","image":"1111"},
       {"id" :"333","name":"opi","current_price":2,"symbol":"saa","image":"1114"},];


const defaultProps:IObj1[] = data;

export const Dashboard: React.FC  = () => {
    const [obj1, setObj1]  = React.useState(defaultProps);
    const [search, setSearch]: [string, (search: string) => void] = React.useState("");
  
    const handleChange = (e: { target: { value: string; }; }) => {
      setSearch(e.target.value);
    };
    return (
      <div className="App">
      
       <ul className="posts">
       <input type="text" value={search} onChange={(e) => setSearch(e.target.value)}></input>
           {obj1.map((obj1) => {
               if (search == "" || obj1.name.toLowerCase().includes(search.toLowerCase())) {
                   return (
                       <li key={obj1.id}>
                           <h3>{obj1.id}</h3>
                           <p>{obj1.current_price}</p>
                           <p>{obj1.symbol}</p>
                           <img src={obj1.image} alt="image" />
                       </li>
                   );
               }
               return null;
              })}
       </ul>
     </div>
    )
  }