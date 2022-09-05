import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { data } from 'autoprefixer'
// import 

function TemplateCard() {

    const [temp, setTemp] = useState([])
    const [csst, setCsst] = useState('')
    // const [pageid, setPageid] = useState('')

    useEffect(() => {
        axios.get('http://localhost:8000/api/pages/').then((response) => {
            const res = response.data
            console.log(res)
            setTemp(res)
            return res
            // const css = response.data
            // setCsst(css)

            // const temp = `${html}<style>${css}</style>`

        })
    }, [])
    // <div dangerouslySetInnerHTML={{ __html: item.html }} />
    //


    return (
        <>
            <div className="bg-white">
                <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                    <h2 className="sr-only">items</h2>

                    <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                        {temp.map((item) => (
                            <a key={item.id} href={item.href} className="group">
                                <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                                    <div dangerouslySetInnerHTML={{ __html: item.html }} />
                                </div>
                                <div className='flex justify-between'>
                                    <Link to={`/preview/${item.id}`} >   <button type="button" className="inline-block px-6 py-2.5 bg-gray-200 text-gray-700 font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-300 hover:shadow-lg focus:bg-gray-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-400 active:shadow-lg transition duration-150 ease-in-out hover:text-white hover:shadow-[inset_13rem_0_0_0] hover:shadow-blue-400 duration-[400ms,700ms] transition-[color,box-shadow]">preview</button></Link>

                                    <Link to={`/editor/${item.id}`} > <button type="button" className="inline-block px-6 py-2.5 bg-gray-200 text-gray-700 font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-300 hover:shadow-lg focus:bg-gray-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-400 active:shadow-lg transition duration-150 ease-in-out hover:text-white hover:shadow-[inset_13rem_0_0_0] hover:shadow-blue-400 duration-[400ms,700ms] transition-[color,box-shadow]">edit</button></Link>
                                </div>



                                {/* <p className="mt-1 text-lg font-medium text-gray-900">{item.price}</p> */}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default TemplateCard