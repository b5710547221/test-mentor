import react from 'react'
import * as React from 'react'

interface IObj1 {
  id: number;
  name: string;
}
const data = 
     [ {"id" :1,"name":"Kenny Roger"},
       {"id" :2,"name":"Wittawas Wi"},
       {"id" :3,"name":"Oak1"},
       {"id" :4,"name":"Oak2"},
       {"id" :5,"name":"Oak3"},
       {"id" :6,"name":"Oak4"},
       {"id" :7,"name":"Oak5"}];
       
const defaultProps:IObj1[] = data;

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
           {obj1.map((obj1) => {
               if (search != "" && obj1.name.toLowerCase().includes(search.toLowerCase())) {
                    return (
                       <option key={obj1.name}>
                           <h3>{obj1.name}</h3>
                       </option>
                   );
               }
               return null;
              })}
       </ul>
     </div>
    )
  }