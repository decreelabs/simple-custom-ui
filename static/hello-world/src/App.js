import React, { useEffect, useState } from 'react';
import { invoke } from '@forge/bridge';
import ForgeUI, { Text, Link } from "@forge/ui";

function App() {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        invoke('getText', { example: 'my-invoke-variable' })
            .then((data) => {
                setData(data);
                setIsLoading(false);
            })
            .catch (err => { console.log(err)});
    }, []);

    function Display() { 
        if (isLoading) { return <p>Loading...</p>}
        else {
            return (
              <div>
                <h4>Heading</h4>
                <p>
                  Hoping atlaskit works here. Should look more like Atlassian
                  typography
                </p>
                Data returned from resolver <Text>{data}</Text>
              </div>
            );
        }   
    }

    return (
        <div>
            <Display />
        </div>
    );
}

export default App;
