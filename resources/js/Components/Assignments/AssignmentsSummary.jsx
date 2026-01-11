// resources/js/Components/Assignments/AssignmentsSummary.jsx
import { useState } from 'react';

export default function AssignmentsSummary() {
    const [summary] = useState({
        byStatus: {
            completed: 9,
            inProgress: 3,
            notStarted: 2,
            overdue: 2
        },
        bySubject: {
            mathematics: 4,
            physics: 3,
            chemistry: 2,
            biology: 2,
            english: 2,
            indonesian: 1,
            history: 1
        },
        byPriority: {
            high: 3,
            medium: 7,
            low: 5
        },
        upcomingDeadlines: [
            { date: '15 Des 2023', count: 2 },
            { date: '20 Des 2023', count: 1 }
        ],
        averageCompletionTime: '2.5 hari',
        submissionRate: '93%'
    });

    const getStatusColor = (status) => {
        const colors = {
            completed: 'bg-green-100 text-green-700',
            inProgress: 'bg-blue-100 text-blue-700',
            notStarted: 'bg-gray-100 text-gray-700',
            overdue: 'bg-red-100 text-red-700'
        };
        return colors[status] || 'bg-gray-100 text-gray-700';
    };

    const getPriorityColor = (priority) => {
        const colors = {
            high: 'bg-red-100 text-red-700',
            medium: 'bg-yellow-100 text-yellow-700',
            low: 'bg-green-100 text-green-700'
        };
        return colors[priority] || 'bg-gray-100 text-gray-700';
    };

    const getSubjectColor = (subject) => {
        const colors = {
            mathematics: 'bg-purple-100 text-purple-700',
            physics: 'bg-blue-100 text-blue-700',
            chemistry: 'bg-green-100 text-green-700',
            biology: 'bg-emerald-100 text-emerald-700',
            english: 'bg-red-100 text-red-700',
            indonesian: 'bg-orange-100 text-orange-700',
            history: 'bg-amber-100 text-amber-700'
        };
        return colors[subject] || 'bg-gray-100 text-gray-700';
    };

    const calculateCompletionPercentage = () => {
        const total = Object.values(summary.byStatus).reduce((a, b) => a + b, 0);
        return ((summary.byStatus.completed / total) * 100).toFixed(1);
    };

    return (
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-neutral-200">
            <h3 className="text-lg font-bold text-neutral-900 mb-6">Ringkasan Tugas</h3>

            {/* Overview Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                {/* Completion Rate */}
                <div className="p-4 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl">
                    <div className="flex items-center justify-between">
                        <div>
                            <div className="text-2xl font-bold text-neutral-900">
                                {calculateCompletionPercentage()}%
                            </div>
                            <div className="text-sm text-neutral-600">Completion Rate</div>
                        </div>
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                            <i className="fas fa-chart-pie text-primary text-xl"></i>
                        </div>
                    </div>
                </div>

                {/* Average Time */}
                <div className="p-4 bg-blue-50 rounded-xl">
                    <div className="flex items-center justify-between">
                        <div>
                            <div className="text-2xl font-bold text-blue-700">
                                {summary.averageCompletionTime}
                            </div>
                            <div className="text-sm text-neutral-600">Rata-rata Penyelesaian</div>
                        </div>
                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                            <i className="fas fa-clock text-blue-600 text-xl"></i>
                        </div>
                    </div>
                </div>

                {/* Submission Rate */}
                <div className="p-4 bg-green-50 rounded-xl">
                    <div className="flex items-center justify-between">
                        <div>
                            <div className="text-2xl font-bold text-green-700">
                                {summary.submissionRate}
                            </div>
                            <div className="text-sm text-neutral-600">Submission Rate</div>
                        </div>
                        <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                            <i className="fas fa-paper-plane text-green-600 text-xl"></i>
                        </div>
                    </div>
                </div>

                {/* Upcoming Deadlines */}
                <div className="p-4 bg-orange-50 rounded-xl">
                    <div className="flex items-center justify-between">
                        <div>
                            <div className="text-2xl font-bold text-orange-700">
                                {summary.upcomingDeadlines.reduce((sum, item) => sum + item.count, 0)}
                            </div>
                            <div className="text-sm text-neutral-600">Deadline Mendatang</div>
                        </div>
                        <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                            <i className="fas fa-calendar-exclamation text-orange-600 text-xl"></i>
                        </div>
                    </div>
                </div>
            </div>

            {/* Detailed Breakdown */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Status Distribution */}
                <div>
                    <h4 className="font-medium text-neutral-900 mb-4">Distribusi Status</h4>
                    <div className="space-y-3">
                        {Object.entries(summary.byStatus).map(([status, count]) => (
                            <div key={status}>
                                <div className="flex justify-between text-sm mb-1">
                                    <div className="flex items-center">
                                        <span className={`px-2 py-1 rounded-md text-xs font-medium ${getStatusColor(status)} mr-2`}>
                                            {status === 'completed' ? 'Selesai' :
                                                status === 'inProgress' ? 'Dalam Proses' :
                                                    status === 'notStarted' ? 'Belum Dimulai' :
                                                        'Terlambat'}
                                        </span>
                                        <span className="text-neutral-700">{count} tugas</span>
                                    </div>
                                    <div className="text-neutral-600">
                                        {((count / Object.values(summary.byStatus).reduce((a, b) => a + b, 0)) * 100).toFixed(0)}%
                                    </div>
                                </div>
                                <div className="w-full bg-neutral-200 rounded-full h-2">
                                    <div
                                        className={`h-2 rounded-full ${status === 'completed' ? 'bg-green-500' :
                                            status === 'inProgress' ? 'bg-blue-500' :
                                                status === 'notStarted' ? 'bg-gray-500' :
                                                    'bg-red-500'}`}
                                        style={{
                                            width: `${(count / Object.values(summary.byStatus).reduce((a, b) => a + b, 0)) * 100}%`
                                        }}
                                    ></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Subject Distribution */}
                <div>
                    <h4 className="font-medium text-neutral-900 mb-4">Distribusi Mapel</h4>
                    <div className="space-y-3">
                        {Object.entries(summary.bySubject).map(([subject, count]) => (
                            <div key={subject}>
                                <div className="flex justify-between text-sm mb-1">
                                    <div className="flex items-center">
                                        <span className={`px-2 py-1 rounded-md text-xs font-medium ${getSubjectColor(subject)} mr-2`}>
                                            {subject.charAt(0).toUpperCase() + subject.slice(1)}
                                        </span>
                                        <span className="text-neutral-700">{count} tugas</span>
                                    </div>
                                </div>
                                <div className="w-full bg-neutral-200 rounded-full h-2">
                                    <div
                                        className={`h-2 rounded-full ${subject === 'mathematics' ? 'bg-purple-500' :
                                            subject === 'physics' ? 'bg-blue-500' :
                                                subject === 'chemistry' ? 'bg-green-500' :
                                                    subject === 'biology' ? 'bg-emerald-500' :
                                                        subject === 'english' ? 'bg-red-500' :
                                                            subject === 'indonesian' ? 'bg-orange-500' :
                                                                'bg-amber-500'}`}
                                        style={{
                                            width: `${(count / Object.values(summary.bySubject).reduce((a, b) => a + b, 0)) * 100}%`
                                        }}
                                    ></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Priority Distribution */}
                <div>
                    <h4 className="font-medium text-neutral-900 mb-4">Distribusi Prioritas</h4>
                    <div className="space-y-3">
                        {Object.entries(summary.byPriority).map(([priority, count]) => (
                            <div key={priority}>
                                <div className="flex justify-between text-sm mb-1">
                                    <div className="flex items-center">
                                        <span className={`px-2 py-1 rounded-md text-xs font-medium ${getPriorityColor(priority)} mr-2`}>
                                            {priority === 'high' ? 'Tinggi' :
                                                priority === 'medium' ? 'Sedang' :
                                                    'Rendah'}
                                        </span>
                                        <span className="text-neutral-700">{count} tugas</span>
                                    </div>
                                </div>
                                <div className="w-full bg-neutral-200 rounded-full h-2">
                                    <div
                                        className={`h-2 rounded-full ${priority === 'high' ? 'bg-red-500' :
                                            priority === 'medium' ? 'bg-yellow-500' :
                                                'bg-green-500'}`}
                                        style={{
                                            width: `${(count / Object.values(summary.byPriority).reduce((a, b) => a + b, 0)) * 100}%`
                                        }}
                                    ></div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Upcoming Deadlines */}
                    <div className="mt-6 pt-6 border-t border-neutral-200">
                        <h5 className="font-medium text-neutral-900 mb-3">Deadline Mendatang</h5>
                        <div className="space-y-2">
                            {summary.upcomingDeadlines.map((item, index) => (
                                <div key={index} className="flex items-center justify-between p-2 bg-neutral-50 rounded-lg">
                                    <div className="flex items-center">
                                        <i className="fas fa-calendar-day text-orange-500 mr-2"></i>
                                        <span className="text-sm text-neutral-700">{item.date}</span>
                                    </div>
                                    <span className="text-sm font-medium text-neutral-900">
                                        {item.count} tugas
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}