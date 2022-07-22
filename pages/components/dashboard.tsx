import react from 'react'
import * as React from 'react'


interface IObj1 {
  id: string;
  name: string;
  current_price: number;
  symbol: string;
  image: string; 

}

const defaultProps:IObj1[] = [];

export const Dashboard: React.FC  = () => {
    const [obj1, setObj1]: [IObj1[], (posts: IObj1[]) => void] = React.useState(defaultProps);
    const [search, setSearch]: [string, (search: string) => void] = React.useState("");
  
    const handleChange = (e: { target: { value: string; }; }) => {
      setSearch(e.target.value);
    };
   
  
    return (
      <div className="App">
      
       <ul className="posts">
       <input type="text" value={search} onChange={(e) => setSearch(e.target.value)}></input>
          
       </ul>
     
     
     </div>
    )
  }