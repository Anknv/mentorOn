export default function getMonthID(month,year,months){
  const year_num = Number(year);
  for (const data of months) {
    console.log("data",data);
    if (month === data.month && year_num === data.year) {
      return data.id;
    }
  }
  return 0;
};


