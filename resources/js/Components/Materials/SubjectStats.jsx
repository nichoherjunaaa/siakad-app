// resources/js/Components/Materials/SubjectStats.jsx
import { useState } from 'react';

export default function SubjectStats() {
    const [stats] = useState([
        { subject: 'Matematika', count: 12, downloaded: 8, color: 'bg-blue-500' },
        { subject: 'Fisika', count: 8, downloaded: 5, color: 'bg-purple-500' },
        { subject: 'Kimia', count: 6, downloaded: 4, color: 'bg-green-500' },
        { subject: 'Biologi', count: 7, downloaded: 6, color: 'bg-yellow-500' },
        { subject: 'Bahasa Inggris', count: 9, downloaded: 7, color: 'bg-red-500' },
        { subject: 'Sejarah', count: 5, downloaded: 3, color: 'bg-orange-500' }
    ]);

    const totalMaterials = stats.reduce((sum, stat) => sum + stat.count, 0);
    const totalDownloaded = stats.reduce((sum, stat) => sum + stat.downloaded, 0);
    const completionRate = ((totalDownloaded / totalMaterials) * 100).toFixed(1);

    const getSubjectIcon = (subject) => {
        const icons = {
            Matematika: 'fas fa-calculator',
            Fisika: 'fas fa-atom',
            Kimia: 'fas fa-flask',
            Biologi: 'fas fa-dna',
            'Bahasa Inggris': 'fas fa-language',
            Sejarah: 'fas fa-landmark'
        };
        return icons[subject] || 'fas fa-book';
    };

    return (
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-neutral-200">
            <h3 className="text-lg font-bold text-neutral-900 mb-6">Statistik per Mata Pelajaran</h3>

            {/* Overall Stats */}
            <div className="mb-6">
                <div className="flex items-center justify-between mb-4">
                    <div>
                        <div className="text-2xl font-bold text-neutral-900">{totalMaterials}</div>
                        <div className="text-sm text-neutral-600">Total Materi</div>
                    </div>
                    <div className="text-right">
                        <div className="text-2xl font-bold text-green-600">{completionRate}%</div>
                        <div className="text-sm text-neutral-600">Telah Didownload</div>
                    </div>
                </div>
                <div className="w-full bg-neutral-200 rounded-full h-3">
                    <div
                        className="h-3 bg-gradient-to-r from-primary to-secondary rounded-full"
                        style={{ width: `${completionRate}%` }}
                    ></div>
                </div>
            </div>

            {/* Subject Breakdown */}
            <div className="space-y-4">
                {stats.map((stat) => {
                    const percentage = ((stat.downloaded / stat.count) * 100).toFixed(0);

                    return (
                        <div key={stat.subject} className="space-y-2">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <i className={`${getSubjectIcon(stat.subject)} mr-2 text-neutral-500`}></i>
                                    <span className="font-medium text-sm text-neutral-900">
                                        {stat.subject}
                                    </span>
                                </div>
                                <div className="text-sm text-neutral-600">
                                    {stat.downloaded}/{stat.count}
                                </div>
                            </div>
                            <div className="w-full bg-neutral-100 rounded-full h-2">
                                <div
                                    className={`h-2 rounded-full ${stat.color}`}
                                    style={{ width: `${percentage}%` }}
                                ></div>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Insights */}
            <div className="mt-6 pt-6 border-t border-neutral-200">
                <h4 className="font-medium text-neutral-900 mb-3">Insights</h4>
                <div className="space-y-2">
                    <div className="flex items-center text-sm">
                        <i className="fas fa-trophy text-yellow-500 mr-2"></i>
                        <span className="text-neutral-700">
                            Matematika memiliki materi terbanyak ({stats[0].count})
                        </span>
                    </div>
                    <div className="flex items-center text-sm">
                        <i className="fas fa-download text-green-500 mr-2"></i>
                        <span className="text-neutral-700">
                            Biologi memiliki tingkat download tertinggi (86%)
                        </span>
                    </div>
                    <div className="flex items-center text-sm">
                        <i className="fas fa-clock text-orange-500 mr-2"></i>
                        <span className="text-neutral-700">
                            Sejarah perlu lebih banyak download (60%)
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}