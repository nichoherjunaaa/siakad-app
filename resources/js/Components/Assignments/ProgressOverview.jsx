// resources/js/Components/Assignments/ProgressOverview.jsx
import { useState, useEffect } from 'react';

export default function ProgressOverview() {
    const [timeRange, setTimeRange] = useState('month'); // 'week', 'month', 'semester'
    const [progressData, setProgressData] = useState([]);

    useEffect(() => {
        // Generate sample progress data based on time range
        const generateData = () => {
            let data = [];
            let labels = [];

            switch (timeRange) {
                case 'week':
                    labels = ['Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab', 'Min'];
                    data = [2, 3, 1, 4, 2, 1, 0]; // Assignments completed per day
                    break;
                case 'month':
                    labels = ['Minggu 1', 'Minggu 2', 'Minggu 3', 'Minggu 4'];
                    data = [8, 12, 10, 15]; // Assignments completed per week
                    break;
                case 'semester':
                    labels = ['Sep', 'Okt', 'Nov', 'Des', 'Jan', 'Feb'];
                    data = [25, 32, 28, 40, 35, 30]; // Assignments completed per month
                    break;
            }

            return { labels, data };
        };

        const { labels, data } = generateData();
        const chartData = labels.map((label, index) => ({
            label,
            completed: data[index],
            assigned: data[index] + Math.floor(Math.random() * 5) + 2 // Random assigned tasks
        }));

        setProgressData(chartData);
    }, [timeRange]);

    const calculateStats = () => {
        const totalCompleted = progressData.reduce((sum, item) => sum + item.completed, 0);
        const totalAssigned = progressData.reduce((sum, item) => sum + item.assigned, 0);
        const completionRate = totalAssigned > 0 ? ((totalCompleted / totalAssigned) * 100).toFixed(1) : 0;
        const avgCompletion = progressData.length > 0 ? (totalCompleted / progressData.length).toFixed(1) : 0;

        return { totalCompleted, totalAssigned, completionRate, avgCompletion };
    };

    const stats = calculateStats();
    const maxValue = Math.max(...progressData.map(d => d.assigned));

    return (
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-neutral-200">
            <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-bold text-neutral-900">Overview Progress</h3>
                <div className="flex space-x-1 bg-neutral-100 rounded-lg p-1">
                    {['week', 'month', 'semester'].map((range) => (
                        <button
                            key={range}
                            onClick={() => setTimeRange(range)}
                            className={`px-3 py-1 rounded-md text-sm capitalize ${timeRange === range
                                ? 'bg-white shadow'
                                : 'hover:bg-neutral-200'
                                }`}
                        >
                            {range === 'week' ? 'Minggu' : range === 'month' ? 'Bulan' : 'Semester'}
                        </button>
                    ))}
                </div>
            </div>

            {/* Stats Summary */}
            <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center p-3 bg-blue-50 rounded-xl">
                    <div className="text-2xl font-bold text-blue-700">{stats.totalCompleted}</div>
                    <div className="text-sm text-neutral-600">Tugas Selesai</div>
                </div>
                <div className="text-center p-3 bg-green-50 rounded-xl">
                    <div className="text-2xl font-bold text-green-700">{stats.completionRate}%</div>
                    <div className="text-sm text-neutral-600">Completion Rate</div>
                </div>
                <div className="text-center p-3 bg-purple-50 rounded-xl">
                    <div className="text-2xl font-bold text-purple-700">{stats.avgCompletion}</div>
                    <div className="text-sm text-neutral-600">Rata-rata per Periode</div>
                </div>
            </div>

            {/* Progress Chart */}
            <div className="mb-6">
                <div className="flex items-center justify-between mb-4">
                    <h4 className="font-medium text-neutral-900">Progress Penyelesaian Tugas</h4>
                    <div className="text-sm text-neutral-600">
                        {timeRange === 'week' ? 'Minggu Ini' :
                            timeRange === 'month' ? 'Bulan Ini' : 'Semester Ini'}
                    </div>
                </div>

                <div className="space-y-4">
                    {progressData.map((item, index) => {
                        const completionPercentage = (item.completed / item.assigned) * 100;
                        const assignedWidth = (item.assigned / maxValue) * 100;

                        return (
                            <div key={index}>
                                <div className="flex justify-between text-sm mb-1">
                                    <span className="font-medium text-neutral-900">{item.label}</span>
                                    <span className="text-neutral-600">
                                        {item.completed}/{item.assigned} tugas
                                    </span>
                                </div>

                                <div className="relative h-4 bg-neutral-200 rounded-full overflow-hidden">
                                    {/* Assigned tasks background */}
                                    <div
                                        className="absolute top-0 left-0 h-full bg-neutral-300"
                                        style={{ width: `${assignedWidth}%` }}
                                    ></div>

                                    {/* Completed tasks */}
                                    <div
                                        className="absolute top-0 left-0 h-full bg-gradient-to-r from-green-500 to-emerald-500"
                                        style={{ width: `${completionPercentage}%` }}
                                    ></div>
                                </div>

                                <div className="flex justify-between text-xs text-neutral-500 mt-1">
                                    <span>{completionPercentage.toFixed(0)}% selesai</span>
                                    <span>{item.assigned - item.completed} tertunda</span>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Performance Indicators */}
            <div className="pt-6 border-t border-neutral-200">
                <h4 className="font-medium text-neutral-900 mb-4">Indikator Performa</h4>
                <div className="grid grid-cols-2 gap-4">
                    <div className="p-3 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg">
                        <div className="flex items-center">
                            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mr-3">
                                <i className="fas fa-bolt text-primary"></i>
                            </div>
                            <div>
                                <div className="text-lg font-bold text-neutral-900">4.2</div>
                                <div className="text-sm text-neutral-600">Productivity Score</div>
                            </div>
                        </div>
                    </div>

                    <div className="p-3 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg">
                        <div className="flex items-center">
                            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                                <i className="fas fa-fire text-green-600"></i>
                            </div>
                            <div>
                                <div className="text-lg font-bold text-neutral-900">7 hari</div>
                                <div className="text-sm text-neutral-600">Streak Aktif</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Recommendations */}
            <div className="mt-6 pt-6 border-t border-neutral-200">
                <h4 className="font-medium text-neutral-900 mb-3">Rekomendasi</h4>
                <div className="space-y-2">
                    <div className="flex items-start text-sm">
                        <i className="fas fa-lightbulb text-yellow-500 mt-0.5 mr-2"></i>
                        <span className="text-neutral-700">
                            {stats.completionRate >= 80 ?
                                'Pertahankan momentum! Kamu sudah mencapai target.' :
                                'Fokus pada tugas yang tertunda untuk mencapai target 80% completion rate.'}
                        </span>
                    </div>
                    <div className="flex items-start text-sm">
                        <i className="fas fa-clock text-blue-500 mt-0.5 mr-2"></i>
                        <span className="text-neutral-700">
                            Rata-rata penyelesaian: {stats.avgCompletion} tugas per periode
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}