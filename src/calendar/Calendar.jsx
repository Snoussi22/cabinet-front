import React , {Component} from 'react'
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import interactionPlugin from "@fullcalendar/interaction" // needed for dayClick


export default class Calendar extends Component{
    render() {
        return (
                
            <div>
                <h1>Appointments</h1>
            <FullCalendar
            plugins={[ dayGridPlugin, interactionPlugin ]}
            initialView="dayGridMonth"
            weekends={true}
            events={[
              { title: 'event 1', date: '2021-08-01' },
              { title: 'event 5', date: '2021-08-03' },
              { title: 'event 2', date: '2021-08-02' },
              { title: 'event 2', date: '2021-08-02' }
            ]}
            dateClick={this.handleDateClick}

          />
          </div>
        )
      }
      handleDateClick = (arg) => { // bind with an arrow function
        alert(arg.dateStr)
      }
    }
    
    function renderEventContent(eventInfo) {
      return (
        <>
          <b>{eventInfo.timeText}</b>
          <i>{eventInfo.event.title}</i>
        </>
      )
    }