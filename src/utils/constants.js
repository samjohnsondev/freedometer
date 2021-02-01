
export const vaccineUrl = 'https://coronavirus.data.gov.uk/api/v1/data?filters=areaType=overview&structure={"date":"date","areaName":"areaName","newPeopleVaccinatedFirstDoseByPublishDate":"newPeopleVaccinatedFirstDoseByPublishDate","cumPeopleVaccinatedFirstDoseByPublishDate":"cumPeopleVaccinatedFirstDoseByPublishDate","newPeopleVaccinatedSecondDoseByPublishDate":"newPeopleVaccinatedSecondDoseByPublishDate","cumPeopleVaccinatedSecondDoseByPublishDate":"cumPeopleVaccinatedSecondDoseByPublishDate"}';
export const eligiblePopulation = 54053150;
export const vaccineUrl2 = 'https://coronavirus.data.gov.uk/api/v1/data?filters=areaType=nation&structure={"date":"date","areaName":"areaName","newPeopleVaccinatedFirstDoseByPublishDate":"newPeopleVaccinatedFirstDoseByPublishDate","cumPeopleVaccinatedFirstDoseByPublishDate":"cumPeopleVaccinatedFirstDoseByPublishDate","newPeopleVaccinatedSecondDoseByPublishDate":"newPeopleVaccinatedSecondDoseByPublishDate","cumPeopleVaccinatedSecondDoseByPublishDate":"cumPeopleVaccinatedSecondDoseByPublishDate"}'


export const formatNumber = (number) => {
    return new Intl.NumberFormat().format(number);
}

export const formatDate = (date) => {
    return new Intl.DateTimeFormat('en-GB', { dateStyle: 'full'}).format(new Date(date))
}

export const testData = [
    {
      "country": "AD",
      "hot dog": 192,
      "hot dogColor": "hsl(131, 70%, 50%)",
      "burger": 107,
      "burgerColor": "hsl(298, 70%, 50%)",
      "sandwich": 122,
      "sandwichColor": "hsl(22, 70%, 50%)",
      "kebab": 11,
      "kebabColor": "hsl(29, 70%, 50%)",
      "fries": 120,
      "friesColor": "hsl(107, 70%, 50%)",
      "donut": 144,
      "donutColor": "hsl(106, 70%, 50%)"
    },
    {
      "country": "AE",
      "hot dog": 188,
      "hot dogColor": "hsl(124, 70%, 50%)",
      "burger": 171,
      "burgerColor": "hsl(271, 70%, 50%)",
      "sandwich": 185,
      "sandwichColor": "hsl(161, 70%, 50%)",
      "kebab": 140,
      "kebabColor": "hsl(252, 70%, 50%)",
      "fries": 62,
      "friesColor": "hsl(34, 70%, 50%)",
      "donut": 200,
      "donutColor": "hsl(86, 70%, 50%)"
    },
    {
      "country": "AF",
      "hot dog": 162,
      "hot dogColor": "hsl(114, 70%, 50%)",
      "burger": 150,
      "burgerColor": "hsl(165, 70%, 50%)",
      "sandwich": 40,
      "sandwichColor": "hsl(174, 70%, 50%)",
      "kebab": 10,
      "kebabColor": "hsl(280, 70%, 50%)",
      "fries": 4,
      "friesColor": "hsl(79, 70%, 50%)",
      "donut": 82,
      "donutColor": "hsl(238, 70%, 50%)"
    },
    {
      "country": "AG",
      "hot dog": 138,
      "hot dogColor": "hsl(219, 70%, 50%)",
      "burger": 181,
      "burgerColor": "hsl(132, 70%, 50%)",
      "sandwich": 164,
      "sandwichColor": "hsl(72, 70%, 50%)",
      "kebab": 160,
      "kebabColor": "hsl(113, 70%, 50%)",
      "fries": 136,
      "friesColor": "hsl(297, 70%, 50%)",
      "donut": 50,
      "donutColor": "hsl(48, 70%, 50%)"
    },
    {
      "country": "AI",
      "hot dog": 77,
      "hot dogColor": "hsl(317, 70%, 50%)",
      "burger": 185,
      "burgerColor": "hsl(37, 70%, 50%)",
      "sandwich": 24,
      "sandwichColor": "hsl(322, 70%, 50%)",
      "kebab": 160,
      "kebabColor": "hsl(1, 70%, 50%)",
      "fries": 195,
      "friesColor": "hsl(37, 70%, 50%)",
      "donut": 175,
      "donutColor": "hsl(71, 70%, 50%)"
    },
    {
      "country": "AL",
      "hot dog": 165,
      "hot dogColor": "hsl(349, 70%, 50%)",
      "burger": 112,
      "burgerColor": "hsl(239, 70%, 50%)",
      "sandwich": 189,
      "sandwichColor": "hsl(111, 70%, 50%)",
      "kebab": 150,
      "kebabColor": "hsl(214, 70%, 50%)",
      "fries": 77,
      "friesColor": "hsl(47, 70%, 50%)",
      "donut": 74,
      "donutColor": "hsl(136, 70%, 50%)"
    },
    {
      "country": "AM",
      "hot dog": 62,
      "hot dogColor": "hsl(216, 70%, 50%)",
      "burger": 110,
      "burgerColor": "hsl(129, 70%, 50%)",
      "sandwich": 160,
      "sandwichColor": "hsl(290, 70%, 50%)",
      "kebab": 28,
      "kebabColor": "hsl(140, 70%, 50%)",
      "fries": 84,
      "friesColor": "hsl(303, 70%, 50%)",
      "donut": 6,
      "donutColor": "hsl(104, 70%, 50%)"
    }
  ];