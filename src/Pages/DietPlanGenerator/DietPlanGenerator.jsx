import React, { useState } from 'react'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


const DietPlanGenerator = () => {

    const calories = localStorage.getItem('calories')
    const [meals, setMeals] = useState('')
    const [showDropdown, setShowDropDown] = useState(false)


    /*
    Carbohydrates have 4 calories per gram
    Proteins have 4 calories per gram
    Fats have 9 calories per gram
    */
    return (
        <>
            {/* <div>Diet Plan Generator</div>
            <div>
                Your Calories are - {calories}
            </div> */}


            <div>
                <div className='text-[2.2vw] font-bold text-blue-500 w-full grid place-content-center text-center'>
                    Planning Diets daily kill your time ?
                    <br /> We got you .
                </div>
                <div className='text-[1.3vw] font-bold '>
                    Your Required Calories <br />
                    to maintain weight - {Math.round(calories)} Calories
                </div>
                <div className='w-full grid  grid-cols-2 mb-20 place-items-center'>


                    {/* <div className='w-[30vw] bg-white p-8 shadow-2xl grid place-content-center'>
                        <div className='p-4 '>
                            <div className='text-2xl mb-[1vw] font-semibold'>For Gaining Weight</div>
                            <div className='text-2xl'>week 1 =&gt;<span className='mr-2'>{Math.round(calories + 10)}</span>calories</div>
                            <div className='text-2xl'>week 2 =&gt;<span className='mr-2'>{Math.round(calories + 20)}</span>calories</div>
                            <div className='text-2xl'>week 3 =&gt;<span className='mr-2'>{Math.round(calories + 30)}</span>calories</div>
                            <div className='text-2xl'>week 4 =&gt;<span className='mr-2'>{Math.round(calories + 40)}</span>calories</div>
                            <div className='text-2xl'>week 5 =&gt;<span className='mr-2'>{Math.round(calories + 50)}</span>calories</div>
                        </div>
                    </div>

                    <div className='w-[30vw] bg-white p-8 shadow-2xl grid place-content-center'>
                        <div className='p-4 grid place-content-center'>
                            <div className='text-2xl mb-[1vw] font-semibold'>For Losing Weight</div>
                            <div className='text-2xl'>week 1 =&gt;<span className='mr-2'>{Math.round(calories - 10)}</span>calories</div>
                            <div className='text-2xl'>week 2 =&gt;<span className='mr-2'>{Math.round(calories - 20)}</span>calories</div>
                            <div className='text-2xl'>week 3 =&gt;<span className='mr-2'>{Math.round(calories - 30)}</span>calories</div>
                            <div className='text-2xl'>week 4 =&gt;<span className='mr-2'>{Math.round(calories - 40)}</span>calories</div>
                            <div className='text-2xl'>week 5 =&gt;<span className='mr-2'>{Math.round(calories - 50)}</span>calories</div>
                        </div>
                    </div> */}

                    <div className='mt-[4vw]'>

                        <div 
                        onClick={() => setShowDropDown(!showDropdown)}
                        className='relative w-[10vw] h-[4vw] border-[1px] border-black grid place-content-center rounded-lg cursor-pointer'>
                            <div className='flex flex-row justify-between cursor-pointer '
                                onClick={() => setShowDropDown(!showDropdown)}
                            >
                                <span>{meals === 'one' ? 'one' : meals === 'two' ? 'two' : meals === 'three' ? "three" : meals === 'four' ? 'four' : meals === 'five' ? 'five' : meals === 'six' ? "six" : 'Enter Number of Meals'}</span>
                                <svg xmlns="http://www.w3.org/2000/svg" className="  h-6 w-6 relative left-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                </svg>
                            </div>


                            {showDropdown && <div className='absolute top-[5vw] w-[10vw] h-[20vw] bg-gray-300  flex flex-col justify-center items-center'>
                                <span className='w-full grid place-content-center hover:bg-gray-200 cursor-pointer h-[3vw] text-[1.3vw] font-semibold' onClick={() => { setShowDropDown(!showDropdown); setMeals('one') }}>One</span>
                                <span className='w-full grid place-content-center hover:bg-gray-200 cursor-pointer h-[3vw] text-[1.3vw] font-semibold' onClick={() => { setShowDropDown(!showDropdown); setMeals('two') }}>Two</span>
                                <span className='w-full grid place-content-center hover:bg-gray-200 cursor-pointer h-[3vw] text-[1.3vw] font-semibold' onClick={() => { setShowDropDown(!showDropdown); setMeals('three') }}>Three</span>
                                <span className='w-full grid place-content-center hover:bg-gray-200 cursor-pointer h-[3vw] text-[1.3vw] font-semibold' onClick={() => { setShowDropDown(!showDropdown); setMeals('four') }}>Four</span>
                                <span className='w-full grid place-content-center hover:bg-gray-200 cursor-pointer h-[3vw] text-[1.3vw] font-semibold' onClick={() => { setShowDropDown(!showDropdown); setMeals('five') }}>Five</span>
                                <span className='w-full grid place-content-center hover:bg-gray-200 cursor-pointer h-[3vw] text-[1.3vw] font-semibold' onClick={() => { setShowDropDown(!showDropdown); setMeals('six') }}>Six</span>
                            </div>}
                        </div>

                    </div>
                </div>
                <div className='flex flex-col'>
                    <div>
                        Macro Breakdown
                    </div>
                    <div>
                        Total Calories:-{Math.round(calories)} Calories
                    </div>
                </div>
            </div>

        </>

    )
}

export default DietPlanGenerator