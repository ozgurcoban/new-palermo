import React from 'react';
import styled from 'styled-components';
import { FaDoorOpen } from 'react-icons/fa';

const OpeningHoursSection = () => {
  const days = [
    'Måndag',
    'Tisdag',
    'Onsdag',
    'Torsdag',
    'Fredag',
    'Lördag',
    'Söndag',
  ];

  const hours = [
    '11.00 - 01.00',
    '11.00 - 03.00',
    '11.00 - 03.00',
    '11.00 - 03.00',
    '11.00 - 03.00',
    '11.00 - 03.00',
    '12.00 - 01.00',
  ];

  const currentDay = new Date().getDay();
  const adjustedCurrentDay = currentDay === 0 ? 6 : currentDay - 1;
  return (
    <HoursSection>
      <h3>Öppettider</h3>
      {days.map((day, index) => (
        <Day key={day} isCurrentDay={adjustedCurrentDay === index}>
          {adjustedCurrentDay === index && (
            <FaDoorOpen
              style={{
                position: 'absolute',
                left: '5px',
                fontSize: '1.4rem',
                color: '#907963',
              }}
            />
          )}
          <DayName isCurrentDay={adjustedCurrentDay === index}>{day}</DayName>
          <OpeningHours isCurrentDay={adjustedCurrentDay === index}>
            {hours[index]}
          </OpeningHours>
        </Day>
      ))}
    </HoursSection>
  );
};

const HoursSection = styled.section`
  padding: 2em;
  position: relative;
`;

const Day = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: clamp(1rem, 1.5vw, 1.2rem);
  margin-bottom: 0.5em;
`;

const DayName = styled.span`
  font-weight: ${props => (props.isCurrentDay ? '700' : '400')};
  color: ${props => (props.isCurrentDay ? '#C6A883' : '#555255')};
`;

const OpeningHours = styled.span`
  font-weight: ${props => (props.isCurrentDay ? '700' : '400')};
  color: ${props => (props.isCurrentDay ? '#C6A883' : '#555255')};
`;

export default OpeningHoursSection;
