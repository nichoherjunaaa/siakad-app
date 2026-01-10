// resources/js/Components/Grades/GradeStatistics.jsx
import { useState } from 'react';

export default function GradeStatistics() {
    const [stats] = useState({
        distribution: [
            { grade: 'A', count: 5, percentage: 50, color: 'bg-green-500' },
            { grade: 'B', count: 3, percentage: 30, color: 'bg-blue-500' },
            { grade: 'C', count: 2, percentage: 20, color: 'bg-yellow-500' },
            { grade: 'D', count: 0, percentage: 0, color: 'bg-orange-500' },
            { grade: 'E', count: 0, percentage: 0, color: 'bg-red-500' }
        ],
        averages: {
            you: 85.5,
            class: 82.3,
            school: 80.1
        },
        targets: {
            current: 85.5,
            target: 90.0,
            gap: 4.5
        },
        improvements: [
            { subject: 'Matematika', improvement: '+4.5', trend: 'up' },
            { subject: 'Fisika', improvement: '+3.2', trend: 'up' },
            { subject: 'Kimia', improvement: '-2.1', trend: 'down' },
            { subject: 'Biologi', improvement: '+6.8', trend: 'up' }
        ]
    });

    const getGradeLabel = (grade) => {
        const labels = {
            A: 'Sangat Baik (90-100)',
            B: 'Baik (80-89)',
            C: 'Cukup (70-79)',
            D: 'Kurang (60-69)',
            E: 'Sangat Kurang (<60)'
        };
        return labels[grade] || grade;
    };

    const calculateCompletion = () => {
        const completed = stats.distribution.filter(g => g.grade === 'A' || g.grade === 'B').reduce((sum, g) => sum + g.count, 0);
        const total = stats.distribution.reduce((sum, g) => sum + g.count, 0);
        return (completed / total * 100).toFixed(0);
    };

    return (
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-neutral-200">
            <h3 className="text-lg font-bold text-neutral-900 mb-6">Statistik & Analisis</h3>

            {/* Grade Distribution */}
            <div className="mb-6">
                <h4 className="font-medium text-neutral-900 mb-4">Distribusi Nilai Huruf</h4>
                <div className="space-y-3">
                    {stats.distribution.map((item) => (
                        <div key={item.grade}>
                            <div className="flex justify-between text-sm mb-1">
                                <div className="flex items-center">
                                    <div className={`w-3 h-3 ${item.color} rounded-sm mr-2`}></div>
                                    <span className="font-medium">{item.grade}</span>
                                    <span className="text-neutral-500 ml-2">
                                        {getGradeLabel(item.grade)}
                                    </span>
                                </div>
                                <div className="text-neutral-700">
                                    {item.count} mapel ({item.percentage}%)
                                </div>
                            </div>
                            <div className="w-full bg-neutral-200 rounded-full h-2">
                                <div
                                    className={`h-2 rounded-full ${item.color}`}
                                    style={{ width: `${item.percentage}%` }}
                                ></div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="mt-4 p-3 bg-green-50 rounded-lg">
                    <div className="flex items-center justify-between">
                        <div>
                            <div className="text-sm text-neutral-600">Kelulusan Minimum</div>
                            <div className="text-lg font-bold text-green-700">{calculateCompletion()}%</div>
                        </div>
                        <div className="text-right">
                            <div className="text-sm text-neutral-600">Mapel Lulus</div>
                            <div className="text-lg font-medium text-green-700">
                                {stats.distribution.filter(g => g.grade === 'A' || g.grade === 'B').reduce((sum, g) => sum + g.count, 0)}/
                                {stats.distribution.reduce((sum, g) => sum + g.count, 0)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Comparison Averages */}
            <div className="mb-6">
                <h4 className="font-medium text-neutral-900 mb-4">Perbandingan Rata-rata</h4>
                <div className="grid grid-cols-3 gap-4">
                    <div className="text-center p-3 bg-blue-50 rounded-xl">
                        <div className="text-sm text-neutral-600 mb-1">Anda</div>
                        <div className="text-2xl font-bold text-blue-700">{stats.averages.you}</div>
                    </div>
                    <div className="text-center p-3 bg-purple-50 rounded-xl">
                        <div className="text-sm text-neutral-600 mb-1">Kelas</div>
                        <div className="text-2xl font-bold text-purple-700">{stats.averages.class}</div>
                    </div>
                    <div className="text-center p-3 bg-green-50 rounded-xl">
                        <div className="text-sm text-neutral-600 mb-1">Sekolah</div>
                        <div className="text-2xl font-bold text-green-700">{stats.averages.school}</div>
                    </div>
                </div>
                <div className="mt-3 text-center text-sm text-neutral-600">
                    {stats.averages.you > stats.averages.class ? (
                        <span className="text-green-600">
                            🎉 {Math.abs(stats.averages.you - stats.averages.class).toFixed(1)} poin di atas rata-rata kelas
                        </span>
                    ) : (
                        <span className="text-orange-600">
                            📈 {Math.abs(stats.averages.you - stats.averages.class).toFixed(1)} poin di bawah rata-rata kelas
                        </span>
                    )}
                </div>
            </div>

            {/* Target Achievement */}
            <div className="mb-6">
                <h4 className="font-medium text-neutral-900 mb-4">Pencapaian Target</h4>
                <div className="p-4 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl">
                    <div className="flex items-center justify-between mb-3">
                        <div>
                            <div className="text-sm text-neutral-600">Target Semester</div>
                            <div className="text-xl font-bold text-neutral-900">{stats.targets.target}</div>
                        </div>
                        <div className="text-right">
                            <div className="text-sm text-neutral-600">Saat Ini</div>
                            <div className="text-xl font-bold text-primary">{stats.targets.current}</div>
                        </div>
                    </div>
                    <div className="w-full bg-neutral-200 rounded-full h-3">
                        <div
                            className="h-3 bg-gradient-to-r from-primary to-secondary rounded-full"
                            style={{ width: `${(stats.targets.current / stats.targets.target) * 100}%` }}
                        ></div>
                    </div>
                    <div className="flex justify-between text-xs text-neutral-500 mt-2">
                        <span>0</span>
                        <span>{stats.targets.gap} poin menuju target</span>
                        <span>{stats.targets.target}</span>
                    </div>
                </div>
            </div>

            {/* Improvement Areas */}
            <div>
                <h4 className="font-medium text-neutral-900 mb-4">Area Peningkatan</h4>
                <div className="space-y-3">
                    {stats.improvements.map((item) => (
                        <div key={item.subject} className="flex items-center justify-between p-3 bg-neutral-50 rounded-lg">
                            <div className="flex items-center">
                                <div className={`w-10 h-10 rounded-lg ${item.trend === 'up' ? 'bg-green-100' : 'bg-red-100'} flex items-center justify-center mr-3`}>
                                    <i className={`fas fa-${item.trend === 'up' ? 'arrow-up text-green-600' : 'arrow-down text-red-600'}`}></i>
                                </div>
                                <div>
                                    <div className="font-medium text-neutral-900">{item.subject}</div>
                                    <div className="text-sm text-neutral-600">
                                        {item.trend === 'up' ? 'Meningkat' : 'Menurun'} dari sebelumnya
                                    </div>
                                </div>
                            </div>
                            <div className={`text-lg font-bold ${item.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                                {item.improvement}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Recommendations */}
            <div className="mt-6 pt-6 border-t border-neutral-200">
                <h4 className="font-medium text-neutral-900 mb-3">Rekomendasi</h4>
                <div className="space-y-2">
                    <div className="flex items-start text-sm">
                        <i className="fas fa-lightbulb text-yellow-500 mt-0.5 mr-2"></i>
                        <span className="text-neutral-700">
                            Fokus pada Kimia yang mengalami penurunan 2.1 poin
                        </span>
                    </div>
                    <div className="flex items-start text-sm">
                        <i className="fas fa-chart-line text-blue-500 mt-0.5 mr-2"></i>
                        <span className="text-neutral-700">
                            Pertahankan performa Biologi yang meningkat 6.8 poin
                        </span>
                    </div>
                    <div className="flex items-start text-sm">
                        <i className="fas fa-bullseye text-purple-500 mt-0.5 mr-2"></i>
                        <span className="text-neutral-700">
                            Butuh 4.5 poin lagi untuk mencapai target semester
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}