// resources/js/Components/Classes/ClassesSummary.jsx
import { useState } from 'react';

export default function ClassesSummary() {
    const [summary] = useState({
        byDay: {
            Monday: 2,
            Tuesday: 3,
            Wednesday: 2,
            Thursday: 2,
            Friday: 1,
            Saturday: 0,
            Sunday: 0
        },
        byType: {
            regular: 8,
            lab: 2,
            online: 3,
            project: 2
        },
        progress: {
            completed: 2,
            ongoing: 6,
            upcoming: 2
        },
        schedule: {
            earliest: '07:30',
            latest: '15:45',
            totalHours: '32 jam/minggu'
        },
        performance: {
            bestSubject: 'Matematika',
            worstSubject: 'Kimia',
            attendance: '95%',
            participation: '88%'
        }
    });

    const dayLabels = {
        Monday: 'Senin',
        Tuesday: 'Selasa',
        Wednesday: 'Rabu',
        Thursday: 'Kamis',
        Friday: 'Jumat',
        Saturday: 'Sabtu',
        Sunday: 'Minggu'
    };

    const getDayColor = (day) => {
        const colors = {
            Monday: 'bg-blue-500',
            Tuesday: 'bg-green-500',
            Wednesday: 'bg-yellow-500',
            Thursday: 'bg-orange-500',
            Friday: 'bg-red-500',
            Saturday: 'bg-purple-500',
            Sunday: 'bg-pink-500'
        };
        return colors[day] || 'bg-gray-500';
    };

    const getTypeColor = (type) => {
        const colors = {
            regular: 'bg-primary',
            lab: 'bg-green-500',
            online: 'bg-blue-500',
            project: 'bg-purple-500'
        };
        return colors[type] || 'bg-gray-500';
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

    const getProgressColor = (status) => {
        const colors = {
            completed: 'bg-green-500',
            ongoing: 'bg-blue-500',
            upcoming: 'bg-yellow-500'
        };
        return colors[status] || 'bg-gray-500';
    };

    const getProgressLabel = (status) => {
        const labels = {
            completed: 'Selesai',
            ongoing: 'Berjalan',
            upcoming: 'Akan Datang'
        };
        return labels[status] || status;
    };

    const totalClasses = Object.values(summary.byDay).reduce((a, b) => a + b, 0);

    return (
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-neutral-200 mb-6">
            <h3 className="text-lg font-bold text-neutral-900 mb-6">Ringkasan Kelas</h3>
            
            {/* Overview Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-6">
                <div className="p-4 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl">
                    <div className="flex items-center justify-between">
                        <div>
                            <div className="text-2xl font-bold text-neutral-900">
                                {totalClasses}
                            </div>
                            <div className="text-sm text-neutral-600">Kelas per Minggu</div>
                        </div>
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                            <i className="fas fa-calendar-alt text-primary text-xl"></i>
                        </div>
                    </div>
                </div>

                <div className="p-4 bg-green-50 rounded-xl">
                    <div className="flex items-center justify-between">
                        <div>
                            <div className="text-2xl font-bold text-green-700">
                                {summary.schedule.totalHours}
                            </div>
                            <div className="text-sm text-neutral-600">Total Jam</div>
                        </div>
                        <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                            <i className="fas fa-clock text-green-600 text-xl"></i>
                        </div>
                    </div>
                </div>

                <div className="p-4 bg-blue-50 rounded-xl">
                    <div className="flex items-center justify-between">
                        <div>
                            <div className="text-2xl font-bold text-blue-700">
                                {summary.performance.attendance}
                            </div>
                            <div className="text-sm text-neutral-600">Kehadiran</div>
                        </div>
                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                            <i className="fas fa-user-check text-blue-600 text-xl"></i>
                        </div>
                    </div>
                </div>

                <div className="p-4 bg-orange-50 rounded-xl">
                    <div className="flex items-center justify-between">
                        <div>
                            <div className="text-2xl font-bold text-orange-700">
                                {summary.performance.participation}
                            </div>
                            <div className="text-sm text-neutral-600">Partisipasi</div>
                        </div>
                        <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                            <i className="fas fa-comments text-orange-600 text-xl"></i>
                        </div>
                    </div>
                </div>

                <div className="p-4 bg-purple-50 rounded-xl">
                    <div className="flex items-center justify-between">
                        <div>
                            <div className="text-2xl font-bold text-purple-700">
                                {summary.schedule.earliest} - {summary.schedule.latest}
                            </div>
                            <div className="text-sm text-neutral-600">Jam Kelas</div>
                        </div>
                        <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                            <i className="fas fa-business-time text-purple-600 text-xl"></i>
                        </div>
                    </div>
                </div>
            </div>

            {/* Detailed Breakdown */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Classes by Day */}
                <div>
                    <h4 className="font-medium text-neutral-900 mb-4">Kelas per Hari</h4>
                    <div className="space-y-3">
                        {Object.entries(summary.byDay).map(([day, count]) => (
                            <div key={day}>
                                <div className="flex justify-between text-sm mb-1">
                                    <div className="flex items-center">
                                        <div className={`w-3 h-3 ${getDayColor(day)} rounded-sm mr-2`}></div>
                                        <span className="text-neutral-700">{dayLabels[day]}</span>
                                    </div>
                                    <span className="font-medium text-neutral-900">{count} kelas</span>
                                </div>
                                <div className="w-full bg-neutral-200 rounded-full h-2">
                                    <div 
                                        className={`h-2 rounded-full ${getDayColor(day)}`}
                                        style={{ width: `${(count / Math.max(...Object.values(summary.byDay))) * 100}%` }}
                                    ></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Classes by Type */}
                <div>
                    <h4 className="font-medium text-neutral-900 mb-4">Jenis Kelas</h4>
                    <div className="space-y-3">
                        {Object.entries(summary.byType).map(([type, count]) => (
                            <div key={type}>
                                <div className="flex justify-between text-sm mb-1">
                                    <div className="flex items-center">
                                        <div className={`w-3 h-3 ${getTypeColor(type)} rounded-sm mr-2`}></div>
                                        <span className="text-neutral-700">{getTypeLabel(type)}</span>
                                    </div>
                                    <span className="font-medium text-neutral-900">{count} kelas</span>
                                </div>
                                <div className="w-full bg-neutral-200 rounded-full h-2">
                                    <div 
                                        className={`h-2 rounded-full ${getTypeColor(type)}`}
                                        style={{ width: `${(count / Object.values(summary.byType).reduce((a, b) => a + b, 0)) * 100}%` }}
                                    ></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Progress Status */}
                <div>
                    <h4 className="font-medium text-neutral-900 mb-4">Status Progress</h4>
                    <div className="space-y-3">
                        {Object.entries(summary.progress).map(([status, count]) => (
                            <div key={status}>
                                <div className="flex justify-between text-sm mb-1">
                                    <div className="flex items-center">
                                        <div className={`w-3 h-3 ${getProgressColor(status)} rounded-sm mr-2`}></div>
                                        <span className="text-neutral-700">{getProgressLabel(status)}</span>
                                    </div>
                                    <span className="font-medium text-neutral-900">{count} kelas</span>
                                </div>
                                <div className="w-full bg-neutral-200 rounded-full h-2">
                                    <div 
                                        className={`h-2 rounded-full ${getProgressColor(status)}`}
                                        style={{ width: `${(count / Object.values(summary.progress).reduce((a, b) => a + b, 0)) * 100}%` }}
                                    ></div>
                                </div>
                            </div>
                        ))}
                    </div>
                    
                    {/* Performance Highlights */}
                    <div className="mt-6 pt-6 border-t border-neutral-200">
                        <h5 className="font-medium text-neutral-900 mb-3">Performance Highlights</h5>
                        <div className="space-y-2">
                            <div className="flex items-center justify-between p-2 bg-green-50 rounded-lg">
                                <div className="flex items-center">
                                    <i className="fas fa-trophy text-green-600 mr-2"></i>
                                    <span className="text-sm text-neutral-700">Terbaik</span>
                                </div>
                                <span className="font-medium text-green-700">{summary.performance.bestSubject}</span>
                            </div>
                            <div className="flex items-center justify-between p-2 bg-orange-50 rounded-lg">
                                <div className="flex items-center">
                                    <i className="fas fa-chart-line text-orange-600 mr-2"></i>
                                    <span className="text-sm text-neutral-700">Perlu Perhatian</span>
                                </div>
                                <span className="font-medium text-orange-700">{summary.performance.worstSubject}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}