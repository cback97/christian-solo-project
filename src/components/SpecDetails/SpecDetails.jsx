import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react';
import './SpecDetails.css'

function SpecsPage() {

    const specReducer = useSelector(store => store.specFormReducer)
    
    // const dispatch = useDispatch();

    const handleClick = () => {
        
    }
  

    return (
        <>
            <header>
                <h1>Selected Film Details</h1>
            </header>
            {specReducer.map((spec,i) => {
                return (
                    <div key={i} >
                        <h2>{spec.date_submitted}</h2>
                        <h3>STATS OVERVIEW</h3>
                        <br />
                        <br />
                        <h3>GAD-7 SCORE</h3>
                        <p>{spec.description}</p>
                        <h3>PHQ-9 SCORE</h3>
                        <h4>{spec.phq_form_score}</h4>
                        <h3>REFLECTIONS</h3>
                        <p>{spec.reflections}</p>
                    </div>
                );
            })}
            <button>Back to Home Page</button>
        </>
    )
}

export default SpecsPage;

