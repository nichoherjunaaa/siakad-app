// resources/js/Components/Classes/ClassCards.jsx
import { useState } from 'react';

export default function ClassCards() {
    const [classes] = useState([
        {
            id: 1,
            code: 'MATH-XII',
            name: 'Matematika',
            teacher: {
                name: 'Bu Sari, S.Pd.',
                avatar: null,
                rating: 4.8
            },
            schedule: [
                { day: 'Senin', time: '07:30 - 09:00' },
                { day: 'Rabu', time: '10:30 - 12:00' }
            ],
            room: 'LAB-301',
            type: 'regular',
            status: 'active',
            progress: 75,
            grade: 89.5,
            gradeTrend: 'up',
            attendance: '95%',
            assignments: {
                total: 15,
                completed: 12,
                pending: 3
            },
            resources: {
                materials: 8,
                assignments: 15,
                quizzes: 5,
                announcements: 3
            },
            color: 'bg-purple-500',
            icon: 'fas fa-calculator',
            description: 'Kalkulus, Trigonometri, dan Aljabar Linear'
        },
        {
            id: 2,
            code: 'PHYS-XII',
            name: 'Fisika',
            teacher: {
                name: 'Pak Budi, M.Pd.',
                avatar: null,
                rating: 4.6
            },
            schedule: [
                { day: 'Selasa', time: '09:15 - 10:45' },
                { day: 'Kamis', time: '13:00 - 14:30' }
            ],
            room: 'LAB-302',
            type: 'lab',
            status: 'active',
            progress: 60,
            grade: 84.5,
            gradeTrend: 'up',
            attendance: '92%',
            assignments: {
                total: 12,
                completed: 8,
                pending: 4
            },
            resources: {
                materials: 6,
                assignments: 12,
                quizzes: 4,
                announcements: 2
            },
            color: 'bg-blue-500',
            icon: 'fas fa-atom',
            description: 'Mekanika, Termodinamika, dan Elektromagnetisme'
        },
        {
            id: 3,
            code: 'CHEM-XII',
            name: 'Kimia',
            teacher: {
                name: 'Bu Lisa, S.Si.',
                avatar: null,
                rating: 4.5
            },
            schedule: [
                { day: 'Rabu', time: '07:30 - 09:00' },
                { day: 'Jumat', time: '10:30 - 12:00' }
            ],
            room: 'LAB-303',
            type: 'lab',
            status: 'active',
            progress: 45,
            grade: 76.3,
            gradeTrend: 'down',
            attendance: '88%',
            assignments: {
                total: 10,
                completed: 5,
                pending: 5
            },
            resources: {
                materials: 5,
                assignments: 10,
                quizzes: 3,
                announcements: 2
            },
            color: 'bg-green-500',
            icon: 'fas fa-flask',
            description: 'Stoikiometri, Termokimia, dan Kesetimbangan Kimia'
        },
        {
            id: 4,
            code: 'BIO-XII',
            name: 'Biologi',
            teacher: {
                name: 'Bu Rina, M.Si.',
                avatar: null,
                rating: 4.7
            },
            schedule: [
                { day: 'Senin', time: '10:30 - 12:00' },
                { day: 'Kamis', time: '07:30 - 09:00' }
            ],
            room: 'LAB-304',
            type: 'lab',
            status: 'active',
            progress: 85,
            grade: 92.0,
            gradeTrend: 'up',
            attendance: '97%',
            assignments: {
                total: 8,
                completed: 7,
                pending: 1
            },
            resources: {
                materials: 7,
                assignments: 8,
                quizzes: 4,
                announcements: 3
            },
            color: 'bg-emerald-500',
            icon: 'fas fa-dna',
            description: 'Genetika, Ekologi, dan Fisiologi Tumbuhan'
        },
        {
            id: 5,
            code: 'ENG-XII',
            name: 'Bahasa Inggris',
            teacher: {
                name: 'Bu Maya, S.Pd.',
                avatar: null,
                rating: 4.4
            },
            schedule: [
                { day: 'Selasa', time: '13:00 - 14:30' },
                { day: 'Jumat', time: '09:15 - 10:45' }
            ],
            room: 'R-205',
            type: 'regular',
            status: 'active',
            progress: 70,
            grade: 81.8,
            gradeTrend: 'stable',
            attendance: '94%',
            assignments: {
                total: 10,
                completed: 7,
                pending: 3
            },
            resources: {
                materials: 6,
                assignments: 10,
                quizzes: 4,
                announcements: 2
            },
            color: 'bg-red-500',
            icon: 'fas fa-language',
            description: 'Reading Comprehension, Writing, dan Conversation'
        },
        {
            id: 6,
            code: 'IND-XII',
            name: 'Bahasa Indonesia',
            teacher: {
                name: 'Pak Agus, S.Pd.',
                avatar: null,
                rating: 4.3
            },
            schedule: [
                { day: 'Rabu', time: '13:00 - 14:30' },
                { day: 'Jumat', time: '07:30 - 09:00' }
            ],
            room: 'R-206',
            type: 'regular',
            status: 'active',
            progress: 80,
            grade: 87.2,
            gradeTrend: 'up',
            attendance: '96%',
            assignments: {
                total: 8,
                completed: 6,
                pending: 2
            },
            resources: {
                materials: 5,
                assignments: 8,
                quizzes: 3,
                announcements: 1
            },
            color: 'bg-orange-500',
            icon: 'fas fa-book',
            description: 'Sastra, Tata Bahasa, dan Menulis Kreatif'
        }
    ]);

    const [selectedClass, setSelectedClass] = useState(null);
    const [viewMode, setViewMode] = useState('grid'); // 'grid', 'list', 'compact'

    const getStatusColor = (status) => {
        const colors = {
            active: 'bg-green-100 text-green-700 border-green-200',
            inactive: 'bg-gray-100 text-gray-700 border-gray-200',
            completed: 'bg-blue-100 text-blue-700 border-blue-200',
            upcoming: 'bg-yellow-100 text-yellow-700 border-yellow-200'
        };
        return colors[status] || 'bg-gray-100 text-gray-700 border-gray-200';
    };

    const getTypeColor = (type) => {
        const colors = {
            regular: 'bg-primary/10 text-primary border-primary/20',
            lab: 'bg-green-100 text-green-700 border-green-200',
            online: 'bg-blue-100 text-blue-700 border-blue-200',
            project: 'bg-purple-100 text-purple-700 border-purple-200'
        };
        return colors[type] || 'bg-gray-100 text-gray-700 border-gray-200';
    };

    const getTypeLabel = (type) => {
        const labels = {
            regular: 'Reguler',
            lab: 'Praktikum',
            online: 'Online',
            project: 'Project'
        };
        return labels[type] || type;
    };

    const getTrendIcon = (trend) => {
        if (trend === 'up') return <i className="fas fa-arrow-up text-green-500"></i>;
        if (trend === 'down') return <i className="fas fa-arrow-down text-red-500"></i>;
        return <i className="fas fa-minus text-gray-500"></i>;
    };

    const handleClassClick = (classItem) => {
        setSelectedClass(selectedClass?.id === classItem.id ? null : classItem);
    };

    const getNextSession = (schedule) => {
        const days = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
        const today = new Date().getDay();
        
        // Find next session
        for (let i = 0; i < 7; i++) {
            const dayIndex = (today + i) % 7;
            const dayName = days[dayIndex];
            const session = schedule.find(s => s.day === dayName);
            if (session) {
                return {
                    day: session.day,
                    time: session.time,
                    isToday: i === 0
                };
            }
        }
        return null;
    };

    return (
        <div className="bg-white rounded-2xl shadow-sm border border-neutral-200 p-6">
            <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-bold text-neutral-900">Mata Pelajaran</h3>
                <div className="flex items-center space-x-4">
                    <span className="text-sm text-neutral-600">
                        {classes.length} mata pelajaran
                    </span>
                    <div className="flex bg-neutral-100 rounded-lg p-1">
                        <button
                            onClick={() => setViewMode('grid')}
                            className={`px-3 py-1 rounded-md ${viewMode === 'grid' ? 'bg-white shadow' : 'hover:bg-neutral-200'}`}
                        >
                            <i className="fas fa-th-large"></i>
                        </button>
                        <button
                            onClick={() => setViewMode('list')}
                            className={`px-3 py-1 rounded-md ${viewMode === 'list' ? 'bg-white shadow' : 'hover:bg-neutral-200'}`}
                        >
                            <i className="fas fa-list"></i>
                        </button>
                        <button
                            onClick={() => setViewMode('compact')}
                            className={`px-3 py-1 rounded-md ${viewMode === 'compact' ? 'bg-white shadow' : 'hover:bg-neutral-200'}`}
                        >
                            <i className="fas fa-compress"></i>
                        </button>
                    </div>
                </div>
            </div>

            {/* Grid View */}
            {viewMode === 'grid' && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {classes.map((classItem) => {
                        const nextSession = getNextSession(classItem.schedule);
                        const progressPercentage = classItem.progress;
                        
                        return (
                            <div 
                                key={classItem.id}
                                className={`border rounded-2xl overflow-hidden hover:shadow-md transition-shadow cursor-pointer ${
                                    selectedClass?.id === classItem.id 
                                        ? 'border-primary ring-2 ring-primary/20' 
                                        : 'border-neutral-200'
                                }`}
                                onClick={() => handleClassClick(classItem)}
                            >
                                {/* Class Header */}
                                <div className={`${classItem.color} p-4 text-white`}>
                                    <div className="flex justify-between items-start mb-4">
                                        <div>
                                            <div className="text-xs opacity-90 mb-1">{classItem.code}</div>
                                            <h4 className="text-xl font-bold">{classItem.name}</h4>
                                        </div>
                                        <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                                            <i className={`${classItem.icon} text-xl`}></i>
                                        </div>
                                    </div>
                                    <p className="text-sm opacity-90">{classItem.description}</p>
                                </div>

                                {/* Class Details */}
                                <div className="p-4 bg-white">
                                    {/* Teacher Info */}
                                    <div className="flex items-center mb-4">
                                        <div className="w-10 h-10 bg-neutral-100 rounded-full flex items-center justify-center mr-3">
                                            <i className="fas fa-user-tie text-neutral-600"></i>
                                        </div>
                                        <div className="flex-1">
                                            <div className="font-medium text-neutral-900">{classItem.teacher.name}</div>
                                            <div className="flex items-center text-sm text-neutral-600">
                                                <i className="fas fa-star text-yellow-500 mr-1"></i>
                                                {classItem.teacher.rating}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Schedule */}
                                    {nextSession && (
                                        <div className="mb-4 p-3 bg-neutral-50 rounded-lg">
                                            <div className="flex items-center justify-between mb-2">
                                                <div className="flex items-center">
                                                    <i className="fas fa-calendar-day text-primary mr-2"></i>
                                                    <span className="font-medium text-neutral-900">
                                                        {nextSession.isToday ? 'Hari Ini' : nextSession.day}
                                                    </span>
                                                </div>
                                                <span className="text-sm text-neutral-600">{nextSession.time}</span>
                                            </div>
                                            <div className="flex items-center text-sm text-neutral-600">
                                                <i className="fas fa-door-open mr-2"></i>
                                                <span>{classItem.room}</span>
                                                <span className="mx-2">•</span>
                                                <span className={`px-2 py-1 rounded-md text-xs ${getTypeColor(classItem.type)}`}>
                                                    {getTypeLabel(classItem.type)}
                                                </span>
                                            </div>
                                        </div>
                                    )}

                                    {/* Progress Stats */}
                                    <div className="mb-4">
                                        <div className="flex justify-between text-sm text-neutral-600 mb-1">
                                            <span>Progress Kelas</span>
                                            <span>{progressPercentage}%</span>
                                        </div>
                                        <div className="w-full bg-neutral-200 rounded-full h-2">
                                            <div 
                                                className={`h-2 rounded-full ${classItem.color}`}
                                                style={{ width: `${progressPercentage}%` }}
                                            ></div>
                                        </div>
                                    </div>

                                    {/* Quick Stats */}
                                    <div className="grid grid-cols-3 gap-2 text-center">
                                        <div className="p-2 bg-neutral-50 rounded-lg">
                                            <div className="text-lg font-bold text-neutral-900">{classItem.grade}</div>
                                            <div className="text-xs text-neutral-600">Nilai</div>
                                        </div>
                                        <div className="p-2 bg-neutral-50 rounded-lg">
                                            <div className="text-lg font-bold text-neutral-900">{classItem.attendance}</div>
                                            <div className="text-xs text-neutral-600">Hadir</div>
                                        </div>
                                        <div className="p-2 bg-neutral-50 rounded-lg">
                                            <div className="text-lg font-bold text-neutral-900">
                                                {classItem.assignments.completed}/{classItem.assignments.total}
                                            </div>
                                            <div className="text-xs text-neutral-600">Tugas</div>
                                        </div>
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="mt-4 flex space-x-2">
                                        <button className="flex-1 px-3 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark text-sm">
                                            <i className="fas fa-door-open mr-1"></i>
                                            Masuk Kelas
                                        </button>
                                        <button className="px-3 py-2 border border-neutral-300 rounded-lg hover:bg-neutral-50">
                                            <i className="fas fa-ellipsis-h"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            )}

            {/* List View */}
            {viewMode === 'list' && (
                <div className="space-y-4">
                    {classes.map((classItem) => {
                        const nextSession = getNextSession(classItem.schedule);
                        
                        return (
                            <div 
                                key={classItem.id}
                                className={`border rounded-xl p-4 hover:bg-neutral-50 cursor-pointer ${
                                    selectedClass?.id === classItem.id 
                                        ? 'border-primary bg-primary/5' 
                                        : 'border-neutral-200'
                                }`}
                                onClick={() => handleClassClick(classItem)}
                            >
                                <div className="flex items-center">
                                    {/* Class Icon */}
                                    <div className={`w-14 h-14 ${classItem.color} rounded-xl flex items-center justify-center mr-4`}>
                                        <i className={`${classItem.icon} text-white text-xl`}></i>
                                    </div>

                                    {/* Class Info */}
                                    <div className="flex-1">
                                        <div className="flex items-center mb-1">
                                            <h4 className="text-lg font-bold text-neutral-900 mr-3">
                                                {classItem.name}
                                            </h4>
                                            <span className="text-sm text-neutral-600">{classItem.code}</span>
                                        </div>
                                        <div className="flex items-center space-x-4 text-sm text-neutral-600">
                                            <div className="flex items-center">
                                                <i className="fas fa-user-tie mr-1"></i>
                                                <span>{classItem.teacher.name}</span>
                                            </div>
                                            <div className="flex items-center">
                                                <i className="fas fa-star text-yellow-500 mr-1"></i>
                                                <span>{classItem.teacher.rating}</span>
                                            </div>
                                            <span className={`px-2 py-1 rounded-md text-xs ${getTypeColor(classItem.type)}`}>
                                                {getTypeLabel(classItem.type)}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Schedule Info */}
                                    {nextSession && (
                                        <div className="text-right mr-6">
                                            <div className="font-medium text-neutral-900">
                                                {nextSession.isToday ? 'Hari Ini' : nextSession.day}
                                            </div>
                                            <div className="text-sm text-neutral-600">{nextSession.time}</div>
                                            <div className="text-sm text-neutral-500">{classItem.room}</div>
                                        </div>
                                    )}

                                    {/* Grade and Progress */}
                                    <div className="text-right mr-6">
                                        <div className="text-xl font-bold text-neutral-900">
                                            {classItem.grade}
                                            <span className="ml-1 text-sm">
                                                {getTrendIcon(classItem.gradeTrend)}
                                            </span>
                                        </div>
                                        <div className="text-sm text-neutral-600">Nilai</div>
                                    </div>

                                    {/* Progress Bar */}
                                    <div className="w-32 mr-6">
                                        <div className="flex justify-between text-xs text-neutral-600 mb-1">
                                            <span>Progress</span>
                                            <span>{classItem.progress}%</span>
                                        </div>
                                        <div className="w-full bg-neutral-200 rounded-full h-2">
                                            <div 
                                                className={`h-2 rounded-full ${classItem.color}`}
                                                style={{ width: `${classItem.progress}%` }}
                                            ></div>
                                        </div>
                                    </div>

                                    {/* Action Button */}
                                    <button className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark">
                                        Masuk
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                </div>
            )}

            {/* Compact View */}
            {viewMode === 'compact' && (
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                    {classes.map((classItem) => (
                        <div 
                            key={classItem.id}
                            className={`border rounded-xl p-4 text-center cursor-pointer hover:shadow-md ${
                                selectedClass?.id === classItem.id 
                                    ? 'border-primary ring-2 ring-primary/20' 
                                    : 'border-neutral-200'
                            }`}
                            onClick={() => handleClassClick(classItem)}
                            title={classItem.name}
                        >
                            <div className={`w-12 h-12 ${classItem.color} rounded-xl flex items-center justify-center mx-auto mb-3`}>
                                <i className={`${classItem.icon} text-white text-lg`}></i>
                            </div>
                            <h5 className="font-medium text-neutral-900 truncate mb-1">
                                {classItem.name}
                            </h5>
                            <div className="text-xs text-neutral-600 truncate mb-2">
                                {classItem.teacher.name.split(',')[0]}
                            </div>
                            <div className={`px-2 py-1 rounded-md text-xs ${getTypeColor(classItem.type)} mx-auto`}>
                                {getTypeLabel(classItem.type).substring(0, 3)}
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {/* Selected Class Details Modal */}
            {selectedClass && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
                        <div className="p-6">
                            {/* Modal Header */}
                            <div className="flex justify-between items-start mb-6">
                                <div>
                                    <h3 className="text-2xl font-bold text-neutral-900">
                                        {selectedClass.name}
                                    </h3>
                                    <p className="text-neutral-600">{selectedClass.code}</p>
                                </div>
                                <button
                                    onClick={() => setSelectedClass(null)}
                                    className="p-2 rounded-lg hover:bg-neutral-100"
                                >
                                    <i className="fas fa-times text-xl text-neutral-600"></i>
                                </button>
                            </div>

                            {/* Detailed Class Information */}
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                {/* Left Column - Class Details */}
                                <div>
                                    {/* Description */}
                                    <div className="mb-6">
                                        <h4 className="font-medium text-neutral-900 mb-3">Deskripsi Kelas</h4>
                                        <p className="text-neutral-700 bg-neutral-50 p-4 rounded-lg">
                                            {selectedClass.description}
                                        </p>
                                    </div>

                                    {/* Schedule */}
                                    <div className="mb-6">
                                        <h4 className="font-medium text-neutral-900 mb-3">Jadwal Kelas</h4>
                                        <div className="space-y-2">
                                            {selectedClass.schedule.map((session, index) => (
                                                <div key={index} className="flex items-center justify-between p-3 bg-neutral-50 rounded-lg">
                                                    <div className="flex items-center">
                                                        <i className="fas fa-calendar-day text-primary mr-3"></i>
                                                        <span className="font-medium">{session.day}</span>
                                                    </div>
                                                    <div className="text-right">
                                                        <div className="font-medium text-neutral-900">{session.time}</div>
                                                        <div className="text-sm text-neutral-600">{selectedClass.room}</div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Teacher Info */}
                                    <div>
                                        <h4 className="font-medium text-neutral-900 mb-3">Informasi Guru</h4>
                                        <div className="p-4 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl">
                                            <div className="flex items-center">
                                                <div className="w-16 h-16 bg-primary/20 rounded-xl flex items-center justify-center mr-4">
                                                    <i className="fas fa-user-tie text-primary text-2xl"></i>
                                                </div>
                                                <div>
                                                    <div className="text-xl font-bold text-neutral-900">
                                                        {selectedClass.teacher.name}
                                                    </div>
                                                    <div className="flex items-center text-neutral-600">
                                                        <i className="fas fa-star text-yellow-500 mr-1"></i>
                                                        <span className="mr-4">{selectedClass.teacher.rating} Rating</span>
                                                        <i className="fas fa-graduation-cap mr-1"></i>
                                                        <span>Pengalaman 10+ tahun</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Right Column - Stats & Actions */}
                                <div>
                                    {/* Performance Stats */}
                                    <div className="mb-6">
                                        <h4 className="font-medium text-neutral-900 mb-3">Performance</h4>
                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="p-4 bg-green-50 rounded-xl text-center">
                                                <div className="text-2xl font-bold text-green-700">
                                                    {selectedClass.grade}
                                                </div>
                                                <div className="text-sm text-neutral-600">Nilai Rata-rata</div>
                                            </div>
                                            <div className="p-4 bg-blue-50 rounded-xl text-center">
                                                <div className="text-2xl font-bold text-blue-700">
                                                    {selectedClass.attendance}
                                                </div>
                                                <div className="text-sm text-neutral-600">Kehadiran</div>
                                            </div>
                                        </div>
                                        <div className="mt-4 p-4 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl">
                                            <div className="flex justify-between items-center">
                                                <div>
                                                    <div className="text-sm text-neutral-600">Progress Kelas</div>
                                                    <div className="text-2xl font-bold text-neutral-900">
                                                        {selectedClass.progress}%
                                                    </div>
                                                </div>
                                                <div className="w-20 h-20 relative">
                                                    <svg className="w-full h-full" viewBox="0 0 100 100">
                                                        <circle
                                                            cx="50"
                                                            cy="50"
                                                            r="45"
                                                            fill="none"
                                                            stroke="#e5e7eb"
                                                            strokeWidth="10"
                                                        />
                                                        <circle
                                                            cx="50"
                                                            cy="50"
                                                            r="45"
                                                            fill="none"
                                                            stroke="#3b82f6"
                                                            strokeWidth="10"
                                                            strokeLinecap="round"
                                                            strokeDasharray={`${selectedClass.progress * 2.83} 283`}
                                                            transform="rotate(-90 50 50)"
                                                        />
                                                    </svg>
                                                    <div className="absolute inset-0 flex items-center justify-center">
                                                        <span className="text-lg font-bold">{selectedClass.progress}%</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Resources Summary */}
                                    <div className="mb-6">
                                        <h4 className="font-medium text-neutral-900 mb-3">Resources</h4>
                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="p-3 bg-neutral-50 rounded-lg text-center">
                                                <div className="text-lg font-bold text-neutral-900">
                                                    {selectedClass.resources.materials}
                                                </div>
                                                <div className="text-sm text-neutral-600">Materi</div>
                                            </div>
                                            <div className="p-3 bg-neutral-50 rounded-lg text-center">
                                                <div className="text-lg font-bold text-neutral-900">
                                                    {selectedClass.resources.assignments}
                                                </div>
                                                <div className="text-sm text-neutral-600">Tugas</div>
                                            </div>
                                            <div className="p-3 bg-neutral-50 rounded-lg text-center">
                                                <div className="text-lg font-bold text-neutral-900">
                                                    {selectedClass.resources.quizzes}
                                                </div>
                                                <div className="text-sm text-neutral-600">Kuis</div>
                                            </div>
                                            <div className="p-3 bg-neutral-50 rounded-lg text-center">
                                                <div className="text-lg font-bold text-neutral-900">
                                                    {selectedClass.resources.announcements}
                                                </div>
                                                <div className="text-sm text-neutral-600">Pengumuman</div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="space-y-3">
                                        <button className="w-full px-4 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark flex items-center justify-center">
                                            <i className="fas fa-door-open mr-2"></i>
                                            Masuk ke Kelas
                                        </button>
                                        <div className="grid grid-cols-2 gap-3">
                                            <button className="px-4 py-2 border border-neutral-300 rounded-lg hover:bg-neutral-50 flex items-center justify-center">
                                                <i className="fas fa-download mr-2"></i>
                                                Download Materi
                                            </button>
                                            <button className="px-4 py-2 border border-neutral-300 rounded-lg hover:bg-neutral-50 flex items-center justify-center">
                                                <i className="fas fa-calendar-plus mr-2"></i>
                                                Tambah Jadwal
                                            </button>
                                        </div>
                                        <button className="w-full px-4 py-2 border border-neutral-300 rounded-lg hover:bg-neutral-50 flex items-center justify-center">
                                            <i className="fas fa-ellipsis-h mr-2"></i>
                                            Lainnya
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}