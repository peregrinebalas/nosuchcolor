import { useState } from 'react';

export default function TopBar() {
    let [title, setTitle] = useState("COLOR")

    return (
        <div>
            <h1>NO SUCH {title}</h1>
        </div>
    )

}