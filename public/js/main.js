const submitBtn  = document.getElementById('submitBtn');
const weather_location = document.getElementById('weather_location');
const city_name = document.getElementById('city_name');
const temp = document.getElementById('temp');
const temp_status = document.getElementById('temp_status');
const data_hide = document.querySelector('.data_hide');
const getInfo = async (e) =>{
    e.preventDefault();
    if(weather_location.value === ''){
        city_name.innerText = 'Please write city name before you search';
        data_hide.classList.add('data_hide');
    }
    else{
        try{
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${weather_location.value}&units=metric&appid=f38766014c9efd9fe1882d96a4b89d59`;
            const response = await fetch(url);
            const data = await response.json();
            const arrData = [data];
            city_name.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`;
            temp.innerHTML = `${arrData[0].main.temp}<span><sup>o</sup>C</span>`;
            if(arrData[0].weather[0].main === 'Clear'){
                temp_status.innerHTML = "<i class='fas fa-sun' style='color: #eccc68'></i>";
            }
            else if(arrData[0].weather[0].main === 'Clouds'){
                temp_status.innerHTML = "<i class='fas fa-cloud' style='color: #a4b0be'></i>";
            }
            else if(arrData[0].weather[0].main === 'Rain'){
                temp_status.innerHTML = "<i class='fas fa-cloud-rain' style='color: #f1f2f6'></i>";
            }
            else{
                temp_status.innerHTML = "<i class='fas fa-cloud' style='color: #f1f2f6'></i>";
            }
            data_hide.classList.remove('data_hide');
        }
        catch{
            city_name.innerText = 'Please write city name properly';
            data_hide.classList.add('data_hide');
        }
    }
}
submitBtn.addEventListener('click', getInfo)

