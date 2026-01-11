// resources/js/Components/Assignments/SubmissionStats.jsx
import { useState } from 'react';

export default function SubmissionStats() {
    const [stats] = useState({
        submissionTiming: {
            early: 6,
            onTime: 3,
            late: 2,
            veryLate: 1
        },
        qualityMetrics: {
            averageScore: 85.5,
            highestScore: 98,
            lowestScore: 72,
            improvement: '+5.2%'
        },
        submissionPattern: [
            { day: 'Senin', submissions: 8 },
            { day: 'Selasa', submissions: 6 },
            { day: 'Rabu', submissions: 10 },
            { day: 'Kamis', submissions: 7 },
            { day: 'Jumat', submissions: 5 },
            { day: 'Sabtu', submissions: 3 },
            { day: 'Minggu', submissions: 1 }
        ],
        submissionMethods: {
            online: 12,
            offline: 3,
            email: 2
        },
        teacherFeedback: [
            { teacher: 'Bu Sari, S.Pd.', responseTime: '1.5 hari', rating: 4.5 },
            { teacher: 'Pak Budi, M.Pd.', responseTime: '2 hari', rating: 4.2 },
            { teacher: 'Bu Lisa, S.Si.', responseTime: '3 hari', rating: 4.0 }
        ]
    });

    const getTimingColor = (timing) => {
        const colors = {
            early: 'bg-green-100 text-green-700 border-green-200',
            onTime: 'bg-blue-100 text-blue-700 border-blue-200',
            late: 'bg-orange-100 text-orange-700 border-orange-200',
            veryLate: 'bg-red-100 text-red-700 border-red-200'
        };
        return colors[timing];
    };

    const getTimingText = (timing) => {
        const texts = {
            early: 'Lebih Awal',
            onTime: 'Tepat Waktu',
            late: 'Terlambat',
            veryLate: 'Sangat Terlambat'
        };
        return texts[timing];
    };

    const getTimingIcon = (timing) => {
        const icons = {
            early: 'fas fa-check-double',
            onTime: 'fas fa-check',
            late: 'fas fa-exclamation',
            veryLate: 'fas fa-times'
        };
        return icons[timing];
    };

    const calculateTotalSubmissions = () => {
        return Object.values(stats.submissionTiming).reduce((a, b) => a + b, 0);
    };

    const calculateTimingPercentage = (timing) => {
        const total = calculateTotalSubmissions();
        return ((stats.submissionTiming[timing] / total) * 100).toFixed(1);
    };

    const maxSubmissions = Math.max(...stats.submissionPattern.map(p => p.submissions));

    return (
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-neutral-200">
            <h3 className="text-lg font-bold text-neutral-900 mb-6">Statistik Pengumpulan</h3>

            {/* Submission Timing */}
            <div className="mb-6">
                <h4 className="font-medium text-neutral-900 mb-4">Waktu Pengumpulan</h4>
                <div className="grid grid-cols-4 gap-2">
                    {Object.entries(stats.submissionTiming).map(([timing, count]) => (
                        <div
                            key={timing}
                            className={`p-3 border rounded-lg text-center ${getTimingColor(timing)}`}
                        >
                            <i className={`${getTimingIcon(timing)} text-lg mb-2`}></i>
                            <div className="text-xl font-bold">{count}</div>
                            <div className="text-sm">{getTimingText(timing)}</div>
                            <div className="text-xs opacity-75 mt-1">
                                {calculateTimingPercentage(timing)}%
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Quality Metrics */}
            <div className="mb-6">
                <h4 className="font-medium text-neutral-900 mb-4">Kualitas Pengumpulan</h4>
                <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl">
                        <div className="flex items-center justify-between">
                            <div>
                                <div className="text-2xl font-bold text-neutral-900">
                                    {stats.qualityMetrics.averageScore}
                                </div>
                                <div className="text-sm text-neutral-600">Rata-rata Nilai</div>
                            </div>
                            <div className="text-right">
                                <div className="text-sm text-green-600">
                                    {stats.qualityMetrics.improvement}
                                </div>
                                <div className="text-xs text-neutral-500">
                                    dari periode lalu
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                        <div className="p-3 bg-green-50 rounded-lg">
                            <div className="text-sm text-neutral-600">Tertinggi</div>
                            <div className="text-lg font-bold text-green-700">
                                {stats.qualityMetrics.highestScore}
                            </div>
                        </div>
                        <div className="p-3 bg-orange-50 rounded-lg">
                            <div className="text-sm text-neutral-600">Terendah</div>
                            <div className="text-lg font-bold text-orange-700">
                                {stats.qualityMetrics.lowestScore}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Submission Pattern */}
            <div className="mb-6">
                <h4 className="font-medium text-neutral-900 mb-4">Pola Pengumpulan per Hari</h4>
                <div className="space-y-3">
                    {stats.submissionPattern.map((pattern) => (
                        <div key={pattern.day}>
                            <div className="flex justify-between text-sm mb-1">
                                <span className="text-neutral-700">{pattern.day}</span>
                                <span className="font-medium text-neutral-900">
                                    {pattern.submissions} pengumpulan
                                </span>
                            </div>
                            <div className="w-full bg-neutral-200 rounded-full h-2">
                                <div
                                    className="h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                                    style={{ width: `${(pattern.submissions / maxSubmissions) * 100}%` }}
                                ></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Submission Methods */}
            <div className="mb-6">
                <h4 className="font-medium text-neutral-900 mb-4">Metode Pengumpulan</h4>
                <div className="grid grid-cols-3 gap-2">
                    <div className="p-3 bg-blue-50 rounded-lg text-center">
                        <i className="fas fa-laptop text-blue-600 text-lg mb-2"></i>
                        <div className="text-xl font-bold text-blue-700">
                            {stats.submissionMethods.online}
                        </div>
                        <div className="text-sm text-neutral-600">Online</div>
                    </div>
                    <div className="p-3 bg-green-50 rounded-lg text-center">
                        <i className="fas fa-print text-green-600 text-lg mb-2"></i>
                        <div className="text-xl font-bold text-green-700">
                            {stats.submissionMethods.offline}
                        </div>
                        <div className="text-sm text-neutral-600">Offline</div>
                    </div>
                    <div className="p-3 bg-purple-50 rounded-lg text-center">
                        <i className="fas fa-envelope text-purple-600 text-lg mb-2"></i>
                        <div className="text-xl font-bold text-purple-700">
                            {stats.submissionMethods.email}
                        </div>
                        <div className="text-sm text-neutral-600">Email</div>
                    </div>
                </div>
            </div>

            {/* Teacher Feedback */}
            <div>
                <h4 className="font-medium text-neutral-900 mb-4">Respons Guru</h4>
                <div className="space-y-3">
                    {stats.teacherFeedback.map((teacher, index) => (
                        <div key={index} className="flex items-center justify-between p-3 bg-neutral-50 rounded-lg">
                            <div className="flex items-center">
                                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mr-3">
                                    <i className="fas fa-user-tie text-primary"></i>
                                </div>
                                <div>
                                    <div className="font-medium text-neutral-900">{teacher.teacher}</div>
                                    <div className="text-sm text-neutral-600">
                                        Response: {teacher.responseTime}
                                    </div>
                                </div>
                            </div>
                            <div className="text-right">
                                <div className="flex items-center">
                                    <i className="fas fa-star text-yellow-500 mr-1"></i>
                                    <span className="font-medium text-neutral-900">{teacher.rating}</span>
                                </div>
                                <div className="text-xs text-neutral-500">Rating</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Insights */}
            <div className="mt-6 pt-6 border-t border-neutral-200">
                <h4 className="font-medium text-neutral-900 mb-3">Insights</h4>
                <div className="space-y-2">
                    <div className="flex items-center text-sm">
                        <i className="fas fa-trophy text-green-500 mr-2"></i>
                        <span className="text-neutral-700">
                            {calculateTimingPercentage('early')}% tugas dikumpulkan lebih awal
                        </span>
                    </div>
                    <div className="flex items-center text-sm">
                        <i className="fas fa-chart-line text-blue-500 mr-2"></i>
                        <span className="text-neutral-700">
                            Produktif di hari Rabu dengan {Math.max(...stats.submissionPattern.map(p => p.submissions))} pengumpulan
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}