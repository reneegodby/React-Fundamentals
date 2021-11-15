import React, {useState, useEffect} from 'react';

const Hooks = () => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState({});

//'fetcher' function that will find the star wars character based upon the number we input.
    const fetcher = () => {
        fetch(`https://swapi.dev/api/people/${query}`)
        .then(res => res.json())
        .then(json => {
            console.log(json)
            setResults(json);
        })
    }
    //we search the Star Wars API based upon our text input . we JSON-ify that data, then we store these results in our results state variable and console.log the results of this fetch.

    return(
        <div className="main">
            <div className="mainDiv">
            <input value={query} onChange={e => setQuery(e.target.value)} placeholder="enter your sw character number"/>
            <button onClick={() => fetcher()}>Click for Character!</button> 
            {/* button triggers fetcher function  */}
            {results ? <h2>{results.name}</h2>: <div></div>}
            {/* As long as results is 'truthy', we display an h2 tag with the name of the character, otherwise we show empty divs */}
            </div>
        </div>
    )
}

const Hooks2 = () => {
    const [results, queryNum, setQueryNum] = useNumHook('');
    const [clicks, setClicks] = useClicks(0);
    
    return(
        <div className="main">
            <div className="mainDiv">
                <h3>Enter a number below to see a number fact.</h3>
                <input value={queryNum} onChange={e => setQueryNum(e.target.value)} placeholder="enter a number" />
                {results ? <h2>{results}</h2> : <div></div>}
                <button onClick={() => setClicks(clicks + 1)}>Click to update document title</button>
            </div>
        </div>
    );
};

const useNumHook = (num) => {
    const [queryNum, setQueryNum] = useState(num);
    const [results, setResults] = useState('');

    useEffect(() => {
        if(queryNum !== ''){
            fetch(`http://numbersapi.com/${queryNum}`)
            .then(res => res.text())
            .then(json => {
                console.log(json);
                setResults(json);
            });
        };
    }, [queryNum]);
    //Our 'effect' function (the arrow callback function inside the 'useEffect' parentheses) checks to see that the queryNum is a nonempty string.  If so, it fetches a math fact based upon the queryNum value.  After json-ifying the returned data in the first .then, our second .then calls setResults to store the json-ified data in the results state variable.

// Additionally, this useEffect passes a second argument--the 'queryNum' inside the array, so that the callback doing the fetching is only called when there's a change to queryNum.

    return [results, queryNum, setQueryNum];
}
//Unlike a functional component, it takes a specific number of a character to search for, rather than a prop object.  Because hooks are tied to the 'life-cycle' of a React component, our hook is using lots of state information--we're storing and giving a function to set the number a user queries, and we're storing and providing a function to set the results returned by the Random Number API.

//Also, this Hook provides an interesting example of encapsulation--even though the Hook itself has access to 2 state variables and 2 functions to change them, we only provide 3 of those 4 items as returns from this hook.  We don't want 'setResults' to be exposed outside this hook, as the hook itself will include the fetch and results array manipulation internally.  Providing 'setResults' outside the hook while using it internally could introduce bugs into the program.

const useClicks = (initCount) => {
    const [clicks, setClicks] = useState(initCount);

    useEffect(() => {
        document.title = `You have clicked ${clicks} times`;
    }, [clicks])
    return [clicks, setClicks]
}
export default Hooks2;