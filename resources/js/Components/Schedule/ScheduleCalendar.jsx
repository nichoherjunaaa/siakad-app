// resources/js/Components/Schedule/ScheduleCalendar.jsx
import { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export default function ScheduleCalendar() {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [events, setEvents] = useState([]);

    // Generate calendar data
    const getCalendarData = () => {
        const year = currentDate.getFullYear();
        const month = currentDate.getMonth();
        
        const firstDay = new Date(year, month, 1);
        const lastDay = new Date(year, month + 1, 0);
        const daysInMonth = lastDay.getDate();
        
        const startDay = firstDay.getDay();
        
        const days = [];
        
        // Previous month days
        const prevMonthLastDay = new Date(year, month, 0).getDate();
        for (let i = startDay - 1; i >= 0; i--) {
            days.push({
                date: new Date(year, month - 1, prevMonthLastDay - i),
                isCurrentMonth: false,
                events: []
            });
        }
        
        // Current month days
        for (let i = 1; i <= daysInMonth; i++) {
            const date = new Date(year, month, i);
            const dayEvents = getEventsForDate(date);
            days.push({
                date,
                isCurrentMonth: true,
                events: dayEvents,
                isToday: isToday(date),
                isSelected: isSameDay(date, selectedDate)
            });
        }
        
        // Next month days
        const totalCells = 42; // 6 weeks
        const remainingCells = totalCells - days.length;
        for (let i = 1; i <= remainingCells; i++) {
            days.push({
                date: new Date(year, month + 1, i),
                isCurrentMonth: false,
                events: []
            });
        }
        
        return days;
    };

    const getEventsForDate = (date) => {
        // Sample events data
        const sampleEvents = [
            { date: new Date(2024, 2, 11), title: 'Ujian Matematika', type: 'exam' },
            { date: new Date(2024, 2, 12), title: 'Kegiatan OSIS', type: 'activity' },
            { date: new Date(2024, 2, 15), title: 'Pembayaran SPP', type: 'payment' },
            { date: new Date(2024, 2, 18), title: 'Ujian Fisika', type: 'exam' },
            { date: new Date(2024, 2, 20), title: 'Parent-Teacher Meeting', type: 'meeting' },
            { date: new Date(2024, 2, 25), title: 'Libur Semester', type: 'holiday' }
        ];

        return sampleEvents.filter(event => isSameDay(event.date, date));
    };

    const isSameDay = (date1, date2) => {
        return date1.getDate() === date2.getDate() &&
               date1.getMonth() === date2.getMonth() &&
               date1.getFullYear() === date2.getFullYear();
    };

    const isToday = (date) => {
        const today = new Date();
        return isSameDay(date, today);
    };

    const handlePrevMonth = () => {
        setCurrentDate(prev => new Date(prev.getFullYear(), prev.getMonth() - 1, 1));
    };

    const handleNextMonth = () => {
        setCurrentDate(prev => new Date(prev.getFullYear(), prev.getMonth() + 1, 1));
    };

    const handleToday = () => {
        const today = new Date();
        setCurrentDate(today);
        setSelectedDate(today);
    };

    const handleDateSelect = (date) => {
        setSelectedDate(date);
    };

    const getEventColor = (type) => {
        switch(type) {
            case 'exam': return 'bg-red-100 text-red-700';
            case 'activity': return 'bg-blue-100 text-blue-700';
            case 'payment': return 'bg-green-100 text-green-700';
            case 'meeting': return 'bg-purple-100 text-purple-700';
            case 'holiday': return 'bg-orange-100 text-orange-700';
            default: return 'bg-gray-100 text-gray-700';
        }
    };

    const monthNames = [
        'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
        'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'
    ];

    const dayNames = ['M', 'S', 'S', 'R', 'K', 'J', 'S'];

    const calendarData = getCalendarData();

    return (
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-neutral-200">
            <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-bold text-neutral-900">Kalender Akademik</h3>
                <div className="flex items-center space-x-2">
                    <button
                        onClick={handlePrevMonth}
                        className="p-2 rounded-lg hover:bg-neutral-100"
                    >
                        <FaChevronLeft/>
                    </button>
                    <button
                        onClick={handleToday}
                        className="px-3 py-1 text-sm bg-primary text-white rounded-lg hover:bg-primary-dark"
                    >
                        Hari Ini
                    </button>
                    <button
                        onClick={handleNextMonth}
                        className="p-2 rounded-lg hover:bg-neutral-100"
                    >
                        <FaChevronRight/>
                    </button>
                </div>
            </div>

            {/* Month Header */}
            <div className="text-center mb-4">
                <h4 className="text-xl font-bold text-neutral-900">
                    {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
                </h4>
            </div>

            {/* Day Names */}
            <div className="grid grid-cols-7 gap-1 mb-2">
                {dayNames.map((day, index) => (
                    <div key={index} className="text-center font-medium text-neutral-600 text-sm py-2">
                        {day}
                    </div>
                ))}
            </div>

            {/* Calendar Grid */}
            <div className="grid grid-cols-7 gap-1">
                {calendarData.map((day, index) => (
                    <button
                        key={index}
                        onClick={() => day.isCurrentMonth && handleDateSelect(day.date)}
                        className={`
                            min-h-24 p-2 border rounded-lg text-left transition-colors
                            ${!day.isCurrentMonth ? 'text-neutral-300' : 'text-neutral-700'}
                            ${day.isToday ? 'border-primary bg-primary/5' : 'border-neutral-200'}
                            ${day.isSelected ? 'bg-primary text-white' : 'hover:bg-neutral-50'}
                            ${day.events.length > 0 ? 'relative' : ''}
                        `}
                    >
                        <div className={`
                            font-medium text-sm mb-1
                            ${day.isSelected ? 'text-white' : ''}
                            ${day.isToday && !day.isSelected ? 'text-primary' : ''}
                        `}>
                            {day.date.getDate()}
                        </div>
                        
                        {/* Events */}
                        <div className="space-y-1">
                            {day.events.slice(0, 2).map((event, eventIndex) => (
                                <div
                                    key={eventIndex}
                                    className={`
                                        text-xs px-1 py-0.5 rounded truncate
                                        ${day.isSelected ? 'bg-white/20' : getEventColor(event.type)}
                                    `}
                                >
                                    {event.title}
                                </div>
                            ))}
                            {day.events.length > 2 && (
                                <div className="text-xs text-neutral-500">
                                    +{day.events.length - 2} lainnya
                                </div>
                            )}
                        </div>
                    </button>
                ))}
            </div>

            {/* Event Legend */}
            <div className="mt-6 pt-6 border-t border-neutral-200">
                <h5 className="font-medium text-neutral-900 mb-3">Keterangan Acara</h5>
                <div className="flex flex-wrap gap-2">
                    <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-red-100 rounded-sm"></div>
                        <span className="text-xs text-neutral-600">Ujian</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-blue-100 rounded-sm"></div>
                        <span className="text-xs text-neutral-600">Kegiatan</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-green-100 rounded-sm"></div>
                        <span className="text-xs text-neutral-600">Pembayaran</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-purple-100 rounded-sm"></div>
                        <span className="text-xs text-neutral-600">Rapat</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-orange-100 rounded-sm"></div>
                        <span className="text-xs text-neutral-600">Libur</span>
                    </div>
                </div>
            </div>

            {/* Selected Date Events */}
            {events.length > 0 && (
                <div className="mt-6 pt-6 border-t border-neutral-200">
                    <h5 className="font-medium text-neutral-900 mb-3">
                        Acara pada {selectedDate.toLocaleDateString('id-ID', { weekday: 'long', day: 'numeric', month: 'long' })}
                    </h5>
                    <div className="space-y-2">
                        {getEventsForDate(selectedDate).map((event, index) => (
                            <div
                                key={index}
                                className={`p-3 rounded-lg ${getEventColor(event.type)}`}
                            >
                                <div className="font-medium">{event.title}</div>
                                <div className="text-sm opacity-75">
                                    {selectedDate.toLocaleDateString('id-ID', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}