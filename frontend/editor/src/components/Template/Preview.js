import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

function Preview() {

    const [temp, setTemp] = useState([])
    // const [id, setCsst] = useState('')
    const { id } = useParams()
    console.log(id)

    useEffect(() => {
        axios.get(`http://localhost:8000/api/pages/${id}/`).then((response) => {
            const html = response.data.html
            // console.log(res)
            // return res
            const css = response.data.css
            const temp = `${html}<style>${css}</style>`
            setTemp(temp)
            // setCsst(css)
        })
    }, [])

    return (
        <div>
            <div dangerouslySetInnerHTML={{ __html: temp }} />
        </div>
    )
}

export default Preview