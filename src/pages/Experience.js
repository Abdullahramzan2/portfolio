import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import SchoolIcon from '@material-ui/icons/School';
import WorkIcon from '@material-ui/icons/Work';

const Experience = () => {
  return (
    <div className='experience'>
      <VerticalTimeline lineColor='#3e497a'>
        <VerticalTimelineElement 
        className='vertical-timeline-element--education' 
        date='2020'
        iconStyle={{background:"#3e497a", color:"#fff"}}
        icon={<SchoolIcon />}
        >
          <h3 className='vertical-timeline-element-title'>
          Completed College From Punjab Group of Colleges.
          </h3>
          <p>FSC pre Engineering Student</p>
          </VerticalTimelineElement>

        <VerticalTimelineElement 
        className='vertical-timeline-element--education' 
        date='2020-2024'
        iconStyle={{background:"#3e497a", color:"#fff"}}
        icon={<SchoolIcon />}
        >
          <h3 className='vertical-timeline-element-title'>
          University of Engineering and Technology, Main Campus, Lahore, Pakistan.
          </h3>
          <p className='vertical-timeline-element-subtitle'>
            Currently Learning Python
          </p>
          <p>Business and IT Student</p>
          </VerticalTimelineElement>

          
        <VerticalTimelineElement 
        className='vertical-timeline-element--education' 
        date='2022'
        iconStyle={{background:"#e9d35b", color:"#fff"}}
        icon={<WorkIcon />}
        >
          <h3 className='vertical-timeline-element-title'>
            Bid Specialist
          </h3>
          <p>Doing Internship at Growth Hacking Solutions</p>
          </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  )
}

export default Experience
