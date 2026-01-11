// resources/js/Components/Assignments/CalendarView.jsx
import { useState, useEffect } from 'react';

export default function CalendarView() {
    const [currentMonth, setCurrentMonth] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [assignmentsByDate, setAssignmentsByDate] = useState({});

    useEffect(() => {
        // Sample assignments data
        const assignments = {
            '2023-12-05': [
                { id: 1, title: 'Soal Matematika', subject: 'Matematika', time: '23:59', status: 'overdue' }
            ],
            '2023-12-08': [
                { id: 2, title: 'Analisis Novel', subject: 'Bahasa Indonesia', time: '23:59', status: 'completed' }
            ],
            '2023-12-10': [
                { id: 3, title: 'Laporan Fisika', subject: 'Fisika', time: '23:59', status: 'completed' }
            ],
            '2023-12-15': [
                { id: 4, title: 'Essay Sejarah', subject: 'Sejarah', time: '23:59', status: 'inProgress' }
            ],
            '2023-12-20': [
                { id: 5, title: 'Presentasi Biologi', subject: 'Biologi', time: '10:00', status: 'notStarted' }
            ],
            '2023-12-22': [
                { id: 6, title: 'Tugas Kimia', subject: 'Kimia', time: '23:59', status: 'notStarted' }
            ],
            '2023-12-25': [
                { id: 7, title: 'Ujian Bahasa Inggris', subject: 'Bahasa Inggris', time: '08:00', status: 'notStarted' }
            ]
        };
        setAssignmentsByDate(assignments);
    }, []);

    const getDaysInMonth = (date) => {
        const year = date.getFullYear();
        const month = date.getMonth();
        const firstDay = new Date(year, month, 1);
        const lastDay = new Date(year, month + 1, 0);
        const daysInMonth = lastDay.getDate();

        return {
            firstDay,
            lastDay,
            daysInMonth,
            startingDay: firstDay.getDay() // 0 = Sunday, 1 = Monday, etc.
        };
    };

    const navigateMonth = (direction) => {
        const newMonth = new Date(currentMonth);
        newMonth.setMonth(newMonth.getMonth() + direction);
        setCurrentMonth(newMonth);
    };

    const formatDate = (date) => {
        return date.toISOString().split('T')[0];
    };

    const getStatusColor = (status) => {
        const colors = {
            completed: 'bg-green-100 text-green-700',
            inProgress: 'bg-blue-100 text-blue-700',
            notStarted: 'bg-gray-100 text-gray-700',
            overdue: 'bg-red-100 text-red-700'
        };
        return colors[status] || 'bg-gray-100 text-gray-700';
    };

    const getStatusIcon = (status) => {
        const icons = {
            completed: 'fas fa-check-circle',
            inProgress: 'fas fa-spinner',
            notStarted: 'fas fa-clock',
            overdue: 'fas fa-exclamation-triangle'
        };
        return icons[status] || 'fas fa-clock';
    };

    const renderCalendar = () => {
        const { daysInMonth, startingDay } = getDaysInMonth(currentMonth);
        const days = [];

        // Empty cells for starting day
        for (let i = 0; i < startingDay; i++) {
            days.push(<div key={`empty-${i}`} className="h-24"></div>);
        }

        // Days of the month
        for (let day = 1; day <= daysInMonth; day++) {
            const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
            const dateString = formatDate(date);
            const assignments = assignmentsByDate[dateString] || [];
            const isToday = formatDate(new Date()) === dateString;
            const isSelected = formatDate(selectedDate) === dateString;

            days.push(
                <div
                    key={day}
                    className={`h-24 border border-neutral-200 p-2 cursor-pointer hover:bg-neutral-50 ${isToday ? 'bg-blue-50 border-blue-300' : ''
                        } ${isSelected ? 'bg-primary/10 border-primary' : ''}`}
                    onClick={() => setSelectedDate(date)}
                >
                    <div className="flex justify-between items-start mb-1">
                        <span className={`text-sm font-medium ${isToday ? 'text-blue-600' :
                                isSelected ? 'text-primary' :
                                    'text-neutral-900'
                            }`}>
                            {day}
                        </span>
                        {assignments.length > 0 && (
                            <span className="text-xs px-1.5 py-0.5 rounded-full bg-primary text-white">
                                {assignments.length}
                            </span>
                        )}
                    </div>

                    {/* Assignments for this day */}
                    <div className="space-y-1 max-h-20 overflow-y-auto">
                        {assignments.slice(0, 2).map((assignment, index) => (
                            <div
                                key={index}
                                className={`text-xs px-2 py-1 rounded truncate ${getStatusColor(assignment.status)}`}
                                title={`${assignment.title} (${assignment.time})`}
                            >
                                <i className={`${getStatusIcon(assignment.status)} mr-1`}></i>
                                {assignment.subject}
                            </div>
                        ))}
                        {assignments.length > 2 && (
                            <div className="text-xs text-neutral-500 text-center">
                                +{assignments.length - 2} lainnya
                            </div>
                        )}
                    </div>
                </div>
            );
        }

        return days;
    };

    const getDayName = (index) => {
        const days = ['Min', 'Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab'];
        return days[index];
    };

    const selectedDateAssignments = assignmentsByDate[formatDate(selectedDate)] || [];

    return (
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-neutral-200">
            <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-bold text-neutral-900">Kalender Tugas</h3>
                <div className="flex items-center space-x-2">
                    <button
                        onClick={() => navigateMonth(-1)}
                        className="p-2 rounded-lg hover:bg-neutral-100"
                    >
                        <i className="fas fa-chevron-left"></i>
                    </button>
                    <span className="font-medium text-neutral-900">
                        {currentMonth.toLocaleDateString('id-ID', { month: 'long', year: 'numeric' })}
                    </span>
                    <button
                        onClick={() => navigateMonth(1)}
                        className="p-2 rounded-lg hover:bg-neutral-100"
                    >
                        <i className="fas fa-chevron-right"></i>
                    </button>
                </div>
            </div>

            {/* Day Names */}
            <div className="grid grid-cols-7 gap-1 mb-2">
                {[...Array(7)].map((_, i) => (
                    <div key={i} className="text-center text-sm font-medium text-neutral-600">
                        {getDayName(i)}
                    </div>
                ))}
            </div>

            {/* Calendar Grid */}
            <div className="grid grid-cols-7 gap-1 border border-neutral-200 rounded-lg overflow-hidden">
                {renderCalendar()}
            </div>

            {/* Selected Date Details */}
            <div className="mt-6 pt-6 border-t border-neutral-200">
                <h4 className="font-medium text-neutral-900 mb-4">
                    Tugas untuk {selectedDate.toLocaleDateString('id-ID', {
                        weekday: 'long',
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric'
                    })}
                </h4>

                {selectedDateAssignments.length > 0 ? (
                    <div className="space-y-3">
                        {selectedDateAssignments.map((assignment) => (
                            <div
                                key={assignment.id}
                                className="p-3 border border-neutral-200 rounded-lg hover:bg-neutral-50"
                            >
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center">
                                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center mr-3 ${getStatusColor(assignment.status)}`}>
                                            <i className={getStatusIcon(assignment.status)}></i>
                                        </div>
                                        <div>
                                            <h5 className="font-medium text-neutral-900">{assignment.title}</h5>
                                            <p className="text-sm text-neutral-600">{assignment.subject} • {assignment.time}</p>
                                        </div>
                                    </div>
                                    <span className={`px-2 py-1 rounded-md text-xs font-medium ${getStatusColor(assignment.status)}`}>
                                        {assignment.status === 'completed' ? 'Selesai' :
                                            assignment.status === 'inProgress' ? 'Dalam Proses' :
                                                assignment.status === 'overdue' ? 'Terlambat' :
                                                    'Belum Dimulai'}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-6">
                        <i className="fas fa-calendar-check text-3xl text-neutral-300 mb-3"></i>
                        <p className="text-neutral-600">Tidak ada tugas untuk hari ini</p>
                    </div>
                )}
            </div>

            {/* Quick Actions */}
            <div className="mt-6 pt-6 border-t border-neutral-200">
                <div className="flex space-x-2">
                    <button className="flex-1 px-3 py-2 border border-neutral-300 rounded-lg hover:bg-neutral-50 text-sm">
                        <i className="fas fa-calendar-plus mr-1"></i>
                        Tambah Deadline
                    </button>
                    <button className="flex-1 px-3 py-2 border border-neutral-300 rounded-lg hover:bg-neutral-50 text-sm">
                        <i className="fas fa-sync-alt mr-1"></i>
                        Sync Kalender
                    </button>
                </div>
            </div>
        </div>
    );
}