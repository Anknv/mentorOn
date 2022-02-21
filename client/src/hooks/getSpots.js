export default function getSpots(mentor_id,available_spots){
  const max_spots = 3;
  for (const data of available_spots) {
    if (data.mentor_id === mentor_id) {
      const value = max_spots - data.count;
      if (value === 0) {
         return "Full";
      } else {
         return value;
      }


    }
  }
  return max_spots;
};


