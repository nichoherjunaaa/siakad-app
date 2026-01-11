import { useState, useEffect } from 'react';
import { FaCalendar, FaChevronLeft, FaChevronRight, FaClock, FaDoorOpen, FaUserTie } from 'react-icons/fa';

export default function ScheduleView({ user }) {
    const [viewMode, setViewMode] = useState('weekly'); 
    const [selectedDay, setSelectedDay] = useState('monday');
    const [currentDate, setCurrentDate] = useState(new Date());

    // Sample schedule data
    const scheduleData = {
        monday: [
            { time: "07:00 - 07:45", subject: "Upacara", teacher: "Pak Kepala Sekolah", room: "Lapangan", type: "upacara" },
            { time: "07:45 - 08:30", subject: "Matematika", teacher: "Bu Sari, S.Pd.", room: "Ruang 201", type: "matematika" },
            { time: "08:30 - 09:15", subject: "Fisika", teacher: "Pak Budi, M.Pd.", room: "Lab Fisika", type: "fisika" },
            { time: "09:15 - 10:00", subject: "Kimia", teacher: "Bu Lisa, S.Si.", room: "Lab Kimia", type: "kimia" },
            { time: "10:15 - 11:00", subject: "Bahasa Inggris", teacher: "Bu Maya, S.Pd.", room: "Ruang 202", type: "inggris" },
            { time: "11:00 - 11:45", subject: "Bahasa Indonesia", teacher: "Pak Anton, M.Pd.", room: "Ruang 203", type: "indonesia" },
            { time: "11:45 - 12:30", subject: "Sejarah", teacher: "Bu Dewi, S.Pd.", room: "Ruang 204", type: "sejarah" }
        ],
        tuesday: [
            { time: "07:00 - 07:45", subject: "Olahraga", teacher: "Pak Andi, S.Pd.", room: "Lapangan", type: "olahraga" },
            { time: "07:45 - 08:30", subject: "Biologi", teacher: "Bu Rina, M.Si.", room: "Lab Biologi", type: "biologi" },
            { time: "08:30 - 09:15", subject: "Matematika", teacher: "Bu Sari, S.Pd.", room: "Ruang 201", type: "matematika" },
            { time: "09:15 - 10:00", subject: "Informatika", teacher: "Pak Deni, S.Kom.", room: "Lab Komputer", type: "informatika" },
            { time: "10:15 - 11:00", subject: "Seni Budaya", teacher: "Bu Tari, S.Sn.", room: "Ruang Seni", type: "seni" },
            { time: "11:00 - 11:45", subject: "PKN", teacher: "Pak Joko, M.Pd.", room: "Ruang 205", type: "pkn" }
        ],
        wednesday: [
            { time: "07:00 - 07:45", subject: "Matematika", teacher: "Bu Sari, S.Pd.", room: "Ruang 201", type: "matematika" },
            { time: "07:45 - 08:30", subject: "Fisika", teacher: "Pak Budi, M.Pd.", room: "Lab Fisika", type: "fisika" },
            { time: "08:30 - 09:15", subject: "Ekstrakurikuler", teacher: "Pembina OSIS", room: "Aula", type: "ekstra" },
            { time: "09:15 - 10:00", subject: "Ekstrakurikuler", teacher: "Pembina OSIS", room: "Aula", type: "ekstra" }
        ],
        thursday: [
            { time: "07:00 - 07:45", subject: "Kimia", teacher: "Bu Lisa, S.Si.", room: "Lab Kimia", type: "kimia" },
            { time: "07:45 - 08:30", subject: "Bahasa Inggris", teacher: "Bu Maya, S.Pd.", room: "Ruang 202", type: "inggris" },
            { time: "08:30 - 09:15", subject: "Bahasa Indonesia", teacher: "Pak Anton, M.Pd.", room: "Ruang 203", type: "indonesia" },
            { time: "09:15 - 10:00", subject: "Sejarah", teacher: "Bu Dewi, S.Pd.", room: "Ruang 204", type: "sejarah" },
            { time: "10:15 - 11:00", subject: "Matematika", teacher: "Bu Sari, S.Pd.", room: "Ruang 201", type: "matematika" },
            { time: "11:00 - 11:45", subject: "Agama", teacher: "Pak Umar, S.Ag.", room: "Ruang 206", type: "agama" }
        ],
        friday: [
            { time: "07:00 - 07:45", subject: "Biologi", teacher: "Bu Rina, M.Si.", room: "Lab Biologi", type: "biologi" },
            { time: "07:45 - 08:30", subject: "Informatika", teacher: "Pak Deni, S.Kom.", room: "Lab Komputer", type: "informatika" },
            { time: "08:30 - 09:15", subject: "Seni Budaya", teacher: "Bu Tari, S.Sn.", room: "Ruang Seni", type: "seni" },
            { time: "09:15 - 10:00", subject: "PKN", teacher: "Pak Joko, M.Pd.", room: "Ruang 205", type: "pkn" },
            { time: "10:15 - 11:00", subject: "Konseling", teacher: "BP/BK", room: "Ruang BK", type: "konseling" }
        ],
        saturday: [
            { time: "07:00 - 08:30", subject: "Pramuka", teacher: "Pembina Pramuka", room: "Lapangan", type: "pramuka" },
            { time: "08:30 - 10:00", subject: "Kegiatan Projek", teacher: "Wali Kelas", room: "Ruang Kelas", type: "projek" }
        ]
    };

    const days = [
        { id: 'monday', name: 'Senin', date: '11 Mar' },
        { id: 'tuesday', name: 'Selasa', date: '12 Mar' },
        { id: 'wednesday', name: 'Rabu', date: '13 Mar' },
        { id: 'thursday', name: 'Kamis', date: '14 Mar' },
        { id: 'friday', name: 'Jumat', date: '15 Mar' },
        { id: 'saturday', name: 'Sabtu', date: '16 Mar' }
    ];

    const getDayName = (dayId) => {
        const day = days.find(d => d.id === dayId);
        return day ? day.name : 'Senin';
    };

    const getSubjectIcon = (type) => {
        const icons = {
            matematika: 'fas fa-calculator',
            fisika: 'fas fa-atom',
            kimia: 'fas fa-flask',
            biologi: 'fas fa-dna',
            inggris: 'fas fa-language',
            indonesia: 'fas fa-book',
            sejarah: 'fas fa-landmark',
            seni: 'fas fa-palette',
            olahraga: 'fas fa-running',
            pramuka: 'fas fa-campground',
            upacara: 'fas fa-flag',
            ekstra: 'fas fa-users',
            projek: 'fas fa-project-diagram',
            informatika: 'fas fa-laptop-code',
            pkn: 'fas fa-balance-scale',
            agama: 'fas fa-mosque',
            konseling: 'fas fa-comments'
        };
        return icons[type] || 'fas fa-book';
    };

    const getSubjectColor = (type) => {
        const colors = {
            matematika: 'bg-blue-100 text-blue-700 border-blue-200',
            fisika: 'bg-purple-100 text-purple-700 border-purple-200',
            kimia: 'bg-green-100 text-green-700 border-green-200',
            biologi: 'bg-yellow-100 text-yellow-700 border-yellow-200',
            inggris: 'bg-red-100 text-red-700 border-red-200',
            indonesia: 'bg-blue-100 text-blue-700 border-blue-200',
            sejarah: 'bg-purple-100 text-purple-700 border-purple-200',
            seni: 'bg-pink-100 text-pink-700 border-pink-200',
            olahraga: 'bg-green-100 text-green-700 border-green-200',
            default: 'bg-gray-100 text-gray-700 border-gray-200'
        };
        return colors[type] || colors.default;
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
        const dayMap = { 1: 'monday', 2: 'tuesday', 3: 'wednesday', 4: 'thursday', 5: 'friday', 6: 'saturday', 0: 'sunday' };
        setSelectedDay(dayMap[today] || 'monday');
        setCurrentDate(new Date());
    };

    const currentSchedule = scheduleData[selectedDay] || [];

    return (
        <div className="bg-white rounded-2xl shadow-sm border border-neutral-200 overflow-hidden">
            {/* View Mode Tabs */}
            <div className="border-b border-neutral-200">
                <div className="flex">
                    <button
                        className={`px-6 py-4 font-medium ${viewMode === 'daily' ? 'text-primary border-b-2 border-primary' : 'text-neutral-600 hover:text-neutral-900'}`}
                        onClick={() => setViewMode('daily')}
                    >
                        Harian
                    </button>
                    <button
                        className={`px-6 py-4 font-medium ${viewMode === 'weekly' ? 'text-primary border-b-2 border-primary' : 'text-neutral-600 hover:text-neutral-900'}`}
                        onClick={() => setViewMode('weekly')}
                    >
                        Mingguan
                    </button>
                    <button
                        className={`px-6 py-4 font-medium ${viewMode === 'monthly' ? 'text-primary border-b-2 border-primary' : 'text-neutral-600 hover:text-neutral-900'}`}
                        onClick={() => setViewMode('monthly')}
                    >
                        Bulanan
                    </button>
                </div>
            </div>

            {/* Daily View */}
            {viewMode === 'daily' && (
                <div className="p-6">
                    {/* Day Navigation */}
                    <div className="flex items-center justify-between mb-6">
                        <div>
                            <h3 className="text-xl font-bold text-neutral-900 mb-1">
                                {getDayName(selectedDay)}, {formatDate()}
                            </h3>
                            <p className="text-neutral-600">
                                {currentSchedule.length} mata pelajaran • Total {currentSchedule.length} jam pelajaran
                            </p>
                        </div>
                        <div className="flex items-center space-x-2">
                            <button
                                onClick={handlePreviousDay}
                                className="p-2 rounded-lg hover:bg-neutral-100"
                            >
                                <FaChevronLeft/>
                            </button>
                            <button
                                onClick={handleToday}
                                className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark"
                            >
                                Hari Ini
                            </button>
                            <button
                                onClick={handleNextDay}
                                className="p-2 rounded-lg hover:bg-neutral-100"
                            >
                                <FaChevronRight/>
                            </button>
                        </div>
                    </div>

                    {/* Day Selector */}
                    <div className="flex space-x-2 mb-6 overflow-x-auto pb-2">
                        {days.map((day) => (
                            <button
                                key={day.id}
                                onClick={() => setSelectedDay(day.id)}
                                className={`px-4 py-3 rounded-xl border flex-shrink-0 ${selectedDay === day.id
                                    ? 'bg-primary text-white border-primary'
                                    : 'border-neutral-300 hover:bg-neutral-50'
                                    }`}
                            >
                                <div className="font-medium">{day.name}</div>
                                <div className="text-sm opacity-80">{day.date}</div>
                            </button>
                        ))}
                    </div>

                    {/* Schedule List */}
                    <div className="space-y-3">
                        {currentSchedule.length > 0 ? (
                            currentSchedule.map((item, index) => {
                                const subjectColor = getSubjectColor(item.type);
                                const isCurrent = checkIfCurrentTime(item.time);

                                return (
                                    <div
                                        key={index}
                                        className={`flex items-center p-4 rounded-xl border ${isCurrent ? 'border-primary bg-primary/5' : 'border-neutral-200'} hover:bg-neutral-50 transition-colors`}
                                    >
                                        <div className={`w-12 h-12 rounded-lg flex items-center justify-center mr-4 ${subjectColor}`}>
                                            <i className={getSubjectIcon(item.type)}></i>
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex items-center justify-between mb-1">
                                                <h4 className="font-medium text-lg">{item.subject}</h4>
                                                {isCurrent && (
                                                    <span className="text-xs px-2 py-1 rounded-full bg-primary text-white">
                                                        Sedang Berlangsung
                                                    </span>
                                                )}
                                            </div>
                                            <div className="flex flex-wrap gap-3 text-sm text-neutral-600">
                                                <span className="flex items-center">
                                                    <FaUserTie/>
                                                    {item.teacher}
                                                </span>
                                                <span className="flex items-center">
                                                    <FaDoorOpen className="mr-1"/>
                                                    {item.room}
                                                </span>
                                                <span className="flex items-center">
                                                    <FaClock className='mr-1'/>
                                                    {item.time}
                                                </span>
                                            </div>
                                        </div>
                                        <button className="ml-4 p-2 rounded-lg hover:bg-neutral-100">
                                            <FaChevronRight/>
                                        </button>
                                    </div>
                                );
                            })
                        ) : (
                            <div className="text-center py-12">
                                <FaCalendarTimes className="text-4xl text-neutral-300 mb-4 mx-auto"/>
                                <h3 className="text-lg font-medium mb-2">Tidak ada jadwal</h3>
                                <p className="text-neutral-600">Tidak ada jadwal pelajaran untuk hari ini.</p>
                            </div>
                        )}
                    </div>
                </div>
            )}

            {/* Weekly View */}
            {viewMode === 'weekly' && (
                <div className="p-6">
                    <h3 className="text-xl font-bold text-neutral-900 mb-6">Jadwal Mingguan</h3>
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="bg-neutral-50">
                                    <th className="p-4 text-left font-medium border-r border-neutral-200">Waktu</th>
                                    {days.map(day => (
                                        <th key={day.id} className="p-4 text-center font-medium border-r border-neutral-200">
                                            {day.name}<br />
                                            <span className="text-sm font-normal text-neutral-500">{day.date}</span>
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {['07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00'].map(time => (
                                    <tr key={time} className="border-t border-neutral-200">
                                        <td className="p-4 border-r border-neutral-200 font-medium">{time}</td>
                                        {days.map(day => {
                                            const schedule = scheduleData[day.id];
                                            const scheduleAtTime = schedule ? schedule.find(s => {
                                                const startHour = parseInt(s.time.split(':')[0]);
                                                return startHour === parseInt(time);
                                            }) : null;

                                            return (
                                                <td key={`${day.id}-${time}`} className="p-2 border-r border-neutral-200">
                                                    {scheduleAtTime ? (
                                                        <div className={`p-3 rounded-lg border ${getSubjectColor(scheduleAtTime.type)}`}>
                                                            <div className="font-medium text-sm">{scheduleAtTime.subject}</div>
                                                            <div className="text-xs opacity-75">{scheduleAtTime.teacher}</div>
                                                            <div className="text-xs opacity-60">{scheduleAtTime.room}</div>
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
                </div>
            )}

            {/* Monthly View */}
            {viewMode === 'monthly' && (
                <div className="p-6">
                    <h3 className="text-xl font-bold text-neutral-900 mb-6">Kalender Akademik</h3>
                    <div className="text-center py-12">
                        <FaCalendar className="text-4xl text-neutral-300 mb-4 mx-auto" />
                        <h3 className="text-lg font-medium mb-2">Tampilan Bulanan</h3>
                        <p className="text-neutral-600 mb-4">Fitur tampilan bulanan akan segera hadir.</p>
                        <button className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark">
                            Lihat Kalender Akademik
                        </button>
                    </div>
                </div>
            )}

            {/* Schedule Summary */}
            {viewMode === 'daily' && currentSchedule.length > 0 && (
                <div className="border-t border-neutral-200 p-6">
                    <h4 className="font-medium text-neutral-900 mb-4">Ringkasan Hari Ini</h4>
                    <div className="grid grid-cols-3 gap-4">
                        <div className="p-4 bg-blue-50 rounded-xl">
                            <div className="text-2xl font-bold text-blue-700 mb-1">{currentSchedule.length}</div>
                            <div className="text-sm text-neutral-600">Total Jam</div>
                        </div>
                        <div className="p-4 bg-green-50 rounded-xl">
                            <div className="text-2xl font-bold text-green-700 mb-1">
                                {[...new Set(currentSchedule.map(s => s.subject))].length}
                            </div>
                            <div className="text-sm text-neutral-600">Mata Pelajaran</div>
                        </div>
                        <div className="p-4 bg-purple-50 rounded-xl">
                            <div className="text-2xl font-bold text-purple-700 mb-1">
                                {[...new Set(currentSchedule.map(s => s.teacher))].length}
                            </div>
                            <div className="text-sm text-neutral-600">Guru Pengajar</div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

// Helper function to check if current time is within schedule time
function checkIfCurrentTime(timeRange) {
    const [start, end] = timeRange.split(' - ');
    const now = new Date();
    const currentTime = now.getHours() * 60 + now.getMinutes();

    const parseTime = (timeStr) => {
        const [hours, minutes] = timeStr.split(':').map(Number);
        return hours * 60 + minutes;
    };

    const startTime = parseTime(start);
    const endTime = parseTime(end);

    return currentTime >= startTime && currentTime <= endTime;
}