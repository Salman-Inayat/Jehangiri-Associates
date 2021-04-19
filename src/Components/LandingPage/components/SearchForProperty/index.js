import React from 'react'
import './style.css'
import {Grid} from '@material-ui/core'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles


AOS.init({})

function SearchProperty(){
    let cities = [ 'Karachi', 'Lahore', 'Faisalabad', 'Rawalpindi', 'Multan', 'Gujranwala', 'Peshawar', 'Abbottabad', 'Islamabad', 'Quetta', 'Sargodha']
    const [value, setValue] = React.useState({
        PropID: null,
        BoR: '',
        City: '',
        PropType: '',
        MinPr: null,
        MaxPr: null,
    })
    const handleChange =(event) => {
        const { name, value} = event.target;

        setValue((state) => ({
            ...state,
            [name]: value
        }))
    }

    return(
        <div className='search-cmp'>
            <div className="bg-image"></div>
            <div className="bg-overlay"></div>
            <div className="search-title" data-aos="zoom-in-up">
                <h3>Find your dream home</h3>
            </div>
            <div className="search-box" data-aos="zoom-in-up">
            <Grid container spacing={5}>
                <Grid items md={12} xs={12} data-aos="zoom-in">
                <input 
                    type="number" 
                    placeholder="Property ID" 
                    name='PropID' 
                    className="searchInputSoP" 
                    onChange={handleChange}
                    value={value["PropID"]}
                    
                />
                </Grid>
                <Grid items md={12} xs={12} data-aos="zoom-in">
                <select label="Buy Or Rent" className="searchInputSoP" name='BoR' value={value["BoR"]} onChange={handleChange}>
                    <option value="Rent" className="searchOption" >
                        Rent
                    </option>
                    <option value="Buy" className="searchOption">
                        Buy
                    </option>
                </select>
                </Grid>
                <Grid items md={12} xs={12} data-aos="zoom-in">
                <select label="Select Your City" className="searchInputSoP" name='City' value={value["City"]} onChange={handleChange}>
                    {cities.map(city => (
                        <option value={city}>
                            {city}
                        </option>
                    ))}
                </select>
                </Grid>
                <Grid items md={12} xs={12} data-aos="zoom-in">
                <select label="Select Property Type" className="searchInputSoP" name='PropType' value={value["PropType"]} onChange={handleChange}>
                    <option value="Home" className="searchOption">
                        Home
                    </option>
                    <option value="Plot" className="searchOption">
                        Plot
                    </option>
                    <option value="Commercial" className="searchOption">
                        Commercial
                    </option>
                </select> 
                </Grid>
                <Grid items md={12} xs={12} data-aos="zoom-in">
                <input type="number" placeholder="Minimum Price PKR" className="searchInputSoP" name='MinPr' value={value["MinPr"]} onChange={handleChange}/>

                </Grid>
                <Grid items md={12} xs={12} data-aos="zoom-in">
                <input type="number" placeholder="Maximum Price PKR" className="searchInputSoP" name='MaxPr' value={value["MaxPr"]} onChange={handleChange}/>

                </Grid>
            </Grid>  
                <button className="search-button" type="button" style={{borderRadius:'35px', border:'2px solid darkgoldenrod', backgroundColor:'transparent'}}>
                    <a href='/properties' style={{textDecoration:'none', color:'darkgoldenrod'}}>Search Now</a>
                </button>
            </div>
        </div>
    )
}

export default SearchProperty