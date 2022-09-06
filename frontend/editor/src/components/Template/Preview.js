import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

function Preview() {

    const [tempprev, setTemp] = useState([])
    const { id } = useParams()
    console.log(id)

    useEffect(() => {
        axios.get(`http://localhost:8000/page-detail/${id}/`).then((response) => {
            // console.log(response)
            const html = response.data.html

            const css = response.data.css
            const temp = `${html}<style>${css}</style>`
            setTemp(temp)
            console.log(tempprev)

        })
    }, [])

    return (
        <div>
            <div dangerouslySetInnerHTML={{ __html: tempprev }} />
        </div>
    )
}

export default Preview