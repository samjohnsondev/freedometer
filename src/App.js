import './App.css';
import { useFetch } from './hooks/useFetch';
import { vaccineUrl2, vaccineUrl, eligiblePopulation, formatNumber, formatDate } from './utils/constants';
import { Header } from './components/Header';
import { Loading } from './components/Loading';
import { InfoCard } from './components/InformationCard';

function App() {
  const { data, error, loading } = useFetch(vaccineUrl2);

  if(loading){
    return(
      <Loading />
    )
  }

  if(data && !error){  

    const dateObj = new Date();

    const dataDate = new Date(dateObj.getFullYear(), dateObj.getMonth(), dateObj.getDate() -1).toISOString().split('T')[0].toString();
    

  const dataArray = data.data.filter(value => {
    return value.date === dataDate;
  })

  // dataArray.map((record, index) => {
  //   return(
  //     <InfoCard {...record} key={index}/>
  //   )
  // })

  console.log(dataArray);
  
    const { cumPeopleVaccinatedFirstDoseByPublishDate, cumPeopleVaccinatedSecondDoseByPublishDate, date, newPeopleVaccinatedFirstDoseByPublishDate, newPeopleVaccinatedSecondDoseByPublishDate} = data.data[0];
    const { newPeopleVaccinatedFirstDoseByPublishDate : previousDayFirstDoses, newPeopleVaccinatedSecondDoseByPublishDate: previousDaySecondDoses } = data.data[1];

    const propsData = {
      percentVaccFirstDose: parseFloat((cumPeopleVaccinatedFirstDoseByPublishDate / eligiblePopulation) * 100).toFixed(2),
      cleanFirstDose: formatNumber(cumPeopleVaccinatedFirstDoseByPublishDate),
      differenceFirstDose: newPeopleVaccinatedFirstDoseByPublishDate - previousDayFirstDoses,
      differenceSecondDose: newPeopleVaccinatedSecondDoseByPublishDate - previousDaySecondDoses,
      cleanSecondDose: formatNumber(cumPeopleVaccinatedSecondDoseByPublishDate),
      percentVaccSecondDose: parseFloat((cumPeopleVaccinatedSecondDoseByPublishDate / eligiblePopulation) * 100).toFixed(2),
      date: formatDate(date)
      }

    return(
      <>
        <Header Number={formatNumber(eligiblePopulation)}/>
        <InfoCard {...propsData} />
      </>
    )
  } else {
    return(
      <p>Big error</p>
    )
  }
}

export default App;
