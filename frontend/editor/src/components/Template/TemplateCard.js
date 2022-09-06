import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import './Template.css'
import img from '../../assets/photo-1496181133206-80ce9b88a853.avif'



function TemplateCard() {

    const [temp, setTemp] = useState([])

    const { id } = useParams()
    // const [csst, setCsst] = useState('')
    // const [pageid, setPageid] = useState('')

    useEffect(() => {
        axios.get('http://localhost:8000/page-list/').then((response) => {
            const res = response.data
            console.log(res)
            setTemp(res)
            // console.log(temp)
            // return res
        })
        // setTemp(res)
    }, [])

    // const handleDelet = (id) => {
    //     axios.delete(`http://localhost:8000/page-delete/${id}`).then((response) => {
    //         // alert(response)
    //     })

    // }

    const handleDelet = async (id) => {
        try {
            const res = await axios.delete(`http://localhost:8000/page-delete/${id}`).then(() => {
                axios.get('http://localhost:8000/page-list/').then((response) => {
                    const res = response.data
                    console.log(res)
                    setTemp(res)
                    // console.log(temp)
                    // return res
                })
            })
            console.log('Item successfully deleted.')
        } catch (error) {
            alert(error)
        }
    }

    return (
        <>
            <div className="bg-white">
                <div className='flex flex-between mt-3'>
                    <h1 className=" text-black  px-5">my pages </h1>
                    <Link to='./editor'>
                        <button type="button" className="inline-block px-6 py-2.5  text-gray-700 font-medium text-xs leading-tight uppercase rounded shadow-md hover:shadow-lg focus:bg-gray-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-400 active:shadow-lg transition duration-150 ease-in-out hover:text-white hover:shadow-[inset_13rem_0_0_0] hover:shadow-blue-400 duration-[400ms,700ms] transition-[color,box-shadow] btn-card absolute z-5 right-0"  >Add</button>
                    </Link>

                </div>

                <div className="mx-auto max-w-2xl py-10 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">


                    <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 xl:gap-x-2 ">
                        {temp.map((item) => (

                            <div key={item.id} className="group">
                                <div className="  aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8 temp-card relative">
                                    <button type="button" className="inline-block px-6 py-2.5  text-gray-700 font-medium text-xs leading-tight uppercase rounded shadow-md hover:shadow-lg focus:bg-gray-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-400 active:shadow-lg transition duration-150 ease-in-out hover:text-white hover:shadow-[inset_13rem_0_0_0] hover:shadow-blue-400 duration-[400ms,700ms] transition-[color,box-shadow] btn-card absolute z-5 right-0" onClick={() => handleDelet(item.id)}>del</button>
                                    <div className="contain absolute right-0 left-0" dangerouslySetInnerHTML={{ __html: item.html }} />

                                    {/* <img className='object-cover mx-auto mt-2 ' {item.Page_pic} alt=''></img> */}
                                    {/* {
                                        item.page_pic
                                    } */}

                                </div>

                                <div className='flex justify-between mt-2'>
                                    <Link to={`/preview/${item.id}`} >   <button type="button" className="inline-block px-6 py-2.5  text-gray-700 font-medium text-xs leading-tight uppercase rounded shadow-md hover:shadow-lg focus:bg-gray-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-400 active:shadow-lg transition duration-150 ease-in-out hover:text-white hover:shadow-[inset_13rem_0_0_0] hover:shadow-blue-400 duration-[400ms,700ms] transition-[color,box-shadow] btn-card">preview</button></Link>

                                    <Link to={`/editor/${item.id}`} > <button type="button" className="inline-block px-6 py-2.5 bg-gray-200 text-gray-700 font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-300 hover:shadow-lg focus:bg-gray-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-400 active:shadow-lg transition duration-150 ease-in-out hover:text-white hover:shadow-[inset_13rem_0_0_0] hover:shadow-blue-400 duration-[400ms,700ms] transition-[color,box-shadow]">edit</button></Link>

                                </div>

                            </div>


                        ))}
                    </div>



                </div>
            </div>
        </>
    )
}

export default TemplateCard