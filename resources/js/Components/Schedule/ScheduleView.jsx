import { useState, useEffect } from 'react';
import { FaCalendar, FaChevronLeft, FaChevronRight, FaClock, FaDoorOpen, FaUserTie, FaCalendarTimes } from 'react-icons/fa';

export default function ScheduleView({ user, schedules: schedulesFromServer }) {
    const [viewMode, setViewMode] = useState('weekly');
    const [selectedDay, setSelectedDay] = useState('monday');
    const [currentDate, setCurrentDate] = useState(new Date());
    const [scheduleData, setScheduleData] = useState({});


    // Mapping hari Indonesia ke Inggris
    const dayMapping = {
        'senin': 'monday',
        'selasa': 'tuesday',
        'rabu': 'wednesday',
        'kamis': 'thursday',
        'jumat': 'friday',
        'sabtu': 'saturday',
        'minggu': 'sunday'
    };

    const reverseDayMapping = {
        'monday': 'Senin',
        'tuesday': 'Selasa',
        'wednesday': 'Rabu',
        'thursday': 'Kamis',
        'friday': 'Jumat',
        'saturday': 'Sabtu',
        'sunday': 'Minggu'
    };

    const days = [
        { id: 'monday', name: 'Senin', date: getDateForDay('senin') },
        { id: 'tuesday', name: 'Selasa', date: getDateForDay('selasa') },
        { id: 'wednesday', name: 'Rabu', date: getDateForDay('rabu') },
        { id: 'thursday', name: 'Kamis', date: getDateForDay('kamis') },
        { id: 'friday', name: 'Jumat', date: getDateForDay('jumat') },
        { id: 'saturday', name: 'Sabtu', date: getDateForDay('sabtu') }
    ];

    // Fungsi untuk mendapatkan tanggal berdasarkan hari
    function getDateForDay(dayName) {
        const daysOfWeek = ['minggu', 'senin', 'selasa', 'rabu', 'kamis', 'jumat', 'sabtu'];
        const today = new Date();
        const dayIndex = daysOfWeek.indexOf(dayName);
        
        if (dayIndex === -1) return '';
        
        const targetDate = new Date(today);
        const currentDayIndex = today.getDay();
        const diff = dayIndex - currentDayIndex;
        targetDate.setDate(today.getDate() + diff);
        
        return targetDate.toLocaleDateString('id-ID', { day: 'numeric', month: 'short' });
    }

    // Format data dari server ke format yang bisa digunakan
    useEffect(() => {
        if (schedulesFromServer && schedulesFromServer.length > 0) {
            const formattedSchedules = formatSchedules(schedulesFromServer);
            setScheduleData(formattedSchedules);
            
            // Set hari ini sebagai selected day
            const today = new Date();
            const dayNames = ['minggu', 'senin', 'selasa', 'rabu', 'kamis', 'jumat', 'sabtu'];
            const todayId = dayMapping[dayNames[today.getDay()]] || 'monday';
            setSelectedDay(todayId);
        } else {
            console.log('No schedules data available');
        }
    }, [schedulesFromServer]);

    const formatSchedules = (serverSchedules) => {
        const formatted = {
            monday: [],
            tuesday: [],
            wednesday: [],
            thursday: [],
            friday: [],
            saturday: []
        };


        serverSchedules.forEach(schedule => {
            // Data dari server sudah dalam format Inggris ('monday')
            const day = schedule.day_of_week.toLowerCase();
            // console.log(`Processing schedule for day: ${day}`, schedule);
            
            // Langsung gunakan day karena sudah format Inggris
            if (formatted[day]) {
                const startTime = schedule.start_time;
                const endTime = schedule.end_time;
                const timeRange = `${startTime.substring(0, 5)} - ${endTime.substring(0, 5)}`;
                
                const scheduleItem = {
                    time: timeRange,
                    subject: schedule.subject?.name || 'Mata Pelajaran',
                    teacher: schedule.teacher?.full_name || 'Guru',
                    room: `Kelas ${schedule.class_room.grade_level + '-' + schedule.class_room.major + '-' + schedule.class_room.name || 'Kelas'}`,
                    type: schedule.subject?.name?.toLowerCase() || schedule.subject?.subject_code?.toLowerCase() || 'default',
                    start_time: startTime,
                    end_time: endTime,
                    startHour: parseInt(startTime.substring(0, 2)),
                    startMinute: parseInt(startTime.substring(3, 5)),
                    endHour: parseInt(endTime.substring(0, 2)),
                    endMinute: parseInt(endTime.substring(3, 5))
                };
                
                formatted[day].push(scheduleItem);
            } else {
                // console.log(`Day ${day} not found in formatted object`);
            }
        });

        // Sort schedules by start time
        Object.keys(formatted).forEach(day => {
            formatted[day].sort((a, b) => a.start_time.localeCompare(b.start_time));
            // console.log(`Schedules for ${day}:`, formatted[day]);
        });

        return formatted;
    };

    const getSubjectIcon = (type) => {
        // Map subject codes or names to icons
        const iconMap = {
            'biologi': 'fas fa-dna',
            'matematika': 'fas fa-calculator',
            'fisika': 'fas fa-atom',
            'kimia': 'fas fa-flask',
            'bahasa': 'fas fa-language',
            'sejarah': 'fas fa-landmark',
            'seni': 'fas fa-palette',
            'olahraga': 'fas fa-running',
            'pkn': 'fas fa-balance-scale',
            'agama': 'fas fa-mosque',
            'informatika': 'fas fa-laptop-code',
            'default': 'fas fa-book'
        };

        // Check if type contains any keyword
        const lowerType = type.toLowerCase();
        for (const [key, icon] of Object.entries(iconMap)) {
            if (lowerType.includes(key)) {
                return icon;
            }
        }

        return iconMap.default;
    };

    const getSubjectColor = (type) => {
        const colors = {
            'biologi': 'bg-green-100 text-green-700 border-green-200',
            'matematika': 'bg-blue-100 text-blue-700 border-blue-200',
            'fisika': 'bg-purple-100 text-purple-700 border-purple-200',
            'kimia': 'bg-pink-100 text-pink-700 border-pink-200',
            'bahasa': 'bg-red-100 text-red-700 border-red-200',
            'sejarah': 'bg-yellow-100 text-yellow-700 border-yellow-200',
            'seni': 'bg-indigo-100 text-indigo-700 border-indigo-200',
            'olahraga': 'bg-teal-100 text-teal-700 border-teal-200',
            'pkn': 'bg-orange-100 text-orange-700 border-orange-200',
            'agama': 'bg-cyan-100 text-cyan-700 border-cyan-200',
            'informatika': 'bg-gray-100 text-gray-700 border-gray-200',
            'default': 'bg-gray-100 text-gray-700 border-gray-200'
        };

        const lowerType = type.toLowerCase();
        for (const [key, color] of Object.entries(colors)) {
            if (lowerType.includes(key)) {
                return color;
            }
        }

        return colors.default;
    };

    const getDayName = (dayId) => {
        return reverseDayMapping[dayId] || 'Senin';
    };

    const formatDate = () => {
        const options = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
        return currentDate.toLocaleDateString('id-ID', options);
    };

    const handlePreviousDay = () => {
        const dayIndex = days.findIndex(d => d.id === selectedDay);
        if (dayIndex > 0) {
            setSelectedDay(days[dayIndex - 1].id);
        }
    };

    const handleNextDay = () => {
        const dayIndex = days.findIndex(d => d.id === selectedDay);
        if (dayIndex < days.length - 1) {
            setSelectedDay(days[dayIndex + 1].id);
        }
    };

    const handleToday = () => {
        const today = new Date().getDay();
        const dayMap = { 
            1: 'monday', 
            2: 'tuesday', 
            3: 'wednesday', 
            4: 'thursday', 
            5: 'friday', 
            6: 'saturday', 
            0: 'sunday' 
        };
        setSelectedDay(dayMap[today] || 'monday');
        setCurrentDate(new Date());
    };

    // Generate time slots from schedules
    const getAllTimeSlots = () => {
        const allTimes = new Set();
        
        // Tambahkan semua jam dari 7 pagi sampai 4 sore
        for (let i = 7; i <= 16; i++) {
            allTimes.add(i);
        }
        
        return Array.from(allTimes).sort((a, b) => a - b);
    };

    const timeSlots = getAllTimeSlots();
    const currentSchedule = scheduleData[selectedDay] || [];

    return (
        <div className="bg-white rounded-2xl shadow-sm border border-neutral-200 overflow-hidden">
            {/* View Mode Tabs - Only Weekly */}
            <div className="border-b border-neutral-200">
                <div className="flex">
                    <button
                        className={`px-6 py-4 font-medium ${viewMode === 'weekly' ? 'text-primary border-b-2 border-primary' : 'text-neutral-600 hover:text-neutral-900'}`}
                        onClick={() => setViewMode('weekly')}
                    >
                        Jadwal Mingguan
                    </button>
                </div>
            </div>

            {/* Weekly View */}
            {viewMode === 'weekly' && (
                <div className="p-6">
                    <div className="flex items-center justify-between mb-6">
                        <h3 className="text-xl font-bold text-neutral-900">Jadwal Pelajaran Mingguan</h3>
                        <div className="text-sm text-neutral-600">
                            Tahun Ajaran: {schedulesFromServer?.[0]?.academic_year?.year || '2025/2026'}
                        </div>
                    </div>
                    
                    {Object.keys(scheduleData).length > 0 ? (
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead>
                                    <tr className="bg-neutral-50">
                                        <th className="p-4 text-left font-medium border-r border-neutral-200 min-w-[100px]">
                                            Waktu
                                        </th>
                                        {days.map(day => (
                                            <th key={day.id} className="p-4 text-center font-medium border-r border-neutral-200 min-w-[150px]">
                                                {day.name}<br />
                                                <span className="text-sm font-normal text-neutral-500">{day.date}</span>
                                            </th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody>
                                    {timeSlots.map(hour => (
                                        <tr key={hour} className="border-t border-neutral-200">
                                            <td className="p-4 border-r border-neutral-200 font-medium align-top">
                                                {hour.toString().padStart(2, '0')}:00
                                            </td>
                                            {days.map(day => {
                                                const schedulesForDay = scheduleData[day.id] || [];
                                                const scheduleAtHour = schedulesForDay.find(s => {
                                                    const scheduleStartHour = s.startHour;
                                                    const scheduleEndHour = s.endHour;
                                                    return hour >= scheduleStartHour && hour <= scheduleEndHour;
                                                });
                                                // console.log(`Day: ${day.id}, Hour: ${hour}:00, Found schedule:`, scheduleAtHour);
                                                return (
                                                    <td key={`${day.id}-${hour}`} className="p-2 border-r border-neutral-200 align-top">
                                                        {scheduleAtHour ? (
                                                            <div className={`p-3 rounded-lg border ${getSubjectColor(scheduleAtHour.type)}`}>
                                                                <div className="font-medium text-sm mb-1">
                                                                    {scheduleAtHour.subject}
                                                                </div>
                                                                <div className="text-xs opacity-75 mb-1">
                                                                    {scheduleAtHour.teacher}
                                                                </div>
                                                                <div className="text-xs opacity-60 mb-1">
                                                                    {scheduleAtHour.time}
                                                                </div>
                                                                <div className="text-xs opacity-60">
                                                                    {scheduleAtHour.room}
                                                                </div>
                                                            </div>
                                                        ) : (
                                                            <div className="h-16"></div>
                                                        )}
                                                    </td>
                                                );
                                            })}
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    ) : (
                        <div className="text-center py-12">
                            <FaCalendarTimes className="text-4xl text-neutral-300 mb-4 mx-auto" />
                            <h3 className="text-lg font-medium mb-2">Tidak ada jadwal</h3>
                            <p className="text-neutral-600">Belum ada jadwal pelajaran untuk minggu ini.</p>
                        </div>
                    )}
                </div>
            )}

            {/* Summary */}
            {Object.keys(scheduleData).length > 0 && (
                <div className="border-t border-neutral-200 p-6">
                    <h4 className="font-medium text-neutral-900 mb-4">Ringkasan Jadwal Mingguan</h4>
                    <div className="grid grid-cols-4 gap-4">
                        {days.map(day => {
                            const daySchedules = scheduleData[day.id] || [];
                            return (
                                <div key={day.id} className="p-4 bg-gray-50 rounded-xl">
                                    <div className="text-lg font-bold text-gray-700 mb-1">
                                        {daySchedules.length}
                                    </div>
                                    <div className="text-sm text-gray-600">Jam {day.name}</div>
                                </div>
                            );
                        })}
                        <div className="p-4 bg-primary/10 rounded-xl">
                            <div className="text-lg font-bold text-primary mb-1">
                                {Object.values(scheduleData).reduce((total, day) => total + day.length, 0)}
                            </div>
                            <div className="text-sm text-primary">Total Jam Minggu Ini</div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}