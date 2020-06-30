
import React from 'react';
import LocationInfo from './LocationInfo';
import { Tabs } from 'antd';

const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}

const marketSchedule = [  
  {  
     day: "Sunday",
     location: "Lents International",
     hours: "9:00am - 2:00pm",
     booth: "4A"
  },
  {  
     day: "Monday",
     location: "Pioneer Courthouse Square",
     hours: "10:00am - 2:00pm",
     booth: "7C"
  },
  {  
     day: "Tuesday",
     location: "Hillsboro",
     hours: "5:00pm - 8:30pm",
     booth: "1F"
  },
  {  
     day: "Wednesday",
     location: "Shemanski Park",
     hours: "10:00am - 2:00pm",
     booth: "3E"
  },
  {  
     day: "Thursday",
     location: "Northwest Portland",
     hours: "2:00pm - 6:00pm",
     booth: "6D"
  },
  {  
    day: "Friday",
    location: "Closed",
    hours: "Closed",
    booth: "N/A"
 },
  {  
     day: "Saturday",
     location: "Beaverton",
     hours: "10:00am - 1:30pm",
     booth: "9G"
  }
 ];
 
const Location = () => (
  <div className="location-container">
    <Tabs defaultActiveKey="0" onChange={callback}>

      {marketSchedule.map((place,index) => 
      
        <TabPane tab={place.day} key={index}>
        
          <LocationInfo 
          location={place.location}
          hours={place.hours}
          booth= {place.booth}
          />
         
        </TabPane>
        )
      };

    </Tabs>
  </div>
  );

  
  export default Location;