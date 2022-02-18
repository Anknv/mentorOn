export default function getSpots(mentor_id,available_spots){
  for (const data of available_spots) {
    console.log("data",typeof data.mentor_id);
    console.log("mentor_id",typeof mentor_id);

    if (data.mentor_id === mentor_id) {
      console.log("data.count",data.count);
      return data.count;
    }
  }

};


