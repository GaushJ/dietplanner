import React, { useState } from 'react'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { Link } from 'react-router-dom';
//sedentary = BMR x 1.2 (little or no exercise, desk job)

/*Lightly active = BMR x 1.375 (light exercise/ sports 1-3 days/week)

Moderately active = BMR x 1.55 (moderate exercise/ sports 6-7 days/week)

Very active = BMR x 1.725 (hard exercise every day, or exercising 2 xs/day)

Extra active = BMR x 1.9 (hard exercise 2 or more times per day, or training for
marathon, or triathlon, etc. */
const Home = () => {
  const [weightGain, setWeightGain] = useState(false)
  const [weightLose, setWeightLose] = useState(false)
  const [activity, setActivity] = useState('')
  const [weight, setWeight] = useState(0)
  const [age, setAge] = useState(0)
  const [height, setHeight] = useState(0)
  const [gender, setGender] = useState('')
  const [bmr, setBmr] = useState()
  const [calories, setCalories] = useState(0)
  const [showDietButton, setShowDietButton] = useState(false)

  const handleRadioChange = (e) => {
    setGender(e.target.value)
  }

  const handleActivity = (e) => {
    setActivity(e.target.value)


  }
  const handleSubmit = () => {

    if (gender === 'male') {
      let BMR = (10 * weight) + (6.25 * height) - (5 * age) + 5
      setBmr(BMR)
    } else if (gender === 'female') {
      let BMR = (10 * weight) + (6.25 * height) - (5 * age) - 161
      setBmr(BMR)
    }



  }
  const handleActivityCal = () => {
    if (activity === 'sedentary') {
      let calories = bmr * 1.2;
      setCalories(calories)
      localStorage.setItem('calories', calories)
    } else if (activity === 'Lightly active') {
      let calories = bmr * 1.375;
      setCalories(calories)
      localStorage.setItem('calories', calories)
    } else if (activity === 'Moderately active') {
      let calories = bmr * 1.55;
      setCalories(calories)
      localStorage.setItem('calories', calories)
    } else if (activity === 'Very active') {
      let calories = bmr * 1.725;
      setCalories(calories)
    } else if (activity === 'Extra active') {
      let calories = bmr * 1.9;
      setCalories(calories)
      localStorage.setItem('calories', calories)
    }

  }
  console.log(activity, calories)


  return (
    <>

      <div className='text-3xl font-semibold p-8'>
        Step 1 - Calculate BMR and maintainence calories
      </div>

      <div className='p-8 flex flex-row justify-between mb-20'>

        <div className=' grid place-content-center shadow-2xl'>
          <div className='p-12'>
            <label>Enter Your Age</label><br />
            <input type='number' className='w-48 h-8 border-2 ' onChange={(e) => { setAge(e.target.value) }} /> <span>Ages 50 - 80</span><br />


            <FormControl>
              <label>Gender</label>
              <RadioGroup
                row
                defaultValue="female"
                name="radio-buttons-group"
                onChange={handleRadioChange}
              >
                <FormControlLabel value="female" control={<Radio />} label="Female" />
                <FormControlLabel value="male" control={<Radio />} label="Male" />
              </RadioGroup>
            </FormControl>

            <div className='mb-[2vw]'>
              <label>Enter Your weight (Kg)</label><br />
              <input type='number' className='w-48 h-8 border-2 ' onChange={(e) => { setWeight(e.target.value) }} /> <br />
              <label>Enter Your Height (cm)</label><br />
              <input type='number' className='w-48 h-8 border-2 ' onChange={(e) => { setHeight(e.target.value) }} /> <br />
            </div>
            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="demo-simple-select-standard-label">Activity Level</InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={activity}
                onChange={handleActivity}
                label="Activity"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={'sedentary'}>sedentary (little or no exercise, desk job)</MenuItem>
                <MenuItem value={'Lightly active'}>Lightly active (light exercise/ sports 1-3 days/week)</MenuItem>
                <MenuItem value={'Moderately active'}>Moderately active (moderate exercise/ sports 6-7 days/week)</MenuItem>
                <MenuItem value={'Very active'}>Very active (hard exercise every day, or exercising 2 xs/day)</MenuItem>
                <MenuItem value={'Extra active'}>Extra active (hard exercise 2 or more times per day)</MenuItem>
              </Select>
            </FormControl>

            <div
              className='w-48 rounded-[0.3vw] h-8 bg-blue-500 grid place-content-center text-white cursor-pointer'
              onClick={() => { handleSubmit(); handleActivityCal(); setShowDietButton(true) }}
            >
              Submit
            </div>
          </div>
        </div>
        <div>
          {bmr &&
            <>
              <div className='bg-green-800 h-[5vw] w-full rounded-[0.3vw] grid place-content-center mt-[3vw] text-[2vw] text-white'>
                Result
              </div>
              <div className='text-[2vw]'>
                BMR = <span className='text-green-600 font-bold'>{Math.round(bmr)} </span> Calories/day<br />
                Maintenance Calories = <span className='text-green-600 font-bold'>{Math.round(calories)} </span>Calories/day
              </div>
              <div className='flex flex-row mt-[4vw] w-full'>
                <a href='#gain' >
                  <div
                    className='mr-[2vw] w-[20vw] bg-blue-500 rounded-[0.2vw] grid place-content-center cursor-pointer'
                    onClick={() => { setWeightGain(true); setWeightLose(false); }}
                  >
                    <div className='py-[1.2vw] text-white'> Gain weight </div>

                  </div>
                </a>
                <div
                  className='mr-[2vw] w-[20vw] bg-red-500 rounded-[0.2vw] grid place-content-center cursor-pointer'
                  onClick={() => { setWeightGain(false); setWeightLose(true) }}
                >
                  <div className='py-[1.2vw] text-white'>   Lose weight</div>

                </div>
              </div>
            </>
          }
        </div>
      </div>
      <div className='w-full grid place-content-center mb-20'>

        {weightGain ?
          <div className='w-[30vw] bg-white p-8 shadow-2xl grid place-content-center'>
            <div className='p-4 '>
              <div className='text-2xl mb-[1vw] font-semibold' id="gain">For Gaining Weight</div>
              <div className='text-2xl'>week 1 =&gt;<span className='mr-2'>{Math.round(calories + 10)}</span>calories</div>
              <div className='text-2xl'>week 2 =&gt;<span className='mr-2'>{Math.round(calories + 20)}</span>calories</div>
              <div className='text-2xl'>week 3 =&gt;<span className='mr-2'>{Math.round(calories + 30)}</span>calories</div>
              <div className='text-2xl'>week 4 =&gt;<span className='mr-2'>{Math.round(calories + 40)}</span>calories</div>
              <div className='text-2xl'>week 5 =&gt;<span className='mr-2'>{Math.round(calories + 50)}</span>calories</div>
            </div>
          </div>
          : weightLose ?
            <div className='w-[30vw] bg-white p-8 shadow-2xl grid place-content-center'>
              <div className='p-4 grid place-content-center'>
                <div className='text-2xl mb-[1vw] font-semibold'>For Losing Weight</div>
                <div className='text-2xl'>week 1 =&gt;<span className='mr-2'>{Math.round(calories - 10)}</span>calories</div>
                <div className='text-2xl'>week 2 =&gt;<span className='mr-2'>{Math.round(calories - 20)}</span>calories</div>
                <div className='text-2xl'>week 3 =&gt;<span className='mr-2'>{Math.round(calories - 30)}</span>calories</div>
                <div className='text-2xl'>week 4 =&gt;<span className='mr-2'>{Math.round(calories - 40)}</span>calories</div>
                <div className='text-2xl'>week 5 =&gt;<span className='mr-2'>{Math.round(calories - 50)}</span>calories</div>
              </div>
            </div> : ''}
      </div>
      {showDietButton && <Link to='/diet'>
        <div className='fixed bottom-8 right-8 bg-green-500 rounded-[0.3vw] cursor-pointer'>
          <div className='p-4 text-white font-semibold'> Go to Diet Planner</div>

        </div>
      </Link>}

    </>
  )
}

export default Home