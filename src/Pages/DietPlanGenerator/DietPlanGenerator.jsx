import React, { useState } from 'react'

const DietPlanGenerator = () => {
    const [weightGain, setWeightGain] = useState(false)
    const [weightLose, setWeightLose] = useState(false)
    const calories = localStorage.getItem('calories')
    return (
        <>
            <div>Diet Plan Generator</div>
            <div>
                Your Calories are - {calories}
            </div>

        </>

    )
}

export default DietPlanGenerator