import {useEffect, useState} from "react";
import {useHistory} from "react-router";
import './Menu.module.css';

export function Menu() {


    const history = useHistory()
    const  location = 'https://api.thecatapi.com/v1/categories'
    const [state, setState] = useState<any>([]);

    function pushHistory (categoryId:number){
        history.push("/list/?limit=10&category_ids="+categoryId+'&page=1')
    }

    useEffect(  () => {
        async function  getData() {
            try {
                const response = await fetch(location);
                const result = await response.json();
                await setState(result)
                console.log(state)
            } catch (err) {
                console.log(err)
            }
        }
        getData()

    }, [])

    return (
        <nav className="menu">
            <div className="smartphone-menu-trigger"></div>
            <ul>
                {state.map( (data:{name: string, id: number}) => {
                    return <li key={data.id.toString()}>
                        <button  onClick={() => pushHistory(data.id)}>
                       <span>{data.name}</span></button>
                    </li>;
                })}
            </ul>
        </nav>
    )
}






